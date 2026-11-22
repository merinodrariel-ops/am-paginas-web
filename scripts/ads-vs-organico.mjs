/**
 * ads-vs-organico.mjs — ¿Estamos pagando Google Ads por búsquedas que ya ganamos gratis?
 *
 * Cruza los términos de búsqueda que dispararon anuncios (Google Ads) con la
 * posición orgánica de esas mismas búsquedas (Search Console), y clasifica cada
 * término:
 *
 *   ORGÁNICO TOP 3   → ya aparecemos arriba sin pagar: candidato a recortar.
 *   PÁGINA 1         → orgánico entre 4 y 10: el anuncio suma, pero hay que mirarlo.
 *   SÓLO ADS         → orgánicamente no aparecemos: el anuncio es nuestra única presencia.
 *   MARCA            → búsquedas por AM / Merino: caso aparte (ver nota al final).
 *
 * Uso:
 *   node scripts/ads-vs-organico.mjs                 # últimos 90 días
 *   node scripts/ads-vs-organico.mjs --dias 30
 *   node scripts/ads-vs-organico.mjs --json          # salida cruda para otro script
 *   node scripts/ads-vs-organico.mjs --solo-gsc      # sin Ads: búsquedas comerciales ya en top 3
 *
 * Credenciales:
 *   - Search Console: cuenta de servicio (scripts/google-auth.mjs). No vence.
 *   - Google Ads: refresh token de `.env.ads`. Vence: si da `invalid_grant`,
 *     correr `node renovar-token-google.mjs` (abre el navegador, 1 minuto).
 *
 * El posicionamiento orgánico se filtra a Argentina, que es donde corren las
 * campañas: un 2° puesto promedio mundial puede ser un 9° en Buenos Aires.
 */

import { readFileSync } from "node:fs";
import { getAccessToken, SCOPES } from "./google-auth.mjs";

const RAIZ = new URL("../", import.meta.url);
const SITIO = "sc-domain:amesteticadental.com";
const PAIS = "arg";
const ADS_API = "v20";

const args = process.argv.slice(2);
const DIAS = Number(args[args.indexOf("--dias") + 1]) || 90;
const JSON_OUT = args.includes("--json");
const SOLO_GSC = args.includes("--solo-gsc");

// Search Console tarda ~3 días en consolidar los datos.
const hasta = new Date(Date.now() - 3 * 864e5);
const desde = new Date(hasta.getTime() - DIAS * 864e5);
const fecha = (d) => d.toISOString().slice(0, 10);

const MARCA = /\b(am estetica|amestetica|merino|am dental)\b/;
// Palabras que indican intención comercial (lo que se paga en Ads).
const COMERCIAL = /carilla|implante|sonrisa|blanqueamiento|alineador|invisalign|lente|porcelana|resina|dentista|odontolog|estetica dental|corona|precio|costo/;

/** minúsculas, sin acentos, sin signos, espacios simples. */
export function normalizar(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9ñ ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Misma búsqueda con las palabras en otro orden ("carillas precio" = "precio carillas"). */
const clavePalabras = (s) => normalizar(s).split(" ").sort().join(" ");

// ─────────────────────────────────────────────────────── Search Console ──

async function consultasOrganicas() {
  const token = await getAccessToken([SCOPES.webmasters]);
  const filas = [];
  for (let startRow = 0; ; startRow += 25000) {
    const r = await fetch(
      `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITIO)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          startDate: fecha(desde),
          endDate: fecha(hasta),
          dimensions: ["query"],
          dimensionFilterGroups: [{ filters: [{ dimension: "country", expression: PAIS }] }],
          rowLimit: 25000,
          startRow,
        }),
      }
    );
    const d = await r.json();
    if (!r.ok) throw new Error(`Search Console ${r.status}: ${d?.error?.message}`);
    const lote = d.rows || [];
    filas.push(...lote);
    if (lote.length < 25000) break;
  }

  const porTexto = new Map();
  const porPalabras = new Map();
  for (const f of filas) {
    const q = { query: f.keys[0], clicks: f.clicks, impresiones: f.impressions, posicion: f.position };
    porTexto.set(normalizar(q.query), q);
    const k = clavePalabras(q.query);
    // Si dos variantes colapsan en la misma clave, gana la de más impresiones.
    if (!porPalabras.has(k) || porPalabras.get(k).impresiones < q.impresiones) porPalabras.set(k, q);
  }
  return { porTexto, porPalabras, total: filas.length };
}

// ───────────────────────────────────────────────────────────── Google Ads ──

function leerEnvAds() {
  const texto = readFileSync(new URL(".env.ads", RAIZ), "utf8");
  return Object.fromEntries(
    texto
      .split("\n")
      .filter((l) => l.includes("=") && !l.startsWith("#"))
      .map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()])
  );
}

async function terminosPagados() {
  const env = leerEnvAds();
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.GOOGLE_ADS_CLIENT_ID,
      client_secret: env.GOOGLE_ADS_CLIENT_SECRET,
      refresh_token: env.GOOGLE_ADS_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const auth = await r.json();
  if (!auth.access_token) {
    const e = new Error(
      auth.error === "invalid_grant"
        ? "El permiso de Google Ads venció. Correr: node renovar-token-google.mjs"
        : `Google Ads OAuth: ${JSON.stringify(auth)}`
    );
    e.adsCaido = true;
    throw e;
  }

  const res = await fetch(
    `https://googleads.googleapis.com/${ADS_API}/customers/${env.GOOGLE_ADS_CUSTOMER_ID}/googleAds:searchStream`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
        "developer-token": env.GOOGLE_ADS_DEVELOPER_TOKEN,
        "login-customer-id": env.GOOGLE_ADS_LOGIN_CUSTOMER_ID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `SELECT search_term_view.search_term, campaign.name, metrics.clicks,
                       metrics.impressions, metrics.cost_micros, metrics.conversions
                FROM search_term_view
                WHERE segments.date BETWEEN '${fecha(desde)}' AND '${fecha(hasta)}'
                  AND metrics.cost_micros > 0`,
      }),
    }
  );
  const texto = await res.text();
  if (!res.ok) throw new Error(`Google Ads ${res.status}: ${texto.slice(0, 400)}`);

  // Un término puede aparecer en varias campañas/días: se suma por término.
  const acumulado = new Map();
  for (const lote of JSON.parse(texto)) {
    for (const row of lote.results || []) {
      const termino = row.searchTermView.searchTerm;
      const a = acumulado.get(termino) || { termino, campanias: new Set(), clicks: 0, costo: 0, conversiones: 0 };
      a.campanias.add(row.campaign.name);
      a.clicks += Number(row.metrics.clicks || 0);
      a.costo += Number(row.metrics.costMicros || 0) / 1e6;
      a.conversiones += Number(row.metrics.conversions || 0);
      acumulado.set(termino, a);
    }
  }
  return [...acumulado.values()];
}

