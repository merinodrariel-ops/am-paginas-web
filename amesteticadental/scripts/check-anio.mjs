#!/usr/bin/env node
/**
 * check-anio.mjs — Alarma de rollover del año de precios.
 *
 * Por qué existe: las queries que el sitio gana en Copilot/Bing llevan el año
 * adentro ("precio carillas dentales Argentina 2026", 49,7% de citation share).
 * Si ANIO_PRECIOS queda atrás del año real, el sitio pierde esas queries sin que
 * nadie se entere: no hay error, no hay 404, solo caen las citas.
 *
 * Rompe el CI a propósito. Se destraba en una línea —subir ANIO_PRECIOS en
 * src/lib/anio.ts— pero recién DESPUÉS de revisar las tablas de precios de
 * verdad. El ritual completo está documentado en ese archivo.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const fuente = readFileSync(join(raiz, "src/lib/anio.ts"), "utf8");

const match = fuente.match(/export const ANIO_PRECIOS = (\d{4});/);
if (!match) {
  console.error("❌ No se pudo leer ANIO_PRECIOS de src/lib/anio.ts.");
  process.exit(1);
}

const declarado = Number(match[1]);
const real = new Date().getFullYear();

if (declarado < real) {
  console.error(
    `\n❌ El año de precios quedó atrás: el sitio publica ${declarado} y estamos en ${real}.\n\n` +
      `   Las landings de precio y los blogs de "Guía ${declarado}" se están mostrando\n` +
      `   desactualizados en Bing y Copilot, justo en las queries que el sitio gana.\n\n` +
      `   Para destrabar:\n` +
      `     1. Revisar las tablas de precios (carillas, implantes, blanqueamiento,\n` +
      `        diseño de sonrisa, lentes de contacto, coronas).\n` +
      `     2. Subir ANIO_PRECIOS a ${real} en src/lib/anio.ts.\n` +
      `     3. Subir el dateModified de los dos blogs de precios.\n` +
      `     4. npm run notify-index\n`
  );
  process.exit(1);
}

console.log(`✅ Año de precios al día: ${declarado}.`);
