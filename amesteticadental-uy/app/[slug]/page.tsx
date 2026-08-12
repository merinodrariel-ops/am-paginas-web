import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadForm from "../LeadForm";
import SiteHeader from "../SiteHeader";
import { JsonLd } from "../StructuredData";
import { localFaqs, SITE_URL, treatmentPages, type TreatmentSlug } from "../site-data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return Object.keys(treatmentPages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const page = treatmentPages[slug as TreatmentSlug]; if (!page) return {}; return { title: page.title, description: `${page.intro} Próxima apertura de AM Estética Dental en zona Carrasco, Montevideo.`, alternates: { canonical: `${SITE_URL}/${slug}` } }; }

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params; const page = treatmentPages[slug as TreatmentSlug]; if (!page) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: localFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return <main><JsonLd data={faqSchema} /><SiteHeader /><section className="page-hero shell"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}<br /><em>con una mirada propia.</em></h1><p>{page.intro}</p></section><section className="detail-section"><div className="shell detail-grid"><div><p className="eyebrow">EL ENFOQUE AM</p><h2>Decidir bien<br /><em>antes de avanzar.</em></h2></div><div><p>{page.detail}</p><p>Mientras se prepara la apertura en Uruguay, podés recibir novedades de agenda y conocer el archivo clínico que sostiene este enfoque.</p><Link className="text-link" href="/casos-clinicos">Ver casos clínicos documentados</Link></div></div></section><section className="faq-section shell"><p className="eyebrow">PREGUNTAS FRECUENTES</p>{localFaqs.slice(0, 4).map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section><section className="lead-section"><div className="shell lead-grid"><div><p className="eyebrow">PRÓXIMA APERTURA</p><h2>Noticias de la sede<br /><em>en Carrasco.</em></h2><p>Dejá tus datos para recibir novedades verificadas sobre la apertura y la futura agenda.</p></div><LeadForm /></div></section></main>;
}
