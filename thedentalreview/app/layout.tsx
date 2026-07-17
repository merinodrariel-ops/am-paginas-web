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
  verification: {
    google: "MDJ7t0DmJ894EW7LQn-6VjBpWC7DC8kjjELKQHw3ScY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: "The Dental Review",
    locale: "es_AR",
    type: "website",
  },
};

const publisherSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.thedentalreview.com/#publisher",
      name: "The Dental Review",
      url: "https://www.thedentalreview.com",
      description: "Publicación especializada en odontología estética, rehabilitación oral y tecnología clínica.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.thedentalreview.com/#website",
      url: "https://www.thedentalreview.com",
      name: "The Dental Review",
      inLanguage: "es-AR",
      publisher: { "@id": "https://www.thedentalreview.com/#publisher" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen" style={{ background: "var(--paper)", color: "var(--ink)" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publisherSchema).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
