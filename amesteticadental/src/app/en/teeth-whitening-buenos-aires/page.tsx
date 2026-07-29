import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/teeth-whitening-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20information%20about%20teeth%20whitening.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Teeth Whitening in Buenos Aires (Cost 2026) | AM Estética Dental",
  description:
    "Professional teeth whitening in Puerto Madero, Buenos Aires. LED and laser protocols designed to minimise sensitivity, supervised by Dr. Ariel Merino. USD figures.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/blanqueamiento-dental-precio-buenos-aires") },
  openGraph: {
    title: "Teeth Whitening in Buenos Aires | AM Estética Dental",
    description: "Immediate results with a protocol designed to minimise sensitivity. Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "Does teeth whitening hurt?",
    respuesta:
      "With the professional protocol we use at AM, sensitivity is minimal or non-existent. We apply a desensitising gel before and after each session. The vast majority of our patients report no discomfort.",
  },
  {
    pregunta: "How long does the whitening result last?",
    respuesta:
      "Between 1 and 3 years depending on habits. Coffee, wine, tea and tobacco accelerate re-darkening. With the take-home maintenance kit, the result can be extended considerably.",
  },
  {
    pregunta: "Can whitening be done on veneers or crowns?",
    respuesta:
      "No. Whitening only works on natural enamel. Ceramics, composites and crowns do not change colour. If you have existing restorations, we assess this at the initial consultation to coordinate the treatment properly.",
  },
  {
    pregunta: "How many whitening sessions are needed?",
    respuesta:
      "In most cases a single in-office session is enough to achieve a noticeable change. Deeper staining or severe yellowing may require 2 sessions, or the combined protocol with a take-home kit.",
  },
  {
    pregunta: "Can I have whitening during a short trip?",
    respuesta:
      "Yes. In-office whitening is completed in a single session, which makes it one of the easiest treatments to fit into a short stay in Buenos Aires. If you are also planning veneers, whitening is usually done first so the final shade can be matched to it.",
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

const OPTIONS = [
  { tipo: "LED whitening", precio: "From USD 150", nota: "In-office session" },
  { tipo: "Laser whitening", precio: "From USD 250", nota: "Higher intensity protocol" },
  { tipo: "Combined (clinic + take-home kit)", precio: "From USD 350", nota: "Longest-lasting result" },
];

export default function TeethWhiteningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-carbon text-crema font-manrope">

        <section className="relative min-h-[70dvh] flex items-center px-6 md:px-12 pt-32 pb-20">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-8">Buenos Aires · Puerto Madero</span>
            <h1 className="text-5xl md:text-6xl font-light text-crema leading-[1.02] mb-7">
              Teeth Whitening<br />
              <span className="font-cormorant italic text-oro">in Buenos Aires</span>
            </h1>
            <p className="text-crema/68 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              Immediate results. A protocol designed to minimise sensitivity, supervised by Dr. Ariel Merino in Puerto Madero.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
              Ask about whitening →
            </a>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Reference figures</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-12">
              The investment in{" "}
              <span className="font-cormorant italic text-oro">professional whitening</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OPTIONS.map((o) => (
                <div key={o.tipo} className="border border-oro/15 rounded-2xl p-6 bg-carbon">
                  <p className="text-oro text-[9px] uppercase tracking-widest mb-2">{o.tipo}</p>
                  <p className="text-oro font-semibold text-xl mb-1">{o.precio}</p>
                  <p className="text-crema/40 text-xs">{o.nota}</p>
                </div>
              ))}
            </div>
            <p className="text-crema/30 text-xs mt-6">
              Reference figures in USD, paid in pesos at the official Banco Nación exchange rate. The final plan is defined at the initial assessment.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Everything about{" "}
              <span className="font-cormorant italic text-oro">teeth whitening</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-t border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">You may also be interested in</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { nombre: "Porcelain Veneers", desc: "When whitening alone will not achieve the change you want.", href: "/en/porcelain-veneers-buenos-aires" },
                { nombre: "Smile Design", desc: "Planning the complete result before starting.", href: "/en/smile-design-buenos-aires" },
                { nombre: "Dental Tourism", desc: "How to fit treatment into a single trip.", href: "/en/dental-tourism-argentina" },
              ].map((t) => (
                <Link key={t.nombre} href={t.href} className="border border-oro/15 rounded-2xl p-6 bg-carbon hover:border-oro/35 transition-colors group">
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
