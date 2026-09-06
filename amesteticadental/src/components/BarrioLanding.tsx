import Image from "next/image";
import Link from "next/link";
import { GOOGLE_REVIEWS } from "@/lib/reviews";
import { BARRIOS, type Barrio } from "@/data/barrios";

const SITE = "https://www.amesteticadental.com";
const WA_BASE = "https://api.whatsapp.com/send?phone=5491170219298&text=";
const MAPS = "https://maps.google.com/?q=Camila+O'Gorman+412+Puerto+Madero+Buenos+Aires";

const HERO_IMG =
  "https://res.cloudinary.com/drctvgyqd/image/upload/v1782405026/clinica/recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg";
const DR_IMG =
  "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870272/dr-merino/dr-ariel-merino-ambo-principal.webp";

const CASOS = [
  {
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-diseno-sonrisa-carillas-ceramicas-dr-ariel-merino",
    alt: "Caso de diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino, AM Estética Dental",
  },
  {
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-patricia-carillas-diseno-sonrisa-ceramicas-dr-ariel-merino",
    alt: "Caso Patricia — diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino",
  },
  {
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-01-am-estetica-dental",
    alt: "Caso Eli — carillas cerámicas — AM Estética Dental Buenos Aires",
  },
];

// El copy de `angulo` usa **negrita** al principio de cada párrafo. Se resuelve
// acá en vez de meter dangerouslySetInnerHTML con texto de un archivo de datos.
function ConNegritas({ texto }: { texto: string }) {
  return (
    <>
      {texto.split(/\*\*(.+?)\*\*/g).map((parte, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-crema font-semibold">
            {parte}
          </strong>
        ) : (
          <span key={i}>{parte}</span>
        ),
      )}
    </>
  );
}

export function barrioSchema(barrio: Barrio) {
  const url = `${SITE}/${barrio.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "LocalBusiness"],
        "@id": `${SITE}/#clinic`,
        name: "AM Estética Dental",
        url: SITE,
        image: HERO_IMG,
        telephone: "+54 9 11 7021-9298",
        priceRange: "USD 150 - USD 30000",
        founder: { "@id": "https://www.arielmerino.com/#person" },
        // La dirección es siempre la real. El barrio sólo aparece en areaServed:
        // declarar una sede que no existe es motivo de suspensión del perfil.
        address: {
          "@type": "PostalAddress",
          streetAddress: "Camila O'Gorman 412, Oficina 101",
          addressLocality: "Puerto Madero",
          addressRegion: "Ciudad Autónoma de Buenos Aires",
          postalCode: "C1107DED",
          addressCountry: "AR",
        },
        geo: { "@type": "GeoCoordinates", latitude: -34.620858, longitude: -58.3609047 },
        areaServed: [
          { "@type": "Place", name: `${barrio.nombre}, Ciudad Autónoma de Buenos Aires` },
          { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
        ],
        aggregateRating: { "@type": "AggregateRating", ...GOOGLE_REVIEWS },
      },
      {
        "@type": ["Service", "MedicalProcedure"],
        name: `Carillas dentales para pacientes de ${barrio.nombre}`,
        description: barrio.description,
        url,
        procedureType: "https://schema.org/MedicalProcedure",
        bodyLocation: "Dientes anteriores y esmalte dental",
        provider: { "@id": `${SITE}/#clinic` },
        areaServed: { "@type": "Place", name: `${barrio.nombre}, Ciudad Autónoma de Buenos Aires` },
      },
      {
        "@type": "FAQPage",
        mainEntity: barrio.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
          { "@type": "ListItem", position: 2, name: "Carillas dentales", item: `${SITE}/carillas-dentales` },
          { "@type": "ListItem", position: 3, name: `Carillas ${barrio.preposicion}`, item: url },
        ],
      },
    ],
  };
}

