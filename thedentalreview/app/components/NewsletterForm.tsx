"use client";

import { useState } from "react";

/**
 * Formulario de alta al newsletter. Se usa al pie de cada nota (variante
 * "inline") y en /newsletter (variante "pagina"). Va a /api/newsletter.
 */
export default function NewsletterForm({ origen, variante = "inline" }: { origen: string; variante?: "inline" | "pagina" }) {
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");
  const [mensaje, setMensaje] = useState("");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setEstado("enviando");
    setMensaje("");
    try {
      const r = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: f.get("nombre"),
          email: f.get("email"),
          perfil: f.get("perfil"),
          acepta: f.get("acepta") === "on",
          website: f.get("website"),
          origen,
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "No pudimos registrarte.");
      setEstado("ok");
      setMensaje(d.yaSuscripto ? "Ya estabas en la lista. ¡Gracias por seguir leyendo!" : "Listo. Te mandamos un email de bienvenida.");
    } catch (err) {
      setEstado("error");
      setMensaje(err instanceof Error ? err.message : "No pudimos registrarte.");
    }
  }

  const input = {
    padding: "12px 14px",
    border: "1px solid var(--paper-dim, #e8e4da)",
    background: "#fff",
    fontSize: 14,
    fontFamily: "inherit",
    color: "var(--ink, #0e0e0e)",
    borderRadius: 2,
    minWidth: 0,
  } as const;

  return (
    <section
      aria-labelledby={`nl-${origen}`}
      style={{
        border: "1px solid var(--paper-dim, #e8e4da)",
        background: "var(--paper, #faf8f3)",
        padding: variante === "pagina" ? "40px 32px" : "32px 28px",
        margin: variante === "pagina" ? "0" : "56px 0 0",
      }}
    >
      <p style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)", marginBottom: 12 }}>Newsletter mensual</p>
      <h2 id={`nl-${origen}`} style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 400, fontSize: 26, lineHeight: 1.2, marginBottom: 10 }}>
        Recibí las próximas notas en tu email
      </h2>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted, #6b6560)", marginBottom: 22 }}>
        Una vez por mes: estética dental, odontología digital y congresos de la región. Sin spam, baja en un clic.
      </p>

      {estado === "ok" ? (
        <p role="status" style={{ fontSize: 15, color: "var(--ink, #0e0e0e)" }}>✓ {mensaje}</p>
      ) : (
        <form onSubmit={enviar} style={{ display: "grid", gap: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            <input name="nombre" placeholder="Nombre" autoComplete="given-name" maxLength={80} style={input} aria-label="Nombre" />
            <input name="email" type="email" required placeholder="Email" autoComplete="email" style={input} aria-label="Email" />
            <select name="perfil" defaultValue="odontologo" style={input} aria-label="Perfil">
              <option value="odontologo">Soy odontólogo/a</option>
              <option value="estudiante">Soy estudiante</option>
              <option value="industria">Trabajo en la industria</option>
              <option value="paciente">Soy paciente / lector</option>
            </select>
          </div>
          {/* Honeypot invisible para bots */}
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
          <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12, lineHeight: 1.6, color: "var(--muted, #6b6560)" }}>
            <input type="checkbox" name="acepta" required style={{ marginTop: 3 }} />
            <span>Acepto recibir el newsletter de The Dental Review. Mis datos se usan sólo para este envío y puedo darme de baja cuando quiera.</span>
          </label>
          <div>
            <button
              type="submit"
              disabled={estado === "enviando"}
              style={{ background: "var(--ink, #0e0e0e)", color: "#fff", border: 0, padding: "13px 26px", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, opacity: estado === "enviando" ? 0.6 : 1 }}
            >
              {estado === "enviando" ? "Enviando…" : "Suscribirme"}
            </button>
          </div>
          {estado === "error" ? <p role="alert" style={{ fontSize: 13, color: "#a33" }}>{mensaje}</p> : null}
        </form>
      )}
    </section>
  );
}
