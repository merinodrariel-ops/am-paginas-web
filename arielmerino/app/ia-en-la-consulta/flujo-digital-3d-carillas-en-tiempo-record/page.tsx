import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MATRICULA, PERSON_ID, SITE } from "../../site-data";
import { Nav, Hero, Footer, CtaWhatsapp, Jsonld, breadcrumb, crema, cremaDim, serif, oro } from "../../ui";

const PATH = "/ia-en-la-consulta/flujo-digital-3d-carillas-en-tiempo-record";
const CANONICAL = `${SITE}${PATH}`;

export const metadata: Metadata = {
  title: "Flujo digital 3D y carillas en 5 días | Dr. Ariel Merino",
  description:
    "De la captura digital al fresado CNC alemán: cómo resolver 20 carillas cerámicas en 5 días para pacientes que viajan desde el interior o el exterior sin comprometer la biología.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Flujo Digital 3D y Carillas en Tiempo Récord | Dr. Ariel Merino",
    description:
      "Caso clínico y análisis de flujo CAD/CAM: 20 carillas de disilicato de litio de 0.3 mm en 5 días mediante encerado 3D y fresado robotizado VHF.",
    url: CANONICAL,
    locale: "es_AR",
    type: "article",
    images: [{ url: "/images/casos/mendoza/caso-mendoza-antes-despues-carillas-porcelana-rostro-labios-dr-ariel-merino.webp" }],
  },
};

const articuloSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${CANONICAL}#article`,
  headline: "Flujo Digital 3D y CAD/CAM en Tiempo Récord: Rehabilitación con 20 Carillas en 5 Días",
  description:
    "Análisis clínico del Dr. Ariel Merino sobre los protocolos digitales 2D/3D y fresado robótico VHF que permiten concentrar rehabilitaciones complejas en una semana.",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
  about: [
    { "@type": "Thing", name: "Odontología digital" },
    { "@type": "Thing", name: "CAD/CAM dental" },
    { "@type": "Thing", name: "Carillas de porcelana" },
    { "@type": "Thing", name: "Turismo dental" },
  ],
};

