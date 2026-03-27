import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
  metadataBase: new URL("https://amesteticadental.com"),
  title: "Precio de Carillas Dentales en Buenos Aires | AM Estética Dental",
  description:
    "Qué influye en el precio de las carillas dentales en Buenos Aires. Diferencias entre porcelana y resina, cantidad de piezas, diseño del caso y financiación en Puerto Madero.",
  alternates: {
    canonical: "https://amesteticadental.com/precio-carillas-dentales-buenos-aires",
  },
  openGraph: {
    title: "Precio de Carillas Dentales en Buenos Aires | AM Estética Dental",
    description:
      "Guía clara sobre el precio de las carillas dentales en Buenos Aires: materiales, cantidad de piezas, complejidad del caso y financiación.",
    url: "https://amesteticadental.com/precio-carillas-dentales-buenos-aires",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Cuánto cuestan las carillas dentales en Buenos Aires?",
    respuesta:
      "El precio depende del material elegido, la cantidad de piezas, el diseño del caso y el laboratorio. No cuesta lo mismo una corrección puntual que una transformación completa. En AM Estética Dental definimos el presupuesto exacto después de la evaluación inicial y el diseño del plan.",
  },
  {
    pregunta: "¿Qué cambia más el precio: porcelana o resina?",
    respuesta:
      "La porcelana suele tener un costo mayor porque ofrece mejor estabilidad de color, mayor durabilidad y una estética más refinada. La resina tiene un ticket más accesible y puede ser ideal para ciertos casos, pero no responde igual en el tiempo.",
  },
  {
    pregunta: "¿Se cobra por pieza o por tratamiento completo?",
    respuesta:
      "Depende del caso. En algunos pacientes se trabaja por cantidad de piezas; en otros se planifica un resultado completo donde lo importante no es solo cuántas piezas se hacen sino la armonía final y el diseño integral.",
  },
  {
    pregunta: "¿Ofrecen financiación?",
    respuesta:
      "Sí. Trabajamos con financiación propia sobre el 50% del tratamiento, con anticipo del 50% y tasa fija anual del 18%. También podés simular el plan en la home antes de consultar.",
  },
  {
    pregunta: "¿La evaluación inicial tiene costo?",
    respuesta:
      "No. La evaluación inicial es sin costo y nos permite decirte qué tratamiento conviene, qué material tiene sentido para tu caso y cuál sería el presupuesto real.",
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

const WA_LINK =
  "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20saber%20el%20precio%20de%20carillas%20dentales%20en%20mi%20caso.";

export default function PrecioCarillasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="bg-carbon text-crema font-manrope">
        <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
              AM Estética Dental · Puerto Madero · Buenos Aires
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
              Precio de Carillas Dentales
              <br />
              <span className="font-cormorant italic text-oro">en Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              Si estás buscando precio, lo más importante no es una cifra vacía: es entender qué material conviene, cuántas piezas necesitás y qué tipo de resultado estás buscando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors">
                Pedir presupuesto orientativo →
              </a>
              <Link href="/carillas-dentales" className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4">
                ← Ver tratamiento de carillas
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: "Material", texto: "No cuesta igual una carilla de porcelana de alta gama que una solución en resina." },
              { titulo: "Cantidad de piezas", texto: "No es lo mismo corregir 2 dientes que diseñar una sonrisa completa." },
              { titulo: "Complejidad del caso", texto: "Hay casos que requieren diseño digital, mockup, ajuste de mordida o combinación con otros tratamientos." },
            ].map((item) => (
              <div key={item.titulo} className="border border-oro/15 rounded-2xl p-6 bg-carbon">
                <h2 className="text-crema font-manrope font-medium text-base mb-3">{item.titulo}</h2>
                <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft">
              <h2 className="text-crema font-manrope font-medium text-base mb-3">Porcelana</h2>
              <p className="text-crema/60 font-manrope text-sm leading-relaxed mb-4">
                Mayor inversión inicial, pero mejor estabilidad de color, más naturalidad óptica y más duración en el tiempo.
              </p>
              <Link href="/carillas-de-porcelana-vs-resina" className="text-oro/70 hover:text-oro transition-colors text-sm">
                Ver comparación completa →
              </Link>
            </div>
            <div className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft">
              <h2 className="text-crema font-manrope font-medium text-base mb-3">Resina</h2>
              <p className="text-crema/60 font-manrope text-sm leading-relaxed mb-4">
                Ticket más accesible y resolución más rápida, ideal para algunos casos, aunque con otra respuesta en duración y mantenimiento.
              </p>
              <Link href="/carillas-de-porcelana-vs-resina" className="text-oro/70 hover:text-oro transition-colors text-sm">
                Comparar opciones →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-crema font-manrope font-medium text-lg mb-1">Financiación clara, sin letras chicas.</p>
              <p className="text-crema/55 font-manrope text-sm">Anticipo del 50% y saldo financiado con tasa fija anual del 18%.</p>
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors flex-none">
              Consultar mi caso →
            </a>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Todo sobre el{" "}
              <span className="font-cormorant italic text-oro">precio de las carillas</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>
      </main>
    </>
  );
}
