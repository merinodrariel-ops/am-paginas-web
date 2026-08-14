import type { Metadata } from "next";
import JobApplicationForm from "../JobApplicationForm";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, JsonLd } from "../StructuredData";
import { SITE_URL } from "../site-data";

export const metadata: Metadata = {
  title: { absolute: "Sé parte del staff de AM Uruguay — Carrasco, Montevideo" },
  description:
    "Sumate al equipo que abre la primera clínica internacional de estética dental en Uruguay. Odontología, laboratorio propio, asistencia y perfiles operativos en Carrasco.",
  alternates: { canonical: `${SITE_URL}/trabaja-en-am` },
  openGraph: {
    title: "Sé parte del staff de AM Estética Dental Uruguay",
    description: "El equipo que abre la sede de Carrasco se está eligiendo ahora.",
    url: `${SITE_URL}/trabaja-en-am`,
    type: "website",
  },
};

const AREAS_DESTACADAS = [
  { label: "Clínica", text: "Odontología general y estética, cirugía de implantes, ortodoncia y rehabilitación." },
  { label: "Laboratorio", text: "Fresado, diseño digital y maquillaje cerámico. Es el corazón del método AM." },
  { label: "Asistencia", text: "Asistentes dentales y recepción, con foco en la experiencia del paciente." },
  { label: "Operaciones", text: "Administración, logística, marketing, edición y perfiles de gestión." },
];

export default function UruguayJobsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Trabajá en AM Uruguay", path: "/trabaja-en-am" }])} />
      <SiteHeader />

      <section className="page-hero shell">
        <p className="eyebrow">SÉ PARTE DEL STAFF DE AM URUGUAY</p>
        <h1>
          ¿Te gustaría formar parte
          <br />
          <em>de lo que viene?</em>
        </h1>
        <p>
          En Uruguay todavía no existe una clínica de estética dental que trabaje así: con laboratorio propio,
          planificación digital y un método que ya transformó sonrisas de tres continentes. La estamos por abrir en
          Carrasco, y el equipo que la va a hacer funcionar se está eligiendo ahora.
        </p>
        <p>
          No buscamos currículums perfectos. Buscamos gente que quiera trabajar con un estándar alto y aprender un
          método que se enseña adentro. Si sos esa persona, dejanos tus datos: cinco minutos, y quedás en la lista de
          los primeros.
        </p>
      </section>

      <section className="shell fact-strip">
        {AREAS_DESTACADAS.map((area) => (
          <div key={area.label}>
            <small>{area.label}</small>
            <p>{area.text}</p>
          </div>
        ))}
      </section>

      <section className="detail-section">
        <div className="shell prose-stack">
          <article>
            <h2>Por qué vale la pena</h2>
            <p>
              Entrar a una clínica que ya funciona es ocupar un lugar que alguien diseñó antes que vos. Acá es al
              revés: los procesos, el equipo y la forma de trabajar de AM Uruguay se están definiendo, y quien llegue
              primero los va a ayudar a escribir.
            </p>
            <p>
              Vas a trabajar con laboratorio propio —el técnico en la misma clínica, no un proveedor externo—,
              planificación digital y un método probado que se enseña adentro. Es el tipo de lugar donde en un año
              sabés bastante más que cuando entraste.
            </p>
          </article>
          <article>
            <h2>Qué buscamos</h2>
            <p>
              Criterio, atención al detalle y ganas reales de aprender. No hace falta que vengas de una clínica de
              estética premium: el método se enseña. Lo que no se enseña es querer hacer las cosas bien.
            </p>
          </article>
          <article>
            <h2>Cómo sigue</h2>
            <p>
              Las postulaciones entran al panel central de AM, donde las revisa el equipo interno de selección. Si tu
              perfil coincide con una búsqueda activa para Carrasco, te contactamos.
            </p>
            <p>
              Como la sede todavía está en preparación, los tiempos de respuesta dependen del avance de la obra y de
              la apertura de cada búsqueda. Tu postulación queda guardada mientras tanto.
            </p>
          </article>
        </div>
      </section>

      <section className="jobs-form-section">
        <div className="shell">
          <p className="eyebrow">CINCO MINUTOS Y QUEDÁS ADENTRO</p>
          <h2>
            Contanos quién sos
            <br />
            <em>y qué sabés hacer.</em>
          </h2>
          <JobApplicationForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
