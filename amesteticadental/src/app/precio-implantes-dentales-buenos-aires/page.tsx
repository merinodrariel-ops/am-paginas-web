import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import CalculadoraFinanciacion from "@/components/CalculadoraFinanciacion";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import ImplantHeroVideo from "@/components/ImplantHeroVideo";
import ImplantRehabilitationCase from "@/components/ImplantRehabilitationCase";
import { ANIO } from "@/lib/anio";
import { IMPLANTES, OSEOINTEGRACION, INCLUIDO, INCLUIDO_ACLARACION, CORONA, usdES } from "@/lib/precios-implantes";
import { hreflangFor } from "@/lib/i18n-routes";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  // Cambio de precios del 2026-09-21 (segunda revisión del día).
  //
  // A la mañana el título decía "con corona incluida", porque con el esquema viejo
  // —dos fases de USD 1.200 a 1.500— el número comparable era el total, y abrir con
  // "desde USD 2.400" perdía contra el que publica "desde USD 800" (que es el
  // tornillo solo).
  //
  // El esquema nuevo lo resuelve mejor que cualquier título: ahora el implante tiene
  // un precio propio y redondo —USD 1.500 Neodent, USD 2.000 Straumann— que SÍ es
  // comparable contra lo que publica el resto, y que además es honesto porque incluye
  // la cirugía entera. Así que el título vuelve a abrir con una cifra, pero esta vez
  // con la que gana la comparación en vez de perderla.
  //
  // OJO: esto reinicia la medición a 28 días que arrancó a la mañana.
  title: `Implantes dentales a partir de USD 1.500 — precios ${ANIO} | AM`,
  description:
    `El implante a partir de USD 1.500 (Neodent) o USD 2.000 (Straumann). Terminado con corona, desde USD 3.000. Cirugía, extracción e injertos incluidos.`,
  keywords: `precio implantes dentales Buenos Aires, costo implante dental Argentina, implantes dentales precio ${ANIO}, financiación implantes Puerto Madero, cuánto cuestan los implantes dentales`,
  alternates: {
    canonical: "https://www.amesteticadental.com/precio-implantes-dentales-buenos-aires",
    languages: hreflangFor("/precio-implantes-dentales-buenos-aires"),
  },
  openGraph: {
    title: `Precio de Implantes Dentales en Buenos Aires ${ANIO} | AM Estética Dental`,
    description:
      "Implantes Neodent a partir de USD 1.500 y Straumann desde USD 2.000, con la cirugía y los injertos incluidos. Financiación propia en Puerto Madero.",
    url: "https://www.amesteticadental.com/precio-implantes-dentales-buenos-aires",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Cuánto cuesta un implante dental en Buenos Aires?",
    respuesta:
      "Hay dos opciones, y nada más: el implante Neodent® a partir de USD 1.500 y el Straumann® a partir de USD 2.000. Ese valor es la cirugía completa — ya contempla la extracción si la pieza todavía está, el relleno de hueso que el sitio necesite y la membrana para el tejido blando si está indicada. La corona definitiva vale USD 1.500 y es la misma con los dos sistemas: lo que cambia es el tornillo, no lo que se ve. Se coloca cuando el implante integró con el hueso, así que el tratamiento terminado queda a partir de USD 3.000 con Neodent® o USD 3.500 con Straumann®. Ofrecemos financiación propia con tasa fija del 18% anual.",
  },
  {
    pregunta: "¿Qué diferencia hay entre el implante Neodent y el Straumann?",
    respuesta:
      "Los dos son sistemas tope de gama del mismo grupo suizo: Neodent forma parte del Grupo Straumann. Straumann se fabrica en Suiza, es la marca de implantes más reconocida del mundo y es nuestra opción de referencia para las zonas estéticas más exigentes; el implante arranca en USD 2.000. Neodent es una marca brasileña que el Grupo Straumann adquirió y hoy fabrica bajo sus estándares: mismo respaldo, mejor relación calidad–precio dentro de la gama premium. Arranca en USD 1.500. En la evaluación inicial te asesoramos sobre cuál conviene para tu caso.",
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
                AM Estética Dental · Puerto Madero · Buenos Aires · Guía {ANIO}
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
              Inversión por fase · Actualizado {ANIO}
            </span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4 text-center">
              Inversión para un{" "}
              <span className="font-cormorant italic text-oro">implante individual</span>
            </h2>
            <p className="text-crema/55 font-manrope text-sm text-center max-w-2xl mx-auto mb-12">
              Dos sistemas, dos números. Nada de escalas ni de listas largas: elegís el implante y ya sabés en qué inversión estás. Los valores dicen <strong className="text-crema/80 font-medium">a partir de</strong> porque son integrales — ya contemplan la cirugía completa y lo que el sitio necesite.
            </p>

            {/* Celular: una ficha por sistema. La tabla de abajo mide 585px y en un
                teléfono la columna del total quedaba fuera de pantalla — justo la
                cifra que la persona vino a buscar. */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {[IMPLANTES.neodent, IMPLANTES.straumann].map((sistema) => (
                <div key={sistema.marca} className="border border-oro/20 rounded-2xl p-6 bg-carbon">
                  <h3 className="text-crema font-cormorant italic text-xl">{sistema.marca}</h3>
                  <p className="text-crema/40 font-manrope text-[11px] mt-1 mb-5">{sistema.origen}</p>
                  <div className="flex items-end justify-between gap-4 pb-4 border-b border-oro/10">
                    <span className="text-crema/60 font-manrope text-sm">El implante</span>
                    <span className="text-right">
                      <span className="block text-crema/40 font-manrope text-[10px] leading-none mb-1">a partir de</span>
                      <span className="text-oro font-manrope font-semibold text-lg whitespace-nowrap">{usdES(sistema.implante)}</span>
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-4 py-4 border-b border-oro/10">
                    <span className="text-crema/60 font-manrope text-sm">+ La corona</span>
                    <span className="text-crema/70 font-manrope font-medium text-base whitespace-nowrap">{usdES(CORONA)}</span>
                  </div>
                  <div className="flex items-end justify-between gap-4 pt-4">
                    <span className="text-crema font-manrope text-sm font-medium">= Total terminado</span>
                    <span className="text-right">
                      <span className="block text-crema/40 font-manrope text-[10px] leading-none mb-1">a partir de</span>
                      <span className="text-oro font-manrope font-semibold text-xl whitespace-nowrap">{usdES(sistema.conCorona)}</span>
                    </span>
                  </div>
                  <p className="text-crema/40 font-manrope text-[11px] mt-5 pt-4 border-t border-oro/10">
                    Oseointegración: {OSEOINTEGRACION} entre la cirugía y la corona.
                  </p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto hidden md:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-oro/20">
                    <th className="text-left py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">Sistema</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">El implante</th>
                    <th className="text-center py-4 px-4 text-crema/50 font-manrope text-xs uppercase tracking-widest">+ La corona</th>
                    <th className="text-center py-4 px-6 text-oro font-manrope text-xs uppercase tracking-widest">= Total terminado</th>
                  </tr>
                </thead>
                <tbody>
                  {[IMPLANTES.neodent, IMPLANTES.straumann].map((sistema, i) => (
                    <tr key={sistema.marca} className={`border-b border-oro/10 ${i === 1 ? "bg-oro/5" : "bg-carbon"}`}>
                      <td className="py-6 px-6 font-manrope text-sm font-medium text-crema">
                        {sistema.marca}
                        <span className="block text-crema/40 text-xs font-normal mt-1">{sistema.origen}</span>
                      </td>
                      <td className="py-6 px-6 font-manrope text-center">
                        <span className="text-crema/45 text-xs block">a partir de</span>
                        <span className="text-oro font-semibold text-lg whitespace-nowrap">{usdES(sistema.implante)}</span>
                        <span className="block text-crema/35 text-[10px] mt-1">sólo el tornillo</span>
                      </td>
                      <td className="py-6 px-4 font-manrope text-center">
                        <span className="text-crema/60 font-medium text-base whitespace-nowrap">{usdES(CORONA)}</span>
                        <span className="block text-crema/35 text-[10px] mt-1">igual en los dos</span>
                      </td>
                      <td className="py-6 px-6 font-manrope text-center">
                        <span className="text-crema/45 text-xs block">a partir de</span>
                        <span className="text-oro font-semibold text-xl whitespace-nowrap">{usdES(sistema.conCorona)}</span>
                        <span className="block text-crema/35 text-[10px] mt-1">el diente, terminado</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-crema/40 font-manrope text-xs mt-6 text-center max-w-2xl mx-auto">
              * La corona vale lo mismo con los dos sistemas: lo que cambia es el tornillo, no lo que se ve. Se coloca una vez que el implante integró con el hueso, {OSEOINTEGRACION} después de la cirugía. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.
            </p>
          </div>
        </section>

        {/* ── EL IMPLANTE, GIRANDO ── */}
        {/* Va entre la tabla de precios y el despiece a proposito: la persona
            acaba de leer una cifra de cuatro digitos y todavia no vio la cosa.
            Un objeto que gira retiene la mirada donde un parrafo la pierde.

            Es un <video> y no un GIF: el GIF maneja 256 colores y este plano es
            negro con reflejos dorados — saldria con bandas y pesaria diez veces
            mas. Sin controles, mudo y con playsInline se comporta como un GIF
            para el visitante. El poster evita el hueco mientras carga.

            (El giro salio bien acá y no salio con la placa de bruxismo por un
            motivo concreto: el titanio es opaco. El acrilico transparente de la
            placa refracta, y ahi la IA no puede inferir la geometria.) */}
        <section className="py-24 px-6 md:px-12 bg-carbon border-b border-oro/10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full overflow-hidden rounded-3xl border border-oro/15 bg-carbon-soft" style={{ aspectRatio: "1 / 1" }}>
              <video
                src="https://res.cloudinary.com/drctvgyqd/video/upload/q_auto/v1789965489/implantes-dentales-am/implante-giro-360-corona-pilar-tornillo.mp4"
                poster="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto,w_800/v1789965491/implantes-dentales-am/implante-giro-360-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Implante dental completo girando 360 grados: tornillo de titanio, pilar y corona de cerámica"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-5">
                Esto es lo que te queda puesto
              </span>
              <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-5">
                Tres piezas,{" "}
                <span className="font-cormorant italic text-oro">un solo diente</span>
              </h2>
              <p className="text-crema/65 font-manrope text-base leading-relaxed mb-4">
                El tornillo de titanio va en el hueso y hace de raíz. El pilar lo atraviesa la
                encía y sostiene. La corona es la única parte que vas a ver, y la única que se
                diseña para que nadie note que está.
              </p>
              <p className="text-crema/65 font-manrope text-base leading-relaxed">
                Cuando compares dos presupuestos, la pregunta es cuántas de estas tres piezas
                entran en el número. Un implante sin corona no es un diente: es una pieza
                esperando.
              </p>
            </div>
          </div>
        </section>

        {/* ── POR QUÉ ES UNA INVERSIÓN INTEGRAL ── */}
        {/* Va acá, despues del numero y de ver la pieza, porque es el momento
            exacto en que aparece la objecion: "¿y que mas me van a sumar?". La
            respuesta no es bajar la cifra, es mostrar que adentro ya esta lo que
            en otro lado se cotiza aparte y aparece al final. */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Inversión integral</span>
              <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-5">
                El número de arriba ya incluye{" "}
                <span className="font-cormorant italic text-oro">lo que otros suman después</span>
              </h2>
              <p className="text-crema/60 font-manrope text-base leading-relaxed max-w-2xl mx-auto">
                Un implante no es una pieza que se enrosca: es una cirugía. Es una inversión grande, y justamente por eso conviene saber qué entra. Cuando cada parte se cotiza por separado, el presupuesto inicial se ve barato y la cuenta final no tiene techo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="border border-oro/30 rounded-2xl p-8 bg-carbon">
                <span className="text-oro font-manrope uppercase tracking-[0.25em] text-[10px] block mb-5">Acá, adentro del valor</span>
                <div className="space-y-4">
                  {INCLUIDO.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-oro flex-none mt-1 text-xs">◆</span>
                      <p className="text-crema/75 font-manrope text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-crema/60 font-manrope text-sm mt-6 pt-6 border-t border-oro/10 leading-relaxed">
                  {INCLUIDO_ACLARACION}
                </p>
                <p className="text-crema/45 font-manrope text-xs mt-4">
                  Por eso los valores dicen <span className="text-crema/70">a partir de</span>: si el caso pide un componente más, no aparece como una sorpresa al final.
                </p>
              </div>

              <div className="border border-crema/10 rounded-2xl p-8 bg-carbon/40">
                <span className="text-crema/40 font-manrope uppercase tracking-[0.25em] text-[10px] block mb-5">Cotizado por partes</span>
                <div className="space-y-4">
                  {[
                    "Se publica el componente, no la cirugía",
                    "La extracción se factura aparte",
                    "El relleno de hueso se descubre el día de la cirugía",
                    "La membrana, si hace falta, es otro renglón",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-crema/25 flex-none mt-1 text-xs">◇</span>
                      <p className="text-crema/50 font-manrope text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-crema/45 font-manrope text-xs mt-6 pt-6 border-t border-crema/10">
                  Sumado así, no es raro que un solo implante termine entre USD 5.000 y 7.000 — bastante arriba de lo que decía el presupuesto que lo hizo entrar.
                </p>
              </div>
            </div>

            <p className="text-crema/65 font-manrope text-base leading-relaxed max-w-3xl mx-auto text-center">
              No es que acá se regale nada. Es que el trabajo quirúrgico que otros dejan fuera del presupuesto{" "}
              <strong className="text-crema font-medium">se hace igual</strong>, y alguien lo termina pagando. Preferimos que sepas el número completo antes de empezar y no después.
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
              Un implante son tres piezas, y entender cuál es cuál explica la diferencia entre un presupuesto y otro. El tornillo va en el hueso, el pilar lo conecta, y la corona es lo único que se ve. Los tres juntos —terminados— son {usdES(IMPLANTES.neodent.conCorona)} con Neodent® o {usdES(IMPLANTES.straumann.conCorona)} con Straumann®.
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
                    titulo: `Corona Dental (Zirconio / Cerámica) — ${usdES(CORONA)}`,
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
                    titulo: `Implante de Titanio (Tornillo) — desde ${usdES(IMPLANTES.neodent.implante)}`,
                    rol: "Raíz Artificial Osteointegrada",
                    desc: `El tornillo de titanio puro que se coloca quirúrgicamente en el hueso maxilar. Actúa como la nueva raíz del diente. Es la única pieza cuyo valor cambia según el sistema: ${usdES(IMPLANTES.neodent.implante)} con Neodent® y ${usdES(IMPLANTES.straumann.implante)} con Straumann®, la referencia mundial en implantología.`,
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
                No trabajamos con implantes genéricos. Los dos sistemas que colocamos son de primer nivel y pertenecen al mismo grupo suizo. La diferencia de inversión es de origen y trayectoria, no de calidad de atención: la planificación es digital y el protocolo es el mismo en los dos. Y si en algún caso puntual no hubiera disponible la medida exacta que el tuyo necesita, se resuelve con un implante nacional de gama equivalente — siempre conversado con vos antes, nunca por defecto.
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
                <div className="mb-6">
                  <p className="text-oro font-manrope font-semibold text-2xl leading-none">a partir de {usdES(IMPLANTES.neodent.implante)}</p>
                  <p className="text-crema/45 font-manrope text-xs mt-2">el implante · {usdES(IMPLANTES.neodent.conCorona)} terminado con corona</p>
                </div>
                <div className="space-y-3 flex-1">
                  {[
                    "Parte del Grupo Straumann® (Suiza) — el mismo grupo detrás de la marca de implantes #1 del mundo",
                    "La puerta de entrada premium al universo Straumann, con la mejor relación calidad–precio",
                    "Titanio de grado médico con el respaldo del grupo líder mundial en implantología",
                    "Inversión integral: la cirugía, y la extracción, el injerto y la membrana que el caso necesite",
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
                <div className="mb-6">
                  <p className="text-oro font-manrope font-semibold text-2xl leading-none">a partir de {usdES(IMPLANTES.straumann.implante)}</p>
                  <p className="text-crema/45 font-manrope text-xs mt-2">el implante · {usdES(IMPLANTES.straumann.conCorona)} terminado con corona</p>
                </div>
                <div className="space-y-3 flex-1">
                  {[
                    "La referencia mundial: el implante con el que se comparan todos los demás",
                    "Ingeniería suiza y el mayor respaldo científico del sector — décadas de seguimiento publicado",
                    "La opción de referencia para las zonas estéticas más exigentes",
                    "Inversión integral: la cirugía, y la extracción, el injerto y la membrana que el caso necesite",
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
                { titulo: "Hueso disponible", texto: "El factor más crítico: si hay pérdida ósea hace falta un relleno antes de colocar el implante. En AM ese relleno ya está dentro del valor, no se suma después." },
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
            <CalculadoraFinanciacion defaultMonto={3000} />
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
