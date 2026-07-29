import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/porcelain-veneers-buenos-aires";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Porcelain Veneers in Buenos Aires (USD Prices) | AM Estética Dental",
    description: "Premium porcelain veneers in Puerto Madero, Buenos Aires. Natural, minimally invasive smile design with Dr. Ariel Merino. USD pricing and financing.",
    alternates: {
        canonical: CANONICAL,
        languages: hreflangFor("/carillas-dentales"),
    },
    openGraph: {
        title: "Porcelain Veneers in Buenos Aires | AM Estética Dental",
        description: "Minimally invasive porcelain veneers in Puerto Madero. Definitive results in 2 to 3 sessions. Transparent USD pricing.",
        url: CANONICAL,
        locale: "en_US",
        type: "website",
    },
};

const faqItems = [
    {
        pregunta: "How much do porcelain veneers cost in Buenos Aires?",
        respuesta: "The price depends on the material (porcelain or composite), the number of teeth and the starting condition of your dentition. At AM Estética Dental we price in USD and offer in-house financing. The initial assessment defines the exact quote for your case — typically a fraction of US or European prices for equivalent quality.",
    },
    {
        pregunta: "Do veneers damage or wear down your teeth?",
        respuesta: "Minimally invasive porcelain veneers and no-prep contact-lens veneers require little or no enamel reduction. The technique depends on the case: in some situations we can work directly on the tooth with no preparation. This is assessed at the initial consultation.",
    },
    {
        pregunta: "What's the difference between porcelain and composite veneers?",
        respuesta: "Porcelain veneers last longer (10 to 20 years), imitate natural enamel better and resist staining. Composite veneers cost less and are done in a single session, but last 5 to 7 years. The choice depends on your case, budget and aesthetic goal.",
    },
    {
        pregunta: "How long does the veneer process take?",
        respuesta: "The full process is completed in 2 to 3 sessions over 2 to 4 weeks. In the first session we design your smile digitally and show you the preview. Only once you approve it do we move forward with preparation and placement. For international patients we compress this into a single 10–14 day trip.",
    },
    {
        pregunta: "What are no-prep (contact lens) veneers?",
        respuesta: "No-prep veneers are ultra-thin shells (0.3 mm) bonded directly to the tooth with no enamel reduction. They are the most conservative option, indicated when the tooth is healthy and you only want to improve color or surface shape.",
    },
    {
        pregunta: "How long do porcelain veneers last?",
        respuesta: "With proper care, porcelain veneers last 10 to 20 years. It's important to avoid biting hard objects, wear a night guard if you grind your teeth, and keep up routine dental hygiene.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
        "@type": "Question",
        "name": f.pregunta,
        "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
    })),
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Porcelain Veneers",
    "serviceType": "Cosmetic Dentistry",
    "description": "Porcelain veneers and no-prep contact-lens veneers to improve the color, shape and symmetry of the smile.",
    "provider": {
        "@type": "Dentist",
        "name": "AM Estética Dental",
        "url": "https://www.amesteticadental.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Camila O'Gorman 412, Office 101",
            "addressLocality": "Puerto Madero",
            "addressRegion": "Buenos Aires",
            "addressCountry": "AR",
        },
    },
    "areaServed": { "@type": "City", "name": "Buenos Aires", "addressCountry": "AR" },
    "priceRange": "$$$$",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20know%20more%20about%20porcelain%20veneers.";

