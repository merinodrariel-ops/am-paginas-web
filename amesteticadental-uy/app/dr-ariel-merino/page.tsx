import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, JsonLd } from "../StructuredData";
import { ARGENTINA_URL, hreflangFor, PERSON_URL, REVIEW_URL, SITE_URL } from "../site-data";

export const metadata: Metadata = {
  title: "Dr. Ariel Merino",
  description: "Conocé al director clínico de AM Estética Dental y el enfoque que prepara su llegada a Carrasco, Montevideo.",
  alternates: {
    canonical: `${SITE_URL}/dr-ariel-merino`,
    languages: hreflangFor("/dr-ariel-merino"),
  },
};

export default function DoctorPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Dr. Ariel Merino", path: "/dr-ariel-merino" }])} />
      <SiteHeader />
      <section className="doctor-page shell">
        <div>
          <p className="eyebrow">DIRECCIÓN CLÍNICA</p>
          <h1>Dr. Ariel<br /><em>Merino.</em></h1>
          <p>Odontólogo, director clínico de AM Estética Dental y referente de una odontología estética que busca resultados naturales, bien indicados y sostenidos en planificación.</p>
          <p>Su trabajo junto al equipo AM consolidó un sistema clínico que ahora se proyecta en la futura sede de Carrasco: diagnóstico primero, planificación digital conversada con el paciente y laboratorio propio para que la ejecución no se estire durante meses.</p>
          <p>Su voz aparece con regularidad en cobertura editorial sobre estética dental, inteligencia artificial aplicada al diseño de sonrisa y tecnología clínica.</p>
          <p className="doctor-links">
            <a href={`${ARGENTINA_URL}/dr-ariel-merino`} target="_blank" rel="noreferrer" className="text-link">Trayectoria completa</a>
            <a href={PERSON_URL} data-track="uy_person_site_click" target="_blank" rel="noreferrer" className="text-link">arielmerino.com</a>
            <a href={REVIEW_URL} data-track="uy_tdr_click" target="_blank" rel="noreferrer" className="text-link">The Dental Review</a>
            <Link href="/prensa" className="text-link">Prensa</Link>
          </p>
        </div>
        <div className="doctor-image">
          <Image src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg" alt="Dr. Ariel Merino" fill sizes="(max-width: 800px) 100vw, 45vw" />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
