import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Invisalign en Buenos Aires | AM Estética Dental",
  description:
    "Invisalign en Puerto Madero, Buenos Aires. Planificación digital, seguimiento clínico y criterio estético para casos de ortodoncia invisible que necesitan precisión y naturalidad.",
  alternates: {
    canonical: "https://www.amesteticadental.com/invisalign",
  },
  openGraph: {
    title: "Invisalign en Buenos Aires | AM Estética Dental",
    description:
      "Tratamiento Invisalign en Puerto Madero. Evaluamos cuándo la marca líder es la mejor opción y cómo integrarla a un diseño de sonrisa natural.",
    url: "https://www.amesteticadental.com/invisalign",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Qué son los alineadores invisibles?",
    respuesta:
      "Los alineadores invisibles funcionan mediante una secuencia de férulas removibles diseñadas digitalmente para mover los dientes de forma progresiva y controlada.",
  },
  {
    pregunta: "¿AM Aligners es mejor que otros alineadores?",
    respuesta:
      "Depende del caso. El resultado final no depende solo del sistema, sino del diagnóstico, la planificación y el seguimiento clínico. En AM evaluamos si AM Aligners es la mejor opción para vos o si conviene otra alternativa de alineadores invisibles según tu caso.",
  },
  {
    pregunta: "¿Para qué casos están indicados los alineadores invisibles?",
    respuesta:
      "Puede resolver apiñamiento, espacios, sobremordida, mordida cruzada y muchos casos moderados. También es una gran herramienta previa a carillas o diseño de sonrisa cuando primero hace falta ordenar la base dental.",
  },
  {
    pregunta: "¿Cuánto dura el tratamiento con AM Aligners?",
    respuesta:
      "Hay casos simples que se resuelven en 3 a 6 meses y otros más complejos que pueden tomar 12 a 18 meses. La simulación digital define desde el inicio la duración estimada y la cantidad de alineadores.",
  },
  {
    pregunta: "¿Cuánto cuestan los alineadores invisibles en Buenos Aires?",
    respuesta:
      "El costo depende de la complejidad del caso, la cantidad de alineadores y el tiempo de tratamiento. En la evaluación inicial analizamos tu situación, te mostramos si AM Aligners es lo indicado y te damos un presupuesto exacto con financiación disponible.",
  },
  {
    pregunta: "¿Se pueden combinar AM Aligners y carillas dentales?",
    respuesta:
      "Sí. De hecho, en muchos casos ese es el orden ideal: primero corregimos posición con alineadores invisibles y después refinamos forma, color y proporciones con carillas o lentes de contacto dental.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.pregunta,
    acceptedAnswer: { "@type": "Answer", text: f.respuesta },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "AM Aligners",
  description:
    "Ortodoncia invisible con AM Aligners en Puerto Madero, Buenos Aires, integrada a planificación digital y seguimiento clínico.",
  procedureType: "Therapeutic",
  url: "https://www.amesteticadental.com/invisalign",
  provider: {
    "@type": "Dentist",
    name: "AM Estética Dental",
    url: "https://www.amesteticadental.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Camila O'Gorman 412, Oficina 101",
      addressLocality: "Puerto Madero",
      addressRegion: "CABA",
      postalCode: "C1107DED",
      addressCountry: "AR",
    },
  },
};

const WA_LINK =
  "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20interesan%20los%20AM%20Aligners%20en%20Buenos%20Aires.";

export default function InvisalignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Navbar />

      <main className="bg-carbon text-crema font-manrope">
        <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
              AM Estética Dental · Puerto Madero · Buenos Aires
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
              AM Aligners
              <br />
              <span className="font-cormorant italic text-oro">en Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              Nuestro sistema de alineadores invisibles, integrado a una planificación clínica seria. Evaluamos cuándo AM Aligners es la mejor opción y cómo se combina con un diseño de sonrisa natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
              >
                Consultar por AM Aligners →
              </a>
              <Link
                href="/alineadores-invisibles"
                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
              >
                ← Ver alineadores invisibles
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
              {[
                { v: "22 h", l: "Uso diario" },
                { v: "Digital", l: "Planificación 3D" },
                { v: "Forbes", l: "Argentina" },
                { v: "Puerto Madero", l: "CABA" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                  <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
              <h2 className="text-crema font-manrope font-medium text-base mb-3">Lo que aporta el sistema</h2>
              <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                AM Aligners trabaja sobre planificación digital, secuencia controlada de movimientos y seguimiento clínico cercano. Para muchos pacientes eso suma previsibilidad, comodidad y discreción.
              </p>
            </div>
            <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
              <h2 className="text-crema font-manrope font-medium text-base mb-3">Lo que realmente define el resultado</h2>
              <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                El diagnóstico, el seguimiento y el criterio clínico. Una gran marca no reemplaza una buena indicación. Nosotros evaluamos ambas cosas: sistema y caso.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Ideal para</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Casos donde querés{" "}
              <span className="font-cormorant italic text-oro">alinear sin mostrar brackets</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Apiñamiento y espacios visibles",
                "Preparación previa a carillas o diseño de sonrisa",
                "Adultos que quieren discreción y control digital",
              ].map((item) => (
                <div key={item} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft text-crema/70 font-manrope text-sm leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-crema font-manrope font-medium text-lg mb-1">¿Querés saber si AM Aligners es lo indicado para tu caso?</p>
              <p className="text-crema/55 font-manrope text-sm">Lo evaluamos en consulta y te mostramos el plan antes de empezar.</p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors flex-none"
            >
              Pedir evaluación →
            </a>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                Todo sobre{" "}
                <span className="font-cormorant italic text-oro">AM Aligners</span>
              </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">También puede interesarte</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { nombre: "Alineadores Invisibles", desc: "Panorama general de ortodoncia invisible y planificación digital.", href: "/alineadores-invisibles" },
                { nombre: "Diseño de Sonrisa", desc: "Cómo se integra AM Aligners a una transformación estética completa.", href: "/diseno-de-sonrisa" },
                { nombre: "Carillas Dentales", desc: "Para casos que requieren refinamiento final de forma y color.", href: "/carillas-dentales" },
              ].map((t) => (
                <Link
                  key={t.nombre}
                  href={t.href}
                  className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/35 transition-colors group"
                >
                  <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{t.nombre}</h3>
                  <p className="text-crema/55 font-manrope text-xs leading-relaxed">{t.desc}</p>
                  <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-3 block">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
