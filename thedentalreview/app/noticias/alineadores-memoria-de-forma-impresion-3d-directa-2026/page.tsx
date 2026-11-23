import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import Firma, { autorSchema } from "../../components/Firma";

const CANONICAL = "https://www.thedentalreview.com/noticias/alineadores-memoria-de-forma-impresion-3d-directa-2026";
const OG_IMAGE = "https://res.cloudinary.com/drctvgyqd/image/upload/v1791888815/alineadores/alineador-impreso-3d-memoria-de-forma-am.jpg";
const VIDEO_360 = "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto,vc_auto/alineadores/alineador-impreso-3d-sin-ataches-360-am.mp4";

export const metadata: Metadata = {
  title: "Alineadores con memoria de forma: adiós al termoformado en 2026",
  description:
    "La manufactura aditiva directa de alineadores con resinas de memoria de forma resuelve el decaimiento elástico y elimina la dependencia de attachments.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Alineadores con memoria de forma: el salto del termoformado a la impresión 3D directa",
    description:
      "Polímeros con memoria de forma (SMP), activación por temperatura intraoral y calibración de espesor por vóxeles: la biomecánica ortodóncica entra en su fase aditiva definitiva.",
    url: CANONICAL,
    type: "article",
    images: [{ url: OG_IMAGE, alt: "Alineador transparente impreso en 3D con tecnología de memoria de forma" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Alineadores con memoria de forma: el salto del termoformado a la impresión 3D directa",
  description:
    "Análisis técnico sobre la transición de láminas termoplásticas prensadas a resinas termorreactivas bio-impresas en 3D, fuerza continua y eliminación de ataches.",
  image: [OG_IMAGE],
  author: autorSchema,
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  about: { "@type": "MedicalProcedure", name: "Ortodoncia digital con alineadores impresos en 3D" },
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const s = (obj: object) => JSON.stringify(obj);

export default function NotaAlineadoresMemoriaForma() {
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
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Tecnología & Ortodoncia</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Noviembre 2026</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            Alineadores con memoria de forma: el salto del termoformado a la impresión 3D directa
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            Durante un cuarto de siglo, la ortodoncia invisible dependió de un proceso analógico intermedio: termoformar láminas plásticas sobre modelos de resina. La llegada de los fotopolímeros con memoria de forma (SMP) elimina esa etapa y resuelve el mayor obstáculo biomecánico de la disciplina: el decaimiento de fuerza elástica.
          </p>

          <Firma seccion={"Innovación Clínica · Ortodoncia Digital"} />

          {/* Video Rotación 360 */}
          <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", borderRadius: 4, marginBottom: 24, background: "#000", border: "1px solid var(--paper-dim, #e8e4da)" }}>
            <video
              src={VIDEO_360}
              poster={OG_IMAGE}
              controls
              muted
              loop
              playsInline
              preload="metadata"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            Alineador impreso en 3D con resina termorreactiva — AM Estética Dental
          </p>

          {p(<>El principio biomecánico de la ortodoncia es constante: fuerzas ligeras y continuas generan remodelación ósea alveolar sin daño radicular ni reabsorción cementaria. Paradójicamente, la ortodoncia con alineadores transparentes tradicionales siempre operó con el perfil inverso: una fuerza inicial muy alta y un decaimiento abrupto.</>)}

          {h3("La curva de relajación: el talón de Aquiles del plástico prensado")}
          {p(<>Cuando una lámina de poliuretano o copoliéster (PETG) se termoforma al vacío, sus cadenas poliméricas quedan sometidas a tensiones residuales. Al calzar la placa en boca, el esfuerzo mecánico exigido para desplazar una pieza dental produce relajación de tensiones (*stress relaxation*).</>)}
          {p(<>Los estudios reológicos confirman que un alineador termoformado pierde entre el 50% y el 70% de su carga activa en las primeras 72 horas. Hacia el cuarto día, el alineador se comporta fundamentalmente como un dispositivo pasivo, dejando días de ineficiencia biológica hasta el próximo cambio de estadio.</>)}

          {h3("Polímeros con memoria de forma (SMP): respuesta a la temperatura corporal")}
          {p(<>Las resinas de impresión 3D directa de última generación incorporan una temperatura de transición vítrea (Tg) biológicamente modulada. El protocolo clínico diseñado para estos materiales aprovecha esta propiedad física:</>)}
          {p(<>1. <strong>Ablandamiento viscoelástico:</strong> Al sumergirse brevemente en agua tibia (por encima de los 45 °C), el módulo elástico disminuye momentáneamente, permitiendo un calce pasivo sin fricción destructiva sobre coronas o bordes incisales.</>)}
          {p(<>2. <strong>Recuperación termomecánica activa:</strong> Al alcanzar el equilibrio con la temperatura intraoral (36.5 °C a 37 °C), el polímero recupera su módulo de rigidez y busca activamente su forma programada en el archivo CAD. Esta transición sostiene una meseta de fuerza continua durante todo el ciclo de uso.</>)}

          {h3("La eliminación progresiva de los attachments vestibulares")}
          {p(<>Uno de los reclamos más frecuentes de los pacientes que optan por ortodoncia transparente es el impacto estético de los <em>ataches</em> (bloques de composite adheridos al esmalte vestibular para que la lámina prensada tenga de dónde traccionar).</>)}
          {p(<>La impresión 3D directa elimina la limitación geométrica del desmolde. Mientras que el termoformado requiere ángulos de salida para poder retirar la lámina del molde físico, una impresora 3D puede generar socavados anatómicos negativos y márgenes festoneados subgingivales con precisión de 25 micrones. Esa retención intrínseca hace innecesarios los attachments en la gran mayoría de las indicaciones.</>)}

          {h3("Espesor variable por vóxeles")}
          {p(<>En una lámina prensada convencional, el grosor es uniforme en toda la placa (típicamente 0.75 mm), con el agravante de que se adelgaza en las cúspides al estirarse durante el prensado al vacío. La impresión 3D directa invierte este paradigma:</>)}
          {p(<>El clínico puede programar digitalmente un grosor de 0.5 mm en el sector anteroinferior para movimientos suaves y confort fonético, y elevar a 0.9 mm o 1.1 mm el espesor en sectores premolares o molares para generar momentos de fuerza mayores sobre raíces multirradiculares.</>)}

          {h3("Integración en la práctica clínica")}
          {p(<>Clínicas con laboratorio digital propio, como {a("https://www.amesteticadental.com/alineadores-invisibles-impresos-3d", "AM Estética Dental")} en Puerto Madero, ya han incorporado esta tecnología al flujo de diagnóstico y tratamiento. Según reporta el {a("https://www.arielmerino.com/ia-en-la-consulta/alineadores-con-memoria-de-forma", "Dr. Ariel Merino")}, la combinación de fuerza ininterrumpida y espesores customizados permite comprimir entre un 30% y un 40% los tiempos totales de tratamiento con respecto a los alineadores termoformados.</>)}
          {p(<>El consenso emergente en la ortodoncia digital es claro: el termoformado sobre modelos de resina fue una solución de transición. El futuro de la ortodoncia transparente es aditivo, directo y con memoria de forma.</>)}

          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "24px 0", marginTop: 48 }}>
            <p style={{ fontSize: 13, color: "var(--muted, #6b6560)" }}>
              <strong>Seguir leyendo:</strong> {a("/noticias/resinas-3d-carillas-dentales-fin-tecnica-manual-2026", "Resinas impresas en 3D en estética dental")} · {a("/noticias/ia-diseno-sonrisa-digital-dsd-2026", "Inteligencia artificial en diseño de sonrisa")}
            </p>
          </div>

        </main>

        <SiteFooter />

      </div>
    </>
  );
}
