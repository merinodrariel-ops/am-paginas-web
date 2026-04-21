import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Carillas sin Desgaste en Buenos Aires | AM Estética Dental",
  description:
    "Carillas sin desgaste en Puerto Madero, Buenos Aires. Evaluamos cuándo realmente se puede trabajar sin preparar el diente y cuándo conviene otra alternativa más honesta y natural.",
  alternates: {
    canonical: "https://www.amesteticadental.com/carillas-sin-desgaste",
  },
  openGraph: {
    title: "Carillas sin Desgaste en Buenos Aires | AM Estética Dental",
    description:
      "No todos los casos califican para carillas sin desgaste. Diagnóstico honesto, diseño natural y criterio clínico en Puerto Madero.",
    url: "https://www.amesteticadental.com/carillas-sin-desgaste",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Qué significa exactamente carillas sin desgaste?",
    respuesta:
      "Significa que, en determinados casos, se puede mejorar la sonrisa sin tallar ni preparar el esmalte de forma visible. No es una promesa universal: depende de la posición del diente, del espacio disponible y del tipo de cambio que buscás.",
  },
  {
    pregunta: "¿Todos los pacientes pueden hacerse carillas sin desgaste?",
    respuesta:
      "No. Si el diente está muy salido, girado, desgastado en exceso o si hace falta cambiar mucho volumen, una opción completamente sin desgaste puede no ser la mejor. En esos casos es más honesto indicar una preparación mínima o incluso ordenar primero con alineadores.",
  },
  {
    pregunta: "¿Las carillas sin desgaste son lo mismo que los lentes de contacto dental?",
    respuesta:
      "Muchas veces sí se solapan, porque los lentes de contacto dental suelen ser la solución indicada cuando el caso permite trabajar sin preparación visible. Pero el nombre comercial no reemplaza el diagnóstico. Primero definimos si el caso califica; después elegimos el tipo exacto de restauración.",
  },
  {
    pregunta: "¿Se ven naturales?",
    respuesta:
      "Bien indicadas, sí. De hecho, su mayor fortaleza es que respetan la estructura original del diente y permiten un resultado muy sutil. El problema aparece cuando se fuerzan en casos que no corresponden. Ahí es donde el resultado deja de verse natural.",
  },
  {
    pregunta: "¿Cómo sé si mi caso permite una opción sin desgaste?",
    respuesta:
      "En la evaluación inicial analizamos mordida, espesor del esmalte, posición de los dientes y el cambio estético buscado. Si podés resolverlo sin desgaste, te lo decimos. Si no, te explicamos cuál es la alternativa más conservadora para lograr un buen resultado.",
  },
  {
    pregunta: "¿Cuánto cuestan las carillas sin desgaste?",
    respuesta:
      "El presupuesto depende del número de piezas, el diseño del caso y el laboratorio. Trabajamos con valores en USD y financiación propia. Primero definimos si tu caso realmente califica para esta técnica; después te damos un presupuesto exacto.",
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
  "@type": "Service",
  name: "Carillas sin Desgaste",
  serviceType: "Odontología Estética",
  description:
    "Evaluación y resolución conservadora con carillas ultradelgadas o alternativas de mínima intervención cuando el caso lo permite.",
  provider: {
    "@type": "Dentist",
    name: "AM Estética Dental",
    url: "https://www.amesteticadental.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Camila O'Gorman 412, Oficina 101",
      addressLocality: "Puerto Madero",
      addressRegion: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
  },
  areaServed: { "@type": "City", name: "Buenos Aires", addressCountry: "AR" },
};

const WA_LINK =
  "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20saber%20si%20mi%20caso%20permite%20carillas%20sin%20desgaste.";

export default function CarillasSinDesgastePage() {
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
              Carillas sin Desgaste
              <br />
              <span className="font-cormorant italic text-oro">en Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              No vendemos el concepto por moda. Evaluamos cuándo realmente se puede trabajar sin preparar el diente y cuándo otra alternativa va a darte un resultado más natural, más duradero y más honesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
              >
                Evaluar mi caso →
              </a>
              <Link
                href="/lentes-de-contacto-dental"
                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
              >
                ← Ver lentes de contacto dental
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
              {[
                { v: "Diagnóstico", l: "Antes que marketing" },
                { v: "Natural", l: "Sin efecto artificial" },
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
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">La parte importante</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Cuándo sí y cuándo no{" "}
              <span className="font-cormorant italic text-oro">conviene</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
                <h3 className="text-crema font-manrope font-medium text-base mb-3">Sí puede funcionar si…</h3>
                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                  Tus dientes están relativamente alineados, con buena estructura y el cambio buscado es sutil: color, bordes, textura o pequeños ajustes de forma.
                </p>
              </div>
              <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
                <h3 className="text-crema font-manrope font-medium text-base mb-3">Conviene otra cosa si…</h3>
                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                  Hay protrusión, rotaciones, desgaste severo, poco espacio o un cambio grande de volumen. En esos casos, forzar una opción sin desgaste suele comprometer el resultado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                titulo: "Lo que sí prometemos",
                texto:
                  "Un diagnóstico realista, un diseño natural y la alternativa más conservadora que tu caso permita sin sacrificar calidad estética.",
              },
              {
                titulo: "Lo que no prometemos",
                texto:
                  "No decimos que todos los casos se resuelven sin desgaste. Esa promesa vende, pero muchas veces termina en resultados poco creíbles o poco durables.",
              },
            ].map((item) => (
              <div key={item.titulo} className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft">
                <h3 className="text-crema font-manrope font-medium text-base mb-3">{item.titulo}</h3>
                <p className="text-crema/65 font-manrope text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-crema font-manrope font-medium text-lg mb-1">La mejor forma de saberlo es ver tu caso.</p>
              <p className="text-crema/55 font-manrope text-sm">Si calificás para una opción sin desgaste, te lo decimos. Si no, también.</p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors flex-none"
            >
              Solicitar evaluación →
            </a>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Todo sobre{" "}
              <span className="font-cormorant italic text-oro">carillas sin desgaste</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">También puede interesarte</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { nombre: "Lentes de Contacto Dental", desc: "La opción ultrafina cuando el caso lo permite.", href: "/lentes-de-contacto-dental" },
                { nombre: "Carillas Dentales", desc: "Más margen de corrección para cambios más amplios.", href: "/carillas-dentales" },
                { nombre: "Diseño de Sonrisa", desc: "Planificación digital completa antes de decidir.", href: "/diseno-de-sonrisa" },
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
