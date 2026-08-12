import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../SiteHeader";
import { ARGENTINA_URL, sharedCases, SITE_URL } from "../site-data";

export const metadata: Metadata = { title: "Casos clínicos documentados", description: "Archivo de casos clínicos reales documentados por AM Estética Dental en Buenos Aires, presentado como antecedente de la próxima sede en Carrasco.", alternates: { canonical: `${SITE_URL}/casos-clinicos` } };

export default function CasesPage() { return <main><SiteHeader /><section className="page-hero shell"><p className="eyebrow">ARCHIVO CLÍNICO AM</p><h1>Resultados reales.<br /><em>Origen claro.</em></h1><p>Estos casos fueron realizados y documentados por AM Estética Dental en Buenos Aires. Los compartimos para mostrar el trabajo que respalda la próxima sede de zona Carrasco.</p></section><section className="shell archive-grid">{sharedCases.map((caseItem, index) => <a className="archive-card" href={`${ARGENTINA_URL}/casos/${caseItem.slug}`} key={caseItem.slug} target="_blank" rel="noreferrer"><div><Image src={caseItem.image} alt={`${caseItem.title}. Caso realizado en Buenos Aires.`} fill priority={index === 0} sizes="(max-width: 700px) 100vw, 50vw" /></div><small>{caseItem.treatment}</small><h2>{caseItem.title}</h2><span>Ver caso completo en AM Buenos Aires</span></a>)}</section></main>; }
