import type { Metadata } from "next";
import Link from "next/link";
import { MATRICULA, PERSON_ID, SITE } from "../../site-data";
import { Nav, Hero, Seccion, Footer, CtaWhatsapp, Jsonld, breadcrumb, crema, cremaDim, serif, oro } from "../../ui";

const PATH = "/ia-en-la-consulta/alineadores-con-memoria-de-forma";
const CANONICAL = `${SITE}${PATH}`;
const FOTO_MEMORIA = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/alineadores/alineador-impreso-3d-memoria-de-forma-am.jpg";
const FOTO_MALLA = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/alineadores/alineador-impreso-3d-malla-digital-am";
const VIDEO_360 = "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto,vc_auto/alineadores/alineador-impreso-3d-sin-ataches-360-am.mp4";
const VIDEO_POSTER = "https://res.cloudinary.com/drctvgyqd/image/upload/v1791888815/alineadores/alineador-impreso-3d-memoria-de-forma-am.jpg";

export const metadata: Metadata = {
  title: "Alineadores con memoria de forma | Dr. Ariel Merino",
  description:
    "Criterio clínico del Dr. Ariel Merino sobre la evolución de los alineadores termoformados a la resina 3D con memoria térmica: fuerza biológica continua y adiós a los ataches.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Alineadores con Memoria de Forma: Criterio Clínico | Dr. Ariel Merino",
    description:
      "Por qué dejamos atrás los alineadores prensados tradicionales. Fuerza continua sin decaimiento elástico, activación térmica y ortodoncia invisible sin ataches.",
    url: CANONICAL,
    locale: "es_AR",
    type: "article",
    images: [{ url: FOTO_MEMORIA, width: 1200, height: 630 }],
  },
};

const articuloSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${CANONICAL}#article`,
  headline: "Alineadores con Memoria de Forma en 3D: Superando las Limitaciones Biomecánicas del Termoformado",
  description:
    "Análisis clínico del Dr. Ariel Merino sobre la incorporación de resinas biocompatibles con memoria de forma para ortodoncia invisible directa.",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
  about: [
    { "@type": "Thing", name: "Ortodoncia digital" },
    { "@type": "Thing", name: "Alineadores invisibles" },
    { "@type": "Thing", name: "Impresión 3D directa" },
    { "@type": "Thing", name: "Polímeros con memoria de forma" },
  ],
};

const FICHA = [
  { dato: "0 ataches", etiqueta: "en la gran mayoría de casos" },
  { dato: "Fuerza continua", etiqueta: "sin fatiga elástica a los 3 días" },
  { dato: "30–40%", etiqueta: "menos tiempo total de tratamiento" },
  { dato: "36.5 °C", etiqueta: "activación con temperatura bucal" },
];

const p = { fontSize: 16, lineHeight: 1.85, color: cremaDim, marginBottom: 20 } as const;

