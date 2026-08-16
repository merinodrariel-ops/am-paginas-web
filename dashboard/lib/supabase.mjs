/**
 * Lectura de leads y postulaciones desde Supabase (REST, sin SDK).
 *
 * Privacidad: al navegador sólo viajan agregados y una versión reducida de
 * cada lead (nombre de pila + inicial, barrio, tratamiento, estado). Mail y
 * teléfono se quedan en el servidor — este dashboard mide, no es un CRM.
 */
import { config } from "./env.mjs";
import { fail } from "./google.mjs";

async function rest(table, query) {
  const { url, key } = config.supabase;
  if (!url || !key) {
    return fail(
      "Falta NEXT_PUBLIC_SUPABASE_URL o la key de Supabase",
      "Se leen de amesteticadental/.env.local"
    );
  }
  const r = await fetch(`${url}/rest/v1/${table}?${query}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}`, Prefer: "count=exact" },
  });
  if (!r.ok) return fail(`Supabase ${r.status}: ${(await r.text()).slice(0, 200)}`);
  const total = Number((r.headers.get("content-range") || "").split("/")[1] || 0);
  return { ok: true, data: await r.json(), total };
}

/** "María Fernanda Gómez" → "María F. G." */
function shortName(full) {
  const parts = String(full || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "—";
  return [parts[0], ...parts.slice(1).map((p) => p[0].toUpperCase() + ".")].join(" ");
}

function tally(rows, pick) {
  const counts = new Map();
  for (const row of rows) {
    for (const value of [pick(row)].flat()) {
      const key = value || "sin dato";
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);
}

export async function fetchLeads({ since, until }) {
  const cols = "id,full_name,neighborhood,origin,interest_tags,status,lead_score,created_at";
  const res = await rest(
    "marketing_leads",
    `select=${cols}&created_at=gte.${since}&created_at=lte.${until}T23:59:59` +
      `&order=created_at.desc&limit=1000`
  );
  if (!res.ok) return res;

  const rows = res.data;
  const byDay = new Map();
  for (const row of rows) {
    const day = String(row.created_at).slice(0, 10);
    byDay.set(day, (byDay.get(day) || 0) + 1);
  }

  return {
    ok: true,
    data: {
      total: rows.length,
      series: [...byDay.entries()]
        .map(([date, leads]) => ({ date, leads }))
        .sort((a, b) => a.date.localeCompare(b.date)),
      porTratamiento: tally(rows, (r) => r.interest_tags || []),
      porOrigen: tally(rows, (r) => r.origin),
      porEstado: tally(rows, (r) => r.status),
      porBarrio: tally(rows, (r) => r.neighborhood).slice(0, 10),
      recientes: rows.slice(0, 25).map((r) => ({
        nombre: shortName(r.full_name),
        barrio: r.neighborhood || "—",
        tratamiento: (r.interest_tags || [])[0] || "—",
        origen: r.origin || "—",
        estado: r.status || "—",
        score: r.lead_score,
        fecha: String(r.created_at).slice(0, 10),
      })),
    },
  };
}

export async function fetchLeadCount({ since, until }) {
  const res = await rest(
    "marketing_leads",
    `select=id&created_at=gte.${since}&created_at=lte.${until}T23:59:59&limit=1`
  );
  return res.ok ? { ok: true, data: res.total } : res;
}
