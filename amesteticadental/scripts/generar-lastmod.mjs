#!/usr/bin/env node
/**
 * Genera `src/app/lastmod.json`: la fecha real de última modificación de cada ruta
 * estática del sitemap. Mismo criterio que amesteticadental-uy/scripts/generar-lastmod.mjs.
 *
 * Por qué: `lastmod` es el único campo opcional del sitemap que Google dice usar
 * para decidir qué volver a rastrear (ignora `changefreq` y `priority`). Sin él, las
 * notas nuevas del blog no le dan al rastreador ninguna señal de frescura.
 *
 * La fecha sale del último commit que tocó la carpeta de la ruta, NO de la hora de
 * build: si cada deploy dijera "hoy" para todo, Google deja de creerle al sitio.
 *
 * El JSON se commitea porque Vercel clona con historial recortado: si git no alcanza
 * para fechar una ruta, se conserva la fecha anterior en vez de inventar una. Las
 * rutas sin fecha se publican sin `lastmod`.
 */
import { execFileSync } from "child_process";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";

const raiz = fileURLToPath(new URL("..", import.meta.url));
const salida = fileURLToPath(new URL("../src/app/lastmod.json", import.meta.url));
const sitemap = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");

// Las rutas se leen del fuente del sitemap: este script corre antes del build,
// sin TypeScript. Sólo el bloque STATIC_ROUTES.
const bloque = sitemap.split("const STATIC_ROUTES")[1]?.split("\n];")[0] ?? "";
const rutas = [...bloque.matchAll(/\{\s*path:\s*"([^"]*)"/g)].map((m) => m[1]);

// En un clon superficial (Vercel, Actions) el commit borde "agrega" todos los
// archivos, así que `git log -1 -- ruta` devolvería su fecha para cualquier ruta
// que no se tocó dentro de la ventana. Esos resultados se descartan.
const bordes = (() => {
  try {
    const archivo = execFileSync("git", ["rev-parse", "--git-path", "shallow"], { cwd: raiz, encoding: "utf8" }).trim();
    const abs = archivo.startsWith("/") ? archivo : `${raiz}/${archivo}`;
    return new Set(existsSync(abs) ? readFileSync(abs, "utf8").split("\n").filter(Boolean) : []);
  } catch {
    return new Set();
  }
})();

function fechaGit(ruta) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%H %cI", "--", ruta], {
      cwd: raiz,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!out) return null;
    const [hash, fecha] = out.split(" ");
    return bordes.has(hash) ? null : fecha;
  } catch {
    return null; // sin git o historial recortado: no se inventa nada
  }
}

function fuentesDe(path) {
  // La home es sólo su page.tsx (la carpeta src/app contiene todo el sitio).
  if (path === "") return ["src/app/page.tsx"];
  const dir = `src/app${path}`;
  return existsSync(new URL(`../${dir}`, import.meta.url)) ? [dir] : [];
}

const previo = (() => {
  try {
    return JSON.parse(readFileSync(salida, "utf8"));
  } catch {
    return {};
  }
})();

const fechas = {};
const sinFecha = [];
for (const path of rutas) {
  const candidatas = fuentesDe(path).map(fechaGit).filter(Boolean).sort();
  const fecha = candidatas.at(-1) ?? previo[path];
  if (fecha) fechas[path] = fecha;
  else sinFecha.push(path || "/");
}

const ordenado = Object.fromEntries(Object.keys(fechas).sort().map((k) => [k, fechas[k]]));
writeFileSync(salida, `${JSON.stringify(ordenado, null, 2)}\n`);
console.log(
  `lastmod: ${Object.keys(ordenado).length}/${rutas.length} rutas fechadas` +
    (sinFecha.length ? `, sin fecha: ${sinFecha.join(", ")}` : ""),
);
