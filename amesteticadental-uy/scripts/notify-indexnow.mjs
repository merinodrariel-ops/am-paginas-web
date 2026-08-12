#!/usr/bin/env node
/**
 * Notifies IndexNow-compatible search engines about AM Uruguay URLs.
 */

const HOST = "www.amesteticadental.uy";
const KEY = "14c9604645864308b49cb8994e8d032c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

function toAbsolute(url) {
  if (url.startsWith("http")) return url;
  return `https://${HOST}${url.startsWith("/") ? "" : "/"}${url}`;
}

async function getSitemapUrls() {
  const response = await fetch(SITEMAP_URL, { redirect: "follow" });
  if (!response.ok) throw new Error(`No se pudo leer el sitemap (HTTP ${response.status})`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

async function main() {
  const cliUrls = process.argv.slice(2).map(toAbsolute);
  const urlList = cliUrls.length > 0 ? cliUrls : await getSitemapUrls();

  if (urlList.length === 0) {
    throw new Error("No hay URLs para notificar.");
  }

  console.log(`Notificando ${urlList.length} URL(s) de AM Uruguay a IndexNow...`);

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`IndexNow rechazo la solicitud (HTTP ${response.status}). ${body}`);
  }

  console.log(`IndexNow acepto las URLs de AM Uruguay (HTTP ${response.status}).`);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
