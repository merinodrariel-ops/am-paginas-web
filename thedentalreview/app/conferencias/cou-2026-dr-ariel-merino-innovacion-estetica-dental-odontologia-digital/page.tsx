import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import { autorSchema } from "../../components/Firma";

const CANONICAL = "https://www.thedentalreview.com/conferencias/cou-2026-dr-ariel-merino-innovacion-estetica-dental-odontologia-digital";
const CLD = "https://res.cloudinary.com/drctvgyqd";
const COVER = `${CLD}/image/upload/w_1600,h_1067,c_fill,g_auto,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-selfie-publico-charla-innovacion-estetica-dental.jpg`;
const COVER_OG = `${CLD}/image/upload/w_1200,h_630,c_fill,g_auto,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-selfie-publico-charla-innovacion-estetica-dental.jpg`;
const FOTO_TEAM = `${CLD}/image/upload/w_900,c_limit,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-team-operatoria-asociacion-odontologica-uruguaya.jpg`;
const FOTO_ACCESO = `${CLD}/image/upload/w_900,c_limit,q_auto,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-congreso-montevideo-5.jpg`;
const VIDEO = `${CLD}/video/upload/q_auto:eco,f_auto/casos/cou-2026/cou-2026-dr-ariel-merino-charla-vanguardia-estetica-dental-publico.mp4`;
const VIDEO_POSTER = `${CLD}/video/upload/so_2,w_720,q_auto,f_jpg/casos/cou-2026/cou-2026-dr-ariel-merino-charla-vanguardia-estetica-dental-publico.jpg`;

