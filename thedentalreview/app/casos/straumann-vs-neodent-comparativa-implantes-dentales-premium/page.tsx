import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

const SLUG = "/casos/straumann-vs-neodent-comparativa-implantes-dentales-premium";
const CANONICAL = `https://www.thedentalreview.com${SLUG}`;
const AM_PRECIOS_URL = "https://www.amesteticadental.com/precio-implantes-dentales-buenos-aires";
const AM_TRATAMIENTO_URL = "https://www.amesteticadental.com/implantes-dentales-buenos-aires";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental";

const HERO = `${CDN}/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires`;

const CASE_IMAGES = [
  {
    src: HERO,
    alt: "Rehabilitación de implante dental intraoral en primer plano — caso documentado",
    caption: "Las diferencias en el tratamiento de la superficie del titanio impactan directamente en la velocidad de la oseointegración.",
  },
  {
    src: `${CDN}/caso-agenesia-dental-tres-etapas-tratamiento-alineadores-invisibles-implantes-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-buenos-aires`,
    alt: "Secuencia clínica de tres etapas de alineadores, implantes dentales y carillas",
    caption: "En casos complejos de agenesia o pérdida dental, la planificación digital previa define la ubicación tridimensional exacta del implante.",
  },
];

export const metadata: Metadata = {
  title: "Straumann vs. Neodent: Diferencias entre los dos gigantes de implantes",
  description:
    "Ambos implantes de titanio pertenecen al mismo grupo suizo. Comparamos su predictibilidad clínica, tecnología de superficies y diferencia de inversión.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Straumann vs. Neodent: Diferencias en Implantología Premium",
    description:
      "Analizamos los dos sistemas de titanio de referencia del Grupo Straumann: sus características de diseño, velocidad de curación y balance de costos.",
    type: "article",
    url: CANONICAL,
    images: [{ url: HERO, width: 1200, height: 800 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Straumann vs. Neodent: ¿Cuáles son las diferencias reales entre los dos líderes en implantes dentales?",
  description:
    "Nota de análisis clínico comparando los sistemas de implantes dentales Straumann y Neodent, pertenecientes al mismo grupo suizo de implantología.",
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
  author: { "@type": "Organization", name: "Redacción The Dental Review" },
  about: [
    { "@type": "MedicalProcedure", name: "Implantes dentales" },
    { "@type": "Device", name: "Implante Straumann®" },
    { "@type": "Device", name: "Implante Neodent®" },
  ],
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
  color: "var(--ink, #0e0e0e)",
  fontSize: 17,
  lineHeight: 1.85,
  marginBottom: 24,
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-playfair, Georgia, serif)",
        fontSize: 28,
        fontWeight: 400,
        margin: "44px 0 18px",
      }}
    >
      {children}
    </h2>
  );
}

