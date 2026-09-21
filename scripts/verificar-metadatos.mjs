#!/usr/bin/env node
/**
 * Verifica que ningún título ni meta description de un sitio se pase del largo que
 * Google muestra. Corre DESPUÉS del build, sobre el HTML ya generado.
 *
 * Por qué sobre el HTML y no sobre el código: los títulos se arman con plantillas y
 * constantes —`${ANIO}`, `${PENN.escuelaCorta}`, el sufijo del layout— así que leer
 * el `.tsx` obliga a reimplementar la resolución de Next y a equivocarse. El HTML
 * construido dice exactamente lo que va a leer Google. En CI ya se buildea cada
 * sitio, así que esto no cuesta nada extra.
 *
 * Por qué existe: el 21-09-2026 había 24 metas cortadas y 8 títulos cortados en la
 * red. La causa casi nunca fue alguien escribiendo de más: fueron SUFIJOS DE
 * PLANTILLA que se le pegaban a cada página —" | AM Estética Dental Uruguay" son 29
 * caracteres— y que nadie veía al editar una página sola. Se arreglaron todos. Esto
 * está para que no vuelvan: un sufijo nuevo rompe el CI el día que se agrega, no
 * seis meses después cuando alguien audita.
 *
 *   node scripts/verificar-metadatos.mjs amesteticadental
 *   node scripts/verificar-metadatos.mjs            # los cuatro sitios
 *
 * Sale con 1 si algo se pasa.
 */

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITIOS = ["amesteticadental", "amesteticadental-uy", "thedentalreview", "arielmerino"];

// Google corta alrededor de estos valores. Mide en píxeles, no en caracteres, así que
// no son exactos — pero pasarse de acá garantiza los puntos suspensivos.
const TITULO_MAX = 60;
const META_MAX = 158;

// Páginas que no compiten en Google y no vale la pena revisar.
const IGNORAR = /(^|\/)(_not-found|_global-error|404|500)\.html$/;

function htmlsDe(dir) {
  const salida = [];
  const recorrer = (d) => {
    for (const e of readdirSync(d)) {
      const p = join(d, e);
      if (statSync(p).isDirectory()) recorrer(p);
      else if (p.endsWith(".html") && !IGNORAR.test(p)) salida.push(p);
    }
  };
  recorrer(dir);
  return salida;
}

const entidades = (s) =>
  s
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function revisar(sitio) {
  const base = resolve(RAIZ, sitio, ".next/server/app");
  if (!existsSync(base)) {
    console.log(`⚠️  ${sitio}: no hay build (${relative(RAIZ, base)}). Corré \`npm run build\` primero.`);
    return { saltado: true, problemas: [] };
  }

  const problemas = [];
  const porTitulo = new Map();
  const archivos = htmlsDe(base);

  for (const f of archivos) {
    const html = readFileSync(f, "utf8");
    const ruta = "/" + relative(base, f).replace(/\.html$/, "").replace(/^index$/, "");

    const titulo = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
    const meta =
      html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ??
      html.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i)?.[1];

    if (!titulo) {
      problemas.push(`${ruta} — sin <title>`);
      continue;
    }
    const T = entidades(titulo);
    const D = meta ? entidades(meta) : null;

    if (T.length > TITULO_MAX) problemas.push(`${ruta} — título de ${T.length}: «${T}»`);
    if (!D) problemas.push(`${ruta} — sin meta description`);
    else if (D.length > META_MAX) problemas.push(`${ruta} — meta de ${D.length} caracteres`);

    // Dos páginas con el mismo título compiten entre sí en el mismo sitio.
    const k = T.toLowerCase();
    if (porTitulo.has(k)) problemas.push(`${ruta} — título duplicado con ${porTitulo.get(k)}: «${T}»`);
    else porTitulo.set(k, ruta);
  }

  return { saltado: false, problemas, total: archivos.length };
}

const pedidos = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const aRevisar = pedidos.length ? pedidos : SITIOS;

let fallo = false;
for (const sitio of aRevisar) {
  const { saltado, problemas, total } = revisar(sitio);
  if (saltado) continue;
  if (problemas.length) {
    fallo = true;
    console.log(`\n❌ ${sitio} — ${problemas.length} problema(s) en ${total} páginas:`);
    for (const p of problemas) console.log(`   ${p}`);
  } else {
    console.log(`✅ ${sitio} — ${total} páginas, todos los títulos y metas entran en la SERP`);
  }
}

if (fallo) {
  console.log(
    `\nGoogle corta los títulos cerca de los ${TITULO_MAX} caracteres y las descripciones cerca de los ${META_MAX}.`,
  );
  console.log("Si el largo viene de un sufijo de plantilla del layout, acortá el sufijo:");
  console.log("arreglás todas las páginas del sitio de una vez en lugar de una por una.");
}
process.exit(fallo ? 1 : 0);
