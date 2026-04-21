import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import CalculadoraFinanciacion from "@/components/CalculadoraFinanciacion";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Precio de Carillas Dentales en Buenos Aires 2026 | AM Estética Dental",
  description:
    "Guía actualizada 2026: precio de carillas dentales en Buenos Aires. Tabla de precios en USD por tipo de material, financiación con tasa fija del 18% anual y calculadora de cuotas. Puerto Madero, CABA.",
  keywords: "precio carillas dentales Buenos Aires, costo carillas porcelana Argentina, carillas dentales precio 2026, financiación carillas Puerto Madero, cuánto cuestan las carillas dentales",
  alternates: {
    canonical: "https://www.amesteticadental.com/precio-carillas-dentales-buenos-aires",
  },
  openGraph: {
    title: "Precio de Carillas Dentales en Buenos Aires 2026 | AM Estética Dental",
    description:
      "Tabla de precios actualizada en USD. Porcelana desde $450, resina desde $200. Financiación propia con tasa fija del 18% anual. Evaluación inicial en Puerto Madero.",
    url: "https://www.amesteticadental.com/precio-carillas-dentales-buenos-aires",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Cuánto cuestan las carillas dentales en Buenos Aires?",
    respuesta:
      "En Buenos Aires, las carillas de porcelana tienen un valor estimado entre $450 y $900 USD por pieza, mientras que las de resina compuesta van de $200 a $400 USD por pieza. En AM Estética Dental trabajamos con valores en USD y ofrecemos financiación propia con tasa fija del 18% anual. El precio exacto depende del material, la cantidad de piezas y la complejidad del caso.",
  },
  {
    pregunta: "¿Qué cambia más el precio: porcelana o resina?",
    respuesta:
      "La porcelana tiene un costo mayor porque ofrece mejor estabilidad de color, mayor durabilidad (10-20 años) y una estética más refinada. La resina tiene un ticket más accesible ($200-$400 USD por pieza) y puede ser ideal para ciertos casos, pero su vida útil es de 5 a 7 años y requiere más mantenimiento.",
  },
  {
    pregunta: "¿Se cobra por pieza o por tratamiento completo?",
    respuesta:
      "Depende del caso. En algunos pacientes se trabaja por cantidad de piezas; en otros se planifica un resultado completo donde lo importante no es solo cuántas piezas se hacen sino la armonía final y el diseño integral. En la evaluación inicial definimos el alcance exacto.",
  },
  {
    pregunta: "¿Ofrecen financiación?",
    respuesta:
      "Sí. Trabajamos con financiación propia y tasa fija anual del 18% (1,5% mensual) sobre el saldo financiado. Podés simular tu plan con 30% o 50% de anticipo y ver cómo quedarían las cuotas a 3, 6 o 12 meses. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.",
  },
  {
    pregunta: "¿Cómo funciona la primera consulta?",
    respuesta:
      "En la primera consulta evaluamos tu caso en profundidad, te explicamos las opciones de tratamiento y te entregamos un presupuesto detallado. Es el punto de partida para entender exactamente qué necesitás y qué resultado podés esperar. Agendá tu evaluación inicial por WhatsApp.",
  },
  {
    pregunta: "¿Cuánto dura una carilla de porcelana?",
    respuesta:
      "Las carillas de porcelana de alta calidad duran entre 10 y 20 años con el cuidado adecuado. Las de resina tienen una vida útil de 5 a 7 años. En la consulta te asesoramos sobre qué material se adapta mejor a tu caso y tu presupuesto.",
  },
  {
    pregunta: "¿Los valores en USD se pagan en dólares o en pesos?",
    respuesta:
      "Los valores en USD se abonan en pesos argentinos al tipo de cambio oficial del Banco Nación del día del pago. Esto te permite planificar tu tratamiento sin la volatilidad del dólar blue.",
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

const priceSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Carillas Dentales de Porcelana",
  description: "Carillas dentales de porcelana de alta estética en Puerto Madero, Buenos Aires. Diseño de sonrisa digital, materiales premium y financiación propia.",
  brand: { "@type": "Brand", name: "AM Estética Dental" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "450",
    highPrice: "900",
    offerCount: "2",
    availability: "https://schema.org/InStock",
    url: "https://www.amesteticadental.com/precio-carillas-dentales-buenos-aires",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
    bestRating: "5",
  },
};

const WA_LINK =
  "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20saber%20el%20precio%20de%20carillas%20dentales%20en%20mi%20caso.";

