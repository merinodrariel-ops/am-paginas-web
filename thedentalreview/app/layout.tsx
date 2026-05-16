import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thedentalreview.com"),
  title: {
    default: "The Dental Review — Odontología Estética de Alto Nivel",
    template: "%s | The Dental Review",
  },
  description:
    "Publicación especializada en odontología estética: casos clínicos documentados, técnicas de vanguardia y referentes de la profesión en Argentina y el mundo.",
  openGraph: {
    siteName: "The Dental Review",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen" style={{ background: "var(--paper)", color: "var(--ink)" }}>
        {children}
      </body>
    </html>
  );
}
