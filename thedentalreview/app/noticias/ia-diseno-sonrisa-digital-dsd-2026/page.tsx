import type { Metadata } from "next";
import Link from "next/link";

const CANONICAL = "https://www.thedentalreview.com/noticias/ia-diseno-sonrisa-digital-dsd-2026";

export const metadata: Metadata = {
  title: "IA y Diseño Digital de Sonrisa: cuando la máquina elige mejor que el experto | The Dental Review",
  description:
    "Estudios 2025-2026 demuestran que la inteligencia artificial supera a diseñadores expertos en predicción de estética. Análisis del impacto clínico del DSD asistido por IA.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "IA y Diseño Digital de Sonrisa: cuando la máquina elige mejor que el experto",
    description:
      "Investigaciones recientes muestran que algoritmos de IA aplicados a diseño de sonrisa logran mayor satisfacción paciente que diseños convencionales.",
    url: CANONICAL,
    type: "article",
    images: [{ url: "https://www.thedentalreview.com/og-actualidad-ia-dsd.png" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA y Diseño Digital de Sonrisa: cuando la máquina elige mejor que el experto",
  description:
    "Análisis de la integración de inteligencia artificial en diseño digital de sonrisa (DSD) y su impacto en resultados clínicos y satisfacción paciente.",
  author: { "@type": "Organization", name: "Redacción The Dental Review", url: "https://www.thedentalreview.com" },
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  datePublished: "2026-08-01",
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const s = (obj: object) => JSON.stringify(obj);

export default function ArticuloDSDIA() {
  const p = (text: React.ReactNode) => (
    <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink, #0e0e0e)", marginBottom: 24 }}>{text}</p>
  );
  const h3 = (text: string) => (
    <h3 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 22, fontWeight: 400, marginBottom: 16, marginTop: 40 }}>{text}</h3>
  );
  const a = (href: string, text: string) => (
    <Link href={href} target="_blank" style={{ color: "var(--gold, #b8954a)", textDecoration: "underline", textUnderlineOffset: 3 }}>{text}</Link>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: s(schema) }} />

      <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

        {/* Header */}
        <header style={{ borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <Link href="/" style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 20, fontWeight: 700, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}>
              The Dental Review
            </Link>
          </div>
        </header>
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--gold, #b8954a), transparent)" }} />

        <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px" }}>

          {/* Categoría + fecha */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Actualidad</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Agosto 2026</span>
          </div>

          {/* Título */}
          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            IA y Diseño Digital de Sonrisa: cuando la máquina elige mejor que el experto
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            Estudios recientes demuestran que algoritmos de inteligencia artificial superan a diseñadores clínicos en predicción estética. Los pacientes prefieren el diseño generado por IA en casi 7 de cada 10 casos.
          </p>

          {/* Autoría */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Redacción TDR</div>
              <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Estética dental · Investigación clínica</div>
            </div>
          </div>

          {/* Cuerpo */}
          {p(<>Hace una década, el diseño digital de sonrisa (DSD) era una herramienta de nicho, reservada a clínicas premium con profesionales especialmente entrenados. Hoy, en 2026, el DSD es estándar de facto en la odontología estética de alto nivel. Pero algo fundamental cambió en estos últimos años: ahora no es el dentista quien diseña la sonrisa, sino un algoritmo de inteligencia artificial entrenado en decenas de miles de casos documentados. Y los datos son inequívocos: la máquina gana.</>)}

          {h3("Los números de la investigación")}
          {p(<>Un estudio prospectivo comparativo realizado durante 2025-2026 puso frente a frente a diseñadores expertos en DSD convencional contra sistemas impulsados por IA. El resultado fue sorprendente: en evaluación de satisfacción del paciente, los diseños generados por IA alcanzaron puntuaciones medias de 97.0 ± 0.66 puntos, superando significativamente los 96.21 ± 1.02 de los diseños de expertos humanos. La diferencia parece marginal en números, pero en clínica se traduce en mayor confianza del paciente antes de comenzar el tratamiento.</>)}
          {p(<>Aún más revelador: cuando se pidió a los propios odontólogos expertos que eligieran entre su propio diseño y el generado por IA, solo el 51.5% eligió su diseño. Pero cuando se preguntó a los pacientes, el 69.7% prefirió el algoritmo. Esa brecha de casi 18 puntos porcentuales entre lo que cree el profesional y lo que elige el paciente sugiere algo incómodo: el gusto estético humano del dentista no siempre alinea con el del paciente, y la IA parece capturar mejor esa preferencia.</>)}

          {h3("¿Cómo aprende la máquina a diseñar sonrisas?")}
          {p(<>Los algoritmos de DSD asistido por IA funcionan mediante deep learning entrenado en bases de datos de miles de sonrisas documentadas como estéticamente agradables. El sistema analiza patrones: proporciones entre dientes, ángulos incisales, armonía labial, simetría facial, línea media, exposición gingival en reposo y en sonrisa. Cada variable es ponderada según su contribución predictiva a la satisfacción del paciente.</>)}
          {p(<>El proceso comienza con escaneo facial de alta resolución e intraoral. El algoritmo genera un &ldquo;gemelo digital&rdquo; tridimensional del paciente y luego aplica transformaciones para optimizar esos parámetros estéticos. Todo esto sucede en segundos, mucho más rápido que cualquier bocetación manual. Lo crucial es que no inventa: extrapola de patrones reales documentados en su base de entrenamiento.</>)}

          {h3("Implicaciones clínicas")}
          {p(<>Para el profesional, la integración de IA en {a("https://www.amesteticadental.com/diseno-de-sonrisa", "diseño de sonrisa")} representa un cambio de rol. Ya no es el diseñador final sino el {a("https://www.amesteticadental.com/dentista-puerto-madero", "clínico que valida y ajusta")}, considerando factores que los algoritmos aún no pueden capturar: limitaciones mecánicas, preferencias explícitas del paciente, restricciones anatómicas o funcionales. El IA genera una propuesta; el dentista la refina.</>)}
          {p(<>En términos de satisfacción de paciente, los beneficios son tangibles. Ver una representación 3D precisa de cómo lucirá su sonrisa antes de cualquier intervención reduce radicalmente la ansiedad y aumenta el buy-in del procedimiento. Los pacientes saben exactamente qué esperar, lo que redunda en menos reclamos post-tratamiento y mayor recomendación boca a boca.</>)}

          {h3("La cuestión del sesgo")}
          {p(<>Una objeción legítima es el sesgo: si el algoritmo fue entrenado mayormente en sonrisas de ciertos grupos demográficos, ¿captura la estética de otros? La investigación reciente comienza a abordar esto. Los mejores sistemas de DSD asistido por IA de 2026 están siendo reentrenados con datasets más diversos y geográficamente distribuidos para evitar que &ldquo;belleza estándar occidental&rdquo; sea la única métrica.</>)}
          {p(<>Pero incluso con esa limitación, los datos actuales sugieren que la IA DSD sigue siendo superior en resultados de satisfacción comparada con diseño manual convencional, independientemente del contexto demográfico de los estudios disponibles.</>)}

          {h3("El futuro inmediato")}
          {p(<>Hacia 2027-2028, es probable que la IA DSD no sea una opción sino una expectativa en prácticas premium. El paciente que llega a una clínica de alto nivel anticipa ver una simulación digital predictiva. Negarle eso es quedar atrás de la estética de facto.</>)}
          {p(<>Lo interesante es que esto no reemplaza la habilidad clínica del profesional, sino que la amplifica. Un cirujano dentista excelente con acceso a IA DSD es más letal —en el buen sentido— que uno excelente sin ella. La máquina no diseña; colabora. Y esa colaboración está diseñada para que gane el paciente.</>)}

          {/* Fuente */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "24px 0", marginTop: 48 }}>
            <p style={{ fontSize: 13, color: "var(--muted, #6b6560)" }}>
              <strong>Fuentes:</strong><br />
              {a("https://doi.org/10.1177/20552076251388392", "Saini et al. (2025) — Meta-análisis: IA en diseño digital de sonrisa")} · International Journal of Esthetic Dentistry<br />
              {a("https://pmc.ncbi.nlm.nih.gov/articles/PMC13025993/", "Clinical and Patient Comparison of AI and Expert Digital Smile Design")} · PMC/NIH<br />
              {a("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12436661/", "Comparative analysis of facial aesthetics: AI vs. conventional DSD")} · PubMed Central
            </p>
          </div>

        </main>

        <footer style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "24px", marginTop: 60 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/" style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 15, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}>The Dental Review</Link>
            <span style={{ fontSize: 10, color: "var(--muted, #6b6560)", letterSpacing: "0.2em", textTransform: "uppercase" }}>© 2026</span>
          </div>
        </footer>

      </div>
    </>
  );
}
