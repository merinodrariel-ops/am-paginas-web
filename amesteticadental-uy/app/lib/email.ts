/**
 * Envío de mails de la red AM, sobre Resend.
 *
 * Por qué Resend y no lo que había. El sitio uruguayo usaba Brevo (commit 6570857,
 * de una sesión anterior) y el argentino no usa ningún proveedor: nunca mandó un
 * solo mail. O sea que no había un "proveedor de la casa" que reusar, había que
 * elegir uno. Resend gana por tres razones concretas:
 *
 *   - Una sola variable de entorno (`RESEND_API_KEY`) contra dos de Brevo.
 *   - Está pensado para este stack (Next.js sobre Vercel, mismos creadores del
 *     ecosistema) y su API es un POST plano, sin SDK obligatorio.
 *   - Verificación de dominio simple, que es lo que hace que el mail entre a la
 *     bandeja y no a spam.
 *
 * IMPORTANTE — el remitente. Mandar desde una casilla @gmail.com hace que el mail
 * caiga en spam o directamente sea rechazado: Gmail publica reglas (DMARC) que le
 * dicen al mundo que nadie más puede mandar en su nombre. Hay que verificar
 * `amesteticadental.uy` en Resend y mandar desde una dirección de ese dominio.
 */
const RESEND_KEY = process.env.RESEND_API_KEY;

/** Remitente verificado. Se sobreescribe por env cuando el dominio esté listo. */
const REMITENTE = process.env.RESEND_FROM || "AM Estética Dental Uruguay <hola@amesteticadental.uy>";

/** Copia interna opcional: si está definida, el equipo recibe aviso de cada envío. */
const COPIA_INTERNA = process.env.RESEND_BCC || "";

export type ResultadoEmail = { ok: true } | { ok: false; motivo: string };

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
}): Promise<ResultadoEmail> {
  if (!RESEND_KEY) {
    const motivo = "Falta RESEND_API_KEY en este proyecto de Vercel.";
    console.error(`[email] ${motivo} El mail a ${para} NO se envió.`);
    return { ok: false, motivo };
  }

  if (!para) return { ok: false, motivo: "Sin destinatario." };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: REMITENTE,
        to: [nombre ? `${nombre} <${para}>` : para],
        ...(COPIA_INTERNA ? { bcc: [COPIA_INTERNA] } : {}),
        subject: asunto,
        html,
      }),
    });

    if (!response.ok) {
      const detalle = await response.text().catch(() => "");
      console.error(`[email] Resend rechazó el envío a ${para} (HTTP ${response.status}): ${detalle}`);
      return { ok: false, motivo: `Resend respondió ${response.status}.` };
    }

    return { ok: true };
  } catch (error) {
    console.error(`[email] falló el envío a ${para}:`, error);
    return { ok: false, motivo: "No se pudo contactar a Resend." };
  }
}

/**
 * Guarda el contacto en una audiencia de Resend.
 *
 * Es el reemplazo de la lista de Brevo: sin esto, un lead de la lista de novedades
 * recibiría su mail de confirmación pero no quedaría registrado en ningún lado.
 * Si no hay audiencia configurada se avisa fuerte, porque significa que el lead se
 * está perdiendo.
 */
export async function guardarContacto({ email, nombre }: { email: string; nombre?: string }): Promise<ResultadoEmail> {
  const audiencia = process.env.RESEND_AUDIENCE_ID;

  if (!RESEND_KEY || !audiencia) {
    const falta = [!RESEND_KEY && "RESEND_API_KEY", !audiencia && "RESEND_AUDIENCE_ID"].filter(Boolean).join(", ");
    console.error(`[email] Falta ${falta}: el contacto ${email} NO quedó guardado en ninguna lista.`);
    return { ok: false, motivo: `Falta ${falta}.` };
  }

  try {
    const response = await fetch(`https://api.resend.com/audiences/${audiencia}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, first_name: nombre || undefined, unsubscribed: false }),
    });

    // 409 = el contacto ya existía. No es un error: alguien que se anota dos veces
    // sigue estando bien anotado.
    if (!response.ok && response.status !== 409) {
      const detalle = await response.text().catch(() => "");
      console.error(`[email] Resend no guardó el contacto ${email} (HTTP ${response.status}): ${detalle}`);
      return { ok: false, motivo: `Resend respondió ${response.status}.` };
    }

    return { ok: true };
  } catch (error) {
    console.error(`[email] falló el guardado del contacto ${email}:`, error);
    return { ok: false, motivo: "No se pudo contactar a Resend." };
  }
}
