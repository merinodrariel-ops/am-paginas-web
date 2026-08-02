import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";
import ImplantVideoShowcase from "@/components/ImplantVideoShowcase";

const CANONICAL = "https://www.amesteticadental.com/en/dental-implants-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20information%20about%20dental%20implants.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Dental Implants in Buenos Aires | Cost and Process | AM Estética Dental",
  description:
    "Dental implants in Buenos Aires from USD 2,400 total (two phases). Straumann and Neodent implants with digital planning by Dr. Ariel Merino, Puerto Madero.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/implantes-dentales-buenos-aires") },
  keywords: "dental implants Buenos Aires, dental implant cost Argentina, implants Puerto Madero, dental tourism implants",
  openGraph: {
    title: "Dental Implants in Buenos Aires | AM Estética Dental",
    description:
      "Dental implants from USD 2,400 total. Straumann and Neodent, two-phase treatment with digital planning in Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "How long does the dental implant process take?",
    respuesta:
      "The implant is placed in a 45 to 60 minute surgery (Phase 1). Osseointegration takes 2 to 3 months. Once integrated, the definitive crown is placed (Phase 2). The total process runs 3 to 4 months.",
  },
  {
    pregunta: "Does getting an implant hurt?",
    respuesta:
      "The surgery is performed under local anaesthesia, so you feel no pain during the procedure. The first 2 to 3 days may involve mild discomfort managed with analgesics. Most patients return to their normal activities the next day.",
  },
  {
    pregunta: "How long does a dental implant last?",
    respuesta:
      "With good hygiene, regular check-ups and healthy habits, an implant can remain stable for many years. Its long-term performance depends on general health, bone, soft tissue and maintenance. The crown may also require replacement over time.",
  },
  {
    pregunta: "Can anyone get implants?",
    respuesta:
      "You need enough jawbone volume to place the implant. In cases of bone loss, a graft can be done beforehand. General health also plays a role. We assess all of this with a CBCT scan at the first consultation.",
  },
  {
    pregunta: "What is the investment for a dental implant in Buenos Aires?",
    respuesta:
      "At AM Estética Dental the treatment is split into two phases. Phase 1 (implant + extraction + bone graft + tissue graft) ranges from USD 1,200 to 1,500. Phase 2 (definitive crown) ranges from USD 1,200 to 1,500. The completed implant with crown totals USD 2,400 to 3,000. We use Straumann and Neodent implants (Straumann Group, Switzerland).",
  },
  {
    pregunta: "Are implants included in a complete oral rehabilitation?",
    respuesta:
      "In comprehensive oral rehabilitations with a total investment of USD 24,000 to 30,000, one to four implants are usually included in the overall plan, together with the ceramic restorations. Bone grafting and soft-tissue grafting may also be included when clinically indicated. The exact number and scope are confirmed after the CBCT diagnosis.",
  },
  {
    pregunta: "Can I get implants if I am traveling from abroad?",
    respuesta:
      "Implants require a healing period of 2 to 3 months between surgery and the final crown, so they usually mean two trips rather than one. We plan the schedule with you in advance and coordinate remotely between visits. If you only have one trip available, we will tell you honestly what can and cannot be completed.",
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

const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Dental implants in Buenos Aires — AM Estética Dental",
  url: CANONICAL,
  inLanguage: "en",
  about: { "@type": "MedicalProcedure", name: "Dental implant", bodyLocation: "Maxilla and mandible" },
};

const OPTIONS = [
  { tipo: "Phase 1 — Implant", precio: "USD 1,200 – 1,500", nota: "All-inclusive: extraction + bone graft + tissue graft" },
  { tipo: "Phase 2 — Crown", precio: "USD 1,200 – 1,500", nota: "Ceramic or biomimetic zirconia" },
  { tipo: "Completed implant", precio: "USD 2,400 – 3,000", nota: "Straumann or Neodent (Straumann Group, Switzerland)" },
  { tipo: "Comprehensive rehabilitation", precio: "USD 24,000 – 30,000", nota: "One to four implants are usually included" },
];

