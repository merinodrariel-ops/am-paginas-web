import type { Metadata } from "next";
import Link from "next/link";
import { MATRICULA, PERSON_ID, SITE } from "../site-data";
import { Nav, Hero, Seccion, Footer, CtaWhatsapp, Jsonld, breadcrumb, oro, crema, cremaDim, serif } from "../ui";

const PATH = "/la-sonrisa-perfecta-es-un-error";
const CANONICAL = `${SITE}${PATH}`;

export const metadata: Metadata = {
  title: "Por qué la sonrisa perfecta es un error en estética dental",
  description:
    "Lo más difícil en estética dental no es cambiar una sonrisa: es cambiarla y que no parezca cambiada. Por qué la simetría absoluta atenta contra la belleza natural.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Por qué la sonrisa perfecta es un error | Dr. Ariel Merino",
    description:
      "Demasiado blancos y demasiado simétricos llama la atención, pero no por las razones correctas. La verdadera sofisticación de la estética dental.",
    url: CANONICAL,
    locale: "es_AR",
    type: "article",
  },
};

const articuloSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${CANONICAL}#article`,
  headline: "Por qué la sonrisa perfecta es un error en estética dental",
  description:
    "Criterio clínico sobre naturalidad, asimetrías anatómicas y percepción visual en rehabilitación estética por el Dr. Ariel Merino.",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  datePublished: "2026-10-24",
  dateModified: "2026-10-24",
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
  about: [
    { "@type": "Thing", name: "Estética dental" },
    { "@type": "Thing", name: "Diseño de sonrisa" },
    { "@type": "Thing", name: "Carillas de porcelana" },
  ],
};

export default function PaginaSonrisaError() {
  return (
    <>
      <Jsonld data={breadcrumb([{ name: "Inicio", path: "/" }, { name: "Criterio Clínico", path: PATH }])} />
      <Jsonld data={articuloSchema} />

      <Nav actual={PATH} />

      <Hero
        eyebrow={`Criterio Clínico · Filosofía de Diseño · ${MATRICULA}`}
        titulo="Por qué la sonrisa perfecta"
        destacado="es un error."
        bajada="Trabajando más de quince años en estética dental de alta complejidad terminás aprendiendo una verdad incómoda: lo más difícil no es cambiar una sonrisa. Lo verdaderamente complejo es cambiarla y que nadie note que está cambiada."
      />

      <article style={{ background: "#0a0a0a", color: crema, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", fontSize: "1.15rem", lineHeight: "1.8" }}>
          
          <p style={{ fontSize: "1.25rem", color: oro, fontWeight: 500, marginBottom: "2rem" }}>
            Dientes demasiado blancos y matemáticamente simétricos llaman la atención. Pero no por las razones que el paciente cree.
          </p>

          <h2 style={{ fontSize: "1.8rem", color: crema, marginTop: "2.5rem", marginBottom: "1rem", fontFamily: serif }}>
            En la naturaleza, la perfección rígida no existe
          </h2>
          
          <p style={{ color: cremaDim, marginBottom: "1.5rem" }}>
            Cuando alguien te conoce por primera vez, no querés que su mirada se clave exclusivamente en tu boca y que los ojos no puedan despegarse de tus dientes. Lo que buscamos es que vean tu cara, tu expresión, tu presencia global y tu sonrisa integrada.
          </p>

          <p style={{ color: cremaDim, marginBottom: "1.5rem" }}>
            Si lo primero que resalta de tu rostro es un bloque blanco monocromático, el trabajo fracasó estéticamente. Rompió la armonía facial.
          </p>

          <h2 style={{ fontSize: "1.8rem", color: crema, marginTop: "2.5rem", marginBottom: "1rem", fontFamily: serif }}>
            El valor de la asimetría controlada
          </h2>

          <p style={{ color: cremaDim, marginBottom: "1.5rem" }}>
            Permitirse determinadas asimetrías en un diseño de sonrisa no solo está bien: es necesario. El lado izquierdo de tu rostro no es idéntico al derecho. Los dientes naturales presentan micro-texturas, bordes translúcidos y ligeras desalineaciones armónicas que reflejan la luz de forma viva.
          </p>

          <p style={{ color: cremaDim, marginBottom: "1.5rem" }}>
            Buscamos simetría visual y balance, nunca clones idénticos de un lado al otro. Si logramos un resultado donde el entorno dice <em>«te ves increíble, descansado, renovado»</em> pero nadie identifica que hay carillas o porcelana colocada, el trabajo es perfecto.
          </p>

          <div style={{ borderLeft: `3px solid ${oro}`, paddingLeft: "1.5rem", margin: "3rem 0", fontStyle: "italic", color: crema }}>
            «Ahí radica la verdadera sofisticación de la odontología estética: que cuando sonrías todos noten algo diferente, pero nadie sepa el porqué.»
          </div>

          <div style={{ marginTop: "3.5rem", padding: "2rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(242,185,13,0.2)" }}>
            <h3 style={{ fontSize: "1.3rem", color: oro, marginBottom: "0.8rem" }}>Consulta de Diseño de Sonrisa en Puerto Madero</h3>
            <p style={{ color: cremaDim, fontSize: "1rem", marginBottom: "1.2rem" }}>
              Analizamos la anatomía de tu rostro en 3D antes de tocar un solo diente. Criterio mínimamente invasivo para pacientes que priorizan la naturalidad.
            </p>
            <CtaWhatsapp
              texto="Coordinar evaluación clínica"
              mensaje="Hola Dr. Ariel, leí la nota sobre sonrisas naturales y me gustaría coordinar una evaluación"
            />
          </div>

        </div>
      </article>

      <Footer />
    </>
  );
}
