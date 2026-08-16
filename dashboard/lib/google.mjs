/**
 * Conectores Google: OAuth, Google Ads, Search Console y GA4.
 *
 * Todos los fetchers devuelven { ok, data } o { ok:false, error, hint } —
 * el dashboard nunca se cae porque una fuente no responda, muestra el hueco.
 */
import { config, missingGoogleCreds } from "./env.mjs";

const ADS_API_VERSION = "v20";

/** El access token vive ~1h; lo cacheamos para no pedirlo en cada request. */
let tokenCache = { value: null, scopes: "", expiresAt: 0 };

export function fail(error, hint) {
  return { ok: false, error, hint };
}

export async function getAccessToken({ force = false } = {}) {
  const missing = missingGoogleCreds();
  if (missing.length) {
    return fail(
      `Faltan credenciales en .env.ads: ${missing.join(", ")}`,
      "Revisá el archivo .env.ads en la raíz del proyecto."
    );
  }

  if (!force && tokenCache.value && Date.now() < tokenCache.expiresAt) {
    return { ok: true, data: tokenCache.value, scopes: tokenCache.scopes };
  }

  let payload;
  try {
    const r = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: config.google.clientId,
        client_secret: config.google.clientSecret,
        refresh_token: config.google.refreshToken,
        grant_type: "refresh_token",
      }),
    });
    payload = await r.json();
  } catch (e) {
    return fail("No se pudo contactar a Google: " + e.message, "¿Hay conexión a internet?");
  }

  if (!payload.access_token) {
    const hint =
      payload.error === "invalid_grant"
        ? "El refresh token venció o fue revocado. Corré: node renovar-token-google.mjs"
        : "Revisá client_id / client_secret en .env.ads.";
    return fail(payload.error_description || payload.error || "OAuth falló", hint);
  }

  tokenCache = {
    value: payload.access_token,
    scopes: payload.scope || "",
    // 60s de colchón para no usar un token que vence en el medio de la request.
    expiresAt: Date.now() + (payload.expires_in || 3600) * 1000 - 60_000,
  };
  return { ok: true, data: tokenCache.value, scopes: tokenCache.scopes };
}

export function cachedScopes() {
  return tokenCache.scopes;
}

// ─────────────────────────────────────────────────────────── Google Ads ────

async function adsQuery(gaql, token) {
  const { customerId, developerToken, loginCustomerId } = config.google;
  if (!customerId || !developerToken) {
    return fail(
      "Falta GOOGLE_ADS_CUSTOMER_ID o GOOGLE_ADS_DEVELOPER_TOKEN",
      "Completá esos valores en .env.ads."
    );
  }

  const r = await fetch(
    `https://googleads.googleapis.com/${ADS_API_VERSION}/customers/${customerId}/googleAds:searchStream`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "developer-token": developerToken,
        ...(loginCustomerId ? { "login-customer-id": loginCustomerId } : {}),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: gaql }),
    }
  );

  const text = await r.text();
  if (!r.ok) {
    let message = text.slice(0, 400);
    try {
      const parsed = JSON.parse(text);
      const err = Array.isArray(parsed) ? parsed[0]?.error : parsed.error;
      message = err?.message || message;
    } catch { /* el cuerpo no era JSON: dejamos el texto crudo */ }
    return fail(`Google Ads ${r.status}: ${message}`);
  }

  // searchStream devuelve un array de chunks; aplanamos los results.
  const chunks = JSON.parse(text);
  const results = [];
  for (const chunk of chunks) for (const row of chunk.results || []) results.push(row);
  return { ok: true, data: results };
}

const micros = (v) => Number(v || 0) / 1e6;
const num = (v) => Number(v || 0);

