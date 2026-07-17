import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.thedentalreview.com/conferencias/expodent-2026-dr-ariel-merino-inteligencia-artificial-diseno-sonrisa";
const COVER = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/expodent-2026/expodent-2026-dr-ariel-merino-charla-ia-odontologia-portada.jpg";

export const metadata: Metadata = {
  title: "Expodent 2026: Ariel Merino y la IA en diseño de sonrisa",
  description: "La presentación del Dr. Ariel Merino en Expodent 2026 analizó cómo integrar inteligencia artificial, planificación digital y criterio clínico en diseño de sonrisa.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Expodent 2026: Ariel Merino y la IA en diseño de sonrisa",
    description: "Qué aporta la inteligencia artificial a la comunicación y planificación estética, y qué decisiones siguen dependiendo del odontólogo.",
    url: CANONICAL,
    type: "article",
    publishedTime: "2026-06-16T12:00:00-03:00",
    images: [{ url: COVER, width: 1200, height: 800, alt: "Dr. Ariel Merino durante su presentación sobre inteligencia artificial en Expodent 2026" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id": `${CANONICAL}#article`,
  headline: "Expodent 2026: el Dr. Ariel Merino y la inteligencia artificial aplicada al diseño de sonrisa",
  description: "Análisis de la presentación sobre inteligencia artificial, comunicación clínica y diseño de sonrisa realizada en Expodent 2026.",
  datePublished: "2026-06-16T12:00:00-03:00",
  dateModified: "2026-07-17T12:00:00-03:00",
  image: [COVER],
  mainEntityOfPage: CANONICAL,
  author: { "@type": "Organization", name: "Redacción TDR", url: "https://www.thedentalreview.com/acerca-de" },
  publisher: { "@type": "Organization", "@id": "https://www.thedentalreview.com/#publisher", name: "The Dental Review" },
  about: { "@type": "Person", "@id": "https://www.arielmerino.com/#person", name: "Dr. Ariel Merino" },
};

export default function ExpodentArticle() {
  return (
    <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <header style={{ borderBottom: "1px solid var(--paper-dim)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none", fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 24, fontWeight: 700 }}>The Dental Review</Link>
          <nav aria-label="Navegación principal" style={{ display: "flex", gap: 20, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            <Link href="/noticias" style={{ color: "var(--muted)", textDecoration: "none" }}>Noticias</Link>
            <Link href="/acerca-de" style={{ color: "var(--muted)", textDecoration: "none" }}>Acerca de</Link>
          </nav>
        </div>
      </header>

      <main>
        <article style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 32px" }}>
          <p style={{ color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.32em", fontSize: 10, marginBottom: 20 }}>Conferencia · Expodent 2026</p>
          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 400, fontSize: "clamp(36px, 6vw, 62px)", lineHeight: 1.08, marginBottom: 24 }}>
            Inteligencia artificial y diseño de sonrisa: el criterio clínico vuelve al centro
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.7, marginBottom: 24 }}>
            En Expodent 2026, el Dr. Ariel Merino presentó una lectura práctica de la IA aplicada a odontología estética: útil para visualizar y comunicar, insuficiente para reemplazar el diagnóstico.
          </p>
          <p style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.1em", marginBottom: 40 }}>Por Redacción TDR · 16 de junio de 2026 · Buenos Aires</p>

          <div style={{ position: "relative", aspectRatio: "3/2", margin: "0 0 48px", overflow: "hidden" }}>
            <Image src={COVER} alt="Dr. Ariel Merino durante su charla sobre inteligencia artificial aplicada a odontología en Expodent 2026" fill priority sizes="(max-width: 800px) 100vw, 760px" style={{ objectFit: "cover" }} />
          </div>

          <div className="article-body">
            <p>La conversación sobre inteligencia artificial en odontología dejó atrás la etapa de la curiosidad. En 2026, el desafío ya no es demostrar que una herramienta puede modificar una sonrisa en una pantalla, sino establecer qué valor clínico tiene esa imagen y hasta dónde puede orientar una decisión real.</p>
            <p>Esa fue la tensión central de la presentación del <Link href="https://www.arielmerino.com" target="_blank">Dr. Ariel Merino</Link> en Expodent 2026, realizada en La Rural de Buenos Aires. Su enfoque vinculó planificación digital, experiencia clínica y comunicación con el paciente sin presentar la simulación como una promesa de resultado.</p>

            <h2>Una imagen para conversar, no para prescribir</h2>
            <p>Las herramientas generativas permiten construir referencias visuales en pocos minutos. Pueden ayudar a que una persona exprese si busca una sonrisa más natural, más luminosa o con determinadas proporciones. También facilitan una conversación que antes dependía de conceptos difíciles de traducir.</p>
            <p>Pero la imagen no conoce el espesor del esmalte, la mordida, la salud periodontal ni la respuesta de los tejidos. Tampoco puede decidir si el camino correcto requiere carillas, alineadores, contorno gingival, rehabilitación o ninguna intervención. La utilidad aparece cuando esa referencia se integra a un diagnóstico, no cuando intenta sustituirlo.</p>

            <h2>Del impacto visual a la planificación</h2>
            <p>En un flujo clínico responsable, la simulación inicial es apenas una capa. Después vienen las fotografías estandarizadas, el escaneo intraoral, el análisis facial y funcional, y la selección de una técnica compatible con la biología del caso. El <Link href="https://www.amesteticadental.com/diseno-de-sonrisa" target="_blank">diseño de sonrisa digital</Link> permite entonces ajustar proporciones y anticipar decisiones antes de intervenir.</p>
            <p>La diferencia es relevante: una imagen generada busca abrir posibilidades; una planificación clínica busca reducir incertidumbre. Confundir ambos objetivos puede crear expectativas imposibles o empujar tratamientos que no respeten la estructura dental.</p>

            <h2>La oportunidad para una odontología más comprensible</h2>
            <p>Bien utilizada, la IA puede mejorar la calidad de la consulta. Da al paciente un vocabulario visual, permite comparar alternativas y hace más transparente el proceso de decisión. Para el profesional, obliga a explicar por qué una referencia puede o no trasladarse a la boca real.</p>
            <p>La conclusión que atravesó la presentación fue menos espectacular, pero más útil: la tecnología gana valor cuando aumenta la comprensión y conserva el criterio clínico como límite. En estética dental, la capacidad de generar una imagen es solo el comienzo; saber cuándo, cómo y cuánto intervenir sigue siendo la decisión determinante.</p>
          </div>
        </article>
      </main>

      <footer style={{ borderTop: "1px solid var(--paper-dim)", padding: "28px 24px", marginTop: 64 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 11 }}>
          <span>© 2026 The Dental Review</span>
          <Link href="/acerca-de" style={{ color: "var(--muted)" }}>Criterios editoriales y contacto</Link>
        </div>
      </footer>
    </div>
  );
}
