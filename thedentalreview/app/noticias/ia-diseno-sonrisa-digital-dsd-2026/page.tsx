import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import Firma, { autorSchema } from "../../components/Firma";

const CANONICAL = "https://www.thedentalreview.com/noticias/ia-diseno-sonrisa-digital-dsd-2026";

export const metadata: Metadata = {
  title: "Cuando el paciente prefiere el diseño de la máquina",
  description:
    "Un estudio en Dentistry Journal halló que los pacientes prefirieron el diseño hecho por IA en el 69,7% de los casos. Qué prueba eso y qué todavía no.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "IA y diseño digital de sonrisa: cuando el paciente prefiere el diseño de la máquina",
    description:
      "Los pacientes prefirieron el diseño generado por IA en el 69,7% de los casos; los propios odontólogos eligieron el suyo en el 51,5%. Qué sostiene la evidencia y qué no.",
    url: CANONICAL,
    type: "article",
    images: [{ url: "https://www.thedentalreview.com/og-actualidad-ia-dsd.png" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA y diseño digital de sonrisa: cuando el paciente prefiere el diseño de la máquina",
  description:
    "Análisis de la integración de inteligencia artificial en diseño digital de sonrisa (DSD) y su impacto en resultados clínicos y satisfacción paciente.",
  author: autorSchema,
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  datePublished: "2026-08-01",
  dateModified: "2026-09-15",
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
            IA y diseño digital de sonrisa: cuando el paciente prefiere el diseño de la máquina
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            Un estudio prospectivo pareado publicado en Dentistry Journal encontró que los pacientes prefirieron el diseño generado por IA en el 69,7% de los casos. Los propios odontólogos eligieron el suyo apenas en el 51,5%.
          </p>

          {/* Autoría */}
          <Firma seccion={"Estética dental · Investigación clínica"} />

          {/* Cuerpo */}
          {p(<>Hace una década, el diseño digital de sonrisa (DSD) era una herramienta de nicho, reservada a clínicas premium con profesionales especialmente entrenados. Hoy, en 2026, el DSD es estándar de facto en la odontología estética de alto nivel. Lo que cambió en estos últimos años es quién produce la primera propuesta: cada vez con más frecuencia, un algoritmo entrenado en decenas de miles de casos documentados. Y la evidencia disponible, todavía escasa, apunta en una dirección incómoda para el ego profesional: en satisfacción del paciente, esa propuesta compite de igual a igual con la de un experto.</>)}

          {p(<>Una aclaración necesaria antes de seguir, porque se confunden todo el tiempo. Acá se habla de <strong>DSD asistido por IA</strong>: sistemas que parten de un escaneo facial e intraoral del paciente y trabajan sobre su anatomía real. No es lo mismo que pedirle a un asistente conversacional que retoque una selfie, que es {a("/noticias/pacientes-llegan-con-sonrisa-generada-por-ia", "lo que hoy llega al consultorio en el teléfono del paciente")} y no tiene ningún valor diagnóstico.</>)}

          {h3("Los números de la investigación")}
          {p(<>Un estudio prospectivo pareado publicado en {a("https://pmc.ncbi.nlm.nih.gov/articles/PMC13025993/", "Dentistry Journal")} en marzo de 2026 puso frente a frente a diseñadores expertos en DSD convencional contra sistemas impulsados por IA. En la evaluación de satisfacción del paciente, los diseños generados por IA alcanzaron puntuaciones medias de 97.0 ± 0.66 puntos, frente a 96.21 ± 1.02 de los diseños de expertos humanos. Conviene leer bien esa diferencia: es de menos de un punto sobre cien, con desvíos que se superponen. Lo relevante no es que la IA &ldquo;gane&rdquo;, sino que su propuesta llega a un nivel comparable al de un experto en una fracción del tiempo.</>)}
          {p(<>Aún más revelador: cuando se pidió a los propios odontólogos expertos que eligieran entre su propio diseño y el generado por IA, solo el 51.5% eligió su diseño. Pero cuando se preguntó a los pacientes, el 69.7% prefirió el algoritmo. Esa brecha de casi 18 puntos porcentuales entre lo que cree el profesional y lo que elige el paciente sugiere algo incómodo: el gusto estético humano del dentista no siempre alinea con el del paciente, y la IA parece capturar mejor esa preferencia.</>)}

          {h3("¿Cómo aprende la máquina a diseñar sonrisas?")}
          {p(<>Los algoritmos de DSD asistido por IA funcionan mediante deep learning entrenado en bases de datos de miles de sonrisas documentadas como estéticamente agradables. El sistema analiza patrones: proporciones entre dientes, ángulos incisales, armonía labial, simetría facial, línea media, exposición gingival en reposo y en sonrisa. Cada variable es ponderada según su contribución predictiva a la satisfacción del paciente.</>)}
          {p(<>El proceso comienza con escaneo facial de alta resolución e intraoral. El algoritmo genera un &ldquo;gemelo digital&rdquo; tridimensional del paciente y luego aplica transformaciones para optimizar esos parámetros estéticos. Todo esto sucede en segundos, mucho más rápido que cualquier bocetación manual. Lo crucial es que no inventa: extrapola de patrones reales documentados en su base de entrenamiento.</>)}

          {h3("Implicaciones clínicas")}
          {p(<>Para el profesional, la integración de IA en {a("https://www.amesteticadental.com/diseno-de-sonrisa", "diseño de sonrisa")} representa un cambio de rol. Ya no es el diseñador final sino el {a("https://www.amesteticadental.com/dentista-puerto-madero", "clínico que valida y ajusta")}, considerando factores que los algoritmos aún no pueden capturar: limitaciones mecánicas, preferencias explícitas del paciente, restricciones anatómicas o funcionales. El IA genera una propuesta; el dentista la refina.</>)}
          {p(<>En términos de satisfacción de paciente, los beneficios son tangibles. Ver una representación 3D precisa de cómo lucirá su sonrisa antes de cualquier intervención reduce radicalmente la ansiedad y aumenta el buy-in del procedimiento. Los pacientes saben exactamente qué esperar, lo que redunda en menos reclamos post-tratamiento y mayor recomendación boca a boca.</>)}

          {h3("La cuestión del sesgo")}
          {p(<>Una objeción legítima es el sesgo: si el algoritmo fue entrenado mayormente en sonrisas de ciertos grupos demográficos, ¿captura la estética de otros? La investigación reciente comienza a abordar esto. Los mejores sistemas de DSD asistido por IA de 2026 están siendo reentrenados con datasets más diversos y geográficamente distribuidos para evitar que &ldquo;belleza estándar occidental&rdquo; sea la única métrica.</>)}
          {p(<>Esa limitación no es menor, y obliga a leer los resultados con cautela. La {a("https://doi.org/10.1177/20552076251388392", "revisión sistemática de Saini y colaboradores")} reúne todavía un número reducido de estudios, con muestras chicas y poblaciones poco diversas. Lo que puede afirmarse hoy es que el DSD asistido por IA alcanza resultados de satisfacción comparables al diseño manual convencional. Afirmar que es superior, o que lo es en cualquier contexto demográfico, excede lo que la evidencia disponible permite sostener.</>)}

          {h3("El futuro inmediato")}
          {p(<>Hacia 2027-2028, es probable que la IA DSD no sea una opción sino una expectativa en prácticas premium. El paciente que llega a una clínica de alto nivel anticipa ver una simulación digital predictiva. Negarle eso es quedar atrás de la estética de facto.</>)}
          {p(<>Lo interesante es que nada de esto reemplaza la habilidad clínica: la amplifica. El algoritmo produce una propuesta en segundos; decidir si esa propuesta es viable en una boca concreta —y llevarla a un ensayo que el paciente pueda probar antes de que se toque un diente— sigue siendo trabajo del profesional. La máquina no diseña sonrisas: acerca un punto de partida.</>)}

          {/* Fuente */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "24px 0", marginTop: 48 }}>
            <p style={{ fontSize: 13, color: "var(--muted, #6b6560)" }}>
              <strong>Fuentes:</strong><br />
              Saini R, Kaur R, Gurumurthy V, Binduhayyim RIH, et al. {a("https://doi.org/10.1177/20552076251388392", "Impact of artificial intelligence-based digital smile design on patient and clinician satisfaction and facial esthetic outcomes: a systematic review")} · <em>DIGITAL HEALTH</em> (SAGE), 2025.<br />
              {a("https://pmc.ncbi.nlm.nih.gov/articles/PMC13025993/", "Clinical and Patient Comparison of AI and Expert Digital Smile Design: A Prospective Paired Study")} · <em>Dentistry Journal</em>, marzo de 2026.<br />
              {a("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12436661/", "Comparative analysis of facial aesthetics in AI generated versus conventionally crafted digital smile designs — a cross-sectional study")} · <em>BDJ Open</em>, septiembre de 2025.
            </p>
            <p style={{ fontSize: 12, color: "var(--muted, #6b6560)", marginTop: 20, lineHeight: 1.7 }}>
              <strong>Actualización (15 de septiembre de 2026).</strong> Se corrigió la revista de la primera referencia, que figuraba como <em>International Journal of Esthetic Dentistry</em> y corresponde a <em>DIGITAL HEALTH</em>. Se atribuyeron los datos a los estudios concretos dentro del texto y se ajustó el titular y las conclusiones: la evidencia disponible sostiene que el DSD asistido por IA alcanza resultados comparables al diseño de un experto, no que sea superior. El cuerpo de estudios sigue siendo reducido.
            </p>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