export default function PaginaFlujoDigitalMendoza() {
  return (
    <>
      <Jsonld data={breadcrumb([{ name: "Inicio", path: "/" }, { name: "IA y Tecnología", path: "/ia-en-la-consulta" }, { name: "Carillas en Tiempo Récord", path: PATH }])} />
      <Jsonld data={articuloSchema} />

      <Nav actual={PATH} />

      <Hero
        eyebrow={`Protocolo Clínico · Odontología Digital · ${MATRICULA}`}
        titulo="Flujo digital 3D y CAD/CAM:"
        destacado="20 carillas en 5 días sin margen de error."
        bajada="Cuando un paciente se toma un avión para transformar su sonrisa, el tiempo y la precisión no admiten segundas vueltas. Cómo estructuramos la integración entre escaneo intraoral, encerado digital 3D y fresado robótico VHF."
      />

      <article style={{ background: "#0a0a0a", color: crema, padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", fontSize: "1.15rem", lineHeight: "1.8" }}>

          {/* Portada */}
          <div style={{ marginBottom: "3rem", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.3)", boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", background: "#000" }}>
              <Image
                src="/images/casos/mendoza/caso-mendoza-antes-despues-carillas-porcelana-rostro-labios-dr-ariel-merino.webp"
                alt="Antes y después de 20 carillas cerámicas en paciente de Mendoza — Dr. Ariel Merino"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div style={{ padding: "12px 20px", background: "#141414", fontSize: "0.85rem", color: cremaDim, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Caso clínico real · Paciente de Mendoza</span>
              <span style={{ color: oro, fontWeight: 600 }}>AM Estética Dental · Puerto Madero</span>
            </div>
          </div>

          <p style={{ fontSize: "1.3rem", color: "#fff", fontStyle: "italic", borderLeft: `3px solid ${oro}`, paddingLeft: "1.5rem", margin: "2.5rem 0" }}>
            «El paciente no viaja buscando velocidad por sobre calidad. Viaja buscando certezas: saber que en los días que dura su estadía, el resultado final va a ser biológicamente respetuoso y estéticamente superior.»
          </p>

          <h2 style={{ fontFamily: serif, fontSize: "2rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            1. El dilema del paciente a distancia: agenda y biología
          </h2>
          <p>
            Durante décadas, la odontología estética convencional exigía múltiples visitas espaciadas a lo largo de un mes. Para un profesional que ejerce como abogado en la provincia de Mendoza —como en este caso— o para quienes viajan desde el exterior, trasladarse de forma recurrente resulta inviable.
          </p>
          <p>
            La respuesta no es acelerar procesos artesanales forzando al laboratorio, sino <strong>eliminar las fuentes de error analógico</strong>. Al digitalizar el flujo completo desde el primer minuto, el margen de distorsión de los moldes tradicionales desaparece.
          </p>

          {/* Imagen de la secuencia 3D */}
          <div style={{ margin: "2.5rem 0", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.2)" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/5" }}>
              <Image
                src="/images/casos/mendoza/caso-mendoza-planificacion-digital-2d-3d-fresado-vhf-resultado-real.webp"
                alt="Flujo digital de 3 fases: diseño 2D, encerado 3D STL y resultado real en boca"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "10px 18px", background: "#141414", fontSize: "0.8rem", color: cremaDim }}>
              Secuencia clínica: 2D Digital Smile Design → Encerado virtual 3D STL → Fresado robotizado VHF en boca.
            </div>
          </div>

          <h2 style={{ fontFamily: serif, fontSize: "2rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            2. La arquitectura del tratamiento: 20 carillas en disilicato de litio (0.3 mm)
          </h2>
          <p>
            Rehabilitamos 10 piezas superiores y 10 piezas inferiores. El material de elección fue el <strong>disilicato de litio IPS e.max</strong>, mecanizado en bloques cerámicos de alta translucidez.
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Espesor calibrado a 0.3 mm:</strong> Actúan como lentes de contacto dentales. No requieren desgastes invasivos ni eliminación agresiva de tejido sano.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Encerado 3D STL:</strong> Cada tronera, textura y curvatura de transición fue diseñada en software CAD sobre el escaneo intraoral del paciente.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Fresado alemán VHF:</strong> Tolerancia micrométrica que asegura sellados marginales perfectos, evitando filtraciones bacterianas y garantizando salud periodontal.
            </li>
          </ul>

          <h2 style={{ fontFamily: serif, fontSize: "2rem", color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>
            3. De la clínica de Puerto Madero a su provincia
          </h2>
          <p>
            A los 5 días de haber aterrizado en Buenos Aires, el paciente regresó a Mendoza con su rehabilitación completa colocada, oclusión calibrada y una sonrisa que mantiene su naturalidad original, ahora con proporciones armónicas y máxima luminosidad.
          </p>

          <div style={{ marginTop: "4rem", padding: "2rem", background: "#141414", borderRadius: "12px", border: "1px solid #222", textAlign: "center" }}>
            <h3 style={{ fontFamily: serif, fontSize: "1.5rem", color: "#fff", marginBottom: "0.5rem" }}>¿Sos paciente del interior o del exterior?</h3>
            <p style={{ fontSize: "0.95rem", color: cremaDim, marginBottom: "1.5rem" }}>
              Podés enviar tus fotos para una pre-evaluación digital directa antes de planificar tu viaje a Buenos Aires.
            </p>
            <CtaWhatsapp
              mensaje="Hola Dr. Merino! Vivo en el interior/exterior y me gustaría evaluar mi sonrisa para coordinar una consulta en tiempo récord."
              texto="Consultar con el Dr. Ariel Merino"
            />
          </div>

        </div>
      </article>

      <Footer />
    </>
  );
}
