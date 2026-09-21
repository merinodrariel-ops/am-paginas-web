import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";
import { ANIO } from "@/lib/anio";

const CANONICAL = "https://www.amesteticadental.com/en/dental-implants-cost-buenos-aires";

// Por qué existe esta página: /precio-implantes-dentales-buenos-aires es la página
// más vista de toda la red —87.000 impresiones en 30 días— y era la única de las dos
// "madre" sin versión en inglés. Su gemela de carillas
// (/en/veneers-cost-buenos-aires) existía desde hace rato, así que el turismo dental
// podía averiguar cuánto cuestan las carillas en Buenos Aires pero no los implantes.
//
// Igual que su gemela: la URL y el <title> dicen "cost" porque es como se busca; el
// cuerpo habla de INVESTMENT. Y no es una traducción línea por línea de las 492
// líneas en español, es la versión condensada que necesita alguien que está a 10.000
// kilómetros decidiendo si vale la pena el viaje.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: `Dental Implants Cost in Buenos Aires ${ANIO} | AM`,
  description:
    "The implant from USD 1,500 (Neodent) or USD 2,000 (Straumann), surgery and grafts included. Finished with the crown, from USD 3,000. In-house financing.",
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor("/precio-implantes-dentales-buenos-aires"),
  },
  openGraph: {
    title: `Dental Implants Cost in Buenos Aires (USD ${ANIO}) | AM Estética Dental`,
    description:
      "Transparent USD figures for dental implants in Puerto Madero: what each phase includes, which systems we use and how financing works.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

// Dos sistemas, dos números: es toda la lista de precios. Lo que confunde en
// implantes no es la duración, es qué entra en la cifra — de ahí la tercera columna.
const TABLE = [
  {
    etapa: "Neodent® implant",
    precio: "from USD 1,500",
    incluye: "The complete surgery: the implant, plus the extraction, the bone graft and the membrane when the site needs them.",
  },
  {
    etapa: "Straumann® implant",
    precio: "from USD 2,000",
    incluye: "The same complete surgery, with the system made in Switzerland.",
  },
  {
    etapa: "The definitive crown",
    precio: "USD 1,500",
    incluye: "The same with either system: what changes is the screw, not what you see. It goes on 2 to 3 months later.",
  },
  {
    etapa: "Total, finished",
    precio: "from USD 3,000",
    incluye: "USD 3,500 if the implant is a Straumann®. This is the figure to compare against any other quote.",
  },
  {
    etapa: "Full-mouth rehabilitation",
    precio: "USD 24,000 – 30,000",
    incluye: "Usually covers one to four implants along with the ceramic restorations and any grafting required.",
  },
];

const faqItems = [
  {
    pregunta: "How much does a dental implant cost in Buenos Aires?",
    respuesta:
      "There are two options and nothing else: the Neodent® implant from USD 1,500 and the Straumann® from USD 2,000. That figure is the complete surgery — it already covers the extraction if the tooth is still there, the bone graft the site needs and the membrane for the soft tissue when it is indicated. The definitive crown costs USD 1,500 and is the same with either system — what changes is the screw, not what you see. It goes on 2 to 3 months later, once the implant has integrated with the bone, so the finished treatment comes to USD 3,000 with Neodent® or USD 3,500 with Straumann®. In-house financing is available at a fixed 18% annual rate.",
  },
  {
    pregunta: "Why do I see implants advertised for USD 800?",
    respuesta:
      "Because that figure is almost always the component on its own — before the surgery, the extraction, the bone graft and the membrane, which are then added one by one. Quoted that way, a single implant can easily end up between USD 5,000 and 7,000, well above the number that got you through the door. Ours starts at USD 1,500 and that already is the complete surgery. The honest comparison is like for like: what you pay to walk out with the work done.",
  },
  {
    pregunta: "What is the difference between Neodent and Straumann?",
    respuesta:
      "Both are premium systems and both belong to the same Swiss group: Neodent is part of the Straumann Group. Straumann is manufactured in Switzerland and is the most recognised implant brand in the world, with the longest track record and the strongest scientific backing — it is our reference choice for the most demanding aesthetic zones, and it starts at USD 2,000. Neodent is a Brazilian brand the Straumann Group acquired and now manufactures to its own standards: the same backing, better value within the premium range, starting at USD 1,500. We advise which one suits your case at the initial assessment.",
  },
  {
    pregunta: "Can an implant be done in a single trip?",
    respuesta:
      "Not usually, and we would rather say so before you book a flight. The implant needs 2 to 3 months to integrate with the bone before the crown can go on. International patients normally plan two trips, or combine the surgery with other treatment and return for the crown. Veneers and smile design, by contrast, are routinely completed in a single 10 to 14 day trip.",
  },
  {
    pregunta: "Do you offer financing for implants?",
    respuesta:
      "Yes. We offer in-house financing at a fixed 18% annual rate (1.5% monthly) on the financed balance. You can model a plan with a 30% or 50% deposit and see the instalments over 3, 6 or 12 months.",
  },
  {
    pregunta: "How does the first implant consultation work?",
    respuesta:
      "The first visit is a clinical assessment. If you already have recent X-rays or scans, bring them, but they are not a requirement. If a CBCT scan turns out to be necessary, it is prescribed separately at an imaging centre — AM does not perform it and it is not included in the consultation.",
  },
  {
    pregunta: "Are USD prices paid in dollars or in pesos?",
    respuesta:
      "USD figures are paid in Argentine pesos at the official Banco Nación exchange rate on the day of payment. That lets you plan the treatment without surprises.",
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

const WA =
  "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20the%20investment%20for%20dental%20implants%20in%20my%20case.";

export default function DentalImplantsCostPage() {
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
              What dental implants cost<br />
              <span className="font-cormorant italic text-oro">in Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              Two systems, two numbers. Each one is the complete surgery — not the screw on its own — so the figure below is not the one that grows on you later.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
              >
                Ask about the investment for my case →
              </a>
              <Link
                href="/en/dental-implants-buenos-aires"
                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
              >
                ← See the implant treatment
              </Link>
            </div>
          </div>
        </section>

        {/* TABLE */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Reference figures</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-12">
              Two systems,{" "}
              <span className="font-cormorant italic text-oro">two numbers</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-oro/20">
                    <th className="py-4 pr-4 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro/70 font-medium">Stage</th>
                    <th className="py-4 px-4 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro/70 font-medium">Investment</th>
                    <th className="py-4 pl-4 font-manrope text-[10px] uppercase tracking-[0.28em] text-oro/70 font-medium">What it includes</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((row) => (
                    <tr key={row.etapa} className="border-b border-oro/8">
                      <td className="py-5 pr-4 font-manrope text-sm text-crema align-top">{row.etapa}</td>
                      <td className="py-5 px-4 font-manrope text-sm text-oro font-medium whitespace-nowrap align-top">{row.precio}</td>
                      <td className="py-5 pl-4 font-manrope text-sm text-crema/60 leading-relaxed">{row.incluye}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-crema/30 font-manrope text-xs mt-6">
              * Figures in USD, updated {ANIO}. They read &ldquo;from&rdquo; because they are all-in: if the case calls for an extra component it is not a surprise at the end. USD amounts are paid in pesos at the official Banco Nación exchange rate.
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
                {
                  n: "01",
                  t: "What the quote actually covers",
                  d: "A cheaper quote is usually the component alone, before the surgery, the extraction and the graft. Quoted piece by piece, a single implant can reach USD 5,000 to 7,000. Compare like for like and most of the gap disappears.",
                },
                {
                  n: "02",
                  t: "The state of the bone",
                  d: "If the tooth has been missing for a while the bone recedes, and the site needs grafting before it can hold an implant. That graft is already inside our figure — it is not added afterwards.",
                },
                {
                  n: "03",
                  t: "The implant system",
                  d: "We only use Straumann Group systems. Straumann is made in Switzerland and starts at USD 2,000; Neodent is a Brazilian brand the group acquired, built to its standards, and starts at USD 1,500. Both are premium.",
                },
                {
                  n: "04",
                  t: "How many teeth are involved",
                  d: "Replacing one tooth is not the same as rehabilitating a full arch, where implants, ceramics and grafts are planned together as a single treatment.",
                },
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

        {/* TWO TRIPS */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Being honest</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
              An implant rarely fits{" "}
              <span className="font-cormorant italic text-oro">in one trip</span>
            </h2>
            <p className="text-crema/65 font-manrope text-base leading-relaxed">
              The implant needs 2 to 3 months to integrate with the bone before the crown goes on, so international patients usually plan two trips or combine the surgery with other treatment. We would rather tell you that now than after you have booked a flight. Veneers and smile design are a different story — those are routinely finished in a single 10 to 14 day visit.
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
                { nombre: "Dental Implants", desc: "The treatment, the systems and what to expect.", href: "/en/dental-implants-buenos-aires" },
                { nombre: "Dental Tourism", desc: "How international patients plan the trip.", href: "/en/dental-tourism-argentina" },
                { nombre: "Veneers Cost", desc: "USD figures for porcelain and composite veneers.", href: "/en/veneers-cost-buenos-aires" },
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
