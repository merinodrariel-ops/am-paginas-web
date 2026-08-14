import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LeadForm from "./LeadForm";
import SiteFooter from "./SiteFooter";
import MapaSedes from "./MapaSedes";
import SiteHeader from "./SiteHeader";
import { faqSchema, JsonLd } from "./StructuredData";
import {
  ARGENTINA_URL,
  clinicAssets,
  FEATURED_TREATMENTS,
  hreflangFor,
  localFaqs,
  sharedCases,
  SITE_URL,
  treatmentPages,
  URUGUAY_SMILE_SIMULATOR_URL,
  whatsappFor,
  type TreatmentSlug,
} from "./site-data";

const heroImage = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires";

export const metadata: Metadata = {
  title: { absolute: "AM Estética Dental — Carrasco, Montevideo" },
  description: "AM Estética Dental prepara su sede en Carrasco, Montevideo, con tecnología, laboratorio propio y el método AM: resultados no en meses, en días.",
  alternates: {
    canonical: SITE_URL,
    languages: hreflangFor("/"),
  },
  openGraph: {
    title: "AM Estética Dental — Próximamente en Carrasco, Montevideo",
    description: "La próxima sede de AM Estética Dental en zona Carrasco, Montevideo.",
    url: SITE_URL,
    images: [{ url: heroImage, width: 1200, height: 630, alt: "AM Estética Dental, próxima apertura en Carrasco" }],
  },
};

