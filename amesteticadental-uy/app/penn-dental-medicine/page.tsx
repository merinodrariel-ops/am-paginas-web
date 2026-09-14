import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, JsonLd } from "../StructuredData";
import { hreflangFor, PERSON_ID, PERSON_URL, SITE_URL, whatsappFor } from "../site-data";

const PENN_URL = "https://cde.dental.upenn.edu/Course/38-Full-Veneers";
const PATH = "/penn-dental-medicine";

export const metadata: Metadata = {
  title: "Docencia internacional · Penn Dental Medicine",
  description:
    "El Dr. Ariel Merino, director clínico de AM Estética Dental, es instructor del curso \"Full Veneers\" en el programa de educación continua de la University of Pennsylvania School of Dental Medicine. El criterio clínico que llega a Carrasco.",
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
    languages: hreflangFor(PATH),
  },
};

// El curso comparte @id con el de arielmerino.com: las tres páginas de la red que
// hablan de esta credencial describen el MISMO objeto, no tres cursos distintos.
const cursoSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${PERSON_URL}/penn-dental-medicine#course`,
  name: "Full Veneers",
  url: PENN_URL,
  description:
    "Curso de educación continua sobre carillas de porcelana del programa de Continuing Dental Education de Penn Dental Medicine.",
  inLanguage: "en",
  educationalCredentialAwarded: "1.5 CE credits",
  provider: {
    "@type": "CollegeOrUniversity",
    name: "University of Pennsylvania School of Dental Medicine",
    url: "https://www.dental.upenn.edu/",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "University of Pennsylvania",
      url: "https://www.upenn.edu/",
    },
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    inLanguage: "en",
    instructor: { "@id": PERSON_ID },
  },
};

const FICHA = [
  { small: "Curso", p: "Full Veneers — carillas de porcelana, tratamiento completo" },
  { small: "Institución", p: "University of Pennsylvania School of Dental Medicine" },
  { small: "Acreditación", p: "1.5 créditos de educación continua (CE)" },
  { small: "Idioma", p: "Se dicta íntegramente en inglés" },
];

export default function PennPage() {
  return (
    <main>
      <JsonLd data={cursoSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "Penn Dental Medicine", path: PATH }])} />
      <SiteHeader />

      <section className="page-hero shell">
        <p className="eyebrow">DOCENCIA INTERNACIONAL</p>
        <h1>
          La dirección clínica que llega a Carrasco
          <br />
          <em>enseña en la Universidad de Pensilvania.</em>
        </h1>
        <p>
          El Dr. Ariel Merino, director clínico de AM Estética Dental, es el instructor del curso &ldquo;Full
          Veneers&rdquo; en el programa de educación continua de Penn Dental Medicine, la escuela dental de la
          Universidad de Pensilvania.
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
            <p className="eyebrow">QUÉ ES UN CURSO ACREDITADO</p>
            <h2>Por qué una escuela dental presta su nombre</h2>
            <p>
              En los Estados Unidos un odontólogo no conserva su matrícula de forma indefinida: para renovarla necesita
              acumular créditos de educación continua —<em>continuing education</em>, CE— cursando formación auditada
              por instituciones habilitadas para otorgarlos.
            </p>
            <p>
              Ahí está la diferencia con una conferencia. Una charla en un congreso la organiza quien la propone. Un
              curso acreditado lo avala la escuela: Penn revisa quién enseña y qué enseña antes de poner su nombre
              detrás, porque son sus propios colegas los que van a usar ese curso para recertificarse.
            </p>
            <p>
              El contacto lo inició la universidad: Penn buscaba a alguien que enseñara carillas de porcelana y llegó al
              Dr. Merino en Buenos Aires. La conferencia se dictó en inglés ante alrededor de quinientas personas de la
              universidad, y esa misma clase quedó después incorporada al catálogo de educación continua como curso
              acreditado. En la ficha, que es pública, figura a nombre de Ariel Merino, DDS.
            </p>
          </div>

          <div>
            <p className="eyebrow">QUÉ SIGNIFICA PARA URUGUAY</p>
            <h2>El mismo criterio clínico, en Montevideo</h2>
            <p>
              La sede de Carrasco no abre con un protocolo nuevo. Abre con el que ya funciona en Puerto Madero: el mismo
              sistema de diagnóstico, la misma planificación digital conversada con el paciente y el mismo laboratorio
              propio que permite que la ejecución no se estire durante meses.
            </p>
            <p>
              Ese protocolo es, literalmente, el contenido que Penn acredita. Lo que un paciente uruguayo va a recibir
              en Miraflores 1445 no es una versión adaptada de la clínica argentina: es el mismo criterio que se enseña
              a odontólogos estadounidenses para que puedan mantener su matrícula vigente.
            </p>
            <p>
              Es también parte de por qué AM opera con estructura clínica propia en dos países. La dirección clínica es
              una sola, y su trayectoria es verificable fuera de la región.
            </p>
          </div>

          <div>
            <p className="eyebrow">QUÉ CUBRE EL CURSO</p>
            <h2>Carillas, de la indicación al cementado</h2>
            <p>
              <strong>Indicación.</strong> Cuándo una carilla es la solución correcta y cuándo no lo es. Hay casos que
              se resuelven con ortodoncia, con blanqueamiento o sin tratamiento alguno.
            </p>
            <p>
              <strong>Preparación mínimamente invasiva.</strong> Cuánto esmalte se prepara y cuánto no. En la gran
              mayoría de los casos hace falta una preparación mínima, incluso en las técnicas más finas.
            </p>
            <p>
              <strong>Color y laboratorio.</strong> Lo que delata una carilla mal resuelta no suele ser la forma sino el
              color: cómo se registra y cómo se le transmite al ceramista.
            </p>
            <p>
              <strong>Cementado adhesivo.</strong> La etapa donde se conserva o se pierde el trabajo de todas las
              anteriores.
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
          <Link href="/carillas-dentales-montevideo">
            <h3>Carillas en Montevideo</h3>
            <p>Cómo se planifica y se ejecuta un tratamiento de carillas de porcelana en AM.</p>
            <i>Ver tratamiento</i>
          </Link>
          <a href={PENN_URL} data-track="uy_penn_course_click" target="_blank" rel="noreferrer">
            <h3>La ficha del curso</h3>
            <p>Catálogo de educación continua de Penn Dental Medicine. Verificable en el sitio de la universidad.</p>
            <i>Abrir en Penn</i>
          </a>
        </div>
        <p className="disclosure">
          <a className="text-link" href={whatsappFor("un tratamiento de carillas")} data-track="uy_penn_whatsapp_click" target="_blank" rel="noreferrer">
            Hablar con el equipo
          </a>
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
