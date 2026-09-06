import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import { equipoAM, equipoClinico } from "@/data/equipo";
import { hreflangFor } from "@/lib/i18n-routes";

const TRABAJA_EN_AM_URL = "/trabaja-en-am";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Equipo AM | AM Estética Dental Puerto Madero",
  description:
    "Conocé al Equipo AM de AM Estética Dental en Puerto Madero: odontología estética, alineadores invisibles, laboratorio dental digital, asistencia clínica y atención a pacientes.",
  alternates: {
    canonical: "https://www.amesteticadental.com/equipo-am",
    languages: hreflangFor("/equipo-am"),
  },
  keywords:
    "Equipo AM, AM Estética Dental, equipo odontológico Puerto Madero, odontólogos estética dental Buenos Aires, clínica dental Puerto Madero",
  openGraph: {
    title: "Equipo AM | AM Estética Dental Puerto Madero",
    description:
      "El equipo multidisciplinario detrás de cada caso de estética dental, carillas, alineadores invisibles y diseño de sonrisa en Puerto Madero.",
    url: "https://www.amesteticadental.com/equipo-am",
    siteName: "AM Estética Dental",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg",
        width: 1200,
        height: 1608,
        alt: "Equipo AM de AM Estética Dental en Puerto Madero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipo AM | AM Estética Dental Puerto Madero",
    description:
      "Odontología estética, alineadores, laboratorio dental digital y atención a pacientes en AM Estética Dental.",
    images: [
      "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg",
    ],
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Equipo AM | AM Estética Dental",
  url: "https://www.amesteticadental.com/equipo-am",
  image: "https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg",
  description:
    "Equipo multidisciplinario de AM Estética Dental en Puerto Madero, Buenos Aires.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camila O'Gorman 412, Oficina 101",
    addressLocality: "Puerto Madero",
    addressRegion: "Ciudad Autónoma de Buenos Aires",
    postalCode: "C1107DED",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.620858,
    longitude: -58.3609047,
  },
  employee: equipoAM.map((miembro) => ({
    "@type": miembro.schemaType,
    name: miembro.nombre,
    jobTitle: miembro.rol,
    description: miembro.descripcion,
    // `imagen` ya es una URL absoluta de Cloudinary. Prefijarla con el dominio
    // producía "https://www.amesteticadental.comhttps://res.cloudinary.com/…",
    // una URL rota que Google no podía resolver.
    image: miembro.imagen,
    worksFor: {
      "@type": "Dentist",
      name: "AM Estética Dental",
      url: "https://www.amesteticadental.com",
    },
    knowsAbout: miembro.keywords,
    // La matrícula sólo viaja si está cargada y verificada (ver src/data/equipo.ts).
    ...(miembro.matricula
      ? {
          identifier: {
            "@type": "PropertyValue",
            propertyID: "Matrícula Nacional",
            value: miembro.matricula,
          },
        }
      : {}),
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.amesteticadental.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Equipo AM",
      item: "https://www.amesteticadental.com/equipo-am",
    },
  ],
};

const pilares = [
  {
    titulo: "Planificación clínica",
    texto:
      "Cada tratamiento se ordena desde el diagnóstico, la estética facial y la función. El objetivo es que el resultado se vea natural y se pueda sostener.",
  },
  {
    titulo: "Flujo digital",
    texto:
      "El laboratorio y el diseño 3D permiten alinear la intención clínica con la ejecución técnica en carillas, alineadores y rehabilitaciones.",
  },
  {
    titulo: "Experiencia del paciente",
    texto:
      "Administración, asistencia y seguimiento reducen fricción: agenda, coordinación, preparación clínica y continuidad después de la consulta.",
  },
];

