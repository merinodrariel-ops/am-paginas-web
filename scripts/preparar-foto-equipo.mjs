#!/usr/bin/env node
/**
 * Prepara la foto de un integrante del Equipo AM: le escribe metadatos IPTC/EXIF/XMP
 * con la geolocalización del consultorio y la sube a Cloudinary con un public_id
 * descriptivo.
 *
 * Uso:
 *   node scripts/preparar-foto-equipo.mjs \
 *     --foto "/ruta/a/la/foto.jpeg" \
 *     --slug dr-juan-pablo-vivas \
 *     --nombre "Dr. Juan Pablo Vivas" \
 *     --rol "Endodoncia y odontología integral" \
 *     --keywords "endodoncia,odontologo,puerto madero" \
 *     [--matricula "MN 44.961"] [--solo-metadatos]
 *
 * Por qué importa: Cloudinary borra todos los metadatos al transformar una imagen,
 * así que además de escribirlos acá hay que pedirlos en la entrega (el loader de
 * Next agrega `fl_keep_iptc` para la carpeta equipo-am). Sin eso, la foto llega
 * al navegador desnuda y el trabajo de acá no se ve en ningún lado.
 */
import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import path from "node:path";

// Consultorio AM — Camila O'Gorman 412, Oficina 101, Puerto Madero, CABA.
// Las mismas coordenadas que publica el schema LocalBusiness del sitio.
const CONSULTORIO = {
  calle: "Camila O'Gorman 412, Oficina 101",
  barrio: "Puerto Madero",
  ciudad: "Ciudad Autónoma de Buenos Aires",
  provincia: "Ciudad Autónoma de Buenos Aires",
  codigoPostal: "C1107DED",
  pais: "Argentina",
  paisISO: "AR",
  lat: -34.620858,
  lon: -58.3609047,
};

const MARCA = "AM Estética Dental";
const SITIO = "https://www.amesteticadental.com";
const CLOUDINARY_FOLDER = "equipo-am";

function arg(nombre, obligatorio = true) {
  const i = process.argv.indexOf(`--${nombre}`);
  if (i === -1 || !process.argv[i + 1]) {
    if (obligatorio) {
      console.error(`❌ Falta --${nombre}`);
      process.exit(1);
    }
    return undefined;
  }
  return process.argv[i + 1];
}

function loadEnv(filePath) {
  try {
    const env = {};
    for (const line of readFileSync(filePath, "utf8").split("\n")) {
      const m = line.match(/^([A-Z_]+)\s*=\s*(.+)$/);
      if (m && !line.startsWith("#")) env[m[1]] = m[2].trim();
    }
    return env;
  } catch {
    return {};
  }
}

const foto = arg("foto");
const slug = arg("slug");
const nombre = arg("nombre");
const rol = arg("rol");
const matricula = arg("matricula", false);
const keywordsExtra = (arg("keywords", false) || "").split(",").map((k) => k.trim()).filter(Boolean);
const soloMetadatos = process.argv.includes("--solo-metadatos");

if (!existsSync(foto)) {
  console.error(`❌ No existe la foto: ${foto}`);
  process.exit(1);
}

// El public_id de Cloudinary es también el nombre de archivo que ve Google.
// Lo armamos desde el slug + rol para que sea legible y no un hash.
const publicId = `${slug}-${rol}-${MARCA}-${CONSULTORIO.barrio}`
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const descripcion = matricula
  ? `${nombre} (${matricula}), ${rol} en ${MARCA}, ${CONSULTORIO.calle}, ${CONSULTORIO.barrio}, Buenos Aires.`
  : `${nombre}, ${rol} en ${MARCA}, ${CONSULTORIO.calle}, ${CONSULTORIO.barrio}, Buenos Aires.`;

const keywords = [
  nombre,
  rol,
  MARCA,
  "odontología estética",
  CONSULTORIO.barrio,
  "Buenos Aires",
  ...(matricula ? [matricula] : []),
  ...keywordsExtra,
];

const anio = new Date().getFullYear();

