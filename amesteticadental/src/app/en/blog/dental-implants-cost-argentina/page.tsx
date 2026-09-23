import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { hreflangFor } from "@/lib/i18n-routes";
import Image from "next/image";
import Contacto from "@/components/Contacto";
import { ANIO } from "@/lib/anio";

const CANONICAL = "https://www.amesteticadental.com/en/blog/dental-implants-cost-argentina";
const WA =
    "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20read%20the%20article%20about%20implant%20costs%20in%20Argentina%20and%20I'd%20like%20a%20figure%20for%20my%20case.";

// La nota en español tiene 23.700 impresiones en 30 días y era la segunda página
// grande sin par en inglés; su gemela de carillas (/en/blog/veneers-cost-argentina)
// ya existía. Misma lógica que aquella: prosa, no tablas — la tabla vive en
// /en/dental-implants-cost-buenos-aires, y esta nota es la que contesta la pregunta
// tal como la escribe la gente en Google.
export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: `How Much Does a Dental Implant Cost in Argentina? ${ANIO} | AM`,
    description: `The implant from USD 1,500, or USD 3,000 finished with its crown, in ${ANIO}. What that covers, and why the cheap quote is only the component.`,
    alternates: {
        canonical: CANONICAL,
        languages: hreflangFor("/blog/cuanto-cuesta-un-implante-dental-en-argentina"),
    },
    openGraph: {
        title: "How much does a dental implant cost in Argentina?",
        description:
            "USD figures for a finished tooth, what separates a real quote from a screw-only one, and the honest note on trips and timing.",
        url: CANONICAL,
        locale: "en_US",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How much does a dental implant cost in Argentina?",
    image: "https://www.amesteticadental.com/og-image.jpg",
    description: `The implant from USD 1,500, or USD 3,000 finished with its crown, in ${ANIO}. What that covers, and why the cheap quote is only the component.`,
    inLanguage: "en",
    author: {
        "@type": "Person",
        name: "Dr. Ariel Merino",
        url: "https://www.wikidata.org/wiki/Q134287655",
        jobTitle: "Cosmetic Dentist",
    },
    publisher: {
        "@type": "Organization",
        name: "AM Estética Dental",
        url: "https://www.amesteticadental.com",
    },
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    mainEntityOfPage: CANONICAL,
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: `How much does a dental implant cost in Argentina in ${ANIO}?`,
            acceptedAnswer: {
                "@type": "Answer",
                text: "There are two options and nothing else: the Neodent® implant from USD 1,500 and the Straumann® from USD 2,000. That figure is the complete surgery and already covers the extraction, the bone graft and the membrane the site may need. The definitive crown costs USD 1,500 and is the same with either system — what changes is the screw, not what you see. It goes on 2 to 3 months later, once the implant has integrated, so the finished treatment comes to USD 3,000 with Neodent® or USD 3,500 with Straumann®.",
            },
        },
        {
            "@type": "Question",
            name: "Does the implant price include the crown?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "They are quoted separately, on purpose. The implant (from USD 1,500) is the surgery: it covers the extraction, the bone graft and the membrane when they are needed. The crown is added later, once the implant has integrated, and the finished treatment comes to USD 3,000 or more. When comparing quotes elsewhere, the key question is whether you are being quoted the component alone or the complete surgery.",
            },
        },
        {
            "@type": "Question",
            name: "Why might I need a bone graft, and how much does it add?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "An implant needs enough bone to integrate with. If the tooth has been missing for a while, the bone usually recedes and a graft is required first. At AM Estética Dental phase one already includes any extraction, bone graft and tissue graft the case needs — it is not billed separately.",
            },
        },
        {
            "@type": "Question",
            name: "Titanium or zirconia: which one raises the price?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The implant screw is always biocompatible titanium. The price difference sits in the crown: a standard crown performs excellently in areas that are not visible, while zirconia offers better aesthetics and better behaviour at the gum line, which matters in the front teeth.",
            },
        },
        {
            "@type": "Question",
            name: "Can dental implants be financed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. AM Estética Dental offers in-house financing at a fixed 18% annual rate (1.5% monthly), with a 30% or 50% deposit and the balance over 3, 6 or 12 instalments. USD amounts are paid in pesos at the official Banco Nación exchange rate on the day of payment.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a dental implant last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "With good hygiene, no smoking and annual check-ups, the titanium screw is designed to last a lifetime. The crown on top of it may need replacing every 15 to 20 years.",
            },
        },
    ],
};

export default function DentalImplantsCostArgentinaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navbar />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <section className="relative pt-40 pb-16 px-6 md:px-12">
                    <div className="absolute right-0 top-[20%] w-[500px] h-[400px] rounded-full bg-oro/4 blur-[130px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Link href="/en/blog" className="text-oro/70 hover:text-oro font-manrope text-xs uppercase tracking-[0.25em] transition-colors">
                                ← Blog
                            </Link>
                            <span className="text-crema/20">·</span>
                            <span className="text-crema/40 font-manrope text-xs uppercase tracking-[0.25em]">Investment</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-[1.08] mb-6">
                            How much does a dental implant cost in Argentina?
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed">
                            The honest answer is a range, and the range only means something once you know what it covers. Here is what a finished tooth costs in {ANIO}, and what to check in any quote.
                        </p>
                        <p className="text-crema/30 font-manrope text-xs mt-8">
                            By Dr. Ariel Merino · AM Estética Dental, Puerto Madero, Buenos Aires
                        </p>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-20">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">The figures</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">There are two options and nothing else. The Neodent® implant starts at USD 1,500; the Straumann®, made in Switzerland, starts at USD 2,000. Either figure is the complete surgery — it already covers the extraction if the tooth is still there, the bone graft the site needs, and the membrane for the soft tissue when it is indicated.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">The crown goes on 2 to 3 months later, once the implant has integrated with the bone. Finished and chewing, the treatment comes to USD 3,000 with Neodent® or USD 3,500 with Straumann®. USD amounts are paid in pesos at the official Banco Nación rate, and in-house financing is available at a fixed 18% annual rate.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">Why one clinic says USD 800 and the bill ends at USD 6,000</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">This is where implant pricing gets confusing, and it is worth being blunt about it. A complete implant has three parts: the titanium screw that integrates with the bone, the abutment that connects it, and the visible crown on top.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Some clinics advertise the component alone. Then the surgery is added, and the extraction, and the bone graft discovered on the day, and the membrane. Quoted that way it is not unusual for a single implant to land between USD 5,000 and 7,000. The number that got you in the door was real — it just was not the price of the work.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">So when you compare, compare finished against finished. Ask one question of every quote: does this leave me with a tooth in place and working, or is something still missing? Most of the apparent gap closes right there.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">The bone decides more than you would think</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">An implant needs enough bone to integrate with. If the tooth came out a long time ago, the bone in that site has usually receded, and it has to be rebuilt with a graft before anything can be placed.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">At AM that graft is already inside the figure rather than appearing later as a surprise line. The first visit is a clinical assessment — bring recent X-rays if you have them, though they are not a requirement. If a CBCT scan is needed to study the bone in three dimensions, it is prescribed separately at an imaging centre before surgical planning.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">Titanium is not negotiable; the crown is a choice</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">The screw is always high-grade biocompatible titanium. There is no version of this where that part is compromised.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">What genuinely changes the figure is the crown. A standard crown performs excellently in the back of the mouth, where nobody sees it. Zirconia is reserved for the front, where aesthetics and the behaviour of the gum line matter. Specifying zirconia on every single unit when it is not needed is overpaying; using it where it shows is money well spent.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">Which implants we use</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">We work with Straumann Group systems. Straumann is manufactured in Switzerland and is the most recognised implant brand in the world, with the longest track record and the strongest scientific backing. Neodent is a Brazilian brand the group acquired and now builds to its own standards, and it offers excellent value inside the premium range. In the occasional case where the exact size is not in stock, an equivalent-tier national implant is used — always discussed with you beforehand.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Straumann starts at USD 2,000 and Neodent at USD 1,500. Which one suits your case is decided at the assessment, not in a price list.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">If you are travelling for this</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">One thing worth knowing before you book a flight: an implant rarely fits into a single trip. The implant needs 2 to 3 months to integrate with the bone before the crown can go on, so international patients normally plan two visits, or combine the surgery with other treatment and come back for the crown.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Veneers and smile design are a different case entirely — with our own laboratory in-house, those are routinely completed in one 10 to 14 day trip. We would rather you know which of the two you are planning.</p>
                        </section>
                    </div>
                </article>

                <section className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto border border-oro/20 rounded-2xl p-8 md:p-10 bg-carbon-soft text-center">
                        <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4">
                            Want a figure for your specific case?
                        </h2>
                        <p className="text-crema/60 font-manrope text-sm mb-8 max-w-lg mx-auto">
                            Send us photos and any recent X-rays, and we will come back with a preliminary assessment and an estimated investment before you plan anything.
                        </p>
                        <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all">
                            Ask on WhatsApp →
                        </a>
                    </div>
                </section>

                <section className="px-6 md:px-12 pb-20">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Keep reading</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { nombre: "Dental implants cost", desc: "The full breakdown by stage, and what each one includes.", href: "/en/dental-implants-cost-buenos-aires" },
                                { nombre: "Dental tourism", desc: "How international patients plan the trip.", href: "/en/dental-tourism-argentina" },
                            ].map((t) => (
                                <Link key={t.href} href={t.href} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/35 transition-colors group">
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{t.nombre}</h3>
                                    <p className="text-crema/55 font-manrope text-xs leading-relaxed">{t.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Un precio de implante se entiende cuando se ve que son tres piezas
                    distintas, no una. */}
                <section className="py-16 px-6 md:px-12">
                  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center rounded-2xl border border-oro/15 bg-carbon-soft p-6 md:p-10">
                    <div className="flex justify-center">
                      <Image
                        src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/implantes-dentales-am/implante-dental-straumann-despiece-corona-pilar-tornillo-fondo-blanco-am-estetica-dental-buenos-aires"
                        alt="Dental implant exploded view: ceramic crown, connecting abutment and titanium screw — AM Estética Dental, Puerto Madero"
                        width={400}
                        height={400}
                        className="w-full max-w-[280px] h-auto"
                      />
                    </div>
                    <div>
                      <span className="mb-2 block font-manrope text-[10px] uppercase tracking-[0.34em] text-oro">What you are paying for</span>
                      <h2 className="mb-3 font-manrope text-xl font-light text-crema md:text-2xl">Three separate parts, three separate costs</h2>
                      <p className="mb-5 font-manrope text-sm leading-relaxed text-crema/60">
                        The titanium screw, the abutment that connects it, and the ceramic crown on top. Two quotes can differ wildly simply because one of them prices only the screw.
                      </p>
                      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-crema/5">
                        <Image
                          src="https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires"
                          alt="Before and after of a full rehabilitation with dental implants and 24 ceramic restorations — Dr. Ariel Merino, AM Estética Dental"
                          fill
                          sizes="(max-width: 768px) 92vw, 420px"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2 font-manrope text-[11px] text-crema/35">Real case: implants plus 24 ceramic restorations.</p>
                    </div>
                  </div>
                </section>

                <Contacto lang="en" />
            </main>
        </>
    );
}
