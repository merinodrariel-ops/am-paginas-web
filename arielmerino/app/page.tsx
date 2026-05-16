import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dr. Ariel Merino — Odontólogo Estético | Puerto Madero, Buenos Aires",
  description: "Dr. Ariel Merino, referente en estética dental en Argentina. Director de AM Estética Dental. Especialista en carillas de porcelana, diseño de sonrisa y rehabilitación oral. Puerto Madero, Buenos Aires.",
  alternates: { canonical: "https://www.arielmerino.com" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Ariel Merino",
  jobTitle: "Odontólogo Especialista en Estética Dental",
  worksFor: { "@type": "Organization", name: "AM Estética Dental", url: "https://www.amesteticadental.com" },
  address: { "@type": "PostalAddress", addressLocality: "Puerto Madero", addressRegion: "Buenos Aires", addressCountry: "AR" },
  url: "https://www.arielmerino.com",
  sameAs: [
    "https://www.amesteticadental.com",
    "https://www.instagram.com/drarielmerino",
    "https://www.youtube.com/c/ArielMerino",
  ],
};

const CASOS = [
  {
    href: "https://www.amesteticadental.com/casos/diseno-sonrisa-cierre-diastemas-dientes-conoidos",
    img: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
    alt: "Diseño de sonrisa cierre de diastemas — Dr. Ariel Merino",
    label: "Diseño de Sonrisa",
    titulo: "El caso viral de YouTube",
  },
  {
    href: "https://www.amesteticadental.com/casos/agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas",
    img: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,g_face,q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
    alt: "Caso agenesia dental — Dr. Ariel Merino",
    label: "Rehabilitación Completa",
    titulo: "Caso Maestro 2025",
  },
  {
    href: "https://www.amesteticadental.com/casos/20-carillas-porcelana-apinamiento-sin-ortodoncia",
    img: "https://res.cloudinary.com/drctvgyqd/image/upload/w_600,h_600,c_fill,q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental",
    alt: "20 carillas sin ortodoncia — Dr. Ariel Merino",
    label: "Carillas Sin Ortodoncia",
    titulo: "20 carillas en 10 días",
  },
];

export default function HomePage() {
  const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%20Dr.%20Merino%2C%20lo%20contacto%20desde%20arielmerino.com";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main style={{ minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", minHeight: "100vh" }}>

          {/* Foto */}
          <div style={{ position: "relative", minHeight: 500 }}>
            <Image
              src="https://res.cloudinary.com/drctvgyqd/image/upload/w_900,h_1200,c_fill,g_face,q_auto,f_auto/equipo/dr-ariel-merino-director-clinico-am-estetica-dental-puerto-madero"
              alt="Dr. Ariel Merino — Odontólogo Estético — AM Estética Dental Puerto Madero Buenos Aires"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, var(--carbon, #141414))" }} />
          </div>

          {/* Bio */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 60px 80px 40px", background: "var(--carbon, #141414)" }}>
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", marginBottom: 20, display: "block" }}>
              Odontología Estética
            </span>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 8 }}>
              Dr. Ariel Merino
            </h1>
            <p style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", marginBottom: 32 }}>
              Director · AM Estética Dental
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--crema-dim, #A89F92)", marginBottom: 40, maxWidth: 440 }}>
              Especialista en estética dental con más de 20 años de trayectoria. Fundador de AM Estética Dental en Puerto Madero. Reconocido internacionalmente por casos pioneros en diseño de sonrisa y rehabilitación oral compleja.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--oro, #C9A96E)", color: "#141414", padding: "14px 28px", borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: "none", letterSpacing: "0.05em" }}>
                Agendar consulta →
              </a>
              <Link href="https://www.amesteticadental.com" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(201,169,110,0.3)", color: "var(--oro, #C9A96E)", padding: "14px 28px", borderRadius: 100, fontSize: 13, textDecoration: "none" }}>
                AM Estética Dental
              </Link>
            </div>
          </div>
        </section>

        {/* Datos rápidos */}
        <section style={{ background: "var(--oro, #C9A96E)", padding: "24px 40px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "center" }}>
            {[
              ["20+", "Años de experiencia"],
              ["Puerto Madero", "Buenos Aires, Argentina"],
              ["Internacional", "Casos reconocidos en todo el mundo"],
            ].map(([n, l]) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#141414", fontFamily: "var(--font-cormorant, Georgia, serif)" }}>{n}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(20,20,20,0.6)" }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Casos */}
        <section style={{ padding: "80px 40px", background: "var(--carbon, #141414)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", display: "block", marginBottom: 12 }}>Casos Clínicos</span>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 300, marginBottom: 48 }}>
              Resultados que hablan <em style={{ color: "var(--oro, #C9A96E)" }}>por sí solos.</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
              {CASOS.map((c) => (
                <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", borderRadius: 8, marginBottom: 16 }}>
                    <Image src={c.img} alt={c.alt} fill sizes="320px" style={{ objectFit: "cover", transition: "transform 0.6s" }} />
                  </div>
                  <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", display: "block", marginBottom: 6 }}>{c.label}</span>
                  <p style={{ fontSize: 15, fontWeight: 300, color: "var(--crema, #F5F0E8)" }}>{c.titulo}</p>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href="https://www.amesteticadental.com/casos" target="_blank" style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", textDecoration: "none" }}>
                Ver todos los casos →
              </Link>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section style={{ padding: "60px 40px", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 28, fontWeight: 300, marginBottom: 8 }}>¿Hablamos?</h3>
              <p style={{ color: "var(--crema-dim, #A89F92)", fontSize: 14 }}>Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "var(--oro, #C9A96E)", color: "#141414", padding: "14px 32px", borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
              WhatsApp →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid rgba(201,169,110,0.1)", padding: "20px 40px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 15 }}>Dr. Ariel Merino</span>
            <div style={{ display: "flex", gap: 24 }}>
              <Link href="https://www.amesteticadental.com" target="_blank" style={{ fontSize: 11, color: "var(--crema-dim, #A89F92)", textDecoration: "none" }}>AM Estética Dental</Link>
              <Link href="https://www.instagram.com/drarielmerino" target="_blank" style={{ fontSize: 11, color: "var(--crema-dim, #A89F92)", textDecoration: "none" }}>Instagram</Link>
              <Link href="https://www.youtube.com/c/ArielMerino" target="_blank" style={{ fontSize: 11, color: "var(--crema-dim, #A89F92)", textDecoration: "none" }}>YouTube</Link>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