export default function BarrioLanding({ barrio }: { barrio: Barrio }) {
  const wa = `${WA_BASE}${encodeURIComponent(
    `Hola! Escribo desde ${barrio.nombre}. Quiero consultar por carillas dentales.`,
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(barrioSchema(barrio)).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-carbon text-crema font-manrope min-h-screen">
        <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
          <Link href="/" className="font-cormorant italic text-oro text-xl">
            AM Estética Dental
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all"
          >
            Agendá tu consulta →
          </a>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMG}
              alt={`AM Estética Dental, clínica de carillas dentales para pacientes de ${barrio.nombre}, en Puerto Madero`}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/80 to-carbon" />
          </div>
          <div className="relative px-6 py-24 md:py-32 max-w-6xl mx-auto">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">
              {barrio.nombre} · Ciudad de Buenos Aires
            </span>
            <h1 className="text-5xl md:text-6xl font-light text-crema leading-tight mb-6">
              {barrio.h1[0]}
              <br />
              <span className="font-cormorant italic text-oro">{barrio.h1[1]}</span>
            </h1>
            <p className="text-crema/70 text-xl font-light leading-relaxed mb-8 max-w-2xl">{barrio.intro}</p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all"
              >
                Consultar por WhatsApp
              </a>
              <Link
                href="/precio-carillas-dentales-buenos-aires"
                className="inline-flex items-center gap-2 border border-oro/25 text-oro px-6 py-4 rounded-full text-sm hover:border-oro/50 transition-colors"
              >
                Ver la inversión →
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <span className="text-oro">
                ★★★★★ <span className="text-crema/60">4.9 en Google · +120 reseñas</span>
              </span>
              <span className="text-crema/60">
                Reconocidos por <span className="text-crema">Forbes Argentina</span>
              </span>
            </div>
          </div>
        </section>

        {/* Ángulo propio del barrio */}
        <section className="px-6 py-20 border-t border-oro/8 max-w-6xl mx-auto">
          <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-3">{barrio.nombre}</span>
          <h2 className="text-3xl font-light text-crema mb-12">{barrio.anguloTitulo}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {barrio.angulo.map((texto, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-cormorant italic text-oro/60 text-3xl leading-none pt-1">0{i + 1}</span>
                <p className="text-crema/55 text-sm leading-relaxed">
                  <ConNegritas texto={texto} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Precios */}
        <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-crema mb-4">
            La inversión, <span className="font-cormorant italic text-oro">publicada.</span>
          </h2>
          <p className="text-crema/45 text-sm mb-12 max-w-xl">
            Somos de las pocas clínicas de Buenos Aires que publica sus valores. Podés compararnos antes de venir.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                titulo: "Carillas de resina",
                desc: "Se resuelven en una sesión, con preparación mínima del esmalte.",
                href: "/carillas-de-resina",
                desde: "Desde USD 500 por diente",
              },
              {
                titulo: "Carillas cerámicas",
                desc: "Fabricadas en nuestro laboratorio propio. No se manchan y sostienen el color.",
                href: "/carillas-dentales",
                desde: "USD 1.000 – 1.500 por pieza",
              },
              {
                titulo: "Lentes de contacto dental",
                desc: "La carilla más fina que hacemos: 0,2 mm de espesor.",
                href: "/lentes-de-contacto-dental-precio-buenos-aires",
                desde: "Desde USD 1.000 por pieza",
              },
              {
                titulo: "Diseño de sonrisa",
                desc: "Planificación 3D completa. Ves el resultado antes de que toquemos un diente.",
                href: "/diseno-de-sonrisa",
                desde: "Desde USD 4.000",
              },
              {
                titulo: "Blanqueamiento dental",
                desc: "LED y láser en una sola sesión, con resultado inmediato.",
                href: "/blanqueamiento-dental-precio-buenos-aires",
                desde: "Desde USD 150",
              },
              {
                titulo: "Alineadores invisibles",
                desc: "Ortodoncia sin brackets, para casos que la necesitan antes de las carillas.",
                href: "/alineadores-invisibles",
                desde: "Consultar",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-oro/12 rounded-2xl p-6 hover:border-oro/30 transition-colors block"
              >
                <h3 className="font-semibold text-crema text-base mb-2 group-hover:text-oro transition-colors">
                  {s.titulo}
                </h3>
                <p className="text-crema/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-oro text-sm font-medium">{s.desde}</span>
                  <span className="text-oro/50 text-xs group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Dr. Merino */}
        <section className="px-6 py-20 border-t border-oro/8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] max-w-md rounded-3xl overflow-hidden border border-oro/15">
              <Image
                src={DR_IMG}
                alt={`Dr. Ariel Merino, odontólogo estético que atiende a pacientes de ${barrio.nombre} en Puerto Madero`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-3">Tu odontólogo</span>
              <h2 className="text-3xl font-light text-crema mb-6">
                Dr. Ariel <span className="font-cormorant italic text-oro">Merino.</span>
              </h2>
              <p className="text-crema/60 text-base font-light leading-relaxed mb-4">
                Más de 20 años en odontología y 15 dedicados exclusivamente a la estética dental de alta complejidad.
                Fundador de AM Estética Dental, la única clínica dental argentina reconocida por Forbes, y disertante
                internacional en más de 15 países.
              </p>
              <p className="text-crema/60 text-base font-light leading-relaxed mb-8">
                Atiende personalmente cada caso de carillas y diseño de sonrisa desde Puerto Madero.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/dr-ariel-merino" className="inline-flex items-center gap-2 text-oro text-sm hover:gap-3 transition-all">
                  Conocé su trayectoria →
                </Link>
                <a
                  href="https://www.arielmerino.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-crema/50 text-sm hover:text-crema transition-colors"
                >
                  arielmerino.com →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Casos */}
        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-3">Casos reales</span>
              <h2 className="text-2xl font-light text-crema">
                Pacientes reales, <span className="font-cormorant italic text-oro">resultados verificables.</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {CASOS.map((foto) => (
                <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/casos-antes-y-despues"
                className="inline-flex items-center gap-2 text-oro/70 hover:text-oro text-sm transition-colors"
              >
                Ver todos los casos clínicos →
              </Link>
            </div>
          </div>
        </section>

        {/* Cómo llegar — específico del barrio */}
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-3">Cómo llegar</span>
              <h2 className="text-3xl font-light text-crema mb-6">
                De {barrio.nombre} a <span className="font-cormorant italic text-oro">Puerto Madero.</span>
              </h2>
              <p className="text-crema/50 text-sm leading-relaxed mb-8">
                Atendemos en una sola dirección: Camila O&apos;Gorman 412, Oficina 101, Puerto Madero, CABA. No tenemos
                sede {barrio.preposicion}, y preferimos decirlo claro: concentramos la clínica y el laboratorio en un
                mismo lugar porque es lo que nos permite controlar los tiempos de cada caso.
              </p>
              <div className="space-y-4 text-crema/60 text-sm leading-relaxed">
                {barrio.comoLlegar.map((c) => (
                  <p key={c.modo}>
                    <span className="text-crema font-medium">{c.modo}:</span> {c.detalle}
                  </p>
                ))}
                <p>
                  <span className="text-crema font-medium">WhatsApp:</span> +54 9 11 7021-9298
                </p>
              </div>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 border border-oro/25 text-oro px-6 py-3 rounded-full text-sm hover:border-oro/50 transition-colors"
              >
                Abrir en Google Maps →
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-oro/15">
              <Image
                src="https://res.cloudinary.com/drctvgyqd/image/upload/v1782405022/clinica/entrada-clinica-cartel-iluminado-am-estetica-dental-puerto-madero.jpg"
                alt="Entrada de AM Estética Dental en Camila O'Gorman 412, Puerto Madero"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Otras zonas — enlaces cruzados. Sin esto las landings de barrio quedan
            huérfanas: sólo colgadas del sitemap, Google las rastrea tarde y mal. */}
        <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
          <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-3">Otras zonas</span>
          <h2 className="text-2xl font-light text-crema mb-8">
            También atendemos pacientes <span className="font-cormorant italic text-oro">de estos barrios.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {BARRIOS.filter((b) => b.slug !== barrio.slug).map((b) => (
              <Link
                key={b.slug}
                href={`/${b.slug}`}
                className="border border-oro/15 rounded-full px-5 py-2.5 text-sm text-crema/70 hover:border-oro/40 hover:text-oro transition-colors"
              >
                Carillas dentales {b.preposicion} →
              </Link>
            ))}
            <Link
              href="/dentista-puerto-madero"
              className="border border-oro/15 rounded-full px-5 py-2.5 text-sm text-crema/70 hover:border-oro/40 hover:text-oro transition-colors"
            >
              Dentista en Puerto Madero →
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 py-16 border-t border-oro/8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-crema mb-10">
            Preguntas de pacientes <span className="font-cormorant italic text-oro">de {barrio.nombre}</span>
          </h2>
          <div className="space-y-8">
            {barrio.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-crema text-base mb-2">{f.q}</h3>
                <p className="text-crema/55 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="px-6 py-20 text-center border-t border-oro/10">
          <h2 className="font-light text-3xl text-crema mb-4">
            Contanos qué querés <span className="font-cormorant italic text-oro">mejorar de tu sonrisa.</span>
          </h2>
          <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">
            Evaluamos tu caso y te decimos exactamente qué necesitás y cuál es la inversión, antes de que decidas nada.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all"
          >
            Agendá por WhatsApp →
          </a>
          <p className="text-crema/25 text-xs mt-4">Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
        </section>
      </main>
    </>
  );
}
