import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";

const CANONICAL = "https://www.amesteticadental.com/en/blog/how-long-do-porcelain-veneers-last";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20read%20the%20article%20on%20veneer%20durability%20and%20I'd%20like%20to%20ask%20about%20my%20case.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "How Long Do Porcelain Veneers Last? | AM Estética Dental",
    description: "Porcelain veneers last 10 to 20 years with the right care. What wears them down, how to protect them and when they need replacing. By Dr. Ariel Merino.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "How long do porcelain veneers last?",
        description: "10 to 20 years with the right care. Everything about durability, maintenance and the signs it is time to renew them.",
        url: CANONICAL,
        locale: "en_US",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How long do porcelain veneers last?",
    "image": "https://www.amesteticadental.com/og-image.jpg",
    description: "Porcelain veneers last 10 to 20 years with the right care. What wears them down, how to protect them and when they need replacing. By Dr. Ariel Merino.",
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

export default function HowLongVeneersLastPage() {
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
                            <span className="text-crema/40 font-manrope text-xs uppercase tracking-[0.25em]">Veneers</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-[1.08] mb-6">
                            How long do porcelain veneers last?
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed">
                            Ten to twenty years with the right care — but the range depends on three things most patients are never told about.
                        </p>
                        <p className="text-crema/30 font-manrope text-xs mt-8">
                            By Dr. Ariel Merino · AM Estética Dental, Puerto Madero, Buenos Aires
                        </p>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-20">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">The short answer: 10 to 20 years</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Well-made porcelain veneers, correctly indicated and properly cared for, last between 10 and 20 years. Composite veneers have a shorter usable life, typically 5 to 7 years.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Those are not marketing numbers. They are what we see in our own follow-ups: at AM Estética Dental we have documented cases still in the mouth after more than 13 years, and we photograph them precisely because longevity is the part nobody can fake.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">What actually wears them down</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Three things shorten the life of a veneer more than anything else. The first is bruxism: if you clench or grind at night and do not wear a guard, you are applying forces the ceramic was never designed to absorb.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">The second is using your teeth as tools — opening packaging, biting nails, chewing ice. Ceramic is extremely resistant to compression but vulnerable to sharp impact.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">The third, and the one people underestimate, is the gum. A veneer is only as stable as the tissue around it. Neglected gum health eventually shows at the margin, no matter how good the ceramic is.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">What does NOT wear them down</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Coffee, wine and tea do not stain properly glazed porcelain the way they stain natural enamel or composite. That is one of the real advantages of ceramic over resin.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Normal chewing does not wear them either. Neither does regular brushing — in fact, routine hygiene is what protects the margins where veneer meets tooth.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">How to make them last at the top of the range</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Wear a night guard if you have any history of clenching. Keep your six-monthly check-ups so we can see the margins before a problem becomes visible. Avoid biting hard objects. And keep your hygiene routine boring and consistent.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Patients who do these four things reliably land in the 15 to 20 year range. Patients who ignore the night guard are the ones who come back early.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">When it is time to replace them</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">The usual signs are a visible line at the gum margin, a small chip at an incisal edge, or a change in how the bite feels. None of these are emergencies, but they are worth assessing.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Replacing a veneer is a planned procedure, not a rescue. When a case is well documented from the start, the replacement is straightforward because we know exactly what was done and why.</p>
                        </section>
                    </div>
                </article>

                <section className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto border border-oro/20 rounded-2xl p-8 md:p-10 bg-carbon-soft text-center">
                        <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4">
                            Want to know what your case needs?
                        </h2>
                        <p className="text-crema/60 font-manrope text-sm mb-8 max-w-lg mx-auto">
                            We assess your dentition, your bite and your goal, and tell you honestly which option gives the most durable result.
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
                                { nombre: "Do veneers damage your teeth?", desc: "The honest answer about enamel preparation.", href: "/en/blog/do-veneers-damage-your-teeth" },
                                { nombre: "Porcelain vs composite", desc: "Durability, naturalness and investment compared.", href: "/en/porcelain-vs-composite-veneers" },
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
