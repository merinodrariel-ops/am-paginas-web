#!/usr/bin/env node
/**
 * Avisa a los buscadores sobre TODAS las URLs de la red AM, de una sola pasada.
 *
 * Usa dos vías, porque hacen cosas distintas:
 *
 *  1. IndexNow (Bing, Yandex, Naver). Vía oficial y efectiva: los buscadores que
 *     participan rastrean lo notificado. Google NO participa.
 *
 *  2. Indexing API de Google. Ojo con esto: Google documenta que sólo la respeta
 *     para páginas de tipo JobPosting y BroadcastEvent. Para una página de
 *     tratamientos devuelve HTTP 200 igual, pero ese 200 significa "recibí el
 *     pedido", NO "la voy a indexar". Se llama porque no cuesta nada y hay
 *     indicios de que ayuda al descubrimiento, pero no reemplaza al sitemap ni al
 *     botón "Solicitar indexación" de Search Console, que sigue siendo manual.
 *
 * La vía que de verdad mueve la aguja en Google es el sitemap
 * (scripts/submit-google-sitemaps.mjs), que ya corre en cada deploy.
 *
 *   node scripts/indexar-red.mjs                    # toda la red
 *   node scripts/indexar-red.mjs amesteticadental.uy  # un solo sitio
 */
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

const SITIOS = [
  { host: "www.amesteticadental.com", key: "14c9604645864308b49cb8994e8d032c" },
  { host: "www.amesteticadental.uy", key: "14c9604645864308b49cb8994e8d032c" },
  { host: "www.thedentalreview.com", key: "14c9604645864308b49cb8994e8d032c" },
  { host: "www.arielmerino.com", key: "14c9604645864308b49cb8994e8d032c" },
];

function cargarEnv() {
  // Prioriza .env.gsc (token acotado a Search Console) sobre .env.ads (que además
  // puede gastar en Google Ads). Si ninguno está, sigue sólo con IndexNow.
  for (const archivo of [".env.gsc", ".env.ads"]) {
    try {
      const ruta = fileURLToPath(new URL(`../${archivo}`, import.meta.url));
      const env = Object.fromEntries(
        readFileSync(ruta, "utf8")
          .split("\n")
          .filter((l) => l && !l.startsWith("#"))
          .map((l) => {
            const i = l.indexOf("=");
            return [l.slice(0, i), l.slice(i + 1)];
          })
      );
      const id = env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID || env.GOOGLE_ADS_CLIENT_ID;
      const secret = env.GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET || env.GOOGLE_ADS_CLIENT_SECRET;
      const refresh = env.GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN || env.GOOGLE_ADS_REFRESH_TOKEN;
      if (id && secret && refresh) return { id, secret, refresh, archivo };
    } catch {
      // el archivo no existe en esta máquina; se prueba el siguiente
    }
  }
  return null;
}

async function getToken({ id, secret, refresh }) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: id, client_secret: secret, refresh_token: refresh, grant_type: "refresh_token" }),
  });
  const d = await r.json();
  if (!d.access_token) throw new Error(`No se pudo refrescar el token: ${d.error_description || d.error}`);
  return d.access_token;
}

async function urlsDelSitemap(host) {
  const r = await fetch(`https://${host}/sitemap.xml`, { redirect: "follow" });
  if (!r.ok) throw new Error(`sitemap HTTP ${r.status}`);
  const xml = await r.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function avisarIndexNow(host, key, urlList) {
  const r = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
  });
  return r.ok ? `aceptado (HTTP ${r.status})` : `rechazado (HTTP ${r.status})`;
}

async function avisarGoogle(token, urls) {
  let ok = 0;
  const errores = new Map();
  for (const url of urls) {
    const r = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });
    if (r.ok) ok++;
    else {
      const d = await r.json().catch(() => ({}));
      const msg = d.error?.message || `HTTP ${r.status}`;
      errores.set(msg, (errores.get(msg) || 0) + 1);
    }
    await new Promise((res) => setTimeout(res, 120));
  }
  return { ok, errores };
}

async function main() {
  const filtro = process.argv[2];
  const sitios = filtro ? SITIOS.filter((s) => s.host.includes(filtro)) : SITIOS;
  if (sitios.length === 0) throw new Error(`Ningún sitio coincide con "${filtro}".`);

  const creds = cargarEnv();
  const token = creds ? await getToken(creds) : null;

  if (creds) console.log(`Credenciales de Google: ${creds.archivo}`);
  else console.log("Sin credenciales de Google — se notifica sólo a IndexNow (Bing/Yandex).");

  for (const { host, key } of sitios) {
    console.log(`\n── ${host}`);
    let urls;
    try {
      urls = await urlsDelSitemap(host);
    } catch (e) {
      console.log(`   ✗ No se pudo leer el sitemap: ${e.message}`);
      continue;
    }
    console.log(`   ${urls.length} URLs en el sitemap`);

    const indexnow = await avisarIndexNow(host, key, urls);
    console.log(`   IndexNow (Bing/Yandex): ${indexnow}`);

    if (token) {
      const { ok, errores } = await avisarGoogle(token, urls);
      console.log(`   Indexing API de Google: ${ok}/${urls.length} pedidos aceptados`);
      for (const [msg, n] of errores) console.log(`      ⚠️  ${n}× ${msg}`);
    }
  }

  console.log(
    "\nRecordatorio: el 200 de la Indexing API es un acuse de recibo, no una promesa de\n" +
      "indexación — Google sólo la respeta para JobPosting y BroadcastEvent. Para las páginas\n" +
      "prioritarias sigue haciendo falta 'Solicitar indexación' a mano en Search Console.\n"
  );
}

main().catch((e) => {
  console.error(`Error: ${e.message}`);
  process.exit(1);
});
