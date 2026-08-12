import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadForm from "../LeadForm";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, faqSchema, JsonLd, serviceSchema } from "../StructuredData";
import {
  ARGENTINA_URL,
  hreflangFor,
  SITE_URL,
  treatmentPages,
  whatsappFor,
  type TreatmentSlug,
} from "../site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(treatmentPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = treatmentPages[slug as TreatmentSlug];
  if (!page) return {};
  return {
    // `absolute` evita el template del layout: el metaTitle ya trae la marca y
    // encadenarlos dejaba títulos de 80-90 caracteres con la marca repetida.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${slug}`,
      languages: hreflangFor(`/${slug}`),
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/${slug}`,
      type: "article",
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const page = treatmentPages[slug as TreatmentSlug];
  if (!page) notFound();

  const related = page.related
    .map((relatedSlug) => ({ slug: relatedSlug, page: treatmentPages[relatedSlug as TreatmentSlug] }))
    .filter((item) => Boolean(item.page));

  return (
    <main>
      <JsonLd data={faqSchema(page.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: page.title, path: `/${slug}` }])} />
      <JsonLd data={serviceSchema({ name: page.title, description: page.metaDescription, path: `/${slug}` })} />
      <SiteHeader />

      <section className="page-hero shell">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.lead}</p>
        <div className="hero-actions">
          <a href={whatsappFor(page.whatsappContext)} data-track="uy_treatment_whatsapp_click" target="_blank" rel="noreferrer" className="button button-gold">
            Consultar por WhatsApp
          </a>
          <Link href="/casos-clinicos" className="button button-quiet">
            Ver casos reales
          </Link>
        </div>
      </section>

      {page.bullets ? (
        <section className="shell fact-strip">
          {page.bullets.map((bullet) => (
            <div key={bullet.label}>
              <small>{bullet.label}</small>
              <p>{bullet.text}</p>
            </div>
          ))}
        </section>
      ) : null}

      <section className="detail-section">
        <div className="shell prose-stack">
          {page.sections.map((section) => (
            <article key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {page.investment ? (
        <section className="investment-section">
          <div className="shell">
            <p className="eyebrow">LA INVERSIÓN, EN DÓLARES</p>
            <h2>
              Rangos reales,
              <br />
              <em>no cifras de vidriera.</em>
            </h2>
            <div className="investment-grid">
              {page.investment.map((item) => (
                <div key={item.label}>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                  <p>{item.note}</p>
                </div>
              ))}
            </div>
            <p className="disclosure">
              Los valores son orientativos y sirven para dimensionar la inversión. El alcance definitivo de cada
              tratamiento surge de una evaluación clínica individual.{" "}
              <Link href="/financiacion" className="text-link">
                Simular anticipo y cuotas
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      <section className="faq-section shell">
        <p className="eyebrow">PREGUNTAS FRECUENTES</p>
        {page.faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      {related.length > 0 ? (
        <section className="shell related-section">
          <p className="eyebrow">SEGUIR LEYENDO</p>
          <div className="related-grid">
            {related.map(({ slug: relatedSlug, page: relatedPage }) => (
              <Link key={relatedSlug} href={`/${relatedSlug}`}>
                <h3>{relatedPage.title}</h3>
                <p>{relatedPage.intro}</p>
                <i>Conocer el enfoque</i>
              </Link>
            ))}
          </div>
          {page.arCounterpart ? (
            <p className="disclosure">
              <a href={`${ARGENTINA_URL}${page.arCounterpart}`} data-track="uy_to_ar_deep_click" target="_blank" rel="noreferrer" className="text-link">
                {page.arLabel}
              </a>
            </p>
          ) : null}
        </section>
      ) : null}

      <section className="lead-section">
        <div className="shell lead-grid">
          <div>
            <p className="eyebrow">PRÓXIMA APERTURA</p>
            <h2>
              Noticias de la sede
              <br />
              <em>en Carrasco.</em>
            </h2>
            <p>Dejá tus datos para recibir novedades verificadas sobre la apertura y la futura agenda.</p>
          </div>
          <LeadForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
