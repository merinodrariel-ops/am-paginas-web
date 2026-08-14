import { NextRequest, NextResponse } from "next/server";

const BREVO_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID);

export async function POST(req: NextRequest) {
  const { email, nombre } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email requerido" }, { status: 400 });
  }

  // Se nombra QUÉ falta. Antes decía sólo "Brevo no configurado" y en producción
  // eso obligaba a adivinar entre la clave y el id de lista mientras el formulario
  // devolvía 503 a cada visitante.
  const faltantes: string[] = [];
  if (!BREVO_KEY) faltantes.push("BREVO_API_KEY");
  if (!Number.isInteger(BREVO_LIST_ID) || BREVO_LIST_ID < 1) faltantes.push("BREVO_LIST_ID");

  if (faltantes.length > 0) {
    console.error(
      `[subscribe] Faltan variables de entorno en este proyecto de Vercel: ${faltantes.join(", ")}. ` +
        `La lista de novedades está rechazando TODOS los registros.`,
    );
    return NextResponse.json({ error: "No podemos registrar datos en este momento." }, { status: 503 });
  }

  // Agregar contacto a Brevo
  const addContact = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": BREVO_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: nombre || "" },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!addContact.ok) {
    const err = await addContact.json();
    // Ignorar "contact already exists"
    if (err.code !== "duplicate_parameter") {
      console.error("Brevo error:", err);
    }
  }

  // Email de confirmación al lead
  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": BREVO_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      sender: { name: "AM Estética Dental", email: "amesteticadentaluruguay@gmail.com" },
      to: [{ email }],
      subject: "Te avisamos cuando abramos en Carrasco",
      htmlContent: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a">
          <div style="background:#141414;padding:32px;text-align:center">
            <p style="color:#C9A96E;letter-spacing:0.3em;font-size:11px;text-transform:uppercase;margin:0">AM Estética Dental</p>
          </div>
          <div style="padding:40px 32px">
            <h2 style="font-weight:300;margin-bottom:16px">Hola${nombre ? ` ${nombre}` : ""}!</h2>
            <p style="line-height:1.7;color:#555">Quedaste en nuestra lista de espera para la apertura en <strong>zona Carrasco, Miraflores 1445, Oficina 202, Montevideo</strong>. Te escribimos en cuanto tengamos fecha confirmada.</p>
            <p style="line-height:1.7;color:#555">Mientras tanto, podés explorar el portfolio clínico de AM Estética Dental:</p>
            <a href="https://www.amesteticadental.com/casos-antes-y-despues" style="display:inline-block;background:#C9A96E;color:#141414;padding:12px 28px;border-radius:100px;text-decoration:none;font-weight:600;font-size:13px;margin-top:8px">Explorar portfolio AM →</a>
          </div>
          <div style="padding:20px 32px;border-top:1px solid #eee;font-size:11px;color:#999;text-align:center">
            AM Estética Dental · Montevideo, Uruguay
          </div>
        </div>
      `,
    }),
  });

  return NextResponse.json({ ok: true });
}
