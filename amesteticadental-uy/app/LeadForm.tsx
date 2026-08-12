"use client";
import { useState } from "react";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, nombre }),
    });
    if (res.ok) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "uy_waitlist_submit", page_path: window.location.pathname });
      setStatus("ok");
    } else {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <div style={{ fontSize: 28, marginBottom: 12 }}>✓</div>
        <p style={{ fontSize: 15, color: "var(--crema, #F5F0E8)", marginBottom: 8 }}>
          Datos registrados.
        </p>
        <p style={{ fontSize: 13, color: "var(--crema-dim, #A89F92)" }}>
          Te escribiremos cuando tengamos novedades verificadas de la apertura.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 440, margin: "0 auto" }}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
        style={{ background: "rgba(245,240,232,0.06)", border: "1px solid rgba(201,169,110,0.25)", borderRadius: 8, padding: "14px 18px", color: "var(--crema, #F5F0E8)", fontSize: 14, outline: "none", width: "100%" }}
      />
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ background: "rgba(245,240,232,0.06)", border: "1px solid rgba(201,169,110,0.25)", borderRadius: 8, padding: "14px 18px", color: "var(--crema, #F5F0E8)", fontSize: 14, outline: "none", width: "100%" }}
      />
      {status === "error" && (
        <p style={{ fontSize: 12, color: "#f87171", textAlign: "center" }}>
          No pudimos registrar tus datos. Intentá nuevamente en unos minutos.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        style={{ background: "var(--oro, #C9A96E)", color: "#141414", border: "none", borderRadius: 100, padding: "15px 32px", fontSize: 13, fontWeight: 600, cursor: "pointer", letterSpacing: "0.05em", opacity: status === "loading" ? 0.6 : 1 }}
      >
        {status === "loading" ? "Enviando..." : "Quiero recibir novedades"}
      </button>
      <p style={{ fontSize: 11, color: "var(--crema-dim, #A89F92)", textAlign: "center", opacity: 0.7 }}>
        Sin spam. Solo te escribimos cuando tengamos novedades.
      </p>
    </form>
  );
}
