import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SeoFaq from "@/components/seo/SeoFaq";
import { hreflangFor } from "@/lib/i18n-routes";
import { ANIOS_TRAYECTORIA, ANIOS_LABEL_EN } from "@/lib/trayectoria";

const CANONICAL = "https://www.amesteticadental.com/en/dental-tourism-argentina";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Dental Tourism in Buenos Aires | Veneers in One Trip — Own Lab",
    description: "Porcelain veneers and smile design in Buenos Aires for international patients. Our in-house lab delivers natural results in days — for people who value their time. Dr. Ariel Merino, Puerto Madero.",
    alternates: {
        canonical: CANONICAL,
        languages: hreflangFor("/turismo-dental"),
    },
    openGraph: {
        title: "Dental Tourism in Buenos Aires | Porcelain Veneers | AM Estética Dental",
        description: "Buenos Aires is one of the world's top dental tourism destinations. Porcelain veneers, smile design and dental work with Dr. Ariel Merino in Puerto Madero.",
        url: CANONICAL,
        locale: "en_US",
        type: "website",
    },
};

const faqItems = [
    {
        pregunta: "How much do porcelain veneers cost in Buenos Aires?",
        respuesta: "We price in USD and offer in-house financing. The exact quote depends on the number of teeth and the complexity of your case, defined at the initial assessment. What most international patients value isn't the price — it's getting a natural result in a single trip thanks to our own laboratory.",
    },
    {
        pregunta: "How long do I need to stay in Buenos Aires for the treatment?",
        respuesta: "The full porcelain veneer process is completed in 2 to 3 appointments over a 10 to 14 day period. This lets international patients plan a focused trip: they arrive, do the initial consultation and digital design, come back for placement, and leave with the finished result. We also work with high-quality temporaries for those who need more time.",
    },
    {
        pregunta: "How do I book my consultation from abroad?",
        respuesta: "The entire coordination process can be handled remotely by WhatsApp or email. We receive photos and X-rays in advance, do a preliminary assessment, and define the date and scope of treatment before you travel. When you arrive, we start right away with no delays.",
    },
    {
        pregunta: "Is it safe to get veneers in Argentina? What if there's a problem afterwards?",
        respuesta: "AM Estética Dental uses the same materials and protocols as premium clinics in Europe and the US: IPS e.max and feldspathic porcelain from certified laboratories. Every case has follow-up and a warranty. If you're an international patient and an issue comes up after you return home, we resolve it in a coordinated way with full clinical documentation.",
    },
    {
        pregunta: "Can I get my veneers done and also visit Buenos Aires?",
        respuesta: "That's part of the idea. Patients base themselves in Puerto Madero — one of the most modern neighborhoods in Buenos Aires, steps away from restaurants, upscale hotels and cultural attractions. The treatment requires no downtime and doesn't limit normal activity between sessions.",
    },
    {
        pregunta: "Do you treat patients from the US, Europe, Mexico, Colombia or Chile?",
        respuesta: "Yes. We regularly treat patients from the United States, Spain, Mexico, Colombia, Chile and Uruguay. Dr. Merino has cared for international patients who traveled specifically for the combination of clinical quality, price and experience in Buenos Aires. English-speaking coordination is available.",
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
    "name": "Dental Tourism in Buenos Aires — Porcelain Veneers & Smile Design",
    "serviceType": "Cosmetic Dentistry",
    "description": "Porcelain veneers, ultra-thin veneers and digital smile design for international patients in Puerto Madero, Buenos Aires, Argentina.",
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
    "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Spain" },
        { "@type": "Country", "name": "Mexico" },
        { "@type": "Country", "name": "Colombia" },
        { "@type": "Country", "name": "Chile" },
    ],
    "priceRange": "$$$$",
};

const WA_LINK = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'm%20interested%20in%20traveling%20to%20Buenos%20Aires%20for%20my%20veneers.%20Could%20you%20send%20me%20more%20information%3F";

const REASONS = [
    { t: "Our own in-house lab", d: "We control every step of fabrication — no outsourcing, no waiting on third-party labs." },
    { t: "Results in 10–14 days", d: "A full smile transformation compressed into a single, focused trip." },
    { t: "Direct with the specialist", d: "Dr. Merino designs and places your case personally, from start to finish." },
];

