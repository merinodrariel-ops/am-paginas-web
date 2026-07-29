import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/porcelain-vs-composite-veneers";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20which%20veneer%20material%20suits%20my%20case.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Porcelain vs Composite Veneers | AM Estética Dental",
  description: "Porcelain or composite veneers: durability, naturalness, investment and maintenance compared. Which one suits your case, by Dr. Ariel Merino in Puerto Madero.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/carillas-de-porcelana-vs-resina") },
  openGraph: {
    title: "Porcelain vs Composite Veneers | AM Estética Dental",
    description: "An honest comparison between porcelain and composite veneers: how long each lasts, how natural they look and when each one makes sense.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "Which lasts longer: porcelain or composite?",
    respuesta:
      "Porcelain lasts longer. Well made and well cared for, it can stay in place for 10 to 20 years. Composite typically requires more maintenance and has a shorter usable life.",
  },
  {
    pregunta: "Which looks more natural?",
    respuesta:
      "Optically, porcelain usually imitates the translucency of enamel better. That said, a good composite that is correctly indicated can look very good. The point is not only the material, but knowing when each one is the right call.",
  },
  {
    pregunta: "Is composite always the cheap option?",
    respuesta:
      "It has a lower entry figure, but it is not always the better long-term investment. If the goal is maximum stability and refinement, porcelain usually justifies the difference.",
  },
  {
    pregunta: "Which is better for a complete smile?",
    respuesta:
      "It depends on the case and on the level of aesthetic demand. For more stable and sophisticated transformations, porcelain is usually the better choice. For targeted adjustments or more limited treatments, composite can make a lot of sense.",
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
    titulo: "Porcelain veneers",
    desc: "The gold standard when the goal is a definitive, stable transformation.",
    puntos: ["10 to 20 years of usable life", "Best imitation of enamel translucency", "Highly stain-resistant", "Made in our in-house laboratory"],
  },
  {
    titulo: "Composite veneers",
    desc: "A more conservative entry point, useful for targeted or shorter-term goals.",
    puntos: ["5 to 7 years of usable life", "Lower initial investment", "Completed in fewer sessions", "Requires periodic maintenance and polishing"],
  },
];

export default function PorcelainVsCompositePage() {
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
              Porcelain vs<br />
              <span className="font-cormorant italic text-oro">Composite Veneers</span>
            </h1>
            <p className="text-crema/68 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              The right comparison is not which one is “better”, but which one suits your case, your budget and the level of aesthetic refinement you are after.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
              Ask which one suits my case →
            </a>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Side by side</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Two materials,{" "}
              <span className="font-cormorant italic text-oro">two different jobs</span>
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
              <span className="font-cormorant italic text-oro">choosing the material</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-t border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">You may also be interested in</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { nombre: "Porcelain Veneers", desc: "The full treatment explained.", href: "/en/porcelain-veneers-buenos-aires" },
                { nombre: "Ultra-Thin Veneers", desc: "The most conservative ceramic option.", href: "/en/ultra-thin-veneers-buenos-aires" },
                { nombre: "Investment", desc: "USD figures for each treatment.", href: "/en/veneers-cost-buenos-aires" },
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
