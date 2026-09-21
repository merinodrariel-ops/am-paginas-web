#!/usr/bin/env node
/**
 * Audita el snippet de Google (title + meta description) de toda la red AM.
 *
 * Por qué existe: la red está bien posicionada y clickea mal. En los últimos 30 días
 * amesteticadental promedia posición 5.4 con 1.64% de CTR — en esa posición el promedio
 * de la industria está entre 5% y 8%. La página de implantes sola se lleva 86.000
 * impresiones y convierte el 1.6%. No es un problema de ranking, es un problema de qué
 * dice el resultado cuando ya estás ahí arriba.
 *
 * Eso —"¿este título promete algo o describe genéricamente?"— no lo contesta un `grep`.
 * Y pedírselo a un LLM sobre 100 páginas devuelve 100 párrafos que nadie lee. Jev
 * devuelve números comparables entre páginas, así que se pueden ORDENAR: el output es
 * una lista priorizada por clics que se están perdiendo, no una pila de opiniones.
 *
 * Reparto de trabajo, igual que en auditar-titulos.mjs:
 *
 *   GSC    → qué páginas importan (impresiones, CTR, posición, query principal)
 *   CÓDIGO → lo verificable: largos que Google trunca, metas faltantes, títulos duplicados
 *   JEV    → el criterio: ¿promete algo concreto? ¿responde a lo que la persona buscó?
 *            ¿la meta da un motivo para clickear? ¿suena a plantilla de agencia?
 *
 * El ranking final es `impresiones × (CTR esperado − CTR real)`: clics estimados que se
 * dejan sobre la mesa. La curva de CTR por posición es un promedio de industria y no una
 * verdad revelada —en SERPs de precio con AI Overviews el techo real es más bajo—, así
 * que sirve para PRIORIZAR, no para prometer.
 *
 *   node scripts/typesafe/auditar-serp.mjs
 *   node scripts/typesafe/auditar-serp.mjs --top 25
 *   node scripts/typesafe/auditar-serp.mjs --sitio amesteticadental.com
 *   node scripts/typesafe/auditar-serp.mjs --json
 *   node scripts/typesafe/auditar-serp.mjs --md informe.md
 */

import { readFileSync, writeFileSync } from "node:fs";
import { getAccessToken, SCOPES } from "../google-auth.mjs";
import { preguntar, enTandas } from "./client.mjs";

const SITIOS = [
  "sc-domain:amesteticadental.com",
  "sc-domain:amesteticadental.uy",
  "sc-domain:arielmerino.com",
  "sc-domain:thedentalreview.com",
];

const DIAS = 30;
const MIN_IMPRESIONES = 50; // por debajo de esto el CTR es ruido estadístico

// Curva de CTR por posición, promedio de industria. Aproximada a propósito: se usa para
// ordenar la lista, no para prometerle a nadie un número.
const CTR_ESPERADO = { 1: 0.27, 2: 0.15, 3: 0.11, 4: 0.08, 5: 0.06, 6: 0.05, 7: 0.04, 8: 0.035, 9: 0.03, 10: 0.025 };
const ctrEsperado = (pos) => CTR_ESPERADO[Math.round(pos)] ?? (pos > 10 ? 0.015 : 0.27);

// Google trunca alrededor de estos valores. No son reglas duras (mide en píxeles), pero
// pasarse mucho garantiza que la promesa quede cortada con puntos suspensivos.
const TITLE_MAX = 60;
const TITLE_MIN = 25;
const META_MAX = 158;
const META_MIN = 70;

