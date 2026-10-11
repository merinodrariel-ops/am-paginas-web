import { getSupabaseClient } from "./supabase-client";
import { enviarMail, layoutEmail, BOTON_PORTFOLIO } from "./email";
import { armarAviso, destinatariosAviso } from "./aviso-consulta";
import { TRATAMIENTOS, type LeadInput, type LeadResult } from "./leads";

/**
 * Lado servidor de los formularios de consulta.
 *
 * Antes `submitLead` corría en el navegador: insertaba en `marketing_leads` con la
 * clave anónima y nadie se enteraba de la consulta. Ahora el navegador postea a
 * `/api/consultas` (o, desde Uruguay, a `/api/leads`) y acá se guarda el lead y se
 * avisa al equipo por Resend. Ningún secreto viaja al cliente.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarLead(input: LeadInput): { ok: true; lead: LeadInput } | { ok: false; error: string } {
  const fullName = String(input.fullName ?? "").trim();
  if (fullName.length < 2) return { ok: false, error: "Por favor ingresá tu nombre completo" };
  if (fullName.length > 200) return { ok: false, error: "Nombre demasiado largo" };

  const email = String(input.email ?? "").trim().toLowerCase() || undefined;
  const whatsapp = String(input.whatsapp ?? "").trim().slice(0, 50) || undefined;
  if (!email && !whatsapp) return { ok: false, error: "Necesitamos email o WhatsApp para contactarte" };
  if (email && (email.length > 200 || !EMAIL_RE.test(email))) return { ok: false, error: "Email inválido" };

  const message = String(input.message ?? "").trim() || undefined;
  if (message && message.length > 2000) return { ok: false, error: "Mensaje demasiado largo" };

  const interestTags = Array.isArray(input.interestTags)
    ? input.interestTags.map((t) => String(t).slice(0, 60)).slice(0, 15)
    : [];

  // metadata viene del navegador: se acota para que nadie guarde megas en la base.
  const metadata: Record<string, unknown> = {};
  if (input.metadata && typeof input.metadata === "object") {
    for (const [k, v] of Object.entries(input.metadata).slice(0, 20)) {
      if (v === null || typeof v === "boolean" || typeof v === "number") metadata[k.slice(0, 40)] = v;
      else if (typeof v === "string") metadata[k.slice(0, 40)] = v.slice(0, 500);
    }
  }

  return {
    ok: true,
    lead: {
      fullName,
      email,
      whatsapp,
      neighborhood: String(input.neighborhood ?? "").trim().slice(0, 120) || undefined,
      interestTags,
      message,
      metadata,
      origin: input.origin ? String(input.origin).slice(0, 80) : undefined,
    },
  };
}

/** Inserta en `marketing_leads` con la clave anónima (RLS sólo permite INSERT). */
export async function guardarLead(lead: LeadInput): Promise<LeadResult> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    console.error("[leads] faltan variables públicas de Supabase");
    return { success: false, error: "No pudimos enviar el formulario. Escribinos por WhatsApp." };
  }

  const { error } = await supabase.from("marketing_leads").insert({
    full_name: lead.fullName,
    email: lead.email || null,
    whatsapp: lead.whatsapp || null,
    neighborhood: lead.neighborhood || null,
    interest_tags: lead.interestTags ?? [],
    notes: lead.message || null,
    metadata: lead.metadata ?? {},
    origin: lead.origin || "web_form_amesteticadental",
  });

  if (error) {
    // 23505 = email repetido (UNIQUE). Para el visitante la consulta igual "llegó".
    if (error.code === "23505") return { success: true, alreadyExists: true };
    console.error("[leads] insert falló:", error);
    return { success: false, error: "No pudimos enviar el formulario. Intentá de nuevo." };
  }
  return { success: true };
}

function etiquetaTratamiento(slug: string): string {
  return TRATAMIENTOS.find((t) => t.value === slug)?.label ?? slug.replace(/_/g, " ");
}

/** Aviso interno al equipo (NEW_LEAD_NOTIFY_TO, default drarielmerino@gmail.com). Nunca tira. */
export async function avisarNuevaConsulta(lead: LeadInput, opciones: { alreadyExists?: boolean } = {}) {
  const { asunto, html, replyTo } = armarAviso({
    fullName: lead.fullName,
    email: lead.email,
    whatsapp: lead.whatsapp,
    tratamientos: (lead.interestTags ?? []).map(etiquetaTratamiento),
    message: lead.message,
    origin: lead.origin,
    metadata: lead.metadata,
    alreadyExists: opciones.alreadyExists,
  });

  const resultado = await enviarMail({
    para: destinatariosAviso(process.env.NEW_LEAD_NOTIFY_TO),
    asunto,
    html,
    replyTo,
  });
  if (!resultado.ok) console.error("[leads] el aviso interno de nueva consulta NO se envió");
  return resultado;
}

/** Acuse al paciente. Sólo para leads nuevos con email (evita usar el form para spamear terceros). */
export async function enviarAcuseDeConsulta(lead: LeadInput, lang: "es" | "en" = "es") {
  if (!lead.email) return;
  const nombre = lead.fullName.split(/\s+/)[0] || lead.fullName;
  const es = lang !== "en";
  await enviarMail({
    para: lead.email,
    nombre: lead.fullName,
    asunto: es ? "Recibimos tu consulta — AM Estética Dental" : "We received your enquiry — AM Estética Dental",
    html: layoutEmail({
      saludo: es ? `Hola ${nombre},` : `Hi ${nombre},`,
      parrafos: es
        ? [
            "Gracias por escribirnos. Ya recibimos tu consulta y el equipo de AM Estética Dental te va a contactar dentro de las próximas 24 horas hábiles.",
            "Si preferís adelantar la charla, podés escribirnos por WhatsApp desde el enlace al pie de este mail.",
          ]
        : [
            "Thank you for reaching out. We have received your enquiry and the AM Estética Dental team will contact you within the next 24 business hours.",
            "If you prefer, you can message us on WhatsApp using the link at the bottom of this email.",
          ],
      notaFinal: es ? "Mientras tanto, podés conocer nuestro trabajo:" : "In the meantime, take a look at our work:",
      boton: BOTON_PORTFOLIO,
    }),
  });
}

// ─── Rate limit simple ───────────────────────────────────────────────────────
// En memoria por instancia: no es infalible en serverless, pero corta ráfagas de
// un mismo IP. El honeypot y la validación cubren el resto.
const VENTANA_MS = 10 * 60 * 1000;
const MAX_POR_VENTANA = 5;
const intentos = new Map<string, number[]>();

export function superaRateLimit(ip: string, ahora = Date.now()): boolean {
  const recientes = (intentos.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);
  recientes.push(ahora);
  intentos.set(ip, recientes);
  if (intentos.size > 5000) {
    for (const [k, v] of intentos) if (!v.some((t) => ahora - t < VENTANA_MS)) intentos.delete(k);
  }
  return recientes.length > MAX_POR_VENTANA;
}

export function ipDelPedido(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "desconocida"
  );
}
