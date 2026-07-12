import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import CalculadoraFinanciacion from "@/components/CalculadoraFinanciacion";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Precio Implantes Dentales Buenos Aires 2026 · AM Estética Dental",
  description:
    "Precio real e inversión de implantes dentales en Buenos Aires 2026. Tabla por material (Titanio/Zirconio), financiación propia y calculadora de cuotas. Dr. Ariel Merino, Puerto Madero.",
  keywords: "precio implantes dentales Buenos Aires, costo implante dental Argentina, implantes dentales precio 2026, financiación implantes Puerto Madero, cuánto cuestan los implantes dentales",
  alternates: {
    canonical: "https://www.amesteticadental.com/precio-implantes-dentales-buenos-aires",
  },
  openGraph: {
    title: "Precio de Implantes Dentales en Buenos Aires 2026 | AM Estética Dental",
    description:
      "Tabla de precios actualizada en USD. Implante unitario desde $800. Financiación propia con tasa fija del 18% anual. Evaluación inicial en Puerto Madero.",
    url: "https://www.amesteticadental.com/precio-implantes-dentales-buenos-aires",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Cuánto cuesta un implante dental en Buenos Aires?",
    respuesta:
      "En AM Estética Dental trabajamos con dos sistemas de primer nivel: el implante Neodent® (Brasil, Grupo Straumann) desde USD 1.200 y el implante Straumann® (Suiza) desde USD 1.600. En ambos casos el valor incluye la corona, la regeneración ósea y el manejo de tejidos blandos que el caso requiera. Ofrecemos financiación propia con tasa fija del 18% anual.",
  },
  {
    pregunta: "¿Qué diferencia hay entre el implante Neodent y el Straumann?",
    respuesta:
      "Los dos son sistemas tope de gama y pertenecen al mismo grupo suizo: Neodent forma parte del Grupo Straumann. Straumann es la marca de implantes más reconocida del mundo, con la mayor trayectoria y respaldo científico, y es nuestra opción de referencia para las zonas estéticas más exigentes. Neodent ofrece una relación calidad–precio excelente dentro de la gama premium. En la evaluación inicial te asesoramos sobre cuál conviene para tu caso.",
  },
  {
    pregunta: "¿Se cobra por implante o por tratamiento completo?",
    respuesta:
      "Depende del caso. Para reemplazos unitarios se trabaja por pieza. Para rehabilitaciones completas sobre implantes (como dentaduras fijas All-on-4 o All-on-6) se planifica un presupuesto integral. En la evaluación inicial definimos el alcance exacto.",
  },
  {
    pregunta: "¿Ofrecen financiación para implantes?",
    respuesta:
      "Sí. Trabajamos con financiación propia y tasa fija anual del 18% (1,5% mensual) sobre el saldo financiado. Podés simular tu plan con 30% o 50% de anticipo y ver cómo quedarían las cuotas a 3, 6 o 12 meses. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.",
  },
  {
    pregunta: "¿Cómo funciona la primera consulta de implantes?",
    respuesta:
      "En la primera consulta evaluamos tu hueso maxilar mediante una tomografía (CBCT), te explicamos las opciones de tratamiento y te entregamos un presupuesto detallado. Es el punto de partida para entender exactamente qué necesitás y qué resultado podés esperar.",
  },
  {
    pregunta: "¿Cuánto dura un implante dental?",
    respuesta:
      "Con los cuidados adecuados de higiene, no fumar y controles anuales, el tornillo de titanio del implante está diseñado para durar toda la vida. La corona sobre el implante puede necesitar reemplazo cada 15 a 20 años.",
  },
  {
    pregunta: "¿Los valores en USD se pagan en dólares o en pesos?",
    respuesta:
      "Los valores en USD se abonan en pesos argentinos al tipo de cambio oficial del Banco Nación del día del pago. Esto te permite planificar tu tratamiento sin sorpresas.",
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
  name: "Implantes Dentales",
  description: "Implantes dentales de titanio y coronas de zirconio en Puerto Madero, Buenos Aires. Planificación 3D, materiales premium y financiación propia.",
  serviceType: "Implantes dentales y rehabilitación oral",
  provider: {
    "@type": "Dentist",
    name: "AM Estética Dental",
    url: "https://www.amesteticadental.com",
  },
  areaServed: {
    "@type": "Place",
    name: "Buenos Aires, Argentina",
  },
  url: "https://www.amesteticadental.com/precio-implantes-dentales-buenos-aires",
};

