import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import { generateFaqSchema } from "@/data/faq";
import "./globals.css";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-P9KCL5W7";

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
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "AM Estética Dental – Diseño de Sonrisas en Puerto Madero",
  description: "Clínica de estética dental premium en Puerto Madero, Buenos Aires. Diseño de sonrisa digital, carillas, blanqueamiento e implantes. Dr. Ariel Merino. Camila O'Gorman 412, Oficina 101.",
  keywords: "estética dental Buenos Aires, carillas dentales Puerto Madero, diseño de sonrisa, blanqueamiento dental CABA, Dr. Ariel Merino",
  alternates: {
    canonical: "https://www.amesteticadental.com",
  },
  openGraph: {
    title: "AM Estética Dental – Diseño de Sonrisas en Puerto Madero",
    description: "La única clínica dental de Argentina reconocida por Forbes. Diseño de sonrisa digital, carillas, blanqueamiento e implantes en Puerto Madero.",
    url: "https://www.amesteticadental.com",
    siteName: "AM Estética Dental – Diseño de Sonrisas en Puerto Madero",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@amesteticadental",
    creator: "@drarielmerino",
    title: "AM Estética Dental – Diseño de Sonrisas en Puerto Madero",
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
  "name": "AM Estética Dental – Diseño de Sonrisas en Puerto Madero",
  "description": "Clínica de estética dental premium en Puerto Madero. Diseño de sonrisa digital, carillas, blanqueamiento, implantes y alineadores invisibles.",
  "url": "https://www.amesteticadental.com",
  "telephone": "+5491170219298",
  "priceRange": "$$$$",
  "image": "https://www.amesteticadental.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Camila O'Gorman 412, Oficina 101",
    "addressLocality": "Puerto Madero",
    "addressRegion": "Ciudad Autónoma de Buenos Aires",
    "postalCode": "C1107DED",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.620858,
    "longitude": -58.3609047
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
    "reviewCount": "120",
    "bestRating": "5"
  },
  "employee": {
    "@type": "Person",
    "name": "Dr. Ariel Merino",
    "jobTitle": "Odontólogo Estético",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q134287655",
      "https://www.instagram.com/drarielmerino",
      "https://www.tiktok.com/@drarielmerino",
      "https://www.linkedin.com/in/drarielmerino/",
      "https://www.youtube.com/c/ArielMerino",
      "https://www.odontoespacio.net/autores/ariel-merino/",
      "https://www.doctoraliar.com/ariel-merino/odontologo/ciudad-autonoma-de-buenos-aires"
    ]
  },
  "sameAs": [
    "https://www.wikidata.org/wiki/Q138862170",
    "https://www.instagram.com/amesteticadental",
    "https://www.tiktok.com/@drarielmerino",
    "https://www.youtube.com/@ArielMerino",
    "https://ar.linkedin.com/company/am-est%C3%A9tica-dental",
    "https://www.linkedin.com/in/drarielmerino/",
    "https://maps.app.goo.gl/5kWar9VL6qjhdEGM7",
    "https://g.page/r/CQ3df5Xn-J6oEBM"
  ]
};

const faqSchema = generateFaqSchema();

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Carillas Dentales 3D — AM Estética Dental",
  "description": "Visualización 3D de carillas dentales de porcelana. Diseño de sonrisa digital en Puerto Madero, Buenos Aires.",
  "thumbnailUrl": "https://www.amesteticadental.com/videos/generate-3d-veneer-poster.jpg",
  "contentUrl": "https://www.amesteticadental.com/videos/generate-3d-veneer.webm",
  "embedUrl": "https://www.amesteticadental.com/videos/generate-3d-veneer.webm",
  "uploadDate": "2025-01-01",
  "duration": "PT30S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${cormorant.variable} antialiased`}>
      <head>
        {gtmId ? (
          <Script
            id="gtm-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      </head>
      <body className="bg-carbon text-crema font-manrope relative min-h-screen">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
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