export default function DentalImplantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />

      <Navbar />

      <main className="bg-carbon text-crema font-manrope">

        {/* HERO */}
        <section className="relative min-h-[75dvh] flex items-center px-6 md:px-12 pt-32 pb-20">
          <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-8">Buenos Aires · Puerto Madero</span>
            <h1 className="text-5xl md:text-6xl font-light text-crema leading-[1.02] mb-7">
              Dental Implants<br />
              <span className="font-cormorant italic text-oro">in Buenos Aires</span>
            </h1>
            <p className="text-crema/68 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              A stable, long-term solution for missing teeth. Straumann and Neodent implants from the Swiss Straumann Group. Computer-guided digital planning. Osseointegration in 2 to 3 months.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all"
            >
              Find out if you need an implant →
            </a>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 bg-carbon border-y border-oro/10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-4">Comprehensive oral rehabilitation</span>
              <h2 className="text-3xl md:text-4xl font-light text-crema leading-tight mb-5">
                One to four implants are usually <span className="font-cormorant italic text-oro">included in the plan.</span>
              </h2>
              <p className="text-crema/60 text-sm md:text-base leading-relaxed">
                For a complete smile rehabilitation, implants are not planned as isolated items. In comprehensive plans with a total investment of <strong className="text-crema font-medium">USD 24,000 to 30,000</strong>, one to four implants are usually included together with the ceramic restorations.
              </p>
            </div>
            <div className="border border-oro/20 rounded-2xl p-6 md:p-8 bg-carbon-soft">
              <p className="text-oro text-xs uppercase tracking-[0.25em] mb-5">When clinically indicated, the plan may include</p>
              <ul className="space-y-3 text-crema/65 text-sm">
                <li className="flex gap-3"><span className="text-oro">◆</span> One to four Straumann® or Neodent® implants</li>
                <li className="flex gap-3"><span className="text-oro">◆</span> Bone augmentation or grafting</li>
                <li className="flex gap-3"><span className="text-oro">◆</span> Soft-tissue grafting for aesthetic support</li>
                <li className="flex gap-3"><span className="text-oro">◆</span> Crowns and ceramic restorations planned as one system</li>
              </ul>
              <p className="text-crema/35 text-xs leading-relaxed mt-5 pt-5 border-t border-oro/10">The exact scope depends on diagnosis, implant distribution and biological complexity. It is confirmed after CBCT imaging and clinical planning.</p>
            </div>
          </div>
        </section>

        <ImplantVideoShowcase lang="en" />

        {/* INVESTMENT */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Reference figures</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-12">
              What is the investment for an implant{" "}
              <span className="font-cormorant italic text-oro">in Buenos Aires?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {OPTIONS.map((o) => (
                <div key={o.tipo} className="border border-oro/15 rounded-2xl p-6 bg-carbon">
                  <p className="text-oro text-[9px] uppercase tracking-widest mb-2">{o.tipo}</p>
                  <p className="text-oro font-semibold text-xl mb-1">{o.precio}</p>
                  <p className="text-crema/40 text-xs">{o.nota}</p>
                </div>
              ))}
            </div>
            <p className="text-crema/30 text-xs">
              Investment defined after CBCT (3D scan) diagnosis. USD amounts are paid in pesos at the official Banco Nación exchange rate.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">The process</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
              From diagnosis{" "}
              <span className="font-cormorant italic text-oro">to the definitive crown</span>
            </h2>
            <div className="space-y-0">
              {[
                { n: "01", t: "CBCT diagnosis", d: "A 3D scan lets us measure bone volume and plan the exact position of the implant before any surgery." },
                { n: "02", t: "Guided digital planning", d: "We design the placement on computer so the surgery is as precise and predictable as possible." },
                { n: "03", t: "Placement surgery", d: "A 45 to 60 minute procedure under local anaesthesia. Most patients return to normal activity the next day." },
                { n: "04", t: "Osseointegration", d: "The implant integrates with your bone over 2 to 3 months. During this period we coordinate check-ups." },
                { n: "05", t: "Definitive crown", d: "Once integrated, we place the final ceramic or zirconia crown, made in our own laboratory." },
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

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-3xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
              Everything about{" "}
              <span className="font-cormorant italic text-oro">dental implants</span>
            </h2>
            <SeoFaq items={faqItems} />
          </div>
        </section>

        {/* STRAUMANN GROUP */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-square max-w-sm mx-auto">
              <Image
                src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/implantes-dentales-am/implante-dental-neodent-grupo-straumann-despiece-corona-pilar-tornillo-fondo-negro-am-estetica-dental-puerto-madero"
                alt="Neodent dental implant from the Straumann Group, 3D exploded view: crown, abutment and titanium screw — AM Estética Dental, Puerto Madero, Buenos Aires"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">Straumann Group · Switzerland</span>
              <h2 className="text-2xl font-light text-crema mb-4">Top-tier Swiss <span className="font-cormorant italic text-oro">implants.</span></h2>
              <p className="text-crema/60 text-sm leading-relaxed mb-4">We work exclusively with implants from the Straumann Group: Neodent (high-end) and Straumann (top-of-the-line, world #1). Both are Swiss titanium implants backed by the strongest scientific evidence in the field.</p>
              <p className="text-crema/60 text-sm leading-relaxed mb-6">Every crown is designed to mimic the colour and translucency of your natural teeth. Our approach is always biomimetic: nobody should notice you have an implant.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-oro text-sm hover:text-oro/80 transition-colors">Ask about the investment for my case →</a>
            </div>
          </div>
        </section>

        {/* REAL CASES */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Real cases</span>
              <h2 className="text-2xl font-light text-crema">
                Real rehabilitations <span className="font-cormorant italic text-oro">at AM Estética Dental.</span>
              </h2>
              <p className="text-crema/45 text-sm mt-3 max-w-xl">
                Dental agenesis: implants + 24 ceramic restorations. One of the most complex rehabilitations completed by Dr. Ariel Merino.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental", alt: "Dental agenesis before and after — full rehabilitation with implants and ceramics — Dr. Ariel Merino AM Estética Dental" },
                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires", alt: "Intraoral before and after — dental implants and 24 ceramic restorations — AM Estética Dental Buenos Aires" },
                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-labios-sonrisa-portada-carillas-ceramicas-alineadores-invisibles-dr-ariel-merino-am-estetica-dental", alt: "Lips and smile before and after — dental agenesis treated with implants and ceramic veneers — Dr. Ariel Merino AM Estética Dental" },
              ].map((foto) => (
                <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                  <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/en/before-after" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                See all clinical cases →
              </Link>
            </div>
          </div>
        </section>

        <Contacto lang="en" />
      </main>
    </>
  );
}
