import type { Metadata } from "next";
import Link from "next/link";
import { MATRICULA, PERSON_ID, SITE } from "../../site-data";
import { Nav, Hero, Footer, CtaWhatsapp, Jsonld, breadcrumb, crema, cremaDim, serif, oro } from "../../ui";

const PATH = "/ia-en-la-consulta/carillas-impresas-3d-vs-tecnica-manual";
const CANONICAL = `${SITE}${PATH}`;

export const metadata: Metadata = {
  title: "Carillas Impresas en Resina 3D vs. Técnica a Mano: El Cambio de Paradigma",
  description:
    "Análisis clínico y académico por el Dr. Ariel Merino: curva de aprendizaje de 5 años, conversión monomérica a 200°C y democratización de la odontología estética con resinas 3D.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Carillas Impresas en Resina 3D vs. Técnica a Mano | Dr. Ariel Merino",
    description:
      "¿El fin de la estratificación artesanal? Masterclass sobre resinas híbridas de alta carga (Voxelprint), flujo CAD/CAM y cementación adhesiva.",
    url: CANONICAL,
    locale: "es_AR",
    type: "article",
    images: [{ url: "https://i.ytimg.com/vi/QzcwYPHyYDU/maxresdefault.jpg", width: 1280, height: 720 }],
  },
};

const articuloSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${CANONICAL}#article`,
  headline: "Carillas Impresas en Resina 3D vs. Técnica Manual: Curva de Aprendizaje y Rendimiento Mecánico",
  description:
    "Disertación clínica del Dr. Ariel Merino sobre la evolución de las resinas compuestas de jeringa a las resinas bio-compatibles para impresión 3D de alta carga cerámica.",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
  about: [
    { "@type": "Thing", name: "Odontología digital" },
    { "@type": "Thing", name: "Impresión 3D dental" },
    { "@type": "Thing", name: "Carillas de resina" },
    { "@type": "Thing", name: "Adhesión dental" },
  ],
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Carillas Impresas en Resina 3D: ¿El Fin de la Técnica a Mano? - Dr. Ariel Merino",
  description: "Discusión técnica y casos clínicos sobre resinas impresas en 3D, propiedades mecánicas post-curado térmico y curva de formación odontológica.",
  thumbnailUrl: "https://i.ytimg.com/vi/QzcwYPHyYDU/maxresdefault.jpg",
  uploadDate: "2026-11-01T22:21:37Z",
  contentUrl: "https://www.youtube.com/watch?v=QzcwYPHyYDU",
  embedUrl: "https://www.youtube.com/embed/QzcwYPHyYDU",
};

