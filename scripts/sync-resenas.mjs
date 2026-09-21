#!/usr/bin/env node
/**
 * Sincroniza el número de reseñas de Google contra la ficha real.
 *
 * Por qué existe: el sitio tenía "+120" escrito a mano en 20 lugares mientras la
 * ficha marcaba 116. Un AggregateRating que no coincide con lo que el usuario lee en
 * pantalla es justamente lo que Google penaliza quitando las estrellas del dominio
 * entero, así que el número no puede depender de que alguien se acuerde de tocarlo.
 *
 * Ahora hay un solo lugar —`amesteticadental/src/lib/reviews.ts`— y este script lo
 * reescribe leyendo la ficha. El copy visible sale de ahí, así que actualizar el
 * número actualiza el sitio completo.
 *
 *   node scripts/sync-resenas.mjs           # lee la ficha y actualiza si cambió
 *   node scripts/sync-resenas.mjs --check   # no toca nada; sale 1 si está desfasado
 *
 * Necesita una clave de Places API. Se saca en cinco minutos:
 *
 *   1. https://console.cloud.google.com/apis/library/places-backend.googleapis.com
 *      → Habilitar (el proyecto ya existe, es el mismo de Search Console).
 *   2. https://console.cloud.google.com/apis/credentials → Crear credencial →
 *      Clave de API. Restringirla a "Places API (New)".
 *   3. Guardarla en .env.places como  GOOGLE_PLACES_API_KEY=...
 *      (agregar .env.places al .gitignore, como el resto de los .env)
 *
 * Sin clave el script no rompe nada: explica esto y sale.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ARCHIVO = resolve(RAIZ, "amesteticadental/src/lib/reviews.ts");

// La ficha que se consulta. Si algún día cambia el nombre o la dirección, se ajusta acá.
const FICHA = "AM Estética Dental, Camila O'Gorman 412, Puerto Madero, Buenos Aires";

function leerClave() {
  if (process.env.GOOGLE_PLACES_API_KEY) return process.env.GOOGLE_PLACES_API_KEY;
  try {
    const env = readFileSync(resolve(RAIZ, ".env.places"), "utf8");
    return env.match(/^GOOGLE_PLACES_API_KEY=(.+)$/m)?.[1]?.trim() ?? null;
  } catch {
    return null;
  }
}

async function consultarFicha(clave) {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": clave,
      "X-Goog-FieldMask": "places.displayName,places.rating,places.userRatingCount",
    },
    body: JSON.stringify({ textQuery: FICHA, languageCode: "es" }),
  });
  const d = await res.json();
  if (!res.ok) throw new Error(`Places devolvió ${res.status}: ${d?.error?.message ?? ""}`);
  const p = d.places?.[0];
  if (!p) throw new Error(`Places no encontró la ficha "${FICHA}"`);
  return {
    nombre: p.displayName?.text ?? "?",
    rating: String(p.rating ?? ""),
    count: String(p.userRatingCount ?? ""),
  };
}

const actual = readFileSync(ARCHIVO, "utf8");
const leer = (campo) => actual.match(new RegExp(`${campo}: "([^"]*)"`))?.[1];
const enDisco = { ratingValue: leer("ratingValue"), reviewCount: leer("reviewCount") };

const clave = leerClave();
if (!clave) {
  console.log(`Sin clave de Places. El sitio sigue mostrando ${enDisco.reviewCount} reseñas (${enDisco.ratingValue}★).\n`);
  console.log("Para que esto se sincronice solo, seguí los tres pasos del comentario de arriba");
  console.log("de este archivo: habilitar Places API, crear la clave y guardarla en .env.places.\n");
  console.log("Mientras tanto se actualiza a mano en amesteticadental/src/lib/reviews.ts —");
  console.log("un solo número, que ya alimenta los 20 lugares donde se muestra.");
  process.exit(0);
}

const ficha = await consultarFicha(clave);
console.log(`Ficha: ${ficha.nombre}`);
console.log(`  Google dice:   ${ficha.count} reseñas · ${ficha.rating}★`);
console.log(`  El sitio dice: ${enDisco.reviewCount} reseñas · ${enDisco.ratingValue}★`);

if (ficha.count === enDisco.reviewCount && ficha.rating === enDisco.ratingValue) {
  console.log("\nSincronizado ✓");
  process.exit(0);
}

if (process.argv.includes("--check")) {
  console.log("\n❌ Desfasado. Corré `node scripts/sync-resenas.mjs` para actualizarlo.");
  process.exit(1);
}

// Red de seguridad: una caída brusca del conteo casi siempre es un error de la API o
// una ficha equivocada, no 30 reseñas borradas. Ante la duda no se pisa nada.
const caida = Number(enDisco.reviewCount) - Number(ficha.count);
if (caida > 10) {
  console.log(`\n❌ La ficha reporta ${caida} reseñas MENOS que el sitio. Eso no suele ser real:`);
  console.log("   revisá que FICHA apunte al perfil correcto antes de forzar el cambio.");
  process.exit(1);
}

const hoy = new Date().toISOString().slice(0, 10);
const nuevo = actual
  .replace(/ratingValue: "[^"]*"/, `ratingValue: "${ficha.rating}"`)
  .replace(/reviewCount: "[^"]*"/, `reviewCount: "${ficha.count}"`)
  .replace(/verificadoEl: "[^"]*"/, `verificadoEl: "${hoy}"`);
writeFileSync(ARCHIVO, nuevo);

console.log(`\n✓ Actualizado a ${ficha.count} reseñas · ${ficha.rating}★`);
console.log("  Se actualizaron los 20 lugares del sitio de una. Falta commitear y pushear.");
