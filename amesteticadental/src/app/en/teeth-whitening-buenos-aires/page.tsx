import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import CasosBanda from "@/components/CasosBanda";
import { hreflangFor } from "@/lib/i18n-routes";
import { ANIO } from "@/lib/anio";

const CANONICAL = "https://www.amesteticadental.com/en/teeth-whitening-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20information%20about%20teeth%20whitening.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: `At-Home Teeth Whitening in Buenos Aires — Cost ${ANIO} | AM`,
  description:
    "At-home teeth whitening in Puerto Madero: custom trays and low-concentration gel over 7 to 10 days. No white-food diet, far less sensitivity risk.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/blanqueamiento-dental-precio-buenos-aires") },
  openGraph: {
    title: "At-Home Teeth Whitening in Buenos Aires | AM Estética Dental",
    description: "Custom trays, low-concentration gel, 7 to 10 days. Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "Why at-home whitening instead of an in-office session?",
    respuesta:
      "Because it is safer and the result is just as good. In-office whitening uses high-concentration gel to get a visible change in one session, which raises the risk of sensitivity, gum irritation and enamel damage. At-home whitening uses a low concentration (10–16% carbamide peroxide) sustained over 7 to 10 days: the same result, with much less risk.",
  },
  {
    pregunta: "Does at-home whitening hurt?",
    respuesta:
      "The sensitivity risk is much lower than with in-office whitening, precisely because the gel concentration is low. If it happens, it is usually mild and temporary. Drying your teeth a little before placing the tray with the gel helps.",
  },
  {
    pregunta: "Do I need to follow a white-food diet?",
    respuesta:
      "No. Unlike older advice, with this method you keep eating normally during the 7 to 10 days. There is no need to cut out coffee, wine or any particular food.",
  },
  {
    pregunta: "How many hours a day do I wear the tray?",
    respuesta:
      "Two to three hours if you use it during the day. In practice, almost every patient simply sleeps with the tray in, since it is simpler and does not interrupt the day.",
  },
  {
    pregunta: "Can whitening be done on veneers or crowns?",
    respuesta:
      "No. Whitening only works on natural enamel. Ceramics, composites and crowns do not change colour. If you have existing restorations, we assess this at the initial consultation to coordinate the treatment properly.",
  },
  {
    pregunta: "Can I do this during a short trip to Buenos Aires?",
    respuesta:
      "Yes. The scan and tray fitting take a single visit; you then take the trays and gel kit with you and finish the 7 to 10 days wherever you are. If you are also planning veneers, whitening is usually done first so the final shade can be matched to it.",
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

const BLANQ_CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/blanqueamiento-ambulatorio";
const IMG = {
  cubeta: `${BLANQ_CDN}/cubeta-blanqueamiento-dental-ambulatoria-a-medida-editorial-dr-ariel-merino-am-estetica-dental-buenos-aires`,
  jeringas: `${BLANQ_CDN}/jeringas-gel-blanqueamiento-dental-ambulatorio-editorial-dr-ariel-merino-am-estetica-dental-buenos-aires`,
};
const VIDEO_CUBETA = {
  mp4: "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto/blanqueamiento-ambulatorio/cubeta-blanqueamiento-giro-360-dr-ariel-merino-am-estetica-dental-buenos-aires.mp4",
  poster: IMG.cubeta,
};
const VIDEO_JERINGAS = {
  mp4: "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto/blanqueamiento-ambulatorio/jeringas-blanqueamiento-giro-360-dr-ariel-merino-am-estetica-dental-buenos-aires.mp4",
  poster: IMG.jeringas,
};

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
              At-Home Whitening<br />
              <span className="font-cormorant italic text-oro">at your own pace</span>
            </h1>
            <p className="text-crema/68 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              No lights, no rushed chairside session. Custom trays for your upper and lower arch, low-concentration gel, 7 to 10 days at home — supervised by Dr. Ariel Merino in Puerto Madero.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
              Ask about whitening →
            </a>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">How it works</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
              Why <span className="font-cormorant italic text-oro">at-home, not in-office</span>
            </h2>
            <p className="text-crema/60 text-sm leading-relaxed mb-12 max-w-2xl">
              We do not offer in-office whitening (LED or laser, done in one session) — we do not recommend it: the high gel concentration raises the risk of sensitivity, enamel damage and gum irritation. Our method is like having someone clean your house 24/7 for 7 to 10 days, instead of a 20-minute clean.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15 bg-carbon-soft">
                <video
                  src={VIDEO_CUBETA.mp4}
                  poster={VIDEO_CUBETA.poster}
                  autoPlay muted loop playsInline preload="metadata"
                  aria-label="Custom at-home whitening tray, rotating"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15 bg-carbon-soft">
                <video
                  src={VIDEO_JERINGAS.mp4}
                  poster={VIDEO_JERINGAS.poster}
                  autoPlay muted loop playsInline preload="metadata"
                  aria-label="At-home whitening gel syringes, rotating"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="border border-oro/15 rounded-2xl p-8 max-w-md bg-carbon">
              <p className="text-oro text-[9px] uppercase tracking-widest mb-2">At-home whitening</p>
              <p className="text-crema/70 text-sm leading-relaxed mb-4">Scan + custom upper and lower trays + gel syringe kit for 7 to 10 days · follow-up check included.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-oro hover:text-oro-light font-semibold text-sm transition-colors">
                Ask for exact pricing →
              </a>
            </div>
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

        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <CasosBanda
              lang="en"
              tratamientos={["Single Veneer", "Ceramic Veneers"]}
              cantidad={3}
              eyebrow="When whitening is not enough"
              titulo="Cases whitening cannot solve"
              bajada="Internal staining, teeth darkened by a root canal, enamel erosion: here colour is not corrected by bleaching."
            />
          </div>
        </section>

        <Contacto lang="en" />
      </main>
    </>
  );
}