const tags = [
  // Descripción — la leen Google Imágenes, Bing y cualquier CMS que reciba el archivo.
  `-EXIF:ImageDescription=${descripcion}`,
  `-IPTC:Caption-Abstract=${descripcion}`,
  `-XMP-dc:Description=${descripcion}`,
  `-XMP-dc:Title=${nombre} — ${rol} | ${MARCA}`,
  `-IPTC:ObjectName=${nombre} — ${rol}`,

  // Autoría y licencia — es lo que Google Imágenes muestra en el panel de la foto.
  `-EXIF:Artist=${MARCA}`,
  `-EXIF:Copyright=© ${anio} ${MARCA}. Todos los derechos reservados.`,
  `-IPTC:CopyrightNotice=© ${anio} ${MARCA}. Todos los derechos reservados.`,
  `-IPTC:Credit=${MARCA}`,
  `-IPTC:Source=${MARCA}`,
  `-XMP-dc:Creator=${MARCA}`,
  `-XMP-dc:Rights=© ${anio} ${MARCA}`,
  `-XMP-xmpRights:WebStatement=${SITIO}/equipo-am`,
  `-XMP-photoshop:Credit=${MARCA}`,
  `-XMP-plus:LicensorName=${MARCA}`,
  `-XMP-plus:LicensorURL=${SITIO}`,

  // Ubicación — la dirección del consultorio, escrita como texto y como coordenadas.
  `-IPTC:Sub-location=${CONSULTORIO.calle}`,
  `-IPTC:City=${CONSULTORIO.ciudad}`,
  `-IPTC:Province-State=${CONSULTORIO.provincia}`,
  `-IPTC:Country-PrimaryLocationName=${CONSULTORIO.pais}`,
  `-IPTC:Country-PrimaryLocationCode=${CONSULTORIO.paisISO}`,
  `-XMP-photoshop:City=${CONSULTORIO.ciudad}`,
  `-XMP-photoshop:State=${CONSULTORIO.provincia}`,
  `-XMP-photoshop:Country=${CONSULTORIO.pais}`,
  `-XMP-iptcExt:LocationCreatedSublocation=${CONSULTORIO.barrio}`,
  `-XMP-iptcExt:LocationCreatedCity=${CONSULTORIO.ciudad}`,
  `-XMP-iptcExt:LocationCreatedCountryName=${CONSULTORIO.pais}`,

  // Coordenadas GPS del consultorio.
  `-EXIF:GPSLatitude=${Math.abs(CONSULTORIO.lat)}`,
  `-EXIF:GPSLatitudeRef=${CONSULTORIO.lat < 0 ? "S" : "N"}`,
  `-EXIF:GPSLongitude=${Math.abs(CONSULTORIO.lon)}`,
  `-EXIF:GPSLongitudeRef=${CONSULTORIO.lon < 0 ? "W" : "E"}`,
  `-EXIF:GPSMapDatum=WGS-84`,
  `-XMP-exif:GPSLatitude=${CONSULTORIO.lat}`,
  `-XMP-exif:GPSLongitude=${CONSULTORIO.lon}`,

  ...keywords.flatMap((k) => [`-IPTC:Keywords+=${k}`, `-XMP-dc:Subject+=${k}`]),
];

console.log(`→ Escribiendo metadatos en ${path.basename(foto)}...`);
execFileSync(
  "exiftool",
  ["-overwrite_original", "-codedcharacterset=utf8", "-IPTC:Keywords=", "-XMP-dc:Subject=", ...tags, foto],
  { stdio: "inherit" },
);

console.log(`→ Verificación:`);
console.log(
  execFileSync("exiftool", ["-s", "-GPSPosition", "-Sub-location", "-City", "-Artist", "-Copyright", "-Keywords", foto], {
    encoding: "utf8",
  }),
);

if (soloMetadatos) {
  console.log(`✅ Metadatos listos. public_id sugerido: ${CLOUDINARY_FOLDER}/${publicId}`);
  process.exit(0);
}

const envs = [loadEnv("amesteticadental/.env.local"), loadEnv(".env.local")];
const cred = (k) => process.env[k] || envs.find((e) => e[k])?.[k];
const cloudName = cred("CLOUDINARY_CLOUD_NAME");
const cloudKey = cred("CLOUDINARY_API_KEY");
const cloudSecret = cred("CLOUDINARY_API_SECRET");
if (!cloudName || !cloudKey || !cloudSecret) {
  console.error("❌ Faltan credenciales de Cloudinary (amesteticadental/.env.local)");
  process.exit(1);
}

console.log(`→ Subiendo a Cloudinary/${CLOUDINARY_FOLDER}/${publicId}...`);
const timestamp = Math.floor(Date.now() / 1000);
// `image_metadata=true` le pide a Cloudinary que conserve IPTC/EXIF/XMP en el original.
const params = {
  folder: CLOUDINARY_FOLDER,
  public_id: publicId,
  timestamp: String(timestamp),
};
const paramsStr =
  Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&") + cloudSecret;
const signature = createHash("sha1").update(paramsStr).digest("hex");

const form = new FormData();
form.append("file", new Blob([readFileSync(foto)], { type: "image/jpeg" }), `${publicId}.jpg`);
for (const [k, v] of Object.entries(params)) form.append(k, v);
form.append("api_key", cloudKey);
form.append("signature", signature);

const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: "POST", body: form });
const json = await res.json();
if (!res.ok) {
  console.error(`❌ Cloudinary: ${JSON.stringify(json)}`);
  process.exit(1);
}

console.log(`\n✅ Subida OK`);
console.log(`   URL para src/data/equipo.ts:\n   ${json.secure_url}`);
