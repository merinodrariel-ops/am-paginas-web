import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

const CANONICAL = "https://www.thedentalreview.com/noticias/dyson-cepillo-dientes-camara-ia-2026";

export const metadata: Metadata = {
  title: "Dyson entra en la higiene bucal: un cepillo con cámara, IA e irrigador integrado | The Dental Review",
  description:
    "La marca británica presentó su primer cepillo de dientes: cámara intraoral, detección asistida por algoritmo, chorro de enjuague y un precio en torno a los US$ 500. Qué aporta de verdad y qué queda sin evidencia, según la lectura clínica.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Dyson entra en la higiene bucal: un cepillo con cámara, IA e irrigador integrado",
    description:
      "Cámara intraoral, algoritmo de detección y chorro de enjuague en un solo dispositivo, a unos US$ 500. Análisis del lanzamiento y de su valor clínico real.",
    url: CANONICAL,
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Dyson entra en la higiene bucal: un cepillo con cámara, IA e irrigador integrado",
  description:
    "Análisis del primer cepillo de dientes de Dyson, que combina cámara intraoral, detección asistida por algoritmo e irrigación en un mismo dispositivo, y de qué evidencia clínica respalda cada una de esas funciones.",
  author: { "@type": "Organization", name: "Redacción The Dental Review", url: "https://www.thedentalreview.com" },
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  about: { "@type": "Thing", name: "Higiene bucal y dispositivos de cepillado eléctrico" },
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
  datePublished: "2026-09-06",
  dateModified: "2026-09-06",
};

const s = (obj: object) => JSON.stringify(obj);