// ────────────────────────────────────────────────────────────── Cruce ──

function clasificar(termino, organico) {
  if (MARCA.test(normalizar(termino))) return "MARCA";
  if (!organico || organico.posicion > 10) return "SÓLO ADS";
  if (organico.posicion <= 3) return "ORGÁNICO TOP 3";
  return "PÁGINA 1";
}

const ars = (n) => "ARS " + Math.round(n).toLocaleString("es-AR");
const pos = (o) => (o ? o.posicion.toFixed(1) : "—");

function imprimirGrupo(titulo, filas) {
  if (!filas.length) return;
  const costo = filas.reduce((s, f) => s + f.costo, 0);
  console.log(`\n■ ${titulo} — ${filas.length} términos, ${ars(costo)}`);
  for (const f of filas.slice(0, 25)) {
    console.log(
      `  ${f.termino.padEnd(46).slice(0, 46)} pos ${pos(f.organico).padStart(4)}  ` +
        `${ars(f.costo).padStart(13)}  ${String(f.clicks).padStart(4)} clics  ${f.conversiones.toFixed(0).padStart(3)} conv`
    );
  }
  if (filas.length > 25) console.log(`  … y ${filas.length - 25} más`);
}

async function main() {
  const gsc = await consultasOrganicas();

  if (SOLO_GSC) {
    const top = [...gsc.porTexto.values()]
      .filter((q) => q.posicion <= 3 && COMERCIAL.test(normalizar(q.query)) && !MARCA.test(normalizar(q.query)))
      .sort((a, b) => b.impresiones - a.impresiones);
    if (JSON_OUT) return console.log(JSON.stringify(top, null, 2));
    console.log(`\nBúsquedas comerciales donde ya estamos top 3 orgánico en Argentina (${fecha(desde)} → ${fecha(hasta)})`);
    console.log("Si alguna de éstas también se paga en Ads, es plata a revisar.\n");
    for (const q of top.slice(0, 40)) {
      console.log(`  ${q.query.padEnd(50).slice(0, 50)} pos ${q.posicion.toFixed(1).padStart(4)}  ${String(q.impresiones).padStart(6)} impr  ${String(q.clicks).padStart(4)} clics`);
    }
    console.log(`\n  ${top.length} en total.`);
    return;
  }

  let pagados;
  try {
    pagados = await terminosPagados();
  } catch (e) {
    if (!e.adsCaido) throw e;
    console.error(`\n❌ ${e.message}`);
    console.error("   Mientras tanto: node scripts/ads-vs-organico.mjs --solo-gsc\n");
    process.exit(2);
  }

  const filas = pagados
    .map((p) => {
      const organico = gsc.porTexto.get(normalizar(p.termino)) || gsc.porPalabras.get(clavePalabras(p.termino));
      return { ...p, campanias: [...p.campanias], organico, grupo: clasificar(p.termino, organico) };
    })
    .sort((a, b) => b.costo - a.costo);

  if (JSON_OUT) return console.log(JSON.stringify(filas, null, 2));

  const total = filas.reduce((s, f) => s + f.costo, 0);
  console.log(`\nAds vs orgánico — amesteticadental.com, Argentina, ${fecha(desde)} → ${fecha(hasta)}`);
  console.log(`${filas.length} términos pagados, ${ars(total)} gastados. ${gsc.total} búsquedas orgánicas en Search Console.`);

  for (const g of ["ORGÁNICO TOP 3", "MARCA", "PÁGINA 1", "SÓLO ADS"]) {
    imprimirGrupo(g, filas.filter((f) => f.grupo === g));
  }

  console.log(`
Cómo leerlo:
  · ORGÁNICO TOP 3: candidatos a pausar o bajar puja. No cortar todo de golpe:
    probar con 3-5 términos como palabra negativa y mirar 2-3 semanas si caen los
    contactos por WhatsApp. Si un competidor puja arriba nuestro, el anuncio puede
    seguir valiendo la pena aunque estemos 1° orgánico.
  · MARCA: quien busca "Merino" ya nos eligió. Sólo vale pagar si hay competencia
    pujando por nuestro nombre (se ve en Ads → Información de subastas).
  · Posición = promedio orgánico en Argentina; Search Console no separa CABA.
  · Los términos que no aparecen en Search Console cuentan como SÓLO ADS:
    Google oculta las búsquedas con muy poco volumen.`);
}

main().catch((e) => {
  console.error("\n❌", e.message);
  process.exit(1);
});
