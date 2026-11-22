#!/usr/bin/env node
/**
 * Newsletter mensual de The Dental Review — 100% gratis (Resend Broadcasts, plan free:
 * hasta 1.000 contactos, envíos ilimitados).
 *
 * Uso:
 *   node scripts/newsletter.mjs preview edicion.json          → HTML local para revisar (abre el navegador)
 *   node scripts/newsletter.mjs test    edicion.json          → manda la edición SOLO a merinodrariel@gmail.com
 *   node scripts/newsletter.mjs draft   edicion.json          → crea el broadcast en Resend como borrador
 *   node scripts/newsletter.mjs send    edicion.json --si     → crea y ENVÍA a todo el segmento
 *   node scripts/newsletter.mjs stats                          → cantidad de suscriptores por perfil
 *
 * edicion.json:
 * {
 *   "asunto": "…", "preheader": "…", "intro": "párrafo de apertura",
 *   "notas": [{ "titulo": "…", "bajada": "…", "url": "https://…", "imagen": "https://…" }]
 * }
 *
 * Lee RESEND_API_KEY y RESEND_SEGMENT_ID de thedentalreview/.env.local.
 * Regla: siempre `test` antes de `send` (la revisión visual la hace el Dr.).
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const DIR = path.dirname(new URL(import.meta.url).pathname);
const ENV = path.join(DIR, "..", ".env.local");
const env = Object.fromEntries(
  fs.existsSync(ENV)
    ? fs.readFileSync(ENV, "utf8").split("\n").filter((l) => l.includes("=")).map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()])
    : [],
);
const KEY = process.env.RESEND_API_KEY || env.RESEND_API_KEY;
const SEGMENT = process.env.RESEND_SEGMENT_ID || env.RESEND_SEGMENT_ID;
const FROM = "The Dental Review <newsletter@thedentalreview.com>";
const TEST_TO = "merinodrariel@gmail.com";
const H = { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json", "User-Agent": "TheDentalReview/1.0" };

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function render(ed, { test = false } = {}) {
  const baja = test ? "#" : "{{{RESEND_UNSUBSCRIBE_URL}}}";
  const hola = test ? "Hola Ariel," : "Hola {{{contact.first_name|}}},";
  const notas = ed.notas
    .map(
      (n, i) => `
<tr><td style="padding:${i === 0 ? "0" : "28px"} 36px 0">
  ${n.imagen ? `<a href="${esc(n.url)}"><img src="${esc(n.imagen)}" width="488" alt="${esc(n.titulo)}" style="display:block;width:100%;max-width:488px;height:auto;border:0"></a>` : ""}
  <h2 style="font-family:Georgia,serif;font-weight:400;font-size:${i === 0 ? 26 : 20}px;line-height:1.25;margin:18px 0 8px;color:#0e0e0e"><a href="${esc(n.url)}" style="color:#0e0e0e;text-decoration:none">${esc(n.titulo)}</a></h2>
  <p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#444;margin:0 0 12px">${esc(n.bajada)}</p>
  <a href="${esc(n.url)}" style="font-family:Arial,sans-serif;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#b8954a;text-decoration:none">Leer la nota →</a>
</td></tr>`,
    )
    .join("");
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(ed.asunto)}</title></head>
<body style="margin:0;background:#f7f4ee">
<span style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(ed.preheader || "")}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 12px">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#fff;border:1px solid #e8e4da">
<tr><td style="padding:28px 36px;border-bottom:1px solid #e8e4da">
  <div style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:#0e0e0e">The Dental Review</div>
  <div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#b8954a;margin-top:6px">${esc(ed.edicion || "Newsletter mensual")}</div>
</td></tr>
<tr><td style="padding:28px 36px 24px;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#333">
  <p style="margin:0 0 12px">${hola}</p>
  <p style="margin:0">${esc(ed.intro)}</p>
</td></tr>
${notas}
<tr><td style="padding:36px 36px 8px;font-family:Arial,sans-serif;font-size:13px;line-height:1.6;color:#6b6560">
  <p style="margin:0">Dr. Ariel Merino · MN 34.869<br>Editor de The Dental Review</p>
</td></tr>
<tr><td style="padding:20px 36px 28px;border-top:1px solid #e8e4da;font-family:Arial,sans-serif;font-size:11px;line-height:1.6;color:#999">
  Recibís este email porque te suscribiste en thedentalreview.com. <a href="${baja}" style="color:#999">Darme de baja</a>.
</td></tr>
</table></td></tr></table></body></html>`;
}

async function api(method, url, body) {
  const r = await fetch(`https://api.resend.com${url}`, { method, headers: H, body: body ? JSON.stringify(body) : undefined });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`${method} ${url} → ${r.status} ${JSON.stringify(j)}`);
  return j;
}

const [cmd, archivo, flag] = process.argv.slice(2);
if (!KEY || !SEGMENT) throw new Error("Faltan RESEND_API_KEY / RESEND_SEGMENT_ID en thedentalreview/.env.local");

if (cmd === "stats") {
  const { data = [] } = await api("GET", `/segments/${SEGMENT}/contacts?limit=100`);
  const activos = data.filter((c) => !c.unsubscribed);
  console.log(`Suscriptores activos: ${activos.length} (de ${data.length}${data.length === 100 ? "+" : ""}) · límite gratis: 1.000`);
  process.exit(0);
}

if (!archivo) throw new Error("Falta el archivo de edición (edicion.json)");
const ed = JSON.parse(fs.readFileSync(archivo, "utf8"));

if (cmd === "preview") {
  const out = archivo.replace(/\.json$/, ".html");
  fs.writeFileSync(out, render(ed, { test: true }));
  console.log(out);
  try { execSync(`open "${out}"`); } catch {}
} else if (cmd === "test") {
  const r = await api("POST", "/emails", { from: FROM, to: TEST_TO, subject: `[PRUEBA] ${ed.asunto}`, html: render(ed, { test: true }) });
  console.log("Prueba enviada a", TEST_TO, r.id);
} else if (cmd === "draft" || cmd === "send") {
  if (cmd === "send" && flag !== "--si") throw new Error("Para enviar a toda la lista agregá --si (y mandá antes un `test`).");
  const r = await api("POST", "/broadcasts", {
    segment_id: SEGMENT,
    from: FROM,
    reply_to: "newsletter@thedentalreview.com",
    subject: ed.asunto,
    name: ed.edicion || ed.asunto,
    html: render(ed),
    send: cmd === "send",
  });
  console.log(cmd === "send" ? "ENVIADO a todo el segmento:" : "Borrador creado en Resend:", r.id);
} else {
  console.log("Comandos: preview | test | draft | send --si | stats");
}