export default function NoticiaDysonCepillo() {
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
            Dyson entra en la higiene bucal: un cepillo con cámara, IA e irrigador integrado
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            El fabricante británico, conocido por sus aspiradoras y purificadores, presentó su primer dispositivo de cuidado oral. Combina cámara intraoral, detección asistida por algoritmo y chorro de enjuague en un solo cuerpo, con un precio que lo ubica muy por encima de cualquier cepillo eléctrico del mercado.
          </p>

          {/* Autoría */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Redacción TDR</div>
              <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Tecnología y producto · Septiembre 2026</div>
            </div>
          </div>

          {/* Contenido */}
          {p(
            "Dyson construyó su reputación en categorías donde el problema era mecánico: mover aire, separar partículas, secar más rápido. Su desembarco en el cuidado oral rompe ese patrón. El dispositivo que la marca acaba de presentar no compite por potencia de cepillado, sino por algo que hasta ahora ningún fabricante había puesto en manos del paciente: una cámara que muestra, en tiempo real y en la pantalla del teléfono, lo que está ocurriendo dentro de la boca mientras se cepilla."
          )}

          {p(
            "El precio anunciado —en torno a las 500 libras en el Reino Unido— lo convierte en el cepillo de dientes más caro jamás lanzado por una marca de consumo masivo, en una categoría donde los modelos premium de Philips y Oral-B rara vez superan los 300 dólares. La cifra por sí sola explica por qué el lanzamiento circuló más como noticia de tecnología que como noticia de salud."
          )}

          {h3("Qué hace el dispositivo")}
          {p(
            "Según la presentación del fabricante, el flujo de uso combina cuatro elementos poco habituales en un cepillo doméstico. Se aplica una pasta específica sin espuma, para que la cámara conserve visibilidad durante todo el cepillado. El usuario sostiene el mango en posición horizontal y el sistema captura imagen del campo que está tratando. Un algoritmo de detección analiza esa imagen e identifica las zonas con acumulación. Y el cabezal incorpora un chorro de líquido que sale desde un depósito de enjuague de baja espuma alojado en la base de carga, integrando en un mismo aparato lo que hoy son dos dispositivos separados: el cepillo eléctrico y el irrigador."
          )}

          {p(
            "La instrucción de uso más contraintuitiva es también la más significativa desde el punto de vista clínico: el fabricante recomienda cepillar despacio. Cuanto más lento se desplaza el cabezal, mejor trabaja el sistema. Es exactamente lo contrario del gesto con el que la mayoría de la población se cepilla, y coincide con lo que la literatura viene señalando hace décadas sobre la técnica de cepillado."
          )}

          {h3("El aporte real: ver lo que nunca se ve")}
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink, #0e0e0e)", marginBottom: 24 }}>
            El argumento clínico más sólido a favor del dispositivo no es la vibración ni el algoritmo, sino la retroalimentación visual. Así lo planteó el Dr. Ariel Merino, odontólogo especializado en {a("https://www.amesteticadental.com/estetica-dental", "estética dental")}, en el {a("https://www.youtube.com/watch?v=eOdr9gqT7k8", "análisis del lanzamiento que publicó en su canal")}: el paciente promedio controla con el espejo los dientes anteriores —los que se ven al sonreír— y prácticamente nunca observa los molares posteriores, que son justamente donde la higiene falla con más frecuencia y donde se concentra buena parte de la patología de caries y enfermedad periodontal.
          </p>
          {p(
            "Una cámara que devuelve esa zona a la pantalla del teléfono cambia la naturaleza del hábito: convierte el cepillado de un acto ciego y automático en un procedimiento verificable. Es el mismo principio por el que el revelador de placa en pastillas mejora la higiene de un paciente, pero disponible todos los días y sin tinción. Si el dispositivo cumple lo que promete, ese es su verdadero valor, y es un valor educativo antes que mecánico."
          )}

          {h3("Dónde termina la evidencia")}
          {p(
            "Conviene marcar el límite. La superioridad del cepillo eléctrico sobre el manual en reducción de placa y gingivitis está respaldada por revisiones sistemáticas, y la irrigación oral tiene evidencia razonable como complemento —no como reemplazo— de la limpieza interdental. La detección de placa por cámara con asistencia algorítmica, en cambio, no cuenta todavía con estudios clínicos independientes que documenten un beneficio medible en índices de placa o sangrado a mediano plazo. Es una tecnología plausible, no una tecnología probada."
          )}

          <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink, #0e0e0e)", marginBottom: 24 }}>
            Tampoco resuelve el problema de fondo. Ningún dispositivo compensa una técnica deficiente sostenida en el tiempo, ni sustituye el control profesional periódico ni la limpieza interproximal. En consultorios de alta complejidad estética, como el que {a("https://www.amesteticadental.com/dr-ariel-merino", "Merino")} dirige en Puerto Madero, el mantenimiento domiciliario es determinante para la longevidad de las restauraciones: la salud del margen gingival condiciona el resultado de unas {a("https://www.amesteticadental.com/carillas-dentales", "carillas de porcelana")} tanto como la cerámica misma.
          </p>

          {h3("Un producto de nicho, con efecto de arrastre")}
          {p(
            "A 500 dólares, el dispositivo no es un producto de masas: es un objeto para un segmento que puede pagarlo y que prioriza la salud por sobre el costo. Pero la historia de la categoría sugiere que el efecto relevante no está en las unidades vendidas. Cuando Philips introdujo la tecnología sónica en el segmento premium, la función terminó filtrándose hacia abajo en el mercado en pocos años. Si la retroalimentación visual demuestra utilidad clínica, es esperable que la cámara siga el mismo camino."
          )}

          {p(
            "Por ahora, el lanzamiento deja una señal más interesante que el producto en sí: la higiene bucal doméstica empieza a incorporar instrumentación de diagnóstico, un terreno que hasta ahora pertenecía en exclusiva al consultorio. Esa frontera, y no el precio, es lo que hace que este cepillo merezca atención profesional."
          )}

          {/* Fuente */}
          <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid var(--paper-dim, #e8e4da)", fontSize: 13, color: "var(--muted, #6b6560)", lineHeight: 1.7 }}>
            <p>
              <strong>Fuente:</strong> Materiales de presentación del fabricante y análisis clínico del lanzamiento publicado por el Dr. Ariel Merino, {a("https://www.amesteticadental.com/dentista-puerto-madero", "AM Estética Dental, Puerto Madero")}. Las especificaciones y el precio corresponden a lo comunicado por la marca al momento del lanzamiento en el Reino Unido y pueden variar según el mercado.
            </p>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
