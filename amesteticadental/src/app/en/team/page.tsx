import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import { equipoAM, equipoClinico } from "@/data/equipo";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/team";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Team AM | AM Estética Dental Puerto Madero",
  description:
    "Meet Team AM at AM Estética Dental in Puerto Madero: cosmetic dentistry, invisible aligners, in-house digital dental laboratory, clinical assistance and patient care.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/equipo-am") },
  openGraph: {
    title: "Team AM | AM Estética Dental Puerto Madero",
    description:
      "The multidisciplinary team behind every cosmetic dentistry case, veneers, invisible aligners and smile design in Puerto Madero.",
    url: CANONICAL,
    siteName: "AM Estética Dental",
    locale: "en_US",
    type: "website",
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Team AM | AM Estética Dental",
  url: CANONICAL,
  description: "Multidisciplinary team of AM Estética Dental in Puerto Madero, Buenos Aires.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camila O'Gorman 412, Office 101",
    addressLocality: "Puerto Madero",
    addressRegion: "Buenos Aires",
    postalCode: "C1107DED",
    addressCountry: "AR",
  },
  employee: equipoAM.map((miembro) => ({
    "@type": miembro.schemaType,
    name: miembro.nombre,
    jobTitle: miembro.rolEn,
    description: miembro.descripcionEn,
    image: miembro.imagen,
    worksFor: {
      "@type": "Dentist",
      name: "AM Estética Dental",
      url: "https://www.amesteticadental.com",
    },
  })),
};

const PILLARS = [
  {
    titulo: "Clinical planning",
    texto:
      "Every treatment starts from diagnosis, facial aesthetics and function. The goal is a result that looks natural and lasts.",
  },
  {
    titulo: "Digital workflow",
    texto:
      "Our in-house lab and 3D design align the clinical intent with the technical execution in veneers, aligners and rehabilitations.",
  },
  {
    titulo: "Patient experience",
    texto:
      "Administration, assistance and follow-up remove friction: scheduling, coordination, clinical preparation and continuity after your visit.",
  },
];

const WA_EN = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20request%20an%20initial%20assessment.";

export default function TeamPage() {
  const featured = equipoAM[0];
  const supportTeam = equipoAM.filter((miembro) => miembro.schemaType !== "Dentist");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <BreadcrumbsSchema items={[{ name: "Home", item: "/" }, { name: "Team AM", item: "/en/team" }]} />
      <Navbar />

      <main className="bg-carbon text-crema font-manrope">
        <section className="relative overflow-hidden px-6 pt-36 pb-20 md:px-12 md:pt-44 md:pb-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-oro/40 to-transparent" />
          <div className="absolute right-[-16%] top-[8%] h-[560px] w-[560px] rounded-full bg-oro/6 blur-[150px]" />

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <span className="mb-7 block text-xs uppercase tracking-[0.42em] text-oro">
                Team AM · Puerto Madero
              </span>
              <h1 className="max-w-4xl text-5xl font-light leading-[0.96] text-crema md:text-7xl">
                The team behind{" "}
                <span className="font-cormorant italic text-oro">every smile.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-crema/68 md:text-xl">
                AM Estética Dental works as one integrated team: clinical direction, cosmetic dentistry,
                invisible aligners, an in-house digital dental laboratory, clinical assistance, administration and patient follow-up.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WA_EN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-oro px-7 py-4 text-sm font-semibold text-carbon transition-colors hover:bg-oro-light"
                >
                  Book an assessment
                </a>
                <Link
                  href="/dr-ariel-merino"
                  className="inline-flex items-center justify-center rounded-full border border-oro/25 px-7 py-4 text-sm font-medium text-oro transition-colors hover:border-oro/50 hover:bg-oro/10"
                >
                  Dr. Merino&apos;s profile
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-oro/15 bg-carbon-soft">
                <Image
                  src={featured.imagen}
                  alt={featured.altEn}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/72 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-oro/80">{featured.rolEn}</p>
                  <p className="mt-2 text-2xl font-light text-crema">{featured.nombre}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-oro/10 bg-carbon-soft px-6 py-16 md:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
            {PILLARS.map((pilar) => (
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
                Clinical team
              </span>
              <h2 className="text-3xl font-light leading-tight text-crema md:text-5xl">
                Cosmetic dentistry, aligners and coordinated clinical judgment.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {equipoClinico.map((miembro) => (
                <article key={miembro.slug} className="group transition-all duration-300">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-oro/12 bg-carbon-soft/60 backdrop-blur-sm transition-all duration-300 group-hover:border-oro/30 group-hover:-translate-y-1 shadow-md group-hover:shadow-oro/5">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.altEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/78 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-oro/75">{miembro.areaEn}</p>
                      <h3 className="mt-2 text-2xl font-light text-crema">{miembro.nombre}</h3>
                      <p className="mt-1 text-sm font-medium text-oro">{miembro.rolEn}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-crema/62">{miembro.descripcionEn}</p>
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
                  AM Support
                </span>
                <h2 className="text-3xl font-light leading-tight text-crema md:text-5xl">
                  The invisible part that also defines the result.
                </h2>
              </div>
              <p className="max-w-2xl text-base font-light leading-relaxed text-crema/62">
                In cosmetic dentistry, the experience doesn&apos;t depend on the procedure alone. It also matters
                how each case is coordinated, documented, prepared step by step, and how the patient is cared for.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {supportTeam.map((miembro) => (
                <article key={miembro.slug} className="group transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-oro/12 bg-carbon/60 backdrop-blur-sm transition-all duration-300 group-hover:border-oro/30 group-hover:-translate-y-1 shadow-md group-hover:shadow-oro/5">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.altEn}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/75 via-transparent to-transparent" />
                  </div>
                  <h3 className="mt-4 text-base font-light leading-snug text-crema">{miembro.nombre}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-oro/70">{miembro.rolEn}</p>
                  <p className="mt-3 text-xs leading-relaxed text-crema/55">{miembro.descripcionEn}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <span className="mb-5 block text-xs uppercase tracking-[0.38em] text-oro">
              A multidisciplinary team
            </span>
            <h2 className="text-3xl font-light leading-tight text-crema md:text-5xl">
              An AM case never depends on a single pair of eyes.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-crema/64">
              Clinical direction sets the criteria, the dental team executes the treatment,
              the in-house digital laboratory turns the plan into precise restorations, and the operations team
              takes care of the complete patient experience.
            </p>
          </div>
        </section>

        <Contacto lang="en" />
      </main>
    </>
  );
}