const WA_LINK =
  "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Quiero%20saber%20la%20inversi%C3%B3n%20para%20implantes%20dentales%20en%20mi%20caso.";

export default function InversionImplantesPage() {
  return (
    <>
      <BreadcrumbsSchema 
        items={[
          { name: "Inicio", item: "/" },
          { name: "Implantes Dentales", item: "/implantes-dentales-buenos-aires" },
          { name: "Inversión", item: "/precio-implantes-dentales-buenos-aires" }
        ]} 
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
              Inversión en Implantes
              <br />
              <span className="font-cormorant italic text-oro">en Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              Si estás buscando precio, lo más importante no es una cifra vacía: es entender qué material conviene, cuántas piezas necesitás y cómo es la planificación clínica para recuperar tu sonrisa de forma permanente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors">
                Pedir presupuesto orientativo →
              </a>
              <Link href="/implantes-dentales-buenos-aires" className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4">
                ← Ver tratamiento de implantes
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
              Tabla de inversión para{" "}
              <span className="font-cormorant italic text-oro">implantes dentales</span>
            </h2>
            <p className="text-crema/55 font-manrope text-sm text-center max-w-2xl mx-auto mb-12">
              Los valores son estimativos y pueden variar según la complejidad del caso y la necesidad de injertos óseos. El presupuesto definitivo se entrega después del diagnóstico con CBCT.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-oro/20">
                    <th className="text-left py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Tratamiento</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Precio USD / pieza</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Duración estimada</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Cirugía</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tratamiento: "Implante Neodent® (Brasil) + corona", precio: "Desde USD 1.200", duracion: "Permanente", sesiones: "45 min" },
                    { tratamiento: "Implante Straumann® (Suiza) + corona", precio: "Desde USD 1.600", duracion: "Permanente", sesiones: "45 min" },
                    { tratamiento: "Rehabilitación completa sobre implantes", precio: "Consultar caso", duracion: "Permanente", sesiones: "A evaluar" },
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
              * Valores en USD, incluyen la corona, la regeneración ósea y el manejo de tejidos blandos que el caso requiera. Se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.
            </p>
          </div>
        </section>

        {/* ── COMPARATIVA DE MARCAS: STRAUMANN vs NEODENT ── */}
        <section className="py-24 px-6 md:px-12 border-t border-oro/10 bg-carbon-soft">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-4">
              <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                Qué implante te colocamos
              </span>
              <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                Dos marcas <span className="font-cormorant italic text-oro">tope de gama.</span> Vos elegís.
              </h2>
              <p className="text-crema/60 font-manrope text-base leading-relaxed max-w-2xl mx-auto mb-4">
                No trabajamos con implantes genéricos. Colocamos únicamente dos sistemas de primer nivel mundial — y los dos pertenecen al mismo grupo suizo. La diferencia de precio es de origen y trayectoria, no de calidad de atención: en ambos casos la planificación es digital y el protocolo es el mismo.
              </p>
              <p className="text-oro/70 font-manrope text-xs uppercase tracking-[0.2em] mb-14">
                Neodent® es parte del Grupo Straumann® (Suiza)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Neodent */}
              <div className="border border-oro/15 rounded-2xl p-8 bg-carbon flex flex-col">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-crema font-cormorant italic text-2xl">Neodent®</h3>
                  <span className="text-crema/40 font-manrope text-[10px] uppercase tracking-[0.2em]">Brasil · Grupo Straumann</span>
                </div>
                <p className="text-oro font-manrope font-semibold text-xl mb-6">Desde USD 1.200</p>
                <div className="space-y-3 flex-1">
                  {[
                    "Sistema de implantes líder en Latinoamérica",
                    "Excelente relación calidad–precio dentro de la gama premium",
                    "Titanio de grado médico, respaldo del Grupo Straumann",
                    "Incluye corona, regeneración ósea y tejidos blandos",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="text-oro/50 flex-none mt-1 text-xs">◆</span>
                      <p className="text-crema/65 font-manrope text-sm leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
                <p className="text-crema/45 font-manrope text-xs mt-6 pt-6 border-t border-oro/10">
                  Ideal para quien quiere un implante de marca premium con la mejor inversión.
                </p>
              </div>

              {/* Straumann */}
              <div className="border border-oro/40 rounded-2xl p-8 bg-carbon flex flex-col relative overflow-hidden">
                <span className="absolute top-5 right-[-38px] rotate-45 bg-oro text-carbon font-manrope text-[9px] font-bold uppercase tracking-widest px-12 py-1">Premium</span>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-crema font-cormorant italic text-2xl">Straumann®</h3>
                  <span className="text-crema/40 font-manrope text-[10px] uppercase tracking-[0.2em]">Suiza</span>
                </div>
                <p className="text-oro font-manrope font-semibold text-xl mb-6">Desde USD 1.600</p>
                <div className="space-y-3 flex-1">
                  {[
                    "La marca de implantes más reconocida del mundo",
                    "Ingeniería suiza y el mayor respaldo científico del sector",
                    "La opción de referencia para las zonas estéticas más exigentes",
                    "Incluye corona, regeneración ósea y tejidos blandos",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="text-oro flex-none mt-1 text-xs">◆</span>
                      <p className="text-crema/75 font-manrope text-sm leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
                <p className="text-crema/45 font-manrope text-xs mt-6 pt-6 border-t border-oro/10">
                  Ideal para quien quiere lo máximo en trayectoria, respaldo y previsibilidad.
                </p>
              </div>
            </div>

            <p className="text-crema/40 font-manrope text-xs mt-8 text-center max-w-2xl mx-auto">
              En la evaluación inicial te asesoramos sobre cuál conviene para tu caso según la zona a tratar, tu hueso disponible y tu objetivo estético.
            </p>
          </div>
        </section>

        {/* ── QUÉ INFLUYE EN EL PRECIO ── */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Factores que determinan la inversión
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              ¿Qué influye en la{" "}
              <span className="font-cormorant italic text-oro">inversión real</span> de tu implante?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { titulo: "Hueso disponible", texto: "El factor más crítico. Si hay pérdida ósea, es necesario realizar un injerto de hueso previo a la colocación del implante." },
                { titulo: "Material de la corona", texto: "La porción visible (corona) puede ser de cerámica estándar o de zirconio, siendo este último el material más estético y biocompatible." },
                { titulo: "Complejidad quirúrgica", texto: "Extracciones complejas en el mismo momento de la implantación o zonas estéticas anteriores requieren mayor especialización." },
              ].map((item) => (
                <div key={item.titulo} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft">
                  <h3 className="text-crema font-manrope font-medium text-base mb-3">{item.titulo}</h3>
                  <p className="text-crema/60 font-manrope text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALCULADORA ── */}
        <section className="py-24 px-6 md:px-12 bg-carbon">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Simulador de cuotas
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Calculá tu{" "}
              <span className="font-cormorant italic text-oro">plan de pago</span>
            </h2>
            <CalculadoraFinanciacion defaultMonto={800} />
          </div>
        </section>

        {/* ── GALERÍA DE CASOS ── */}
        <section className="py-24 px-6 md:px-12 border-t border-oro/10 bg-carbon-soft">
          <div className="max-w-6xl mx-auto">
              <div className="mb-10 text-center">
                  <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Casos reales</span>
                  <h2 className="text-3xl md:text-4xl font-light text-crema">
                      Rehabilitaciones con implantes <span className="font-cormorant italic text-oro">en AM Estética Dental.</span>
                  </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
                  {[
                      { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental", alt: "Agenesia dental antes y después — rehabilitación completa con implantes y cerámicas — Dr. Ariel Merino AM Estética Dental" },
                      { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires", alt: "Intraoral antes y después — implantes dentales y 24 cerámicas — rehabilitación completa — AM Estética Dental Buenos Aires" },
                      { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-labios-sonrisa-portada-carillas-ceramicas-alineadores-invisibles-dr-ariel-merino-am-estetica-dental", alt: "Antes y después labios y sonrisa — agenesia dental con implantes y carillas cerámicas — Dr. Ariel Merino AM Estética Dental" },
                  ].map((foto) => (
                      <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                          <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                  ))}
              </div>
              <div className="mt-8 text-center">
                  <Link href="/casos/agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                      Ver el caso clínico completo →
                  </Link>
              </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 md:px-12 bg-carbon">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Dudas comunes
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Preguntas <span className="font-cormorant italic text-oro">frecuentes</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 px-6 md:px-12 border-t border-oro/10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Dr. Ariel Merino
            </span>
            <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
              Recuperá tu sonrisa <span className="font-cormorant italic text-oro">con seguridad.</span>
            </h2>
            <p className="text-crema/60 font-manrope text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Evaluamos tu caso mediante tomografía 3D (CBCT) y planificamos la cirugía de forma digital.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-5 rounded-full font-manrope font-semibold text-lg hover:bg-oro-light transition-colors">
              Agendar mi evaluación inicial →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
