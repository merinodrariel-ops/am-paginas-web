/**
 * Envío de mails del sitio argentino, sobre Resend.
 *
 * Reusa la cuenta y el dominio verificado que ya usa `am-clinica-main`: la marca
 * manda desde un solo lugar y no hay dos reputaciones de envío que cuidar.
 *
 * El diseño del mail vive acá, en el repo, y no en el panel del proveedor: así
 * queda versionado en git y viaja con el deploy. Resend sólo transporta el HTML.
 */
const RESEND_KEY = process.env.RESEND_API_KEY;
const REMITENTE = process.env.RESEND_FROM || "AM Estética Dental <info@amesteticadental.com>";

const ORO = "#c6a56c";
const CARBON = "#151716";
const TEXTO = "#4a4d48";
const LINEA = "#e8e5df";
const SITIO = "https://www.amesteticadental.com";

export type BotonEmail = { texto: string; href: string };

/**
 * Envoltorio visual de los mails de AM.
 *
 * Decisiones de maquetado, que en email no son las de la web:
 *  - CSS en línea: Gmail y Outlook descartan las hojas de estilo.
 *  - Ancho fijo de 540px y estructura simple: el soporte de flexbox y grid en
 *    clientes de correo es irregular.
 *  - Sin imágenes en el encabezado: muchos clientes las bloquean por defecto y un
 *    logo que no carga deja el mail decapitado. La marca la sostienen la
 *    tipografía, el espaciado y el dorado.
 */
export function layoutEmail({
  saludo,
  parrafos,
  boton,
  notaFinal,
}: {
  saludo: string;
  parrafos: string[];
  boton?: BotonEmail;
  notaFinal?: string;
}) {
  const cuerpo = parrafos
    .map(
      (p, i) =>
        `<p style="line-height:1.75;color:${TEXTO};margin:0 0 ${i === parrafos.length - 1 ? 26 : 18}px">${p}</p>`,
    )
    .join("");

  const bloqueBoton = boton
    ? `<div style="border-top:1px solid ${LINEA};padding-top:26px">
         ${notaFinal ? `<p style="line-height:1.7;color:#7a7d78;font-size:14px;margin:0 0 14px">${notaFinal}</p>` : ""}
         <a href="${boton.href}" style="display:inline-block;background:${ORO};color:${CARBON};padding:13px 28px;text-decoration:none;font-weight:600;font-size:13px">${boton.texto}</a>
       </div>`
    : "";

  return `
    <div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:540px;margin:0 auto;color:#1a1a1a;background:#ffffff">
      <div style="background:${CARBON};padding:34px 32px;text-align:center">
        <p style="color:${ORO};letter-spacing:0.3em;font-size:11px;text-transform:uppercase;margin:0">AM Estética Dental</p>
        <p style="color:rgba(246,241,231,.55);letter-spacing:0.18em;font-size:9px;text-transform:uppercase;margin:8px 0 0">Puerto Madero · Buenos Aires</p>
      </div>

      <div style="padding:40px 32px">
        <h2 style="font-weight:300;font-size:24px;margin:0 0 20px">${saludo}</h2>
        ${cuerpo}
        ${bloqueBoton}
      </div>

      <div style="padding:22px 32px;border-top:1px solid ${LINEA};font-size:11px;color:#9a9a9a;text-align:center">
        AM Estética Dental · Camila O'Gorman 412, Oficina 101, Puerto Madero<br />
        <a href="${SITIO}" style="color:#9a9a9a">amesteticadental.com</a>
      </div>
    </div>
  `;
}

export const BOTON_PORTFOLIO: BotonEmail = {
  texto: "Ver el portfolio clínico",
  href: `${SITIO}/casos-antes-y-despues`,
};

export async function enviarMail({
  para,
  asunto,
  html,
  nombre,
}: {
  para: string;
  asunto: string;
  html: string;
  nombre?: string;
}): Promise<{ ok: boolean }> {
  if (!RESEND_KEY) {
    console.error(`[email] Falta RESEND_API_KEY. El mail a ${para} NO se envió.`);
    return { ok: false };
  }

  if (!para) return { ok: false };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: REMITENTE,
        to: [nombre ? `${nombre} <${para}>` : para],
        subject: asunto,
        html,
      }),
    });

    if (!response.ok) {
      const detalle = await response.text().catch(() => "");
      console.error(`[email] Resend rechazó el envío a ${para} (HTTP ${response.status}): ${detalle}`);
      return { ok: false };
    }

    return { ok: true };
  } catch (error) {
    console.error(`[email] falló el envío a ${para}:`, error);
    return { ok: false };
  }
}

/** Acuse de recibo al postulante. Si falla, la postulación NO falla: el CV ya está guardado. */
export async function enviarAcuseDePostulacion(email: string, nombre: string) {
  if (!email) return;

  await enviarMail({
    para: email,
    nombre: nombre || undefined,
    asunto: "Recibimos tu postulación — AM Estética Dental",
    html: layoutEmail({
      saludo: nombre ? `Hola ${nombre},` : "Hola,",
      parrafos: [
        "Gracias por tu postulación. Ya la recibimos junto con tu CV, y queda guardada en nuestra base de candidatos.",
        "Si tu perfil encaja con alguna de las búsquedas que abramos, el equipo de AM se va a poner en contacto con vos.",
        "Desde ya, gracias por tenernos en cuenta y por querer formar parte del equipo.",
      ],
      notaFinal: "Mientras tanto, podés conocer el trabajo que hacemos:",
      boton: BOTON_PORTFOLIO,
    }),
  });
}
