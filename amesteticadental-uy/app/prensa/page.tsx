import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, JsonLd } from "../StructuredData";
import { hreflangFor, REVIEW_URL, SITE_URL } from "../site-data";

const notes = [
  { outlet: "Forbes Argentina", year: "2024", title: "Del 1 al 10, ¿qué tan linda es tu sonrisa? La IA te lo dirá en segundos", href: "https://www.forbesargentina.com/innovacion/del-1-10-que-tan-linda-tu-sonrisa-ia-te-lo-dira-segundos-n51306" },
  { outlet: "La Nación", year: "2025", title: "La revolución de la robótica en la odontología ya es una realidad", href: "https://www.lanacion.com.ar/salud/la-revolucion-de-la-robotica-en-la-odontologia-ya-es-una-realidad-nid10032025/" },
  { outlet: "Ámbito", year: "2024", title: "¿Por qué la Argentina es una parada obligada a la hora de rediseñar la sonrisa?", href: "https://www.ambito.com/lifestyle/por-que-la-argentina-es-una-parada-obligada-la-hora-redisenar-la-sonrisa-n6021134" },
  { outlet: "The Dental Review", year: "2026", title: "Cobertura editorial de casos, técnica y tecnología del sector", href: REVIEW_URL },
];

export const metadata: Metadata = {
  title: "Prensa y reconocimientos",
  description: "Cobertura editorial y artículos del Dr. Ariel Merino, director clínico de AM Estética Dental.",
  alternates: {
    canonical: `${SITE_URL}/prensa`,
    languages: hreflangFor("/prensa"),
  },
};

export default function PressPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Prensa", path: "/prensa" }])} />
      <SiteHeader />
      <section className="page-hero shell">
        <p className="eyebrow">PRESENCIA EDITORIAL</p>
        <h1>Una voz clínica<br /><em>en la conversación.</em></h1>
        <p>La futura sede uruguaya se apoya también en una trayectoria editorial verificable del Dr. Ariel Merino como profesional y fuente especializada.</p>
      </section>
      <section className="shell press-list">
        {notes.map((note) => (
          <a href={note.href} key={note.href} data-track="uy_press_click" target="_blank" rel="noreferrer">
            <p>{note.outlet} · {note.year}</p>
            <h2>{note.title}</h2>
            <span>Leer publicación</span>
          </a>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
