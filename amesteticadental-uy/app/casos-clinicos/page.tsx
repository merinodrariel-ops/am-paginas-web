import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../SiteHeader";
import { ARGENTINA_URL, sharedCases, SITE_URL } from "../site-data";

export const metadata: Metadata = { title: "Portfolio clínico", description: "Transformaciones reales realizadas con el método AM Estética Dental. Conocé el estándar que llega a Carrasco, Montevideo.", alternates: { canonical: `${SITE_URL}/casos-clinicos` } };

export default function CasesPage() { return <main><SiteHeader /><section className="page-hero shell"><p className="eyebrow">PORTFOLIO CLÍNICO AM</p><h1>Transformaciones reales.<br /><em>Un método replicable.</em></h1><p>Este portfolio expresa el estándar AM: diagnóstico, diseño digital, precisión clínica y resultados naturales. El mismo sistema que llega a zona Carrasco.</p></section><section className="shell archive-grid">{sharedCases.map((caseItem, index) => <a className="archive-card" href={`${ARGENTINA_URL}/casos/${caseItem.slug}`} key={caseItem.slug} target="_blank" rel="noreferrer"><div><Image src={caseItem.image} alt={`${caseItem.title}. Transformación realizada con el método AM.`} fill priority={index === 0} sizes="(max-width: 700px) 100vw, 50vw" /></div><small>{caseItem.treatment}</small><h2>{caseItem.title}</h2><span>Explorar transformación</span></a>)}</section></main>; }
