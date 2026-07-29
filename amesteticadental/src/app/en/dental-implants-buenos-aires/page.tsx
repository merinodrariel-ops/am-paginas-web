import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import Contacto from "@/components/Contacto";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/dental-implants-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20information%20about%20dental%20implants.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Dental Implants in Buenos Aires | Cost and Process | AM Estética Dental",
  description:
    "Dental implants in Buenos Aires: cost, process and timelines. Titanium and zirconia with computer-guided digital planning by Dr. Ariel Merino, Puerto Madero.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/implantes-dentales-buenos-aires") },
  keywords: "dental implants Buenos Aires, dental implant cost Argentina, implants Puerto Madero, dental tourism implants",
  openGraph: {
    title: "Dental Implants in Buenos Aires | AM Estética Dental",
    description:
      "The permanent solution for missing teeth, with digital planning and CBCT diagnosis in Puerto Madero, Buenos Aires.",
    url: CANONICAL,
    locale: "en_US",
    type: "website",
  },
};

const faqItems = [
  {
    pregunta: "How long does the dental implant process take?",
    respuesta:
      "The implant is placed in a 45 to 60 minute surgery. Integration with the bone (osseointegration) takes between 3 and 6 months. Once integrated, the definitive crown is placed. The total process runs 4 to 8 months.",
  },
  {
    pregunta: "Does getting an implant hurt?",
    respuesta:
      "The surgery is performed under local anaesthesia, so you feel no pain during the procedure. The first 2 to 3 days may involve mild discomfort managed with analgesics. Most patients return to their normal activities the next day.",
  },
  {
    pregunta: "How long does a dental implant last?",
    respuesta:
      "With normal care — good hygiene, annual check-ups, not smoking — dental implants can last a lifetime. The crown on top of the implant may need replacing every 15 to 20 years.",
  },
  {
    pregunta: "Can anyone get implants?",
    respuesta:
      "You need enough jawbone volume to place the implant. In cases of bone loss, a graft can be done beforehand. General health also plays a role. We assess all of this with a CBCT scan at the first consultation.",
  },
  {
    pregunta: "What is the investment for a dental implant in Buenos Aires?",
    respuesta:
      "At AM Estética Dental a single implant starts from USD 1,200 including the crown. The investment varies with the crown material (ceramic or zirconia) and the complexity of the case, and is defined precisely after the CBCT diagnosis.",
  },
  {
    pregunta: "Can I get implants if I am traveling from abroad?",
    respuesta:
      "Implants require a healing period of 3 to 6 months between surgery and the final crown, so they usually mean two trips rather than one. We plan the schedule with you in advance and coordinate remotely between visits. If you only have one trip available, we will tell you honestly what can and cannot be completed.",
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
  { tipo: "Single implant", precio: "From USD 1,200", nota: "Per unit · crown included" },
  { tipo: "Implant + zirconia crown", precio: "From USD 1,200", nota: "Higher aesthetics and biocompatibility" },
  { tipo: "Full-arch rehabilitation", precio: "Assessed case by case", nota: "Depends on the number of units" },
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
              The permanent solution for missing teeth. Computer-guided digital planning. Titanium and zirconia. Full integration with the bone in 3 to 6 months.
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

        {/* INVESTMENT */}
        <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Reference figures</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-12">
              What is the investment for an implant{" "}
              <span className="font-cormorant italic text-oro">in Buenos Aires?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                { n: "04", t: "Osseointegration", d: "The implant integrates with your bone over 3 to 6 months. During this period we coordinate check-ups." },
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
