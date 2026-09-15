import type { Metadata } from "next";
import Link from "next/link";
import { MATRICULA, PERSON_ID, SITE } from "../site-data";
import { Nav, Hero, Seccion, Footer, CtaWhatsapp, Jsonld, breadcrumb, oro, crema, cremaDim, serif } from "../ui";

const PATH = "/ia-en-la-consulta";
const CANONICAL = `${SITE}${PATH}`;

export const metadata: Metadata = {
  title: "Los pacientes ya llegan con la sonrisa hecha por IA",
  description:
    "Cinco de cada diez primeras consultas de mi consultorio se originan hoy en una conversación con un asistente de inteligencia artificial. Antes eran cero. Lo que registré en seis meses y qué cambia en la consulta.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Los pacientes ya llegan con la sonrisa hecha por IA",
    description:
      "De siete de cada diez por redes sociales a cinco de cada diez por inteligencia artificial, en seis meses. El registro de un consultorio de Puerto Madero.",
    url: CANONICAL,
    locale: "es_AR",
    type: "article",
  },
};

// El sujeto de este schema es la observación, y su autor es la Persona. Es la
// pieza que convierte al perfil en fuente citable: el dato no existe en ningún
// otro lado, y quien lo declara tiene nombre, matrícula y @id estable.
const articuloSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${CANONICAL}#article`,
  headline: "Los pacientes ya llegan con la sonrisa hecha por IA",
  description:
    "Registro de la vía de llegada del paciente de estética dental en una práctica privada de Puerto Madero entre marzo y septiembre de 2026.",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  datePublished: "2026-09-15",
  dateModified: "2026-09-15",
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
  about: [
    { "@type": "Thing", name: "Inteligencia artificial generativa" },
    { "@type": "Thing", name: "Odontología estética" },
    { "@type": "Thing", name: "Diseño de sonrisa" },
  ],
};

const paginaSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": CANONICAL,
  url: CANONICAL,
  name: "Los pacientes ya llegan con la sonrisa hecha por IA",
  isPartOf: { "@id": `${SITE}/#website` },
  about: { "@id": PERSON_ID },
  primaryImageOfPage:
    "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/articulos/ia-en-el-consultorio/dr-ariel-merino-explica-diseno-de-sonrisa-sobre-imagen-de-ia.jpg",
};

// El dato, en el formato en que lo registré: sobre cada diez primeras consultas.
const REGISTRO = [
  { dato: "5 de 10", etiqueta: "llegan por inteligencia artificial" },
  { dato: "3 de 10", etiqueta: "llegan por redes sociales" },
  { dato: "2 de 10", etiqueta: "llegan por recomendación" },
  { dato: "6 meses", etiqueta: "tardó el cambio en producirse" },
];

const parrafo = { fontSize: 15, lineHeight: 1.85, color: cremaDim } as const;

