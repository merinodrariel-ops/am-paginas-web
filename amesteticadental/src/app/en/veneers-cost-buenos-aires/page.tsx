import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/veneers-cost-buenos-aires";

// Nota de marca: la URL y el <title> usan "cost/price" porque es como busca la
// gente. En el cuerpo se habla de INVERSIÓN (investment), nunca de "precio".
export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Veneers Cost in Buenos Aires (USD Prices 2026) | AM Estética Dental",
  description:
    "What porcelain veneers cost in Buenos Aires: USD figures per unit, what changes the investment, financing and what is included. Dr. Ariel Merino, Puerto Madero.",
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor("/precio-carillas-dentales-buenos-aires"),
  },
  openGraph: {
    title: "Veneers Cost in Buenos Aires (USD 2026) | AM Estética Dental",
    description:
      "Transparent USD figures for porcelain and composite veneers in Puerto Madero, with in-house financing and an in-house laboratory.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const TABLE = [
  { tratamiento: "Ceramic (porcelain) veneers", precio: "USD 1,000 – 1,500", duracion: "10 – 20 years", sesiones: "2 – 3" },
  { tratamiento: "Composite veneers", precio: "USD 500", duracion: "5 – 7 years", sesiones: "1 – 2" },
  { tratamiento: "Ultra-thin (contact lens) veneers", precio: "USD 1,000 – 1,500", duracion: "10 – 15 years", sesiones: "2 – 3" },
  { tratamiento: "Full digital smile design", precio: "Assessed case by case", duracion: "Permanent", sesiones: "3 – 4" },
];

const faqItems = [
  {
    pregunta: "What is the investment for veneers in Buenos Aires?",
    respuesta:
      "Ceramic veneers are in the range of USD 1,000 to 1,500 per unit, and composite veneers around USD 500 per unit. The final figure depends on the number of units, the complexity of the case and the laboratory work involved. The initial assessment defines it exactly.",
  },
  {
    pregunta: "What changes the investment most: porcelain or composite?",
    respuesta:
      "The material is the biggest single factor. Porcelain requires laboratory work, higher-cost materials and more sessions, and it lasts 10 to 20 years. Composite is done chairside in fewer sessions and lasts 5 to 7 years. The right choice depends on your case, not only on the figure.",
  },
  {
    pregunta: "Is financing available?",
    respuesta:
      "Yes. We offer in-house financing at a fixed 18% annual rate, with a 30% to 50% deposit and instalments over 3, 6 or 12 months. USD figures are paid in pesos at the official Banco Nación exchange rate on the day of payment.",
  },
  {
    pregunta: "Why is AM not the cheapest option?",
    respuesta:
      "Because we do not compete on price. We compete on result and on time: our own in-house laboratory, high-end materials, digital planning and a clinician who takes personal responsibility for every case. If the lowest quote is the priority, we are honest about not being the right fit.",
  },
  {
    pregunta: "What does the investment include?",
    respuesta:
      "The full digital smile design, the diagnostic study, the ceramic work from our own laboratory, the placement sessions, the final adjustments and clinical follow-up. There are no hidden extras added at the end.",
  },
  {
    pregunta: "Is it worth traveling from abroad for the investment?",
    respuesta:
      "Most of our international patients do not travel to save money — they travel to save time. Our in-house laboratory lets us complete a full smile transformation in a single 10 to 14 day trip, instead of the months a comparable treatment usually takes elsewhere.",
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

const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20the%20investment%20for%20my%20case.";

export default function VeneersCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className="bg-carbon text-crema font-manrope">

        {/* HERO */}
        <section className="relative min-h-[70dvh] flex items-center px-6 md:px-12 pt-32 pb-20">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
              Transparent figures · Puerto Madero
            </span>
            <h1 className="text-5xl md:text-6xl font-manrope font-light text-crema leading-[1.02] mb-7">
              What veneers cost<br />
              <span className="font-cormorant italic text-oro">in Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              Real figures in USD, with no hidden extras. Below you will find what defines the investment for each case, what is included, and how financing works.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
            >
              Ask about the investment for my case →
            </a>
          </div>
        </section>

        {/* TABLE */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Reference figures</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-12">
              The investment for{" "}
              <span className="font-cormorant italic text-oro">each treatment</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-oro/20">
                    <th className="py-4 pr-4 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro/70 font-medium">Treatment</th>
                    <th className="py-4 px-4 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro/70 font-medium">Investment / unit</th>
                    <th className="py-4 px-4 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro/70 font-medium">Estimated lifespan</th>
                    <th className="py-4 pl-4 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro/70 font-medium">Sessions</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((row) => (
                    <tr key={row.tratamiento} className="border-b border-oro/8">
                      <td className="py-5 pr-4 font-manrope text-sm text-crema">{row.tratamiento}</td>
                      <td className="py-5 px-4 font-manrope text-sm text-oro font-medium">{row.precio}</td>
                      <td className="py-5 px-4 font-manrope text-sm text-crema/60">{row.duracion}</td>
                      <td className="py-5 pl-4 font-manrope text-sm text-crema/60">{row.sesiones}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-crema/30 font-manrope text-xs mt-6">
              * Reference figures in USD, per unit, updated 2026. The final investment is defined at the initial assessment based on the number of units and the complexity of the case. USD amounts are paid in pesos at the official Banco Nación exchange rate.
            </p>
          </div>
        </section>

        {/* WHAT DEFINES IT */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">What defines it</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Four things change{" "}
              <span className="font-cormorant italic text-oro">the investment</span>
            </h2>
            <div className="space-y-0">
              {[
                { n: "01", t: "The material", d: "Porcelain requires laboratory work and higher-cost materials, and lasts 10 to 20 years. Composite is done chairside and lasts 5 to 7." },
                { n: "02", t: "The number of units", d: "A single veneer is not the same as a full smile design of 8 to 10 units. The more units, the better the per-unit figure usually becomes." },
                { n: "03", t: "The starting point", d: "If there is wear, previous restorations, gum work or bite issues to resolve first, the plan — and the investment — changes." },
                { n: "04", t: "The complexity of the design", d: "A subtle refinement is not the same as reconstructing proportion, incisal plane and facial harmony from scratch." },
              ].map((step, i, arr) => (
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

        {/* NOT THE CHEAPEST */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Being honest</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
              AM is not{" "}
              <span className="font-cormorant italic text-oro">the cheapest option</span>
            </h2>
            <p className="text-crema/65 font-manrope text-base leading-relaxed">
              And it does not try to be. We do not compete on price — we compete on result and on time. Our own in-house laboratory, high-end materials, fully digital planning and a clinician who personally takes responsibility for every case. If the lowest quote is your priority, we would rather tell you up front that we are not the right fit.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Everything about{" "}
              <span className="font-cormorant italic text-oro">the investment</span>
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
                { nombre: "Porcelain Veneers", desc: "Types, process and what to expect from the treatment.", href: "/en/porcelain-veneers-buenos-aires" },
                { nombre: "Dental Tourism", desc: "How international patients do it in a single trip.", href: "/en/dental-tourism-argentina" },
                { nombre: "Before & After", desc: "Real documented cases with their timelines.", href: "/en/before-after" },
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
