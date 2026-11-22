import { NextRequest, NextResponse } from "next/server";

/**
 * Alta al newsletter de The Dental Review.
 *
 * Todo gratis: los contactos viven en Resend (segmento "The Dental Review —
 * Newsletter"), que en su plan free permite hasta 1.000 contactos con envíos
 * ilimitados por Broadcasts. La baja la resuelve Resend sola con
 * {{{RESEND_UNSUBSCRIBE_URL}}} en cada envío: no hay que mantener nada propio.
 *
 * Al pasar los ~1.000 suscriptores hay que decidir: plan pago de Resend o
 * migrar la lista (export CSV) a Listmonk en el VPS.
 */
export const runtime = "nodejs";
export const maxDuration = 20;

const RESEND = "https://api.resend.com";
const FROM = "The Dental Review <newsletter@thedentalreview.com>";
const PERFILES = new Set(["odontologo", "estudiante", "industria", "paciente"]);

const VENTANA_MS = 10 * 60 * 1000;
const MAX_POR_VENTANA = 5;
const intentos = new Map<string, number[]>();

function superaRateLimit(ip: string): boolean {
  const ahora = Date.now();
  const recientes = (intentos.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);
  recientes.push(ahora);
  intentos.set(ip, recientes);
  if (intentos.size > 5000) intentos.clear();
  return recientes.length > MAX_POR_VENTANA;
}

function headers(key: string) {
  // Sin User-Agent, Cloudflare de Resend responde 403 (error 1010).
  return { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "User-Agent": "TheDentalReview/1.0" };
}

function bienvenida(nombre: string) {
  const hola = nombre ? `Hola ${nombre},` : "Hola,";
  return `<!doctype html><html><body style="margin:0;background:#f7f4ee;font-family:Georgia,serif;color:#0e0e0e">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e8e4da">
<tr><td style="padding:32px 36px;border-bottom:1px solid #e8e4da;font-size:22px;font-weight:700">The Dental Review</td></tr>
<tr><td style="padding:32px 36px;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#333">
<p>${hola}</p>
<p>Ya estás suscripto a The Dental Review. Una vez por mes vas a recibir las notas nuevas sobre estética dental, odontología digital y lo que pasa en los congresos de la región.</p>
<p>Sin spam y sin promociones. Te podés dar de baja cuando quieras desde el pie de cada envío.</p>
<p style="margin-top:28px"><a href="https://www.thedentalreview.com/noticias" style="background:#0e0e0e;color:#ffffff;padding:12px 24px;text-decoration:none;font-size:13px;letter-spacing:.08em">LEER LAS ÚLTIMAS NOTAS</a></p>
<p style="margin-top:32px;font-size:13px;color:#6b6560">Dr. Ariel Merino · MN 34.869<br>Editor de The Dental Review</p>
</td></tr></table></td></tr></table></body></html>`;
}

export async function POST(req: NextRequest) {
  const key = process.env.RESEND_API_KEY;
  const segmento = process.env.RESEND_SEGMENT_ID;
  if (!key || !segmento) {
    console.error("[newsletter] faltan RESEND_API_KEY o RESEND_SEGMENT_ID");
    return NextResponse.json({ error: "El newsletter no está disponible en este momento." }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconocida";
  if (superaRateLimit(ip)) {
    return NextResponse.json({ error: "Demasiados intentos seguidos. Probá en unos minutos." }, { status: 429 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    nombre?: string; email?: string; perfil?: string; origen?: string; acepta?: boolean; website?: string;
  };

  // Honeypot: al bot se le dice OK y no se guarda nada.
  if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true });

  const email = String(body.email || "").trim().toLowerCase();
  const nombre = String(body.nombre || "").trim().slice(0, 80);
  const perfil = PERFILES.has(String(body.perfil)) ? String(body.perfil) : "sin_dato";
  const origen = String(body.origen || "web").slice(0, 200);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return NextResponse.json({ error: "Necesitamos un email válido." }, { status: 400 });
  }
  if (body.acepta !== true) {
    return NextResponse.json({ error: "Necesitamos tu consentimiento para enviarte el newsletter." }, { status: 400 });
  }

  const alta = await fetch(`${RESEND}/contacts`, {
    method: "POST",
    headers: headers(key),
    body: JSON.stringify({
      email,
      first_name: nombre || undefined,
      unsubscribed: false,
      properties: { perfil, origen },
      segments: [{ id: segmento }],
    }),
  });

  if (!alta.ok) {
    const detalle = await alta.text();
    // Si ya existía, se lo reactiva y se lo suma al segmento: para el lector
    // la acción "suscribirme" funcionó igual.
    if (alta.status === 409 || /already exists/i.test(detalle)) {
      await fetch(`${RESEND}/contacts/${encodeURIComponent(email)}`, {
        method: "PATCH",
        headers: headers(key),
        body: JSON.stringify({ unsubscribed: false, properties: { perfil, origen } }),
      }).catch(() => null);
      await fetch(`${RESEND}/contacts/${encodeURIComponent(email)}/segments/${segmento}`, {
        method: "POST",
        headers: headers(key),
      }).catch(() => null);
      return NextResponse.json({ ok: true, yaSuscripto: true });
    }
    console.error(`[newsletter] alta fallida (HTTP ${alta.status}):`, detalle);
    return NextResponse.json({ error: "No pudimos registrarte en este momento. Probá más tarde." }, { status: 502 });
  }

  // Bienvenida. Si falla, la persona ya quedó suscripta: se loguea y listo.
  await fetch(`${RESEND}/emails`, {
    method: "POST",
    headers: headers(key),
    body: JSON.stringify({
      from: FROM,
      to: email,
      reply_to: "newsletter@thedentalreview.com",
      subject: "Bienvenido a The Dental Review",
      html: bienvenida(nombre),
    }),
  })
    .then(async (r) => { if (!r.ok) console.error("[newsletter] bienvenida:", r.status, await r.text()); })
    .catch((e) => console.error("[newsletter] bienvenida:", e));

  return NextResponse.json({ ok: true });
}
