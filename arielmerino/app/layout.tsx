import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300","400"], style: ["normal","italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arielmerino.com"),
  title: { default: "Dr. Ariel Merino — Odontólogo Estético", template: "%s | Dr. Ariel Merino" },
  description: "Dr. Ariel Merino, odontólogo especialista en estética dental. Director de AM Estética Dental, Puerto Madero, Buenos Aires. Carillas de porcelana, diseño de sonrisa y rehabilitación oral.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Dr. Ariel Merino",
    locale: "es_AR",
    type: "profile",
    images: [{
      url: "https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_630,c_fill,g_face,q_auto,f_auto/equipo/dr-ariel-merino-director-clinico-am-estetica-dental-puerto-madero",
      width: 1200,
      height: 630,
      alt: "Dr. Ariel Merino, odontólogo estético en Puerto Madero",
    }],
  },
  twitter: { card: "summary_large_image", creator: "@drarielmerino" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} ${cormorant.variable}`}>
      <body style={{ background: "var(--carbon)", color: "var(--crema)", fontFamily: "var(--font-manrope, sans-serif)" }}>
        {children}
        <Script
          id="plausible-script"
          strategy="afterInteractive"
          src="https://plausible.io/js/script.js"
          data-domain="arielmerino.com"
        />
      </body>
    </html>
  );
}
