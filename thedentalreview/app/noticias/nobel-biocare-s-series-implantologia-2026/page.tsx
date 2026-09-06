import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

const CANONICAL = "https://www.thedentalreview.com/noticias/nobel-biocare-s-series-implantologia-2026";

export const metadata: Metadata = {
  title: "Nobel Biocare S Series: una nueva era en diseño de implantes",
  description:
    "La plataforma S Series de Nobel Biocare unifica sistemas de implantes bajo una sola conexión protésica. Análisis de sus ventajas clínicas e impacto en la implantología 2026.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Nobel Biocare S Series: una nueva era en diseño de implantes",
    description:
      "Lanzamiento 2026 de S Series — innovación en diseño de implantes con conexión protésica unificada y plataforma mejorada.",
    url: CANONICAL,
    type: "article",
    images: [{ url: "https://www.thedentalreview.com/og-actualidad-nobel.png" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nobel Biocare S Series: una nueva era en diseño de implantes",
  description:
    "Análisis de la plataforma S Series de Nobel Biocare y su impacto en la implantología moderna de alto nivel.",
  author: { "@type": "Organization", name: "Redacción The Dental Review", url: "https://www.thedentalreview.com" },
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  datePublished: "2026-08-01",
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const s = (obj: object) => JSON.stringify(obj);

export default function ArticuloNobelSeries() {
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
            Nobel Biocare S Series: una nueva era en diseño de implantes
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            La plataforma unificada de implantes lanzada en marzo de 2026 promete simplificar la implantología moderna mediante una única conexión protésica que centraliza el flujo clínico y reduce la complejidad operativa.
          </p>

          {/* Autoría */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Redacción TDR</div>
              <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Implantología · Innovación tecnológica</div>
            </div>
          </div>

          {/* Cuerpo */}
          {p(<>En implantología moderna, la simplificación es estrategia. Cuantas menos variables tenga un sistema, menor margen existe para el error clínico y mayor previsibilidad alcanza el profesional en la planificación y ejecución. Bajo ese principio, Nobel Biocare lanzó en marzo de 2026 su plataforma S Series, un ecosistema de implantes unificado bajo una sola conexión protésica que busca revolucionar la manera en que se practican las rehabilitaciones implantológicas en clínicas de alto nivel.</>)}

          {h3("La unificación como eje central")}
          {p(<>Históricamente, los fabricantes de implantes ofrecían múltiples opciones de conexiones protésicas para adaptarse a diferentes indicaciones clínicas. Esto generaba, inevitablemente, complejidad: más referencias en inventario, más protocolos de instrumentación, más variables en la curva de aprendizaje de los equipos clínicos. La S Series invierte ese paradigma mediante una arquitectura radical: un único tamaño de conexión protésica aplicable a todos los diámetros y longitudes de implante, independientemente de la indicación.</>)}
          {p(<>Lo que parece una simplificación cosmética es, en realidad, un rediseño profundo de la ingeniería implantaria. Los abutments de múltiples unidades se reducen hasta un 65% en volumen, lo que impacta directamente en tres dimensiones de la práctica: inventario más ágil, flujo quirúrgico más fluido y un tiempo de curva de adopción significativamente menor para nuevos miembros del equipo.</>)}

          {h3("Biología y estética integradas")}
          {p(<>La S Series no abandona lo fundamental: la biología de la interfaz implante-hueso. El sistema incorpora {a("https://www.nobelbiocare.com/en-int/s-series", "el concepto de platform shifting mejorado")}, una característica que respeta el ancho biológico y contribuye a mantener estable el margen óseo a largo plazo. Esto es crítico para resultados estéticos duraderos, especialmente en el sector anterior donde los cambios de nivel óseo se perciben de inmediato en el contorno gingival.</>)}
          {p(<>En términos de superficie, Nobel ofrece dos opciones: TiUltra™, una superficie multizonal ultra-hidrófila diseñada para maximizar la oseointegración rápida, y TiUnite®, la superficie anodizada clásica de amplia trayectoria clínica. Ambas integran tecnología antimicrobiana para reducir el riesgo de contaminación bacteriana alrededor del implante, un factor silencioso pero determinante en la estabilidad ósea marginal.</>)}

          {h3("Compatibilidad y versatilidad")}
          {p(<>Un riesgo de cualquier plataforma radicalmente nueva es la obsolescencia forzada de instrumentación y protocolos previos. Nobel resolvió esto con compatibilidad completa: la S Series mantiene integración total con protocolos existentes, sistemas de guiado quirúrgico y flujos de restauración ya consolidados en las clínicas. Esto permite adopción gradual sin ruptura operativa.</>)}
          {p(<>El portafolio S Series incluye tres variantes: NobelActive S, NobelReplace S y NobelParallel S. Cada una mantiene su perfil geométrico diferenciado —perfilado activo, cónico, paralelo respectivamente— y su indicación clínica específica, pero todas convergen en la misma infraestructura de conexión. Es, en esencia, una familia unificada que preserva opciones clínicas sin sacrificar simplificación operativa.</>)}

          {h3("Impacto en la práctica 2026")}
          {p(<>Para el implantólogo que operaba con plataformas clásicas, la S Series plantea una pregunta práctica: ¿cuándo migrar? La respuesta dependerá de cada institución. Para prácticas nuevas o que expanden su línea implantaria, la adopción desde el inicio es obvia. Para equipos consolidados, el beneficio acumulativo —reducción de errores, agilidad operativa, menor necesidad de entrenamiento— justifica la transición, aunque sea gradual.</>)}
          {p(<>En el contexto de 2026, donde el mercado de implantes está fragmentado entre sistemas premiumizados de alto precio y opciones de competencia agresiva, la propuesta de Nobel es inteligente: no compite por precio sino por eficiencia. El implantólogo que elige S Series no está buscando el implante más barato, sino el sistema que le permite operar con máxima predictibilidad y mínima fricción clínica. Para ese profesional, la unificación tiene valor real.</>)}

          {p(<>La S Series representa una maduración de la implantología moderna: cuando el sistema está diseñado tan bien que el profesional deja de pensar en él y piensa únicamente en el paciente.</>)}

          {/* Fuente */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "24px 0", marginTop: 48 }}>
            <p style={{ fontSize: 13, color: "var(--muted, #6b6560)" }}>
              <strong>Fuente:</strong> {a("https://www.nobelbiocare.com/en-int/s-series", "Nobel Biocare S Series — Plataforma oficial")} · {a("https://www.nobelbiocare.com/sites/g/files/wdvifx201/files/96387_S%20series%20solution%20brochure_GB.pdf", "Brochure técnico S Series")}
            </p>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
