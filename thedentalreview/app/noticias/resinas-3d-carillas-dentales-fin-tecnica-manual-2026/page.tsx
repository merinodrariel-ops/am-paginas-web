import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import Firma, { autorSchema } from "../../components/Firma";

const CANONICAL = "https://www.thedentalreview.com/noticias/resinas-3d-carillas-dentales-fin-tecnica-manual-2026";
const OG_IMAGE = "https://i.ytimg.com/vi/QzcwYPHyYDU/maxresdefault.jpg";

export const metadata: Metadata = {
  title: "Resinas 3D en odontología estética: ¿el fin de la técnica a mano?",
  description:
    "El auge de las resinas biocompatibles de alta carga y la impresión 3D reconfigura el sector: restauraciones ultrafinas de 0.1 mm con tolerancias micrométricas.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Resinas 3D en odontología estética: ¿el fin de la técnica manual en 2026?",
    description:
      "Análisis sobre la transición de la estratificación artesanal con espátula al flujo aditivo digital en carillas definitivas. Cobertura del cambio de paradigma.",
    url: CANONICAL,
    type: "article",
    images: [{ url: OG_IMAGE, alt: "Carillas impresas en resina 3D sostenidas por el Dr. Ariel Merino" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Resinas 3D en odontología estética: ¿el fin de la técnica a mano en 2026?",
  description:
    "Las resinas con más de 60% de carga cerámica y las impresoras de alta resolución permiten fabricar restauraciones definitivas tipo lente de contacto en una sola sesión.",
  image: [OG_IMAGE],
  author: autorSchema,
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  about: { "@type": "MedicalProcedure", name: "Impresión 3D de carillas dentales aditivas" },
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Carillas Impresas en Resina 3D: ¿El Fin de la Técnica a Mano? - Dr. Ariel Merino",
  description: "Debate clínico en video sobre el avance de la resina 3D y el post-curado térmico a 200°C frente a las resinas compuestas de jeringa.",
  thumbnailUrl: OG_IMAGE,
  uploadDate: "2026-11-01T22:21:37Z",
  contentUrl: "https://www.youtube.com/watch?v=QzcwYPHyYDU",
  embedUrl: "https://www.youtube.com/embed/QzcwYPHyYDU",
};

const s = (obj: object) => JSON.stringify(obj);

export default function NotaResinas3DFinTecnicaMano() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: s(videoSchema) }} />

      <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

        <header style={{ borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <Link href="/" style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 20, fontWeight: 700, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}>
              The Dental Review
            </Link>
          </div>
        </header>
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--gold, #b8954a), transparent)" }} />

        <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px" }}>

          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Tecnología & Mercado</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Noviembre 2026</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            Resinas impresas en 3D: ¿el fin de la técnica a mano alzada en estética dental?
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            La combinación de fotopolímeros híbridos con más del 60% de carga cerámica y sistemas de escaneo óptico plantea un debate que divide aguas en la odontología restauradora: la sustitución progresiva del trabajo artesanal con espátula.
          </p>

          <Firma seccion={"Innovación Clínica · Odontología Aditiva"} />

          {/* Embed Masterclass Video */}
          <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", borderRadius: 4, marginBottom: 24, background: "#000", border: "1px solid var(--paper-dim, #e8e4da)" }}>
            <iframe
              src="https://www.youtube.com/embed/QzcwYPHyYDU?rel=0&modestbranding=1"
              title="Carillas Impresas en Resina 3D: ¿El Fin de la Técnica a Mano? Dr. Ariel Merino"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            Análisis clínico y demostración de piezas de 0.1 mm por el Dr. Ariel Merino
          </p>

          {p(<>Durante décadas, la estratificación directa con composite en jeringa fue considerada la cumbre de la destreza del odontólogo estético. Requería años de entrenamiento manual, control riguroso de la contracción volumétrica de polimerización y una sensibilidad casi escultórica para emular mamelones, halos y translucideces incisales.</>)}
          {p(<>Sin embargo, el cierre de 2026 marca un punto de inflexión. El desarrollo de resinas biocompatibles formuladas específicamente para impresión 3D —como Voxelprint o Prizma, que incorporan micro y nanopartículas cerámicas en concentraciones que superan el 60%— ha comenzado a competir de igual a igual con las técnicas manuales tradicionales.</>)}

          {h3("La barrera de los 5 años y la curva de aprendizaje")}
          {p(<>En un reciente análisis clínico publicado por el {a("https://www.amesteticadental.com", "Dr. Ariel Merino")}, director de AM Estética Dental en Puerto Madero y docente invitado en University of Pennsylvania, el especialista pone el dedo en la llaga: la curva de formación.</>)}
          {p(<>«Un odontólogo desde que se recibe tarda alrededor de cinco años de práctica intensa para lograr carillas a mano alzada con un estándar verdaderamente alto», señala Merino. «Con la impresión 3D, esa curva se acorta de forma contundente: el diseño se planifica digitalmente en pantalla con tolerancia micrométrica, y la energía del profesional se concentra en lo que no se puede automatizar: el diagnóstico y el protocolo adhesivo de cementación».</>)}

          {h3("El tratamiento térmico: 200°C fuera de la boca")}
          {p(<>Más allá de la reproducibilidad geométrica, el salto cualitativo reside en la termomecánica. En la cavidad oral, el composite solo puede fotopolimerizarse a temperatura corporal para evitar necrosis pulpar, alcanzando conversiones monoméricas que raramente superan el 65%.</>)}
          {p(<>Las carillas impresas de manera indirecta, en cambio, pueden ser sometidas en cubas de curado a temperaturas de hasta 200°C con atmósfera inerte. Este post-procesado eleva sustancialmente la densidad de entrecruzamiento de las cadenas poliméricas, otorgando una resistencia al desgaste, una estabilidad cromática y una retención de brillo (gloss) comparables a cerámicas vítreas de baja fusión.</>)}

          {h3("¿Desaparece la técnica manual?")}
          {p(<>El consenso entre los especialistas no augura la extinción inmediata del modelado con espátula, sino su reubicación hacia casos híper-específicos de retoque o micro-fragmentos aislados. Para rehabilitaciones de sector anterior completo, la odontología aditiva impresa en 3D —con láminas que descienden hasta los 0.1 milímetros de espesor— se perfila como el nuevo estándar de mínima intervención.</>)}

          <div style={{ textAlign: "center", padding: "40px 0 8px", borderTop: "1px solid var(--paper-dim, #e8e4da)", marginTop: 40 }}>
            <p style={{ fontSize: 12, color: "var(--muted, #6b6560)" }}>
              Vía: {a("https://www.youtube.com/watch?v=QzcwYPHyYDU", "YouTube / Canal Oficial Dr. Ariel Merino")} · Reportaje especial The Dental Review.
            </p>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
