import type { Metadata } from "next";
import Link from "next/link";
import { MATRICULA, PENN, PERSON_ID, SITE } from "../site-data";
import { Nav, Hero, Seccion, Footer, CtaWhatsapp, Jsonld, breadcrumb, oro, crema, cremaDim, serif } from "../ui";

export const metadata: Metadata = {
  title: `Instructor del curso “${PENN.curso}” en ${PENN.escuelaCorta}`,
  description: `El Dr. Ariel Merino dicta “${PENN.curso}”, curso de educación continua sobre carillas de porcelana del programa de ${PENN.programa} de la ${PENN.escuela}, en inglés y acreditado con ${PENN.creditos} créditos CE.`,
  alternates: { canonical: `${SITE}${PENN.path}` },
  openGraph: {
    title: `Un curso de carillas para la Universidad de Pensilvania`,
    description: `"${PENN.curso}", del programa de educación continua de ${PENN.escuelaCorta}, dictado por el Dr. Ariel Merino.`,
    url: `${SITE}${PENN.path}`,
    locale: "es_AR",
    type: "article",
  },
};

// `Course` con `instructor` apuntando al @id de la Persona es la forma correcta de
// declarar esto: el sujeto del schema es el curso de Penn, y la persona aparece
// como quien lo dicta. Declararlo al revés —la persona "teniendo" un curso— no
// distingue entre haberlo cursado y haberlo dictado, que es justo la diferencia.
const cursoSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${SITE}${PENN.path}#course`,
  name: PENN.curso,
  url: PENN.url,
  description:
    "Curso de educación continua sobre carillas de porcelana: indicación, preparación mínimamente invasiva, manejo del color y protocolo de cementado.",
  inLanguage: "en",
  courseCode: "38",
  educationalCredentialAwarded: `${PENN.creditos} CE credits`,
  teaches: [
    "Carillas de porcelana",
    "Preparación dental mínimamente invasiva",
    "Selección de color y comunicación con el laboratorio",
    "Protocolo de cementado adhesivo",
  ],
  provider: {
    "@type": "CollegeOrUniversity",
    name: PENN.escuela,
    url: PENN.escuelaUrl,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "University of Pennsylvania",
      url: PENN.universidadUrl,
    },
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    inLanguage: "en",
    instructor: { "@id": PERSON_ID },
  },
};

const paginaSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE}${PENN.path}`,
  name: `Dr. Ariel Merino — instructor en ${PENN.escuelaCorta}`,
  mainEntity: { "@id": PERSON_ID },
  about: { "@id": `${SITE}${PENN.path}#course` },
};

const FICHA = [
  { dato: PENN.curso, etiqueta: "nombre del curso" },
  { dato: PENN.escuelaCorta, etiqueta: PENN.programa },
  { dato: PENN.creditos, etiqueta: "créditos CE acreditados" },
  { dato: PENN.idioma, etiqueta: "idioma en que se dicta" },
];

