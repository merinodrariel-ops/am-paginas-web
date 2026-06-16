import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import JobApplicationForm from "@/components/job-applications/JobApplicationForm";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Trabajá con nosotros | Team AM",
  description:
    "Postulate para sumarte a AM Estética Dental en Puerto Madero. Enviá tus datos, área de postulación y CV al equipo interno de selección.",
  alternates: {
    canonical: "https://www.amesteticadental.com/trabaja-en-am",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Trabajá con nosotros | Team AM",
    description:
      "Formulario de postulación para sumarte a AM Estética Dental en Puerto Madero.",
    url: "https://www.amesteticadental.com/trabaja-en-am",
    siteName: "AM Estética Dental",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://www.amesteticadental.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AM Estética Dental en Puerto Madero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trabajá con nosotros | Team AM",
    description: "Formulario de postulación para sumarte a AM Estética Dental.",
    images: ["https://www.amesteticadental.com/og-image.jpg"],
  },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Trabajá con nosotros | Team AM",
  url: "https://www.amesteticadental.com/trabaja-en-am",
  description:
    "Formulario de postulación para profesionales y perfiles operativos interesados en sumarse a AM Estética Dental.",
  publisher: {
    "@type": "Dentist",
    name: "AM Estética Dental",
    url: "https://www.amesteticadental.com",
  },
};

export default function TrabajaEnAmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <BreadcrumbsSchema items={[{ name: "Inicio", item: "/" }, { name: "Trabajá con nosotros", item: "/trabaja-en-am" }]} />
      <Navbar />
      <main className="bg-carbon font-manrope text-crema">
        <JobApplicationForm />
      </main>
    </>
  );
}