const PREGUNTAS = {
  promete_concreto: {
    type: "noul",
    instructions:
      "El título promete algo concreto y verificable —un precio, un número, un plazo, una garantía, " +
      "un resultado— en vez de sólo nombrar el tema de la página",
  },
  suena_a_plantilla: {
    type: "noul",
    instructions:
      "El conjunto de título y descripción suena a plantilla genérica de agencia SEO: palabras clave " +
      "encadenadas, ciudad y marca pegadas al final, frases hechas como 'los mejores' o 'consultá ahora'",
  },
  responde_busqueda: {
    type: "score",
    instructions:
      "Qué tan directamente el título le responde a la persona lo que fue a buscar a Google",
    criteria: [
      "No responde: habla de otra cosa o sólo nombra la clínica",
      "Responde de costado: menciona el tema pero no la respuesta",
      "Responde de frente: lo que la persona buscó está en el título",
    ],
  },
  meta_da_motivo: {
    type: "score",
    instructions:
      "La descripción le da a la persona un motivo para elegir este resultado por sobre los otros nueve de la página",
    criteria: [
      "Ninguno: repite el título o describe la clínica",
      "Débil: dice de qué trata pero no por qué entrar acá",
      "Fuerte: adelanta un dato, una cifra o una respuesta que la persona quiere",
    ],
  },
  gancho: {
    type: "score",
    instructions:
      "Visto entre otros nueve resultados de Google, cuánto invita este resultado a hacer click",
    criteria: ["Nulo: lo saltearía", "Correcto pero olvidable", "Le haría click a este"],
  },
};

// --- GSC -------------------------------------------------------------------

function credenciales() {
  const env = Object.fromEntries(
    readFileSync(new URL("../../.env.ads", import.meta.url), "utf8")
      .split("\n")
      .filter((l) => l && !l.startsWith("#"))
      .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)]),
  );
  return {
    clientId: env.GOOGLE_ADS_CLIENT_ID,
    clientSecret: env.GOOGLE_ADS_CLIENT_SECRET,
    refreshToken: env.GOOGLE_ADS_REFRESH_TOKEN,
  };
}

