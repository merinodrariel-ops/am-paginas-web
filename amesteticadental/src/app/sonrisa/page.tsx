import type { Metadata } from "next";
import SmileEntryClient from "@/components/SmileEntryClient";
import { hreflangFor } from "@/lib/i18n-routes";

export const metadata: Metadata = {
  title: "Simulador de Diseño de Sonrisa con IA | AM Estética Dental",
  description:
    "Subí una foto y probá una simulación orientativa de diseño de sonrisa con IA. Pacientes y colegas pueden explorar la experiencia digital de AM Estética Dental.",
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

export default function SonrisaPage() {
  return <SmileEntryClient />;
}