export default function PennPage() {
  return (
    <>
      <Jsonld data={cursoSchema} />
      <Jsonld data={paginaSchema} />
      <Jsonld
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: PENN.escuelaCorta, path: PENN.path },
        ])}
      />
      <Nav actual={PENN.path} />
      <main>
        <Hero
          eyebrow={`Docencia · ${PENN.escuelaCorta} · ${MATRICULA}`}
          titulo="Enseño carillas en la escuela dental de"
          destacado="la Universidad de Pensilvania."
          bajada={`Me llamaron de Penn para que fuera a enseñar carillas. Di la charla en inglés, frente a unas quinientas personas de la universidad, y hoy figura en su catálogo como el curso “${PENN.curso}”: ${PENN.creditos} créditos de educación continua, los que un odontólogo estadounidense necesita para mantener su matrícula vigente.`}
        />

        <Seccion eyebrow="La ficha">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "rgba(201,169,110,0.14)", border: "1px solid rgba(201,169,110,0.14)", borderRadius: 16, overflow: "hidden" }}>
            {FICHA.map((f) => (
              <div key={f.etiqueta} style={{ background: "#141414", padding: "26px 24px" }}>
                <div style={{ fontFamily: serif, fontSize: 26, fontWeight: 400, color: oro, marginBottom: 8, lineHeight: 1.1 }}>{f.dato}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: cremaDim, lineHeight: 1.6 }}>{f.etiqueta}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: cremaDim, marginTop: 20, maxWidth: 700 }}>
            En el catálogo de Penn el curso figura a nombre de <em style={{ color: crema, fontStyle: "normal" }}>{PENN.instructorEnCatalogo}</em>.{" "}
            <a href={PENN.url} target="_blank" rel="noopener noreferrer" style={{ color: oro, textDecoration: "none", borderBottom: "1px solid rgba(201,169,110,0.4)" }}>
              Se puede verificar en la web de la universidad →
            </a>
          </p>
        </Seccion>

        <Seccion eyebrow="Cómo llegué ahí" titulo="La llamada">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>
              No la busqué. Me contactaron ellos, y me encontró en Buenos Aires, en un día cualquiera de consultorio.
              Una escuela dental de la Ivy League preguntando si podía ir a enseñar carillas. Lo primero que pensé fue
              que había un error.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>
              Terminé dando la charla frente a unas quinientas personas de la universidad. En inglés. Y eso es lo que
              más me costó y lo que más me importa de todo esto: no es lo mismo explicar un protocolo clínico en tu
              idioma, donde podés apoyarte en cómo decís las cosas, que explicarlo en el idioma del otro, delante de
              gente que se formó en ese sistema y que sabe exactamente qué preguntar.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>
              Esa charla es la que después quedó en el catálogo de{" "}
              <a href={PENN.url} target="_blank" rel="noopener noreferrer" style={{ color: oro, textDecoration: "none", borderBottom: "1px solid rgba(201,169,110,0.4)" }}>
                educación continua de Penn
              </a>{" "}
              como curso acreditado: un odontólogo en Estados Unidos puede tomarla hoy y usar sus créditos para renovar
              la matrícula.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: crema, borderLeft: `2px solid ${oro}`, paddingLeft: 22 }}>
              De todo lo que hice en estos años, esto es lo que más lejos queda del lugar donde empecé. Me recibí en La
              Plata. Aprendí a hacer carillas mirando y equivocándome, no en una universidad de la Ivy League. Que
              después esa misma universidad te pida que vengas a enseñar lo que aprendiste así es la clase de cosa que
              uno no se anima a imaginar cuando está empezando.
            </p>
          </div>
        </Seccion>

        <Seccion eyebrow="Qué es un curso CE" titulo="Por qué una universidad presta su nombre">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>
              En Estados Unidos un odontólogo no conserva la matrícula para siempre. Para renovarla tiene que acumular
              créditos de educación continua —continuing education, CE— cursando formación auditada por instituciones
              habilitadas. No es un seminario que uno organiza y publicita: los créditos los otorga la escuela, y para
              otorgarlos revisa quién enseña y qué enseña.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>
              Eso es lo que hace distinta a esta credencial. Una conferencia, por grande que sea el congreso, la define
              quien organiza el evento. Un curso acreditado lo define la escuela: la {PENN.escuela} está poniendo su
              nombre detrás del mío frente a sus propios colegas, que después usan ese curso para recertificarse. Si el
              contenido estuviera flojo, el problema no sería mío. Sería de ellos.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>
              Penn Dental Medicine es, además, una de las escuelas dentales fundacionales de Estados Unidos: forma parte
              de la Universidad de Pensilvania, de la Ivy League. No es el lugar donde uno espera encontrar a un
              odontólogo argentino del lado del docente.
            </p>
          </div>
        </Seccion>

        <Seccion eyebrow="El contenido" titulo={`Qué enseño en "${PENN.curso}"`}>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim, maxWidth: 720, marginBottom: 34 }}>
            &ldquo;Full Veneers&rdquo; es, literalmente, todo sobre carillas. El curso recorre el tratamiento completo,
            que es exactamente lo que hago todos los días en Puerto Madero. No enseño una técnica que leí: enseño la que
            uso.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              {
                t: "Cuándo sí y cuándo no",
                d: "La parte que más se saltea. Una carilla mal indicada es un problema que ninguna cerámica arregla: hay casos que se resuelven con ortodoncia, con blanqueamiento o con nada.",
              },
              {
                t: "Preparación mínimamente invasiva",
                d: "Cuánto esmalte hay que tocar y cuánto no. En la enorme mayoría de los casos hace falta una preparación mínima, y enseñar eso con honestidad es parte del curso.",
              },
              {
                t: "El color",
                d: "Lo que más delata una carilla mal hecha no es la forma: es el color. Cómo se toma, cómo se comunica al ceramista y por qué trabajar con el laboratorio adentro cambia el resultado.",
              },
              {
                t: "Cementado y protocolo adhesivo",
                d: "La etapa donde se gana o se pierde el trabajo de todas las anteriores. Aislación, tratamiento de superficie, control de excesos y ajuste oclusal.",
              },
            ].map((b) => (
              <div key={b.t} style={{ border: "1px solid rgba(201,169,110,0.14)", borderRadius: 16, padding: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: crema, marginBottom: 10 }}>{b.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: cremaDim }}>{b.d}</p>
              </div>
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="Para el paciente internacional" titulo="Enseñar en el sistema del que viene el paciente">
          <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim, maxWidth: 720 }}>
            Una parte creciente de mi consulta llega desde Estados Unidos y Europa. Para ese paciente el dato concreto
            no es que yo viaje a dar charlas: es que el criterio con el que lo voy a atender está acreditado dentro del
            mismo sistema académico en el que se formó su odontólogo de cabecera. No es una charla traducida para
            público extranjero. Es contenido producido en ese idioma y validado por esa universidad.
          </p>
        </Seccion>

        <Seccion eyebrow="Lo que significa de este lado del sillón" titulo="Enseñar obliga a poder explicar por qué">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>
              Escribí en otra página de este sitio que lo que más ordenó mi criterio clínico no fue tratar pacientes,
              sino tener que explicarle a otro odontólogo por qué se hace de una manera y no de otra. Preparar un curso
              para Penn fue la versión más exigente de eso: cada decisión que uno toma por costumbre hay que poder
              defenderla delante de gente que va a hacer preguntas.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim }}>
              Si sos paciente, esto no te cambia el tratamiento. Te cambia con qué criterio se toma la decisión de si
              corresponde hacerlo.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
              <CtaWhatsapp
                mensaje="Hola Dr. Merino, lo contacto desde arielmerino.com para consultar por mi caso."
                texto="Consultar un caso →"
              />
              <a
                href={PENN.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(201,169,110,0.3)", color: oro, padding: "14px 28px", borderRadius: 100, fontSize: 13, textDecoration: "none" }}
              >
                Ver el curso en Penn →
              </a>
            </div>
          </div>
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
