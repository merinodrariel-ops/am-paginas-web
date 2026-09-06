import type { Metadata } from "next";
import Link from "next/link";
import { PERSON_ID, SITE, MATRICULA } from "../site-data";
import { Nav, Hero, Seccion, Footer, CtaWhatsapp, Jsonld, breadcrumb, oro, crema, cremaDim, serif } from "../ui";

export const metadata: Metadata = {
  title: "Carillas de porcelana — criterio clínico",
  description:
    "Cómo trabaja las carillas de porcelana el Dr. Ariel Merino: preparación mínima del esmalte, laboratorio propio y diseño 3D previo. Qué se puede prometer y qué no.",
  alternates: { canonical: `${SITE}/carillas-de-porcelana` },
};

// El ángulo de esta página es deliberado: no vende, explica criterio. Es el
// contenido que un motor generativo puede citar ("dirección + material + método")
// y el que sostiene la autoridad temática de la persona sobre "carillas".
const CRITERIOS = [
  {
    titulo: "La preparación mínima no es cero desgaste",
    texto:
      "Se lee mucho \"carillas sin desgaste\" y conviene aclararlo. En resina, el procedimiento suele ser aditivo: se agrega material sobre el diente. En porcelana, salvo casos muy puntuales, hace falta una micro-preparación del esmalte de unas décimas de milímetro para que la carilla no quede sobrecontorneada y para que la encía tolere el borde. Prometer cero desgaste en cerámica es, casi siempre, prometer algo que después no se cumple.",
  },
  {
    titulo: "El diseño se aprueba antes de tocar un diente",
    texto:
      "Planificamos la sonrisa en 3D sobre las proporciones de tu cara y la ajustamos en pantalla hasta que la apruebes. Recién ahí se prepara el primer diente. No es una herramienta de venta: es la forma de que la decisión estética la tomes vos, y no yo por vos con el trabajo ya hecho.",
  },
  {
    titulo: "El laboratorio adentro cambia el resultado, no sólo el plazo",
    texto:
      "Cuando el laboratorio es externo, el ceramista trabaja con fotos y un número de color. Cuando está en la clínica, mira tu cara con la luz que tenés puesta encima. La translucidez del borde incisal, la textura de superficie y el modo en que el color se apaga hacia el cuello no se transmiten bien en una foto. Ahí es donde una carilla deja de parecer una carilla.",
  },
  {
    titulo: "Si apretás los dientes, eso se resuelve primero",
    texto:
      "El bruxismo es la causa más frecuente de fracaso de un trabajo estético bien hecho. La misma fuerza que desgastó tus dientes naturales rompe la porcelana. Si hay bruxismo, el plan incluye la protección o el caso no se hace: no tiene sentido poner algo que sé que se va a romper.",
  },
  {
    titulo: "Porcelana y resina resuelven cosas distintas",
    texto:
      "La resina se hace en una sesión, es reversible y cuesta bastante menos; con el tiempo se mancha y pierde brillo, y necesita pulidos de mantenimiento. La porcelana sostiene color y brillo durante muchos años y no se tiñe, pero requiere laboratorio y una preparación mínima. La elección depende del caso, de la edad del paciente y de qué queremos corregir, no del presupuesto disponible.",
  },
  {
    titulo: "No todos los casos son de carillas",
    texto:
      "Hay sonrisas que se resuelven mejor moviendo los dientes que tapándolos. Cuando el apiñamiento o la mordida lo justifican, corresponde ortodoncia o alineadores antes —o en lugar de— la estética. Decir que no a un caso de carillas es parte del trabajo.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Carillas de porcelana: criterio clínico del Dr. Ariel Merino",
  description:
    "Cómo trabaja las carillas de porcelana el Dr. Ariel Merino: preparación mínima del esmalte, laboratorio propio, diseño 3D previo y en qué casos no corresponden.",
  url: `${SITE}/carillas-de-porcelana`,
  // El autor es la Persona, no el sitio: es lo que conecta la autoridad del
  // profesional con el contenido, y lo que un motor generativo cita.
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  about: {
    "@type": "MedicalProcedure",
    name: "Carillas de porcelana",
    bodyLocation: "Dientes anteriores y esmalte dental",
    sameAs: "https://es.wikipedia.org/wiki/Carilla_dental",
  },
  inLanguage: "es-AR",
};

export default function CarillasPage() {
  return (
    <>
      <Jsonld data={articleSchema} />
      <Jsonld
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "Carillas de porcelana", path: "/carillas-de-porcelana" },
        ])}
      />
      <Nav actual="/carillas-de-porcelana" />
      <main>
        <Hero
          eyebrow="Criterio clínico"
          titulo="Lo que se puede prometer con carillas, y lo que"
          destacado="no."
          bajada="Hace más de quince años que trabajo casi exclusivamente con carillas y diseño de sonrisa, y una buena parte de ese tiempo la pasé enseñándoselo a otros odontólogos. Esta página no es un folleto: es el criterio con el que decido, incluidas las veces en que la respuesta correcta es no hacer carillas."
        />

        <Seccion eyebrow="Seis criterios" titulo="Cómo decido un caso">
          <div style={{ display: "grid", gap: 32 }}>
            {CRITERIOS.map((c, i) => (
              <div key={c.titulo} style={{ display: "flex", gap: 20, maxWidth: 820 }}>
                <span style={{ fontFamily: serif, fontStyle: "italic", color: "rgba(201,169,110,0.5)", fontSize: 30, lineHeight: 1, flexShrink: 0 }}>
                  0{i + 1}
                </span>
                <div>
                  <h2 style={{ fontSize: 17, fontWeight: 600, color: crema, marginBottom: 8 }}>{c.titulo}</h2>
                  <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>{c.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="En la práctica" titulo="Dónde se hace">
          <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim, maxWidth: 720, marginBottom: 24 }}>
            Atiendo en AM Estética Dental, Camila O&apos;Gorman 412, Puerto Madero, Buenos Aires. La clínica publica sus
            valores de referencia y el detalle de cada tratamiento; si querés ver casos terminados y la inversión que
            implica cada material, está todo ahí.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <CtaWhatsapp mensaje="Hola Dr. Merino, leí su página sobre carillas de porcelana y quiero consultar por mi caso." texto="Consultar mi caso →" />
            <a
              href="https://www.amesteticadental.com/carillas-dentales"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(201,169,110,0.3)", color: oro, padding: "14px 28px", borderRadius: 100, fontSize: 13, textDecoration: "none" }}
            >
              Carillas en AM Estética Dental →
            </a>
            <a
              href="https://www.amesteticadental.com/casos-antes-y-despues"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(201,169,110,0.3)", color: oro, padding: "14px 28px", borderRadius: 100, fontSize: 13, textDecoration: "none" }}
            >
              Casos antes y después →
            </a>
          </div>
          <p style={{ fontSize: 12, color: "rgba(168,159,146,0.7)", marginTop: 24 }}>
            Dr. Ariel Merino · {MATRICULA} · Esta página describe criterios generales y no reemplaza una consulta clínica.
          </p>
        </Seccion>

        <Seccion eyebrow="Seguir leyendo">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              ["Trayectoria y formación", "/trayectoria"],
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
