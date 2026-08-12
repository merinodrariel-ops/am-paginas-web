import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { URUGUAY_JOBS_URL } from "../site-data";

export const metadata: Metadata = {
  title: "Trabajá con AM Uruguay",
  description: "Postulaciones para la sede de AM Estética Dental Uruguay en zona Carrasco, Montevideo.",
  alternates: { canonical: "https://www.amesteticadental.uy/trabaja-en-am" },
};

export default function UruguayJobsPage() {
  redirect(URUGUAY_JOBS_URL);
}
