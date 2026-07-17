#!/usr/bin/env node

const HOST = "www.thedentalreview.com";
const KEY = "14c9604645864308b49cb8994e8d032c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

async function getSitemapUrls() {
  const response = await fetch(SITEMAP_URL);
  if (!response.ok) throw new Error(`No se pudo leer el sitemap (HTTP ${response.status})`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

const urls = await getSitemapUrls();
const response = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
});

if (!response.ok) {
  throw new Error(`IndexNow rechazó la solicitud (HTTP ${response.status}): ${await response.text()}`);
}

console.log(`IndexNow aceptó ${urls.length} URL(s) de The Dental Review (HTTP ${response.status}).`);
