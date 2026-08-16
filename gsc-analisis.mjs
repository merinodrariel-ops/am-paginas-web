import { readFileSync } from "fs";

const env = Object.fromEntries(
  readFileSync(new URL("./.env.ads", import.meta.url), "utf8")
    .split("\n").filter(l => l && !l.startsWith("#")).map(l => l.split("="))
);

const CLIENT_ID = env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_ADS_CLIENT_SECRET;
const REFRESH_TOKEN = env.GOOGLE_ADS_REFRESH_TOKEN;
const SITE = "sc-domain:amesteticadental.com";

async function getToken() {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, refresh_token: REFRESH_TOKEN, grant_type: "refresh_token" }),
  });
  return (await r.json()).access_token;
}

async function gscFetch(token, path, body) {
  const r = await fetch(`https://searchconsole.googleapis.com/webmasters/v3${path}`, {
    method: body ? "POST" : "GET",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  return r.json();
}

const token = await getToken();
const hoy = new Date();
const hace30 = new Date(hoy - 30 * 86400000);
const fmt = d => d.toISOString().split("T")[0];

console.log("\n═══════════════════════════════════════════");
console.log("  ANÁLISIS GSC — AM Estética Dental");
console.log("═══════════════════════════════════════════\n");

// 1. Performance general
const perf = await gscFetch(token, `/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
  startDate: fmt(hace30), endDate: fmt(hoy),
  dimensions: [],
});
if (perf.rows?.[0]) {
  const { clicks, impressions, ctr, position } = perf.rows[0];
  console.log("📊 PERFORMANCE ÚLTIMOS 30 DÍAS");
  console.log(`   Clics:        ${clicks.toLocaleString()}`);
  console.log(`   Impresiones:  ${impressions.toLocaleString()}`);
  console.log(`   CTR:          ${(ctr * 100).toFixed(2)}%`);
  console.log(`   Posición avg: ${position.toFixed(1)}\n`);
}

// 2. Top 10 páginas por clics
const porPagina = await gscFetch(token, `/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
  startDate: fmt(hace30), endDate: fmt(hoy),
  dimensions: ["page"], rowLimit: 10,
});
console.log("📄 TOP 10 PÁGINAS (por clics)");
(porPagina.rows || []).forEach(r => {
  const slug = r.keys[0].replace(SITE, "") || "/";
  console.log(`   ${r.clicks.toString().padStart(4)} clics  ${(r.ctr*100).toFixed(1)}% CTR  pos ${r.position.toFixed(0).padStart(3)}  ${slug}`);
});

// 3. Top keywords
const porQuery = await gscFetch(token, `/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
  startDate: fmt(hace30), endDate: fmt(hoy),
  dimensions: ["query"], rowLimit: 15,
});
console.log("\n🔑 TOP 15 KEYWORDS (por clics)");
(porQuery.rows || []).forEach(r => {
  console.log(`   ${r.clicks.toString().padStart(4)} clics  pos ${r.position.toFixed(0).padStart(3)}  "${r.keys[0]}"`);
});

// 4. Keywords con muchas impresiones pero bajo CTR (oportunidades)
const oportunidades = await gscFetch(token, `/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
  startDate: fmt(hace30), endDate: fmt(hoy),
  dimensions: ["query"], rowLimit: 50,
});
console.log("\n🎯 OPORTUNIDADES (alta impresión, CTR < 3%, posición < 20)");
(oportunidades.rows || [])
  .filter(r => r.impressions > 20 && r.ctr < 0.03 && r.position < 20)
  .slice(0, 10)
  .forEach(r => {
    console.log(`   ${r.impressions} imp  ${(r.ctr*100).toFixed(1)}% CTR  pos ${r.position.toFixed(0)}  "${r.keys[0]}"`);
  });

// 5. Dispositivos
const porDispositivo = await gscFetch(token, `/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
  startDate: fmt(hace30), endDate: fmt(hoy),
  dimensions: ["device"],
});
console.log("\n📱 TRÁFICO POR DISPOSITIVO");
(porDispositivo.rows || []).forEach(r => {
  console.log(`   ${r.keys[0].padEnd(10)} ${r.clicks} clics  ${(r.ctr*100).toFixed(2)}% CTR  pos ${r.position.toFixed(1)}`);
});

// 6. Países
const porPais = await gscFetch(token, `/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
  startDate: fmt(hace30), endDate: fmt(hoy),
  dimensions: ["country"], rowLimit: 8,
});
console.log("\n🌍 TRÁFICO POR PAÍS");
(porPais.rows || []).forEach(r => {
  console.log(`   ${r.keys[0].padEnd(15)} ${r.clicks} clics  ${r.impressions} imp`);
});

console.log("\n═══════════════════════════════════════════\n");
