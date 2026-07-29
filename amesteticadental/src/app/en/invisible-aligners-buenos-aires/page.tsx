import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/invisible-aligners-buenos-aires";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Invisible Aligners in Buenos Aires (AM Aligners) | AM Estética Dental",
  description:
    "Orthodontics without brackets or wires with AM Aligners and full digital planning in Puerto Madero. You see the result before we start. Dr. Ariel Merino.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/alineadores-invisibles") },
  openGraph: {
    title: "Invisible Aligners in Buenos Aires | AM Estética Dental",
    description:
      "AM Aligners: clear aligners with complete digital planning in Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "Do invisible aligners work for any case?",
    respuesta:
      "Invisible aligners solve most orthodontic cases: crowding, gaps, crossbite, overbite and moderately complex situations. At the consultation we assess your specific case. If aligners are not the best option for your situation, we tell you honestly.",
  },
  {
    pregunta: "How many hours a day do you wear them?",
    respuesta:
      "The standard protocol is 22 hours a day. You remove them to eat, to drink anything other than water, and to brush. The more you wear them, the more predictable and faster the result. Digital tracking lets us adjust the plan in real time.",
  },
  {
    pregunta: "Do aligners hurt?",
    respuesta:
      "Aligners create controlled pressure, not sharp pain. Each change of aligner can produce a feeling of pressure for 24 to 48 hours, which resolves on its own. It is significantly more comfortable than metal brackets, and most patients adapt within the first few days.",
  },
  {
    pregunta: "How long does aligner treatment take?",
    respuesta:
      "It depends on the case. Simple cases can be resolved in 3 to 6 months. Moderate cases take between 9 and 18 months. Digital planning establishes the number of aligners and the estimated duration from the very start, so you know exactly what to expect before beginning.",
  },
  {
    pregunta: "What makes AM Aligners different from other aligners?",
    respuesta:
      "The difference is the planning and the follow-up: every movement is designed and approved before the first aligner is manufactured, and our in-house laboratory lets us react quickly if the plan needs adjusting. You are treated by the same specialist from start to finish.",
  },
  {
    pregunta: "Can aligners be combined with veneers?",
    respuesta:
      "Yes, and it is often the best sequence. Aligners move teeth into the right position first, so the veneers afterwards require the least possible preparation. When a case needs both, we plan them as a single integrated treatment.",
  },
  {
    pregunta: "Can I do aligner treatment if I live abroad?",
    respuesta:
      "Aligners require periodic check-ups, so they suit patients who live in or visit Buenos Aires regularly. If you are traveling for a single trip, veneers or smile design are usually the better fit. We will tell you honestly which applies to your case before you plan anything.",
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
  name: "Invisible Aligners (AM Aligners)",
  serviceType: "Orthodontics",
  description:
    "Clear aligner orthodontics with complete digital planning: no brackets, no wires, and the result visible before treatment begins.",
  provider: {
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
  areaServed: { "@type": "City", name: "Buenos Aires", addressCountry: "AR" },
  priceRange: "$$$$",
};

const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20more%20about%20invisible%20aligners.";

const WHY = [
  { t: "No brackets, no wires", d: "Removable for eating and brushing. No dietary restrictions. No irritation of gums or cheeks." },
  { t: "Genuinely discreet", d: "The material is transparent and low-visibility. Most people will not notice you are wearing them." },
  { t: "Complete digital planning", d: "Before starting, you see every movement and the final result on screen. You approve the plan before the first aligner is made." },
  { t: "Continuous follow-up", d: "Periodic check-ups confirm the treatment is following the digital plan. We adjust in real time if needed." },
];

const STEPS = [
  { n: "01", t: "Initial assessment", d: "Clinical analysis and X-rays. We determine whether aligners are the best option for your case." },
  { n: "02", t: "3D scanning", d: "We take a digital scan of your teeth. No plaster moulds, no discomfort." },
  { n: "03", t: "Digital plan", d: "We design every movement and show you the expected result. You approve it before manufacturing begins." },
  { n: "04", t: "Treatment", d: "You wear the aligners 22 hours a day and change them according to plan, with periodic check-ups." },
  { n: "05", t: "Retention", d: "Once the movement is complete, we plan retention so the result stays stable over time." },
];

export default function InvisibleAlignersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Navbar />

      <main className="bg-carbon text-crema font-manrope">

        {/* HERO */}
        <section className="relative min-h-[80dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
              AM Estética Dental · Puerto Madero · Buenos Aires
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
              Invisible Aligners<br />
              <span className="font-cormorant italic text-oro">in Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              Orthodontics without brackets or wires, with AM Aligners and complete digital planning. You see the result before we start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
              >
                Ask about aligners →
              </a>
              <Link
                href="/en/smile-design-buenos-aires"
                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
              >
                See smile design →
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
              {[
                { v: "4.9★", l: "Google Reviews" },
                { v: "Forbes", l: "Argentina" },
                { v: "22h/day", l: "standard protocol" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                  <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Why aligners</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Moving teeth{" "}
              <span className="font-cormorant italic text-oro">without anyone noticing</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WHY.map((w) => (
                <div key={w.t} className="border border-oro/15 rounded-2xl p-7 bg-carbon hover:border-oro/30 transition-colors">
                  <h3 className="text-crema font-manrope font-medium text-base mb-3">{w.t}</h3>
                  <p className="text-crema/65 font-manrope text-sm leading-relaxed">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">How it works</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              From the first scan{" "}
              <span className="font-cormorant italic text-oro">to the final result</span>
            </h2>
            <div className="space-y-0">
              {STEPS.map((step, i, arr) => (
                <div key={step.n} className={`flex gap-8 py-8 ${i < arr.length - 1 ? "border-b border-oro/10" : ""}`}>
                  <span className="text-oro/35 font-manrope font-light text-3xl flex-none w-12 pt-1">{step.n}</span>
                  <div>
                    <div className="text-crema font-manrope font-medium text-base mb-2">{step.t}</div>
                    <div className="text-crema-muted font-manrope text-sm leading-relaxed">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HONEST CTA */}
        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-crema font-manrope font-medium text-lg mb-1">Are aligners right for you?</p>
              <p className="text-crema/55 font-manrope text-sm">At the initial assessment we analyse your case and tell you whether they are the best option. No commitment.</p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none inline-flex items-center gap-3 bg-oro text-carbon px-7 py-3.5 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
            >
              Ask now →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Everything about{" "}
              <span className="font-cormorant italic text-oro">invisible aligners</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-t border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">You may also be interested in</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { nombre: "Porcelain Veneers", desc: "When the goal is changing shape and colour, not position.", href: "/en/porcelain-veneers-buenos-aires" },
                { nombre: "Smile Design", desc: "How we plan the whole result before starting.", href: "/en/smile-design-buenos-aires" },
                { nombre: "Before & After", desc: "Real documented cases, including combined treatments.", href: "/en/before-after" },
              ].map((t) => (
                <Link
                  key={t.nombre}
                  href={t.href}
                  className="border border-oro/15 rounded-2xl p-6 bg-carbon hover:border-oro/35 transition-colors group"
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
