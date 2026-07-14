#!/usr/bin/env node
/**
 * notify-indexnow.mjs — Notifica URLs a IndexNow (Bing, Yandex, etc.) para indexación inmediata.
 *
 * Uso:
 *   node scripts/notify-indexnow.mjs
 *      → lee el sitemap en vivo y notifica TODAS las URLs.
 *
 *   node scripts/notify-indexnow.mjs /casos/mi-caso-nuevo /precio-carillas-dentales-buenos-aires
 *      → notifica solo esas URLs (paths relativos o absolutos).
 *
 * Nota: Google NO usa IndexNow. Para Google, el sitemap dinámico (src/app/sitemap.ts)
 * ya expone los casos nuevos automáticamente; la indexación la maneja Search Console.
 * Este script cubre Bing + Yandex + otros motores compatibles con IndexNow.
 */

const HOST = "www.amesteticadental.com";
const KEY = "14c9604645864308b49cb8994e8d032c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

function toAbsolute(url) {
  if (url.startsWith("http")) return url;
  return `https://${HOST}${url.startsWith("/") ? "" : "/"}${url}`;
}

async function getSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { redirect: "follow" });
  if (!res.ok) throw new Error(`No se pudo leer el sitemap (HTTP ${res.status})`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const cliUrls = process.argv.slice(2).map(toAbsolute);
  const urlList = cliUrls.length > 0 ? cliUrls : await getSitemapUrls();

  if (urlList.length === 0) {
    console.error("⚠️  No hay URLs para notificar.");
    process.exit(1);
  }

  console.log(`→ Notificando ${urlList.length} URL(s) a IndexNow...`);

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  if (res.ok) {
    console.log(`✅ IndexNow aceptó las URLs (HTTP ${res.status}). Bing las rastreará en breve.`);
  } else {
    const body = await res.text().catch(() => "");
    console.error(`❌ IndexNow rechazó la solicitud (HTTP ${res.status}). ${body}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
