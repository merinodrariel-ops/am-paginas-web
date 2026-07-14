#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

function loadEnv(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");
    const env = {};
    content.split("\n").forEach((line) => {
      const match = line.match(/^([A-Z_]+)\s*=\s*(.+)$/);
      if (match && !line.startsWith("#")) env[match[1]] = match[2].trim();
    });
    return env;
  } catch {
    return {};
  }
}

function getCred(key, envs) {
  if (process.env[key]) return process.env[key];
  for (const env of envs) if (env[key]) return env[key];
  throw new Error(`Falta ${key}`);
}

const prompt = process.argv[2];
if (!prompt) {
  console.error('Uso: node generar-y-subir-cloudinary.mjs "prompt" [folder]');
  process.exit(1);
}

const folder = (process.argv[3] && !process.argv[3].startsWith("--")) ? process.argv[3] : "noticias";
const envs = [loadEnv(".env.gemini"), loadEnv("amesteticadental/.env.local"), loadEnv(".env.local")];

const geminiKey = getCred("GEMINI_API_KEY", envs);
const cloudName = getCred("CLOUDINARY_CLOUD_NAME", envs);
const cloudKey = getCred("CLOUDINARY_API_KEY", envs);
const cloudSecret = getCred("CLOUDINARY_API_SECRET", envs);

console.log(`→ Generando imagen...`);
const genRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${geminiKey}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
});

const genJson = await genRes.json();
if (!genRes.ok) {
  console.error(`❌ Gemini: ${genJson?.error?.message}`);
  process.exit(1);
}

const part = genJson?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
if (!part) {
  console.error("❌ No imagen");
  process.exit(1);
}

const imgBuffer = Buffer.from(part.inlineData.data, "base64");
const publicId = `imagen-${Date.now()}`;
const timestamp = Math.floor(Date.now() / 1000);

console.log(`→ Subiendo a Cloudinary/${folder}...`);

const formData = new FormData();
formData.append("file", new File([imgBuffer], "img.png", { type: "image/png" }));
formData.append("folder", folder);
formData.append("public_id", publicId);
formData.append("api_key", cloudKey);
formData.append("timestamp", timestamp);

// Signature HMAC-SHA1 para autenticación
const paramsStr = `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${cloudSecret}`;
const signature = createHash("sha1").update(paramsStr).digest("hex");
formData.append("signature", signature);

const upRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
  method: "POST",
  body: formData,
});

if (!upRes.ok) {
  const err = await upRes.text();
  console.error(`❌ Cloudinary: ${err}`);
  process.exit(1);
}

const upJson = await upRes.json();
const url = upJson.secure_url.replace("/upload/", "/upload/q_auto,f_auto/");
console.log(`✅ ${url}`);