/** Métricas de Ads agregadas por campaña + serie diaria, para un rango. */
export async function fetchAds({ since, until }, token) {
  const range = `segments.date BETWEEN '${since}' AND '${until}'`;

  const [campaigns, daily, customer] = await Promise.all([
    adsQuery(
      `SELECT campaign.id, campaign.name, campaign.status,
              campaign.advertising_channel_type,
              metrics.impressions, metrics.clicks, metrics.cost_micros,
              metrics.conversions, metrics.ctr, metrics.average_cpc
       FROM campaign WHERE ${range}`,
      token
    ),
    adsQuery(
      `SELECT segments.date, metrics.impressions, metrics.clicks,
              metrics.cost_micros, metrics.conversions
       FROM customer WHERE ${range}`,
      token
    ),
    adsQuery(`SELECT customer.currency_code, customer.descriptive_name FROM customer`, token),
  ]);

  if (!campaigns.ok) return campaigns;

  const currency = customer.ok ? customer.data[0]?.customer?.currencyCode || "ARS" : "ARS";
  const accountName = customer.ok ? customer.data[0]?.customer?.descriptiveName || "" : "";

  // Una campaña puede venir en varias filas (una por segmento): acumulamos.
  const byCampaign = new Map();
  for (const row of campaigns.data) {
    const id = row.campaign?.id;
    if (!id) continue;
    const acc = byCampaign.get(id) || {
      id,
      name: row.campaign.name,
      status: row.campaign.status,
      channel: row.campaign.advertisingChannelType,
      impressions: 0,
      clicks: 0,
      cost: 0,
      conversions: 0,
    };
    acc.impressions += num(row.metrics?.impressions);
    acc.clicks += num(row.metrics?.clicks);
    acc.cost += micros(row.metrics?.costMicros);
    acc.conversions += num(row.metrics?.conversions);
    byCampaign.set(id, acc);
  }

  const campaignList = [...byCampaign.values()]
    .map((c) => ({
      ...c,
      ctr: c.impressions ? c.clicks / c.impressions : 0,
      cpc: c.clicks ? c.cost / c.clicks : 0,
      cpa: c.conversions ? c.cost / c.conversions : null,
    }))
    .sort((a, b) => b.cost - a.cost);

  const series = (daily.ok ? daily.data : [])
    .map((row) => ({
      date: row.segments?.date,
      impressions: num(row.metrics?.impressions),
      clicks: num(row.metrics?.clicks),
      cost: micros(row.metrics?.costMicros),
      conversions: num(row.metrics?.conversions),
    }))
    .filter((d) => d.date)
    .sort((a, b) => a.date.localeCompare(b.date));

  const totals = campaignList.reduce(
    (t, c) => ({
      impressions: t.impressions + c.impressions,
      clicks: t.clicks + c.clicks,
      cost: t.cost + c.cost,
      conversions: t.conversions + c.conversions,
    }),
    { impressions: 0, clicks: 0, cost: 0, conversions: 0 }
  );
  totals.ctr = totals.impressions ? totals.clicks / totals.impressions : 0;
  totals.cpc = totals.clicks ? totals.cost / totals.clicks : 0;
  totals.cpa = totals.conversions ? totals.cost / totals.conversions : null;

  return { ok: true, data: { currency, accountName, totals, campaigns: campaignList, series } };
}

/** Términos de búsqueda que dispararon avisos — para detectar plata quemada. */
export async function fetchSearchTerms({ since, until }, token, limit = 40) {
  const res = await adsQuery(
    `SELECT search_term_view.search_term, metrics.clicks, metrics.impressions,
            metrics.cost_micros, metrics.conversions
     FROM search_term_view
     WHERE segments.date BETWEEN '${since}' AND '${until}'
     ORDER BY metrics.cost_micros DESC
     LIMIT ${limit}`,
    token
  );
  if (!res.ok) return res;

  const terms = res.data.map((row) => ({
    term: row.searchTermView?.searchTerm || "",
    clicks: num(row.metrics?.clicks),
    impressions: num(row.metrics?.impressions),
    cost: micros(row.metrics?.costMicros),
    conversions: num(row.metrics?.conversions),
  }));
  return { ok: true, data: terms };
}

// ─────────────────────────────────────────────────── Google Search Console ──

