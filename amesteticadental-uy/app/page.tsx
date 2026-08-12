import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "./LeadForm";
import SiteHeader from "./SiteHeader";
import { ARGENTINA_URL, sharedCases, treatmentPages, WHATSAPP_URL } from "./site-data";

const heroImage = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires";

export const metadata: Metadata = {
  title: "AM Estética Dental en Carrasco, Montevideo",
  description: "AM Estética Dental prepara su próxima sede en zona Carrasco, Montevideo. Conocé el método AM, su portfolio clínico y las novedades de apertura.",
  alternates: { canonical: "https://www.amesteticadental.uy" },
  openGraph: {
    title: "AM Estética Dental — Próximamente en Carrasco, Montevideo",
    description: "La próxima sede de AM Estética Dental en zona Carrasco, Montevideo.",
    url: "https://www.amesteticadental.uy",
    images: [{ url: heroImage, width: 1200, height: 630, alt: "AM Estética Dental, próxima apertura en Carrasco" }],
  },
};

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <Image src={heroImage} alt="Transformación de sonrisa con el método AM Estética Dental" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow">PRÓXIMA APERTURA · ZONA CARRASCO</p>
          <h1>Una nueva forma de<br /><em>mirar tu sonrisa.</em></h1>
          <p className="hero-lead">AM Estética Dental prepara su sede en Montevideo con el método, el criterio clínico y la atención al detalle que distinguen a la marca.</p>
          <div className="hero-actions">
            <a href="#novedades" data-track="uy_waitlist_cta_click" className="button button-gold">Recibir novedades</a>
            <Link href="/casos-clinicos" data-track="uy_cases_archive_click" className="button button-quiet">Ver casos clínicos</Link>
          </div>
          <p className="address-line">Miraflores 1445 · Oficina 202 · Carrasco, Montevideo</p>
        </div>
      </section>

      <section className="intro-band">
        <div className="shell split-intro">
          <p className="eyebrow">AM ESTÉTICA DENTAL EN URUGUAY</p>
          <div>
            <h2>El estándar ya existe.<br /><em>La sede está por abrir.</em></h2>
            <p>La futura sede de zona Carrasco no parte de una promesa vacía. Parte de años de práctica clínica, planificación digital y transformaciones reales realizadas con el método AM.</p>
            <p>Este portfolio muestra cómo pensamos, cómo planificamos y el nivel de resultado que queremos llevar a Montevideo.</p>
          </div>
        </div>
      </section>

      <section className="cases-section shell">
        <div className="section-heading">
          <div><p className="eyebrow">PORTFOLIO CLÍNICO AM</p><h2>Resultados que hablan<br /><em>por el método.</em></h2></div>
          <Link href="/casos-clinicos" className="text-link">Explorar archivo clínico</Link>
        </div>
        <div className="case-grid">
          {sharedCases.slice(0, 3).map((caseItem) => (
            <a className="case-card" data-track="uy_case_to_ar_click" key={caseItem.slug} href={`${ARGENTINA_URL}/casos/${caseItem.slug}`} target="_blank" rel="noreferrer">
              <Image src={caseItem.image} alt={`${caseItem.title}. Transformación realizada con el método AM.`} fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span className="case-overlay" />
              <span className="case-copy"><small>{caseItem.treatment}</small><strong>{caseItem.title}</strong><i>Ver documentación completa</i></span>
            </a>
          ))}
        </div>
        <p className="disclosure">Cada transformación refleja el método AM: diagnóstico, planificación digital, precisión clínica y un resultado diseñado para integrarse naturalmente a cada persona.</p>
      </section>

      <section className="method-section">
        <div className="shell method-grid">
          <div><p className="eyebrow">UNA FORMA DE TRABAJAR</p><h2>Natural no es<br /><em>un filtro.</em></h2></div>
          <div className="method-list">
            <article><span>01</span><div><h3>Diagnóstico antes que tendencia</h3><p>La estética empieza por entender la sonrisa, el rostro, la mordida y los objetivos de cada persona.</p></div></article>
            <article><span>02</span><div><h3>Planificación visible</h3><p>El diseño digital permite conversar las decisiones antes de iniciar un tratamiento.</p></div></article>
            <article><span>03</span><div><h3>Detalles que sostienen el resultado</h3><p>Materiales, textura, proporción y función se consideran en conjunto, no por separado.</p></div></article>
          </div>
        </div>
      </section>

      <section className="treatments shell">
        <div className="section-heading"><div><p className="eyebrow">PRÓXIMAMENTE EN CARRASCO</p><h2>Estética dental con<br /><em>criterio clínico.</em></h2></div></div>
        <div className="treatment-grid">
          {Object.entries(treatmentPages).map(([slug, page]) => <Link key={slug} href={`/${slug}`}><span>0{Object.keys(treatmentPages).indexOf(slug) + 1}</span><h3>{page.title}</h3><p>{page.intro}</p><i>Conocer el enfoque</i></Link>)}
        </div>
      </section>

      <section className="founder-section">
        <div className="shell founder-grid">
          <div className="founder-portrait"><Image src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg" alt="Dr. Ariel Merino, director clínico de AM Estética Dental" fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
          <div><p className="eyebrow">DIRECCIÓN CLÍNICA</p><h2>Dr. Ariel<br /><em>Merino.</em></h2><p>Odontólogo y director clínico de AM Estética Dental. Su trabajo integra la estética dental, la planificación digital y un enfoque mínimamente invasivo basado en la indicación de cada caso.</p><p>La sede uruguaya lleva esa forma de entender la odontología a Montevideo.</p><Link href="/dr-ariel-merino" className="text-link">Conocer su trayectoria</Link></div>
        </div>
      </section>

      <section className="location-section">
        <div className="shell location-grid"><div><p className="eyebrow">LA FUTURA SEDE</p><h2>Miraflores 1445,<br /><em>zona Carrasco.</em></h2></div><div><p>Estamos preparando la nueva sede de AM Estética Dental en una de las zonas más exclusivas de Montevideo.</p><p>Publicaremos avances reales del proyecto, imágenes del espacio y la fecha de apertura apenas estén confirmados.</p><a href={WHATSAPP_URL} data-track="uy_location_whatsapp_click" target="_blank" rel="noreferrer" className="text-link">Hablar con el equipo</a></div></div>
      </section>

      <section id="novedades" className="lead-section"><div className="shell lead-grid"><div><p className="eyebrow">LISTA DE NOVEDADES</p><h2>Conocé la apertura<br /><em>antes que nadie.</em></h2><p>Te contactaremos sólo con información concreta sobre la sede, la agenda y los próximos avances.</p></div><LeadForm /></div></section>

      <footer className="site-footer shell"><div className="brand"><span>AM</span><small>ESTÉTICA DENTAL · URUGUAY</small></div><p>Miraflores 1445 · Oficina 202 · Montevideo</p><a href={ARGENTINA_URL} target="_blank" rel="noreferrer">Conocé AM Estética Dental</a></footer>
    </main>
  );
}
