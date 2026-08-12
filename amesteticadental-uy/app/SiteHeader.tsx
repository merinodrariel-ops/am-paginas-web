import Link from "next/link";
import { WHATSAPP_URL } from "./site-data";

const links = [
  ["Clínica", "/#clinica"],
  ["Casos", "/casos-clinicos"],
  ["Tratamientos", "/estetica-dental-montevideo"],
  ["Simulador IA", "/simulador-sonrisa"],
  ["Dr. Merino", "/dr-ariel-merino"],
  ["Trabajá", "/trabaja-en-am"],
  ["Prensa", "/prensa"],
] as const;

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="AM Estética Dental Uruguay, inicio">
        <span>AM</span>
        <small>ESTÉTICA DENTAL</small>
      </Link>
      <nav aria-label="Navegación principal">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <a className="header-cta" data-track="uy_whatsapp_click" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Hablar con el equipo</a>
    </header>
  );
}
