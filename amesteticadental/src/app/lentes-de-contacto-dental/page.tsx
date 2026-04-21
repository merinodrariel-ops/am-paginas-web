import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Lentes de Contacto Dental en Buenos Aires | AM Estética Dental",
  description:
    "Lentes de contacto dental en Puerto Madero, Buenos Aires. Carillas ultradelgadas para mejorar color y forma con mínima o nula intervención. Resultados naturales, caso por caso.",
  alternates: {
    canonical: "https://www.amesteticadental.com/lentes-de-contacto-dental",
  },
  openGraph: {
    title: "Lentes de Contacto Dental en Buenos Aires | AM Estética Dental",
    description:
      "Carillas ultradelgadas para quienes buscan una sonrisa natural sin desgaste visible cuando el caso lo permite. Puerto Madero, Buenos Aires.",
    url: "https://www.amesteticadental.com/lentes-de-contacto-dental",
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "¿Qué son los lentes de contacto dental?",
    respuesta:
      "Son carillas cerámicas ultradelgadas, de alrededor de 0,3 mm, diseñadas para adherirse a la superficie del diente con mínima intervención. Se indican cuando la base dental está sana y el objetivo es mejorar forma, color o pequeños detalles sin recurrir a una preparación convencional.",
  },
  {
    pregunta: "¿Siempre se colocan sin desgaste?",
    respuesta:
      "No siempre. En muchos casos se pueden colocar sin desgaste visible, pero depende de la posición del diente, el grosor del esmalte, la mordida y el objetivo estético. En AM Estética Dental evaluamos cada caso para indicarte con honestidad si realmente calificás para una opción sin desgaste o si conviene otra solución.",
  },
  {
    pregunta: "¿Qué diferencia hay entre lentes de contacto dental y carillas de porcelana?",
    respuesta:
      "Los lentes de contacto dental son una variante ultrafina dentro del universo de las carillas cerámicas. Se usan en casos más conservadores. Las carillas de porcelana convencionales permiten cambios más grandes de posición, forma y volumen cuando el caso necesita más corrección.",
  },
  {
    pregunta: "¿Los resultados se ven naturales?",
    respuesta:
      "Sí, cuando están bien indicados. Justamente su mayor ventaja es que respetan la estructura original del diente y permiten un resultado muy sutil, translúcido y armónico con el rostro. La clave no es solo el material, sino el criterio con el que se diseñan y colocan.",
  },
  {
    pregunta: "¿Cuánto duran los lentes de contacto dental?",
    respuesta:
      "Con un buen diagnóstico, materiales de alta calidad y cuidados adecuados, pueden durar entre 10 y 20 años. La durabilidad depende también de hábitos como apretar los dientes, morder objetos duros y el mantenimiento general de la salud oral.",
  },
  {
    pregunta: "¿Cuánto cuestan los lentes de contacto dental en Buenos Aires?",
    respuesta:
      "El valor depende de la cantidad de piezas, el diseño del caso y el laboratorio. En la evaluación inicial analizamos si realmente son la mejor opción para vos y te damos un presupuesto exacto. Trabajamos con valores en USD y financiación propia.",
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
  name: "Lentes de Contacto Dental",
  serviceType: "Odontología Estética",
  description:
    "Carillas ultradelgadas para mejorar color, forma y pequeños detalles con mínima intervención cuando el caso lo permite.",
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
  priceRange: "$$$$",
};

const WA_LINK =
  "https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Me%20interesan%20los%20lentes%20de%20contacto%20dental.";

export default function LentesContactoDentalPage() {
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
              Lentes de Contacto Dental
              <br />
              <span className="font-cormorant italic text-oro">en Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              La opción más conservadora dentro de las carillas estéticas. Ultrafinas, naturales y diseñadas para casos donde se puede mejorar la sonrisa con mínima o nula intervención.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
              >
                Consultar por lentes de contacto dental →
              </a>
              <Link
                href="/carillas-dentales"
                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
              >
                ← Ver carillas dentales
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
              {[
                { v: "0,3 mm", l: "Ultra delgados" },
                { v: "Natural", l: "Resultado sutil" },
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
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Cuándo convienen</span>
              <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                Cuando querés mejorar sin{" "}
                <span className="font-cormorant italic text-oro">sobreactuar</span>
              </h2>
              <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                Esta opción funciona mejor cuando los dientes tienen buena posición, estructura sana y el objetivo es refinar: color, borde, forma o pequeños espacios. No es para todos los casos, y justamente ahí está la diferencia entre vender y diagnosticar bien.
              </p>
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                Si necesitás cambios grandes de volumen, cierre de mordida o correcciones fuertes de posición, probablemente convenga una carilla convencional o incluso un tratamiento previo con alineadores.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Dientes sanos con pequeños detalles de forma",
                "Pacientes que buscan máxima naturalidad",
                "Corrección sutil de color y textura",
                "Casos donde se quiere evitar preparación innecesaria",
              ].map((item) => (
                <div key={item} className="border border-oro/15 rounded-2xl p-5 bg-carbon">
                  <div className="text-crema font-manrope text-sm leading-relaxed">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Diferencias clave</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Lentes de contacto dental vs{" "}
              <span className="font-cormorant italic text-oro">carillas tradicionales</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft">
                <h3 className="text-crema font-manrope font-medium text-base mb-3">Lentes de contacto dental</h3>
                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                  Pensados para casos conservadores. Menor espesor, intervención mínima y máxima discreción visual cuando el diente de base lo permite.
                </p>
              </div>
              <div className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft">
                <h3 className="text-crema font-manrope font-medium text-base mb-3">Carillas de porcelana</h3>
                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                  Permiten transformar más: volumen, proporción, cierres de espacio y correcciones de sonrisa donde una opción ultrafina no alcanzaría.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-crema font-manrope font-medium text-lg mb-1">¿Querés saber si calificás para una opción sin desgaste?</p>
              <p className="text-crema/55 font-manrope text-sm">En la evaluación inicial te lo decimos con criterio clínico, no con promesas vacías.</p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors flex-none"
            >
              Consultar ahora →
            </a>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Preguntas frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Todo sobre{" "}
              <span className="font-cormorant italic text-oro">lentes de contacto dental</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">También puede interesarte</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { nombre: "Carillas Dentales", desc: "Cambios más amplios de forma, color y simetría.", href: "/carillas-dentales" },
                { nombre: "Carillas sin desgaste", desc: "Cuándo realmente se puede trabajar sin preparar el diente.", href: "/carillas-sin-desgaste" },
                { nombre: "Diseño de Sonrisa", desc: "Planificación digital completa antes de empezar.", href: "/diseno-de-sonrisa" },
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
