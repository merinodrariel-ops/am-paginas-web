import { NextRequest, NextResponse } from "next/server";
import { enviarMail } from "../../lib/email";
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
    html: `
      <div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:540px;margin:0 auto;color:#1a1a1a;background:#ffffff">
        <div style="background:#151716;padding:34px 32px;text-align:center">
          <p style="color:#c6a56c;letter-spacing:0.3em;font-size:11px;text-transform:uppercase;margin:0">AM Estética Dental</p>
          <p style="color:rgba(246,241,231,.55);letter-spacing:0.18em;font-size:9px;text-transform:uppercase;margin:8px 0 0">Uruguay · Zona Carrasco</p>
        </div>
        <div style="padding:40px 32px">
          <h2 style="font-weight:300;font-size:24px;margin:0 0 20px">Hola ${nombreLimpio},</h2>
          <p style="line-height:1.75;color:#4a4d48;margin:0 0 18px">
            Quedaste en la lista de la apertura de AM Estética Dental en zona Carrasco, Montevideo.
            Te vamos a escribir apenas tengamos fecha confirmada y agenda abierta.
          </p>
          <p style="line-height:1.75;color:#4a4d48;margin:0 0 26px">
            Sólo te vamos a escribir con información concreta. Nada de spam.
          </p>
          <div style="border-top:1px solid #e8e5df;padding-top:26px">
            <p style="line-height:1.7;color:#7a7d78;font-size:14px;margin:0 0 14px">
              Mientras tanto, podés conocer el trabajo que llega a Montevideo:
            </p>
            <a href="${ARGENTINA_URL}/casos-antes-y-despues"
               style="display:inline-block;background:#c6a56c;color:#151716;padding:13px 28px;text-decoration:none;font-weight:600;font-size:13px">
              Ver el portfolio clínico
            </a>
          </div>
        </div>
        <div style="padding:22px 32px;border-top:1px solid #e8e5df;font-size:11px;color:#9a9a9a;text-align:center">
          AM Estética Dental Uruguay · Zona Carrasco, Montevideo<br />
          <a href="${SITE_URL}" style="color:#9a9a9a">amesteticadental.uy</a>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
