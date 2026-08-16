#!/usr/bin/env node
/**
 * Dashboard AM — servidor local, cero dependencias.
 *
 *   node dashboard/server.mjs        → http://localhost:4321
 *
 * Corre sólo en tu máquina y escucha en loopback: las credenciales de Ads y
 * la service role key de Supabase nunca salen de acá.
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, normalize, sep } from "node:path";
import { config } from "./lib/env.mjs";
import {
  getAccessToken,
  cachedScopes,
  listSites,
  fetchAds,
  fetchSearchTerms,
  fetchGsc,
  fetchGa4,
} from "./lib/google.mjs";
import { fetchLeads, fetchLeadCount } from "./lib/supabase.mjs";
import { fetchWebVitals } from "./lib/psi.mjs";
import { analizar } from "./lib/insights.mjs";

const PUBLIC_DIR = resolve(import.meta.dirname, "public");

// Search Console publica con ~3 días de retraso; si midiéramos hasta ayer,
// el orgánico parecería estar cayendo siempre.
const DESFASE_GSC = 3;
const DESFASE_GENERAL = 1;

const iso = (d) => d.toISOString().slice(0, 10);
const diasAtras = (n) => new Date(Date.now() - n * 86_400_000);

/** Ventana de `dias` que termina `offsetFin` días antes de hoy. */
function ventana(dias, offsetFin) {
  const until = diasAtras(offsetFin);
  const since = diasAtras(offsetFin + dias - 1);
  return { since: iso(since), until: iso(until) };
}

/** La ventana inmediatamente anterior, del mismo largo. */
function ventanaPrevia(dias, offsetFin) {
  return ventana(dias, offsetFin + dias);
}

/** Deja que la promesa siga viva en background si tarda de más. */
function conTimeout(promesa, ms) {
  return Promise.race([promesa, new Promise((r) => setTimeout(() => r(null), ms))]);
}

const desempacar = (res) => (res && res.ok ? res.data : null);
const problema = (nombre, res) =>
  res && !res.ok ? { fuente: nombre, error: res.error, hint: res.hint } : null;

// ── Cache de respuestas ───────────────────────────────────────────────────

const cache = new Map();
const TTL = 5 * 60 * 1000;

function cacheado(clave, productor) {
  const hit = cache.get(clave);
  if (hit && Date.now() - hit.at < TTL) return hit.value;
  const value = productor();
  cache.set(clave, { at: Date.now(), value });
  // Si la promesa explota, no dejamos el error cacheado.
  Promise.resolve(value).catch(() => cache.delete(clave));
  return value;
}

// ── Armado del panel ──────────────────────────────────────────────────────

async function construirPanel({ dias, site }) {
  const rango = ventana(dias, DESFASE_GENERAL);
  const rangoPrev = ventanaPrevia(dias, DESFASE_GENERAL);
  const rangoSeo = ventana(dias, DESFASE_GSC);
  const rangoSeoPrev = ventanaPrevia(dias, DESFASE_GSC);

  const problemas = [];
  const auth = await getAccessToken();

  let ads = null, adsPrev = null, searchTerms = null;
  let gsc = null, gscPrev = null, ga4 = null, ga4Prev = null;
  let sitios = [];

  if (auth.ok) {
    const token = auth.data;
    const [
      adsRes, adsPrevRes, terminosRes,
      gscRes, gscPrevRes, sitiosRes, ga4Res, ga4PrevRes,
    ] = await Promise.all([
      fetchAds(rango, token),
      fetchAds(rangoPrev, token),
      fetchSearchTerms(rango, token),
      fetchGsc({ site, ...rangoSeo }, token),
      fetchGsc({ site, ...rangoSeoPrev }, token),
      listSites(token),
      fetchGa4(rango, token),
      fetchGa4(rangoPrev, token),
    ]);

    ads = desempacar(adsRes);
    adsPrev = desempacar(adsPrevRes);
    searchTerms = desempacar(terminosRes);
    gsc = desempacar(gscRes);
    gscPrev = desempacar(gscPrevRes);
    ga4 = desempacar(ga4Res);
    ga4Prev = desempacar(ga4PrevRes);
    sitios = desempacar(sitiosRes) || [];

    for (const p of [
      problema("Google Ads", adsRes),
      problema("Search Console", gscRes),
      problema("GA4", ga4Res),
    ]) if (p) problemas.push(p);
  } else {
    problemas.push({ fuente: "Google", error: auth.error, hint: auth.hint });
  }

  const [leadsRes, leadsPrevRes] = await Promise.all([
    fetchLeads(rango),
    fetchLeadCount(rangoPrev),
  ]);
  const leads = desempacar(leadsRes);
  const leadsPrev = desempacar(leadsPrevRes);
  const pLeads = problema("Supabase", leadsRes);
  if (pLeads) problemas.push(pLeads);

  // Core Web Vitals tarda ~30s. Le damos 4s: si ya está en cache entra en este
  // panel, si no se sigue resolviendo sola y entra en el próximo refresh.
  const vitalsRes = await conTimeout(fetchWebVitals(config.defaultOrigin), 4000);
  const vitals = desempacar(vitalsRes);

  const previo = {
    leads: leadsPrev,
    gscClicks: gscPrev?.totals.clicks,
    adsCost: adsPrev?.totals.cost,
    adsConversions: adsPrev?.totals.conversions,
    adsCpa: adsPrev?.totals.cpa,
    sessions: ga4Prev?.totals.sessions,
  };

  const diagnostico = analizar({ ads, gsc, leads, searchTerms, vitals, previo, problemas });

  return {
    generadoEn: new Date().toISOString(),
    rango: { dias, ...rango },
    rangoSeo,
    sitioSeo: site,
    sitios,
    problemas,
    ads,
    gsc,
    ga4,
    leads,
    searchTerms,
    vitals,
    previo,
    diagnostico,
    scopes: cachedScopes().split(" ").filter(Boolean),
  };
}

