import type { Metadata } from "next";
import Link from "next/link";
import { MATRICULA, PERSON_ID, SITE } from "../site-data";
import { Nav, Hero, Seccion, Footer, CtaWhatsapp, Jsonld, breadcrumb, oro, crema, cremaDim } from "../ui";

const PATH = "/congreso-odontologico-uruguayo-2026";
const CLD = "https://res.cloudinary.com/drctvgyqd";
const FOTOS = [
  {
    src: `${CLD}/image/upload/w_900,c_limit,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-selfie-publico-charla-innovacion-estetica-dental.jpg`,
    alt: "Selfie del Dr. Ariel Merino con el público al cierre de su charla en el COU 2026",
  },
  {
    src: `${CLD}/image/upload/w_900,c_limit,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-disertante-congreso-odontologico-uruguayo.jpg`,
    alt: "Dr. Ariel Merino con colegas de la Asociación Odontológica Uruguaya en el COU 2026",
  },
  {
    src: `${CLD}/image/upload/w_900,c_limit,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-congreso-montevideo-5.jpg`,
    alt: "Dr. Ariel Merino en el acceso del Congreso Odontológico Uruguayo, Montevideo",
  },
];
const VIDEO = `${CLD}/video/upload/q_auto:eco,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-charla-vanguardia-estetica-dental-publico.mp4`;
const VIDEO_POSTER = `${CLD}/video/upload/so_2,w_720,q_auto,f_jpg/casos/cou-2026/cou-2026-dr-ariel-merino-charla-vanguardia-estetica-dental-publico.jpg`;

export const metadata: Metadata = {
  title: "Disertante en el COU 2026, Montevideo",
  description: "El Dr. Ariel Merino dio en el COU 2026 de Montevideo una charla sobre innovación en estética dental y odontología digital, invitado por la AOU.",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "Gracias, Uruguay: mi charla en el COU 2026",
    description: "Innovación en estética dental y odontología digital, frente a unos 800 colegas en Montevideo.",
    url: `${SITE}${PATH}`,
    locale: "es_AR",
    type: "article",
    images: [{ url: `${CLD}/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-selfie-publico-charla-innovacion-estetica-dental.jpg`, width: 1200, height: 630 }],
  },
};

const eventoSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${SITE}${PATH}#event`,
  name: "Congreso Odontológico Uruguayo 2026 (COU 2026)",
  startDate: "2026-11-11",
  endDate: "2026-11-13",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: { "@type": "Place", name: "Montevideo", address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" } },
  organizer: { "@type": "Organization", name: "Asociación Odontológica Uruguaya", url: "https://www.aou.org.uy" },
  performer: { "@id": PERSON_ID },
  about: "Innovación en estética dental y odontología digital",
};

const paginaSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE}${PATH}`,
  name: "Dr. Ariel Merino — disertante en el Congreso Odontológico Uruguayo 2026",
  mainEntity: { "@id": PERSON_ID },
  about: { "@id": `${SITE}${PATH}#event` },
};

const FICHA = [
  { dato: "COU 2026", etiqueta: "Congreso Odontológico Uruguayo" },
  { dato: "11–13 nov", etiqueta: "Montevideo, Uruguay" },
  { dato: "~800", etiqueta: "asistentes, según la organización" },
  { dato: "80 años", etiqueta: "de la Asociación Odontológica Uruguaya" },
];

const p = { fontSize: 15, lineHeight: 1.85, color: cremaDim } as const;

