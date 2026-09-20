#!/usr/bin/env node
/**
 * Diagnóstico de las credenciales de Google.
 *
 * Responde tres preguntas, en orden, y se detiene en la primera que falle:
 *   1. ¿Hay credencial, y de qué tipo?
 *   2. ¿Autentica contra Google?
 *   3. ¿Qué propiedades de Search Console ve?
 *
 * Existe porque el modo de fallar de esto es silencioso: cuando la credencial no
 * sirve, la API responde 401 y los scripts imprimen tablas vacías. Parece "no hay
 * datos" cuando en realidad es "no hay autenticación" — el mismo malentendido que
 * dejó los sitemaps sin enviar durante meses con el workflow en verde.
 *
 *   node scripts/verificar-credenciales-google.mjs
 */

import { getAccessToken, leerCuentaDeServicio, SCOPES } from "./google-auth.mjs";

const SITIOS = [
  "amesteticadental.com",
  "amesteticadental.uy",
  "thedentalreview.com",
  "arielmerino.com",
];

function salir(mensaje, codigo = 1) {
  console.error(`\n❌ ${mensaje}\n`);
  process.exit(codigo);
}

// ── 1. ¿Qué credencial hay? ──────────────────────────────────────────────────
let cuenta = null;
try {
  cuenta = leerCuentaDeServicio();
} catch (e) {
  salir(e.message);
}

if (cuenta) {
  console.log(`\n🔑 Cuenta de servicio: ${cuenta.client_email}`);
  console.log(`   Proyecto: ${cuenta.project_id ?? "(sin declarar)"}`);
} else {
  const hay = process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID || process.env.GOOGLE_ADS_CLIENT_ID;
  if (!hay) {
    salir(
      "No hay ninguna credencial.\n" +
        "   Falta .gsc-service-account.json en la raíz del repo.\n" +
        "   Ver docs/SETUP-SEARCH-CONSOLE.md"
    );
  }
  console.log("\n⚠️  No hay cuenta de servicio; se va a probar el refresh token viejo.");
  console.log("   Ese método caduca a los 7 días. Ver docs/SETUP-SEARCH-CONSOLE.md");
}

// ── 2. ¿Autentica? ───────────────────────────────────────────────────────────
let token;
try {
  token = await getAccessToken([SCOPES.webmasters, SCOPES.indexing], {
    clientId: process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID || process.env.GOOGLE_ADS_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET || process.env.GOOGLE_ADS_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN || process.env.GOOGLE_ADS_REFRESH_TOKEN,
  });
} catch (e) {
  salir(e.message);
}
console.log("✅ Autentica contra Google.");

// ── 3. ¿Qué propiedades ve? ──────────────────────────────────────────────────
const r = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
  headers: { Authorization: `Bearer ${token}` },
});
const cuerpo = await r.json().catch(() => ({}));

if (!r.ok) {
  salir(`Search Console respondió HTTP ${r.status}: ${JSON.stringify(cuerpo)}`);
}

const propiedades = (cuerpo.siteEntry || []).map((e) => e.siteUrl);

if (propiedades.length === 0) {
  salir(
    "Autentica, pero no ve NINGUNA propiedad.\n" +
      (cuenta
        ? `   Falta dar de alta ${cuenta.client_email} como usuaria en Search Console.\n` +
          "   En cada propiedad: Configuración → Usuarios y permisos → Agregar usuario (Propietario)."
        : "   La cuenta autenticada no administra ninguna propiedad.")
  );
}

console.log(`\n📋 Propiedades visibles (${propiedades.length}):`);
for (const p of propiedades) console.log(`   · ${p}`);

// Cada sitio de la red debería estar, como prefijo o como propiedad de dominio.
const faltantes = SITIOS.filter(
  (host) =>
    !propiedades.some(
      (p) => p === `https://www.${host}/` || p === `https://${host}/` || p === `sc-domain:${host}`
    )
);

if (faltantes.length > 0) {
  console.log(`\n⚠️  Sin acceso a ${faltantes.length} de los ${SITIOS.length} sitios de la red:`);
  for (const host of faltantes) console.log(`   · ${host}`);
  if (cuenta) {
    console.log(`\n   Agregá ${cuenta.client_email} como Propietario en esas propiedades.`);
  }
  process.exit(1);
}

console.log("\n✅ Los cuatro sitios de la red son accesibles.\n");
