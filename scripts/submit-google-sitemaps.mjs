#!/usr/bin/env node
/**
 * Submits production sitemaps to Google Search Console.
 *
 * This uses the supported Search Console Sitemaps API. It does not use the
 * Google Indexing API because that API is officially limited to JobPosting and
 * BroadcastEvent pages.
 */

const DEFAULT_SITEMAPS = [
  "https://www.amesteticadental.com/sitemap.xml",
  "https://www.amesteticadental.uy/sitemap.xml",
  "https://www.thedentalreview.com/sitemap.xml",
  "https://www.arielmerino.com/sitemap.xml",
];

const CLIENT_ID = process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID || process.env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET || process.env.GOOGLE_ADS_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN || process.env.GOOGLE_ADS_REFRESH_TOKEN;

function required(name, value) {
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

async function getAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: required("GOOGLE_SEARCH_CONSOLE_CLIENT_ID", CLIENT_ID),
      client_secret: required("GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET", CLIENT_SECRET),
      refresh_token: required("GOOGLE_SEARCH_CONSOLE_REFRESH_TOKEN", REFRESH_TOKEN),
      grant_type: "refresh_token",
    }),
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok || !body.access_token) {
    throw new Error(`Google OAuth failed (HTTP ${response.status}): ${JSON.stringify(body)}`);
  }

  return body.access_token;
}

function getSiteUrl(sitemapUrl) {
  const parsed = new URL(sitemapUrl);
  return `${parsed.origin}/`;
}

async function submitSitemap(accessToken, sitemapUrl) {
  const siteUrl = getSiteUrl(sitemapUrl);
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
  const failures = [];

  console.log(`Submitting ${sitemapList.length} sitemap(s) to Google Search Console...`);

  for (const sitemapUrl of sitemapList) {
    try {
      await submitSitemap(accessToken, sitemapUrl);
      console.log(`OK ${sitemapUrl}`);
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