async function gscFetch(path, token, body) {
  const r = await fetch(`https://searchconsole.googleapis.com/webmasters/v3${path}`, {
    method: body ? "POST" : "GET",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const payload = await r.json().catch(() => ({}));
  if (!r.ok) return fail(`Search Console ${r.status}: ${payload?.error?.message || "error"}`);
  return { ok: true, data: payload };
}

export async function listSites(token) {
  const res = await gscFetch("/sites", token);
  if (!res.ok) return res;
  const sites = (res.data.siteEntry || [])
    .filter((s) => s.permissionLevel !== "siteUnverifiedUser")
    .map((s) => ({ url: s.siteUrl, permission: s.permissionLevel }));
  return { ok: true, data: sites };
}

const gscRow = (r) => ({
  clicks: num(r.clicks),
  impressions: num(r.impressions),
  ctr: num(r.ctr),
  position: num(r.position),
});

export async function fetchGsc({ site, since, until }, token) {
  const base = { startDate: since, endDate: until };
  const url = `/sites/${encodeURIComponent(site)}/searchAnalytics/query`;

  const [totals, daily, queries, pages] = await Promise.all([
    gscFetch(url, token, { ...base, dimensions: [] }),
    gscFetch(url, token, { ...base, dimensions: ["date"], rowLimit: 500 }),
    gscFetch(url, token, { ...base, dimensions: ["query"], rowLimit: 100 }),
    gscFetch(url, token, { ...base, dimensions: ["page"], rowLimit: 100 }),
  ]);

  if (!totals.ok) return totals;

  const mapRows = (res, key) =>
    res.ok
      ? (res.data.rows || []).map((r) => ({ [key]: r.keys?.[0] || "", ...gscRow(r) }))
      : [];

  return {
    ok: true,
    data: {
      site,
      totals: totals.data.rows?.[0]
        ? gscRow(totals.data.rows[0])
        : { clicks: 0, impressions: 0, ctr: 0, position: 0 },
      series: mapRows(daily, "date").sort((a, b) => a.date.localeCompare(b.date)),
      queries: mapRows(queries, "query"),
      pages: mapRows(pages, "page"),
    },
  };
}

// ─────────────────────────────────────────────────────────────────── GA4 ────

export async function findGa4Property(token) {
  if (config.ga4.propertyId) return { ok: true, data: config.ga4.propertyId };

  const r = await fetch("https://analyticsadmin.googleapis.com/v1beta/accountSummaries", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const payload = await r.json().catch(() => ({}));
  if (!r.ok) {
    const needsScope = r.status === 401 || r.status === 403;
    return fail(
      `GA4 Admin ${r.status}: ${payload?.error?.message || "error"}`,
      needsScope
        ? "Falta el permiso analytics.readonly. Corré: node renovar-token-google.mjs"
        : undefined
    );
  }

  const property = payload.accountSummaries?.[0]?.propertySummaries?.[0]?.property;
  if (!property) return fail("La cuenta no tiene propiedades GA4 visibles.");
  return { ok: true, data: property.replace("properties/", "") };
}

export async function fetchGa4({ since, until }, token) {
  const prop = await findGa4Property(token);
  if (!prop.ok) return prop;

  const run = async (body) => {
    const r = await fetch(
      `https://analyticsdata.googleapis.com/v1beta/properties/${prop.data}:runReport`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ dateRanges: [{ startDate: since, endDate: until }], ...body }),
      }
    );
    const payload = await r.json().catch(() => ({}));
    if (!r.ok) return fail(`GA4 ${r.status}: ${payload?.error?.message || "error"}`);
    return { ok: true, data: payload };
  };

  const metrics = [
    { name: "sessions" },
    { name: "activeUsers" },
    { name: "screenPageViews" },
    { name: "averageSessionDuration" },
  ];

  const [totals, daily, channels, pages] = await Promise.all([
    run({ metrics }),
    run({ metrics: [{ name: "sessions" }], dimensions: [{ name: "date" }], limit: 500 }),
    run({
      metrics: [{ name: "sessions" }],
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      limit: 20,
    }),
    run({
      metrics: [{ name: "screenPageViews" }],
      dimensions: [{ name: "pagePath" }],
      limit: 25,
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    }),
  ]);

  if (!totals.ok) return totals;

  const firstRow = totals.data.rows?.[0]?.metricValues || [];
  const pairs = (res, key) =>
    res.ok
      ? (res.data.rows || []).map((r) => ({
          [key]: r.dimensionValues?.[0]?.value || "",
          value: Number(r.metricValues?.[0]?.value || 0),
        }))
      : [];

  return {
    ok: true,
    data: {
      propertyId: prop.data,
      totals: {
        sessions: Number(firstRow[0]?.value || 0),
        users: Number(firstRow[1]?.value || 0),
        pageViews: Number(firstRow[2]?.value || 0),
        avgDuration: Number(firstRow[3]?.value || 0),
      },
      series: pairs(daily, "date")
        .map((d) => ({
          // GA4 devuelve YYYYMMDD; lo normalizamos al ISO que usa el resto.
          date: `${d.date.slice(0, 4)}-${d.date.slice(4, 6)}-${d.date.slice(6, 8)}`,
          sessions: d.value,
        }))
        .sort((a, b) => a.date.localeCompare(b.date)),
      channels: pairs(channels, "channel").sort((a, b) => b.value - a.value),
      pages: pairs(pages, "path"),
    },
  };
}
