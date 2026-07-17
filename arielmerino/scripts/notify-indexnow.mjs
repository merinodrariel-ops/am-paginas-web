#!/usr/bin/env node

const HOST = "www.arielmerino.com";
const KEY = "14c9604645864308b49cb8994e8d032c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const sitemapResponse = await fetch(SITEMAP_URL);
if (!sitemapResponse.ok) throw new Error(`No se pudo leer el sitemap (HTTP ${sitemapResponse.status})`);

const xml = await sitemapResponse.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
const response = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
});

if (!response.ok) {
  throw new Error(`IndexNow rechazó la solicitud (HTTP ${response.status}): ${await response.text()}`);
}

console.log(`IndexNow aceptó ${urls.length} URL(s) de arielmerino.com (HTTP ${response.status}).`);
