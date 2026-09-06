import type { Metadata } from "next";
import { PERSON_ID, SITE, MATRICULA } from "../site-data";
import { Nav, Hero, Seccion, Footer, CtaWhatsapp, Jsonld, breadcrumb, oro, crema, cremaDim } from "../ui";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto del Dr. Ariel Merino: consultas de pacientes, prensa y formación. AM Estética Dental, Camila O'Gorman 412, Puerto Madero, Buenos Aires.",
  alternates: { canonical: `${SITE}/contacto` },
};

const contactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE}/contacto`,
  name: "Contacto — Dr. Ariel Merino",
  mainEntity: { "@id": PERSON_ID },
};

const VIAS = [
  {
    titulo: "Pacientes",
    texto:
      "Consultas por carillas, diseño de sonrisa o rehabilitación estética. Contame qué querés mejorar y, si podés, mandá una foto de tu sonrisa de frente: con eso ya puedo orientarte antes de la consulta.",
    cta: "Escribir por WhatsApp →",
    mensaje: "Hola Dr. Merino, lo contacto desde arielmerino.com. Quiero consultar por mi caso.",
  },
  {
    titulo: "Prensa",
    texto:
      "Consultas de medios, entrevistas y material clínico para notas sobre estética dental, carillas, bruxismo o tecnología aplicada a la odontología.",
    cta: "Consulta de prensa →",
    mensaje: "Hola Dr. Merino, soy periodista y lo contacto desde arielmerino.com por una consulta de prensa.",
  },
  {
    titulo: "Formación y disertaciones",
    texto:
      "Invitaciones a congresos, cursos y formaciones para odontólogos en diseño de sonrisa digital, carillas de porcelana y estética mínimamente invasiva.",
    cta: "Propuesta de formación →",
    mensaje: "Hola Dr. Merino, lo contacto desde arielmerino.com por una propuesta de disertación o formación.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <Jsonld data={contactPage} />
      <Jsonld
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ])}
      />
      <Nav actual="/contacto" />
      <main>
        <Hero
          eyebrow="Contacto"
          titulo="Hablemos de tu caso,"
          destacado="o de tu nota."
          bajada="Atiendo en AM Estética Dental, en Puerto Madero. Las consultas de pacientes, de prensa y de formación entran todas por el mismo WhatsApp, así que decime de entrada cuál es la tuya y te respondo más rápido."
        />

        <Seccion eyebrow="Según tu consulta" titulo="Tres caminos">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {VIAS.map((v) => (
              <div
                key={v.titulo}
                style={{
                  border: "1px solid rgba(201,169,110,0.14)",
                  borderRadius: 16,
                  padding: 26,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <h2 style={{ fontSize: 16, fontWeight: 600, color: crema }}>{v.titulo}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: cremaDim, flexGrow: 1 }}>{v.texto}</p>
                <div>
                  <CtaWhatsapp mensaje={v.mensaje} texto={v.cta} />
                </div>
              </div>
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="Dónde" titulo="AM Estética Dental">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            <div style={{ fontSize: 15, lineHeight: 1.9, color: cremaDim }}>
              <p style={{ marginBottom: 8 }}>
                <span style={{ color: crema }}>Dirección:</span> Camila O&apos;Gorman 412, Oficina 101, Puerto Madero,
                Ciudad Autónoma de Buenos Aires.
              </p>
              <p style={{ marginBottom: 8 }}>
                <span style={{ color: crema }}>WhatsApp:</span> +54 9 11 7021-9298
              </p>
              <p style={{ marginBottom: 8 }}>
                <span style={{ color: crema }}>Matrícula:</span> {MATRICULA}
              </p>
              <p>
                <span style={{ color: crema }}>Clínica:</span>{" "}
                <a href="https://www.amesteticadental.com" target="_blank" rel="noopener noreferrer" style={{ color: oro, textDecoration: "none" }}>
                  amesteticadental.com
                </a>
              </p>
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=Camila+O'Gorman+412+Puerto+Madero+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid rgba(201,169,110,0.3)",
                  color: oro,
                  padding: "14px 28px",
                  borderRadius: 100,
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>
        </Seccion>
      </main>
      <Footer />
    </>
  );
}
