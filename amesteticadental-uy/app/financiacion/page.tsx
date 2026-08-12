import type { Metadata } from "next";
import FinancingCalculator from "../FinancingCalculator";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Financiación de estética dental en Montevideo",
  description: "Simulá anticipo y cuotas para tu tratamiento en AM Estética Dental Uruguay. Valores en USD y equivalente en pesos uruguayos según cotización BROU.",
  alternates: { canonical: "https://www.amesteticadental.uy/financiacion" },
};

export default function FinancingPage() {
  return <main><SiteHeader /><section className="finance-page shell"><div className="finance-page-intro"><p className="eyebrow">FINANCIACIÓN EN URUGUAY</p><h1>Planificá tu inversión<br /><em>con claridad.</em></h1><p>Ingresá el valor de tu propuesta, elegí el anticipo y compará cuotas fijas. La inversión se expresa en dólares y el simulador muestra el equivalente actualizado en pesos uruguayos.</p></div><FinancingCalculator /></section></main>;
}