export default function HomePage() {
  const featured = FEATURED_TREATMENTS.map((slug) => ({ slug, page: treatmentPages[slug as TreatmentSlug] }));

  return (
    <main>
      <JsonLd data={faqSchema(localFaqs)} />
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

      {/* Posicionamiento internacional: el diferencial más fuerte de la marca en
          Uruguay, y no depende de que la sede esté abierta.
          A propósito NO se compara inversión contra otros países — eso atrae al
          paciente que después se va a Turquía por precio. Y a propósito tampoco se
          invita a tratarse en Buenos Aires: el mapa muestra la red, no una ruta. */}
      <section className="international-section">
        <div className="shell international-head">
          <p className="eyebrow">LA ÚNICA CLÍNICA INTERNACIONAL EN URUGUAY</p>
          <h2>No abrimos una sucursal.<br /><em>Trajimos la clínica.</em></h2>
          <p>Carrasco no es una franquicia, una representación ni un consultorio asociado. Es la misma clínica: el mismo equipo, el mismo método y el mismo laboratorio propio que ya opera en Buenos Aires. Ninguna otra clínica de estética dental en Uruguay funciona así.</p>
        </div>
        <div className="shell">
          <MapaSedes destacar="montevideo" />
        </div>
        <div className="shell international-facts">
          <article>
            <strong>3</strong>
            <p>continentes de origen entre los pacientes que ya se tratan con el método AM.</p>
          </article>
          <article>
            <strong>1</strong>
            <p>laboratorio propio: la pieza que permite resolver en días lo que normalmente lleva meses.</p>
          </article>
          <article>
            <strong>0</strong>
            <p>intermediarios entre el diagnóstico y la pieza terminada. El técnico está en la clínica.</p>
          </article>
        </div>
        <p className="shell international-note">
          El trabajo del Dr. Merino tiene cobertura editorial en Forbes Argentina, La Nación y Ámbito.{" "}
          <Link href="/prensa" className="text-link">Ver la cobertura</Link>
        </p>
      </section>

      <section id="clinica" className="clinic-section">
        <div className="shell clinic-grid">
          <div className="clinic-copy">
            <p className="eyebrow">CLÍNICA DENTAL EN CARRASCO</p>
            <h2>Resultados no en meses,<br /><em>en días.</em></h2>
            <p>La sede de Montevideo está pensada para trasladar el espíritu AM a Uruguay: tecnología clínica, planificación digital, laboratorio propio y transformaciones reales para pacientes que no tienen tiempo que perder.</p>
            <p>El foco es simple: concentrar diagnóstico, diseño, comunicación clínica y ejecución en un flujo más ágil, sin resignar naturalidad ni criterio.</p>
            <div className="clinic-points">
              <span>Laboratorio propio</span>
              <span>Flujo digital</span>
              <span>Zona Carrasco</span>
            </div>
            <p style={{ marginTop: 28 }}>
              <Link href="/clinica-dental-carrasco" className="text-link">Conocer el proyecto de Carrasco</Link>
            </p>
          </div>
          <div className="clinic-gallery" aria-label="Imágenes de la futura clínica AM Estética Dental Uruguay">
            {clinicAssets.map((asset, index) => (
              <figure key={asset.src} className={index === 0 ? "featured" : undefined}>
                <Image src={asset.src} alt={asset.alt} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 44vw" : "(max-width: 800px) 50vw, 18vw"} />
                <figcaption><small>{asset.label}</small><strong>{asset.title}</strong></figcaption>
              </figure>
            ))}
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
            <div className="method-cta"><p>Conocé una primera visualización orientativa del diseño de sonrisa antes de solicitar una evaluación clínica.</p><a href={URUGUAY_SMILE_SIMULATOR_URL} data-track="uy_smile_simulator_click" className="button button-gold">Probar simulador con IA</a></div>
          </div>
        </div>
      </section>

      <section className="treatments shell">
        <div className="section-heading">
          <div><p className="eyebrow">PRÓXIMAMENTE EN CARRASCO</p><h2>Estética dental con<br /><em>criterio clínico.</em></h2></div>
          <Link href="/estetica-dental-montevideo" className="text-link">Ver todos los tratamientos</Link>
        </div>
        <div className="treatment-grid">
          {featured.map(({ slug, page }, index) => (
            <Link key={slug} href={`/${slug}`}>
              <span>0{index + 1}</span>
              <h3>{page.title}</h3>
              <p>{page.intro}</p>
              <i>Conocer el enfoque</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="jobs-section">
        <div className="shell jobs-grid">
          <div><p className="eyebrow">EQUIPO URUGUAY</p><h2>Estamos armando<br /><em>la base de talento.</em></h2></div>
          <div><p>Recibimos postulaciones de odontólogos, asistentes, laboratorio dental, arquitectura, edición, marketing y perfiles operativos para la sede de Carrasco.</p><p>Las solicitudes entran al panel central de AM, donde las revisa el equipo interno de selección.</p><Link href="/trabaja-en-am" data-track="uy_jobs_click" className="button button-gold">Postularme</Link></div>
        </div>
      </section>


      <section className="financing-section">
        <div className="shell financing-grid">
          <div><p className="eyebrow">FINANCIACIÓN</p><h2>Tu inversión,<br /><em>ordenada desde el inicio.</em></h2></div>
          <div><p>Simulá el anticipo y las cuotas en USD. Vas a ver también el equivalente en pesos uruguayos con la cotización vendedora de Banco República.</p><Link href="/financiacion" data-track="uy_financing_click" className="button button-gold">Simular cuotas</Link></div>
        </div>
      </section>

      <section className="founder-section">
        <div className="shell founder-grid">
          <div className="founder-portrait"><Image src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg" alt="Dr. Ariel Merino, director clínico de AM Estética Dental" fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
          <div><p className="eyebrow">DIRECCIÓN CLÍNICA</p><h2>Dr. Ariel<br /><em>Merino.</em></h2><p>Odontólogo y director clínico de AM Estética Dental. Su trabajo integra la estética dental, la planificación digital y un enfoque mínimamente invasivo basado en la indicación de cada caso.</p><p>La sede uruguaya lleva esa forma de entender la odontología a Montevideo.</p><Link href="/dr-ariel-merino" className="text-link">Conocer su trayectoria</Link></div>
        </div>
      </section>

      <section className="location-section">
        <div className="shell location-grid"><div><p className="eyebrow">LA FUTURA SEDE</p><h2>Miraflores 1445,<br /><em>zona Carrasco.</em></h2></div><div><p>Estamos preparando la nueva sede de AM Estética Dental en una de las zonas más exclusivas de Montevideo.</p><p>Publicaremos avances reales del proyecto, imágenes del espacio y la fecha de apertura apenas estén confirmados.</p><a href={whatsappFor("la futura sede de Carrasco")} data-track="uy_location_whatsapp_click" target="_blank" rel="noreferrer" className="text-link">Hablar con el equipo</a></div></div>
      </section>

      <section className="faq-section shell">
        <p className="eyebrow">PREGUNTAS FRECUENTES</p>
        {localFaqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <section id="novedades" className="lead-section"><div className="shell lead-grid"><div><p className="eyebrow">LISTA DE NOVEDADES</p><h2>Conocé la apertura<br /><em>antes que nadie.</em></h2><p>Te contactaremos sólo con información concreta sobre la sede, la agenda y los próximos avances.</p></div><LeadForm /></div></section>

      <SiteFooter />
    </main>
  );
}
