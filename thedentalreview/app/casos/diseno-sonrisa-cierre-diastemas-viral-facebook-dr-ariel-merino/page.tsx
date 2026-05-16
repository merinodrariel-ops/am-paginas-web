import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const CANONICAL = "https://www.thedentalreview.com/casos/diseno-sonrisa-cierre-diastemas-viral-facebook-dr-ariel-merino";
const CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas";

export const metadata: Metadata = {
  title: "El caso viral de diseño de sonrisa que recorrió el mundo | Dr. Ariel Merino",
  description: "Análisis clínico del caso de diseño de sonrisa con cierre de diastemas y dientes conoidos del Dr. Ariel Merino, que se viralizó en Facebook antes de Instagram y fue uno de los primeros en YouTube. 10 carillas AM lentes de contacto dental de 0.2mm.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "El caso viral de diseño de sonrisa — Dr. Ariel Merino | The Dental Review",
    description: "Caso histórico de diastemas y dientes conoidos resuelto con 10 lentes de contacto dental de 0.2mm. Reconocido internacionalmente.",
    url: CANONICAL,
    type: "article",
    images: [{ url: `${CDN}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires` }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "El caso viral de diseño de sonrisa con cierre de diastemas — Dr. Ariel Merino",
  description: "Análisis del caso histórico de diastemas y dientes conoidos del Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
  author: { "@type": "Person", name: "Dr. Ariel Merino", url: "https://www.arielmerino.com" },
  publisher: { "@type": "Organization", name: "The Dental Review", url: "https://www.thedentalreview.com" },
  about: { "@type": "MedicalProcedure", name: "Diseño de sonrisa con carillas cerámicas y cierre de diastemas" },
  inLanguage: "es-AR",
  mainEntityOfPage: CANONICAL,
};

const FOTOS = [
  { src: `${CDN}/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires`, alt: "Antes y después diseño de sonrisa con cierre de diastemas — Dr. Ariel Merino", caption: "Antes y después — rostro" },
  { src: `${CDN}/cierre-diastemas-intraoral-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero`, alt: "Cierre de diastemas intraoral — carillas AM — Dr. Ariel Merino", caption: "Comparativa intraoral" },
  { src: `${CDN}/fragmentos-ceramicos-lentes-contacto-dental-02mm-carillas-am-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Fragmentos cerámicos 0.2mm lentes de contacto dental AM — Dr. Ariel Merino", caption: "Fragmentos cerámicos — 0.2mm de espesor" },
  { src: `${CDN}/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental`, alt: "Lente de contacto dental escala en dedo — Dr. Ariel Merino AM Estética Dental", caption: "Escala real — en la yema del dedo" },
  { src: `${CDN}/modelos-yeso-antes-despues-planificacion-diseno-sonrisa-diastemas-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Modelos de yeso planificación diseño de sonrisa — Dr. Ariel Merino", caption: "Modelos de yeso — planificación" },
  { src: `${CDN}/cementado-carillas-ceramicas-diseno-sonrisa-dia-cementado-dr-ariel-merino-am-estetica-dental-buenos-aires`, alt: "Día del cementado carillas AM — Dr. Ariel Merino AM Estética Dental", caption: "Día del cementado — de a dos carillas" },
];

const s = (obj: object) => JSON.stringify(obj);

export default function ArticuloDiastemas() {
  const p = (text: string) => (
    <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink, #0e0e0e)", marginBottom: 24 }}>{text}</p>
  );
  const h3 = (text: string) => (
    <h3 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 22, fontWeight: 400, marginBottom: 16, marginTop: 40 }}>{text}</h3>
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
            <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>Caso Clínico</span>
            <span style={{ color: "var(--paper-dim, #e8e4da)" }}>·</span>
            <span style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em" }}>Abril 2026</span>
          </div>

          {/* Título */}
          <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            El caso que se viralizó antes de que existiera Instagram
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted, #6b6560)", marginBottom: 32 }}>
            Diseño de sonrisa con cierre de diastemas y dientes conoidos. Diez carillas AM lentes de contacto dental de 0.2mm. Uno de los primeros casos de esta especialidad publicados en YouTube, reconocido por profesores de odontología de todo el mundo.
          </p>

          {/* Autoría */}
          <div style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", borderBottom: "1px solid var(--paper-dim, #e8e4da)", padding: "16px 0", marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>Redacción TDR</div>
              <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>Revisión clínica: Dr. Ariel Merino</div>
            </div>
            <Link href="https://www.amesteticadental.com/casos/diseno-sonrisa-cierre-diastemas-dientes-conoidos" target="_blank" style={{ fontSize: 11, color: "var(--gold, #b8954a)", textDecoration: "none", letterSpacing: "0.1em", border: "1px solid var(--gold, #b8954a)", padding: "6px 12px", borderRadius: 2 }}>
              Ver caso completo →
            </Link>
          </div>

          {/* Foto portada */}
          <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[0].src} alt={FOTOS[0].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} priority />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>
            {FOTOS[0].caption} — @drarielmerino · AM Estética Dental
          </p>

          {/* Cuerpo del artículo */}
          {h3("Un caso que llegó antes de su tiempo")}
          {p("Cuando el Dr. Ariel Merino publicó este caso en su canal de YouTube, la plataforma apenas empezaba a ser adoptada como medio de difusión profesional en odontología. Instagram no existía. TikTok tampoco. Sin embargo, el video del antes y después de este diseño de sonrisa con cierre de diastemas recorrió el mundo en cuestión de días.")}
          {p("Profesores de odontología de distintos países contactaron al Dr. Merino para felicitarlo, no solo por el resultado clínico sino por la forma de documentarlo y comunicarlo. Fue uno de los primeros casos de diseño de sonrisa en quedar registrado en video en YouTube, en una época donde la mayoría de los profesionales aún dependía de congresos y revistas en papel.")}

          {h3("El diagnóstico: diastemas estructurales y dientes conoidos")}
          {p("El paciente presentaba dientes conoidos —pequeños, en forma de cono— con diastemas pronunciados entre ellos. La característica clave de esta condición es que los espacios entre los dientes no son consecuencia de una mala posición dental corregible con ortodoncia: son estructurales.")}
          {p("Aunque se realizara un tratamiento ortodóntico para cerrar los espacios temporariamente, las proporciones dentales no cambiarían. Sin carillas o restauraciones que modifiquen el volumen de cada pieza, los diastemas reaparecerían. La solución definitiva requería rehabilitación estética.")}

          {/* Foto intraoral */}
          <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", borderRadius: 2, marginBottom: 12 }}>
            <Image src={FOTOS[1].src} alt={FOTOS[1].alt} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginBottom: 48, textTransform: "uppercase" }}>{FOTOS[1].caption}</p>

          {h3("La solución: lentes de contacto dental AM de 0.2mm")}
          {p("El Dr. Merino planificó un diseño de sonrisa de diez piezas con carillas AM ultra delgadas —denominadas lentes de contacto dental por su extraordinaria finura: entre 0.2 y 0.3mm de espesor. Esta técnica permite modificar forma, color y cierre de espacios con un desgaste mínimo o nulo de la estructura dentaria natural.")}
          {p("El proceso comenzó con la toma de modelos de yeso para planificar digitalmente el resultado antes de tocar ningún diente. La selección de color se realizó en consulta directa con el paciente para garantizar un resultado natural. El día del cementado, las carillas se colocaron de a dos, controlando la oclusión en cada paso.")}

          {/* Fragmentos cerámicos */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 48 }}>
            {FOTOS.slice(2, 4).map((f) => (
              <div key={f.src}>
                <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", borderRadius: 2, marginBottom: 8 }}>
                  <Image src={f.src} alt={f.alt} fill sizes="360px" style={{ objectFit: "cover" }} />
                </div>
                <p style={{ fontSize: 10, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>{f.caption}</p>
              </div>
            ))}
          </div>

          {h3("El resultado y su impacto")}
          {p("El resultado fue una sonrisa armoniosa, con proporciones naturales y sin ningún rastro visual del procedimiento. El paciente describió el cambio como una transformación completa de cómo se veía a sí mismo. El equipo clínico consideró este caso como uno de sus trabajos más representativos de los inicios de la carrera del Dr. Merino.")}
          {p("La resonancia internacional que tuvo este caso marcó el comienzo de una manera de documentar y difundir odontología estética que hoy es práctica habitual en el sector, pero que en ese momento era prácticamente inédita en el ámbito hispanohablante.")}

          {/* Video */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", borderRadius: 2 }}>
              <iframe
                src="https://www.youtube.com/embed/RIUEvt7Zq3c"
                title="Caso diseño de sonrisa cierre de diastemas — Dr. Ariel Merino"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            <p style={{ fontSize: 11, color: "var(--muted, #6b6560)", letterSpacing: "0.1em", textAlign: "center", marginTop: 10, textTransform: "uppercase" }}>
              Video original — uno de los primeros casos de diseño de sonrisa en YouTube
            </p>
          </div>

          {/* Ficha técnica */}
          <div style={{ background: "var(--paper-dim, #e8e4da)", borderRadius: 2, padding: "28px 32px", marginBottom: 48 }}>
            <h4 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 16, fontWeight: 400, marginBottom: 20, letterSpacing: "0.05em" }}>Ficha técnica del caso</h4>
            {[
              ["Profesional", "Dr. Ariel Merino"],
              ["Institución", "AM Estética Dental — Puerto Madero, Buenos Aires"],
              ["Diagnóstico", "Dientes conoidos con diastemas estructurales"],
              ["Tratamiento", "10 carillas AM lentes de contacto dental"],
              ["Espesor", "0.2 – 0.3 mm"],
              ["Técnica", "Mínimamente invasiva, desgaste controlado"],
              ["Duración", "10 días"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: 16, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.06)", marginBottom: 10, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--muted, #6b6560)", minWidth: 100 }}>{k}</span>
                <span style={{ fontSize: 13 }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Link al caso */}
          <div style={{ textAlign: "center", padding: "40px 0", borderTop: "1px solid var(--paper-dim, #e8e4da)" }}>
            <p style={{ fontSize: 13, color: "var(--muted, #6b6560)", marginBottom: 16 }}>
              Documentación clínica completa con galería de 11 imágenes
            </p>
            <Link
              href="https://www.amesteticadental.com/casos/diseno-sonrisa-cierre-diastemas-dientes-conoidos"
              target="_blank"
              style={{ display: "inline-block", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--paper, #f5f2ec)", background: "var(--ink, #0e0e0e)", padding: "14px 32px", textDecoration: "none", borderRadius: 2 }}
            >
              Ver caso en AM Estética Dental →
            </Link>
          </div>

        </main>

        <footer style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "24px", marginTop: 60 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/" style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 15, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}>The Dental Review</Link>
            <span style={{ fontSize: 10, color: "var(--muted, #6b6560)", letterSpacing: "0.2em", textTransform: "uppercase" }}>© 2026</span>
          </div>
        </footer>

      </div>
    </>
  );
}