export default function PaginaAlineadoresMemoriaFormaDrMerino() {
  return (
    <>
      <Jsonld data={breadcrumb([{ name: "Inicio", path: "/" }, { name: "IA y Tecnología", path: "/ia-en-la-consulta" }, { name: "Alineadores con Memoria", path: PATH }])} />
      <Jsonld data={articuloSchema} />

      <Nav actual="/ia-en-la-consulta" />

      <Hero
        eyebrow={`Criterio Clínico · Ortodoncia Digital · ${MATRICULA}`}
        titulo="Alineadores con memoria de forma:"
        destacado="por qué el termoformado quedó atrás."
        bajada="Durante más de dos décadas la ortodoncia invisible se basó en prensar láminas plásticas sobre moldes. La memoria de forma y la impresión directa 3D resuelven los dos mayores reclamos clínicos: la pérdida de fuerza a los pocos días y la necesidad de llenar los dientes de ataches."
      />

      <article style={{ background: "#0a0a0a", color: crema, padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Ficha técnica */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 1,
              background: "rgba(201,169,110,0.14)",
              border: "1px solid rgba(201,169,110,0.14)",
              borderRadius: 16,
              overflow: "hidden",
              marginBottom: "3rem",
            }}
          >
            {FICHA.map((f) => (
              <div key={f.etiqueta} style={{ background: "#141414", padding: "22px 20px" }}>
                <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: oro, marginBottom: 6, lineHeight: 1.1 }}>{f.dato}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: cremaDim, lineHeight: 1.4 }}>{f.etiqueta}</div>
              </div>
            ))}
          </div>

          {/* Video Rotación 360 */}
          <div style={{ marginBottom: "3rem", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(242,185,13,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}>
            <video
              src={VIDEO_360}
              poster={VIDEO_POSTER}
              controls
              muted
              loop
              playsInline
              preload="metadata"
              style={{ width: "100%", display: "block" }}
            />
            <div style={{ padding: "12px 20px", background: "#141414", fontSize: "0.85rem", color: cremaDim, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>▶ Alineador con memoria de forma impreso en 3D</span>
              <span style={{ color: oro, fontWeight: 600 }}>AM Estética Dental</span>
            </div>
          </div>

          <p style={{ fontSize: "1.25rem", color: "#fff", fontStyle: "italic", borderLeft: `3px solid ${oro}`, paddingLeft: "1.5rem", margin: "2.5rem 0" }}>
            «El problema nunca fue la idea de alinear con placas transparentes. El problema fue el material: un plástico prensado que se fatiga a las 72 horas y que exige llenar los dientes del paciente de botones de resina para poder agarrarse.»
          </p>

          <h2 style={{ fontFamily: serif, fontSize: "1.85rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            1. La decadencia de fuerza elástica: el gran secreto de la ortodoncia convencional
          </h2>
          <p style={p}>
            En cualquier tratamiento ortodóncico, la clave biológica no es la fuerza bruta: es la constancia. Una fuerza excesiva produce hialinización del ligamento y frena el movimiento; una fuerza constante y fisiológica permite que el hueso se reabsorba y aposite sin trauma.
          </p>
          <p style={p}>
            Con los alineadores termoformados convencionales, el paciente experimentaba un pico de presión incómodo durante los primeros dos días. Pero hacia el día cuatro, el plástico ya se había deformado plásticamente. Durante el resto del ciclo de dos semanas, el movimiento se desaceleraba drásticamente.
          </p>

          <h2 style={{ fontFamily: serif, fontSize: "1.85rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            2. El rol de la termorreactividad: activación bucal
          </h2>
          <p style={p}>
            Las nuevas resinas de impresión 3D directa poseen memoria de forma térmica. El paciente sumerge la placa en agua tibia unos instantes: el material se reblandece, permitiendo colocarlo sin forzar ni rozar el esmalte.
          </p>
          <p style={p}>
            Una vez colocado en boca, la propia temperatura corporal (36.5 °C) reactiva la rigidez elástica programada. La placa no se deforma ni se rinde ante la resistencia del diente: mantiene un empuje elástico calibrado de forma ininterrumpida.
          </p>

          <div style={{ margin: "2.5rem 0", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(201,169,110,0.2)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FOTO_MALLA} alt="Planificación 3D y control de espesor de alineador digital" style={{ width: "100%", display: "block" }} />
            <div style={{ padding: "10px 16px", background: "#111", fontSize: "0.8rem", color: cremaDim }}>
              Control geométrico directo: socavados de retención natural sin necesidad de attachments de resina.
            </div>
          </div>

          <h2 style={{ fontFamily: serif, fontSize: "1.85rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            3. Dientes rebeldes y espesor variable
          </h2>
          <p style={p}>
            Una de las grandes frustraciones clínicas en ortodoncia invisible son las piezas con raíces prominentes o rotaciones severas (como caninos superiores o premolares inferiores). En las láminas termoformadas tradicionales, la placa tiene el mismo grosor en toda la arcada, lo que suele traducirse en meses de refinamientos porque el diente no responde.
          </p>
          <p style={p}>
            Con la manufactura aditiva directa podemos diseñar una arquitectura de espesor variable: 0.5 mm en los dientes anteriores para máxima discreción y facilidad de habla, y 0.9 mm a 1.1 mm en la zona exacta del canino rebelde para generar un vector de fuerza con mayor brazo de palanca.
          </p>

          <h2 style={{ fontFamily: serif, fontSize: "1.85rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            4. Prescindir de los ataches
          </h2>
          <p style={p}>
            Para mí, la mayor victoria de esta tecnología es devolverle a la ortodoncia invisible su verdadera promesa de invisibilidad. Pegar diez bloques de composite sobre el esmalte de un paciente adulto que viene a mejorar su imagen era una contradicción clínica que tolerábamos por falta de alternativas.
          </p>
          <p style={p}>
            Hoy, la precisión milimétrica de la resina impresa directamente abraza el ecuador dentario con tal retención que los ataches son la excepción, no la regla.
          </p>

          {/* Bloque CTA */}
          <div style={{ background: "#141414", border: `1px solid ${oro}`, borderRadius: 16, padding: "2.5rem", textAlign: "center", margin: "3.5rem 0" }}>
            <h3 style={{ fontFamily: serif, fontSize: "1.6rem", color: "#fff", marginBottom: "0.8rem" }}>
              Planificación digital en Puerto Madero
            </h3>
            <p style={{ ...p, fontSize: "0.95rem", maxWidth: 540, margin: "0 auto 1.5rem" }}>
              Evaluamos cada caso en AM Estética Dental con escaneo óptico 3D y laboratorio digital integrado.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <CtaWhatsapp
                mensaje="Hola Dr. Merino, leí su artículo sobre alineadores con memoria de forma y quiero evaluar mi caso."
                texto="Consultar por WhatsApp →"
              />
              <Link
                href="https://www.amesteticadental.com/alineadores-invisibles-impresos-3d"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid rgba(201,169,110,0.3)",
                  color: oro,
                  padding: "14px 24px",
                  borderRadius: 100,
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                Ver tratamiento en AM →
              </Link>
            </div>
          </div>

          {/* Enlaces relacionados */}
          <div style={{ borderTop: "1px solid rgba(201,169,110,0.15)", paddingTop: "2rem", marginTop: "3rem" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: oro, marginBottom: "1rem" }}>
              Seguir leyendo en la red
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://www.thedentalreview.com/noticias/alineadores-memoria-de-forma-impresion-3d-directa-2026"
                target="_blank"
                rel="noopener noreferrer"
                style={{ border: "1px solid rgba(201,169,110,0.18)", borderRadius: 100, padding: "10px 20px", fontSize: 13, color: cremaDim, textDecoration: "none" }}
              >
                Análisis técnico en The Dental Review →
              </a>
              <a
                href="https://www.amesteticadental.com/blog/alineadores-con-memoria-de-forma"
                target="_blank"
                rel="noopener noreferrer"
                style={{ border: "1px solid rgba(201,169,110,0.18)", borderRadius: 100, padding: "10px 20px", fontSize: 13, color: cremaDim, textDecoration: "none" }}
              >
                Nota explicativa en AM Estética Dental →
              </a>
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </>
  );
}
