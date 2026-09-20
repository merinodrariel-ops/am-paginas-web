#!/usr/bin/env node
/**
 * Submits production sitemaps to Google Search Console.
 *
 * This uses the supported Search Console Sitemaps API. It does not use the
 * Google Indexing API because that API is officially limited to JobPosting and
 * BroadcastEvent pages.
 */

import { getAccessToken as auth, SCOPES } from "./google-auth.mjs";

const DEFAULT_SITEMAPS = [
  "https://www.amesteticadental.com/sitemap.xml",
  "https://www.amesteticadental.uy/sitemap.xml",
  "https://www.thedentalreview.com/sitemap.xml",
  "https://www.arielmerino.com/sitemap.xml",
];

function getAccessToken() {
  return auth([SCOPES.webmasters], {
    clientId: process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID || process.env.GOOGLE_ADS_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET || process.env.GOOGLE_ADS_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN || process.env.GOOGLE_ADS_REFRESH_TOKEN,
  });
}

/**
 * Devuelve las propiedades verificadas de la cuenta.
 *
 * Hace falta consultarlas porque el identificador de una propiedad NO se puede
 * derivar del dominio: Search Console distingue entre propiedad de prefijo de URL
 * (`https://www.thedentalreview.com/`) y propiedad de dominio
 * (`sc-domain:amesteticadental.com`). Construir el identificador a mano —como se
 * hacía antes— apuntaba a una propiedad inexistente y la API respondía 403.
 */
async function fetchVerifiedSites(accessToken) {
  const response = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`No se pudo leer la lista de propiedades (HTTP ${response.status}): ${JSON.stringify(body)}`);
  }
  return (body.siteEntry || []).map((entry) => entry.siteUrl);
}

/** Resuelve qué propiedad verificada corresponde a un sitemap. */
function resolveSiteUrl(sitemapUrl, verifiedSites) {
  const { origin, hostname } = new URL(sitemapUrl);
  const bareDomain = hostname.replace(/^www\./, "");

  const urlPrefix = `${origin}/`;
  if (verifiedSites.includes(urlPrefix)) return urlPrefix;

  const domainProperty = `sc-domain:${bareDomain}`;
  if (verifiedSites.includes(domainProperty)) return domainProperty;

  return null;
}

async function submitSitemap(accessToken, sitemapUrl, siteUrl) {
  const endpoint = new URL(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`
  );

  const response = await fetch(endpoint, {
    method: "PUT",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`${sitemapUrl} rejected (HTTP ${response.status}): ${body}`);
  }
}

async function main() {
  const sitemaps = process.argv.slice(2);
  const sitemapList = sitemaps.length > 0 ? sitemaps : DEFAULT_SITEMAPS;
  const accessToken = await getAccessToken();
  const verifiedSites = await fetchVerifiedSites(accessToken);
  const failures = [];

  console.log(`Submitting ${sitemapList.length} sitemap(s) to Google Search Console...`);
  console.log(`Propiedades verificadas en la cuenta: ${verifiedSites.join(", ") || "(ninguna)"}`);

  for (const sitemapUrl of sitemapList) {
    const siteUrl = resolveSiteUrl(sitemapUrl, verifiedSites);

    // Un dominio sin verificar no es un error del deploy: es una tarea pendiente
    // en Search Console. Se avisa y se sigue, en vez de romper el workflow entero.
    if (!siteUrl) {
      console.warn(`SKIP ${sitemapUrl} — el dominio no está verificado en Search Console.`);
      continue;
    }

    try {
      await submitSitemap(accessToken, sitemapUrl, siteUrl);
      console.log(`OK ${sitemapUrl} → ${siteUrl}`);
    } catch (error) {
      failures.push(error);
      console.error(`FAIL ${error.message}`);
    }
  }

  if (failures.length > 0) {
    throw new Error(`${failures.length} sitemap(s) could not be submitted.`);
  }
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
