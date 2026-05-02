"use client";

import { useState, FormEvent } from "react";
import { submitLead, TRATAMIENTOS, getUTMs } from "@/lib/leads";

interface Props {
  defaultTreatment?: string;
  context?: string;
}

export default function LeadForm({ defaultTreatment, context }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tags, setTags] = useState<string[]>(defaultTreatment ? [defaultTreatment] : []);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    setError(null);
    setSubmitting(true);

    const result = await submitLead({
      fullName,
      email,
      whatsapp,
      interestTags: tags,
      message,
      metadata: {
        ...getUTMs(),
        page: typeof window !== "undefined" ? window.location.pathname : null,
        referrer: typeof document !== "undefined" ? document.referrer : null,
        context: context || null,
      },
    });

    setSubmitting(false);
    if (!result.success) {
      setError(result.error ?? "Error desconocido");
      return;
    }

    // Track conversion: GTM + Meta Pixel
    if (typeof window !== "undefined") {
      // GTM event
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "lead_form_submission",
        event_category: "conversión",
        event_label: context || "form_contacto",
        user_name: fullName,
        user_email: email || "no_email",
        user_phone: whatsapp || "no_phone",
        treatments: tags.join(",") || "sin_especificar",
      });

      // Meta Pixel event (if installed)
      if ((window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: tags[0] || "General Inquiry",
          content_category: tags[0] || "general",
        });
      }
    }

    setDone(true);
  }

  function toggleTag(slug: string) {
    setTags((prev) => (prev.includes(slug) ? prev.filter((t) => t !== slug) : [...prev, slug]));
  }

  if (done) {
    return (
      <div className="border border-oro/30 rounded-2xl p-10 text-center bg-oro/5">
        <p className="text-oro uppercase tracking-[0.4em] text-xs mb-6">Recibido</p>
        <h3 className="text-3xl font-light text-crema mb-4">
          Gracias por tu <span className="font-cormorant italic text-oro">consulta</span>
        </h3>
        <p className="text-crema/60 leading-relaxed max-w-md mx-auto">
          El equipo de AM Estética Dental te va a contactar en las próximas 24 horas hábiles.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-oro/20 rounded-xl px-4 py-3 text-crema placeholder:text-crema/30 focus:border-oro/60 focus:outline-none transition-colors text-sm";
  const labelClass = "block text-crema/70 text-xs uppercase tracking-widest mb-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        aria-hidden="true"
        className="absolute -left-[9999px]"
      />

      <div>
        <label className={labelClass}>Nombre completo *</label>
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          maxLength={200}
          className={inputClass}
          placeholder="Tu nombre"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={200}
            className={inputClass}
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className={labelClass}>WhatsApp</label>
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            maxLength={50}
            className={inputClass}
            placeholder="+54 9 11 ..."
          />
        </div>
      </div>
      <p className="text-crema/40 text-xs -mt-2">Necesitamos al menos uno para contactarte.</p>

      <div>
        <label className={labelClass}>Tratamiento de interés</label>
        <div className="flex flex-wrap gap-2">
          {TRATAMIENTOS.map((t) => {
            const active = tags.includes(t.value);
            return (
              <button
                type="button"
                key={t.value}
                onClick={() => toggleTag(t.value)}
                className={`text-xs px-3 py-2 rounded-full border transition-all ${
                  active
                    ? "border-oro bg-oro text-carbon"
                    : "border-oro/20 text-crema/70 hover:border-oro/50"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className={labelClass}>Mensaje (opcional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          rows={4}
          className={inputClass + " resize-none"}
          placeholder="Contanos qué necesitás..."
        />
      </div>

      {error && (
        <p role="alert" className="text-red-400 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-oro text-carbon px-8 py-4 rounded-full font-semibold hover:bg-oro/90 transition-all disabled:opacity-50"
      >
        {submitting ? "Enviando..." : "Enviar consulta"}
      </button>

      <p className="text-crema/40 text-xs text-center">
        Al enviar aceptás que te contactemos por email o WhatsApp.
      </p>
    </form>
  );
}