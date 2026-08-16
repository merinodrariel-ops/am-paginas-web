/**
 * renovar-token-google.mjs — Renueva el refresh token de Google y lo guarda solo.
 *
 * Uso:  node renovar-token-google.mjs
 *
 * Abre el navegador, te logueás con tu cuenta de Google, y el token nuevo se
 * escribe DIRECTO en .env.ads (GOOGLE_ADS_REFRESH_TOKEN). No hay que copiar ni
 * pegar el token en ningún lado: nunca sale de tu máquina.
 *
 * Scopes: Google Ads + Indexing API + Search Console.
 */
import { createServer } from "http";
import { exec } from "child_process";
import { readFileSync, writeFileSync, copyFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";

// fileURLToPath y no .pathname: la ruta del proyecto tiene un espacio
// ("Proyectos Antigravity") y .pathname lo devuelve como %20, así que
// existsSync daba false y el writeFileSync fallaba con ENOENT.
const ENV_PATH = fileURLToPath(new URL("./.env.ads", import.meta.url));

// Cargar .env.ads
const env = Object.fromEntries(
  readFileSync(ENV_PATH, "utf8")
    .split("\n")
    .filter(l => l && !l.startsWith("#"))
    .map(l => l.split("="))
);

const CLIENT_ID = env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_ADS_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("\n❌ Faltan GOOGLE_ADS_CLIENT_ID o GOOGLE_ADS_CLIENT_SECRET en .env.ads\n");
  process.exit(1);
}

const REDIRECT = "http://localhost:3333";
const SCOPE = [
  "https://www.googleapis.com/auth/adwords",
  "https://www.googleapis.com/auth/indexing",
  "https://www.googleapis.com/auth/webmasters",
  // Lectura de GA4 (Admin + Data API) para el dashboard local.
  "https://www.googleapis.com/auth/analytics.readonly",
].join(" ");

const url =
  `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT)}` +
  `&scope=${encodeURIComponent(SCOPE)}` +
  `&response_type=code&access_type=offline&prompt=consent`;

console.log("\n→ Abriendo el navegador para que autorices con tu cuenta de Google...");
console.log("  (si no se abre solo, copiá y pegá esta URL en el navegador)\n");
console.log(url + "\n");
exec(`open "${url}"`);

const server = createServer(async (req, res) => {
  const code = new URL(req.url, REDIRECT).searchParams.get("code");
  if (!code) {
    res.end("Sin código de autorización.");
    return;
  }

  res.end("<h2>✓ Autorizado. Ya podés cerrar esta ventana y volver a la terminal.</h2>");
  server.close();

  try {
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
      console.error("\n❌ Google no devolvió un refresh token. Respuesta:", JSON.stringify(data));
      console.error("   Probá de nuevo (el flujo pide prompt=consent, así que debería darlo).\n");
      process.exit(1);
    }

    // Backup del .env.ads actual por las dudas
    if (existsSync(ENV_PATH)) copyFileSync(ENV_PATH, ENV_PATH + ".bak");

    const original = existsSync(ENV_PATH) ? readFileSync(ENV_PATH, "utf8") : "";
    const line = `GOOGLE_ADS_REFRESH_TOKEN=${data.refresh_token}`;
    const updated = /^GOOGLE_ADS_REFRESH_TOKEN=.*$/m.test(original)
      ? original.replace(/^GOOGLE_ADS_REFRESH_TOKEN=.*$/m, line)
      : (original.endsWith("\n") || original === "" ? original : original + "\n") + line + "\n";

    writeFileSync(ENV_PATH, updated, { mode: 0o600 });

    console.log("\n✅ Listo. El refresh token nuevo quedó guardado en .env.ads");
    console.log("   (se dejó una copia del anterior en .env.ads.bak)");
    console.log("\n   Probalo con:  node gsc.mjs estado\n");
  } catch (err) {
    console.error("\n❌ Error al canjear el código:", err.message, "\n");
    process.exit(1);
  }
});

server.listen(3333, () => {
  console.log("Esperando la autorización en http://localhost:3333 ...\n");
});
