import { NextRequest, NextResponse } from "next/server";
import { enviarMail, guardarContacto } from "../../lib/email";
import { ARGENTINA_URL, SITE_URL } from "../../site-data";

/**
 * Lista de novedades de la apertura en Carrasco.
 *
 * Migrada de Brevo a Resend para que la red tenga un solo proveedor de mail (ver
 * `app/lib/email.ts`). Brevo había entrado en el commit 6570857 y su clave dejó de
 * ser válida: la API respondía 401 y este endpoint devolvía 503 a cada visitante,
 * así que todos los leads de la lista de espera se estaban perdiendo.
 *
 * Orden deliberado: primero se guarda el contacto, después se manda el mail. Si el
 * mail falla pero el contacto quedó guardado, el lead NO se pierde y se responde
 * ok. Al revés sería peor: una confirmación linda para alguien que no quedó
 * anotado en ningún lado.
 */
export async function POST(req: NextRequest) {
  const { email, nombre } = await req.json().catch(() => ({}) as { email?: string; nombre?: string });

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email requerido" }, { status: 400 });
  }

  const contacto = await guardarContacto({ email, nombre });

  if (!contacto.ok) {
    return NextResponse.json({ error: "No podemos registrar datos en este momento." }, { status: 503 });
  }

  await enviarMail({
    para: email,
    nombre: nombre || undefined,
    asunto: "Te avisamos cuando abramos en Carrasco",
    html: `
      <div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:540px;margin:0 auto;color:#1a1a1a;background:#ffffff">
        <div style="background:#151716;padding:34px 32px;text-align:center">
          <p style="color:#c6a56c;letter-spacing:0.3em;font-size:11px;text-transform:uppercase;margin:0">AM Estética Dental</p>
          <p style="color:rgba(246,241,231,.55);letter-spacing:0.18em;font-size:9px;text-transform:uppercase;margin:8px 0 0">Uruguay · Zona Carrasco</p>
        </div>
        <div style="padding:40px 32px">
          <h2 style="font-weight:300;font-size:24px;margin:0 0 20px">Hola${nombre ? ` ${nombre}` : ""},</h2>
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
