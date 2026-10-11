import { NextResponse } from "next/server";
import {
  avisarNuevaConsulta,
  enviarAcuseDeConsulta,
  guardarLead,
  ipDelPedido,
  superaRateLimit,
  validarLead,
} from "@/lib/leads-server";
import type { LeadInput } from "@/lib/leads";

/**
 * Formularios de consulta de amesteticadental.com (contacto ES/EN y simulador).
 *
 * Orden deliberado: 1) guardar el lead, 2) avisar al equipo, 3) acuse al paciente.
 * Si Resend falla, el lead ya quedó en `marketing_leads` y al visitante se le
 * confirma igual. Los avisos van a NEW_LEAD_NOTIFY_TO (default
 * drarielmerino@gmail.com) — reemplaza al viejo aviso de EmailJS.
 */
export const runtime = "nodejs";
export const maxDuration = 30;

// El navegador no elige con qué etiqueta queda el lead: sólo valores conocidos.
const ORIGENES_VALIDOS = new Set(["web_form_amesteticadental", "web_form_amesteticadental_uy"]);

export async function POST(request: Request) {
  if (superaRateLimit(ipDelPedido(request))) {
    return NextResponse.json(
      { success: false, error: "Recibimos demasiados envíos seguidos. Probá en unos minutos o escribinos por WhatsApp." },
      { status: 429 },
    );
  }

  let body: LeadInput & { website?: unknown; lang?: unknown };
  try {
    const texto = await request.text();
    if (texto.length > 20_000) {
      return NextResponse.json({ success: false, error: "Datos demasiado largos." }, { status: 413 });
    }
    body = JSON.parse(texto);
  } catch {
    return NextResponse.json({ success: false, error: "No pudimos leer los datos." }, { status: 400 });
  }

  // Honeypot: un humano nunca ve el campo "website". Al bot se le responde OK y no se hace nada.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const validado = validarLead(body);
  if (!validado.ok) {
    return NextResponse.json({ success: false, error: validado.error }, { status: 400 });
  }

  const lead: LeadInput = {
    ...validado.lead,
    origin: validado.lead.origin && ORIGENES_VALIDOS.has(validado.lead.origin) ? validado.lead.origin : "web_form_amesteticadental",
    metadata: { ...validado.lead.metadata, site: "amesteticadental.com" },
  };

  const resultado = await guardarLead(lead);
  if (!resultado.success) {
    return NextResponse.json(resultado, { status: 503 });
  }

  await avisarNuevaConsulta(lead, { alreadyExists: resultado.alreadyExists });
  if (!resultado.alreadyExists) {
    await enviarAcuseDeConsulta(lead, body.lang === "en" ? "en" : "es");
  }

  return NextResponse.json({ success: true, alreadyExists: resultado.alreadyExists ?? false });
}