export const metadata: Metadata = {
  title: "COU 2026: Ariel Merino e innovación en estética dental",
  description: "El Dr. Ariel Merino disertó en el Congreso Odontológico Uruguayo 2026 sobre innovación en estética dental y odontología digital, invitado por la AOU.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "COU 2026: Ariel Merino e innovación en estética dental",
    description: "Vanguardia en estética dental y odontología digital en el Congreso Odontológico Uruguayo, en el año en que la AOU cumple 80 años.",
    url: CANONICAL,
    type: "article",
    publishedTime: "2026-11-21T12:00:00-03:00",
    images: [{ url: COVER_OG, width: 1200, height: 630, alt: "Dr. Ariel Merino con el público de su charla en el Congreso Odontológico Uruguayo 2026" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id": `${CANONICAL}#article`,
  headline: "COU 2026: el Dr. Ariel Merino y la innovación en estética dental y odontología digital",
  description: "Cobertura de la conferencia del Dr. Ariel Merino en el Congreso Odontológico Uruguayo 2026, organizado por la Asociación Odontológica Uruguaya en Montevideo.",
  datePublished: "2026-11-21T12:00:00-03:00",
  dateModified: "2026-11-21T12:00:00-03:00",
  image: [COVER_OG],
  mainEntityOfPage: CANONICAL,
  author: autorSchema,
  publisher: { "@type": "Organization", "@id": "https://www.thedentalreview.com/#publisher", name: "The Dental Review" },
  about: [
    { "@type": "Person", "@id": "https://www.arielmerino.com/#person", name: "Dr. Ariel Merino" },
    {
      "@type": "Event",
      name: "Congreso Odontológico Uruguayo 2026 (COU 2026)",
      startDate: "2026-11-11",
      endDate: "2026-11-13",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: "Montevideo", address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" } },
      organizer: { "@type": "Organization", name: "Asociación Odontológica Uruguaya", url: "https://www.aou.org.uy" },
      performer: { "@id": "https://www.arielmerino.com/#person" },
    },
  ],
};

export default function Cou2026Article() {
  return (
    <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <header style={{ borderBottom: "1px solid var(--paper-dim)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none", fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 24, fontWeight: 700 }}>The Dental Review</Link>
          <nav aria-label="Navegación principal" style={{ display: "flex", gap: 20, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            <Link href="/noticias" style={{ color: "var(--muted)", textDecoration: "none" }}>Noticias</Link>
            <Link href="/acerca-de" style={{ color: "var(--muted)", textDecoration: "none" }}>Acerca de</Link>
          </nav>
        </div>
      </header>

      <main>
        <article style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 32px" }}>
          <p style={{ color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.32em", fontSize: 10, marginBottom: 20 }}>Conferencia · Congreso Odontológico Uruguayo 2026</p>
          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 400, fontSize: "clamp(36px, 6vw, 62px)", lineHeight: 1.08, marginBottom: 24 }}>
            Vanguardia en estética dental: la odontología digital cruzó el Río de la Plata
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.7, marginBottom: 24 }}>
            Invitado por la Asociación Odontológica Uruguaya, el Dr. Ariel Merino dictó en Montevideo una conferencia sobre innovación en estética dental y odontología digital, en un congreso que reunió a unos 800 profesionales.
          </p>
          <p style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.1em", marginBottom: 40 }}>Por Dr. Ariel Merino · MN 34.869 · 21 de noviembre de 2026 · Montevideo</p>

          <div style={{ position: "relative", aspectRatio: "3/2", margin: "0 0 48px", overflow: "hidden" }}>
            <Image src={COVER} alt="Dr. Ariel Merino se toma una selfie con el público al cierre de su charla en el Congreso Odontológico Uruguayo 2026" fill priority sizes="(max-width: 800px) 100vw, 760px" style={{ objectFit: "cover" }} />
          </div>

          <div className="article-body">
            <p>Del 11 al 13 de noviembre, Montevideo fue sede del <strong>Congreso Odontológico Uruguayo 2026 (COU 2026)</strong>, el encuentro anual de la <a href="https://www.aou.org.uy" target="_blank" rel="noopener noreferrer">Asociación Odontológica Uruguaya</a>, que este año celebra 80 años. Según los organizadores, la convocatoria rondó las 800 personas: una cifra alta para el medio odontológico uruguayo.</p>
            <p>Entre los disertantes estuvo el <Link href="https://www.arielmerino.com" target="_blank">Dr. Ariel Merino</Link>, director de AM Estética Dental en Puerto Madero y Uruguay, con una conferencia sobre <strong>innovación y vanguardia en estética dental y odontología digital</strong>, acompañado por el Team Operatoria de la asociación.</p>

            <h2>Qué significa hoy “vanguardia” en estética dental</h2>
            <p>La palabra innovación se gasta rápido en odontología. Cada temporada aparece un escáner, una resina o un software que promete cambiarlo todo. Lo que separa una novedad de un cambio real es si mejora algo medible para el paciente: menos tejido sano comprometido, más previsibilidad antes de intervenir o menos tiempo entre el diagnóstico y el resultado.</p>
            <p>Ese es el criterio con el que el Dr. Merino viene trabajando el flujo digital en su clínica: la planificación del diseño de sonrisa sobre el rostro del paciente, el escaneo intraoral, la prueba en boca antes de tocar el esmalte y el laboratorio propio para acortar las idas y vueltas. Son las líneas que desarrolló también en <Link href="/conferencias/expodent-2026-dr-ariel-merino-inteligencia-artificial-diseno-sonrisa">Expodent 2026</Link> y en el debate sobre <Link href="/noticias/resinas-3d-carillas-dentales-fin-tecnica-manual-2026">resinas impresas en 3D frente a la técnica manual</Link>.</p>

            <figure style={{ margin: "40px 0" }}>
              <video src={VIDEO} poster={VIDEO_POSTER} controls muted playsInline preload="metadata" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto", borderRadius: 2 }} />
              <figcaption style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 10 }}>Fragmento de la conferencia en el COU 2026, Montevideo.</figcaption>
            </figure>

            <h2>La tecnología no reemplaza el criterio clínico</h2>
            <p>La tecnología digital acelera, documenta y comunica. Lo que no hace es decidir la indicación. Cuánto esmalte hay que preparar, si el caso pide carillas, ortodoncia o ninguna intervención, y cómo se integra el resultado a la función y a la encía siguen siendo decisiones clínicas. En la gran mayoría de los casos se necesita una preparación mínima del esmalte, aun con las técnicas más conservadoras. Decirlo con honestidad también es parte de la innovación.</p>

            <h2>Uruguay, en el mapa de la estética dental</h2>
            <p>La charla coincidió con un momento particular para la región. AM Estética Dental prepara su sede en Carrasco, y el congreso fue también la ocasión para que la Dra. Ximena Morales, que se suma al proyecto uruguayo, compartiera la jornada. La agenda incluyó además una clase para estudiantes del IESS Uruguay, por invitación de la Dra. Mariana Olivera Garmendia.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, margin: "36px 0" }}>
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src={FOTO_TEAM} alt="Dr. Ariel Merino junto al Team Operatoria de la Asociación Odontológica Uruguaya en el COU 2026" fill sizes="(max-width: 800px) 100vw, 380px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src={FOTO_ACCESO} alt="Dr. Ariel Merino en el acceso del Congreso Odontológico Uruguayo 2026, 11 al 13 de noviembre en Montevideo" fill sizes="(max-width: 800px) 100vw, 380px" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <p>La conclusión es menos espectacular que un eslogan, pero más útil. La vanguardia en estética dental no se mide por el equipamiento. Se mide por la cantidad de decisiones que el paciente puede ver y entender antes de que se toque un diente, y por un resultado natural que se sostenga en el tiempo.</p>
            <p style={{ fontSize: 14, color: "var(--muted)" }}>Más sobre la trayectoria docente del Dr. Merino en <a href="https://www.arielmerino.com/congreso-odontologico-uruguayo-2026" target="_blank" rel="noopener noreferrer">arielmerino.com</a>.</p>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
