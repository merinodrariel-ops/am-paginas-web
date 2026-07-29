import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";

const CANONICAL = "https://www.amesteticadental.com/en/blog/do-veneers-damage-your-teeth";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20read%20the%20article%20about%20veneers%20and%20enamel%20and%20I'd%20like%20to%20ask%20about%20my%20case.";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Do Veneers Damage Your Teeth? The Honest Answer | AM Estética Dental",
    description: "Veneers require minimal enamel preparation in most cases. Why blanket 'no-prep' promises are a half-truth, what is reversible and what genuinely damages teeth.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: "Do veneers damage your teeth?",
        description: "The honest answer about enamel preparation, what 'no-prep' really means and the question to ask your dentist.",
        url: CANONICAL,
        locale: "en_US",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Do veneers damage your teeth?",
    description: "Veneers require minimal enamel preparation in most cases. Why blanket 'no-prep' promises are a half-truth, what is reversible and what genuinely damages teeth.",
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

export default function DoVeneersDamageTeethPage() {
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
                            <span className="text-crema/40 font-manrope text-xs uppercase tracking-[0.25em]">Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-[1.08] mb-6">
                            Do veneers damage your teeth?
                        </h1>
                        <p className="text-crema/65 font-manrope text-lg font-light leading-relaxed">
                            The honest answer is more nuanced than either side of the internet will tell you — and it starts with admitting that some preparation is usually needed.
                        </p>
                        <p className="text-crema/30 font-manrope text-xs mt-8">
                            By Dr. Ariel Merino · AM Estética Dental, Puerto Madero, Buenos Aires
                        </p>
                    </div>
                </section>

                <article className="px-6 md:px-12 pb-20">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">The honest answer</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Veneers require some preparation of the enamel in the large majority of cases. Anyone who tells you otherwise as a blanket promise is overselling.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">What we can say honestly is this: with minimally invasive technique, that preparation is minimal — and in exchange you get a result that is stable for 10 to 20 years. The goal is always to remove as little tooth structure as possible, not to claim we remove none.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">Why \u201cno-prep\u201d is usually a half-truth</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Ultra-thin veneers of around 0.3 mm genuinely allow very conservative preparation. But whether they apply depends on the position of your tooth, the thickness of your enamel, your bite and the change you want.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">If a tooth is already well positioned and you only want to refine colour or shape, preparation can be almost imperceptible. If a tooth is protruded, rotated or you want a significant change in volume, bonding a veneer without preparing it produces a bulky, artificial-looking result. In those cases the honest recommendation is minimal preparation, or moving the tooth first with aligners.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">Is the process reversible?</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Once enamel has been prepared, it does not grow back. That is a fact worth understanding before you start, and it is why the decision deserves a proper diagnosis rather than an impulse.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">This is exactly why we design the result in 3D first and only proceed once you approve it. The irreversible step should never be the step where you find out what the outcome looks like.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">What genuinely damages teeth</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">In our experience, the damage rarely comes from the veneer itself. It comes from poor indication: veneers placed on teeth that needed orthodontics first, or on gums that were not healthy, or with a bite that was never assessed.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">A well-indicated, well-made veneer protects the tooth underneath it. A badly indicated one creates a problem that did not exist before.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-5 leading-snug">The question to ask your dentist</h2>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Ask them to quantify it: roughly how much enamel will be removed in your case, and why that amount. If they cannot answer, or if they promise categorically that nothing will be touched, that tells you something.</p>
                            <p className="text-crema/72 font-manrope text-base leading-relaxed">Our principle is minimal intervention. We use ultra-thin veneers whenever the case allows it. When preparation is needed, we explain exactly how much and why, before anything begins.</p>
                        </section>
                    </div>
                </article>

                <section className="px-6 md:px-12 pb-24">
                    <div className="max-w-3xl mx-auto border border-oro/20 rounded-2xl p-8 md:p-10 bg-carbon-soft text-center">
                        <h2 className="text-2xl md:text-3xl font-manrope font-light text-crema mb-4">
                            Want to know how much preparation your case needs?
                        </h2>
                        <p className="text-crema/60 font-manrope text-sm mb-8 max-w-lg mx-auto">
                            At the initial assessment we quantify it and explain why, before anything begins.
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
                                { nombre: "Ultra-thin veneers", desc: "The most conservative ceramic option, explained.", href: "/en/ultra-thin-veneers-buenos-aires" },
                                { nombre: "How long do veneers last?", desc: "Durability, maintenance and replacement.", href: "/en/blog/how-long-do-porcelain-veneers-last" },
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
