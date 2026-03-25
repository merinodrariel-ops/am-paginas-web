import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AM Estética Dental | Dr. Ariel Merino — Puerto Madero",
  description: "Clínica de estética dental premium en Puerto Madero, Buenos Aires. Diseño de sonrisa digital, carillas, blanqueamiento e implantes. Dr. Ariel Merino.",
  keywords: "estética dental Buenos Aires, carillas dentales Puerto Madero, diseño de sonrisa, blanqueamiento dental CABA, Dr. Ariel Merino",
  openGraph: {
    title: "AM Estética Dental | Dr. Ariel Merino — Puerto Madero",
    description: "La única clínica dental de Argentina reconocida por Forbes. Diseño de sonrisa digital, carillas, blanqueamiento e implantes en Puerto Madero.",
    url: "https://amesteticadental.com",
    siteName: "AM Estética Dental",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Estética Dental | Dr. Ariel Merino",
    description: "La única clínica dental de Argentina reconocida por Forbes. Puerto Madero, Buenos Aires.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness"],
  "name": "AM Estética Dental",
  "description": "Clínica de estética dental premium en Puerto Madero. Diseño de sonrisa digital, carillas, blanqueamiento, implantes y alineadores invisibles.",
  "url": "https://amesteticadental.com",
  "telephone": "+549117021-9298",
  "priceRange": "$$$$",
  "image": "https://amesteticadental.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Camila O'Gorman 412",
    "addressLocality": "Puerto Madero",
    "addressRegion": "Ciudad Autónoma de Buenos Aires",
    "postalCode": "C1107",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.6118,
    "longitude": -58.3636
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87",
    "bestRating": "5"
  },
  "employee": {
    "@type": "Person",
    "name": "Dr. Ariel Merino",
    "jobTitle": "Odontólogo Estético",
    "sameAs": "https://www.instagram.com/drarielmerino"
  },
  "sameAs": [
    "https://www.instagram.com/amesteticadental",
    "https://www.instagram.com/drarielmerino"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${cormorant.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="bg-carbon text-crema font-manrope relative min-h-screen">
        {/* SVG Noise Filter — sutil textura premium */}
        <svg
          className="pointer-events-none fixed isolate z-50 opacity-[0.03] mix-blend-soft-light w-full h-full"
          width="100%"
          height="100%"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {children}
      </body>
    </html>
  );
}
