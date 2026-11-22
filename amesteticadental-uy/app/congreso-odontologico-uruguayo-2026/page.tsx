import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, JsonLd } from "../StructuredData";
import { PERSON_ID, PERSON_URL, REVIEW_URL, SITE_URL, whatsappFor } from "../site-data";

const PATH = "/congreso-odontologico-uruguayo-2026";
const CLD = "https://res.cloudinary.com/drctvgyqd";
const FOTO = `${CLD}/image/upload/w_1000,c_limit,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-selfie-publico-charla-innovacion-estetica-dental.jpg`;
const VIDEO = `${CLD}/video/upload/q_auto:eco,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-charla-vanguardia-estetica-dental-publico.mp4`;
const VIDEO_POSTER = `${CLD}/video/upload/so_2,w_720,q_auto,f_jpg/casos/cou-2026/cou-2026-dr-ariel-merino-charla-vanguardia-estetica-dental-publico.jpg`;

// Fuera del cluster hreflang a propósito: no tiene equivalente es-AR.
export const metadata: Metadata = {
  title: "Dr. Merino, disertante en el COU 2026",
  description:
    "El director clínico de AM Estética Dental disertó en el COU 2026 de Montevideo sobre innovación en estética dental y odontología digital.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Innovación en estética dental, en el Congreso Odontológico Uruguayo",
    url: `${SITE_URL}${PATH}`,
    type: "article",
    images: [{ url: `${CLD}/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-selfie-publico-charla-innovacion-estetica-dental.jpg`, width: 1200, height: 630 }],
  },
};

const eventoSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${PERSON_URL}/congreso-odontologico-uruguayo-2026#event`,
  name: "Congreso Odontológico Uruguayo 2026 (COU 2026)",
  startDate: "2026-11-11",
  endDate: "2026-11-13",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: { "@type": "Place", name: "Montevideo", address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" } },
  organizer: { "@type": "Organization", name: "Asociación Odontológica Uruguaya", url: "https://www.aou.org.uy" },
  performer: { "@id": PERSON_ID },
};

const FICHA = [
  { small: "Congreso", p: "Congreso Odontológico Uruguayo 2026 · Asociación Odontológica Uruguaya" },
  { small: "Fecha", p: "11 al 13 de noviembre de 2026 · Montevideo" },
  { small: "Tema", p: "Innovación en estética dental y odontología digital" },
  { small: "Convocatoria", p: "Alrededor de 800 profesionales, según la organización" },
];

export default function Cou2026UyPage() {
  return (
    <main>
      <JsonLd data={eventoSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "COU 2026", path: PATH }])} />
      <SiteHeader />

      <section className="page-hero shell">
        <p className="eyebrow">DOCENCIA · MONTEVIDEO</p>
        <h1>
          La dirección clínica de AM Carrasco
          <br />
          <em>disertó en el congreso nacional.</em>
        </h1>
        <p>
          Invitado por la Asociación Odontológica Uruguaya, el Dr. Ariel Merino dio en el Congreso Odontológico Uruguayo
          2026 una conferencia sobre innovación en estética dental y odontología digital, frente a colegas de todo el país.
        </p>
      </section>

      <section className="shell">
        <div className="fact-strip">
          {FICHA.map((f) => (
            <div key={f.small}>
              <small>{f.small}</small>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <div className="shell prose-stack">
          <div>
            <p className="eyebrow">QUÉ SIGNIFICA PARA EL PACIENTE</p>
            <h2>El mismo criterio que se enseña, en Carrasco</h2>
            <p>
              Que la odontología uruguaya convoque a un profesional para hablar de vanguardia en estética dental dice algo
              del protocolo que llega a Miraflores 1445: diagnóstico primero, diseño digital de la sonrisa conversado con
              el paciente, prueba en boca antes de tocar un diente y laboratorio propio para que el tratamiento no se
              estire durante meses.
            </p>
            <p>
              Innovar no es usar el equipo más nuevo. Es que el paciente pueda ver y entender cada decisión antes de
              empezar, con la menor preparación del esmalte compatible con un resultado natural y estable.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            <video src={VIDEO} poster={VIDEO_POSTER} controls muted playsInline preload="metadata" style={{ width: "100%", borderRadius: 12 }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FOTO} alt="Dr. Ariel Merino con el público de su charla en el Congreso Odontológico Uruguayo 2026" loading="lazy" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: 12 }} />
          </div>

          <div>
            <p className="eyebrow">UN EQUIPO QUE CRECE EN URUGUAY</p>
            <h2>Más cerca de la odontología uruguaya</h2>
            <p>
              El congreso fue también una ocasión para compartir la jornada con la Dra. Ximena Morales, que se suma al
              proyecto de AM Estética Dental en Uruguay, y para dictar una clase a estudiantes del IESS Uruguay. La sede de
              Carrasco se construye integrada a la comunidad odontológica local.
            </p>
          </div>
        </div>
      </section>

      <section className="shell related-section">
        <p className="eyebrow">SEGUIR LEYENDO</p>
        <h2>Más sobre la dirección clínica</h2>
        <div className="related-grid">
          <Link href="/dr-ariel-merino">
            <h3>Dr. Ariel Merino</h3>
            <p>Trayectoria, enfoque clínico y el equipo que prepara la llegada a Carrasco.</p>
            <i>Ver perfil</i>
          </Link>
          <Link href="/diseno-de-sonrisa-montevideo">
            <h3>Diseño de sonrisa en Montevideo</h3>
            <p>Cómo se planifica digitalmente una sonrisa antes de intervenir.</p>
            <i>Ver tratamiento</i>
          </Link>
          <a href={`${REVIEW_URL}/conferencias/cou-2026-dr-ariel-merino-innovacion-estetica-dental-odontologia-digital`} data-track="uy_tdr_click" target="_blank" rel="noreferrer">
            <h3>La cobertura completa</h3>
            <p>Nota en The Dental Review sobre la conferencia en el COU 2026.</p>
            <i>Leer nota</i>
          </a>
        </div>
        <p className="disclosure">
          <a className="text-link" href={whatsappFor("la sede de Carrasco")} data-track="uy_cou_whatsapp_click" target="_blank" rel="noreferrer">
            Hablar con el equipo
          </a>
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