async function gsc(token, sitio, body) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(sitio)}/searchAnalytics/query`;
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const d = await r.json();
  if (!r.ok) throw new Error(`GSC ${r.status} en ${sitio}: ${d?.error?.message ?? ""}`);
  return d.rows ?? [];
}

async function datosDeGoogle(token) {
  const hoy = new Date();
  const rango = {
    startDate: new Date(hoy - DIAS * 86400000).toISOString().slice(0, 10),
    endDate: hoy.toISOString().slice(0, 10),
  };

  const paginas = new Map();
  for (const sitio of SITIOS) {
    for (const f of await gsc(token, sitio, { ...rango, dimensions: ["page"], rowLimit: 500 })) {
      const [url] = f.keys;
      paginas.set(url, {
        url,
        sitio: sitio.replace("sc-domain:", ""),
        clics: f.clicks,
        impresiones: f.impressions,
        ctr: f.ctr,
        posicion: f.position,
        query: null,
      });
    }
    // La query principal de cada página: es contra ESO que hay que juzgar el título.
    for (const f of await gsc(token, sitio, {
      ...rango,
      dimensions: ["page", "query"],
      rowLimit: 5000,
    })) {
      const [url, query] = f.keys;
      const p = paginas.get(url);
      if (p && (!p.query || f.impressions > p.queryImpresiones)) {
        p.query = query;
        p.queryImpresiones = f.impressions;
      }
    }
  }
  return [...paginas.values()];
}

// --- página en vivo --------------------------------------------------------

const entidades = (s) =>
  s
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
    .replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim();

async function snippetEnVivo(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "AM-serp-audit/1.0" }, redirect: "follow" });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const html = await res.text();
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
    const meta =
      html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i)?.[1] ??
      html.match(/<meta[^>]+content=["']([\s\S]*?)["'][^>]+name=["']description["']/i)?.[1];
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, " ");
    return {
      title: title ? entidades(title) : null,
      meta: meta ? entidades(meta) : null,
      h1: h1 ? entidades(h1) : null,
    };
  } catch (e) {
    return { error: e.message };
  }
}

// --- veredicto -------------------------------------------------------------

function chequeosDuros({ title, meta }, duplicados) {
  const fallas = [];
  if (!title) fallas.push("no tiene <title>");
  else {
    if (title.length > TITLE_MAX) fallas.push(`título de ${title.length} caracteres: Google lo corta`);
    if (title.length < TITLE_MIN) fallas.push(`título de sólo ${title.length} caracteres: desaprovecha espacio`);
    if (duplicados.has(title.toLowerCase())) fallas.push(`título duplicado con ${duplicados.get(title.toLowerCase())}`);
  }
  if (!meta) fallas.push("no tiene meta description: Google inventa el snippet");
  else {
    if (meta.length > META_MAX) fallas.push(`meta de ${meta.length} caracteres: se corta`);
    if (meta.length < META_MIN) fallas.push(`meta de sólo ${meta.length} caracteres: desaprovecha espacio`);
  }
  return fallas;
}

function diagnostico(a) {
  const puntos = [];
  if (a.promete_concreto.noul < 0.35) puntos.push(`no promete nada concreto (${a.promete_concreto.noul.toFixed(2)})`);
  if (a.suena_a_plantilla.noul > 0.6) puntos.push(`suena a plantilla SEO (${a.suena_a_plantilla.noul.toFixed(2)})`);
  if (a.responde_busqueda.score < 1.2) puntos.push(`no responde a la búsqueda (${a.responde_busqueda.score.toFixed(2)}/2)`);
  if (a.meta_da_motivo.score < 1.2) puntos.push(`la meta no da motivo para entrar (${a.meta_da_motivo.score.toFixed(2)}/2)`);
  if (a.gancho.score < 1.2) puntos.push(`poco gancho en el SERP (${a.gancho.score.toFixed(2)}/2)`);
  return puntos;
}

// --- corrida ---------------------------------------------------------------

const args = process.argv.slice(2);
const flag = (n) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const TOP = Number(flag("top") ?? 20);

const arranque = Date.now();
process.stderr.write("Pidiendo datos a Search Console… ");
const token = await getAccessToken([SCOPES.webmasters], credenciales());
let paginas = await datosDeGoogle(token);
process.stderr.write(`${paginas.length} páginas con datos\n`);

if (flag("sitio")) paginas = paginas.filter((p) => p.sitio === flag("sitio"));

const ignoradas = paginas.filter((p) => p.impresiones < MIN_IMPRESIONES).length;
paginas = paginas.filter((p) => p.impresiones >= MIN_IMPRESIONES);

process.stderr.write(`Bajando ${paginas.length} páginas en vivo… `);
const snippets = await enTandas(paginas, 10, (p) => snippetEnVivo(p.url));
process.stderr.write("listo\n");

// Los duplicados sólo se ven mirando la red entera, así que se calculan acá.
const vistos = new Map();
const duplicados = new Map();
snippets.forEach((s, i) => {
  if (!s.title) return;
  const k = s.title.toLowerCase();
  if (vistos.has(k)) duplicados.set(k, vistos.get(k));
  else vistos.set(k, new URL(paginas[i].url).pathname);
});

process.stderr.write(`Preguntándole a Jev por ${paginas.length} snippets… `);
const t0 = Date.now();
const evaluadas = await enTandas(paginas, 8, async (p, i) => {
  const s = snippets[i];
  if (s.error || !s.title) return { ...p, ...s, fallas: [s.error ?? "sin título"], puntos: [], answers: null };

  const state =
    `Así se ve este resultado en Google:\n` +
    `Título: ${s.title}\n` +
    `Descripción: ${s.meta ?? "(no tiene)"}\n` +
    `URL: ${p.url}\n\n` +
    `La búsqueda por la que más aparece es: "${p.query ?? "desconocida"}"\n` +
    `Contexto: consultorio de odontología estética en Buenos Aires.`;

  const { answers } = await preguntar(state, PREGUNTAS);
  return {
    ...p,
    ...s,
    answers,
    fallas: chequeosDuros(s, duplicados),
    puntos: diagnostico(answers),
  };
});
const segundosJev = ((Date.now() - t0) / 1000).toFixed(1);
process.stderr.write(`${segundosJev}s\n`);

// Prioridad: clics que se dejan sobre la mesa, pero sólo si hay algo que arreglar.
for (const p of evaluadas) {
  const brecha = Math.max(0, ctrEsperado(p.posicion) - p.ctr);
  p.clicsPerdidos = p.fallas.length || p.puntos.length ? p.impresiones * brecha : 0;
}
evaluadas.sort((a, b) => b.clicsPerdidos - a.clicsPerdidos);

if (args.includes("--json")) {
  console.log(JSON.stringify(evaluadas, null, 2));
  process.exit(0);
}

const lineas = [];
const w = (s = "") => lineas.push(s);
const n = (x) => x.toLocaleString("es-AR", { maximumFractionDigits: 0 });

const totImp = evaluadas.reduce((a, p) => a + p.impresiones, 0);
const totClic = evaluadas.reduce((a, p) => a + p.clics, 0);
const totPerd = evaluadas.reduce((a, p) => a + p.clicsPerdidos, 0);

w(`# Auditoría de snippets — red AM · últimos ${DIAS} días`);
w();
w(`${evaluadas.length} páginas con ${MIN_IMPRESIONES}+ impresiones (${ignoradas} descartadas por ruido).`);
w(`${n(totImp)} impresiones · ${n(totClic)} clics · CTR ${((totClic / totImp) * 100).toFixed(2)}%`);
w(`Evaluadas por Jev en ${segundosJev}s.`);
w();
w(`**~${n(totPerd)} clics/mes** es la brecha entre el CTR real y el promedio de industria`);
w(`para las posiciones que ya tienen, sumando sólo páginas con algo señalado.`);
w(`Es una estimación para ordenar la lista, no una promesa.`);
w();
w(`## Las ${TOP} que más cuestan`);

