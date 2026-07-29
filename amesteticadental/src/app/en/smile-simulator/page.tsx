import type { Metadata } from "next";
import SmileEntryClient from "@/components/SmileEntryClient";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/smile-simulator";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "AI Smile Design Simulator | AM Estética Dental",
  description:
    "Upload a photo and try an indicative AI smile design simulation. Free, in seconds. Patients and colleagues can explore the digital experience of AM Estética Dental.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/sonrisa") },
  openGraph: {
    title: "AI Smile Design Simulator | AM Estética Dental",
    description:
      "Try an indicative smile design simulation before requesting a real clinical assessment.",
    url: CANONICAL,
    siteName: "AM Estética Dental",
    images: [
      {
        url: "https://www.amesteticadental.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AM Estética Dental — AI smile simulator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function SmileSimulatorPage() {
  return <SmileEntryClient lang="en" />;
}
