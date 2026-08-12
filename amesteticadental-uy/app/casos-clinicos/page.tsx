import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, JsonLd } from "../StructuredData";
import { ARGENTINA_URL, hreflangFor, sharedCases, SITE_URL } from "../site-data";

export const metadata: Metadata = {
  title: "Portfolio clínico",
  description: "Transformaciones reales realizadas con el método AM Estética Dental. Conocé el estándar que llega a Carrasco, Montevideo.",
  alternates: {
    canonical: `${SITE_URL}/casos-clinicos`,
    languages: hreflangFor("/casos-clinicos"),
  },
};

export default function CasesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Portfolio clínico", path: "/casos-clinicos" }])} />
      <SiteHeader />
      <section className="page-hero shell">
        <p className="eyebrow">PORTFOLIO CLÍNICO AM</p>
        <h1>Transformaciones reales.<br /><em>Un método replicable.</em></h1>
        <p>Este portfolio expresa el estándar AM: diagnóstico, diseño digital, precisión clínica y resultados naturales. El mismo sistema que llega a zona Carrasco. Cada caso está documentado en detalle en el sitio de la sede argentina.</p>
      </section>
      <section className="shell archive-grid">
        {sharedCases.map((caseItem, index) => (
          <a className="archive-card" href={`${ARGENTINA_URL}/casos/${caseItem.slug}`} key={caseItem.slug} target="_blank" rel="noreferrer">
            <div>
              <Image src={caseItem.image} alt={`${caseItem.title}. Transformación realizada con el método AM.`} fill priority={index === 0} sizes="(max-width: 700px) 100vw, 50vw" />
            </div>
            <small>{caseItem.treatment}</small>
            <h2>{caseItem.title}</h2>
            <span>Explorar transformación</span>
          </a>
        ))}
      </section>
      <section className="shell related-section">
        <p className="eyebrow">EL MÉTODO DETRÁS DE ESTOS CASOS</p>
        <div className="related-grid">
          <Link href="/diseno-de-sonrisa-montevideo"><h3>Diseño de sonrisa</h3><p>Cómo se decide qué tratamiento corresponde antes de elegir un material.</p><i>Conocer el enfoque</i></Link>
          <Link href="/carillas-dentales-montevideo"><h3>Carillas dentales</h3><p>Qué resuelve una carilla bien indicada y por qué el laboratorio propio cambia los tiempos.</p><i>Conocer el enfoque</i></Link>
          <Link href="/precio-carillas-dentales-montevideo"><h3>La inversión</h3><p>Rangos reales en dólares y una explicación honesta de qué hace variar cada número.</p><i>Conocer el enfoque</i></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
