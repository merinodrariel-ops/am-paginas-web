import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Dental Review — Odontología Estética de Alto Nivel",
  alternates: { canonical: "https://www.thedentalreview.com" },
};

const ARTICULOS = [
  {
    slug: "diseno-sonrisa-cierre-diastemas-viral-facebook-dr-ariel-merino",
    categoria: "Caso Clínico",
    titulo: "El caso que se viralizó antes de que existiera Instagram",
    subtitulo: "Diseño de sonrisa con cierre de diastemas y dientes conoidos. Primero en YouTube. Reconocido por profesores de odontología de todo el mundo.",
    autor: "Redacción TDR",
    fecha: "Abril 2026",
    portada: "https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_800,c_fill,g_face,q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
    portadaAlt: "Diseño de sonrisa con cierre de diastemas antes y después — Dr. Ariel Merino AM Estética Dental",
  },
  {
    slug: "agenesia-dental-rehabilitacion-oral-completa-implantes-ceramicas-dr-ariel-merino",
    categoria: "Rehabilitación Oral",
    titulo: "Agenesia dental: cuando el tratamiento transforma una vida",
    subtitulo: "Dos años de alineadores invisibles, implantes y 24 cerámicas. El caso maestro 2025 del Dr. Ariel Merino en Puerto Madero, Buenos Aires.",
    autor: "Redacción TDR",
    fecha: "Abril 2026",
    portada: "https://res.cloudinary.com/drctvgyqd/image/upload/w_800,h_530,c_fill,g_face,q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
    portadaAlt: "Caso agenesia dental antes y después — Dr. Ariel Merino AM Estética Dental Puerto Madero",
  },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

      <header style={{ borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "20px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--muted, #6b6560)", marginBottom: 4 }}>
              Publicación especializada
            </div>
            <span style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.01em" }}>
              The Dental Review
            </span>
          </div>
          <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold, #b8954a)", border: "1px solid var(--gold, #b8954a)", padding: "6px 14px", borderRadius: 2 }}>
            Buenos Aires · Argentina
          </div>
        </div>
      </header>

      <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--gold, #b8954a), transparent)" }} />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>

        {/* Artículo destacado */}
        <Link href={`/casos/${ARTICULOS[0].slug}`} style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 2 }}>
              <Image src={ARTICULOS[0].portada} alt={ARTICULOS[0].portadaAlt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
            </div>
            <div>
              <div style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)", marginBottom: 16 }}>
                {ARTICULOS[0].categoria} · Destacado
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 16 }}>
                {ARTICULOS[0].titulo}
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted, #6b6560)", marginBottom: 24 }}>
                {ARTICULOS[0].subtitulo}
              </p>
              <div style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.12em", display: "flex", gap: 10 }}>
                <span>{ARTICULOS[0].autor}</span>
                <span>·</span>
                <span>{ARTICULOS[0].fecha}</span>
              </div>
            </div>
          </div>
        </Link>

        <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", marginBottom: 48 }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 40 }}>
          {ARTICULOS.slice(1).map((art) => (
            <article key={art.slug}>
              <Link href={`/casos/${art.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", borderRadius: 2, marginBottom: 20 }}>
                  <Image src={art.portada} alt={art.portadaAlt} fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)", marginBottom: 10 }}>{art.categoria}</div>
                <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 22, fontWeight: 400, lineHeight: 1.3, marginBottom: 10 }}>{art.titulo}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--muted, #6b6560)" }}>{art.subtitulo}</p>
              </Link>
            </article>
          ))}
        </div>

      </main>

      <footer style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "28px 24px", marginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 16 }}>The Dental Review</span>
          <span style={{ fontSize: 10, color: "var(--muted, #6b6560)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            © 2026 · Todos los derechos reservados
          </span>
        </div>
      </footer>

    </div>
  );
}