export default function DentalTourismPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <Navbar />

            <main className="bg-carbon text-crema font-manrope">

                {/* ── HERO ── */}
                <section className="relative min-h-[90dvh] flex items-center px-6 md:px-12 pt-32 pb-24">
                    <div className="absolute right-[-5%] top-[15%] w-[600px] h-[600px] rounded-full bg-oro/5 blur-[140px] pointer-events-none" />
                    <div className="absolute left-[-10%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-oro/4 blur-[120px] pointer-events-none" />
                    <div className="max-w-4xl mx-auto w-full">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-8">
                            Dental Tourism · Buenos Aires · Argentina
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-crema leading-[1.0] mb-7">
                            Your new smile in Buenos Aires —{" "}
                            <span className="font-cormorant italic text-oro">done in days, not months</span>
                        </h1>
                        <p className="text-crema/68 font-manrope text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
                            Porcelain veneers, ultra-thin veneers and digital smile design in Puerto Madero.
                            Our own in-house laboratory lets us deliver natural, minimally invasive results in 10 to 14 days —
                            for people whose time is worth more than the wait.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-7 py-4 rounded-full font-manrope font-semibold text-sm hover:bg-oro-light transition-colors"
                            >
                                Ask on WhatsApp →
                            </a>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-crema/55 font-manrope text-sm hover:text-crema transition-colors pt-3 sm:pt-4"
                            >
                                ← Main site
                            </Link>
                        </div>
                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-oro/10">
                            {[
                                { v: "4.9★", l: "Google Reviews" },
                                { v: "Forbes", l: "Argentina" },
                                { v: "10–14 days", l: "Full treatment" },
                                { v: "Own lab", l: "in-house, faster" },
                            ].map((s) => (
                                <div key={s.l}>
                                    <div className="text-oro font-manrope font-semibold text-lg">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WHY BUENOS AIRES ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Why Buenos Aires</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                    World-class quality,{" "}
                                    <span className="font-cormorant italic text-oro">on your timeline</span>
                                </h2>
                                <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                    Argentina has one of the strongest dental schools in Latin America. The materials we use — IPS e.max porcelain, feldspathic ceramic, zirconia — are the same ones used in premium clinics in Madrid, New York or São Paulo.
                                </p>
                                <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                    The real difference is our own in-house laboratory. We control every step of fabrication, so we compress what takes months elsewhere into a single 10–14 day trip — with natural, minimally invasive results.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { n: "01", t: "Our own in-house laboratory", d: "We control fabrication end to end — that's what makes natural results in days, not months, possible." },
                                    { n: "02", t: "Digital design before we start", d: "You see your new smile on screen before a single tooth is touched." },
                                    { n: "03", t: "Coordination by WhatsApp beforehand", d: "Preliminary assessment from photos before you travel. You arrive with the plan set." },
                                    { n: "04", t: "Full treatment in 10 to 14 days", d: "Designed for patients traveling from abroad: no waiting, no unnecessary trips." },
                                    { n: "05", t: "Puerto Madero — premium district of Buenos Aires", d: "Clinic located in the city's most modern neighborhood, steps from 5-star hotels." },
                                ].map((item) => (
                                    <div key={item.n} className="flex gap-5">
                                        <span className="text-oro/40 font-manrope text-xs font-medium tracking-widest pt-0.5 flex-none w-6">{item.n}</span>
                                        <div>
                                            <div className="text-crema font-manrope font-medium text-sm mb-1">{item.t}</div>
                                            <div className="text-crema-muted font-manrope text-xs leading-relaxed">{item.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── WHY PATIENTS FLY IN ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Why patients fly in</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-4">
                            The real advantage isn't the price.{" "}
                            <span className="font-cormorant italic text-oro">It's the time.</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-12 max-w-2xl">
                            Our patients don't come chasing the lowest quote. They come because our own in-house lab lets us do in one trip what takes months elsewhere — with natural, minimally invasive results. For a busy professional, time is the real cost.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {REASONS.map((r) => (
                                <div key={r.t} className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft hover:border-oro/30 transition-colors">
                                    <div className="text-crema font-manrope font-medium text-base mb-2">{r.t}</div>
                                    <div className="text-crema/55 font-manrope text-sm leading-relaxed">{r.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── PROCESS FOR INTERNATIONAL PATIENTS ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">How it works</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            From the first WhatsApp{" "}
                            <span className="font-cormorant italic text-oro">to the finished smile</span>
                        </h2>
                        <div className="space-y-0">
                            {[
                                {
                                    n: "01",
                                    t: "You send photos by WhatsApp",
                                    d: "Front and profile photos of your smile. We do a preliminary case assessment, tell you whether you're a candidate and how many units your treatment would require.",
                                },
                                {
                                    n: "02",
                                    t: "We define dates and scope",
                                    d: "With the preliminary assessment we agree on the treatment plan, timeline and investment before you buy your ticket. No surprises on arrival.",
                                },
                                {
                                    n: "03",
                                    t: "First session: assessment and design",
                                    d: "On arrival we do the full clinical assessment and the digital design of your new smile. You see the result on screen and request any adjustments you want.",
                                },
                                {
                                    n: "04",
                                    t: "You approve the design",
                                    d: "We only move forward once you're happy. The digital design is your guarantee that the final result will be exactly what we agreed on.",
                                },
                                {
                                    n: "05",
                                    t: "Final placement",
                                    d: "In the last session we bond the definitive veneers. We adjust occlusion, polish and finish until the result is exact. You leave with your smile ready.",
                                },
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

                {/* ── AVAILABLE TREATMENTS ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Available treatments</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14">
                            Everything you can solve{" "}
                            <span className="font-cormorant italic text-oro">in a single trip</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    nombre: "Porcelain Veneers",
                                    desc: "The most requested treatment among international patients. A definitive, natural and long-lasting result (10–20 years). Completed in 2 to 3 sessions.",
                                    tiempo: "10–14 days",
                                },
                                {
                                    nombre: "Ultra-Thin Veneers (Contact Lens)",
                                    desc: "Very thin veneers with minimal enamel preparation. For cases where the tooth is healthy and you only want to improve color or surface shape.",
                                    tiempo: "7–10 days",
                                },
                                {
                                    nombre: "Digital Smile Design",
                                    desc: "Full digital planning of the aesthetic transformation. Included in every treatment: you see the result before we start.",
                                    tiempo: "Included",
                                },
                                {
                                    nombre: "Professional Whitening",
                                    desc: "High-concentration in-office whitening session. Can be combined with composite veneers or done as a standalone treatment.",
                                    tiempo: "1 day",
                                },
                            ].map((t) => (
                                <div key={t.nombre} className="border border-oro/15 rounded-2xl p-7 bg-carbon-soft hover:border-oro/30 transition-colors">
                                    <h3 className="text-crema font-manrope font-medium text-base mb-3">{t.nombre}</h3>
                                    <p className="text-crema/65 font-manrope text-sm leading-relaxed mb-5">{t.desc}</p>
                                    <div className="border-t border-oro/10 pt-4">
                                        <span className="text-oro/70 font-manrope text-xs">Estimated time: </span>
                                        <span className="text-crema/60 font-manrope text-xs">{t.tiempo}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── AUTHORITY ── */}
                <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">The specialist</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-6">
                                Dr. Ariel Merino —{" "}
                                <span className="font-cormorant italic text-oro">Cosmetic Dentist</span>
                            </h2>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed mb-6">
                                {ANIOS_TRAYECTORIA} years in dentistry, dedicated almost exclusively to cosmetic dentistry. The only dental clinic in Argentina featured by Forbes. He has treated patients from the United States, Spain, Mexico, Colombia and Chile.
                            </p>
                            <p className="text-crema/70 font-manrope text-base leading-relaxed">
                                Every case is assessed personally. Dr. Merino does not delegate the design or the placement to third parties — the international patient works directly with the specialist from start to finish.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                { v: "4.9★", l: "120+ Google reviews" },
                                { v: "Forbes", l: "Argentina" },
                                { v: ANIOS_LABEL_EN, l: "cosmetic dentistry" },
                                { v: "Puerto Madero", l: "Buenos Aires, Argentina" },
                            ].map((s) => (
                                <div key={s.l} className="border border-oro/15 rounded-xl px-5 py-4 bg-carbon">
                                    <div className="text-oro font-manrope font-semibold text-base">{s.v}</div>
                                    <div className="text-crema-muted font-manrope text-xs mt-0.5">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6 text-center">Frequently asked questions</span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight mb-14 text-center">
                            Everything about{" "}
                            <span className="font-cormorant italic text-oro">dental tourism in Buenos Aires</span>
                        </h2>
                        <SeoFaq items={faqItems} />
                    </div>
                </section>

                {/* ── REAL CASES ── */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Real cases</span>
                            <h2 className="text-2xl font-manrope font-light text-crema">
                                Results that travel <span className="font-cormorant italic text-oro">from Buenos Aires to the world.</span>
                            </h2>
                            <p className="text-crema/45 font-manrope text-sm mt-3 max-w-xl">International patients who chose AM Estética Dental in Puerto Madero. Real transformations, no filters.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-fondo-blanco-portada-transformacion-completa-dr-ariel-merino-am-estetica-dental", alt: "Complete dental transformation — before and after portrait — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/diseno-sonrisa-plano-quebrado-carillas-ceramicas-antes-despues-portada-paciente-italia-milan-dr-ariel-merino-am-estetica-dental", alt: "Smile design with porcelain veneers — patient from Italy — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-carillas-veneers-03-dr-ariel-merino-am-estetica-dental", alt: "Extreme veneers case — Dr. Ariel Merino AM Estética Dental" },
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
                            Send your photos{" "}
                            <span className="font-cormorant italic text-oro">and we'll tell you if you're a candidate</span>
                        </h2>
                        <p className="text-crema/60 font-manrope text-base mb-10">
                            Preliminary case assessment. If you're a candidate, we send you the plan and estimated investment before you buy your ticket.
                        </p>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-colors"
                        >
                            Message us on WhatsApp →
                        </a>
                        <p className="text-crema/30 font-manrope text-xs mt-6">
                            Camila O&apos;Gorman 412, Office 101, Puerto Madero, Buenos Aires · Mon–Fri 10:00–18:00
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
