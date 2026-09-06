import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

const SLUG = "/casos/odontologo-argentino-inteligencia-artificial-simular-sonrisa";
const CANONICAL = `https://www.thedentalreview.com${SLUG}`;
const SIMULADOR_URL = "https://www.amesteticadental.com/sonrisa";
const AM_URL = "https://www.amesteticadental.com";
const CDN =
  "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas";

const HERO = `${CDN}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires`;

const CASE_IMAGES = [
  {
    src: HERO,
    alt: "Antes y después de un caso de diseño de sonrisa documentado por el Dr. Ariel Merino",
    caption: "Caso clínico documentado: comparación antes y después en diseño de sonrisa.",
  },
  {
    src: `${CDN}/cierre-diastemas-intraoral-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero`,
    alt: "Comparación intraoral antes y después de cierre de diastemas con carillas cerámicas",
    caption: "La simulación ayuda a conversar expectativas; el tratamiento real depende del diagnóstico.",
  },
  {
    src: `${CDN}/modelos-yeso-antes-despues-planificacion-diseno-sonrisa-diastemas-dr-ariel-merino-am-estetica-dental-buenos-aires`,
    alt: "Modelos de planificación antes y después de un diseño de sonrisa",
    caption: "Planificación física y digital: dos instancias distintas del mismo proceso clínico.",
  },
];

