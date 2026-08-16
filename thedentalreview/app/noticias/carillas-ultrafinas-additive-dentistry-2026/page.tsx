import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

const CANONICAL = "https://www.thedentalreview.com/noticias/carillas-ultrafinas-additive-dentistry-2026";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas";
const OG_IMAGE = `${CDN}/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental`;

export const metadata: Metadata = {
  title: "Cada vez se lima menos: el auge de las carillas ultrafinas en 2026 | The Dental Review",
  description:
    "La odontología aditiva y la resina impresa en 3D empujan el límite de lo conservador: carillas de 0,1 a 0,2 mm que reducen el desgaste del esmalte al mínimo. Análisis de la tendencia estética 2026.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Cada vez se lima menos: el auge de las carillas ultrafinas en 2026",
    description:
      "Odontología aditiva, disilicato de litio y resina impresa en 3D: la tendencia estética que reduce el desgaste del diente al mínimo.",
    url: CANONICAL,
    type: "article",
    images: [{ url: OG_IMAGE, alt: "Fragmento cerámico ultrafino de 0,2 mm para carillas sin desgaste — AM Estética Dental, Puerto Madero, Buenos Aires" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cada vez se lima menos: el auge de las carillas ultrafinas en 2026",
  description:
    "Análisis de la odontología aditiva y las carillas ultrafinas de 0,1 a 0,2 mm, incluida la resina impresa en 3D, como tendencia dominante de la estética dental en 2026.",
  image: [OG_IMAGE, `${CDN}/fragmentos-ceramicos-lentes-contacto-dental-02mm-carillas-am-dr-ariel-merino-am-estetica-dental-buenos-aires`],
  author: { "@type": "Organization", name: "Redacción The Dental Review", url: "https://www.thedentalreview.com" },
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  about: { "@type": "MedicalProcedure", name: "Carillas ultrafinas y odontología aditiva mínimamente invasiva" },
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const FOTOS = [
  {
    src: `${CDN}/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental`,
    alt: "Carilla ultrafina de 0,2 mm apoyada en la yema de un dedo — lente de contacto dental AM, Dr. Ariel Merino, Puerto Madero, Buenos Aires",
    caption: "Escala real — una carilla ultrafina en la yema del dedo",
  },
  {
    src: `${CDN}/fragmentos-ceramicos-lentes-contacto-dental-02mm-carillas-am-dr-ariel-merino-am-estetica-dental-buenos-aires`,
    alt: "Fragmentos cerámicos de 0,2 mm de espesor para carillas sin desgaste — odontología aditiva, AM Estética Dental, Buenos Aires",
    caption: "Fragmentos cerámicos — 0,2 mm de espesor",
  },
];

const s = (obj: object) => JSON.stringify(obj);

export default function NotaCarillasUltrafinas() {
  const p = (text: React.ReactNode) => (
    <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink, #0e0e0e)", marginBottom: 24 }}>{text}</p>
  );
  const h3 = (text: string) => (
    <h3 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 22, fontWeight: 400, marginBottom: 16, marginTop: 40 }}>{text}</h3>
  );
  const a = (href: string, text: string) => (
    <Link href={href} target="_blank" style={{ color: "var(--gold, #b8954a)", textDecoration: "underline", textUnderlineOffset: 3 }}>{text}</Link>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: s(schema) }} />

      <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>

        <header style={{ borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <Link href="/" style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 20, fontWeight: 700, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}>
              The Dental Review
            </Link>
          </div>
        </header>
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--gold, #b8954a), transparent)" }} />

        <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px" }}>

          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Actualidad</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Julio 2026</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            Cada vez se lima menos: el auge de las carillas ultrafinas en 2026
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            La odontología aditiva y la resina impresa en 3D empujan el límite de lo conservador. La pregunta ya no es cuánto se puede modificar un diente, sino cuán poco es necesario tocarlo.
          </p>

          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40 }}>
            <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Redacción TDR</div>
            <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Actualidad · Estética dental mínimamente invasiva</div>
          </div>

          <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[0].src} alt={FOTOS[0].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} priority />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            {FOTOS[0].caption} — AM Estética Dental, Puerto Madero
          </p>

          {p(<>La estética dental está atravesando un cambio de filosofía. Durante décadas, mejorar una sonrisa con carillas implicaba un costo silencioso: el desgaste del esmalte natural, entre 0,5 y 0,7 milímetros de estructura sana limada para dar lugar a la restauración. En 2026, la tendencia dominante apunta a reducir ese desgaste al mínimo posible.</>)}
          {p(<>Se la conoce como <em>additive dentistry</em> —odontología aditiva— y su premisa es tan simple como disruptiva: en lugar de quitar tejido dental, se busca construir sobre él con la menor reducción posible. Las carillas ultrafinas, láminas de apenas 0,2 milímetros de espesor, se adhieren directamente sobre el esmalte con una preparación mínima y, en algunos casos, nula.</>)}

          {h3("Materiales y fabricación: el salto que lo hizo posible")}
          {p(<>El avance no es solo técnico, sino de materiales y de fabricación. Cerámicas de alta resistencia como el disilicato de litio permiten hoy restauraciones que combinan delgadez extrema con una durabilidad antes impensable sin volumen. A eso se suma una novedad que gana terreno con fuerza: la resina impresa en 3D. La impresión permite fabricar fragmentos de resina extremadamente finos —del orden de 0,1 a 0,2 milímetros—, empujando el límite de lo conservador aún más lejos.</>)}

          <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[1].src} alt={FOTOS[1].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>{FOTOS[1].caption}</p>

          {p(<>Conviene, sin embargo, ser preciso. En la práctica, la mayoría de estos tratamientos todavía requiere desgastes mínimos: la clave está en que, cuanto más fino se puede fabricar el fragmento, menos estructura dental hace falta remover. No es una regla universal —cada caso se evalúa por separado—, pero en la enorme mayoría de las situaciones la tendencia es inequívoca: cada vez se lima menos.</>)}

          {h3("El mito de la reversibilidad")}
          {p(<>Vale una aclaración que la industria a veces pasa por alto. Suele promocionarse a estas técnicas como &ldquo;reversibles&rdquo;, un argumento más comercial que clínico. En rigor, un tratamiento de carillas modifica el diente y no está pensado para volver atrás. Y hay una razón de fondo: los pacientes rara vez desean regresar a su sonrisa original. La mejora estética y funcional es tal que la marcha atrás deja de ser una expectativa. El verdadero valor de estas técnicas no está en ser reversibles, sino en ser profundamente conservadoras.</>)}
          {p(<>Es la lógica que ya practican las clínicas de vanguardia —donde las {a("https://www.amesteticadental.com/carillas-sin-desgaste", "carillas sin desgaste")} se trabajan como fragmentos casi imperceptibles— y que en 2026 se consolida como el estándar de la odontología estética de alto nivel. El cambio de paradigma se resume en una pregunta que se invirtió: ya no se trata de cuánto se puede modificar un diente, sino de cuán poco es necesario tocarlo.</>)}

          <div style={{ textAlign: "center", padding: "40px 0 8px", borderTop: "1px solid var(--paper-dim, #e8e4da)", marginTop: 40 }}>
            <p style={{ fontSize: 12, color: "var(--muted, #6b6560)" }}>
              Fuente: {a("https://dentemagazine.com/articles/the-rise-of-no-prep-veneers-and-minimally-invasive-dentistry.html", "Denté Magazine — The Rise of No-Prep Veneers and Minimally Invasive Dentistry")}
            </p>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
