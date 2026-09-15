/**
 * CLI Google Search Console — AM Estética Dental
 *
 * Comandos:
 *   node gsc.mjs indexar <ruta...>  → indexa SOLO esas rutas (lo habitual)
 *   node gsc.mjs indexar --todo     → indexa las ~107 páginas del sitemap
 *   node gsc.mjs estado             → estado de notificación de cada URL
 *
 * Ejemplo:
 *   node gsc.mjs indexar /blog/mi-nota /en/blog/my-post
 *
 * Por qué hace falta elegir rutas: la Indexing API tiene un tope de 200 publish
 * por día. El sitemap ya tiene 107 URLs, así que "indexar todo" consume más de
 * la mitad de la cuota diaria de una sola vez y dos corridas la agotan — que es
 * exactamente lo que pasó el 15-sep-2026 al publicar una nota. Publicar una nota
 * nueva debería costar 1 request, no 107.
 */

import { readFileSync } from "fs";

const env = Object.fromEntries(
  readFileSync(new URL("./.env.ads", import.meta.url), "utf8")
    .split("\n").filter(l => l && !l.startsWith("#")).map(l => l.split("="))
);

const CLIENT_ID = env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = env.GOOGLE_ADS_CLIENT_SECRET;
const REFRESH_TOKEN = env.GOOGLE_ADS_REFRESH_TOKEN;
const SITE = "https://www.amesteticadental.com";
const SITEMAP_URL = `${SITE}/sitemap.xml`;

async function getUrlsFromSitemap() {
  try {
    const r = await fetch(SITEMAP_URL);
    const text = await r.text();
    const urls = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    return urls;
  } catch (e) {
    console.error("❌ Error cargando sitemap:", e.message);
    return [];
  }
}

async function getToken() {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const d = await r.json();
  if (!d.access_token) throw new Error("No access token: " + JSON.stringify(d));
  return d.access_token;
}

async function indexar(rutas) {
  let urls;
  if (rutas.length > 0) {
    // Se aceptan rutas ("/blog/x") o URLs completas.
    urls = rutas.map(r => (r.startsWith("http") ? r : `${SITE}${r.startsWith("/") ? r : "/" + r}`));
  } else {
    urls = await getUrlsFromSitemap();
    console.log(`\n⚠️  Sin rutas: se van a enviar las ${urls.length} URLs del sitemap.`);
    console.log("   La cuota diaria es de 200. Para indexar sólo lo que publicaste:");
    console.log("   node gsc.mjs indexar /blog/mi-nota\n");
  }
  if (urls.length === 0) return;

  const token = await getToken();
  console.log(`\n🔄 Solicitando indexación para ${urls.length} páginas...\n`);

  for (const url of urls) {
    const r = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });
    const d = await r.json();
    if (r.ok) {
      console.log(`  ✅ ${url.replace(SITE, "") || "/"}`);
    } else {
      console.log(`  ⚠️  ${url.replace(SITE, "") || "/"} — ${d.error?.message || JSON.stringify(d)}`);
    }
    await new Promise(res => setTimeout(res, 250)); // Un poco más de delay por seguridad
  }
  console.log("\n✓ Listo. Google procesará las solicitudes en los próximos minutos.\n");
}

async function estado() {
  const urls = await getUrlsFromSitemap();
  if (urls.length === 0) return;

  const token = await getToken();
  console.log("\n📊 Estado de notificación (vía API)\n");

  for (const url of urls) {
    const r = await fetch(
      `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const d = await r.json();
    if (r.ok && d.latestUpdate) {
      const tipo = d.latestUpdate.type === "URL_UPDATED" ? "✅" : "🗑";
      const fecha = new Date(d.latestUpdate.notifyTime).toLocaleDateString("es-AR");
      console.log(`  ${tipo} ${url.replace(SITE, "") || "/"} — ${fecha}`);
    } else {
      console.log(`  ❓ ${url.replace(SITE, "") || "/"} — sin datos recientes`);
    }
    await new Promise(res => setTimeout(res, 150));
  }
  console.log();
}

const [,, cmd, ...resto] = process.argv;
if (cmd === "estado") {
  await estado();
} else {
  // `--todo` fuerza el sitemap completo; si no, se indexan las rutas pasadas.
  const rutas = resto.filter(a => a !== "--todo");
  await indexar(resto.includes("--todo") ? [] : rutas);
}
