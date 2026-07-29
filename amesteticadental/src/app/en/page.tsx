import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Casos from "@/components/Casos";
import Testimonios from "@/components/Testimonios";
import Autoridad from "@/components/Autoridad";
import Prensa from "@/components/Prensa";
import DrMerino from "@/components/DrMerino";
import Tratamientos from "@/components/Tratamientos";
import Features from "@/components/Features";
import Clinica from "@/components/Clinica";
import PorQueAM from "@/components/PorQueAM";
import ClientesVIP from "@/components/ClientesVIP";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import { faqDataEn } from "@/data/faq";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Porcelain Veneers & Smile Design in Buenos Aires | AM Estética Dental",
  description:
    "Cosmetic dentistry clinic in Puerto Madero, Buenos Aires. Porcelain veneers and digital smile design with an in-house lab — natural results in days, not months. Dr. Ariel Merino, featured by Forbes.",
  keywords:
    "porcelain veneers Buenos Aires, smile design Argentina, cosmetic dentist Buenos Aires, dental tourism Argentina, Dr. Ariel Merino",
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor("/"),
  },
  openGraph: {
    title: "Porcelain Veneers & Smile Design in Buenos Aires | AM Estética Dental",
    description:
      "The cosmetic dentistry clinic in Puerto Madero featured by Forbes. Natural smile design with our own in-house laboratory — completed in a single trip.",
    url: CANONICAL,
    siteName: "AM Estética Dental",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.amesteticadental.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porcelain Veneers & Smile Design in Buenos Aires | AM Estética Dental",
    description:
      "Natural smile design with an in-house laboratory in Puerto Madero, Buenos Aires. Dr. Ariel Merino.",
    images: ["https://www.amesteticadental.com/og-image.jpg"],
  },
};

const faqSchemaEn = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqDataEn.map((faq) => ({
    "@type": "Question",
    name: faq.pregunta,
    acceptedAnswer: { "@type": "Answer", text: faq.respuesta },
  })),
};

const clinicSchemaEn = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "AM Estética Dental",
  url: CANONICAL,
  description:
    "Premium cosmetic dentistry clinic in Puerto Madero, Buenos Aires. Porcelain veneers, ultra-thin veneers and digital smile design with an in-house dental laboratory.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camila O'Gorman 412, Office 101",
    addressLocality: "Puerto Madero",
    addressRegion: "Buenos Aires",
    postalCode: "C1107DED",
    addressCountry: "AR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -34.620858, longitude: -58.3609047 },
  telephone: "+5491170219298",
  priceRange: "$$$$",
  availableLanguage: ["English", "Spanish"],
  founder: { "@type": "Person", name: "Dr. Ariel Merino" },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Mexico" },
    { "@type": "Country", name: "Argentina" },
  ],
};

export default function EnglishHome() {
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaEn).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchemaEn).replace(/</g, "\\u003c") }}
      />
      <BreadcrumbsSchema items={[{ name: "Home", item: "/en" }]} />
      <Navbar />

      {/* 1. HERO */}
      <Hero lang="en" />

      {/* 2. CASES — real results first */}
      <Casos lang="en" />

      {/* 3. DR. MERINO — who is behind the cases (E-E-A-T) */}
      <DrMerino lang="en" />

      {/* 3b. TESTIMONIALS */}
      <Testimonios lang="en" />

      {/* 3c. AUTHORITY — Google 4.9 + Forbes */}
      <Autoridad lang="en" />

      {/* 4. TREATMENTS */}
      <div id="treatments">
        <Tratamientos lang="en" />
      </div>

      {/* 5. TECHNOLOGY & IN-HOUSE LAB */}
      <Features lang="en" />

      {/* 6. THE CLINIC */}
      <Clinica lang="en" />

      {/* 7. WHY AM — explicit differentiation */}
      <PorQueAM lang="en" />

      {/* 7b. PRESS */}
      <Prensa lang="en" />

      {/* 8. NOTABLE PATIENTS */}
      <ClientesVIP lang="en" />

      {/* 9. FAQ */}
      <FAQ lang="en" />

      {/* 10. CONTACT */}
      <Contacto lang="en" />
    </main>
  );
}
