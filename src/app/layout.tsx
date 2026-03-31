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
  metadataBase: new URL("https://amesteticadental.com"),
  title: "AM Estética Dental – Diseño de Sonrisas en Puerto Madero",
  description: "Clínica de estética dental premium en Puerto Madero, Buenos Aires. Diseño de sonrisa digital, carillas, blanqueamiento e implantes. Dr. Ariel Merino. Camila O'Gorman 412, Oficina 101.",
  keywords: "estética dental Buenos Aires, carillas dentales Puerto Madero, diseño de sonrisa, blanqueamiento dental CABA, Dr. Ariel Merino",
  alternates: {
    canonical: "https://amesteticadental.com",
  },
  openGraph: {
    title: "AM Estética Dental – Diseño de Sonrisas en Puerto Madero",
    description: "La única clínica dental de Argentina reconocida por Forbes. Diseño de sonrisa digital, carillas, blanqueamiento e implantes en Puerto Madero.",
    url: "https://amesteticadental.com",
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
  "url": "https://amesteticadental.com",
  "telephone": "+5491170219298",
  "priceRange": "$$$$",
  "image": "https://amesteticadental.com/og-image.jpg",
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
    "reviewCount": "120",
    "bestRating": "5"
  },
  "employee": {
    "@type": "Person",
    "name": "Dr. Ariel Merino",
    "jobTitle": "Odontólogo Estético",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q138828257",
      "https://es.wikipedia.org/wiki/Ariel_Merino_(odont%C3%B3logo)",
      "https://www.instagram.com/drarielmerino",
      "https://www.tiktok.com/@drarielmerino",
      "https://www.linkedin.com/in/arielmerinoodontologiaestetica",
      "https://www.odontoespacio.net/autores/ariel-merino/"
    ]
  },
  "sameAs": [
    "https://www.instagram.com/amesteticadental",
    "https://www.tiktok.com/@drarielmerino",
    "https://www.youtube.com/@ArielMerino",
    "https://ar.linkedin.com/company/am-est%C3%A9tica-dental",
    "https://www.linkedin.com/in/arielmerinoodontologiaestetica",
    "https://maps.app.goo.gl/5kWar9VL6qjhdEGM7",
    "https://g.page/r/CQ3df5Xn-J6oEBM"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuestan las carillas dentales en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El valor de las carillas depende del material (porcelana o resina), la cantidad de piezas y el estado inicial de tu dentición. En AM Estética Dental trabajamos con valores en USD y ofrecemos financiación propia con tasa fija del 18% anual. La evaluación inicial nos permite definir alcance, tiempos y presupuesto con precisión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura el proceso de diseño de sonrisa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El proceso completo de diseño de sonrisa digital con carillas de porcelana se realiza en 2 a 3 sesiones en un período de 2 a 4 semanas. En la primera sesión diseñamos digitalmente tu sonrisa y te mostramos el resultado antes de empezar. Solo cuando lo aprobás, avanzamos con el tratamiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿El blanqueamiento duele o afecta el esmalte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El blanqueamiento profesional en AM Estética Dental es un protocolo clínico controlado. No afecta el esmalte cuando se realiza correctamente. La sensibilidad post-sesión, si ocurre, es transitoria y se maneja con protocolo específico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo ver cómo va a quedar mi sonrisa antes de empezar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, siempre. El diseño de sonrisa digital 3D es parte de nuestro proceso estándar. Diseñamos tu nueva sonrisa virtualmente, te la mostramos en pantalla y hacemos todos los ajustes necesarios antes de tocar un solo diente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los alineadores invisibles son para cualquier caso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los alineadores invisibles resuelven la mayoría de los casos de ortodoncia, desde correcciones leves hasta casos moderados-complejos. En la consulta evaluamos tu caso específico y te indicamos si los alineadores son la mejor opción."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona la financiación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Financiamos el 50% del valor del tratamiento con un anticipo del 50% y una tasa fija anual del 18% (1,5% mensual). Las cuotas son en 3, 6 o 12 meses. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto duran las carillas de porcelana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las carillas de porcelana de alta calidad duran entre 10 y 20 años con el cuidado adecuado. Las de resina tienen una vida útil de 5 a 7 años."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde está ubicada la clínica AM Estética Dental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AM Estética Dental está ubicada en Camila O'Gorman 412, Oficina 101, Puerto Madero, C1107DED CABA. Atendemos de lunes a viernes de 10:00 a 18:00. Podés agendar tu consulta directamente por WhatsApp al +54 9 11 7021-9298."
      }
    }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
