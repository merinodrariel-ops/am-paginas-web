import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Carillas vs Alineadores Invisibles | AM Estética Dental",
  description:
    "Qué conviene según tu caso: carillas dentales o alineadores invisibles. Diferencias reales en objetivo, tiempos, naturalidad y cuándo se combinan ambos tratamientos.",
  alternates: { canonical: "https://www.amesteticadental.com/carillas-vs-alineadores" },
  openGraph: {
    title: "Carillas vs Alineadores Invisibles | AM Estética Dental",
    description:
      "Guía clara para decidir entre carillas dentales y alineadores invisibles según el cambio que necesitás lograr.",
    url: "https://www.amesteticadental.com/carillas-vs-alineadores",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Qué corrigen las carillas y qué corrigen los alineadores?",
    respuesta:
      "Las carillas cambian forma, color, tamaño y pequeños detalles de posición visual. Los alineadores mueven realmente los dientes. Si el problema es estructural o de mordida, la respuesta suele estar en ortodoncia. Si el problema es estético superficial, las carillas pueden resolverlo mejor.",
  },
  {
    pregunta: "¿Qué conviene si mis dientes están torcidos?",
    respuesta:
      "Si hay una desalineación real, lo más lógico suele ser mover primero con alineadores. Después, si hace falta, se refinan forma y color con carillas. Tapar un problema de posición con carillas no siempre da el resultado más natural.",
  },
  {
    pregunta: "¿Qué es más rápido: carillas o alineadores?",
    respuesta:
      "Las carillas dan un cambio más rápido porque no mueven dientes: rediseñan la superficie visible. Los alineadores requieren más tiempo porque corrigen la base dental. La velocidad no siempre define qué conviene.",
  },
  {
    pregunta: "¿Se pueden combinar ambos tratamientos?",
    respuesta:
      "Sí, y muchas veces esa es la mejor estrategia. Primero se alinea la base con ortodoncia invisible y después se refinan proporciones, color y textura con carillas o lentes de contacto dental.",
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

export default function CarillasVsAlineadoresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-carbon text-crema font-manrope">
        <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">AM Estética Dental · Buenos Aires</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
              Carillas vs
              <br />
              <span className="font-cormorant italic text-oro">Alineadores Invisibles</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              La decisión correcta no depende de qué tratamiento suena mejor, sino de qué problema querés resolver: color y forma, o posición y mordida.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
              <h2 className="text-crema font-manrope font-medium text-base mb-4">Carillas dentales</h2>
              <p className="text-crema/60 font-manrope text-sm leading-relaxed">
                Ideales cuando querés cambiar color, forma, bordes, tamaño o simetría visual de la sonrisa. Resuelven rápido y con impacto alto cuando la base dental ya está relativamente bien posicionada.
              </p>
            </div>
            <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
              <h2 className="text-crema font-manrope font-medium text-base mb-4">Alineadores invisibles</h2>
              <p className="text-crema/60 font-manrope text-sm leading-relaxed">
                Son la opción lógica cuando hace falta mover realmente los dientes, corregir espacios, apiñamiento o problemas de mordida. Cambian la base, no solo la superficie estética.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { titulo: "Si querés cambiar color", ganador: "Carillas" },
              { titulo: "Si querés mover dientes", ganador: "Alineadores" },
              { titulo: "Si querés el mejor resultado final", ganador: "Muchas veces ambos" },
            ].map((item) => (
              <div key={item.titulo} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                <h3 className="text-crema font-manrope font-medium text-sm mb-2">{item.titulo}</h3>
                <p className="text-oro font-manrope text-sm">{item.ganador}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { nombre: "Carillas Dentales", href: "/carillas-dentales" },
              { nombre: "Alineadores Invisibles", href: "/alineadores-invisibles" },
              { nombre: "AM Aligners", href: "/alineadores-invisibles" },
            ].map((item) => (
              <Link key={item.nombre} href={item.href} className="border border-oro/15 rounded-2xl p-6 bg-carbon hover:border-oro/35 transition-colors group">
                <h3 className="text-crema font-manrope font-medium text-sm group-hover:text-oro transition-colors">{item.nombre}</h3>
                <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-3 block">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Cómo decidir entre{" "}
              <span className="font-cormorant italic text-oro">carillas y alineadores</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>
      </main>
    </>
  );
}
