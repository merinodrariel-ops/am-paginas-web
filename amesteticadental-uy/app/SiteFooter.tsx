import Link from "next/link";
import { ADDRESS, ARGENTINA_URL, PERSON_URL, REVIEW_URL, treatmentPages, whatsappFor } from "./site-data";

const TREATMENT_LINKS = Object.entries(treatmentPages).slice(0, 6);

/**
 * Footer de red.
 *
 * Además de cerrar la página, es la pieza que conecta las cuatro propiedades de
 * la marca (AR, UY, The Dental Review y el sitio personal del Dr. Merino). Antes
 * de esto, .uy enlazaba a .com sólo desde las tarjetas de casos y las otras dos
 * propiedades no aparecían en ningún lado.
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer-full">
      <div className="shell footer-grid">
        <div className="footer-col footer-identity">
          <div className="brand footer-brand">
            <span>AM</span>
            <small>ESTÉTICA DENTAL · URUGUAY</small>
          </div>
          <p>
            {ADDRESS.street}
            <br />
            {ADDRESS.neighborhood}, {ADDRESS.locality}
          </p>
          <p className="footer-note">Sede en preparación. Fecha de apertura a confirmar.</p>
          <a href={whatsappFor("la sede de Montevideo")} data-track="uy_footer_whatsapp_click" target="_blank" rel="noreferrer" className="text-link">
            Hablar con el equipo
          </a>
        </div>

        <div className="footer-col">
          <h3>Tratamientos</h3>
          <ul>
            {TREATMENT_LINKS.map(([slug, page]) => (
              <li key={slug}>
                <Link href={`/${slug}`}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>La clínica</h3>
          <ul>
            <li><Link href="/clinica-dental-carrasco">Clínica en Carrasco</Link></li>
            <li><Link href="/casos-clinicos">Portfolio clínico</Link></li>
            <li><Link href="/financiacion">Financiación</Link></li>
            <li><Link href="/dr-ariel-merino">Dr. Ariel Merino</Link></li>
            <li><Link href="/prensa">Prensa</Link></li>
            <li><Link href="/tratamiento-en-buenos-aires-desde-uruguay">Tratarte en Buenos Aires</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>AM en la región</h3>
          <ul>
            <li>
              <a href={ARGENTINA_URL} data-track="uy_footer_ar_click" target="_blank" rel="noreferrer">
                AM Estética Dental Argentina
              </a>
            </li>
            <li>
              <a href={`${ARGENTINA_URL}/dentista-puerto-madero`} target="_blank" rel="noreferrer">
                Sede Puerto Madero
              </a>
            </li>
            <li>
              <a href={REVIEW_URL} data-track="uy_footer_tdr_click" target="_blank" rel="noreferrer">
                The Dental Review
              </a>
            </li>
            <li>
              <a href={PERSON_URL} data-track="uy_footer_person_click" target="_blank" rel="noreferrer">
                arielmerino.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell footer-legal">
        <p>© {new Date().getFullYear()} AM Estética Dental Uruguay</p>
        <p>Los contenidos de este sitio son informativos y no sustituyen una evaluación clínica individual.</p>
      </div>
    </footer>
  );
}
