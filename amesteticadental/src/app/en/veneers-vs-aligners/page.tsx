import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/veneers-vs-aligners";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20whether%20I%20need%20veneers%20or%20aligners.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Veneers vs Invisible Aligners | AM Estética Dental",
  description: "Veneers or invisible aligners: what each one corrects, how long they take and when to combine them. Honest guidance from Dr. Ariel Merino, Puerto Madero.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/carillas-vs-alineadores") },
  openGraph: {
    title: "Veneers vs Invisible Aligners | AM Estética Dental",
    description: "Which one do you actually need: veneers or aligners? It depends on whether the problem is colour and shape, or position and bite.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "What do veneers correct and what do aligners correct?",
    respuesta:
      "Veneers change shape, colour, size and small details of visual position. Aligners actually move the teeth. If the problem is structural or related to the bite, the answer is usually orthodontics. If the problem is surface-level aesthetics, veneers can solve it better.",
  },
  {
    pregunta: "What if my teeth are crooked?",
    respuesta:
      "If there is real misalignment, the most sensible route is usually to move the teeth first with aligners. Afterwards, if needed, shape and colour are refined with veneers. Covering a position problem with veneers does not always give the most natural result.",
  },
  {
    pregunta: "Which is faster: veneers or aligners?",
    respuesta:
      "Veneers deliver a faster change because they do not move teeth — they redesign the visible surface. Aligners take longer because they correct the dental base. Speed alone does not determine which one is right for you.",
  },
  {
    pregunta: "Can both treatments be combined?",
    respuesta:
      "Yes, and often that is the best strategy. First the base is aligned with invisible orthodontics, and then proportions, colour and texture are refined with veneers or ultra-thin veneers.",
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

const COLS = [
  {
    titulo: "Veneers",
    desc: "They redesign the visible surface: colour, shape, proportion and small details of position.",
    puntos: ["Fast: days, not months", "Change colour and shape definitively", "Ideal for a single trip", "Do not correct the bite"],
  },
  {
    titulo: "Invisible aligners",
    desc: "The logical option when teeth genuinely need to move: gaps, crowding or bite problems.",
    puntos: ["They change the base, not just the surface", "3 to 18 months depending on the case", "Require periodic check-ups", "Can be combined with veneers afterwards"],
  },
];

export default function VeneersVsAlignersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-carbon text-crema font-manrope">

        <section className="relative min-h-[70dvh] flex items-center px-6 md:px-12 pt-32 pb-20">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-8">Comparison · Buenos Aires</span>
            <h1 className="text-5xl md:text-6xl font-light text-crema leading-[1.02] mb-7">
              Veneers vs<br />
              <span className="font-cormorant italic text-oro">Invisible Aligners</span>
            </h1>
            <p className="text-crema/68 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              The right decision does not depend on which treatment sounds better, but on which problem you want to solve: colour and shape, or position and bite.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
              Ask which one I need →
            </a>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Side by side</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Two treatments,{" "}
              <span className="font-cormorant italic text-oro">two different problems</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COLS.map((c) => (
                <div key={c.titulo} className="border border-oro/20 rounded-2xl p-7 bg-carbon">
                  <h3 className="text-crema font-manrope font-medium text-lg mb-4">{c.titulo}</h3>
                  <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-5">{c.desc}</p>
                  <ul className="space-y-2">
                    {c.puntos.map((p) => (
                      <li key={p} className="text-crema/55 font-manrope text-sm flex gap-2">
                        <span className="text-oro/60 flex-none">·</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Everything about{" "}
              <span className="font-cormorant italic text-oro">choosing the treatment</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-t border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">You may also be interested in</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { nombre: "Invisible Aligners", desc: "AM Aligners: process and timelines.", href: "/en/invisible-aligners-buenos-aires" },
                { nombre: "Porcelain Veneers", desc: "The full treatment explained.", href: "/en/porcelain-veneers-buenos-aires" },
                { nombre: "Smile Design", desc: "How we plan combined treatments.", href: "/en/smile-design-buenos-aires" },
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
