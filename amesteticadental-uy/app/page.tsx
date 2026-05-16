import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "./LeadForm";

export const metadata: Metadata = {
  title: "AM Estética Dental — Próximamente en Carrasco, Montevideo",
  description: "La clínica de estética dental premium de Buenos Aires llega a Montevideo. Carrasco, Uruguay. Sé de los primeros en saberlo — dejá tu email y te avisamos.",
  alternates: { canonical: "https://www.amesteticadental.com.uy" },
  openGraph: {
    title: "AM Estética Dental — Próximamente en Carrasco, Montevideo",
    description: "La marca argentina de estética dental de alto nivel abre su primera sede en Uruguay. Dejá tu email y sé el primero en saberlo.",
    url: "https://www.amesteticadental.com.uy",
    images: [{ url: "https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires" }],
  },
};

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Hero full screen */}
      <section style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>

        {/* Fondo */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="https://res.cloudinary.com/drctvgyqd/image/upload/w_1800,h_1200,c_fill,g_face,q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires"
            alt="AM Estética Dental próximamente en Montevideo Uruguay"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(20,20,20,0.92) 0%, rgba(20,20,20,0.75) 50%, rgba(20,20,20,0.92) 100%)" }} />
        </div>

        {/* Contenido */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 640, padding: "60px 32px", textAlign: "center" }}>

          {/* Marca */}
          <div style={{ marginBottom: 32 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", display: "block", marginBottom: 12 }}>
              AM Estética Dental
            </span>
            <div style={{ width: 40, height: 1, background: "var(--oro, #C9A96E)", margin: "0 auto" }} />
          </div>

          {/* Badge próximamente */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(201,169,110,0.4)", borderRadius: 100, padding: "8px 20px", marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--oro, #C9A96E)", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--oro, #C9A96E)" }}>
              Próximamente · Carrasco, Montevideo
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 24, color: "var(--crema, #F5F0E8)" }}>
            La estética dental<br />
            de Buenos Aires<br />
            <em style={{ color: "var(--oro, #C9A96E)" }}>llega a Uruguay.</em>
          </h1>

          <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--crema-dim, #A89F92)", marginBottom: 48, maxWidth: 480, margin: "0 auto 48px" }}>
            AM Estética Dental — referente en carillas de porcelana y diseño de sonrisa en Argentina — abre su primera sede en Carrasco. Dejá tu email y sé de los primeros en saberlo.
          </p>

          {/* Formulario de leads */}
          <LeadForm />

          {/* Social proof */}
          <div style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {[["20+", "Años de experiencia"], ["Puerto Madero", "Sede original Buenos Aires"], ["100%", "Casos reales documentados"]].map(([n, l]) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 22, color: "var(--oro, #C9A96E)", marginBottom: 4 }}>{n}</div>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--crema-dim, #A89F92)" }}>{l}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer minimal */}
      <footer style={{ padding: "20px 32px", borderTop: "1px solid rgba(201,169,110,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 14 }}>AM Estética Dental</span>
        <a href="https://www.amesteticadental.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "var(--crema-dim, #A89F92)", textDecoration: "none", letterSpacing: "0.1em" }}>
          amesteticadental.com →
        </a>
      </footer>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>

    </main>
  );
}
