import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import Firma, { autorSchema } from "../../components/Firma";

const CANONICAL = "https://www.thedentalreview.com/noticias/pacientes-llegan-con-sonrisa-generada-por-ia";
const FOTO =
  "https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_800,c_fill,g_center,q_auto,f_auto/articulos/ia-en-el-consultorio/dr-ariel-merino-explica-diseno-de-sonrisa-sobre-imagen-de-ia.jpg";

// La fuente primaria del dato: el registro está publicado y firmado por quien lo
// tomó. La nota lo cita, no lo reproduce como propio.
const FUENTE = "https://www.arielmerino.com/ia-en-la-consulta";

export const metadata: Metadata = {
  title: "Los pacientes llegan con la sonrisa ya diseñada por IA",
  description:
    "Cinco de cada diez primeras consultas de una clínica porteña salen hoy de una charla con un asistente de IA. Hace seis meses la categoría no existía.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Los pacientes llegan con la sonrisa ya diseñada por IA",
    description:
      "De siete de cada diez por redes sociales a cinco de cada diez por inteligencia artificial en seis meses. El registro de un consultorio de Puerto Madero y qué implica para la profesión.",
    url: CANONICAL,
    type: "article",
    images: [{ url: FOTO }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Los pacientes llegan con la sonrisa ya diseñada por IA",
  description:
    "Registro de una práctica privada de Buenos Aires: la inteligencia artificial conversacional desplazó a las redes sociales como principal vía de llegada del paciente de estética dental.",
  image: FOTO,
  author: autorSchema,
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  datePublished: "2026-09-15",
  dateModified: "2026-09-15",
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
  // La atribución del dato a su fuente, explícita en el schema: la entidad Persona
  // que lo registró vive en arielmerino.com con @id estable.
  citation: {
    "@type": "CreativeWork",
    name: "Los pacientes ya llegan con la sonrisa hecha por IA — registro de consultorio, marzo a septiembre de 2026",
    url: FUENTE,
    author: { "@type": "Person", name: "Ariel Merino", "@id": "https://www.arielmerino.com/#person" },
  },
};

const s = (obj: object) => JSON.stringify(obj);

export default function ArticuloPacientesIA() {
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

        {/* Header */}
        <header style={{ borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <Link href="/" style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 20, fontWeight: 700, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}>
              The Dental Review
            </Link>
          </div>
        </header>
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--gold, #b8954a), transparent)" }} />

        <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px" }}>

          {/* Categoría + fecha */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Actualidad</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Septiembre 2026</span>
          </div>

          {/* Título */}
          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            Los pacientes llegan con la sonrisa ya diseñada por IA
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            En una clínica de estética dental de Buenos Aires, cinco de cada diez primeras consultas se originan hoy en una conversación con un asistente de inteligencia artificial. Hace seis meses, esa categoría no registraba una sola mención.
          </p>

          {/* Autoría */}
          <Firma seccion={"Comportamiento del paciente y tecnología · 2026"} />

          {/* Foto */}
          <figure style={{ margin: "0 0 40px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FOTO}
              alt="Un odontólogo señala sobre la pantalla de un teléfono la imagen de sonrisa que el paciente generó con inteligencia artificial"
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto", borderRadius: 4, display: "block" }}
            />
            <figcaption style={{ fontSize: 12, color: "var(--muted, #6b6560)", marginTop: 10, lineHeight: 1.6 }}>
              La escena que se repite: el paciente muestra la imagen que generó y el profesional explica qué parte de ese diseño es alcanzable. <em>Imagen ilustrativa generada con inteligencia artificial.</em>
            </figcaption>
          </figure>

          {/* Contenido */}
          {p(
            <>
              Durante más de una década, la vía de llegada del paciente de estética dental fue previsible: el descubrimiento visual en redes sociales. Instagram y TikTok mostraban un antes y después a alguien que no lo estaba buscando, y ese estímulo activaba una consulta. El registro de una práctica privada de Puerto Madero, en Buenos Aires, documenta que ese esquema se rompió en seis meses.
            </>
          )}

          {p(
            <>
              Según el registro publicado por el odontólogo {a(FUENTE, "Ariel Merino")}, director clínico de AM Estética Dental, la proporción histórica de su consultorio era de siete pacientes por redes sociales y tres por recomendación directa. Entre marzo y septiembre de 2026 pasó a ser de <strong>cinco por inteligencia artificial conversacional, tres por redes sociales y dos por recomendación</strong>. La categoría &ldquo;asistente de IA&rdquo; no registraba menciones antes de ese período.
            </>
          )}

          {h3("De descubrir a verificar")}

          {p(
            "La diferencia entre ambos canales no es de formato sino de intención. Una red social opera sobre un usuario que no estaba buscando: el algoritmo interrumpe y propone. Un asistente conversacional sólo responde a quien pregunta. Todo paciente que llega por esa vía ya había formulado la consulta, y con frecuencia ya vio una respuesta."
          )}

          {p(
            "El dato cualitativo que acompaña al cambio es más relevante que la proporción: una parte sustancial de esos pacientes llega a la consulta con una imagen generada a partir de una fotografía propia, en la que su sonrisa aparece más blanca, más alineada y con proporciones modificadas. No es la sonrisa de un tercero utilizada como referencia, sino una versión idealizada de la suya."
          )}

          {p(
            "El efecto sobre la consulta es directo. La demanda deja de ser exploratoria y pasa a ser una verificación: el paciente no pregunta qué se puede hacer, sino si el resultado que ya vio es alcanzable en su caso. Llega, además, con vocabulario técnico incorporado —proporción, simetría, línea media, luminosidad— que hasta hace poco no formaba parte de una primera consulta espontánea."
          )}

          {h3("El límite técnico de la imagen")}

          {p(
            "Un modelo generativo produce una representación bidimensional plausible a partir de patrones estéticos aprendidos. No dispone de información sobre el espesor de esmalte remanente, la posición radicular, el biotipo gingival, el color del sustrato dentinario, la dimensión vertical, la guía anterior ni la fonética del paciente. Modifica píxeles, no tejidos."
          )}

          {p(
            "El ejemplo habitual es el color: en una imagen, blanquear un diente severamente discrómico no tiene costo alguno; en boca, ese resultado depende del sustrato y puede exigir un espesor cerámico que el espacio protésico disponible no admite. La consecuencia clínica es que la imagen carece de valor diagnóstico, aunque conserve un valor comunicacional considerable."
          )}

          {p(
            <>
              El procedimiento que describe Merino consiste en tratar esa imagen como un dato sobre la expectativa y no como un plan de tratamiento: identificar qué atributo específico eligió el paciente, contrastarlo contra el estudio clínico completo y traducirlo a un ensayo estético verificable en boca —el mock-up—, que es lo que se aprueba antes de cualquier procedimiento irreversible. {a("https://www.amesteticadental.com/blog/chatgpt-puede-disenar-tu-sonrisa", "El protocolo completo está publicado acá")}.
            </>
          )}

          {h3("El riesgo: expectativa sin fricción")}

          {p(
            "La particularidad de la imagen generada es que se produce sin costo, sin límite anatómico y sin contraparte profesional que la module. El paciente puede iterar hasta obtener exactamente lo que desea ver, y esa versión final —la más satisfactoria, no la más realista— queda fijada como referencia."
          )}

          {p(
            "La literatura en estética dental viene advirtiendo desde hace años sobre el efecto de la exposición sostenida a imágenes idealizadas en la percepción de la propia sonrisa. La generación personalizada agrava el fenómeno en un punto concreto: la imagen ya no corresponde a un modelo inalcanzable sino al propio paciente, lo que la vuelve psicológicamente más vinculante y más difícil de relativizar en la consulta."
          )}

          {h3("Lo que la IA no desplazó")}

          {p(
            "El aspecto más significativo del registro es dónde no se produjo la caída. Las redes sociales retrocedieron de siete a tres, mientras que la recomendación directa de un paciente a otro cedió apenas un punto, de tres a dos."
          )}

          {p(
            "La lectura es que el asistente conversacional sustituyó la función de descubrimiento e investigación, no la de confianza. La evidencia de un resultado verificable en alguien conocido sigue siendo el factor de conversión más fuerte, y ninguna herramienta generativa lo reemplaza. La tecnología modificó por dónde entra el paciente; no modificó qué lo hace decidirse."
          )}

          {h3("Implicancias para la profesión")}

          {p(
            "Si una proporción creciente de pacientes construye su criterio previo en una conversación con un modelo de lenguaje, la información pública de una práctica clínica deja de estar dirigida exclusivamente a personas: pasa a ser leída, resumida y citada por sistemas automáticos. Eso favorece a la información verificable y concreta —un material, un método, un plazo, una ubicación— por sobre la adjetivación comercial, que ningún sistema de respuesta puede citar."
          )}

          {p(
            <>
              El fenómeno se suma a una tendencia más amplia de incorporación de IA en la práctica odontológica, que The Dental Review viene cubriendo tanto en {a("/noticias/ia-diagnostico-odontologico", "diagnóstico por imagen")} como en {a("/noticias/ia-diseno-sonrisa-digital-dsd-2026", "diseño digital de sonrisa")}. La diferencia es que en este caso la tecnología no entró por el equipamiento de la clínica: entró por el teléfono del paciente.
            </>
          )}

          {/* Fuente */}
          <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid var(--paper-dim, #e8e4da)", fontSize: 13, color: "var(--muted, #6b6560)", lineHeight: 1.7 }}>
            <p>
              <strong>Fuente:</strong> registro de primeras consultas de una práctica privada de odontología estética en Puerto Madero, Ciudad Autónoma de Buenos Aires, entre marzo y septiembre de 2026, publicado por el Dr. Ariel Merino (MN 34.869) en {a(FUENTE, "arielmerino.com")}. Se trata de una observación de consultorio sobre la respuesta declarada por el paciente: muestra única, sin aleatorización ni análisis estadístico inferencial. Las proporciones no son extrapolables a otras poblaciones ni regiones.
            </p>
            <p style={{ marginTop: 16 }}>
              <strong>Declaración de interés:</strong> The Dental Review es editada por el Dr. Ariel Merino, que es además la fuente del registro citado en esta nota. {a("/acerca-de", "Criterios editoriales")}.
            </p>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