for (const p of evaluadas.slice(0, TOP)) {
  if (!p.clicsPerdidos) break;
  w();
  w(`### ${new URL(p.url).pathname}  ·  ~${n(p.clicsPerdidos)} clics/mes`);
  w(`${p.sitio} · pos ${p.posicion.toFixed(1)} · ${n(p.impresiones)} impresiones · CTR ${(p.ctr * 100).toFixed(2)}%`);
  w(`Busca: *"${p.query ?? "?"}"*`);
  w();
  w(`> **${p.title ?? "(sin título)"}**`);
  w(`> ${p.meta ?? "(sin meta description)"}`);
  w();
  for (const f of p.fallas) w(`- ❌ ${f}`);
  for (const d of p.puntos) w(`- ⚠️ ${d}`);
  if (!p.fallas.length && !p.puntos.length) w(`- ✅ el snippet está bien; el CTR bajo viene de otro lado`);
}

const sanas = evaluadas.filter((p) => !p.fallas.length && !p.puntos.length);
w();
w(`## Sin objeciones`);
w();
w(`${sanas.length} de ${evaluadas.length} páginas pasaron todo. Las de mejor CTR:`);
for (const p of [...sanas].sort((a, b) => b.ctr - a.ctr).slice(0, 5)) {
  w(`- \`${new URL(p.url).pathname}\` — CTR ${(p.ctr * 100).toFixed(1)}% en pos ${p.posicion.toFixed(1)}`);
}

const informe = lineas.join("\n");
if (flag("md")) {
  writeFileSync(flag("md"), informe + "\n");
  process.stderr.write(`Informe en ${flag("md")}\n`);
} else {
  console.log(informe);
}
process.stderr.write(`Total: ${((Date.now() - arranque) / 1000).toFixed(1)}s\n`);
