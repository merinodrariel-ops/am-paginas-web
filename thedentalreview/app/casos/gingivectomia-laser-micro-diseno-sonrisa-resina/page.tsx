import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

const CANONICAL = "https://www.thedentalreview.com/casos/gingivectomia-laser-micro-diseno-sonrisa-resina";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries";

export const metadata: Metadata = {
  title: "El equilibrio invisible: cuando una sonrisa empieza en la encía",
  description:
    "Gingivectomía láser y micro diseño de sonrisa en resina: cómo una clínica de Puerto Madero combina la armonía de los márgenes gingivales con los bordes incisales en el 5% de pacientes con dientes impecables.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "El equilibrio invisible: cuando una sonrisa empieza en la encía",
    description:
      "Gingivectomía láser y micro diseño de sonrisa en resina — el equilibrio entre encías y bordes incisales analizado por The Dental Review.",
    url: CANONICAL,
    type: "article",
    images: [{ url: `${CDN}/transformacion-extrema-caries-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires` }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "El equilibrio invisible: cuando una sonrisa empieza en la encía",
  description:
    "Análisis de la combinación de gingivectomía láser y micro diseño de sonrisa en resina como técnica de armonización estética de márgenes gingivales y bordes incisales.",
  author: { "@type": "Organization", name: "Redacción The Dental Review", url: "https://www.thedentalreview.com" },
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  about: { "@type": "MedicalProcedure", name: "Gingivectomía láser y micro diseño de sonrisa en resina" },
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const FOTOS = [
  { src: `${CDN}/transformacion-extrema-caries-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Antes y después de gingivectomía láser y diseño de sonrisa en resina — Puerto Madero", caption: "Antes y después — rostro" },
  { src: `${CDN}/transformacion-carillas-resina-caries-gingivectomia-despues-rostro-frontal-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Resultado frontal de diseño de sonrisa con gingivectomía láser", caption: "Después — rostro frontal" },
  { src: `${CDN}/caries-carillas-resina-gingivectomia-laser-antes-despues-rostro-comparativa-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Comparativa antes y después de la línea gingival tras gingivectomía láser", caption: "Comparativa — línea gingival" },
  { src: `${CDN}/carillas-resina-diseno-sonrisa-labios-perfil-antes-despues-gingivectomia-laser-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Perfil antes y después del diseño de sonrisa en resina", caption: "Perfil — antes y después" },
];

const s = (obj: object) => JSON.stringify(obj);

export default function ArticuloGingivectomia() {
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

        {/* Header */}
        <header style={{ borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <Link href="/" style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 20, fontWeight: 700, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}>
              The Dental Review
            </Link>
          </div>
        </header>
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--gold, #b8954a), transparent)" }} />

        <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px" }}>

          {/* Categoría + fecha */}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Técnica Clínica</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Julio 2026</span>
          </div>

          {/* Título */}
          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            El equilibrio invisible: cuando una sonrisa empieza en la encía
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            Un caso documentado en Puerto Madero combina gingivectomía láser y micro diseño de sonrisa en resina. La premisa: la estética no se juega solo en los dientes, sino en la relación entre la encía y el borde incisal.
          </p>

          {/* Autoría */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Redacción TDR</div>
              <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Caso clínico: Dr. Ariel Merino · AM Estética Dental</div>
            </div>
            <Link href="https://www.amesteticadental.com/casos/gingivectomia-laser-micro-diseno-sonrisa-resinas" target="_blank" style={{ fontSize: 11, color: "var(--gold, #b8954a)", textDecoration: "none", letterSpacing: "0.1em", border: "1px solid var(--gold, #b8954a)", padding: "6px 12px", borderRadius: 2 }}>
              Ver caso completo →
            </Link>
          </div>

          {/* Foto portada */}
          <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[0].src} alt={FOTOS[0].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} priority />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            {FOTOS[0].caption} — AM Estética Dental, Puerto Madero
          </p>

          {/* Cuerpo */}
          {p(<>En odontología estética existe una regla que rara vez llega al paciente: una sonrisa armónica no depende únicamente de la forma o el color de los dientes, sino del equilibrio entre dos elementos que suelen tratarse por separado. Por un lado, los márgenes gingivales —el contorno de la encía que enmarca cada pieza—. Por el otro, los bordes incisales, el filo de los dientes anteriores que define cómo se ve la sonrisa en reposo y al hablar.</>)}
          {p(<>Un caso documentado por el equipo del Dr. Ariel Merino en {a("https://www.amesteticadental.com/dentista-puerto-madero", "su clínica de Puerto Madero")} ilustra con precisión ese principio. El tratamiento combinó dos procedimientos que, trabajados en conjunto, buscan lo que en la jerga del sector se describe como &ldquo;lo mejor de los dos mundos&rdquo;: buenos márgenes gingivales y buenos bordes incisales.</>)}

          {h3("Primero la encía, después el diente")}
          {p(<>El tratamiento comenzó por donde muchos no miran: la línea de la encía. Mediante gingivectomía láser se recontornearon los márgenes gingivales de las diez piezas anteriores, nivelando y armonizando ese marco que, cuando está desparejo, le resta simetría a cualquier sonrisa por más perfectos que sean los dientes.</>)}
          {p(<>La técnica con láser permite un recorte preciso del tejido con menor sangrado y una recuperación más predecible que los métodos convencionales. Es, en la práctica, la base invisible sobre la que se construye el resultado final: sin una línea gingival ordenada, cualquier trabajo posterior sobre los dientes parte en desventaja.</>)}

          {/* Comparativa */}
          <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[2].src} alt={FOTOS[2].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>{FOTOS[2].caption}</p>

          {h3("Micro diseño de sonrisa: cuando menos es más")}
          {p(<>Con la encía ya nivelada, la segunda etapa fue un micro diseño de sonrisa con {a("https://www.amesteticadental.com/carillas-de-resina", "carillas de resina")}. A diferencia de un diseño de sonrisa integral, aquí la intervención sobre cada diente es mínima: se trabaja el borde incisal, se corrigen pequeñas asimetrías de forma y se agrega volumen muy puntual en los lugares que lo necesitan.</>)}
          {p(<>Es una técnica deliberadamente conservadora. Se coloca muy poca resina, de manera sutil, casi sin tocar la estructura original del diente. Por eso no es una opción para todos los casos: según explican desde la clínica, el micro diseño de sonrisa está indicado solo en el pequeño porcentaje de pacientes —del orden del 5 al 10%— que llega con dientes muy conservados, sin caries, coronas ni restauraciones previas. Cuando la base natural es excelente, la mejor decisión clínica suele ser intervenir lo mínimo posible.</>)}

          {/* Perfil + frontal */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 48 }}>
            {[FOTOS[1], FOTOS[3]].map((f) => (
              <div key={f.src}>
                <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", borderRadius: 2, marginBottom: 8 }}>
                  <Image src={f.src} alt={f.alt} fill sizes="360px" style={{ objectFit: "cover" }} />
                </div>
                <p style={{ fontSize: 10, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>{f.caption}</p>
              </div>
            ))}
          </div>

          {h3("Dos técnicas, un solo resultado")}
          {p(<>La combinación de gingivectomía láser y micro diseño de sonrisa apunta a un resultado que se percibe como natural precisamente porque nadie puede señalar qué se hizo. No hay un cambio drástico que delate el procedimiento: hay una sonrisa más pulida, más simétrica, más refinada. El tipo de resultado que busca quien trabaja de cara al público y no quiere que su sonrisa &ldquo;se note&rdquo; retocada.</>)}
          {p(<>El caso se enmarca dentro de una tendencia creciente en odontología estética de alto nivel: la de los tratamientos mínimamente invasivos que priorizan la conservación del diente natural por sobre la transformación total. Una filosofía que, aplicada al {a("https://www.amesteticadental.com/diseno-de-sonrisa", "diseño de sonrisa")}, cambia la pregunta de &ldquo;cuánto se puede modificar&rdquo; a &ldquo;cuán poco es necesario tocar&rdquo;.</>)}

          {/* Ficha técnica */}
          <div style={{ background: "var(--paper-dim, #e8e4da)", borderRadius: 2, padding: "28px 32px", marginBottom: 48 }}>
            <h4 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 16, fontWeight: 400, marginBottom: 20, letterSpacing: "0.05em" }}>Ficha técnica del caso</h4>
            {[
              ["Profesional", "Dr. Ariel Merino"],
              ["Institución", "AM Estética Dental — Puerto Madero, Buenos Aires"],
              ["Procedimiento 1", "Gingivectomía láser en márgenes gingivales"],
              ["Procedimiento 2", "Micro diseño de sonrisa en resina"],
              ["Piezas", "Sector anterior (10 dientes)"],
              ["Enfoque", "Mínimamente invasivo, ultra conservador"],
              ["Indicación", "Pacientes con dientes muy conservados (5–10% de los casos)"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: 16, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.06)", marginBottom: 10, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--muted, #6b6560)", minWidth: 120 }}>{k}</span>
                <span style={{ fontSize: 13 }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Link al caso */}
          <div style={{ textAlign: "center", padding: "40px 0", borderTop: "1px solid var(--paper-dim, #e8e4da)" }}>
            <p style={{ fontSize: 13, color: "var(--muted, #6b6560)", marginBottom: 16 }}>
              El caso completo, con galería clínica y detalle de {a("https://www.amesteticadental.com/precio-carillas-dentales-buenos-aires", "valores y financiación")}, está documentado en AM Estética Dental.
            </p>
            <Link
              href="https://www.amesteticadental.com/casos/gingivectomia-laser-micro-diseno-sonrisa-resinas"
              target="_blank"
              style={{ display: "inline-block", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--paper, #f5f2ec)", background: "var(--ink, #0e0e0e)", padding: "14px 32px", textDecoration: "none", borderRadius: 2 }}
            >
              Ver caso en AM Estética Dental →
            </Link>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