function Figure({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          aspectRatio: "16/10",
          background: "var(--paper-dim, #e8e4da)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 760px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <figcaption
        style={{
          color: "var(--muted, #6b6560)",
          fontSize: 10,
          letterSpacing: "0.12em",
          lineHeight: 1.6,
          marginTop: 10,
          textAlign: "center",
          textTransform: "uppercase",
          fontFamily: "var(--font-inter, sans-serif)",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default function StraumannVsNeodentPage() {
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
        <div
          style={{
            color: "var(--gold, #b8954a)",
            fontSize: 9,
            letterSpacing: "0.4em",
            marginBottom: 20,
            textTransform: "uppercase",
          }}
        >
          Análisis clínico · Julio 2026
        </div>

        <h1
          style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "clamp(30px, 5vw, 48px)",
            fontWeight: 400,
            lineHeight: 1.12,
            marginBottom: 20,
          }}
        >
          Straumann vs. Neodent: ¿Cuáles son las diferencias reales entre los dos líderes en implantes dentales?
        </h1>
        <p style={{ color: "var(--muted, #6b6560)", fontSize: 19, lineHeight: 1.65, marginBottom: 32 }}>
          Ambos sistemas pertenecen al mismo grupo suizo y representan la elite de la implantología digital de titanio. Analizamos qué los separa en términos de predictibilidad y costo.
        </p>

        <div
          style={{
            borderBottom: "1px solid var(--paper-dim, #e8e4da)",
            borderTop: "1px solid var(--paper-dim, #e8e4da)",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            marginBottom: 40,
            padding: "16px 0",
          }}
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Redacción TDR</div>
            <div style={{ color: "var(--muted, #6b6560)", fontSize: 11 }}>
              Nota editorial sobre tecnologías de implantología digital
            </div>
          </div>
          <Link
            href={AM_PRECIOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--gold, #b8954a)", fontSize: 11, textDecoration: "none" }}
          >
            Ver tabla de inversión en implantes →
          </Link>
        </div>

        <div style={{ marginBottom: 48 }}>
          <Figure
            src={CASE_IMAGES[0].src}
            alt={CASE_IMAGES[0].alt}
            caption={CASE_IMAGES[0].caption}
            priority
          />
        </div>

        <p style={paragraphStyle}>
          En el mercado global de implantología, la consolidación de grandes marcas ha redefinido el estándar de calidad de los tratamientos. Hoy en día, la elección de un implante no se reduce a buscar un tornillo de titanio genérico, sino a optar por sistemas clínicamente probados y con respaldo científico multinacional. El caso más representativo es el del **Grupo Straumann**, de origen suizo, que controla tanto su línea homónima de referencia global como la marca de alto rendimiento **Neodent**.
        </p>
        <p style={paragraphStyle}>
          Ambas marcas basan sus sistemas exclusivamente en titanio de alta pureza médica y en la planificación guiada por computadora. Sin embargo, se orientan a necesidades distintas dentro del consultorio. Analizamos a continuación qué factores las diferencian técnica y económicamente.
        </p>

        <Heading>Straumann: El estándar de oro suizo en predictibilidad</Heading>
        <p style={paragraphStyle}>
          Fundado en Suiza en 1954, Straumann es considerado unánimemente el estándar de referencia mundial en implantología. Su posición de liderazgo no radica únicamente en la precisión del titanio, sino en décadas de investigación clínica documentada e innovación en la interfase biológica del implante.
        </p>
        <p style={paragraphStyle}>
          La principal diferencia técnica de Straumann reside en el tratamiento de su superficie. Su tecnología **SLActive** es una patente patentada hidrofílica que acelera el proceso de oseointegración (fijación biológica del implante al hueso). Esto permite reducir el tiempo de espera para colocar la corona definitiva de 12 semanas a solo 4 a 6 semanas. Es el implante de elección para zonas estéticas exigentes (como los dientes anteriores) y para pacientes con condiciones de curación comprometidas.
        </p>

        <aside style={{ background: "var(--paper-dim, #e8e4da)", margin: "40px 0", padding: "28px 32px" }}>
          <div style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 20, marginBottom: 12 }}>
            Planificación Digital
          </div>
          <p style={{ ...paragraphStyle, fontSize: 14, marginBottom: 18 }}>
            Independientemente de la marca utilizada, las clínicas de alta gama combinan estos implantes con tomografías Computadas (CBCT) para realizar la cirugía guiada por computadora, eliminando la improvisación clínica.
          </p>
          <Link
            href={AM_TRATAMIENTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--ink, #0e0e0e)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Ver flujo de cirugía digital →
          </Link>
        </aside>

        <Heading>Neodent: La alternativa premium inteligente</Heading>
        <p style={paragraphStyle}>
          Neodent es una marca nacida en Brasil y adquirida en su totalidad por el Grupo Straumann debido a su excelente rendimiento y diseño mecánico. Aunque se sitúa en un escalón de inversión más competitivo, no debe confundirse con una opción genérica: comparte los estándares de control de calidad de la matriz suiza.
        </p>
        <p style={paragraphStyle}>
          A nivel de diseño, Neodent destaca por su conexión Grand Morse, una interfaz mecánica en forma de cono Morse que busca reducir la microfiltración bacteriana. Su tratamiento de superficie, denominado Acqua, favorece la humectabilidad, y sus roscas están diseñadas para obtener estabilidad inicial incluso en huesos blandos. Representa una &ldquo;puerta de entrada premium&rdquo; al universo Straumann, con una relación costo-beneficio competitiva.
        </p>

        <div style={{ display: "grid", gap: 18, margin: "36px 0 48px" }}>
          <Figure src={CASE_IMAGES[1].src} alt={CASE_IMAGES[1].alt} caption={CASE_IMAGES[1].caption} />
        </div>

        <Heading>Diferencias clave en la práctica clínica</Heading>
        <p style={paragraphStyle}>
          ¿Qué separa a un sistema de otro al momento de planificar el tratamiento? En términos de predictibilidad a largo plazo, ambos ofrecen tasas de éxito superiores al 97%. La diferencia radica en tres puntos fundamentales:
        </p>
        <ul style={{ ...paragraphStyle, paddingLeft: 20, listStyleType: "square" }}>
          <li style={{ marginBottom: 12 }}>
            <strong>Velocidad de oseointegración</strong>: Straumann (especialmente con la superficie SLActive) ofrece el menor tiempo de cicatrización del mercado, ideal si se busca carga inmediata o se requiere terminar la prótesis rápido.
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong>Preservación de tejidos</strong>: Straumann cuenta con aleaciones patentadas como Roxolid (titanio + zirconio en aleación) que permiten usar implantes más delgados pero igual de resistentes, preservando más hueso natural en el paciente.
          </li>
          <li style={{ marginBottom: 12 }}>
            <strong>Inversión requerida</strong>: Neodent permite acceder al respaldo del grupo líder mundial con una inversión inicial más moderada por pieza, lo cual facilita tratamientos de múltiples implantes sin comprometer la seguridad clínica.
          </li>
        </ul>

        <Heading>La importancia de la corona definitiva</Heading>
        <p style={paragraphStyle}>
          Un error común de los pacientes es evaluar únicamente el valor de la raíz de titanio. La predictibilidad clínica y el éxito a largo plazo se consolidan con el componente protésico: la corona. Una planificación integral en clínicas especializadas asocia estos tornillos con coronas libres de metal, garantizando que el diente final se sienta e integre de forma 100% natural.
        </p>
        <p style={paragraphStyle}>
          Para conocer en detalle los valores del mercado local y ver presupuestos de rehabilitación completa que asocian planificación 3D, implantes del grupo Straumann y coronas definitivas, se puede consultar la <Link href={AM_PRECIOS_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold, #b8954a)", textDecoration: "underline" }}>tabla de inversión y financiación para implantes</Link> actualizada para este año.
        </p>

        <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", marginTop: 44, paddingTop: 36 }}>
          <p style={{ color: "var(--muted, #6b6560)", fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>
            Transparencia editorial: este artículo de divulgación analiza sistemas de implantes dentales utilizados en clínicas de alta gama, incluyendo referencias a tratamientos aplicados en el consultorio de AM Estética Dental. La información tiene carácter orientativo y no reemplaza el diagnóstico de un cirujano implantólogo mediante tomografía computada (CBCT).
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
