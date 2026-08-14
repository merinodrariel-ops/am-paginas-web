import { enviarMail } from "../../lib/email";
import { BOTON_PORTFOLIO, layoutEmail } from "../../lib/email-layout";

/**
 * Acuse de recibo al postulante.
 *
 * Regla: si el mail falla, la postulación NO falla. El CV ya está guardado y la
 * fila creada; que el acuse no salga es una molestia, no un motivo para decirle a
 * la persona que su postulación no entró.
 */
export async function enviarAcuseDePostulacion(email: string, nombre: string) {
  if (!email) return;

  await enviarMail({
    para: email,
    nombre: nombre || undefined,
    asunto: "Recibimos tu postulación — AM Estética Dental Uruguay",
    html: layoutEmail({
      saludo: nombre ? `Hola ${nombre},` : "Hola,",
      parrafos: [
        "Gracias por tu postulación. Ya la recibimos junto con tu CV, y queda guardada en nuestra base de candidatos para la sede de Carrasco.",
        "Si tu perfil encaja con alguna de las búsquedas que abramos, el equipo de AM se va a poner en contacto con vos. Como la sede todavía está en preparación, los tiempos dependen del avance de la obra y de cuándo se abra cada posición.",
        "Desde ya, gracias por tenernos en cuenta y por querer formar parte de lo que estamos construyendo.",
      ],
      notaFinal: "Mientras tanto, podés conocer el trabajo que llega a Montevideo:",
      boton: BOTON_PORTFOLIO,
    }),
  });
}
