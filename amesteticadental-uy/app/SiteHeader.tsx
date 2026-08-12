import Image from "next/image";
import Link from "next/link";
import { LOGO_PUBLIC_ID, LOGO_VERSION, WHATSAPP_URL } from "./site-data";

const links = [
  ["Casos", "/casos-clinicos"],
  ["Tratamientos", "/estetica-dental-montevideo"],
  ["Dr. Merino", "/dr-ariel-merino"],
  ["Prensa", "/prensa"],
] as const;

export default function SiteHeader() {
  const headerLogo = `https://res.cloudinary.com/drctvgyqd/image/upload/w_80,h_80,c_fill,q_auto,f_auto/${LOGO_VERSION}/${LOGO_PUBLIC_ID}`;

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="AM Estética Dental Uruguay, inicio">
        <Image src={headerLogo} width={40} height={40} alt="" unoptimized priority />
        <span>
          <strong>AM</strong>
          <small>ESTÉTICA DENTAL · UY</small>
        </span>
      </Link>
      <nav aria-label="Navegación principal">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <a className="header-cta" data-track="uy_whatsapp_click" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Hablar con el equipo</a>
    </header>
  );
}