export default function IaEnLaConsultaPage() {
  return (
    <>
      <Jsonld data={articuloSchema} />
      <Jsonld data={paginaSchema} />
      <Jsonld
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "IA en la consulta", path: PATH },
        ])}
      />
      <Nav actual={PATH} />
      <main>
        <Hero
          eyebrow={`Observación de consultorio · Marzo a septiembre de 2026 · ${MATRICULA}`}
          titulo="Los pacientes ya llegan con"
          destacado="la sonrisa hecha por IA."
          bajada="Hace años que a cada paciente nuevo le pregunto lo mismo: cómo llegó hasta acá. Durante mucho tiempo la respuesta fue Instagram. Hace seis meses empezó a ser otra, y hoy es la mitad de las primeras consultas."
        />

        <Seccion eyebrow="El registro">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 1,
              background: "rgba(201,169,110,0.14)",
              border: "1px solid rgba(201,169,110,0.14)",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {REGISTRO.map((f) => (
              <div key={f.etiqueta} style={{ background: "#141414", padding: "26px 24px" }}>
                <div style={{ fontFamily: serif, fontSize: 26, fontWeight: 400, color: oro, marginBottom: 8, lineHeight: 1.1 }}>{f.dato}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: cremaDim, lineHeight: 1.6 }}>{f.etiqueta}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: cremaDim, marginTop: 20, maxWidth: 700 }}>
            Antes de este período la proporción era de siete pacientes por redes sociales y tres por recomendación. La
            categoría &ldquo;inteligencia artificial&rdquo; no existía: nadie la mencionaba nunca.
          </p>
        </Seccion>

        <Seccion eyebrow="Cómo lo mido" titulo="Una sola pregunta, hecha siempre igual">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={parrafo}>
              No es una encuesta ni un estudio. Es la pregunta con la que abro todas mis primeras consultas, antes de
              revisar nada y antes de mostrar una sola foto de mis casos: <em style={{ color: crema, fontStyle: "normal" }}>¿cómo llegaste hasta acá?</em>
            </p>
            <p style={parrafo}>
              La hago desde siempre y no por curiosidad comercial. La respuesta me anticipa el tipo de conversación que
              viene después: qué sabe la persona, qué espera y cuánta distancia hay entre lo que imagina y lo que su
              boca permite.
            </p>
            <p style={parrafo}>
              Por eso puedo comparar. Es el mismo instrumento, hecho por la misma persona, durante años. Lo que cambió
              no fue la pregunta: fueron las respuestas.
            </p>
          </div>
        </Seccion>

        <Seccion eyebrow="Lo que veo" titulo="Ya no vienen a preguntar. Vienen a confirmar">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={parrafo}>
              El que llegaba por Instagram traía una idea amplia: &ldquo;me gustaría mejorar mi sonrisa&rdquo;. Había que ir
              acotando de a poco qué le molestaba.
            </p>
            <p style={parrafo}>
              El que llega por inteligencia artificial trae el teléfono en la mano. Subió una foto suya, pidió que le
              mostraran cómo se vería con los dientes más blancos o más alineados, y ya vio el resultado. No la sonrisa
              de un famoso: la suya, corregida.
            </p>
            <p style={{ ...parrafo, color: crema, borderLeft: `2px solid ${oro}`, paddingLeft: 22 }}>
              La pregunta dejó de ser &ldquo;¿qué se puede hacer?&rdquo; y pasó a ser &ldquo;¿esto se puede lograr?&rdquo;. Es
              una diferencia enorme: significa que la consulta empieza mucho más adelante, y que lo que el paciente
              necesita de mí ya no es información general sino un juicio clínico sobre su caso.
            </p>
            <p style={parrafo}>
              También llegan hablando distinto. Me nombran la proporción entre los dientes, la simetría, la línea media,
              la luminosidad. Palabras que hace dos años no aparecían nunca en una primera consulta.
            </p>
          </div>
        </Seccion>

        <Seccion eyebrow="El límite" titulo="Esa imagen no diagnostica nada">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={parrafo}>
              Conviene decirlo con precisión, porque es la parte que más me importa: una imagen generada por
              inteligencia artificial modifica píxeles, no tejidos. No sabe cuánto esmalte queda, cómo están ubicadas
              las raíces, qué color tiene el diente por debajo, cómo es la encía, cómo muerde esa persona ni cómo
              pronuncia.
            </p>
            <p style={parrafo}>
              En una pantalla, blanquear un diente muy oscuro no cuesta nada. En la boca depende del sustrato, y a veces
              exige un espesor de porcelana que el espacio disponible no permite. La pantalla no tiene límites físicos.
              La boca sí.
            </p>
            <p style={parrafo}>
              Pero de ahí no se sigue que haya que descartarla. Al contrario: es el mejor material de comunicación que
              me llegó nunca. La expectativa estética existió siempre; lo nuevo es que ahora llega explícita desde el
              primer minuto, en vez de aparecer recién el día de la prueba, que es el peor momento posible para
              descubrirla.
            </p>
            <p style={parrafo}>
              Lo que hago con esa imagen es traducirla: contrastarla contra el estudio real y convertirla en un ensayo
              que se prueba en la boca antes de tocar un diente.{" "}
              <a
                href="https://www.amesteticadental.com/blog/chatgpt-puede-disenar-tu-sonrisa"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: oro, textDecoration: "none", borderBottom: "1px solid rgba(201,169,110,0.4)" }}
              >
                Escribí el procedimiento completo acá →
              </a>
            </p>
          </div>
        </Seccion>

        <Seccion eyebrow="Lo que no cambió" titulo="La IA reemplazó averiguar, no confiar">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={parrafo}>
              Es el dato que menos se nota y el que más me interesa. Las redes sociales se derrumbaron de siete a tres.
              La recomendación de un paciente a otro apenas se movió: de tres a dos.
            </p>
            <p style={parrafo}>
              La inteligencia artificial se llevó la etapa de investigar, que era la que ocupaban las redes. No se llevó
              la confianza. Sigue sin haber nada más fuerte que ver el resultado en la boca de alguien conocido.
            </p>
            <p style={{ ...parrafo, color: crema, borderLeft: `2px solid ${oro}`, paddingLeft: 22 }}>
              La tecnología cambió por dónde entra el paciente. No cambió qué lo hace quedarse.
            </p>
            <p style={parrafo}>
              Por eso no creo que esto sea una amenaza para la profesión, y tampoco una revolución. Es un cambio de
              puerta de entrada. Lo que se juega adentro del consultorio —el criterio, la mano, el laboratorio— sigue
              siendo exactamente lo mismo.
            </p>
          </div>
        </Seccion>

        <Seccion eyebrow="Nota metodológica">
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: cremaDim }}>
              Los datos corresponden al registro de primeras consultas de mi práctica privada en Puerto Madero, Ciudad
              Autónoma de Buenos Aires, entre marzo y septiembre de 2026, sobre la respuesta declarada por el propio
              paciente. Es una observación de consultorio, no un estudio poblacional: muestra única, sin aleatorización
              y sin análisis estadístico. La atribución se fuerza a una sola categoría, lo que probablemente subestima
              la superposición entre canales. Se publica porque la magnitud del cambio —de cero a la mitad de las
              consultas en seis meses— excede lo que podría explicarse por ruido de registro.
            </p>
          </div>
        </Seccion>

        <Seccion>
          <CtaWhatsapp
            mensaje="Hola! Llegué con una imagen de mi sonrisa hecha con IA y quiero saber si es posible."
            texto="Consultar por mi caso"
          />
        </Seccion>

        <Seccion eyebrow="Seguir leyendo">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              ["Trayectoria y formación", "/trayectoria"],
              ["Carillas de porcelana", "/carillas-de-porcelana"],
              ["Prensa y publicaciones", "/prensa"],
              ["Contacto", "/contacto"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{ border: "1px solid rgba(201,169,110,0.18)", borderRadius: 100, padding: "10px 22px", fontSize: 13, color: cremaDim, textDecoration: "none" }}
              >
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
