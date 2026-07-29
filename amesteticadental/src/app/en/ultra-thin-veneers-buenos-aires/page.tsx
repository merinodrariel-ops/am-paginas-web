import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/ultra-thin-veneers-buenos-aires";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Ultra-Thin (Contact Lens) Veneers in Buenos Aires | AM Estética Dental",
  description:
    "Ultra-thin contact lens veneers in Puerto Madero, Buenos Aires. Around 0.3 mm, with minimal enamel preparation, to refine color and shape. Natural results, assessed case by case.",
  alternates: {
    canonical: CANONICAL,
    languages: hreflangFor("/lentes-de-contacto-dental"),
  },
  openGraph: {
    title: "Ultra-Thin (Contact Lens) Veneers in Buenos Aires | AM Estética Dental",
    description:
      "The most conservative option in aesthetic veneers: ultra-thin ceramic with minimal preparation, when your case allows it. Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "What are ultra-thin (contact lens) veneers?",
    respuesta:
      "They are ultra-thin ceramic veneers, around 0.3 mm, designed to bond to the tooth surface with the least possible intervention. They are indicated when the underlying tooth is healthy and the goal is to improve shape, color or small details without a conventional preparation.",
  },
  {
    pregunta: "Are they always placed without removing enamel?",
    respuesta:
      "No. In many cases the preparation is so minimal it is barely visible, but honestly: some preparation is usually needed. It depends on tooth position, enamel thickness, your bite and the aesthetic goal. At AM Estética Dental we assess each case and tell you honestly whether you really qualify for the most conservative option or whether another solution will give you a better result.",
  },
  {
    pregunta: "What is the difference between ultra-thin veneers and porcelain veneers?",
    respuesta:
      "Ultra-thin veneers are an extra-fine variant within the world of ceramic veneers, used in more conservative cases. Conventional porcelain veneers allow bigger changes in position, shape and volume when the case needs more correction.",
  },
  {
    pregunta: "Do the results look natural?",
    respuesta:
      "Yes, when they are properly indicated. Their biggest advantage is precisely that they respect the original structure of the tooth and allow a very subtle, translucent result that harmonises with the face. The key is not only the material, but the judgment with which they are designed and placed.",
  },
  {
    pregunta: "How long do ultra-thin veneers last?",
    respuesta:
      "With a good diagnosis, high-quality materials and proper care, they can last between 10 and 20 years. Durability also depends on habits such as clenching, biting hard objects and general oral health maintenance.",
  },
  {
    pregunta: "What is the investment for ultra-thin veneers in Buenos Aires?",
    respuesta:
      "It depends on the number of units, the design of the case and the laboratory work involved. At the initial assessment we analyse whether they really are the best option for you and give you an exact figure. We work in USD with in-house financing. For international patients, our own laboratory means the whole treatment fits into a single trip.",
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
  name: "Ultra-Thin (Contact Lens) Veneers",
  serviceType: "Cosmetic Dentistry",
  description:
    "Ultra-thin ceramic veneers to improve color, shape and small details with minimal enamel preparation, when the case allows it.",
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

const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20more%20about%20ultra-thin%20veneers.";

export default function UltraThinVeneersPage() {
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
              Ultra-Thin Veneers<br />
              <span className="font-cormorant italic text-oro">in Buenos Aires</span>
            </h1>
            <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              The most conservative option within aesthetic veneers. Ultra-fine, natural, and designed for cases where the smile can be improved with the least possible intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
              >
                Ask about ultra-thin veneers →
              </a>
              <Link
                href="/en/dental-tourism-argentina"
                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
              >
                Traveling from abroad? →
              </Link>
            </div>
          </div>
        </section>

        {/* WHEN THEY MAKE SENSE */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">When they make sense</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-8">
              When you want to improve without{" "}
              <span className="font-cormorant italic text-oro">overdoing it</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                This option works best when the teeth are well positioned, the structure is healthy, and the goal is to refine: color, edges, shape or small gaps. It is not right for every case — and that distinction is exactly the difference between selling and diagnosing properly.
              </p>
              <p className="text-crema/70 font-manrope text-base leading-relaxed">
                If you need large changes in volume, bite correction or significant repositioning, a conventional veneer — or even prior treatment with aligners — will probably serve you better. We will tell you which one applies to you.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Key differences</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              Ultra-thin veneers vs{" "}
              <span className="font-cormorant italic text-oro">conventional veneers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-oro/25 rounded-2xl p-7 bg-carbon-soft">
                <h3 className="text-crema font-manrope font-medium text-base mb-3">Ultra-thin veneers</h3>
                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                  Designed for conservative cases. Lower thickness, minimal intervention and maximum visual discretion when the underlying tooth allows it.
                </p>
              </div>
              <div className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft">
                <h3 className="text-crema font-manrope font-medium text-base mb-3">Porcelain veneers</h3>
                <p className="text-crema/65 font-manrope text-sm leading-relaxed">
                  They transform more: volume, proportion, closing gaps and smile corrections where an ultra-fine option would not be enough.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HONEST CTA */}
        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-crema font-manrope font-medium text-lg mb-1">Want to know if you qualify for the most conservative option?</p>
              <p className="text-crema/55 font-manrope text-sm">At the initial assessment we tell you with clinical judgment, not empty promises.</p>
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
              <span className="font-cormorant italic text-oro">ultra-thin veneers</span>
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
                { nombre: "Porcelain Veneers", desc: "When the case needs a bigger change in shape, volume or position.", href: "/en/porcelain-veneers-buenos-aires" },
                { nombre: "Smile Design", desc: "How we plan the full result before touching a tooth.", href: "/en/smile-design-buenos-aires" },
                { nombre: "Before & After", desc: "Real documented cases by Dr. Ariel Merino.", href: "/en/before-after" },
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
