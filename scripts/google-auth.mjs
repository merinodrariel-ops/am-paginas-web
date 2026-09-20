/**
 * Autenticación con Google para los scripts de Search Console e indexación.
 *
 * Soporta dos métodos y prefiere el primero:
 *
 *   1. Cuenta de servicio (recomendado). Una credencial de máquina: se firma un
 *      JWT con la clave privada y se canjea por un access token. NO CADUCA.
 *   2. Refresh token de usuario (el método viejo). Se mantiene sólo como red
 *      durante la transición.
 *
 * Por qué se migró, el 2026-09-20: los refresh tokens de Google **caducan a los
 * 7 días** mientras la app de OAuth está en estado "Testing". Eso rompía la
 * indexación una y otra vez (`invalid_grant`), y publicar la app —la otra
 * salida— exigía crear una política de privacidad pública y pasar por la
 * pantalla de "app no verificada". Para un proceso automático que corre sin
 * nadie delante, la credencial correcta nunca fue la de un usuario.
 *
 * La cuenta de servicio no necesita rol de IAM en el proyecto: los permisos que
 * importan se otorgan **dentro de Search Console**, agregando su dirección de
 * correo como usuaria de cada propiedad. La Indexing API exige nivel
 * "Propietario"; los sitemaps se conforman con "Completo".
 *
 * Dónde se busca la clave, en orden:
 *   - `GOOGLE_SERVICE_ACCOUNT_JSON`  → el JSON entero (así viaja en GitHub Actions)
 *   - `GOOGLE_APPLICATION_CREDENTIALS` → ruta a un archivo
 *   - `.gsc-service-account.json` en la raíz del repo (local, gitignoreado, 0600)
 */

import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const SCOPES = {
  webmasters: "https://www.googleapis.com/auth/webmasters",
  indexing: "https://www.googleapis.com/auth/indexing",
};

const RAIZ = new URL("../", import.meta.url);
const CLAVE_LOCAL = fileURLToPath(new URL(".gsc-service-account.json", RAIZ));

function leerArchivo(ruta) {
  try {
    return readFileSync(ruta, "utf8");
  } catch {
    return null;
  }
}

/** Devuelve la credencial de cuenta de servicio, o null si no hay ninguna. */
export function leerCuentaDeServicio() {
  const crudo =
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON ||
    (process.env.GOOGLE_APPLICATION_CREDENTIALS && leerArchivo(process.env.GOOGLE_APPLICATION_CREDENTIALS)) ||
    leerArchivo(CLAVE_LOCAL);

  if (!crudo) return null;

  let cuenta;
  try {
    cuenta = JSON.parse(crudo);
  } catch {
    throw new Error("La credencial de cuenta de servicio no es JSON válido.");
  }
  if (!cuenta.client_email || !cuenta.private_key) {
    throw new Error("La credencial no tiene client_email / private_key: ¿es una clave de cuenta de servicio?");
  }
  return cuenta;
}

function base64url(dato) {
  return Buffer.from(dato).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function tokenPorCuentaDeServicio(cuenta, scopes) {
  const ahora = Math.floor(Date.now() / 1000);
  const encabezado = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const cuerpo = base64url(
    JSON.stringify({
      iss: cuenta.client_email,
      scope: scopes.join(" "),
      aud: "https://oauth2.googleapis.com/token",
      iat: ahora,
      exp: ahora + 3600,
    })
  );

  const firmador = createSign("RSA-SHA256");
  firmador.update(`${encabezado}.${cuerpo}`);
  // La clave llega con "\n" escapados cuando viaja por una variable de entorno.
  const firma = firmador.sign(cuenta.private_key.replace(/\\n/g, "\n"), "base64")
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${encabezado}.${cuerpo}.${firma}`,
    }),
  });

  const d = await r.json().catch(() => ({}));
  if (!r.ok || !d.access_token) {
    throw new Error(
      `Falló la autenticación con la cuenta de servicio (HTTP ${r.status}): ${JSON.stringify(d)}\n` +
        `   Cuenta: ${cuenta.client_email}`
    );
  }
  return d.access_token;
}

async function tokenPorRefreshToken({ clientId, clientSecret, refreshToken }) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok || !d.access_token) {
    const pista =
      d.error === "invalid_grant"
        ? "\n   El refresh token venció. Migrá a la cuenta de servicio: ver scripts/google-auth.mjs."
        : "";
    throw new Error(`Falló la autenticación con refresh token (HTTP ${r.status}): ${JSON.stringify(d)}${pista}`);
  }
  return d.access_token;
}

/**
 * Consigue un access token.
 *
 * @param {string[]} scopes  Permisos pedidos (ver `SCOPES`).
 * @param {object}  [respaldo] Credenciales de refresh token, si el script todavía
 *                             quiere poder funcionar sin cuenta de servicio.
 */
export async function getAccessToken(scopes, respaldo) {
  const cuenta = leerCuentaDeServicio();
  if (cuenta) return tokenPorCuentaDeServicio(cuenta, scopes);

  if (respaldo?.clientId && respaldo?.clientSecret && respaldo?.refreshToken) {
    return tokenPorRefreshToken(respaldo);
  }

  throw new Error(
    "No hay credenciales de Google.\n" +
      "   Esperaba una cuenta de servicio en GOOGLE_SERVICE_ACCOUNT_JSON o en .gsc-service-account.json."
  );
}
