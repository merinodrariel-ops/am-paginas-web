import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import NewsletterForm from "../components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter de The Dental Review",
  description: "Una vez por mes, las notas nuevas sobre estética dental, odontología digital y congresos de la región. Gratis y sin spam.",
  alternates: { canonical: "https://www.thedentalreview.com/newsletter" },
};

export default function NewsletterPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <header style={{ borderBottom: "1px solid var(--paper-dim)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none", fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 24, fontWeight: 700 }}>The Dental Review</Link>
          <nav aria-label="Navegación principal" style={{ display: "flex", gap: 20, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            <Link href="/noticias" style={{ color: "var(--muted)", textDecoration: "none" }}>Noticias</Link>
            <Link href="/acerca-de" style={{ color: "var(--muted)", textDecoration: "none" }}>Acerca de</Link>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 32px" }}>
        <p style={{ color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.32em", fontSize: 10, marginBottom: 20 }}>Newsletter</p>
        <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 400, fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.1, marginBottom: 20 }}>
          Lo que cambia en estética dental, una vez por mes
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
          Las notas nuevas de The Dental Review, el análisis de técnicas y materiales, y la cobertura de los congresos donde se discute la odontología estética de la región. Escrito por el Dr. Ariel Merino.
        </p>
        <NewsletterForm origen="pagina-newsletter" variante="pagina" />
      </main>
      <SiteFooter sinNewsletter />
    </div>
  );
}
