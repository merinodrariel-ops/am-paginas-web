import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300","400"], style: ["normal","italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arielmerino.com"),
  title: { default: "Dr. Ariel Merino — Odontólogo Estético", template: "%s | Dr. Ariel Merino" },
  description: "Dr. Ariel Merino, odontólogo especialista en estética dental. Director de AM Estética Dental, Puerto Madero, Buenos Aires. Carillas de porcelana, diseño de sonrisa y rehabilitación oral.",
  openGraph: { siteName: "Dr. Ariel Merino", locale: "es_AR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${cormorant.variable}`}>
      <body style={{ background: "var(--carbon)", color: "var(--crema)", fontFamily: "var(--font-manrope, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
