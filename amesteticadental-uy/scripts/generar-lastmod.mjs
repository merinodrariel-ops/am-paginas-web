#!/usr/bin/env node
/**
 * Genera `app/lastmod.json`: la fecha real de última modificación de cada ruta.
 *
 * Por qué existe: el sitemap declaraba `changefreq` y `priority`, que Google
 * documenta explícitamente que ignora, y NO declaraba `lastmod`, que es la única
 * de las tres que sí usa para decidir a quién rastrea primero. Un sitio nuevo sin
 * `lastmod` no le da al programador de rastreo ninguna razón para volver.
 *
 * La fecha sale de git, no de la hora de build: si todas las URLs dijeran "hoy" en
 * cada deploy, Google deja de creerle al `lastmod` del sitio entero y volvemos a
 * cero. Una fecha inventada es peor que ninguna.
 *
 * El JSON se commitea porque Vercel clona en profundidad limitada: si el historial
 * no alcanza para fechar un archivo, se conserva lo último bueno en vez de mentir.
 * Las rutas que no se pueden fechar se omiten, y el sitemap simplemente no emite
 * `lastmod` para ellas.
 */
import { execFileSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";

const raiz = fileURLToPath(new URL("..", import.meta.url));
const salida = fileURLToPath(new URL("../app/lastmod.json", import.meta.url));

/** Fuentes que determinan el contenido de cada ruta. La más reciente manda. */
const FUENTES = {
  "": ["app/page.tsx", "app/site-data.ts"],
  "/casos-clinicos": ["app/casos-clinicos", "app/site-data.ts"],
  "/financiacion": ["app/financiacion", "app/site-data.ts"],
  "/dr-ariel-merino": ["app/dr-ariel-merino", "app/site-data.ts"],
  "/trabaja-en-am": ["app/trabaja-en-am"],
  "/prensa": ["app/prensa", "app/site-data.ts"],
};

/** Las páginas de tratamiento no tienen archivo propio: viven en site-data.ts. */
const FUENTES_TRATAMIENTO = ["app/[slug]/page.tsx", "app/site-data.ts"];

function fechaGit(ruta) {
  try {
    const salida = execFileSync("git", ["log", "-1", "--format=%cI", "--", ruta], {
      cwd: raiz,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return salida || null;
  } catch {
    return null; // sin git, o historial recortado: no se inventa nada
  }
}

function masReciente(rutas) {
  const fechas = rutas.map(fechaGit).filter(Boolean);
  if (fechas.length === 0) return null;
  return fechas.sort().at(-1);
}

function slugsDeTratamiento() {
  // Se leen del fuente en vez de importar el módulo: este script corre antes del
  // build, sin el pipeline de TypeScript disponible.
  const fuente = readFileSync(new URL("../app/site-data.ts", import.meta.url), "utf8");
  const bloque = fuente.split("export const treatmentPages")[1] ?? "";
  const cuerpo = bloque.split("\nexport ")[0];
  return [...cuerpo.matchAll(/^ {2}"([a-z0-9-]+)":\s*\{/gm)].map((m) => m[1]);
}

const previo = (() => {
  try {
    return JSON.parse(readFileSync(salida, "utf8"));
  } catch {
    return {};
  }
})();

const fechas = {};
for (const [ruta, fuentes] of Object.entries(FUENTES)) {
  const fecha = masReciente(fuentes) ?? previo[ruta];
  if (fecha) fechas[ruta] = fecha;
}
for (const slug of slugsDeTratamiento()) {
  const ruta = `/${slug}`;
  const fecha = masReciente(FUENTES_TRATAMIENTO) ?? previo[ruta];
  if (fecha) fechas[ruta] = fecha;
}

const ordenado = Object.fromEntries(Object.keys(fechas).sort().map((k) => [k, fechas[k]]));
writeFileSync(salida, `${JSON.stringify(ordenado, null, 2)}\n`);

const sinFecha = [...Object.keys(FUENTES), ...slugsDeTratamiento().map((s) => `/${s}`)].filter(
  (r) => !ordenado[r],
);
console.log(`lastmod: ${Object.keys(ordenado).length} rutas fechadas` + (sinFecha.length ? `, ${sinFecha.length} sin fecha (${sinFecha.join(", ")})` : ""));
