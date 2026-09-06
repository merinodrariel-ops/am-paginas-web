import type { Metadata } from "next";
import BarrioLanding from "@/components/BarrioLanding";
import { getBarrio } from "@/data/barrios";

// Landing por barrio. Todo el contenido vive en src/data/barrios.ts y el render
// en src/components/BarrioLanding.tsx; acá sólo se ata la ruta con su dato.
const barrio = getBarrio("carillas-dentales-palermo");

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: barrio.title,
  description: barrio.description,
  keywords: barrio.keywords,
  alternates: { canonical: `https://www.amesteticadental.com/${barrio.slug}` },
  openGraph: {
    title: barrio.title,
    description: barrio.description,
    url: `https://www.amesteticadental.com/${barrio.slug}`,
    siteName: "AM Estética Dental",
    locale: "es_AR",
    type: "website",
    images: [
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1782405026/clinica/recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg",
    ],
  },
};

export default function Page() {
  return <BarrioLanding barrio={barrio} />;
}
