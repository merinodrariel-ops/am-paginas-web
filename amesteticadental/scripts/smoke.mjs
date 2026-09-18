#!/usr/bin/env node
/**
 * Smoke test estático del sitio. Sin dependencias: se ejecuta con `npm run smoke`.
 *
 * No reemplaza a `npm run build` ni al lint. Cubre tres regresiones silenciosas
 * que hoy nada detecta y que solo se notan cuando un paciente no puede escribir
 * o cuando Google encuentra un 404:
 *
 *   1. Teléfono de WhatsApp inconsistente entre los ~88 CTAs hardcodeados.
 *   2. Enlaces internos a rutas que no existen ni están redirigidas.
 *   3. Assets locales referenciados que no están en public/.
 *   4. `next/image` apuntando a /public en vez de Cloudinary. El loader custom de
 *      next.config.ts desactiva /_next/image, así que una src local se sirve cruda
 *      y a tamaño completo (CLAUDE.md: en 2026-07 fueron 43 fotos de 2-3,4 MB).
 *
 * Sale con código 1 si encuentra algún fallo, para poder colgarlo del CI.
 */

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");
const APP = path.join(SRC, "app");
const PUBLIC = path.join(ROOT, "public");

// Teléfono oficial de captación (WORKING-CONTEXT.md → canal primario de CTA).
const WHATSAPP_PHONE = "5491170219298";

const failures = [];
const notes = [];

const fail = (check, detail) => failures.push({ check, detail });

/** Todos los archivos de código bajo src/, sin node_modules. */
function sourceFiles(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === "node_modules") continue;
      sourceFiles(full, acc);
    } else if (/\.(tsx?|mjs)$/.test(entry)) {
      acc.push(full);
    }
  }
  return acc;
}

const files = sourceFiles(SRC);
const rel = (f) => path.relative(ROOT, f);

/** Número de línea de un índice de caracteres, para poder citar file:line. */
const lineOf = (text, index) => text.slice(0, index).split("\n").length;

// ---------------------------------------------------------------------------
// 1. Teléfono de WhatsApp
// ---------------------------------------------------------------------------
let whatsappLinks = 0;

for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/(?:wa\.me\/|api\.whatsapp\.com\/send\?phone=)(\d+)/g)) {
    whatsappLinks += 1;
    if (match[1] !== WHATSAPP_PHONE) {
      fail(
        "whatsapp",
        `${rel(file)}:${lineOf(text, match.index)} usa el teléfono ${match[1]}, se esperaba ${WHATSAPP_PHONE}`,
      );
    }
  }
}

if (whatsappLinks === 0) {
  fail("whatsapp", "no se encontró ningún enlace de WhatsApp — ¿cambió el formato del CTA?");
} else {
  notes.push(`${whatsappLinks} enlaces de WhatsApp con el teléfono correcto`);
}

// ---------------------------------------------------------------------------
// 2. Enlaces internos
// ---------------------------------------------------------------------------

/** Rutas estáticas: cada directorio bajo src/app con un page.tsx. */
function routes(dir, prefix = "", acc = { static: new Set(), dynamic: [] }) {
  const entries = readdirSync(dir);
  if (entries.includes("page.tsx")) {
    if (prefix.includes("[")) {
      // /casos/[slug] → prefijo /casos/ con un segmento libre
      acc.dynamic.push(new RegExp(`^${prefix.replace(/\[[^\]]+\]/g, "[^/]+")}$`));
    } else {
      acc.static.add(prefix === "" ? "/" : prefix);
    }
  }
  for (const entry of entries) {
    const full = path.join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (entry === "api") continue; // no son páginas navegables
    routes(full, `${prefix}/${entry}`, acc);
  }
  return acc;
}

const known = routes(APP);

