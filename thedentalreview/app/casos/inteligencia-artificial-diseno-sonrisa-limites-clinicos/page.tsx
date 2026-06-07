import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.thedentalreview.com/casos/inteligencia-artificial-diseno-sonrisa-limites-clinicos";
const AM_URL = "https://www.amesteticadental.com/diseno-de-sonrisa";
const FORBES_URL = "https://www.forbesargentina.com/innovacion/del-1-10-que-tan-linda-tu-sonrisa-ia-te-lo-dira-segundos-n51306";
const HERO = "https://res.cloudinary.com/drctvgyqd/image/upload/w_1400,h_900,c_fill,g_face,q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires";

export const metadata: Metadata = {
  title: "IA y diseño de sonrisa: usos reales y límites clínicos",
  description:
    "Qué aporta hoy la inteligencia artificial al diseño de sonrisa, qué cambió desde la nota de Forbes de 2024 y qué decisiones siguen dependiendo del odontólogo.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "IA y diseño de sonrisa: qué cambió y qué no",
    description:
      "Una revisión clínica de la planificación digital, la simulación visual y los límites de la inteligencia artificial en odontología estética.",
    type: "article",
    url: CANONICAL,
    images: [{ url: HERO, width: 1400, height: 900 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA y diseño de sonrisa: qué cambió y qué sigue dependiendo del odontólogo",
  description:
    "Revisión de los usos actuales y límites clínicos de la inteligencia artificial aplicada al diseño de sonrisa.",
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
  author: { "@type": "Organization", name: "Redacción The Dental Review" },
  reviewedBy: {
    "@type": "Person",
    name: "Dr. Ariel Merino",
    url: "https://www.amesteticadental.com/dr-ariel-merino",
  },
  publisher: {
    "@type": "Organization",
    name: "The Dental Review",
    url: "https://www.thedentalreview.com",
  },
  image: HERO,
  mainEntityOfPage: CANONICAL,
  inLanguage: "es-AR",
};

const paragraphStyle = {
  fontSize: 17,
  lineHeight: 1.85,
  color: "var(--ink, #0e0e0e)",
  marginBottom: 24,
};

export default function InteligenciaArtificialDisenoSonrisaPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <header style={{ borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <Link
            href="/"
            style={{
              color: "var(--ink, #0e0e0e)",
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: 20,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            The Dental Review
          </Link>
        </div>
      </header>
      <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--gold, #b8954a), transparent)" }} />

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ color: "var(--gold, #b8954a)", fontSize: 9, letterSpacing: "0.4em", marginBottom: 20, textTransform: "uppercase" }}>
          Tecnología clínica · Junio 2026
        </div>

        <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 400, lineHeight: 1.12, marginBottom: 20 }}>
          IA y diseño de sonrisa: qué cambió y qué sigue dependiendo del odontólogo
        </h1>
        <p style={{ color: "var(--muted, #6b6560)", fontSize: 19, lineHeight: 1.65, marginBottom: 32 }}>
          La inteligencia artificial puede acelerar comparaciones, simulaciones y tareas de planificación. No puede reemplazar el diagnóstico, el criterio biológico ni la responsabilidad clínica.
        </p>

        <div style={{ borderBottom: "1px solid var(--paper-dim, #e8e4da)", borderTop: "1px solid var(--paper-dim, #e8e4da)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", marginBottom: 40, padding: "16px 0" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Redacción TDR</div>
            <div style={{ color: "var(--muted, #6b6560)", fontSize: 11 }}>Revisión clínica: Dr. Ariel Merino</div>
          </div>
          <Link href={FORBES_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold, #b8954a)", fontSize: 11, textDecoration: "none" }}>
            Antecedente publicado por Forbes Argentina →
          </Link>
        </div>

        <div style={{ aspectRatio: "14/9", marginBottom: 12, overflow: "hidden", position: "relative" }}>
          <Image
            src={HERO}
            alt="Caso clínico documentado de diseño de sonrisa con planificación digital"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 760px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p style={{ color: "var(--muted, #6b6560)", fontSize: 10, letterSpacing: "0.12em", marginBottom: 48, textAlign: "center", textTransform: "uppercase" }}>
          La tecnología ayuda a planificar; el resultado depende de decisiones clínicas y ejecución técnica.
        </p>

        <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 28, fontWeight: 400, margin: "44px 0 18px" }}>
          El punto de partida: una experiencia publicada en 2024
        </h2>
        <p style={paragraphStyle}>
          En abril de 2024, Forbes Argentina presentó la experiencia del odontólogo Ariel Merino y su equipo con herramientas de inteligencia artificial aplicadas al análisis de proporciones dentales y a la planificación de carillas. La nota reflejaba un momento de experimentación acelerada: modelos generativos, escaneo 3D y bases de casos comenzaban a combinarse dentro del flujo clínico.
        </p>
        <p style={paragraphStyle}>
          Dos años después, la pregunta más útil ya no es si la IA puede producir una imagen atractiva. La pregunta es qué parte de esa imagen puede convertirse de forma responsable en un tratamiento real, conservador y estable.
        </p>

        <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 28, fontWeight: 400, margin: "44px 0 18px" }}>
          Dónde la IA sí aporta valor
        </h2>
        <p style={paragraphStyle}>
          Su mayor utilidad está en ordenar información y acelerar iteraciones. Puede comparar proporciones, señalar asimetrías visibles, generar alternativas de forma y facilitar la conversación con el paciente. También puede ayudar a clasificar fotografías, documentar cambios y convertir datos de escaneos en referencias más fáciles de revisar.
        </p>
        <p style={paragraphStyle}>
          Una simulación visual bien presentada permite discutir preferencias antes de intervenir: cuánto mostrar los incisivos, qué nivel de blancura resulta natural o si conviene corregir posición antes de modificar forma. Esa conversación reduce malentendidos, pero la simulación sigue siendo una hipótesis visual, no una promesa.
        </p>

        <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 28, fontWeight: 400, margin: "44px 0 18px" }}>
          Lo que una imagen no puede diagnosticar
        </h2>
        <p style={paragraphStyle}>
          Una fotografía frontal no muestra el espesor del esmalte, el estado periodontal, la oclusión, la actividad de caries, el bruxismo ni la relación tridimensional entre raíces y hueso. Tampoco determina si una carilla es la indicación correcta. En algunos pacientes la prioridad será ortodoncia; en otros, controlar encías, restaurar función o no realizar ningún procedimiento estético.
        </p>
        <p style={paragraphStyle}>
          Por eso, cualquier sistema público de simulación debe explicar sus límites. El diagnóstico requiere entrevista clínica, examen, registros fotográficos, escaneo y, cuando corresponde, estudios radiográficos. La decisión final y la responsabilidad siguen siendo humanas.
        </p>

        <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 28, fontWeight: 400, margin: "44px 0 18px" }}>
          El riesgo de diseñar sonrisas iguales
        </h2>
        <p style={paragraphStyle}>
          Los modelos generativos tienden a repetir patrones estadísticamente frecuentes: dientes muy blancos, simetría excesiva y contornos uniformes. En odontología estética, esa homogeneización puede borrar rasgos personales. Una sonrisa natural no surge de aplicar una plantilla, sino de integrar labios, rostro, edad, textura, función y expectativas.
        </p>
        <p style={paragraphStyle}>
          La tecnología es más valiosa cuando amplía opciones y menos valiosa cuando pretende imponer una única idea de perfección.
        </p>

        <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 28, fontWeight: 400, margin: "44px 0 18px" }}>
          Del simulador al tratamiento real
        </h2>
        <p style={paragraphStyle}>
          En un protocolo responsable, la simulación es apenas el inicio. Después se valida la viabilidad clínica, se define el tratamiento más conservador y se prueba el diseño mediante herramientas reversibles cuando el caso lo permite. El objetivo no es reproducir píxel por píxel una imagen generada, sino traducir una intención estética a una solución compatible con salud y función.
        </p>

        <aside style={{ background: "var(--paper-dim, #e8e4da)", margin: "44px 0", padding: "28px 32px" }}>
          <div style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 20, marginBottom: 12 }}>
            Transparencia editorial
          </div>
          <p style={{ ...paragraphStyle, fontSize: 14, marginBottom: 0 }}>
            Este artículo fue producido por The Dental Review a partir de fuentes públicas y de la experiencia clínica del Dr. Ariel Merino, quien revisó los conceptos odontológicos. Merino dirige AM Estética Dental, institución mencionada y enlazada en esta nota.
          </p>
        </aside>

        <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", paddingTop: 36, textAlign: "center" }}>
          <p style={{ color: "var(--muted, #6b6560)", fontSize: 13, marginBottom: 18 }}>
            Conocé cómo se integra la planificación digital dentro de una evaluación clínica completa.
          </p>
          <Link
            href={AM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "var(--ink, #0e0e0e)", color: "var(--paper, #f5f2ec)", display: "inline-block", fontSize: 11, letterSpacing: "0.2em", padding: "14px 28px", textDecoration: "none", textTransform: "uppercase" }}
          >
            Diseño de sonrisa en AM Estética Dental →
          </Link>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", marginTop: 60, padding: 24 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/" style={{ color: "var(--ink, #0e0e0e)", fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 15, textDecoration: "none" }}>
            The Dental Review
          </Link>
        </div>
      </footer>
    </div>
  );
}
