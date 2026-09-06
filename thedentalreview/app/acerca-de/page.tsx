import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Acerca de",
  description: "Criterios editoriales, fuentes y política de correcciones de The Dental Review, publicación especializada en odontología estética y digital.",
  alternates: { canonical: "https://www.thedentalreview.com/acerca-de" },
};

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <header style={{ borderBottom: "1px solid var(--paper-dim)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none", fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 24, fontWeight: 700 }}>The Dental Review</Link>
          <Link href="/noticias" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>Noticias</Link>
        </div>
      </header>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px" }}>
        <p style={{ color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.32em", fontSize: 10, marginBottom: 18 }}>Acerca de</p>
        <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 400, fontSize: "clamp(38px, 6vw, 60px)", lineHeight: 1.08, marginBottom: 28 }}>Odontología con contexto, evidencia y criterio.</h1>
        <div className="article-body">
          <p>The Dental Review es una publicación digital especializada en odontología estética, rehabilitación oral y tecnología clínica. Cubre tendencias del sector, técnicas y casos documentados con una mirada periodística dirigida a profesionales y pacientes interesados en comprender cómo evoluciona la disciplina.</p>
          <h2>Criterios editoriales</h2>
          <p>Priorizamos información verificable, lenguaje comprensible y una separación clara entre evidencia, experiencia clínica y opinión. Los casos se identifican con su fuente y se describen sin convertir un resultado individual en una promesa general.</p>
          <p>Cuando una nota incluye enlaces a clínicas, profesionales, fabricantes o estudios, esos vínculos se incorporan porque amplían la fuente primaria o permiten consultar el caso completo. No reemplazan una evaluación profesional.</p>
          <h2>Correcciones y actualizaciones</h2>
          <p>Las notas pueden actualizarse cuando aparecen nuevos datos, cambia una cifra o se detecta una imprecisión. Las modificaciones relevantes quedan reflejadas en la fecha de actualización del artículo.</p>
          <h2>Contacto editorial</h2>
          <p>Para proponer información, señalar una corrección o compartir documentación de interés periodístico, escribí a <a href="mailto:info@amesteticadental.com?subject=The%20Dental%20Review%20-%20Contacto%20editorial">info@amesteticadental.com</a> con el asunto &ldquo;The Dental Review&rdquo;.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
