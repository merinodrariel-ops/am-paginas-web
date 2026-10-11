import { timingSafeEqual } from "node:crypto";

/**
 * Protecciones para endpoints públicos que gastan plata (Gemini) o hablan en
 * nombre del sitio (IndexNow).
 *
 * Por qué existe (2026-10-10): `/api/smile-design/enhance` aceptaba cualquier POST
 * de cualquier origen, sin límite por IP. Cualquiera con `curl` podía quemar la
 * cuota paga de Gemini. Nada de esto es infalible —el Origin se falsifica fuera del
 * navegador—, por eso son capas: origen + tamaño + rate limit + (opcional) Turnstile.
 */

// ─── Origen ──────────────────────────────────────────────────────────────────

const ORIGENES_PROPIOS = new Set([
  "https://www.amesteticadental.com",
  "https://amesteticadental.com",
  "https://am-estetica-dental.vercel.app",
]);

// Previews de Vercel del mismo equipo (am-estetica-dental-<hash>-merinodrariel-ops-projects.vercel.app).
const PREVIEW_VERCEL = /^https:\/\/am-estetica-dental-[a-z0-9-]+-merinodrariel-ops-projects\.vercel\.app$/;

function origenPermitido(origin: string): boolean {
  if (ORIGENES_PROPIOS.has(origin)) return true;
  if (PREVIEW_VERCEL.test(origin)) return true;
  if (process.env.VERCEL_URL && origin === `https://${process.env.VERCEL_URL}`) return true;
  if (process.env.NODE_ENV !== "production" && /^https?:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+)(:\d+)?$/.test(origin)) {
    return true;
  }
  return false;
}

/** Acepta el pedido si el Origin (o, en su defecto, el Referer) es uno de los dominios propios. */
export function esOrigenPropio(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (origin) return origenPermitido(origin);
  const referer = req.headers.get("referer");
  if (!referer) return false;
  try {
    return origenPermitido(new URL(referer).origin);
  } catch {
    return false;
  }
}

// ─── Tamaño del cuerpo ───────────────────────────────────────────────────────

/**
 * Lee el cuerpo cortando en `maxBytes`. No confía en Content-Length: un pedido
 * chunked no lo trae, y un cliente malicioso puede mentirlo.
 * Devuelve `null` si se pasa del tope.
 */
export async function leerCuerpoConTope(req: Request, maxBytes: number): Promise<string | null> {
  const declarado = Number(req.headers.get("content-length") || 0);
  if (declarado > maxBytes) return null;
  if (!req.body) return "";

  const reader = req.body.getReader();
  const partes: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel().catch(() => {});
      return null;
    }
    partes.push(value);
  }
  return Buffer.concat(partes).toString("utf8");
}

// ─── Rate limit ──────────────────────────────────────────────────────────────

export function ipDe(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "desconocida";
}

type Ventana = { limite: number; segundos: number };

// Credenciales de Upstash Redis (o Vercel KV, que expone las mismas por REST).
function redisRest(): { url: string; token: string } | null {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

async function contarEnRedis(clave: string, segundos: number): Promise<number | null> {
  const cred = redisRest();
  if (!cred) return null;
  try {
    const res = await fetch(`${cred.url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${cred.token}`, "Content-Type": "application/json" },
      body: JSON.stringify([
        ["INCR", clave],
        ["EXPIRE", clave, String(segundos), "NX"],
      ]),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Array<{ result?: number }>;
    return typeof data?.[0]?.result === "number" ? data[0].result : null;
  } catch {
    return null; // Redis caído: se cae al contador en memoria, no se corta el servicio
  }
}

// Respaldo en memoria: vale por instancia de la función serverless, así que es
// best-effort (una ráfaga desde una IP suele caer en la misma instancia caliente).
const memoria = new Map<string, { n: number; vence: number }>();

function contarEnMemoria(clave: string, segundos: number): number {
  const ahora = Date.now();
  if (memoria.size > 5000) {
    for (const [k, v] of memoria) if (v.vence <= ahora) memoria.delete(k);
  }
  const actual = memoria.get(clave);
  if (!actual || actual.vence <= ahora) {
    memoria.set(clave, { n: 1, vence: ahora + segundos * 1000 });
    return 1;
  }
  actual.n += 1;
  return actual.n;
}

/** `true` si la IP todavía tiene cupo en todas las ventanas. */
export async function dentroDelLimite(prefijo: string, ip: string, ventanas: Ventana[]): Promise<boolean> {
  for (const { limite, segundos } of ventanas) {
    const bucket = Math.floor(Date.now() / 1000 / segundos);
    const clave = `rl:${prefijo}:${segundos}:${bucket}:${ip}`;
    const n = (await contarEnRedis(clave, segundos)) ?? contarEnMemoria(clave, segundos);
    if (n > limite) return false;
  }
  return true;
}

// ─── Cloudflare Turnstile (opcional) ─────────────────────────────────────────

/** Turnstile se exige sólo si `TURNSTILE_SECRET_KEY` está cargada en el entorno. */
export function turnstileActivo(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY);
}

export async function verificarTurnstile(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (typeof token !== "string" || token.length === 0 || token.length > 4096) return false;
  try {
    const form = new URLSearchParams({ secret, response: token });
    if (ip !== "desconocida") form.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
      cache: "no-store",
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

// ─── Secretos compartidos ────────────────────────────────────────────────────

export function secretoCoincide(recibido: string | null, esperado: string | undefined): boolean {
  if (!recibido || !esperado) return false;
  const a = Buffer.from(recibido);
  const b = Buffer.from(esperado);
  return a.length === b.length && timingSafeEqual(a, b);
}
