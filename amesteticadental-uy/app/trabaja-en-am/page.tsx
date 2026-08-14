import type { Metadata } from "next";
import JobApplicationForm from "../JobApplicationForm";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, JsonLd } from "../StructuredData";
import { SITE_URL } from "../site-data";

export const metadata: Metadata = {
  title: { absolute: "Trabajá en AM Uruguay — Carrasco, Montevideo" },
  description:
    "Postulate para sumarte al equipo de AM Estética Dental en la nueva sede de Carrasco, Montevideo. Odontología, laboratorio, asistencia y perfiles operativos.",
  alternates: { canonical: `${SITE_URL}/trabaja-en-am` },
  openGraph: {
    title: "Trabajá en AM Estética Dental Uruguay",
    description: "Postulaciones para la sede de Carrasco, Montevideo.",
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
        <p className="eyebrow">EQUIPO URUGUAY · ZONA CARRASCO</p>
        <h1>
          Estamos armando
          <br />
          <em>el equipo desde cero.</em>
        </h1>
        <p>
          La sede de Carrasco abre con gente que todavía no contratamos. Si querés ser parte de la primera formación
          de AM Estética Dental en Uruguay, este es el momento en que se decide quién la integra.
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
            <h2>Qué estamos buscando</h2>
            <p>
              Perfiles que entiendan que el estándar no se negocia. En AM el resultado depende de una cadena completa:
              el diagnóstico, la planificación digital, la ejecución clínica y el laboratorio propio. Cada eslabón
              tiene que sostener el mismo nivel.
            </p>
            <p>
              No hace falta que tengas experiencia en una clínica de estética premium. Sí hace falta criterio, atención
              al detalle y ganas reales de aprender un método que se enseña adentro.
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
          <p className="eyebrow">FORMULARIO DE POSTULACIÓN</p>
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