export default function EquipoAMPage() {
  const featured = equipoAM[0];
  const supportTeam = equipoAM.filter((miembro) => miembro.schemaType !== "Dentist");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BreadcrumbsSchema items={[{ name: "Inicio", item: "/" }, { name: "Equipo AM", item: "/equipo-am" }]} />
      <Navbar />

      <main className="bg-carbon text-crema font-manrope">
        <section className="relative overflow-hidden px-6 pt-36 pb-20 md:px-12 md:pt-44 md:pb-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-oro/40 to-transparent" />
          <div className="absolute right-[-16%] top-[8%] h-[560px] w-[560px] rounded-full bg-oro/6 blur-[150px]" />

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <span className="mb-7 block text-xs uppercase tracking-[0.42em] text-oro">
                Equipo AM · Puerto Madero
              </span>
              <h1 className="max-w-4xl text-5xl font-light leading-[0.96] text-crema md:text-7xl">
                El equipo detrás de{" "}
                <span className="font-cormorant italic text-oro">cada sonrisa.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-crema/68 md:text-xl">
                AM Estética Dental funciona como un equipo integrado: dirección clínica, odontología estética,
                alineadores invisibles, laboratorio dental digital, asistencia clínica, administración y seguimiento de pacientes.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Me%20gustaria%20solicitar%20una%20evaluacion%20inicial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-oro px-7 py-4 text-sm font-semibold text-carbon transition-colors hover:bg-oro-light"
                >
                  Agendar evaluación
                </a>
                <Link
                  href="/dr-ariel-merino"
                  className="inline-flex items-center justify-center rounded-full border border-oro/25 px-7 py-4 text-sm font-medium text-oro transition-colors hover:border-oro/50 hover:bg-oro/10"
                >
                  Ver perfil del Dr. Merino
                </Link>
                <a
                  href={TRABAJA_EN_AM_URL}
                  className="inline-flex items-center justify-center rounded-full border border-crema/15 px-7 py-4 text-sm font-medium text-crema/75 transition-colors hover:border-crema/35 hover:bg-crema/10 hover:text-crema"
                >
                  Trabajá con nosotros
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-oro/15 bg-carbon-soft">
                <Image
                  src={featured.imagen}
                  alt={featured.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/72 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-oro/80">{featured.rol}</p>
                  <p className="mt-2 text-2xl font-light text-crema">{featured.nombre}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-oro/10 bg-carbon-soft px-6 py-16 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
            {pilares.map((pilar) => (
              <div key={pilar.titulo} className="border-l border-oro/25 pl-5">
                <h2 className="text-lg font-medium text-crema">{pilar.titulo}</h2>
                <p className="mt-3 text-sm leading-relaxed text-crema/58">{pilar.texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="mb-5 block text-xs uppercase tracking-[0.38em] text-oro">
                Área clínica
              </span>
              <h2 className="text-3xl font-light leading-tight text-crema md:text-5xl">
                Odontología estética, alineadores y criterio clínico coordinado.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {equipoClinico.map((miembro) => (
                <article key={miembro.slug} className="group transition-all duration-300">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-oro/12 bg-carbon-soft/60 backdrop-blur-sm transition-all duration-300 group-hover:border-oro/30 group-hover:-translate-y-1 shadow-md group-hover:shadow-oro/5">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/78 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-oro/75">{miembro.area}</p>
                      <h3 className="mt-2 text-2xl font-light text-crema">{miembro.nombre}</h3>
                      <p className="mt-1 text-sm font-medium text-oro">{miembro.rol}</p>
                      {miembro.matricula ? (
                        <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-crema/45">{miembro.matricula}</p>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-crema/62">{miembro.descripcion}</p>
                  <div className="mt-3.5">
                    <a
                      href={`https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Me%20gustar%C3%ADa%20coordinar%20una%20consulta%20inicial%20con%20el%20equipo%20de%20AM%20Est%C3%A9tica%20Dental%20para%20atenderme%20con%20${encodeURIComponent(miembro.nombre)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-oro hover:text-oro-light transition-colors group/btn"
                    >
                      Consultar caso con {miembro.nombre.split(' ').slice(1).join(' ') || miembro.nombre}
                      <span className="transform group-hover/btn:translate-x-0.5 transition-transform">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-carbon-soft px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <span className="mb-5 block text-xs uppercase tracking-[0.38em] text-oro">
                  Soporte AM
                </span>
                <h2 className="text-3xl font-light leading-tight text-crema md:text-5xl">
                  La parte invisible que también define el resultado.
                </h2>
              </div>
              <p className="max-w-2xl text-base font-light leading-relaxed text-crema/62">
                En estética dental, la experiencia no depende solo del procedimiento clínico. También importa
                cómo se coordina el caso, cómo se documenta, cómo se prepara cada paso y cómo se acompaña al paciente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {supportTeam.map((miembro) => (
                <article key={miembro.slug} className="group transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-oro/12 bg-carbon/60 backdrop-blur-sm transition-all duration-300 group-hover:border-oro/30 group-hover:-translate-y-1 shadow-md group-hover:shadow-oro/5">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-transparent to-transparent" />
                  </div>
                  <h3 className="mt-4 text-base font-light leading-snug text-crema">{miembro.nombre}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-oro/70">{miembro.rol}</p>
                  <p className="mt-3 text-xs leading-relaxed text-crema/55">{miembro.descripcion}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <span className="mb-5 block text-xs uppercase tracking-[0.38em] text-oro">
              Equipo multidisciplinario
            </span>
            <h2 className="text-3xl font-light leading-tight text-crema md:text-5xl">
              Un caso AM no pasa por una sola mirada.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-crema/64">
              La dirección clínica define el criterio, el área odontológica ejecuta el tratamiento,
              el laboratorio digital traduce la planificación en piezas precisas y el equipo operativo
              cuida la experiencia completa del paciente.
            </p>
          </div>
        </section>

        <section className="border-y border-oro/10 bg-carbon-soft px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="mb-4 block text-xs uppercase tracking-[0.34em] text-oro">
                Sumate a Team AM
              </span>
              <h2 className="max-w-3xl text-3xl font-light leading-tight text-crema md:text-5xl">
                ¿Querés trabajar con nosotros?
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-crema/62">
                Si querés sumarte a AM Estética Dental, dejanos tus datos, contanos tu experiencia y adjuntá tu CV.
              </p>
            </div>
            <a
              href={TRABAJA_EN_AM_URL}
              className="inline-flex items-center justify-center rounded-full bg-oro px-7 py-4 text-sm font-semibold text-carbon transition-colors hover:bg-oro-light"
            >
              Trabajá con nosotros
            </a>
          </div>
        </section>

        <Contacto />
      </main>
    </>
  );
}
