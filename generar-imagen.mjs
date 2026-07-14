#!/usr/bin/env node
/**
 * generar-imagen.mjs — Genera imágenes con Google Nano Banana (gemini-2.5-flash-image).
 *
 * Uso:
 *   node generar-imagen.mjs "prompt en inglés describiendo la imagen" [salida.png]
 *   node generar-imagen.mjs "..." out.png --model gemini-3.1-flash-image
 *
 * La API key se lee de la variable de entorno GEMINI_API_KEY o del archivo .env.gemini
 * (gitignoreado) en la raíz del repo. NUNCA se commitea la key.
 *
 * Nota de costo: cada imagen con Nano Banana cuesta ~US$0,03-0,04. Requiere billing
 * habilitado en el proyecto de Google AI Studio.
 */

import { readFileSync, writeFileSync } from "node:fs";

function loadKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  try {
    const env = readFileSync(new URL("./.env.gemini", import.meta.url), "utf8");
    const m = env.match(/GEMINI_API_KEY\s*=\s*(.+)/);
    if (m) return m[1].trim();
  } catch { /* noop */ }
  throw new Error("Falta la API key: definí GEMINI_API_KEY o creá .env.gemini con GEMINI_API_KEY=...");
}

const prompt = process.argv[2];
if (!prompt || prompt.startsWith("--")) {
  console.error('Uso: node generar-imagen.mjs "prompt" [salida.png] [--model <modelo>]');
  process.exit(1);
}
const outArg = process.argv[3] && !process.argv[3].startsWith("--") ? process.argv[3] : null;
const out = outArg || `imagen-${Date.now()}.png`;
const modelIdx = process.argv.indexOf("--model");
const model = modelIdx > -1 ? process.argv[modelIdx + 1] : "gemini-2.5-flash-image";

const key = loadKey();
const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

console.log(`→ Generando imagen con ${model}...`);

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
});

const json = await res.json();

if (!res.ok) {
  console.error(`❌ Error HTTP ${res.status}: ${json?.error?.message || JSON.stringify(json).slice(0, 300)}`);
  process.exit(1);
}

const part = json?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
if (!part) {
  console.error("❌ La respuesta no trajo imagen. ¿El prompt fue rechazado? Respuesta:");
  console.error(JSON.stringify(json).slice(0, 400));
  process.exit(1);
}

writeFileSync(out, Buffer.from(part.inlineData.data, "base64"));
console.log(`✅ Imagen guardada en: ${out}`);
