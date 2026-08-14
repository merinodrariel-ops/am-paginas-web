import { ARGENTINA_URL, SITE_URL } from "../../site-data";

/**
 * Acuse de recibo al postulante.
 *
 * Se manda por Brevo, que es el proveedor que el sitio ya usa para la lista de
 * novedades (`/api/subscribe`), así que no suma una integración nueva.
 *
 * Regla importante: si el mail falla, la postulación NO falla. El CV ya está
 * guardado y la fila creada; que el acuse no salga es una molestia, no un error
 * que justifique decirle a la persona que su postulación no entró.
 */
const BREVO_KEY = process.env.BREVO_API_KEY;
const REMITENTE = { name: "AM Estética Dental Uruguay", email: "amesteticadentaluruguay@gmail.com" };

function plantilla(nombre: string) {
  const saludo = nombre ? `Hola ${nombre},` : "Hola,";
  return `
    <div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:540px;margin:0 auto;color:#1a1a1a;background:#ffffff">
      <div style="background:#151716;padding:34px 32px;text-align:center">
        <p style="color:#c6a56c;letter-spacing:0.3em;font-size:11px;text-transform:uppercase;margin:0">AM Estética Dental</p>
        <p style="color:rgba(246,241,231,.55);letter-spacing:0.18em;font-size:9px;text-transform:uppercase;margin:8px 0 0">Uruguay · Zona Carrasco</p>
      </div>

      <div style="padding:40px 32px">
        <h2 style="font-weight:300;font-size:24px;margin:0 0 20px">${saludo}</h2>

        <p style="line-height:1.75;color:#4a4d48;margin:0 0 18px">
          Gracias por tu postulación. Ya la recibimos junto con tu CV, y queda guardada en nuestra base
          de candidatos para la sede de Carrasco.
        </p>

        <p style="line-height:1.75;color:#4a4d48;margin:0 0 18px">
          Si tu perfil encaja con alguna de las búsquedas que abramos, el equipo de AM se va a poner en
          contacto con vos. Como la sede todavía está en preparación, los tiempos dependen del avance de
          la obra y de cuándo se abra cada posición.
        </p>

        <p style="line-height:1.75;color:#4a4d48;margin:0 0 26px">
          Desde ya, gracias por tenernos en cuenta y por querer formar parte de lo que estamos construyendo.
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
  `;
}

export async function enviarAcuseDePostulacion(email: string, nombre: string) {
  if (!BREVO_KEY) {
    console.warn("[job-applications] BREVO_API_KEY no configurada: no se envió el acuse al postulante.");
    return;
  }

  if (!email) return;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": BREVO_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: REMITENTE,
        to: [{ email, name: nombre || undefined }],
        subject: "Recibimos tu postulación — AM Estética Dental Uruguay",
        htmlContent: plantilla(nombre),
      }),
    });

    if (!response.ok) {
      const detalle = await response.text().catch(() => "");
      console.error(`[job-applications] Brevo rechazó el acuse (HTTP ${response.status}): ${detalle}`);
    }
  } catch (error) {
    console.error("[job-applications] falló el envío del acuse al postulante:", error);
  }
}