// ── HTTP ──────────────────────────────────────────────────────────────────

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function json(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(payload);
}

async function servirEstatico(res, pathname) {
  const rel = pathname === "/" ? "index.html" : pathname.slice(1);
  const target = resolve(PUBLIC_DIR, normalize(rel));
  // Nadie sale de public/ con ../
  if (target !== PUBLIC_DIR && !target.startsWith(PUBLIC_DIR + sep)) {
    res.writeHead(403).end("Prohibido");
    return;
  }
  try {
    const buf = await readFile(target);
    res.writeHead(200, {
      "Content-Type": MIME[extname(target)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(buf);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("No encontrado");
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${config.port}`);

  try {
    if (url.pathname === "/api/panel") {
      // DASHBOARD_MOCK=archivo.json sirve un panel de ejemplo — útil para ver
      // cómo queda todo lleno sin depender de que las APIs respondan.
      if (process.env.DASHBOARD_MOCK) {
        return json(res, 200, JSON.parse(await readFile(process.env.DASHBOARD_MOCK, "utf8")));
      }
      const dias = Math.min(Math.max(Number(url.searchParams.get("dias")) || 28, 1), 365);
      const site = url.searchParams.get("site") || config.defaultSite;
      if (url.searchParams.get("refrescar") === "1") cache.clear();
      const data = await cacheado(`panel:${dias}:${site}`, () => construirPanel({ dias, site }));
      return json(res, 200, data);
    }

    if (url.pathname === "/api/salud") {
      const objetivo = url.searchParams.get("url") || config.defaultOrigin;
      // Sólo el sitio propio: este endpoint no es un proxy abierto.
      if (!objetivo.startsWith("https://")) return json(res, 400, { error: "URL inválida" });
      const data = await fetchWebVitals(objetivo);
      return json(res, data.ok ? 200 : 502, data);
    }

    if (url.pathname === "/api/estado") {
      const auth = await getAccessToken({ force: true });
      return json(res, 200, {
        google: auth.ok ? "ok" : "error",
        error: auth.ok ? null : auth.error,
        hint: auth.ok ? null : auth.hint,
        scopes: auth.ok ? auth.scopes.split(" ") : [],
        supabase: Boolean(config.supabase.url && config.supabase.key),
      });
    }

    return servirEstatico(res, url.pathname);
  } catch (e) {
    console.error("[error]", e);
    return json(res, 500, { error: e.message });
  }
});

// Loopback explícito: el dashboard no queda expuesto en la red local.
server.listen(config.port, "127.0.0.1", () => {
  console.log(`\n  Dashboard AM  →  http://localhost:${config.port}\n`);
});
