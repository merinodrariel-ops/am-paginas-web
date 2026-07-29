import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/cosmetic-dentistry-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20which%20treatment%20fits%20my%20case.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Cosmetic Dentistry in Buenos Aires | AM Estética Dental",
  description:
    "The best-known cosmetic dentistry clinic in Argentina. Porcelain veneers, digital smile design, invisible aligners and implants in Puerto Madero. Featured by Forbes. Dr. Ariel Merino.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/estetica-dental") },
  openGraph: {
    title: "Cosmetic Dentistry in Buenos Aires | AM Estética Dental",
    description: "Veneers, smile design, aligners and implants in Puerto Madero. Featured by Forbes.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "What is cosmetic dentistry?",
    respuesta:
      "Cosmetic dentistry is the branch that focuses on the visual result of the smile: colour, shape, symmetry and proportion. It works on how the smile looks and how it integrates with the face, always on a foundation of dental health.",
  },
  {
    pregunta: "What is the difference between cosmetic and general dentistry?",
    respuesta:
      "General dentistry deals with health: cavities, gums, pain. Cosmetic dentistry deals with the visual result: colour, shape, symmetry, proportions. At AM Estética Dental we only take aesthetic cases, with treatments planned for durable and natural results.",
  },
  {
    pregunta: "How do I know which treatment I need?",
    respuesta:
      "That is exactly what the initial assessment is for. We analyse your dentition, your facial proportions and what you want to achieve, and then propose the treatment — or the combination of treatments — that gets you there with the least possible intervention.",
  },
  {
    pregunta: "Is there a correct order of treatments?",
    respuesta:
      "Yes, and it matters. As a rule: first health, then position (aligners if needed), then colour (whitening), and finally shape and proportion (veneers or ceramics). Doing it in the wrong order usually means redoing work.",
  },
  {
    pregunta: "Is there a recommended age range for cosmetic dentistry?",
    respuesta:
      "No. Aesthetic treatments are indicated for adults in general, from 18 years old to any age. The criteria are the condition of the dentition and the patient's goal, not their age.",
  },
  {
    pregunta: "Do you treat patients who travel from abroad?",
    respuesta:
      "Yes, regularly. Our own in-house laboratory lets us complete most aesthetic treatments in a single 10 to 14 day trip. Coordination beforehand is handled remotely by WhatsApp, in English or Spanish.",
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

const TREATMENTS = [
  { nombre: "Porcelain Veneers", desc: "Change colour, shape and proportion with a definitive, natural result.", href: "/en/porcelain-veneers-buenos-aires" },
  { nombre: "Ultra-Thin Veneers", desc: "The most conservative option, with minimal enamel preparation.", href: "/en/ultra-thin-veneers-buenos-aires" },
  { nombre: "Digital Smile Design", desc: "Plan and approve the result in 3D before anything begins.", href: "/en/smile-design-buenos-aires" },
  { nombre: "Invisible Aligners", desc: "Move teeth into position without brackets or wires.", href: "/en/invisible-aligners-buenos-aires" },
  { nombre: "Dental Implants", desc: "The permanent solution for missing teeth.", href: "/en/dental-implants-buenos-aires" },
  { nombre: "Teeth Whitening", desc: "Professional protocol with results from the first session.", href: "/en/teeth-whitening-buenos-aires" },
];

export default function CosmeticDentistryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-carbon text-crema font-manrope">

        <section className="relative min-h-[75dvh] flex items-center px-6 md:px-12 pt-32 pb-20">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-8">
              AM Estética Dental · Puerto Madero · Buenos Aires
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-crema leading-[1.0] mb-7">
              Cosmetic Dentistry<br />
              <span className="font-cormorant italic text-oro">in Buenos Aires</span>
            </h1>
            <p className="text-crema/68 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              Porcelain veneers, digital smile design, invisible aligners and implants. One clinic, one specialist, and an in-house laboratory that turns months into days.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
              Find out which treatment fits your case →
            </a>
            <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
              {[
                { v: "4.9★", l: "Google Reviews" },
                { v: "Forbes", l: "Argentina" },
                { v: "15+", l: "years, cosmetic only" },
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
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Treatments</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Everything we do,{" "}
              <span className="font-cormorant italic text-oro">and nothing we don't</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TREATMENTS.map((t) => (
                <Link key={t.nombre} href={t.href} className="border border-oro/15 rounded-2xl p-6 bg-carbon hover:border-oro/35 transition-colors group">
                  <h3 className="text-crema font-manrope font-medium text-base mb-2 group-hover:text-oro transition-colors">{t.nombre}</h3>
                  <p className="text-crema/55 font-manrope text-sm leading-relaxed">{t.desc}</p>
                  <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-3 block">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">The specialist</span>
              <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                Dr. Ariel Merino —{" "}
                <span className="font-cormorant italic text-oro">Cosmetic Dentist</span>
              </h2>
              <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                A cosmetic dentist with more than 15 years of practice dedicated exclusively to cosmetic dentistry. Featured by Forbes Argentina. Chosen to design the smile of a Miss Universe.
              </p>
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                Every patient is treated personally by Dr. Merino. We do not delegate cases. There are no residents. Every assessment, every design and every placement passes through his direct judgment.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/en/dr-ariel-merino" className="border border-oro/15 rounded-xl px-5 py-4 bg-carbon-soft hover:border-oro/35 transition-colors">
                <div className="text-oro font-manrope font-semibold text-base">Full profile</div>
                <div className="text-crema-muted font-manrope text-xs mt-0.5">Training, conferences and areas of practice →</div>
              </Link>
              <Link href="/en/before-after" className="border border-oro/15 rounded-xl px-5 py-4 bg-carbon-soft hover:border-oro/35 transition-colors">
                <div className="text-oro font-manrope font-semibold text-base">Before &amp; After</div>
                <div className="text-crema-muted font-manrope text-xs mt-0.5">Real documented clinical cases →</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Everything about{" "}
              <span className="font-cormorant italic text-oro">cosmetic dentistry</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        <Contacto lang="en" />
      </main>
    </>
  );
}
