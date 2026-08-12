import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { URUGUAY_SMILE_SIMULATOR_URL } from "../site-data";

export const metadata: Metadata = {
  title: "Simulador de diseño de sonrisa con IA",
  description: "Probá una simulación orientativa de diseño de sonrisa con IA antes de solicitar una evaluación clínica en AM Estética Dental Uruguay.",
  alternates: { canonical: "https://www.amesteticadental.uy/simulador-sonrisa" },
};

export default function UruguaySmileSimulatorPage() {
  redirect(URUGUAY_SMILE_SIMULATOR_URL);
}
