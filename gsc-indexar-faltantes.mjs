/**
 * gsc-indexar-faltantes.mjs — revisa qué páginas del sitemap NO están indexadas
 * en Google y manda a indexar sólo esas. Cubre los cuatro dominios de la red.
 *
 *   node gsc-indexar-faltantes.mjs            # los cuatro dominios
 *   node gsc-indexar-faltantes.mjs am         # sólo uno (am | uy | ariel | tdr)
 *   node gsc-indexar-faltantes.mjs --dry-run  # informa sin mandar nada
 *
 * Por qué existe: `gsc.mjs indexar` sin argumentos manda las ~107 URLs del
 * sitemap, y la Indexing API tiene un tope de 200 publish por día. Dos corridas
 * la agotan. Esto pregunta primero (URL Inspection API, cuota aparte de 2000/día)
 * y gasta la cuota cara sólo en lo que hace falta: lo habitual es 0-5 URLs.
 *
 * Pensado para correr como rutina semanal. Es idempotente: si está todo indexado,
 * no manda nada y lo dice.
 */
import { readFileSync } from "fs";

// Los cuatro dominios de la red, con su propiedad de Search Console. Las cuatro
// están verificadas bajo la misma cuenta, así que un solo token las cubre.
const SITIOS = {
  am:    { site: "https://www.amesteticadental.com", propiedad: "sc-domain:amesteticadental.com" },
  uy:    { site: "https://www.amesteticadental.uy",  propiedad: "sc-domain:amesteticadental.uy" },
  ariel: { site: "https://www.arielmerino.com",      propiedad: "sc-domain:arielmerino.com" },
  tdr:   { site: "https://www.thedentalreview.com",  propiedad: "sc-domain:thedentalreview.com" },
};

const DRY = process.argv.includes("--dry-run");
const pedido = process.argv.slice(2).find((a) => !a.startsWith("--"));
const aRevisar = pedido ? { [pedido]: SITIOS[pedido] } : SITIOS;
if (pedido && !SITIOS[pedido]) {
  console.error(`\n❌ "${pedido}" no es un sitio válido. Opciones: ${Object.keys(SITIOS).join(", ")}\n`);
  process.exit(1);
}
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

async function inspeccionar(url, token, propiedad) {
  const r = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ inspectionUrl: url, siteUrl: propiedad, languageCode: "es" }),
  });
  const d = await r.json();
  if (d.error) return { url, estado: `ERROR: ${d.error.message.slice(0, 70)}`, indexada: null };
  const estado = d.inspectionResult?.indexStatusResult?.coverageState || "desconocido";
  return { url, estado, indexada: INDEXADA.test(estado) };
}

const token = await getToken();
let totalEnviadas = 0, totalFaltantes = 0, cuotaAgotada = false;

for (const [clave, { site, propiedad }] of Object.entries(aRevisar)) {
  const dominio = site.replace("https://www.", "");
  const xml = await fetch(`${site}/sitemap.xml`).then((r) => r.text()).catch(() => "");
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) { console.log(`\n⚠️  ${dominio}: no pude leer el sitemap`); continue; }

  console.log(`\n🔍 ${dominio} — ${urls.length} URLs`);
  const resultados = [];
  for (let i = 0; i < urls.length; i += CONCURRENCIA) {
    const lote = urls.slice(i, i + CONCURRENCIA);
    resultados.push(...await Promise.all(lote.map((u) => inspeccionar(u, token, propiedad))));
    process.stdout.write(`\r   ${Math.min(i + CONCURRENCIA, urls.length)}/${urls.length}`);
  }

  const faltantes = resultados.filter((r) => r.indexada === false);
  const errores = resultados.filter((r) => r.indexada === null);
  const ok = resultados.filter((r) => r.indexada === true).length;
  totalFaltantes += faltantes.length;

  console.log(`\r   ✅ ${ok} indexadas   ⚠️  ${faltantes.length} sin indexar   ${errores.length ? "❌ " + errores.length + " error" : ""}`);
  if (errores.length) console.log(`      ${errores[0].estado}`);
  if (faltantes.length === 0) continue;

  faltantes.forEach((f) => console.log(`      · ${f.url.replace(site, "")} — ${f.estado}`));
  if (DRY || cuotaAgotada) continue;

  for (const f of faltantes) {
    const r = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ url: f.url, type: "URL_UPDATED" }),
    });
    const d = await r.json();
    if (r.ok) { console.log(`      📤 enviada: ${f.url.replace(site, "")}`); totalEnviadas++; }
    else {
      const msg = d.error?.message || "";
      if (/quota/i.test(msg)) { cuotaAgotada = true; console.log("      ⏸  cuota diaria agotada — el resto queda para la próxima corrida"); break; }
      console.log(`      ⚠️  ${f.url.replace(site, "")} — ${msg.slice(0, 70)}`);
    }
    await new Promise((s) => setTimeout(s, 250));
  }
}

console.log();
if (totalFaltantes === 0) console.log("🎉 Está todo indexado en los cuatro dominios. No hubo nada que mandar.\n");
else if (DRY) console.log(`(--dry-run: ${totalFaltantes} sin indexar, no se mandó nada)\n`);
else console.log(`${totalEnviadas} enviadas${cuotaAgotada ? " (quedaron pendientes por cuota)" : ""}. Google las procesa en las próximas horas.\n`);
