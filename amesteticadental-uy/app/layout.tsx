import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300","400"], style: ["normal","italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com.uy"),
  title: { default: "AM Estética Dental Uruguay — Carillas y Diseño de Sonrisa", template: "%s | AM Estética Dental Uruguay" },
  description: "Especialistas en carillas de porcelana y diseño de sonrisa para pacientes uruguayos. Dr. Ariel Merino, AM Estética Dental. Atención en Buenos Aires, Argentina.",
  openGraph: { siteName: "AM Estética Dental Uruguay", locale: "es_UY" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${cormorant.variable}`}>
      <body style={{ background: "var(--carbon, #141414)", color: "var(--crema, #F5F0E8)", fontFamily: "var(--font-manrope, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
