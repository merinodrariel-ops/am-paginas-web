import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import CalculadoraFinanciacion from "@/components/CalculadoraFinanciacion";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import ImplantHeroVideo from "@/components/ImplantHeroVideo";
import ImplantRehabilitationCase from "@/components/ImplantRehabilitationCase";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Precio Implantes Dentales Buenos Aires 2026 · AM Estética Dental",
  description:
    "Implantes dentales desde USD 2.400 total (dos fases). Neodent y Straumann, grupo suizo #1 del mundo. Precios 2026, extracción e injertos incluidos, financiación propia. Dr. Merino, Puerto Madero.",
  keywords: "precio implantes dentales Buenos Aires, costo implante dental Argentina, implantes dentales precio 2026, financiación implantes Puerto Madero, cuánto cuestan los implantes dentales",
  alternates: {
    canonical: "https://www.amesteticadental.com/precio-implantes-dentales-buenos-aires",
  },
  openGraph: {
    title: "Precio de Implantes Dentales en Buenos Aires 2026 | AM Estética Dental",
    description:
      "Implantes dentales Straumann y Neodent desde USD 2.400 total (dos fases). Financiación propia. Evaluación inicial en Puerto Madero, Buenos Aires.",
    url: "https://www.amesteticadental.com/precio-implantes-dentales-buenos-aires",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Cuánto cuesta un implante dental en Buenos Aires?",
    respuesta:
      "En AM Estética Dental el tratamiento se divide en dos fases. La primera fase (colocación del implante, que ya incluye la posible extracción, injerto de hueso e injerto de tejido) va de USD 1.200 a USD 1.500. La segunda fase (la corona definitiva) va de USD 1.200 a USD 1.500. El total terminado con corona incluida queda entre USD 2.400 y USD 3.000. Trabajamos exclusivamente con implantes del Grupo Straumann: Neodent® (gama alta) y Straumann® (tope de gama, #1 del mundo). Ofrecemos financiación propia con tasa fija del 18% anual.",
  },
  {
    pregunta: "¿Qué diferencia hay entre el implante Neodent y el Straumann?",
    respuesta:
      "Los dos son sistemas tope de gama y pertenecen al mismo grupo suizo: Neodent forma parte del Grupo Straumann. Straumann es la marca de implantes más reconocida del mundo, con la mayor trayectoria y respaldo científico, y es nuestra opción de referencia para las zonas estéticas más exigentes. Neodent ofrece una relación calidad–precio excelente dentro de la gama premium. Ambos están dentro del rango de USD 1.200 a USD 1.500 por fase. En la evaluación inicial te asesoramos sobre cuál conviene para tu caso.",
  },
  {
    pregunta: "¿Se cobra por implante o por tratamiento completo?",
    respuesta:
      "Depende del caso. Para reemplazos unitarios se trabaja por pieza. En rehabilitaciones integrales con una inversión de USD 24.000 a 30.000, entre uno y cuatro implantes suelen estar incluidos dentro del plan completo, junto con las restauraciones cerámicas y los injertos de hueso o tejido que estén indicados. La cantidad y el alcance exactos se confirman después del diagnóstico.",
  },
  {
    pregunta: "¿Ofrecen financiación para implantes?",
    respuesta:
      "Sí. Trabajamos con financiación propia y tasa fija anual del 18% (1,5% mensual) sobre el saldo financiado. Podés simular tu plan con 30% o 50% de anticipo y ver cómo quedarían las cuotas a 3, 6 o 12 meses. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.",
  },
  {
    pregunta: "¿Cómo funciona la primera consulta de implantes?",
    respuesta:
      "La primera consulta es una evaluación clínica. Si ya tenés radiografías o estudios recientes, te pedimos que los traigas, pero no son un requisito excluyente para atenderte. Si después de evaluarte hace falta una tomografía CBCT, se indica por separado en un centro de diagnóstico; AM no la realiza ni está incluida en la consulta.",
  },
  {
    pregunta: "¿Cuánto dura un implante dental?",
    respuesta:
      "Con buena higiene, controles periódicos y hábitos saludables, un implante puede mantenerse durante muchos años. Su evolución depende de la salud general, el hueso, los tejidos y el mantenimiento. La corona sobre el implante también puede requerir recambio con el tiempo.",
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
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                AM Estética Dental · Puerto Madero · Buenos Aires · Guía 2026
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
                Inversión en Implantes
                <br />
                <span className="font-cormorant italic text-oro">en Buenos Aires</span>
              </h1>
              <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                La inversión no es una cifra aislada: depende del material, de cuántas piezas necesitás y de cómo se integra cada implante en una planificación clínica de largo plazo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors">
                  Consultar la inversión para mi caso →
                </a>
                <Link href="/implantes-dentales-buenos-aires" className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4">
                  ← Ver tratamiento de implantes
                </Link>
              </div>
            </div>
            <ImplantHeroVideo />
          </div>
        </section>

        <ImplantRehabilitationCase />

        {/* ── TABLA DE PRECIOS ── */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Inversión por fase · Actualizado 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4 text-center">
              Inversión para un{" "}
              <span className="font-cormorant italic text-oro">implante individual</span>
            </h2>
            <p className="text-crema/55 font-manrope text-sm text-center max-w-2xl mx-auto mb-12">
              El tratamiento se divide en dos fases. La primera fase ya incluye la posible extracción, el injerto de hueso y el injerto de tejido que el caso requiera. La inversión definitiva se establece después de la evaluación clínica y de los estudios que estén indicados, que se realizan por separado.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-oro/20">
                    <th className="text-left py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Fase</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Inversión USD</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Qué incluye</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Tiempo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { fase: "1ª Fase — Colocación del implante", precio: "USD 1.200 – 1.500", incluye: "Implante + extracción + injerto óseo + injerto de tejido", tiempo: "45 min cirugía" },
                    { fase: "Oseointegración", precio: "—", incluye: "El implante se fusiona con el hueso", tiempo: "2 a 3 meses" },
                    { fase: "2ª Fase — Corona definitiva", precio: "USD 1.200 – 1.500", incluye: "Corona de cerámica o zirconio biomimética", tiempo: "2 sesiones" },
                    { fase: "Total terminado con corona", precio: "USD 2.400 – 3.000", incluye: "Implante Neodent® o Straumann® (Grupo Straumann)", tiempo: "3 a 4 meses" },
                  ].map((row, i) => (
                    <tr key={row.fase} className={`border-b border-oro/10 ${i >= 3 ? "bg-oro/5" : i % 2 === 0 ? "bg-carbon" : "bg-carbon-soft"}`}>
                      <td className={`py-4 px-6 font-manrope text-sm font-medium ${i >= 3 ? "text-oro" : "text-crema"}`}>{row.fase}</td>
                      <td className={`py-4 px-6 font-manrope text-sm font-semibold text-center ${i >= 3 ? "text-oro" : "text-oro/80"}`}>{row.precio}</td>
                      <td className="py-4 px-6 text-crema/60 font-manrope text-sm text-center">{row.incluye}</td>
                      <td className="py-4 px-6 text-crema/60 font-manrope text-sm text-center">{row.tiempo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-crema/40 font-manrope text-xs mt-6 text-center">
              * Valores en USD. La 1ª fase es all-inclusive: ya contempla extracción, injerto de hueso e injerto de tejido si el caso lo requiere. Se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.
            </p>
          </div>
        </section>

        {/* ── ESTRUCTURA DE UN IMPLANTE (ESQUEMA VISUAL) ── */}
        <section className="py-24 px-6 md:px-12 bg-carbon border-b border-oro/10">
          <div className="max-w-5xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">
              Anatomía de tu tratamiento
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4 text-center">
              ¿Cómo se compone un{" "}
              <span className="font-cormorant italic text-oro">implante dental</span>?
            </h2>
            <p className="text-crema/55 font-manrope text-sm text-center max-w-2xl mx-auto mb-16">
              Cada fase es una inversión en ingeniería biológica. La primera fase incluye el implante, la posible extracción y los injertos. La segunda fase es la corona biomimética que completa tu sonrisa.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Columna Izquierda: Diagrama SVG */}
              <div className="lg:col-span-5 flex justify-center bg-carbon-soft p-8 rounded-3xl border border-oro/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-oro/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                <Image
                  src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/implantes-dentales-am/implante-dental-straumann-despiece-corona-pilar-tornillo-fondo-blanco-am-estetica-dental-buenos-aires"
                  alt="Implante dental Straumann despiece 3D: corona, pilar de conexión y tornillo de titanio — AM Estética Dental, Puerto Madero, Buenos Aires"
                  width={400}
                  height={400}
                  className="w-full max-w-[320px] h-auto drop-shadow-[0_0_30px_rgba(201,169,110,0.12)] relative z-10"
                />
                <div className="absolute top-[15%] left-4 lg:left-6 border-l border-oro/30 pl-3 z-20">
                  <span className="text-[10px] text-oro tracking-[0.2em] block">PARTE ESTÉTICA</span>
                  <span className="text-xs text-crema font-medium">1. Corona</span>
                </div>
                <div className="absolute top-[42%] right-4 lg:right-6 border-r border-oro/30 pr-3 text-right z-20">
                  <span className="text-[10px] text-oro tracking-[0.2em] block">CONECTOR</span>
                  <span className="text-xs text-crema font-medium">2. Pilar</span>
                </div>
                <div className="absolute bottom-[18%] left-4 lg:left-6 border-l border-oro/30 pl-3 z-20">
                  <span className="text-[10px] text-oro tracking-[0.2em] block">RAÍZ BIOLÓGICA</span>
                  <span className="text-xs text-crema font-medium">3. Implante</span>
                </div>
              </div>

              {/* Columna Derecha: Tarjetas Descriptivas */}
              <div className="lg:col-span-7 space-y-6">
                {[
                  {
                    num: "01",
                    titulo: "Corona Dental (Zirconio / Cerámica)",
                    rol: "Componente Estético y Funcional",
                    desc: "Es el diente visible que se diseña a medida para igualar el color, la forma y la translucidez de tus dientes vecinos. Utilizamos zirconio estratificado o porcelana pura libre de metal, los materiales más estéticos y resistentes que existen.",
                    incluido: "Incluido en el presupuesto"
                  },
                  {
                    num: "02",
                    titulo: "Pilar de Conexión (Abutment)",
                    rol: "Nexo Mecánico de Alta Precisión",
                    desc: "La pieza de titanio o cerámica de grado médico que se atornilla al implante y sobre la cual se cementa o atornilla la corona. Su función es amortiguar la fuerza masticatoria y garantizar que la corona no se afloje.",
                    incluido: "Incluido en el presupuesto"
                  },
                  {
                    num: "03",
                    titulo: "Implante de Titanio (Tornillo)",
                    rol: "Raíz Artificial Osteointegrada",
                    desc: "El tornillo de titanio puro que se coloca quirúrgicamente en el hueso maxilar. Actúa como la nueva raíz del diente. Trabajamos con Straumann® y Neodent®, sistemas de referencia con amplio respaldo clínico y científico.",
                    incluido: "Incluido en el presupuesto"
                  }
                ].map((item) => (
                  <div key={item.num} className="border border-oro/15 hover:border-oro/40 bg-carbon-soft p-6 rounded-2xl transition-all duration-300 group flex items-start gap-5">
                    <span className="font-cormorant italic text-3xl text-oro/40 group-hover:text-oro transition-colors leading-none pt-1">
                      {item.num}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2 mb-2">
                        <h3 className="text-crema font-manrope font-semibold text-base">{item.titulo}</h3>
                        <span className="text-[10px] text-oro/60 font-manrope uppercase tracking-wider">· {item.rol}</span>
                      </div>
                      <p className="text-crema/60 font-manrope text-sm leading-relaxed mb-3">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-oro font-semibold bg-oro/5 px-2.5 py-1 rounded-full border border-oro/15">
                        {item.incluido}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                  <span className="text-oro/60 font-manrope text-[10px] uppercase tracking-[0.2em]">Grupo Straumann®</span>
                </div>
                <p className="text-oro font-manrope font-semibold text-xl mb-6">Desde USD 1.200 / fase</p>
                <div className="space-y-3 flex-1">
                  {[
                    "Parte del Grupo Straumann® (Suiza) — el mismo grupo detrás de la marca de implantes #1 del mundo",
                    "La puerta de entrada premium al universo Straumann, con la mejor relación calidad–precio",
                    "Titanio de grado médico con el respaldo del grupo líder mundial en implantología",
                    "1ª fase all-inclusive: extracción + injerto óseo + tejidos blandos",
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
                <p className="text-oro font-manrope font-semibold text-xl mb-6">Desde USD 1.500 / fase</p>
                <div className="space-y-3 flex-1">
                  {[
                    "La marca de implantes más reconocida del mundo",
                    "Ingeniería suiza y el mayor respaldo científico del sector",
                    "La opción de referencia para las zonas estéticas más exigentes",
                    "1ª fase all-inclusive: extracción + injerto óseo + tejidos blandos",
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
            <CalculadoraFinanciacion defaultMonto={2400} />
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
              La primera consulta es clínica. Si el caso requiere una tomografía 3D (CBCT), la indicamos por separado para completar la planificación digital.
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
