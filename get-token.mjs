import { createServer } from "http";
import { exec } from "child_process";
import { readFileSync } from "fs";

// Cargar .env.ads
const env = Object.fromEntries(
  readFileSync(new URL("./.env.ads", import.meta.url), "utf8")
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
const SCOPE = "https://www.googleapis.com/auth/adwords https://www.googleapis.com/auth/indexing https://www.googleapis.com/auth/webmasters";

const url = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT)}&scope=${encodeURIComponent(SCOPE)}&response_type=code&access_type=offline&prompt=consent`;

console.log("\n→ Abriendo navegador para autorizar...\n");
exec(`open "${url}"`);

const server = createServer(async (req, res) => {
  const code = new URL(req.url, REDIRECT).searchParams.get("code");
  if (!code) { res.end("Sin código"); return; }

  res.end("<h2>✓ Autorizado. Cerrá esta ventana y mirá la terminal.</h2>");
  server.close();

  const resp = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ code, client_id: CLIENT_ID, client_secret: CLIENT_SECRET, redirect_uri: REDIRECT, grant_type: "authorization_code" }),
  });

  const data = await resp.json();
  console.log("\n✓ REFRESH TOKEN:\n");
  console.log(data.refresh_token);
  console.log("\nCopiá ese token y pegalo en Claude.\n");
});

server.listen(3333);
