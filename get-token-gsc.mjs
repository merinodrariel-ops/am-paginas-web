/**
 * Genera un refresh token de Google acotado a Search Console.
 *
 * Está pensado para el CI: por eso pide SOLO los permisos que el CI necesita.
 * El token que vive en `.env.ads` sirve técnicamente, pero incluye `adwords`
 * —puede gastar presupuesto de campañas— y este repo es público. Un token de CI
 * no tiene por qué poder tocar la plata.
 *
 * El resultado se escribe en `.env.gsc` (gitignoreado, permisos 0600) en vez de
 * imprimirse en pantalla, para que no quede pegado en un historial de terminal ni
 * en una conversación.
 *
 *   node get-token-gsc.mjs
 */
import { createServer } from "http";
import { exec } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";

const ENV_ADS = fileURLToPath(new URL("./.env.ads", import.meta.url));
const ENV_GSC = fileURLToPath(new URL("./.env.gsc", import.meta.url));

// El client_id / client_secret se reusan: identifican a la aplicación, no al
// permiso. Lo que cambia —y es lo que importa— es el scope que se autoriza.
const env = Object.fromEntries(
  readFileSync(ENV_ADS, "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i), l.slice(i + 1)];
    })
);

const CLIENT_ID = env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_ADS_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("\n❌ Faltan GOOGLE_ADS_CLIENT_ID o GOOGLE_ADS_CLIENT_SECRET en .env.ads\n");
  process.exit(1);
}

const REDIRECT = "http://localhost:3334";

// `webmasters` completo, NO `webmasters.readonly`: enviar un sitemap es una
// escritura y con el scope de sólo lectura la API responde 403.
const SCOPE = ["https://www.googleapis.com/auth/webmasters", "https://www.googleapis.com/auth/indexing"].join(" ");

const url =
  `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT)}` +
  `&scope=${encodeURIComponent(SCOPE)}` +
  `&response_type=code&access_type=offline&prompt=consent`;

console.log("\n→ Abriendo el navegador. Autorizá con la cuenta de Google que administra Search Console.");
console.log("  (es la misma donde están verificadas amesteticadental.com y .uy)\n");
exec(`open "${url}"`);

const server = createServer(async (req, res) => {
  const code = new URL(req.url, REDIRECT).searchParams.get("code");
  if (!code) {
    res.end("Sin código");
    return;
  }
  res.end("<h2>✓ Autorizado. Cerrá esta ventana y volvé a la terminal.</h2>");
  server.close();

  const resp = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT,
      grant_type: "authorization_code",
    }),
  });

  const data = await resp.json();

  if (!data.refresh_token) {
    console.error("\n❌ Google no devolvió un refresh token.");
    console.error("   Respuesta:", JSON.stringify(data));
    process.exit(1);
  }

  writeFileSync(
    ENV_GSC,
    [
      "# Credenciales de Search Console para el CI. Gitignoreado — nunca se commitea.",
      `# Generado el ${new Date().toISOString().slice(0, 10)} con scope: webmasters, indexing.`,
      `GOOGLE_SEARCH_CONSOLE_CLIENT_ID=${CLIENT_ID}`,
      `GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET=${CLIENT_SECRET}`,
      `GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN=${data.refresh_token}`,
      "",
    ].join("\n"),
    { mode: 0o600 }
  );

  console.log("\n✅ Listo. Las credenciales quedaron en .env.gsc (no se imprimen acá a propósito).");
  console.log("   Scopes autorizados:", (data.scope || "").replace(/https:\/\/www.googleapis.com\/auth\//g, ""));
  console.log("\n   Decile a Claude que ya está y las carga en GitHub.\n");
  process.exit(0);
});

server.listen(3334);
