/**
 * gsc-indexar-faltantes.mjs — revisa qué páginas del sitemap NO están indexadas
 * en Google y manda a indexar sólo esas.
 *
 *   node gsc-indexar-faltantes.mjs            # revisa y manda
 *   node gsc-indexar-faltantes.mjs --dry-run  # sólo informa, no manda nada
 *
 * Por qué existe: `gsc.mjs indexar` sin argumentos manda las ~107 URLs del
 * sitemap, y la Indexing API tiene un tope de 200 publish por día. Dos corridas
 * la agotan. Esto pregunta primero (URL Inspection API, cuota aparte de 2000/día)
 * y gasta la cuota cara sólo en lo que hace falta: lo habitual es 0-5 URLs.
 *
 * Pensado para correr como rutina diaria. Es idempotente: si está todo indexado,
 * no manda nada y lo dice.
 */
import { readFileSync } from "fs";

const SITE = "https://www.amesteticadental.com";
const PROPIEDAD = "sc-domain:amesteticadental.com";
const SITEMAP = `${SITE}/sitemap.xml`;
const DRY = process.argv.includes("--dry-run");
const CONCURRENCIA = 5;

// Estados de la URL Inspection API que cuentan como "ya indexada". El resto
// —"Descubierta: actualmente sin indexar", "Google no reconoce esta URL"— son
// los que vale la pena empujar.
const INDEXADA = /indexada|indexed/i;

const env = Object.fromEntries(
  readFileSync(new URL("./.env.ads", import.meta.url), "utf8")
    .split("\n").filter((l) => l && !l.startsWith("#")).map((l) => l.split("="))
);

async function getToken() {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.GOOGLE_ADS_CLIENT_ID,
      client_secret: env.GOOGLE_ADS_CLIENT_SECRET,
      refresh_token: env.GOOGLE_ADS_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const d = await r.json();
  if (!d.access_token) {
    console.error("\n❌ No se pudo renovar el token de Google:", JSON.stringify(d));
    console.error("   Si dice 'invalid_grant', el refresh token venció. Correr:");
    console.error("   node renovar-token-google.mjs\n");
    process.exit(1);
  }
  return d.access_token;
}

async function inspeccionar(url, token) {
  const r = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ inspectionUrl: url, siteUrl: PROPIEDAD, languageCode: "es" }),
  });
  const d = await r.json();
  if (d.error) return { url, estado: `ERROR: ${d.error.message.slice(0, 70)}`, indexada: null };
  const estado = d.inspectionResult?.indexStatusResult?.coverageState || "desconocido";
  return { url, estado, indexada: INDEXADA.test(estado) };
}

const token = await getToken();

const xml = await fetch(SITEMAP).then((r) => r.text());
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
console.log(`\n🔍 Revisando ${urls.length} URLs del sitemap...\n`);

const resultados = [];
for (let i = 0; i < urls.length; i += CONCURRENCIA) {
  const lote = urls.slice(i, i + CONCURRENCIA);
  resultados.push(...await Promise.all(lote.map((u) => inspeccionar(u, token))));
  process.stdout.write(`\r   ${Math.min(i + CONCURRENCIA, urls.length)}/${urls.length}`);
}
console.log("\n");

const faltantes = resultados.filter((r) => r.indexada === false);
const errores = resultados.filter((r) => r.indexada === null);
const ok = resultados.filter((r) => r.indexada === true).length;

console.log(`✅ indexadas: ${ok}   ⚠️  sin indexar: ${faltantes.length}   ❌ error: ${errores.length}`);
if (errores.length) errores.slice(0, 3).forEach((e) => console.log(`   ${e.estado}`));

if (faltantes.length === 0) {
  console.log("\n🎉 Está todo indexado. No hay nada que mandar.\n");
  process.exit(0);
}

console.log("\nSin indexar:");
faltantes.forEach((f) => console.log(`   · ${f.url.replace(SITE, "")} — ${f.estado}`));

if (DRY) {
  console.log("\n(--dry-run: no se mandó nada)\n");
  process.exit(0);
}

console.log(`\n📤 Mandando ${faltantes.length} a la Indexing API...\n`);
let enviadas = 0, sinCuota = false;
for (const f of faltantes) {
  const r = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ url: f.url, type: "URL_UPDATED" }),
  });
  const d = await r.json();
  if (r.ok) { console.log(`   ✅ ${f.url.replace(SITE, "")}`); enviadas++; }
  else {
    const msg = d.error?.message || "";
    if (/quota/i.test(msg)) { sinCuota = true; console.log("   ⏸  cuota diaria agotada — el resto queda para mañana"); break; }
    console.log(`   ⚠️  ${f.url.replace(SITE, "")} — ${msg.slice(0, 70)}`);
  }
  await new Promise((s) => setTimeout(s, 250));
}

console.log(`\n${enviadas} enviadas${sinCuota ? " (quedaron pendientes por cuota)" : ""}.`);
console.log("Google las procesa en las próximas horas.\n");
