import { ARGENTINA_URL, SITE_URL } from "../site-data";

/**
 * Envoltorio visual de los mails de AM Uruguay.
 *
 * El diseño vive acá, en el repo, y no en el panel del proveedor: así queda
 * versionado en git, se edita sin entrar a ninguna plataforma y viaja con el
 * deploy. Resend sólo transporta el HTML ya armado.
 *
 * Decisiones de maquetado, que en email no son las mismas que en web:
 *  - Todo el CSS va en línea. Gmail y Outlook descartan las hojas de estilo.
 *  - Ancho fijo de 540px y estructura simple: los clientes de correo tienen un
 *    soporte irregular de flexbox y grid.
 *  - Sin imágenes en el encabezado. Muchos clientes las bloquean por defecto, y
 *    un logo que no carga deja el mail decapitado. La marca se sostiene con
 *    tipografía, espaciado y el dorado.
 */
const ORO = "#c6a56c";
const CARBON = "#151716";
const TEXTO = "#4a4d48";
const LINEA = "#e8e5df";

export type BotonEmail = { texto: string; href: string };

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
        <p style="color:rgba(246,241,231,.55);letter-spacing:0.18em;font-size:9px;text-transform:uppercase;margin:8px 0 0">Uruguay · Zona Carrasco</p>
      </div>

      <div style="padding:40px 32px">
        <h2 style="font-weight:300;font-size:24px;margin:0 0 20px">${saludo}</h2>
        ${cuerpo}
        ${bloqueBoton}
      </div>

      <div style="padding:22px 32px;border-top:1px solid ${LINEA};font-size:11px;color:#9a9a9a;text-align:center">
        AM Estética Dental Uruguay · Zona Carrasco, Montevideo<br />
        <a href="${SITE_URL}" style="color:#9a9a9a">amesteticadental.uy</a>
      </div>
    </div>
  `;
}

/** Botón al portfolio clínico, que es el destino habitual de estos mails. */
export const BOTON_PORTFOLIO: BotonEmail = {
  texto: "Ver el portfolio clínico",
  href: `${ARGENTINA_URL}/casos-antes-y-despues`,
};
