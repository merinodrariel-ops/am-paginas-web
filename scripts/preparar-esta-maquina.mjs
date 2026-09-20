#!/usr/bin/env node
/**
 * Deja esta computadora lista para trabajar con el repo.
 *
 * Existe porque el código viaja por git pero las credenciales NO —están
 * gitignoreadas a propósito, este repo es público—. Entonces cada máquina nueva
 * arranca con todo el código y cero claves, y los comandos que hablan con Google,
 * Cloudinary o Supabase fallan con errores que no dicen cuál es el problema real.
 *
 * Este script busca la clave de Google en la carpeta de Descargas, la instala
 * donde va, y después dice en castellano qué quedó listo y qué falta.
 *
 *   node scripts/preparar-esta-maquina.mjs
 */

import { existsSync, readdirSync, renameSync, chmodSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const RAIZ = fileURLToPath(new URL("../", import.meta.url));
const DESCARGAS = join(homedir(), "Downloads");
const CLAVE = join(RAIZ, ".gsc-service-account.json");

const linea = () => console.log("─".repeat(64));
const ok = (m) => console.log(`  ✅ ${m}`);
const falta = (m) => console.log(`  ⚠️  ${m}`);

console.log("\n🔧 Preparando esta computadora\n");
linea();

// ── 1. La clave de Google ────────────────────────────────────────────────────
console.log("\n1. Clave de Google (Search Console e indexación)\n");

if (existsSync(CLAVE)) {
  ok("Ya estaba instalada.");
} else {
  // La descarga de Google se llama am-ads-<proyecto>-<id>.json. Si hay varias,
  // gana la más nueva: es la que se acaba de bajar.
  let candidatas = [];
  try {
    candidatas = readdirSync(DESCARGAS)
      .filter((n) => /^am-ads-.*\.json$/.test(n))
      .map((n) => ({ nombre: n, ruta: join(DESCARGAS, n), fecha: statSync(join(DESCARGAS, n)).mtimeMs }))
      .sort((a, b) => b.fecha - a.fecha);
  } catch {
    /* no hay carpeta Descargas; se informa abajo */
  }

  if (candidatas.length > 0) {
    renameSync(candidatas[0].ruta, CLAVE);
    chmodSync(CLAVE, 0o600);
    ok(`Instalada desde Descargas (${candidatas[0].nombre}).`);
    if (candidatas.length > 1) {
      console.log(`     Había ${candidatas.length} archivos parecidos; se usó el más reciente.`);
    }
  } else {
    falta("No la encontré.");
    console.log("     Buscá en Descargas un archivo que empiece con 'am-ads-' y termine en '.json',");
    console.log("     dejalo ahí, y volvé a correr este comando.");
    console.log("     Si no lo tenés, pedile a Claude que genere una clave nueva.");
  }
}

if (existsSync(CLAVE)) chmodSync(CLAVE, 0o600);

// ── 2. Las otras credenciales ────────────────────────────────────────────────
console.log("\n2. Otras credenciales\n");

const OTRAS = [
  { ruta: "amesteticadental/.env.local", para: "imágenes del sitio, casos clínicos y mails de los formularios" },
  { ruta: ".env.gemini", para: "generar imágenes con IA desde la terminal" },
  { ruta: ".env.ads", para: "campañas de Google Ads" },
];

let faltantes = 0;
for (const { ruta, para } of OTRAS) {
  const completa = join(RAIZ, ruta);
  if (existsSync(completa)) {
    chmodSync(completa, 0o600);
    ok(`${ruta}`);
  } else {
    faltantes++;
    falta(`${ruta} — hace falta para: ${para}`);
  }
}

if (faltantes > 0) {
  console.log("\n   Estas no se descargan: hay que copiarlas por AirDrop desde la otra");
  console.log("   computadora. Si no vas a usar eso, podés ignorarlas sin problema.");
}

// ── 3. Prueba real ───────────────────────────────────────────────────────────
console.log("\n3. Probando la conexión con Google\n");

if (!existsSync(CLAVE)) {
  falta("Salteado: falta la clave.");
} else {
  try {
    const salida = execFileSync("node", [join(RAIZ, "scripts/verificar-credenciales-google.mjs")], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    console.log(salida.split("\n").map((l) => (l ? `  ${l}` : l)).join("\n"));
  } catch (e) {
    console.log((e.stdout || "") + (e.stderr || ""));
    falta("La verificación falló. Copiá el error de arriba y mostráselo a Claude.");
    process.exit(1);
  }
}

linea();
console.log("\n🎉 Listo. Si arriba está todo en verde, esta computadora quedó igual que la otra.\n");
