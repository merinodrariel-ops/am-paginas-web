import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/dr-ariel-merino";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Dr. Ariel Merino — Cosmetic Dentist, Buenos Aires | AM",
  description:
    "Dr. Ariel Merino: 20+ years in dentistry, 15 dedicated exclusively to high-complexity cosmetic dentistry. Founder of AM Estética Dental, the only dental clinic in Argentina featured by Forbes.",
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor("/dr-ariel-merino"),
  },
  openGraph: {
    title: "Dr. Ariel Merino — Cosmetic Dentist in Buenos Aires",
    description:
      "Specialist in porcelain veneers, digital smile design and aesthetic rehabilitation. Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    locale: "en_US",
    type: "profile",
  },
};

// Schema Physician/Person — señal de entidad clave para Google y para que las
// IAs citen al Dr. Merino como fuente en inglés.
const personSchema = {
  "@context": "https://schema.org",
  "@type": ["Person", "Physician"],
  "@id": "https://www.amesteticadental.com/#drarielmerino",
  name: "Dr. Ariel Merino",
  jobTitle: "Cosmetic Dentist",
  description:
    "Cosmetic dentist with over 20 years in dentistry and 15 dedicated exclusively to high-complexity cosmetic dentistry. Founder and clinical director of AM Estética Dental in Puerto Madero, Buenos Aires.",
  url: CANONICAL,
  sameAs: [
    "https://www.wikidata.org/wiki/Q134287655",
    "https://www.linkedin.com/in/drarielmerino/",
    "https://www.instagram.com/drarielmerino",
    "https://www.youtube.com/@ArielMerino",
  ],
  knowsLanguage: ["es", "en"],
  medicalSpecialty: "Dentistry",
  knowsAbout: [
    "Porcelain veneers",
    "Digital smile design",
    "Ultra-thin veneers",
    "Aesthetic oral rehabilitation",
    "Dental tourism",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "UCALP — Universidad Católica de La Plata" },
    { "@type": "CollegeOrUniversity", name: "AOA — Asociación Odontológica Argentina" },
    { "@type": "CollegeOrUniversity", name: "University of Pennsylvania School of Dental Medicine" },
  ],
  worksFor: {
    "@type": "Dentist",
    name: "AM Estética Dental",
    url: "https://www.amesteticadental.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Camila O'Gorman 412, Office 101",
      addressLocality: "Puerto Madero",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.amesteticadental.com/en" },
    { "@type": "ListItem", position: 2, name: "Dr. Ariel Merino", item: CANONICAL },
  ],
};

const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20book%20a%20consultation%20with%20Dr.%20Merino.";

const AREAS = [
  { titulo: "Porcelain Veneers", texto: "Cases with a complete change of shape, color and proportion, focused on naturalness and permanence." },
  { titulo: "Digital Smile Design", texto: "Visual planning of the result before any preparation or restoration begins." },
  { titulo: "Ultra-Thin Veneers", texto: "Ultra-conservative protocols for cases where the goal is to improve without overdoing it." },
  { titulo: "Invisible Aligners", texto: "Correcting tooth position as part of a complete aesthetic plan." },
];

export default function DrMerinoEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main className="bg-carbon text-crema font-manrope">

        {/* HERO */}
        <section className="relative px-6 md:px-12 pt-36 pb-20">
          <div className="absolute right-[-8%] top-[10%] w-[520px] h-[520px] rounded-full bg-oro/6 blur-[140px] pointer-events-none" />
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div>
              <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-7">
                Professional profile · Puerto Madero · Buenos Aires
              </span>
              <h1 className="text-5xl md:text-6xl font-manrope font-light text-crema leading-[1.0] mb-4">
                Dr. Ariel Merino
              </h1>
              <p className="text-oro font-manrope text-lg mb-8">
                Cosmetic Dentist · Founder of AM Estética Dental
              </p>
              <p className="text-crema/70 font-manrope text-base leading-relaxed mb-5">
                More than 20 years in dentistry — 15 of them dedicated exclusively to high-complexity cosmetic dentistry.
              </p>
              <p className="text-crema/70 font-manrope text-base leading-relaxed mb-10">
                Specialist in porcelain veneers, digital smile design and aesthetic rehabilitation. He personally handles every case from Puerto Madero, with an approach built on clinical precision and a natural result.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
              >
                Book a consultation with Dr. Merino →
              </a>

              <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-oro/10">
                {[
                  { v: "20+", l: "years in dentistry" },
                  { v: "15+", l: "years in cosmetic dentistry" },
                  { v: "Forbes", l: "Argentina" },
                  { v: "4.9★", l: "120+ Google reviews" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                    <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-oro/15 bg-carbon-soft">
              <Image
                src="https://res.cloudinary.com/drctvgyqd/image/upload/v1784870264/equipo-am/dr-ariel-merino-director-clinico-odontologo-estetico-am-estetica-dental-puerto-madero.jpg"
                alt="Dr. Ariel Merino, cosmetic dentist and founder of AM Estética Dental in Puerto Madero, Buenos Aires"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* TRAINING & TRAJECTORY */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Training and trajectory</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-10">
              A practice built around{" "}
              <span className="font-cormorant italic text-oro">one thing only</span>
            </h2>
            <div className="space-y-6 max-w-3xl">
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                Ariel Merino trained as a dentist at UCALP and completed a postgraduate degree in Oral Rehabilitation and Aesthetics at AOA. Since then he has oriented his entire practice toward treatments where the visual result has to live up to the patient&apos;s face, profession and lifestyle.
              </p>
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                At AM Estética Dental he works on porcelain veneer cases, ultra-thin veneers, digital smile design and complex aesthetic rehabilitations. The focus is not on doing more, but on intervening as little as necessary to achieve a decisive, natural change.
              </p>
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                He has taught on international veneer programmes at the <strong className="text-crema">University of Pennsylvania School of Dental Medicine (Penn Dental)</strong>, and his name appears in media, public profiles and editorial pieces as part of a real authority built on clinical practice, visible cases and consistent public information.
              </p>
            </div>
          </div>
        </section>

        {/* CONFERENCES */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Conferences · Expodent 2026</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-8">
              AI and digital planning{" "}
              <span className="font-cormorant italic text-oro">in cosmetic dentistry</span>
            </h2>
            <div className="space-y-5 max-w-3xl">
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                At Expodent 2026, held at La Rural in Buenos Aires, Dr. Ariel Merino presented a conference on artificial intelligence, digital planning and 3D technology applied to cosmetic dentistry.
              </p>
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                The presentation addressed how digital tools can help structure communication with the patient, visualise alternatives and support clinical decision-making — without replacing dental diagnosis.
              </p>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Areas of practice</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-12">
              What Dr. Merino{" "}
              <span className="font-cormorant italic text-oro">handles personally</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AREAS.map((a) => (
                <div key={a.titulo} className="border border-oro/15 rounded-2xl p-7 bg-carbon hover:border-oro/30 transition-colors">
                  <h3 className="text-crema font-manrope font-medium text-base mb-3">{a.titulo}</h3>
                  <p className="text-crema/65 font-manrope text-sm leading-relaxed">{a.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">Explore</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { nombre: "Before & After", desc: "Real documented clinical cases.", href: "/en/before-after" },
                { nombre: "The Team", desc: "The multidisciplinary team behind every case.", href: "/en/team" },
                { nombre: "Dental Tourism", desc: "For patients traveling from abroad.", href: "/en/dental-tourism-argentina" },
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

        <Contacto lang="en" />
      </main>
    </>
  );
}