export default function Cou2026Page() {
  return (
    <>
      <Jsonld data={eventoSchema} />
      <Jsonld data={paginaSchema} />
      <Jsonld
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "Trayectoria", path: "/trayectoria" },
          { name: "COU 2026", path: PATH },
        ])}
      />
      <Nav actual="/trayectoria" />
      <main>
        <Hero
          eyebrow={`Docencia · Congreso Odontológico Uruguayo 2026 · ${MATRICULA}`}
          titulo="Gracias, Uruguay. Hablar de innovación en estética dental"
          destacado="frente a 800 colegas."
          bajada="Del 11 al 13 de noviembre la Asociación Odontológica Uruguaya me invitó a disertar en su congreso anual, el año en que cumple 80 años. Hablé de lo que hoy considero vanguardia en estética dental y odontología digital, y de lo que no lo es."
        />

        <Seccion eyebrow="La ficha">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(201,169,110,0.14)", border: "1px solid rgba(201,169,110,0.14)", borderRadius: 16, overflow: "hidden" }}>
            {FICHA.map((f) => (
              <div key={f.etiqueta} style={{ background: "#141414", padding: "26px 24px" }}>
                <div style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 26, color: oro, marginBottom: 8, lineHeight: 1.1 }}>{f.dato}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: cremaDim, lineHeight: 1.6 }}>{f.etiqueta}</div>
              </div>
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="La charla" titulo="Qué es innovar en estética dental">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={p}>
                Cada año aparece un escáner, una resina o un software nuevo. Para mí la pregunta no es si una herramienta
                es nueva, sino si le cambia algo concreto al paciente: menos tejido sano comprometido, más previsibilidad
                antes de intervenir y menos tiempo entre el diagnóstico y el resultado.
              </p>
              <p style={p}>
                Por eso trabajo el flujo digital completo: el diseño de sonrisa planificado sobre el rostro, el escaneo
                intraoral, la prueba en boca antes de tocar el esmalte y el laboratorio propio, que evita meses de idas y
                vueltas. La tecnología acelera y documenta. La indicación la sigue tomando el odontólogo.
              </p>
              <p style={{ ...p, color: crema, borderLeft: `2px solid ${oro}`, paddingLeft: 22 }}>
                Cada vez que doy una charla busco lo mismo: compartir lo que aprendí, transmitirlo sin atajos y despertar
                en otros las ganas de seguir creciendo. Si alguien en esa sala se fue con una idea para probar el lunes
                en su consultorio, valió la pena.
              </p>
            </div>
            <video src={VIDEO} poster={VIDEO_POSTER} controls muted playsInline preload="metadata" style={{ width: "100%", maxWidth: 420, borderRadius: 16, justifySelf: "center" }} />
          </div>
        </Seccion>

        <Seccion eyebrow="En imágenes">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {FOTOS.map((f) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={f.src} src={f.src} alt={f.alt} loading="lazy" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: 16 }} />
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="Gracias" titulo="Me sentí en casa">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={p}>
              Gracias al Congreso Odontológico Uruguayo y a la Asociación Odontológica Uruguaya por la invitación. A la
              Dra. Natali Buchtik, al Dr. Luis Francisco Tomaglione y a todo el Team Operatoria, por la compañía.
            </p>
            <p style={p}>
              A la Dra. Mariana Olivera Garmendia y al IESS Uruguay, por abrirme las puertas para compartir una clase con
              sus alumnos. A la Dra. Ximena Morales, que se suma al proyecto de AM Estética Dental en Uruguay. Y a la Dra.
              Candela Cruz, mi compañera de vida, que me acompaña en todas.
            </p>
            <p style={p}>
              Me llevo nuevas amistades y la alegría de sentirme cada vez más parte de Uruguay, donde AM ya prepara su
              sede en Carrasco.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
              <CtaWhatsapp mensaje="Hola Dr. Merino, lo contacto desde arielmerino.com por cursos y conferencias." texto="Invitar a disertar →" />
              <a
                href="https://www.thedentalreview.com/conferencias/cou-2026-dr-ariel-merino-innovacion-estetica-dental-odontologia-digital"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(201,169,110,0.3)", color: oro, padding: "14px 28px", borderRadius: 100, fontSize: 13, textDecoration: "none" }}
              >
                Leer la cobertura en The Dental Review →
              </a>
            </div>
          </div>
        </Seccion>

        <Seccion eyebrow="Seguir leyendo">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              ["Trayectoria y docencia", "/trayectoria"],
              ["Penn Dental Medicine", "/penn-dental-medicine"],
              ["IA en la consulta", "/ia-en-la-consulta"],
              ["Prensa", "/prensa"],
            ].map(([label, href]) => (
              <Link key={href} href={href} style={{ border: "1px solid rgba(201,169,110,0.18)", borderRadius: 100, padding: "10px 22px", fontSize: 13, color: cremaDim, textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
        </Seccion>
      </main>
      <Footer />
    </>
  );
}
