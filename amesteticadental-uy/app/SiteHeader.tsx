import Link from "next/link";
import { whatsappFor } from "./site-data";

const links = [
  ["Clínica", "/clinica-dental-carrasco"],
  ["Carillas", "/carillas-dentales-montevideo"],
  ["Diseño de sonrisa", "/diseno-de-sonrisa-montevideo"],
  ["Implantes", "/implantes-dentales-montevideo"],
  ["Inversión", "/precio-carillas-dentales-montevideo"],
  ["Casos", "/casos-clinicos"],
  ["Financiación", "/financiacion"],
  ["Dr. Merino", "/dr-ariel-merino"],
] as const;

// El acceso a postulaciones va aparte y destacado, no como un link más del menú: armar el
// equipo de la sede uruguaya es la prioridad operativa hasta que Carrasco abra.
const JOBS_LINK = ["Sumate al equipo", "/trabaja-en-am"] as const;

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="AM Estética Dental Uruguay, inicio">
        <span>AM</span>
        <small>ESTÉTICA DENTAL</small>
      </Link>
      {/* En mobile la nav no se oculta: se vuelve una fila desplazable. Ocultarla dejaba
          al 70% del tráfico sin ningún enlace interno y sin rastro de crawl. */}
      <nav aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        <Link href={JOBS_LINK[1]} className="nav-jobs" data-track="uy_jobs_nav_click">
          {JOBS_LINK[0]}
        </Link>
      </nav>
      <a className="header-cta" data-track="uy_whatsapp_click" href={whatsappFor("los tratamientos de AM")} target="_blank" rel="noreferrer">
        Hablar con el equipo
      </a>
    </header>
  );
}
