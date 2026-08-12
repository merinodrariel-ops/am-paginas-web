import type { Metadata } from "next";
import Link from "next/link";
import FinancingCalculator from "../FinancingCalculator";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { breadcrumbSchema, JsonLd } from "../StructuredData";
import { SITE_URL } from "../site-data";

export const metadata: Metadata = {
  title: "Financiación de estética dental en Montevideo",
  description: "Simulá anticipo y cuotas para tu tratamiento en AM Estética Dental Uruguay. Valores en USD y equivalente en pesos uruguayos según cotización BROU.",
  alternates: { canonical: `${SITE_URL}/financiacion` },
};

export default function FinancingPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Financiación", path: "/financiacion" }])} />
      <SiteHeader />
      <section className="finance-page shell">
        <div className="finance-page-intro">
          <p className="eyebrow">FINANCIACIÓN EN URUGUAY</p>
          <h1>Planificá tu inversión<br /><em>con claridad.</em></h1>
          <p>Ingresá el valor de tu propuesta, elegí el anticipo y compará cuotas fijas. La inversión se expresa en dólares y el simulador muestra el equivalente actualizado en pesos uruguayos.</p>
          <p style={{ marginTop: 16 }}>
            <Link href="/precio-carillas-dentales-montevideo" className="text-link">Ver los rangos de inversión por tratamiento</Link>
          </p>
        </div>
        <FinancingCalculator />
      </section>
      <SiteFooter />
    </main>
  );
}
