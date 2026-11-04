import type { Metadata } from "next";
import SmileEntryClient from "@/components/SmileEntryClient";
import { hreflangFor } from "@/lib/i18n-routes";

export const metadata: Metadata = {
  title: "Simulador de Diseño de Sonrisa con IA | AM Estética Dental",
  description:
    "Subí una foto y probá una simulación orientativa de diseño de sonrisa con IA en Puerto Madero, Buenos Aires. Desarrollado por el Dr. Ariel Merino.",
  alternates: {
    canonical: "https://www.amesteticadental.com/sonrisa",
    languages: hreflangFor("/sonrisa"),
  },
  openGraph: {
    title: "Simulador de Diseño de Sonrisa con IA | AM Estética Dental",
    description:
      "Probá una simulación orientativa de diseño de sonrisa antes de solicitar una evaluación clínica.",
    url: "https://www.amesteticadental.com/sonrisa",
    siteName: "AM Estética Dental",
    images: [
      {
        url: "https://www.amesteticadental.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AM Estética Dental - Simulador de sonrisa con IA",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Simulador de Diseño de Sonrisa con IA · AM Estética Dental",
  url: "https://www.amesteticadental.com/sonrisa",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  description: "Simulador biométrico de diseño de sonrisa mediante inteligencia artificial facial desarrollado por el Dr. Ariel Merino en Puerto Madero.",
  author: {
    "@type": "Person",
    name: "Dr. Ariel Merino",
    identifier: "MN 34.869",
  },
  provider: {
    "@type": "Dentist",
    "@id": "https://www.amesteticadental.com/#clinic",
    name: "AM Estética Dental",
  },
};

type SonrisaPageProps = {
  searchParams: Promise<{ source?: string }>;
};

export default async function SonrisaPage({ searchParams }: SonrisaPageProps) {
  const { source } = await searchParams;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SmileEntryClient market={source === "uy" ? "uy" : "ar"} />
    </>
  );
}
