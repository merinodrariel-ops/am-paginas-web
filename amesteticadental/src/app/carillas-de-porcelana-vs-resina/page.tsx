import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Carillas de Porcelana vs Resina | AM Estética Dental",
  description:
    "Qué cambia entre carillas de porcelana y carillas de resina: duración, naturalidad, costo, mantenimiento y en qué casos conviene cada una.",
  alternates: { canonical: "https://www.amesteticadental.com/carillas-de-porcelana-vs-resina" },
  openGraph: {
    title: "Carillas de Porcelana vs Resina | AM Estética Dental",
    description:
      "Guía comparativa entre carillas de porcelana y resina para elegir según tu caso, presupuesto y expectativa estética.",
    url: "https://www.amesteticadental.com/carillas-de-porcelana-vs-resina",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Qué dura más: porcelana o resina?",
    respuesta:
      "La porcelana dura más. Bien hecha y bien cuidada, puede mantenerse entre 10 y 20 años. La resina suele requerir más mantenimiento y su vida útil típica es menor.",
  },
  {
    pregunta: "¿Qué se ve más natural?",
    respuesta:
      "En términos ópticos, la porcelana suele imitar mejor la translucidez del esmalte. Aun así, una buena resina bien indicada puede verse muy bien. El punto no es solo el material, sino cuándo conviene cada uno.",
  },
  {
    pregunta: "¿La resina es siempre la opción barata?",
    respuesta:
      "Tiene un ticket inicial menor, pero no siempre es la mejor inversión a largo plazo. Si el objetivo es máxima estabilidad y refinamiento, la porcelana suele justificar la diferencia.",
  },
  {
    pregunta: "¿Qué conviene para una sonrisa completa?",
    respuesta:
      "Depende del caso y del nivel de exigencia estética. Para transformaciones más estables y sofisticadas, la porcelana suele ser la mejor elección. Para ajustes puntuales o tratamientos más acotados, la resina puede tener mucho sentido.",
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

export default function PorcelanaVsResinaPage() {
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
              Carillas de Porcelana
              <br />
              <span className="font-cormorant italic text-oro">vs Resina</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              La comparación correcta no es cuál “sirve más”, sino cuál conviene más según tu caso, tu presupuesto y el nivel de exigencia estética que estás buscando.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
              <h2 className="text-crema font-manrope font-medium text-base mb-4">Porcelana</h2>
              <ul className="space-y-3 text-crema/60 font-manrope text-sm leading-relaxed">
                <li>Mayor duración</li>
                <li>Mejor estabilidad de color</li>
                <li>Acabado más refinado</li>
                <li>Ideal para casos premium y transformaciones completas</li>
              </ul>
            </div>
            <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
              <h2 className="text-crema font-manrope font-medium text-base mb-4">Resina</h2>
              <ul className="space-y-3 text-crema/60 font-manrope text-sm leading-relaxed">
                <li>Menor inversión inicial</li>
                <li>Resolución más rápida</li>
                <li>Buena opción para ajustes puntuales</li>
                <li>Puede requerir más mantenimiento con el tiempo</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { nombre: "Carillas Dentales", href: "/carillas-dentales" },
              { nombre: "Precio de Carillas", href: "/precio-carillas-dentales-buenos-aires" },
              { nombre: "Lentes de Contacto Dental", href: "/lentes-de-contacto-dental" },
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
              Cómo elegir entre{" "}
              <span className="font-cormorant italic text-oro">porcelana y resina</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>
      </main>
    </>
  );
}
