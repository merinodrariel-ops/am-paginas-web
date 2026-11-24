import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import { autorSchema } from "../../components/Firma";

const CANONICAL = "https://www.thedentalreview.com/casos/20-carillas-ceramicas-tiempo-record-flujo-digital-3d-fresado-vhf";

export const metadata: Metadata = {
  title: "20 carillas cerámicas en 5 días: protocolo CAD/CAM de alta precisión",
  description:
    "Análisis técnico del flujo 100% digital del Dr. Ariel Merino: planificación 2D, encerado 3D y fresado robotizado VHF en disilicato de litio IPS e.max de 0.3 mm para turismo dental.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "20 carillas cerámicas en 5 días: protocolo CAD/CAM de alta precisión",
    description:
      "Cómo resolver arcada superior e inferior en 5 días para pacientes que viajan desde el interior o el exterior. Análisis clínico por The Dental Review.",
    url: CANONICAL,
    type: "article",
    images: [{ url: "/images/casos/mendoza/caso-mendoza-antes-despues-carillas-porcelana-rostro-labios-dr-ariel-merino.webp" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "20 carillas cerámicas en 5 días: protocolo CAD/CAM de alta precisión y flujo digital 3D",
  description:
    "Disertación clínica y técnica sobre la rehabilitación estética integral de ambas arcadas en tiempo récord mediante encerado virtual 3D, fresado VHF y disilicato de litio IPS e.max.",
  author: autorSchema,
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  about: { "@type": "MedicalProcedure", name: "Rehabilitación estética con carillas cerámicas CAD/CAM" },
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const FOTOS = [
  { src: "/images/casos/mendoza/caso-mendoza-antes-despues-carillas-porcelana-rostro-labios-dr-ariel-merino.webp", alt: "Antes y después de 20 carillas cerámicas en 5 días — Dr. Ariel Merino", caption: "Antes y después — rostro y macro de la sonrisa" },
  { src: "/images/casos/mendoza/caso-mendoza-planificacion-digital-2d-3d-fresado-vhf-resultado-real.webp", alt: "Secuencia del flujo digital: diseño 2D DSD, encerado virtual 3D STL y resultado final real en boca", caption: "Flujo 100% digital 3D: DSD, malla STL y resultado final" },
  { src: "/images/casos/mendoza/caso-mendoza-antes-despues-rostro-completo.webp", alt: "Rostro completo antes y después de 20 carillas cerámicas en paciente de Mendoza", caption: "Transformación facial armónica — paciente de Mendoza" },
  { src: "/images/casos/mendoza/caso-mendoza-antes-despues-macro-sonrisa-carillas.webp", alt: "Macro de la sonrisa antes y después: adaptación marginal y translucidez en disilicato de litio", caption: "Macro dental — espesor de 0.3 mm e integración gingival" },
];

const s = (obj: object) => JSON.stringify(obj);

export default function ArticuloCarillasMendoza() {
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
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Odontología Digital · Caso Clínico</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Noviembre 2026</span>
          </div>

          {/* Título */}
          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            20 carillas cerámicas en 5 días: el protocolo CAD/CAM de alta precisión
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            Un paciente abogado viajó desde Mendoza a Buenos Aires. La exigencia: transformar ambas arcadas en menos de una semana sin tallado agresivo. Cómo la integración de escaneo intraoral, encerado digital 3D y fresadoras alemanas VHF redefine el turismo dental de alta gama.
          </p>

          {/* Autoría */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Dr. Ariel Merino · MN 34.869</div>
              <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Caso clínico: AM Estética Dental · Puerto Madero</div>
            </div>
            <Link href="https://www.amesteticadental.com/casos/20-carillas-ceramicas-tiempo-record-paciente-mendoza" target="_blank" style={{ fontSize: 11, color: "var(--gold, #b8954a)", textDecoration: "none", letterSpacing: "0.1em", border: "1px solid var(--gold, #b8954a)", padding: "6px 12px", borderRadius: 2 }}>
              Ver caso en AM Estética →
            </Link>
          </div>

          {/* Foto portada */}
          <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[0].src} alt={FOTOS[0].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} priority />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            {FOTOS[0].caption} — Dr. Ariel Merino, Puerto Madero
          </p>

          {/* Cuerpo */}
          {p(<>El turismo dental y la atención de pacientes que viajan desde el interior del país plantean un desafío logístico que tradicionalmente colisionaba con los tiempos de la cerámica dental artesanal. Una rehabilitación estética de 20 piezas (10 superiores y 10 inferiores) demandaba entre 3 y 6 semanas entre impresiones convencionales, confección en laboratorio externo y sucesivas pruebas clínicas.</>)}
          {p(<>Sin embargo, la convergencia del diagnóstico fotográfico facial, los softwares de diseño CAD y los centros de mecanizado CNC integrados a la propia clínica ha permitido quebrar esa barrera. En este caso clínico documentado por el Dr. Ariel Merino en su clínica de Puerto Madero ({a("https://www.amesteticadental.com", "AM Estética Dental")}), el tratamiento completo se ejecutó en <strong>exactamente cinco días</strong>.</>)}

          {h3("El caso clínico: paciente profesional de Mendoza")}
          {p(<>El paciente, un abogado en ejercicio de la provincia de Mendoza, acudió a la consulta con desgaste de bordes incisales, asimetrías de plano y una pérdida de volumen que envejecía la sonrisa. Su agenda laboral requería una solución concentrada en una sola semana de viaje a Buenos Aires, sin comprometer la biología del esmalte dental ni aceptar restauraciones provisionales frágiles.</>)}
          {p(<>La planificación se estructuró en base a carillas tipo lentes de contacto en disilicato de litio IPS e.max de apenas <strong>0.3 mm de espesor</strong>, un grosor que permite una intervención ultra conservadora y preserva intacto el esmalte natural para una adhesión micromecánica superior.</>)}

          {/* Secuencia técnica 3D */}
          <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[1].src} alt={FOTOS[1].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            {FOTOS[1].caption} — Análisis del flujo digital paso a paso
          </p>

          {h3("La secuencia de tres pasos: 2D, 3D y Real")}
          {p(<>El registro visual del caso expone con nitidez las tres capas del flujo digital contemporáneo:</>)}
          <ol style={{ paddingLeft: 24, marginBottom: 28, fontSize: 16, lineHeight: 1.8, color: "var(--ink, #0e0e0e)" }}>
            <li style={{ marginBottom: 14 }}>
              <strong>2D (Diseño Digital de Sonrisa):</strong> Sobre la fotografía clínica inicial se trazan las líneas guía biométricas (ejes axiales, alturas gingivales y curvatura del labio inferior), definiendo la silueta ideal que armoniza con los rasgos faciales.
            </li>
            <li style={{ marginBottom: 14 }}>
              <strong>3D (Encerado virtual en malla STL):</strong> El diseño 2D se proyecta sobre el escaneo intraoral tridimensional. Mediante software CAD especializado, se genera una malla digital poligonal de alta densidad que define la textura, las troneras y el espesor exacto de 0.3 mm.
            </li>
            <li style={{ marginBottom: 14 }}>
              <strong>Real (Fresado robótico VHF y cementación):</strong> Los archivos STL calibrados son enviados a la fresadora alemana VHF. El mecanizado por control numérico talla los bloques cerámicos de disilicato de litio con una tolerancia inferior a las 10 micras, garantizando un ajuste marginal insuperable.
            </li>
          </ol>

          {/* Comparativa Facial */}
          <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[2].src} alt={FOTOS[2].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            {FOTOS[2].caption} — Dr. Ariel Merino
          </p>

          {h3("Adhesión y predictibilidad a largo plazo")}
          {p(<>Al mantener el espesor en 0.3 mm, la preparación dental es mínima o nula (técnica no-prep / micro-prep). La adhesión de la cerámica de disilicato de litio se realiza directamente sobre el esmalte adamantino, donde la fuerza de unión de los sistemas de grabado con ácido fluorhídrico y silano alcanza su máxima expresión clínica.</>)}
          {p(<>El resultado no es solo la rapidez de entrega: es la integración periodontal inmediata, la ausencia de sensibilidad postoperatoria y la resistencia al desgaste que el paciente experimenta desde el primer día.</>)}

          {/* Conclusión editorial */}
          <div style={{ marginTop: 48, padding: "28px 24px", background: "var(--paper-dim, #f5f2eb)", borderLeft: "3px solid var(--gold, #b8954a)" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold, #b8954a)", marginBottom: 8 }}>Conclusión editorial</div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--ink, #0e0e0e)", margin: 0 }}>
              Casos como el del paciente de Mendoza demuestran que la digitalización no es un atajo que reduce la calidad, sino la única vía que permite elevar la precisión y la predictibilidad mientras se reduce el tiempo total de tratamiento a una fracción de lo habitual. Para pacientes del interior y del exterior, el estándar de Puerto Madero es hoy una realidad accesible en una sola semana.
            </p>
          </div>

          {/* Enlaces relacionados */}
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--paper-dim, #e8e4da)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <Link href="/" style={{ fontSize: 12, color: "var(--gold, #b8954a)", textDecoration: "none" }}>
              ← Volver a The Dental Review
            </Link>
            <Link href="https://www.amesteticadental.com/turismo-dental" target="_blank" style={{ fontSize: 12, color: "var(--muted, #6b6560)", textDecoration: "none" }}>
              Protocolo Turismo Dental AM →
            </Link>
          </div>

        </main>

        <SiteFooter />
      </div>
    </>
  );
}