export default function PaginaCarillas3DvsMano() {
  return (
    <>
      <Jsonld data={breadcrumb([{ name: "Inicio", path: "/" }, { name: "IA y Tecnología", path: "/ia-en-la-consulta" }, { name: "Carillas 3D vs Manual", path: PATH }])} />
      <Jsonld data={articuloSchema} />
      <Jsonld data={videoSchema} />

      <Nav actual={PATH} />

      <Hero
        eyebrow={`Masterclass Clínica · Odontología Digital · ${MATRICULA}`}
        titulo="Carillas en resina 3D vs. técnica manual:"
        destacado="¿el fin de la técnica a mano?"
        bajada="Un análisis técnico y sin filtros sobre por qué la impresión micropolimérica de alta carga está reconfigurando la curva de aprendizaje, la predictibilidad biológica y el estándar de la estética dental moderna."
      />

      <article style={{ background: "#0a0a0a", color: crema, padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", fontSize: "1.15rem", lineHeight: "1.8" }}>
          
          {/* Masterclass Video Embed */}
          <div style={{ marginBottom: "3rem", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(242,185,13,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "#000" }}>
              <iframe
                src="https://www.youtube.com/embed/QzcwYPHyYDU?rel=0&modestbranding=1"
                title="Carillas Impresas en Resina 3D: ¿El Fin de la Técnica a Mano? Dr. Ariel Merino"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
            <div style={{ padding: "12px 20px", background: "#141414", fontSize: "0.85rem", color: cremaDim, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>▶ Conferencia / Análisis clínico en video (5m 38s)</span>
              <span style={{ color: oro, fontWeight: 600 }}>Penn Dental Guest Speaker</span>
            </div>
          </div>

          <p style={{ fontSize: "1.3rem", color: "#fff", fontStyle: "italic", borderLeft: `3px solid ${oro}`, paddingLeft: "1.5rem", margin: "2.5rem 0" }}>
            «Hacer carillas directas de resina a mano de altísimo nivel exige al menos cinco años de práctica constante, cursos y frustraciones. Y aun así, el factor humano introduce variaciones. La resina 3D democratiza la excelencia.»
          </p>

          <h2 style={{ fontFamily: serif, fontSize: "2rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            1. La barrera de entrada: 5 años de formación vs. diseño digital guiado
          </h2>
          <p>
            Durante más de quince años he moldeado resinas compuestas tradicionales con espátulas, pinceles y tinciones. Cualquier colega rehabilitador sabe lo que implica dominar la estratificación policromática, los espesores vestibulares y el control de la inhibición por oxígeno.
          </p>
          <p>
            Con la llegada de resinas biocompatibles para impresión 3D como <strong>Voxelprint</strong> (con cargas cerámicas superiores al 60%), el esfuerzo artesanal en boca se traslada al entorno digital: planificamos el caso con escaneo intraoral y software CAD, imprimiendo restauraciones de 0.1 a 0.2 mm con exactitud micrónica. El odontólogo enfoca su expertise en lo determinante: <strong>el protocolo adhesivo de cementación</strong>.
          </p>

          <h2 style={{ fontFamily: serif, fontSize: "2rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            2. El factor termomecánico: por qué la resina indirecta supera a la directa
          </h2>
          <p>
            En la boca del paciente no podemos elevar la temperatura a 200°C para foto-polimerizar. En el laboratorio sí.
          </p>
          <p>
            Las piezas impresas en 3D se someten a un post-curado térmico controlado que maximiza la <strong>conversión monomérica</strong>. Esto se traduce en:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Mayor resistencia flexural y menor degradación superficial.</li>
            <li style={{ marginBottom: "0.5rem" }}>Menor absorción de pigmentos y estabilidad cromática a largo plazo.</li>
            <li style={{ marginBottom: "0.5rem" }}>Capacidad de pulido mecánico indirecto logrando un <em>gloss</em> similar a la cerámica feldespática.</li>
          </ul>

          <h2 style={{ fontFamily: serif, fontSize: "2rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            3. Democratización de la odontología estética
          </h2>
          <p>
            Esto no significa que la técnica a mano vaya a desaparecer de un día para el otro, pero sí que el flujo digital permite a más profesionales ofrecer tratamientos conservadores, sin limar el esmalte, a un costo biológico y económico mucho más predecible para el paciente.
          </p>

          <div style={{ marginTop: "4rem", padding: "2rem", background: "#141414", borderRadius: "12px", border: "1px solid #222", textAlign: "center" }}>
            <h3 style={{ fontFamily: serif, fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem" }}>Intercambio Académico y Clínico</h3>
            <p style={{ fontSize: "0.95rem", color: cremaDim, marginBottom: "1.5rem" }}>
              ¿Sos colega o protesista dental y querés debatir sobre protocolos de impresión 3D y adhesión? Contactame directamente.
            </p>
            <Link
              href="/contacto"
              style={{
                display: "inline-block",
                background: oro,
                color: "#000",
                fontWeight: 600,
                padding: "0.8rem 2rem",
                borderRadius: "30px",
                textDecoration: "none",
              }}
            >
              Contactar con el Dr. Ariel Merino
            </Link>
          </div>

        </div>
      </article>

      <Footer />
    </>
  );
}