export const metadata: Metadata = {
  title: "Odontólogo argentino usa IA para simular sonrisas antes del tratamiento",
  description:
    "El Dr. Ariel Merino incorporó un simulador de sonrisa con inteligencia artificial como herramienta orientativa previa a la consulta clínica.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "IA para simular sonrisas antes del tratamiento",
    description:
      "Una herramienta de simulación visual permite explorar cambios estéticos antes de iniciar una evaluación odontológica.",
    type: "article",
    url: CANONICAL,
    images: [{ url: HERO, width: 1080, height: 1080 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Odontólogo argentino usa inteligencia artificial para simular una sonrisa antes del tratamiento",
  description:
    "Nota editorial sobre el uso de inteligencia artificial como herramienta orientativa para simular cambios estéticos de sonrisa antes de una evaluación clínica.",
  datePublished: "2026-06-08",
  dateModified: "2026-06-08",
  author: { "@type": "Organization", name: "Redacción The Dental Review" },
  about: [
    { "@type": "MedicalProcedure", name: "Diseño de sonrisa" },
    { "@type": "SoftwareApplication", name: "Simulador de sonrisa con IA", url: SIMULADOR_URL },
  ],
  mentions: {
    "@type": "Person",
    name: "Dr. Ariel Merino",
    url: AM_URL,
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
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default function OdontologoArgentinoIaSimularSonrisaPage() {
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
          Tecnología clínica · Junio 2026
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
          Odontólogo argentino usa inteligencia artificial para simular una sonrisa antes del tratamiento
        </h1>
        <p style={{ color: "var(--muted, #6b6560)", fontSize: 19, lineHeight: 1.65, marginBottom: 32 }}>
          La herramienta permite generar una referencia visual inicial. Su utilidad no está en prometer un resultado, sino en abrir una conversación más concreta antes de la evaluación clínica.
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
              Nota editorial sobre IA aplicada a odontología estética
            </div>
          </div>
          <Link
            href={SIMULADOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--gold, #b8954a)", fontSize: 11, textDecoration: "none" }}
          >
            Ver simulador de sonrisa con IA →
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
          El odontólogo argentino Ariel Merino incorporó un simulador de sonrisa con inteligencia artificial dentro del ecosistema digital de AM Estética Dental, en Buenos Aires. La propuesta es simple: cargar una fotografía y obtener una visualización orientativa de cómo podría modificarse una sonrisa antes de iniciar una consulta formal.
        </p>
        <p style={paragraphStyle}>
          La palabra clave es orientativa. Una imagen generada por IA puede ayudar a imaginar proporciones, volumen dental, luminosidad y armonía facial. No puede determinar por sí sola si una persona necesita carillas, ortodoncia, blanqueamiento, tratamiento periodontal o ningún procedimiento.
        </p>

        <aside style={{ background: "var(--paper-dim, #e8e4da)", margin: "40px 0", padding: "28px 32px" }}>
          <div style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 20, marginBottom: 12 }}>
            El simulador
          </div>
          <p style={{ ...paragraphStyle, fontSize: 14, marginBottom: 18 }}>
            La herramienta pública está disponible en el sitio de AM Estética Dental. Funciona como una primera referencia visual, no como diagnóstico ni presupuesto.
          </p>
          <Link
            href={SIMULADOR_URL}
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
            Abrir simulador de IA →
          </Link>
        </aside>

        <Heading>Por qué una simulación puede ser útil</Heading>
        <p style={paragraphStyle}>
          En odontología estética, una parte importante del problema es comunicacional. El paciente suele hablar de dientes más largos, más blancos o más parejos, pero esas palabras pueden significar cosas distintas para cada persona. Una simulación permite poner una imagen sobre la mesa y discutirla con más precisión.
        </p>
        <p style={paragraphStyle}>
          Ese punto tiene valor clínico indirecto: reduce malentendidos, ayuda a detectar expectativas poco realistas y permite explicar por qué una imagen atractiva puede no ser viable en una boca concreta.
        </p>

        <div style={{ display: "grid", gap: 18, margin: "36px 0 48px" }}>
          {CASE_IMAGES.slice(1).map((image) => (
            <Figure key={image.src} {...image} />
          ))}
        </div>

        <Heading>La diferencia entre simular y tratar</Heading>
        <p style={paragraphStyle}>
          El salto entre una imagen y un tratamiento real sigue siendo clínico. Para convertir una intención estética en un plan hay que evaluar esmalte, encías, mordida, hábitos, restauraciones previas, sensibilidad, soporte óseo y expectativas. La IA no ve todo eso en una fotografía frontal.
        </p>
        <p style={paragraphStyle}>
          Por eso, el uso responsable de estas herramientas exige una advertencia clara: el resultado visual no es una promesa. Es un punto de partida para conversar qué se puede hacer, qué no conviene hacer y qué alternativas existen.
        </p>

        <Heading>Antes y después: una referencia, no una garantía</Heading>
        <p style={paragraphStyle}>
          Los casos antes y después siguen siendo útiles porque muestran tratamientos reales ya ejecutados. Pero también tienen límites: cada boca tiene condiciones biológicas propias y cada rostro requiere proporciones distintas. Usarlos como inspiración es razonable; copiarlos como objetivo exacto no lo es.
        </p>
        <p style={paragraphStyle}>
          En ese sentido, el simulador ocupa un lugar intermedio. No reemplaza la documentación clínica ni el diseño hecho sobre registros completos, pero puede acercar al paciente a una pregunta más precisa: qué tipo de cambio busca y si ese cambio merece ser evaluado clínicamente.
        </p>

        <Heading>Una tecnología que obliga a explicar mejor</Heading>
        <p style={paragraphStyle}>
          El riesgo de la IA aplicada a la estética dental no es solo técnico. También es narrativo. Si se presenta como una forma de alcanzar un ideal estético único, empuja a decisiones simplificadas. Si se presenta como una herramienta de visualización, puede mejorar la calidad de la consulta.
        </p>
        <p style={paragraphStyle}>
          El mérito de una simulación no debería medirse por lo espectacular de la imagen, sino por su capacidad para ordenar expectativas antes de cualquier intervención irreversible.
        </p>

        <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", marginTop: 44, paddingTop: 36 }}>
          <p style={{ color: "var(--muted, #6b6560)", fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>
            Transparencia editorial: este artículo menciona y enlaza una herramienta desarrollada dentro del ecosistema de AM Estética Dental. La referencia se incluye por su relación directa con el tema tratado. La simulación no reemplaza una evaluación odontológica presencial.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
