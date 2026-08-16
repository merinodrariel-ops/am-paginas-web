import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

const CANONICAL = "https://www.thedentalreview.com/noticias/mercado-implantes-dentales-digital-2026";
const OG_IMAGE = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires";

export const metadata: Metadata = {
  title: "El implante dental se vuelve digital: un mercado rumbo a los US$ 12.600 millones | The Dental Review",
  description:
    "Un informe de Persistence Market Research proyecta el mercado global de implantes en US$ 12.600 millones hacia 2032. La odontología digital, la IA y la impresión 3D redefinen la planificación.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "El implante dental se vuelve digital: un mercado rumbo a los US$ 12.600 millones",
    description:
      "CAD/CAM, cirugía guiada, diagnóstico con IA e implantes impresos en 3D: el crecimiento del mercado de implantes está impulsado por la odontología digital.",
    url: CANONICAL,
    type: "article",
    images: [{ url: OG_IMAGE, alt: "Rehabilitación completa con implantes dentales — vista intraoral, AM Estética Dental, Puerto Madero, Buenos Aires" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "El implante dental se vuelve digital: un mercado rumbo a los US$ 12.600 millones",
  description:
    "Análisis del crecimiento del mercado global de implantes dentales impulsado por la odontología digital, el diagnóstico con inteligencia artificial y la impresión 3D.",
  image: [OG_IMAGE],
  author: { "@type": "Organization", name: "Redacción The Dental Review", url: "https://www.thedentalreview.com" },
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  about: { "@type": "MedicalProcedure", name: "Implantología dental digital" },
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const s = (obj: object) => JSON.stringify(obj);

export default function NotaMercadoImplantes() {
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
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Actualidad</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Julio 2026</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            El implante dental se vuelve digital: un mercado rumbo a los US$ 12.600 millones
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            La expansión del mercado global de implantes no responde solo a una mayor demanda, sino a un cambio profundo en cómo se planifican y ejecutan los tratamientos.
          </p>

          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40 }}>
            <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Redacción TDR</div>
            <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Actualidad · Implantología digital</div>
          </div>

          <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={OG_IMAGE} alt="Rehabilitación completa con implantes dentales — vista intraoral, AM Estética Dental, Puerto Madero, Buenos Aires" fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} priority />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            Imagen ilustrativa — rehabilitación con implantes, AM Estética Dental
          </p>

          {p(<>El mercado global de implantes dentales atraviesa una expansión sostenida. Según un informe de Persistence Market Research publicado en abril de 2026, el sector alcanzaría los 12.600 millones de dólares hacia 2032, con una tasa de crecimiento anual compuesta del 7,2%. Detrás de esa cifra hay algo más que una mayor demanda: un cambio profundo en cómo se planifican y ejecutan los tratamientos.</>)}

          {h3("El motor es la odontología digital")}
          {p(<>La integración de sistemas CAD/CAM, imágenes 3D y cirugía guiada permite hoy planificar la colocación de un implante con una precisión milimétrica antes de tocar al paciente. A eso se suman desarrollos que hasta hace poco pertenecían a la ciencia ficción: diagnóstico asistido por inteligencia artificial, cirugía robótica e implantes personalizados fabricados con impresión 3D.</>)}
          {p(<>El informe también señala un desplazamiento en los materiales. Si bien el titanio sigue siendo dominante por su biocompatibilidad comprobada, el zirconio gana terreno en los casos donde la estética es prioritaria, junto con nuevos recubrimientos antibacterianos orientados a reducir el riesgo de infección.</>)}

          {h3("De la función a la previsibilidad")}
          {p(<>La lectura de fondo es clara: el implante dejó de ser una solución puramente funcional para convertirse en un procedimiento donde la {a("https://www.amesteticadental.com/implantes-dentales-buenos-aires", "planificación digital y la estética")} pesan tanto como la técnica quirúrgica. Los pacientes, cada vez más informados, ya no eligen solo recuperar una pieza: eligen hacerlo con estabilidad, apariencia natural y previsibilidad.</>)}

          <div style={{ textAlign: "center", padding: "40px 0 8px", borderTop: "1px solid var(--paper-dim, #e8e4da)", marginTop: 40 }}>
            <p style={{ fontSize: 12, color: "var(--muted, #6b6560)" }}>
              Fuente: {a("https://us.dental-tribune.com/news/dental-implants-market-strengthens-as-digital-dentistry-and-esthetic-demand-drive-adoption/", "Dental Tribune / Persistence Market Research")}
            </p>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
