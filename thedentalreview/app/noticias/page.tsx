import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Noticias de Odontología — The Dental Review",
  description: "Artículos sobre avances, tecnología e investigación en odontología estética de alto nivel.",
  alternates: { canonical: "https://www.thedentalreview.com/noticias" },
};

export default function NoticiasPage() {
  // Redirect a home por ahora
  // En el futuro puede ser un index de todas las noticias
  redirect("/");
}
