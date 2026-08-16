import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { hreflangFor } from "@/lib/i18n-routes";
import Contacto from "@/components/Contacto";

const CANONICAL = "https://www.amesteticadental.com/en/blog/veneers-cost-argentina";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20read%20the%20article%20about%20veneer%20investment%20and%20I'd%20like%20a%20figure%20for%20my%20case.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "How Much Do Veneers Cost in Argentina? 2026 Guide | AM Estética Dental",
    description: "Veneer investment in Argentina 2026: USD figures per unit, what changes the number, what should be included, and why international patients actually travel here.",
    alternates: { canonical: CANONICAL, languages: hreflangFor("/blog/cuanto-cuestan-las-carillas-dentales-en-argentina") },
    openGraph: {
        title: "How much do veneers cost in Argentina?",
        description: "USD figures, what changes the investment, and the honest reason patients travel to Buenos Aires — it is time, not price.",
        url: CANONICAL,
        locale: "en_US",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How much do veneers cost in Argentina?",
    "image": "https://www.amesteticadental.com/og-image.jpg",
    description: "Veneer investment in Argentina 2026: USD figures per unit, what changes the number, what should be included, and why international patients actually travel here.",
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
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    mainEntityOfPage: CANONICAL,
};

export default function VeneersCostArgentinaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
                            How much do veneers cost in Argentina?
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed">
                            Real figures in USD for 2026, what actually moves the number, and an honest note on why patients fly here.
                        </p>
                        <p className="text-crema/30 font-manrope text-xs mt-8">
                            By Dr. Ariel Merino · AM Estética Dental, Puerto Madero, Buenos Aires
                        </p>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-20">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">Reference figures</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">At AM Estética Dental, ceramic (porcelain) veneers are in the range of USD 1,000 to 1,500 per unit. Composite veneers are around USD 500 per unit. A complete smile design of 8 to 12 units typically lands between USD 7,200 and 14,400.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">USD amounts are paid in pesos at the official Banco Nación exchange rate on the day of payment, and we offer in-house financing at a fixed 18% annual rate.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">What changes the investment</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Four factors move the number. The material is the biggest one: porcelain requires laboratory work and higher-cost ceramics, and lasts two to three times longer than composite.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">The number of units matters — a single veneer is not the same job as a full smile design. The starting condition of your teeth matters: existing wear, old restorations or gum work change the plan. And the complexity of the design matters, because refining a shade is not the same as rebuilding proportion and incisal plane from scratch.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">Why patients travel here — and it is not what you think</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Argentina is a well-known dental tourism destination, and yes, figures here are lower than in the United States or Western Europe.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">But in our experience that is rarely the deciding factor for the patients who actually travel. What decides it is time. Our own in-house laboratory means a full smile transformation is completed in a single 10 to 14 day trip, instead of the months a comparable treatment takes when the lab work is outsourced.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">For a professional with a demanding schedule, the real cost is not the quote. It is the number of trips and the number of months.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">What should be included</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">A serious quote includes the digital smile design, the diagnostic study, the laboratory work, all placement sessions, the final adjustments and clinical follow-up. If any of those appear as extras at the end, that is a red flag.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Ask what happens if something needs adjusting after you return home. Full clinical documentation is what makes remote follow-up possible.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">Being straightforward about it</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">AM is not the cheapest option in Buenos Aires, and does not try to be. We compete on result and on time, not on price.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">If the lowest quote is your main criterion, we will tell you honestly that we are probably not the right fit — and that is a better outcome for everyone than a treatment chosen for the wrong reason.</p>
                        </section>
                    </div>
                </article>

                <section className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto border border-oro/20 rounded-2xl p-8 md:p-10 bg-carbon-soft text-center">
                        <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4">
                            Want a figure for your specific case?
                        </h2>
                        <p className="text-crema/60 font-manrope text-sm mb-8 max-w-lg mx-auto">
                            Send us photos and we will give you a preliminary assessment and an estimated investment before you plan anything.
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
                                { nombre: "Investment in veneers", desc: "Full breakdown by treatment and financing.", href: "/en/veneers-cost-buenos-aires" },
                                { nombre: "Dental tourism", desc: "How to complete treatment in a single trip.", href: "/en/dental-tourism-argentina" },
                            ].map((t) => (
                                <Link key={t.href} href={t.href} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/35 transition-colors group">
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{t.nombre}</h3>
                                    <p className="text-crema/55 font-manrope text-xs leading-relaxed">{t.desc}</p>
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
