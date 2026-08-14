import { NextRequest, NextResponse } from "next/server";
import { enviarMail } from "../../lib/email";
import { BOTON_PORTFOLIO, layoutEmail } from "../../lib/email-layout";
import { ARGENTINA_URL, SITE_URL } from "../../site-data";

/**
 * Lista de novedades de la apertura en Carrasco.
 *
 * El contacto se guarda en `marketing_leads` de Supabase, a través del endpoint
 * del sitio argentino —la misma tabla que ya usan los formularios de Buenos
 * Aires—, y recién después se manda el mail de confirmación.
 *
 * Ese orden es deliberado. Antes esto vivía en un proveedor externo (Brevo) cuya
 * clave dejó de ser válida: el endpoint devolvía 503 a cada visitante y cada lead
 * se perdía sin dejar rastro. Ahora el lead queda guardado en una base propia
 * aunque el proveedor de mail esté caído, que es el único orden en el que un
 * fallo no cuesta un paciente.
 */
export const runtime = "nodejs";
export const maxDuration = 30;

const LEADS_ENDPOINT = `${ARGENTINA_URL}/api/leads`;

export async function POST(req: NextRequest) {
  const { nombre, apellido, email } = await req
    .json()
    .catch(() => ({}) as { nombre?: string; apellido?: string; email?: string });

  const nombreLimpio = String(nombre || "").trim();
  const apellidoLimpio = String(apellido || "").trim();
  const emailLimpio = String(email || "").trim().toLowerCase();

  if (!nombreLimpio || !apellidoLimpio) {
    return NextResponse.json({ error: "Necesitamos tu nombre y apellido." }, { status: 400 });
  }

  if (!emailLimpio || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpio)) {
    return NextResponse.json({ error: "Necesitamos un email válido." }, { status: 400 });
  }

  // 1. Guardar el lead. Si esto falla, se corta: no tiene sentido mandar una
  //    confirmación linda a alguien que no quedó registrado en ningún lado.
  try {
    const guardado = await fetch(LEADS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: SITE_URL },
      body: JSON.stringify({
        fullName: `${nombreLimpio} ${apellidoLimpio}`,
        email: emailLimpio,
        interestTags: ["apertura_carrasco"],
        metadata: { sede: "uruguay", formulario: "lista_novedades" },
      }),
    });

    if (!guardado.ok) {
      const detalle = await guardado.json().catch(() => ({}));
      console.error(`[subscribe] no se pudo guardar el lead (HTTP ${guardado.status}):`, detalle);
      return NextResponse.json(
        { error: detalle.error || "No podemos registrar tus datos en este momento." },
        { status: 503 },
      );
    }
  } catch (error) {
    console.error("[subscribe] falló el guardado del lead:", error);
    return NextResponse.json({ error: "No podemos registrar tus datos en este momento." }, { status: 503 });
  }

  // 2. Confirmación. Si falla, el lead YA está guardado: se registra el error
  //    pero al visitante se le confirma, porque para él la acción sí funcionó.
  await enviarMail({
    para: emailLimpio,
    nombre: nombreLimpio,
    asunto: "Te avisamos cuando abramos en Carrasco",
    html: layoutEmail({
      saludo: `Hola ${nombreLimpio},`,
      parrafos: [
        "Quedaste en la lista de la apertura de AM Estética Dental en zona Carrasco, Montevideo. Te vamos a escribir apenas tengamos fecha confirmada y agenda abierta.",
        "Sólo te vamos a escribir con información concreta. Nada de spam.",
      ],
      notaFinal: "Mientras tanto, podés conocer el trabajo que llega a Montevideo:",
      boton: BOTON_PORTFOLIO,
    }),
  });

  return NextResponse.json({ ok: true });
}