/** Orígenes de redirect declarados en next.config.ts (ya resueltos por Next). */
const nextConfig = readFileSync(path.join(ROOT, "next.config.ts"), "utf8");
const redirects = new Set(
  [...nextConfig.matchAll(/source:\s*"([^"]+)"/g)].map((m) => m[1].replace(/\/:\w+\*?$/, "")),
);

const seen = new Set();
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const route = match[1].replace(/\/$/, "") || "/";
    const key = `${file}|${route}`;
    if (seen.has(key)) continue;
    seen.add(key);

    if (known.static.has(route)) continue;
    if (known.dynamic.some((re) => re.test(route))) continue;
    if (redirects.has(route)) continue;
    // Assets servidos desde public/ se validan en el bloque 3.
    if (/\.[a-z0-9]{2,4}$/i.test(route)) continue;

    fail("links", `${rel(file)}:${lineOf(text, match.index)} enlaza a ${route}, que no es ruta ni redirect`);
  }
}
notes.push(`${seen.size} enlaces internos verificados contra ${known.static.size} rutas`);

// ---------------------------------------------------------------------------
// 3. Assets locales
// ---------------------------------------------------------------------------
// Cubre tanto las rutas absolutas ("/videos/x.mp4") como los staticFile() de
// Remotion, que son relativos a public/ y por eso se rompen sin avisar.
let assets = 0;

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const found = [
    ...text.matchAll(/"(\/(?:images|videos)\/[^"]*\.[a-z0-9]{2,4})"/gi),
    ...text.matchAll(/staticFile\(\s*"([^"]+)"/g),
  ];
  for (const match of found) {
    assets += 1;
    const asset = match[1].replace(/^\//, "");
    if (!existsSync(path.join(PUBLIC, asset))) {
      fail("assets", `${rel(file)}:${lineOf(text, match.index)} referencia public/${asset}, que no existe`);
    }
  }
}
notes.push(`${assets} assets locales referenciados existen en public/`);

// ---------------------------------------------------------------------------
// 4. next/image contra /public
// ---------------------------------------------------------------------------
// Regla no negociable de CLAUDE.md: las imágenes de la web se sirven desde
// Cloudinary. Lo que la regla protege es el peso: con el loader custom una src
// local se sirve cruda y sin WebP. Un logo de 2 KB no hace daño; una foto sí.
// Por eso el corte es por tamaño y no por la mera presencia de una ruta local.
// src/remotion/ queda fuera porque renderiza video, no web.
const MAX_LOCAL_IMAGE_BYTES = 50 * 1024;
let images = 0;
let localExceptions = 0;

for (const file of files) {
  if (file.includes(`${path.sep}remotion${path.sep}`)) continue;
  const text = readFileSync(file, "utf8");
  if (!text.includes("next/image")) continue;
  images += 1;
  for (const match of text.matchAll(/src=\{?["'`](\/images\/[^"'`]+)/g)) {
    const asset = path.join(PUBLIC, match[1]);
    const bytes = existsSync(asset) ? statSync(asset).size : 0;
    if (bytes <= MAX_LOCAL_IMAGE_BYTES) {
      localExceptions += 1;
      continue;
    }
    fail(
      "cloudinary",
      `${rel(file)}:${lineOf(text, match.index)} sirve ${match[1]} (${Math.round(bytes / 1024)} KB) ` +
        `desde /public con next/image — se entrega cruda, debe ir por Cloudinary`,
    );
  }
}
notes.push(
  `${images} componentes con next/image sin fotos locales pesadas ` +
    `(${localExceptions} assets chicos tolerados)`,
);

// ---------------------------------------------------------------------------
// Reporte
// ---------------------------------------------------------------------------
for (const note of notes) console.log(`ok    ${note}`);

if (failures.length === 0) {
  console.log("\nSmoke test OK");
  process.exit(0);
}

console.error(`\n${failures.length} fallo(s):`);
for (const { check, detail } of failures) console.error(`fail  [${check}] ${detail}`);
process.exit(1);
