import type { Metadata } from "next";
import Link from "next/link";

const CANONICAL = "https://www.thedentalreview.com/noticias/estetica-dental-uruguay-montevideo-carrasco-2026";

export const metadata: Metadata = {
  title: "Montevideo entra al mapa de la estética dental premium | The Dental Review",
  description:
    "El corredor odontológico rioplatense se reconfigura: pacientes uruguayos que cruzan a Buenos Aires y clínicas argentinas que abren sede en Montevideo. Qué hay detrás del movimiento.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Montevideo entra al mapa de la estética dental premium",
    description:
      "Pacientes uruguayos que cruzan a Buenos Aires y clínicas argentinas que desembarcan en Carrasco: anatomía de un corredor odontológico regional.",
    url: CANONICAL,
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Montevideo entra al mapa de la estética dental premium",
  description:
    "Análisis del corredor odontológico entre Uruguay y Argentina y de la llegada de clínicas de estética dental a la zona de Carrasco.",
  author: { "@type": "Organization", name: "Redacción The Dental Review", url: "https://www.thedentalreview.com" },
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  datePublished: "2026-08-12",
  inLanguage: "es",
  mainEntityOfPage: CANONICAL,
};

const s = (obj: object) => JSON.stringify(obj);

export default function ArticuloUruguayCarrasco() {
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
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Mercado</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Agosto 2026</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            Montevideo entra al mapa de la estética dental premium
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            Durante años, el paciente uruguayo de alta gama que buscaba un diseño de sonrisa cruzaba el río. Ahora empieza a
            ocurrir lo inverso: clínicas argentinas abriendo sede en Montevideo. El movimiento dice menos sobre precios de lo
            que parece y más sobre logística clínica.
          </p>

          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Redacción TDR</div>
              <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Mercado · Región rioplatense</div>
            </div>
          </div>

          {p(<>Montevideo y Buenos Aires están separadas por poco más de doscientos kilómetros de agua y menos de una hora de vuelo. Esa geografía convirtió al Río de la Plata, desde hace décadas, en un corredor natural para servicios profesionales de alta complejidad, y la odontología estética no fue la excepción. Lo que cambió en los últimos años no es el flujo, sino su explicación.</>)}

          {h3("El argumento dejó de ser el precio")}
          {p(<>La lectura tradicional del turismo odontológico regional era aritmética: el paciente viajaba porque el mismo tratamiento costaba menos del otro lado. Esa explicación funcionaba en un contexto de brechas cambiarias amplias y sigue siendo válida en segmentos de precio medio, pero perdió capacidad explicativa en el extremo alto del mercado.</>)}
          {p(<>El paciente que encarga una rehabilitación cerámica completa no está optimizando un gasto: está resolviendo un problema de agenda. Lo que evalúa no es cuánto ahorra, sino cuántas semanas de su vida tiene que dedicarle al tratamiento y cuántos viajes implica. En ese cálculo, el factor determinante no es la tarifa: es el tiempo de laboratorio.</>)}

          {h3("Por qué el laboratorio define la logística")}
          {p(<>En el flujo convencional, una clínica envía el caso a un laboratorio dental externo. Se espera la fabricación, se recibe, se prueba en boca, se devuelve con correcciones, se vuelve a esperar. Cada iteración agrega días o semanas. Para un paciente local es una molestia administrable; para uno que viaja desde otro país, cada iteración es un pasaje.</>)}
          {p(<>Las clínicas que integraron laboratorio propio alteran esa ecuación. Con el técnico presente en la prueba, las correcciones ocurren en el momento y el número de iteraciones colapsa. Es la razón por la que una parte del mercado premium regional se concentró en pocos centros: no ofrecen un tratamiento distinto, ofrecen una logística distinta.</>)}
          {p(<>El caso de {a("https://www.amesteticadental.com/turismo-dental", "las clínicas de Buenos Aires que reciben pacientes del exterior")} ilustra el patrón. La documentación pública de casos —desde {a("https://www.amesteticadental.com/casos/20-carillas-porcelana-apinamiento-sin-ortodoncia", "resoluciones de apiñamiento con cerámicas")} hasta {a("https://www.amesteticadental.com/casos/agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas", "rehabilitaciones completas por agenesia")}— muestra planificaciones concentradas en pocos días de trabajo clínico, algo difícil de sostener con un laboratorio tercerizado.</>)}

          {h3("La operación inversa: abrir en Carrasco")}
          {p(<>El movimiento más reciente invierte la dirección del corredor. En lugar de esperar que el paciente uruguayo cruce, algunas clínicas argentinas están montando sede en Montevideo. La zona elegida se repite: Carrasco, el barrio residencial del este de la ciudad, con su concentración de poder adquisitivo alto y su proximidad al aeropuerto internacional.</>)}
          {p(<>AM Estética Dental, la clínica de Puerto Madero dirigida por {a("https://www.arielmerino.com", "el odontólogo Ariel Merino")}, anunció una sede en Miraflores 1445 y publica los avances del proyecto en {a("https://www.amesteticadental.uy", "un sitio dedicado a la operación uruguaya")}. La propuesta declarada replica el modelo argentino, incluido el laboratorio propio, y la fecha de apertura todavía no fue comunicada.</>)}
          {p(<>La apuesta tiene una lógica de mercado clara. Si el diferencial competitivo es la logística y no el precio, replicar la infraestructura del lado uruguayo elimina el único costo que el modelo no podía comprimir: el traslado del paciente. Es también la manera de capturar al segmento que valora el resultado pero no está dispuesto a viajar para obtenerlo.</>)}

          {h3("Lo que el movimiento pone a prueba")}
          {p(<>La incógnita no es la demanda: Montevideo tiene un mercado de estética dental consolidado y profesionales de nivel. La incógnita es si el modelo de laboratorio integrado es replicable a escala en una plaza más chica, donde el volumen de casos que justifica mantener un equipo técnico propio es sensiblemente menor.</>)}
          {p(<>Es la misma pregunta que enfrenta cualquier operación clínica que crece por sedes en lugar de crecer por capacidad: si lo que se exporta es la marca o el sistema. Los próximos dos años, con las primeras sedes efectivamente en funcionamiento, van a dar la respuesta.</>)}

          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "24px 0", marginTop: 48 }}>
            <p style={{ fontSize: 13, color: "var(--muted, #6b6560)" }}>
              <strong>Seguir leyendo:</strong> {a("/noticias/carillas-ultrafinas-additive-dentistry-2026", "El auge de las carillas ultrafinas")} · {a("/noticias/mercado-implantes-dentales-digital-2026", "El implante dental se vuelve digital")}
            </p>
          </div>

        </main>

        <footer style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "24px", marginTop: 60 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/" style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 15, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}>The Dental Review</Link>
            <span style={{ fontSize: 10, color: "var(--muted, #6b6560)", letterSpacing: "0.2em", textTransform: "uppercase" }}>© 2026</span>
          </div>
        </footer>

      </div>
    </>
  );
}