export default function PorcelainVeneersPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <Navbar />

            <main className="bg-carbon text-crema font-manrope">

                {/* ── HERO ── */}
                <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
                    <div className="absolute right-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-oro/6 blur-[130px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto w-full">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                            AM Estética Dental · Puerto Madero
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
                            Porcelain Veneers<br />
                            <span className="font-cormorant italic text-oro">in Buenos Aires</span>
                        </h1>
                        <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                            Porcelain, composite and no-prep contact-lens veneers. We change the color, shape and symmetry of your smile with minimally invasive techniques — without compromising the health of your teeth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Ask about veneers →
                            </a>
                            <Link
                                href="/en/dental-tourism-argentina"
                                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
                            >
                                Traveling from abroad? →
                            </Link>
                        </div>
                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
                            {[
                                { v: "4.9★", l: "Google Reviews" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "15+", l: "years in cosmetic dentistry" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WHO IT'S FOR ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Who they're for</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Veneers for those who want{" "}
                                <span className="font-cormorant italic text-oro">a definitive change</span>
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Veneers are the most effective solution for teeth with permanent stains, irregular shape, asymmetric size or surface fractures. In one or two weeks, the result is definitive and natural.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {[
                                { n: "01", t: "Stains that don't respond to whitening", d: "Intrinsic staining from tetracycline, fluorosis or non-vital teeth." },
                                { n: "02", t: "Teeth with wrong shape, size or symmetry", d: "Fractured, small or gapped teeth." },
                                { n: "03", t: "A smile that lost brightness or naturalness over time", d: "Enamel wear or aging without active disease." },
                                { n: "04", t: "Immediate result without orthodontics", d: "When correcting position takes years but shape can be improved in weeks." },
                            ].map((item) => (
                                <div key={item.n} className="flex gap-5">
                                    <span className="text-oro/40 font-manrope text-xs font-medium tracking-widest pt-0.5 flex-none">{item.n}</span>
                                    <div>
                                        <div className="text-crema font-manrope font-medium text-sm mb-1">{item.t}</div>
                                        <div className="text-crema-muted font-manrope text-xs leading-relaxed">{item.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TYPES OF VENEERS ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Types of veneers</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Porcelain, composite{" "}
                            <span className="font-cormorant italic text-oro">and no-prep veneers</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    tipo: "Porcelain Veneers",
                                    descripcion: "The gold standard. They last 10 to 20 years, perfectly imitate natural enamel and don't stain. They require minimal tooth preparation.",
                                    ideal: "Cases with a significant change in color, shape or size.",
                                    duracion: "10–20 years",
                                },
                                {
                                    tipo: "No-Prep (Contact Lens) Veneers",
                                    descripcion: "Ultra-thin veneers (0.3 mm) bonded with no enamel reduction. The most conservative option when the tooth is healthy and only needs a surface improvement.",
                                    ideal: "Color or shape corrections without removing enamel.",
                                    duracion: "8–15 years",
                                },
                                {
                                    tipo: "Composite Veneers",
                                    descripcion: "Done in a single session with high-quality composite resin. Lower cost, immediate result. They require periodic maintenance.",
                                    ideal: "Targeted corrections with a lower investment.",
                                    duracion: "5–7 years",
                                },
                            ].map((c) => (
                                <div key={c.tipo} className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft hover:border-oro/30 transition-colors">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">{c.tipo}</h3>
                                    <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-5">{c.descripcion}</p>
                                    <div className="border-t border-oro/10 pt-4 space-y-2">
                                        <div className="text-xs font-manrope text-crema/50">
                                            <span className="text-oro/70">Ideal for:</span> {c.ideal}
                                        </div>
                                        <div className="text-xs font-manrope text-crema/50">
                                            <span className="text-oro/70">Lifespan:</span> {c.duracion}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PROCESS ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Process</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            You see the result{" "}
                            <span className="font-cormorant italic text-oro">before we start</span>
                        </h2>
                        <div className="space-y-0">
                            {[
                                { n: "01", t: "Initial assessment", d: "We analyze your dentition, listen to your goal and explain your options. No commitment." },
                                { n: "02", t: "Digital smile design", d: "We design your new smile in 3D. You see the result on screen and request any adjustments." },
                                { n: "03", t: "You approve the result", d: "We only move forward once you're happy with the design. No surprises, no blind faith." },
                                { n: "04", t: "Minimal tooth preparation", d: "If applicable, we prepare the tooth with the minimum reduction needed for the chosen material." },
                                { n: "05", t: "Placement and final adjustment", d: "We bond the veneers and adjust occlusion, polish and finish until the result is exact." },
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

                {/* ── AUTHORITY ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">The specialist</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Dr. Ariel Merino —{" "}
                                <span className="font-cormorant italic text-oro">Cosmetic Dentist</span>
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                Over 15 years dedicated exclusively to cosmetic dentistry. The only dental clinic in Argentina featured by Forbes. Dr. Merino was chosen to design the smile of a Miss Universe.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Every veneer case is assessed personally, with clinical and aesthetic judgment, to achieve a natural result that lasts decades.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {[
                                { v: "4.9★", l: "120+ Google reviews" },
                                { v: "Forbes", l: "Featured in Argentina" },
                                { v: "Miss Universe", l: "Notable patient" },
                                { v: "Puerto Madero", l: "Buenos Aires, Argentina" },
                            ].map((s) => (
                                <div key={s.l} className="border border-oro/15 rounded-xl px-5 py-4 bg-carbon-soft">
                                    <div className="text-oro font-manrope font-semibold text-base">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs mt-0.5">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                            Everything about{" "}
                            <span className="font-cormorant italic text-oro">porcelain veneers</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                {/* ── RELATED ── */}
                <section className="py-16 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8 text-center">You may also be interested in</span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { nombre: "Dental Tourism in Argentina", desc: "How international patients get their veneers done in a single trip to Buenos Aires.", href: "/en/dental-tourism-argentina" },
                                { nombre: "Real Before & After Cases", desc: "Documented smile transformations by Dr. Ariel Merino.", href: "/casos-antes-y-despues" },
                            ].map((t) => (
                                <Link
                                    key={t.nombre}
                                    href={t.href}
                                    className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/35 transition-colors group"
                                >
                                    <h3 className="text-crema font-manrope font-medium text-sm mb-2 group-hover:text-oro transition-colors">{t.nombre}</h3>
                                    <p className="text-crema/55 font-manrope text-xs leading-relaxed">{t.desc}</p>
                                    <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-3 block">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery — real cases */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Real cases</span>
                            <h2 className="text-2xl font-manrope font-light text-crema">
                                Real veneer cases <span className="font-cormorant italic text-oro">at AM.</span>
                            </h2>
                            <p className="text-crema/45 font-manrope text-sm mt-3 max-w-xl">Smile designs with porcelain veneers. Definitive, natural results. Dr. Ariel Merino, Puerto Madero.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental", alt: "Smile design with veneers — before and after — AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-carillas-veneers-04-dr-ariel-merino-am-estetica-dental", alt: "Extreme veneers case — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-diseno-sonrisa-carillas-ceramicas-antes-despues-am-estetica-dental", alt: "Before and after smile design with porcelain veneers — AM Estética Dental Buenos Aires" },
                            ].map((foto) => (
                                <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                                    <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/casos-antes-y-despues" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                                See all clinical cases →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── FINAL CTA ── */}
                <section className="py-28 px-6 md:px-12 text-center relative overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-oro/5 blur-[120px] pointer-events-none" />
                    <div className="relative max-w-2xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Get started</span>
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                            The initial assessment{" "}
                            <span className="font-cormorant italic text-oro">defines the right plan</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            In the first consultation we assess your case, show you the options and explain the full process so you can make an informed decision.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-colors"
                        >
                            Ask on WhatsApp →
                        </a>
                        <p className="text-crema/30 font-manrope text-xs mt-6">
                            Camila O&apos;Gorman 412, Office 101, Puerto Madero · Mon–Fri 10:00–18:00
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
