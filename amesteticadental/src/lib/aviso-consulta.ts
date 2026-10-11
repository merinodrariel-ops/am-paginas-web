/**
 * Aviso interno de "nueva consulta" para el equipo.
 *
 * Módulo puro (sin imports): se arma el asunto, el HTML y los destinatarios a
 * partir de los datos del lead. Así se puede testear con `node --test` sin
 * levantar Next ni hablar con Resend (ver scripts/test-aviso-consulta.mjs).
 *
 * Por qué existe (2026-10-10): los formularios de la web guardaban el lead en
 * `marketing_leads` y no avisaban a nadie. El aviso viejo salía por EmailJS hacia
 * merinodrariel@gmail.com (casilla vieja). Ahora sale por Resend al mail oficial
 * del Dr. Merino, configurable con NEW_LEAD_NOTIFY_TO.
 */

export const DESTINO_POR_DEFECTO = "drarielmerino@gmail.com";

export type DatosAviso = {
  fullName: string;
  email?: string | null;
  whatsapp?: string | null;
  tratamientos?: string[];
  message?: string | null;
  origin?: string | null;
  metadata?: Record<string, unknown>;
  alreadyExists?: boolean;
  fecha?: Date;
};

/** Lista de destinatarios desde env (separada por comas). Default: mail oficial del Dr. */
export function destinatariosAviso(env: string | undefined | null): string[] {
  const lista = String(env || "")
    .split(/[,;]/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s));
  return lista.length ? Array.from(new Set(lista)) : [DESTINO_POR_DEFECTO];
}

export function escaparHtml(valor: unknown): string {
  return String(valor ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Link wa.me a partir de lo que haya escrito el paciente. Sin código de país asume Argentina. */
export function linkWhatsapp(telefono: string | null | undefined): string | null {
  const crudo = String(telefono || "").trim();
  let digitos = crudo.replace(/\D/g, "");
  if (digitos.length < 8) return null;
  if (crudo.startsWith("+")) return `https://wa.me/${digitos}`;
  if (digitos.startsWith("00")) digitos = digitos.slice(2);
  else if (digitos.startsWith("0")) digitos = `54${digitos.slice(1)}`;
  // Sin "+": sólo se respeta el prefijo si es AR/UY y el número es largo; si no, es local argentino.
  else if (!(/^(54|598)/.test(digitos) && digitos.length >= 11)) digitos = `54${digitos}`;
  return `https://wa.me/${digitos}`;
}

/** Quita saltos de línea y recorta: el asunto no debe permitir inyección de headers ni ser eterno. */
function limpiarAsunto(texto: string): string {
  return texto.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim().slice(0, 150);
}

export function asuntoAviso(nombre: string, tratamientos: string[]): string {
  const tratamiento = tratamientos.length ? tratamientos.join(", ") : "Consulta general";
  return limpiarAsunto(`Nueva consulta: ${nombre} — ${tratamiento}`);
}

const CLAVES_UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];

function fechaArgentina(fecha: Date): string {
  return fecha.toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function armarAviso(datos: DatosAviso): { asunto: string; html: string; replyTo?: string } {
  const meta = datos.metadata || {};
  const nombre = datos.fullName.trim() || "Sin nombre";
  const tratamientos = datos.tratamientos || [];
  const wa = linkWhatsapp(datos.whatsapp);
  const fecha = fechaArgentina(datos.fecha || new Date());

  const pagina = typeof meta.page === "string" ? meta.page : "";
  const sitio = typeof meta.site === "string" ? meta.site : "";
  const contexto = typeof meta.context === "string" ? meta.context : typeof meta.source === "string" ? meta.source : "";
  const referrer = typeof meta.referrer === "string" ? meta.referrer : "";
  const utms = CLAVES_UTM.filter((k) => typeof meta[k] === "string" && meta[k]).map(
    (k) => `${k.replace("utm_", "")}: ${String(meta[k])}`,
  );

  const fila = (etiqueta: string, valor: string) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#7a7d78;font-size:13px;width:150px;vertical-align:top">${etiqueta}</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;color:#151716">${valor}</td></tr>`;

  const filas = [
    fila("Nombre", `<strong>${escaparHtml(nombre)}</strong>`),
    fila(
      "WhatsApp",
      datos.whatsapp
        ? wa
          ? `<a href="${wa}" style="color:#128c7e;font-weight:600">${escaparHtml(datos.whatsapp)}</a>`
          : escaparHtml(datos.whatsapp)
        : "—",
    ),
    fila("Email", datos.email ? `<a href="mailto:${escaparHtml(datos.email)}" style="color:#8a6f3d">${escaparHtml(datos.email)}</a>` : "—"),
    fila("Tratamiento", escaparHtml(tratamientos.join(", ") || "Sin especificar")),
    fila("Mensaje", datos.message ? escaparHtml(datos.message).replace(/\n/g, "<br />") : "—"),
    fila("Origen", escaparHtml([sitio, datos.origin, contexto].filter(Boolean).join(" · ") || "—")),
    pagina ? fila("Página", escaparHtml(pagina)) : "",
    referrer ? fila("Referrer", escaparHtml(referrer)) : "",
    utms.length ? fila("UTM", escaparHtml(utms.join(" · "))) : "",
    fila("Fecha", escaparHtml(fecha)),
  ].join("");

  const avisoRepetido = datos.alreadyExists
    ? `<p style="background:#fff7e6;border:1px solid #f1d9a6;padding:10px 14px;font-size:13px;color:#7a5a1e;margin:0 0 18px">Este email ya estaba en la base de leads: es una consulta repetida. El mensaje nuevo está acá (no se guardó en la ficha del lead).</p>`
    : "";

  const botonWa = wa
    ? `<a href="${wa}" style="display:inline-block;background:#25d366;color:#fff;padding:12px 22px;text-decoration:none;font-weight:600;font-size:13px;margin-right:8px">Responder por WhatsApp</a>`
    : "";
  const botonMail = datos.email
    ? `<a href="mailto:${escaparHtml(datos.email)}" style="display:inline-block;background:#c6a56c;color:#151716;padding:12px 22px;text-decoration:none;font-weight:600;font-size:13px">Responder por email</a>`
    : "";

  const html = `
    <div style="font-family:-apple-system,Segoe UI,sans-serif;max-width:600px;margin:0 auto;background:#fff;color:#151716">
      <div style="background:#151716;padding:22px 28px">
        <p style="color:#c6a56c;letter-spacing:0.25em;font-size:11px;text-transform:uppercase;margin:0">AM Estética Dental · Nueva consulta</p>
      </div>
      <div style="padding:28px">
        <h2 style="font-weight:400;font-size:22px;margin:0 0 18px">${escaparHtml(nombre)}</h2>
        ${avisoRepetido}
        <table style="width:100%;border-collapse:collapse;margin:0 0 24px">${filas}</table>
        <div>${botonWa}${botonMail}</div>
      </div>
    </div>`;

  return {
    asunto: asuntoAviso(nombre, tratamientos),
    html,
    replyTo: datos.email || undefined,
  };
}