export default function PrecioCarillasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }} />
      <Navbar />

      <main className="bg-carbon text-crema font-manrope">
        {/* ── HERO ── */}
        <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
              AM Estética Dental · Puerto Madero · Buenos Aires · Guía 2026
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

        {/* ── TABLA DE PRECIOS ── */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Valores estimados por pieza · Actualizado 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4 text-center">
              Tabla de precios de{" "}
              <span className="font-cormorant italic text-oro">carillas dentales</span>
            </h2>
            <p className="text-crema/55 font-manrope text-sm text-center max-w-2xl mx-auto mb-12">
              Los valores son estimativos y pueden variar según la complejidad del caso. El presupuesto definitivo se entrega después de la evaluación inicial.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-oro/20">
                    <th className="text-left py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Tratamiento</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Precio USD / pieza</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Duración estimada</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Sesiones</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tratamiento: "Carillas de porcelana", precio: "$450 – $900", duracion: "10 – 20 años", sesiones: "2 – 3" },
                    { tratamiento: "Carillas de resina compuesta", precio: "$200 – $400", duracion: "5 – 7 años", sesiones: "1 – 2" },
                    { tratamiento: "Lentes de contacto dental", precio: "$500 – $1.000", duracion: "10 – 15 años", sesiones: "2 – 3" },
                    { tratamiento: "Carillas sin desgaste", precio: "$500 – $950", duracion: "10 – 20 años", sesiones: "2 – 3" },
                    { tratamiento: "Diseño de sonrisa digital (completo)", precio: "A evaluar", duracion: "Permanente", sesiones: "3 – 4" },
                  ].map((row, i) => (
                    <tr key={row.tratamiento} className={`border-b border-oro/10 ${i % 2 === 0 ? "bg-carbon" : "bg-carbon-soft"}`}>
                      <td className="py-4 px-6 text-crema font-manrope text-sm font-medium">{row.tratamiento}</td>
                      <td className="py-4 px-6 text-oro font-manrope text-sm font-semibold text-center">{row.precio}</td>
                      <td className="py-4 px-6 text-crema/60 font-manrope text-sm text-center">{row.duracion}</td>
                      <td className="py-4 px-6 text-crema/60 font-manrope text-sm text-center">{row.sesiones}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-crema/40 font-manrope text-xs mt-6 text-center">
              * Valores en USD. Se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.
            </p>
          </div>
        </section>

        {/* ── QUÉ INFLUYE EN EL PRECIO ── */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Factores que determinan el costo
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              ¿Qué influye en el{" "}
              <span className="font-cormorant italic text-oro">precio real</span> de tus carillas?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { titulo: "Material", texto: "No cuesta igual una carilla de porcelana de alta gama que una solución en resina. La porcelana ofrece mejor estabilidad de color y mayor duración." },
                { titulo: "Cantidad de piezas", texto: "No es lo mismo corregir 2 dientes que diseñar una sonrisa completa de 8 a 12 piezas. A mayor cantidad, el costo unitario puede ajustarse." },
                { titulo: "Complejidad del caso", texto: "Hay casos que requieren diseño digital, mockup, ajuste de mordida o combinación con otros tratamientos como blanqueamiento o implantes." },
              ].map((item) => (
                <div key={item.titulo} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                  <h3 className="text-crema font-manrope font-medium text-base mb-3">{item.titulo}</h3>
                  <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORCELANA VS RESINA ── */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-10 text-center">
              Porcelana vs Resina:{" "}
              <span className="font-cormorant italic text-oro">¿cuál te conviene?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-crema font-manrope font-medium text-lg">Porcelana</h3>
                  <span className="text-oro font-manrope font-semibold text-sm">$450 – $900 USD</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Estética superior y natural",
                    "Estabilidad de color permanente",
                    "Durabilidad de 10 a 20 años",
                    "Resistente a manchas y desgaste",
                    "Mínimo mantenimiento",
                    "Mayor inversión inicial",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-crema/70 font-manrope text-sm">
                      <span className="text-oro mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/carillas-de-porcelana-vs-resina" className="text-oro/70 hover:text-oro transition-colors text-sm">
                  Ver comparación completa →
                </Link>
              </div>

              <div className="border border-oro/15 rounded-2xl p-7 bg-carbon">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-crema font-manrope font-medium text-lg">Resina</h3>
                  <span className="text-oro font-manrope font-semibold text-sm">$200 – $400 USD</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Precio más accesible",
                    "Resolución en 1 a 2 sesiones",
                    "Ideal para correcciones menores",
                    "Reparable si se fractura",
                    "Vida útil de 5 a 7 años",
                    "Requiere más mantenimiento",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-crema/70 font-manrope text-sm">
                      <span className="text-oro mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/carillas-de-porcelana-vs-resina" className="text-oro/70 hover:text-oro transition-colors text-sm">
                  Comparar opciones →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CALCULADORA DE FINANCIACIÓN ── */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Simulá tu plan de pago
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4 text-center">
              Calculadora de{" "}
              <span className="font-cormorant italic text-oro">financiación</span>
            </h2>
            <p className="text-crema/55 font-manrope text-sm text-center max-w-xl mx-auto mb-12">
              Tasa fija anual del 18% (1,5% mensual). Valores en USD, se abonan en pesos al tipo de cambio oficial del día.
            </p>

            <CalculadoraFinanciacion />
          </div>
        </section>

        {/* ── COMPARACIÓN CON OTRAS CLÍNICAS ── */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6 text-center">
              ¿Por qué AM Estética Dental{" "}
              <span className="font-cormorant italic text-oro">no es la más barata</span>?
            </h2>
            <p className="text-crema/55 font-manrope text-sm text-center max-w-2xl mx-auto mb-12">
              Porque no vendemos carillas. Vendemos resultados. Y un resultado natural, duradero y bien hecho tiene un costo que se justifica en cada detalle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { titulo: "Diseño digital 3D", texto: "No improvisamos. Diseñamos tu sonrisa en pantalla antes de empezar. Ves el resultado, lo aprobás, y después lo ejecutamos." },
                { titulo: "Laboratorio premium", texto: "Trabajamos con laboratorios especializados en estética dental de alta gama. No usamos carillas genéricas." },
                { titulo: "Dr. Ariel Merino", texto: "Más de 15 años en estética dental, reconocido por Forbes Argentina. Cada caso lleva su firma clínica personal." },
              ].map((item) => (
                <div key={item.titulo} className="border border-oro/15 rounded-2xl p-6 bg-carbon">
                  <h3 className="text-crema font-manrope font-medium text-base mb-3">{item.titulo}</h3>
                  <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GUÍA COMPLETA SEO ── */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-8">
              Guía completa sobre el{" "}
              <span className="font-cormorant italic text-oro">costo de carillas dentales en Buenos Aires</span>
            </h2>

            <div className="prose prose-invert max-w-none space-y-8 text-crema/65 font-manrope text-sm leading-relaxed">
              <p>
                Si estás buscando el <strong className="text-crema">precio de carillas dentales en Buenos Aires</strong>, probablemente ya hayas notado que los valores varían enormemente entre clínicas. Desde opciones low-cost de $200 USD por pieza hasta clínicas premium que superan los $1.000 USD. ¿Qué explica esta diferencia? Y más importante: ¿vale la pena pagar más?
              </p>

              <h3 className="text-crema font-manrope font-medium text-xl mt-10 mb-4">¿Cuánto cuestan las carillas de porcelana en Buenos Aires en 2026?</h3>
              <p>
                En Buenos Aires, las <strong className="text-crema">carillas de porcelana tienen un precio estimado entre $450 y $900 USD por pieza</strong>. Este rango refleja la variación entre clínicas de diferentes niveles: desde consultorios generales hasta centros de estética dental premium como AM Estética Dental en Puerto Madero.
              </p>
              <p>
                Las <strong className="text-crema">carillas de resina compuesta</strong>, por su parte, tienen un costo menor: entre <strong className="text-crema">$200 y $400 USD por pieza</strong>. Son más accesibles pero también tienen una vida útil más corta (5 a 7 años vs 10 a 20 años de la porcelana).
              </p>

              <h3 className="text-crema font-manrope font-medium text-xl mt-10 mb-4">¿Cuánto sale un diseño de sonrisa completo?</h3>
              <p>
                Un diseño de sonrisa completo con carillas de porcelana generalmente involucra entre 8 y 12 piezas del sector anterior. Esto significa una inversión estimada de <strong className="text-crema">$3.600 a $10.800 USD</strong> dependiendo del material, la complejidad del caso y el laboratorio utilizado.
              </p>
              <p>
                En AM Estética Dental, cada caso es evaluado individualmente. No todos los pacientes necesitan la misma cantidad de piezas ni el mismo tipo de carilla. La evaluación inicial nos permite definir el alcance exacto y entregar un presupuesto preciso.
              </p>

              <h3 className="text-crema font-manrope font-medium text-xl mt-10 mb-4">¿Por qué hay tanta diferencia de precio entre clínicas?</h3>
              <p>
                La diferencia de precio entre una carilla de $200 y una de $900 no es arbitraria. Está determinada por factores concretos: la calidad del material (porcelana feldespática vs disilicato de litio), el laboratorio que fabrica las carillas, la experiencia del profesional, la tecnología utilizada (diseño digital 3D vs método tradicional), y el nivel de personalización del resultado.
              </p>
              <p>
                Una carilla barata puede parecer una buena idea al principio, pero si no se adapta bien, si cambia de color en dos años o si se fractura, el costo real termina siendo mayor que una carilla premium bien hecha desde el inicio.
              </p>

              <h3 className="text-crema font-manrope font-medium text-xl mt-10 mb-4">¿Se puede financiar el tratamiento?</h3>
              <p>
                Sí. En AM Estética Dental ofrecemos <strong className="text-crema">financiación propia con tasa fija anual del 18%</strong> (1,5% mensual). Podés abonar un anticipo del 30% o 50% y financiar el saldo en 3, 6 o 12 cuotas. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago, lo que te permite planificar sin la volatilidad del dólar blue.
              </p>

              <h3 className="text-crema font-manrope font-medium text-xl mt-10 mb-4">¿Vale la pena viajar a Buenos Aires para hacerse carillas?</h3>
              <p>
                El <strong className="text-crema">turismo dental en Buenos Aires</strong> es una realidad cada vez más común. Pacientes de Estados Unidos, Europa y otros países de Latinoamérica viajan a Buenos Aires para realizarse tratamientos de estética dental a una fracción del costo de sus países de origen. Mientras que en Estados Unidos una carilla de porcelana puede costar entre $1.000 y $2.500 USD, en Buenos Aires el rango es de $450 a $900 USD con la misma calidad de material y tecnología.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
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

        {/* ── FAQ ── */}
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
