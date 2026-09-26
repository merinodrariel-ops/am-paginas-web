import type { Metadata } from "next";
import { hreflangFor } from "@/lib/i18n-routes";
import Image from "next/image";
import Link from "next/link";
import { ANIO } from "@/lib/anio";

const CANONICAL = "https://www.amesteticadental.com/blanqueamiento-dental-precio-buenos-aires";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20blanqueamiento%20dental.";
const BLANQ_CDN = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/blanqueamiento-ambulatorio";
const IMG = {
    cubeta: `${BLANQ_CDN}/cubeta-blanqueamiento-dental-ambulatoria-a-medida-editorial-dr-ariel-merino-am-estetica-dental-buenos-aires`,
    jeringas: `${BLANQ_CDN}/jeringas-gel-blanqueamiento-dental-ambulatorio-editorial-dr-ariel-merino-am-estetica-dental-buenos-aires`,
};
const VIDEO_CUBETA = {
    mp4: "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto/blanqueamiento-ambulatorio/cubeta-blanqueamiento-giro-360-dr-ariel-merino-am-estetica-dental-buenos-aires.mp4",
    poster: `${BLANQ_CDN}/cubeta-blanqueamiento-dental-ambulatoria-a-medida-editorial-dr-ariel-merino-am-estetica-dental-buenos-aires`,
};
const VIDEO_JERINGAS = {
    mp4: "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto/blanqueamiento-ambulatorio/jeringas-blanqueamiento-giro-360-dr-ariel-merino-am-estetica-dental-buenos-aires.mp4",
    poster: `${BLANQ_CDN}/jeringas-gel-blanqueamiento-dental-ambulatorio-editorial-dr-ariel-merino-am-estetica-dental-buenos-aires`,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: `Precio de Blanqueamiento Dental Ambulatorio en Buenos Aires ${ANIO}`,
    description: `Precio del blanqueamiento dental ambulatorio en Buenos Aires ${ANIO}. Cubetas a medida + gel, 7 a 10 días, sin dieta blanca. Dr. Ariel Merino, Puerto Madero.`,
    alternates: { canonical: CANONICAL , languages: hreflangFor("/blanqueamiento-dental-precio-buenos-aires") },
    openGraph: {
        title: "Blanqueamiento Dental Ambulatorio — Precio Buenos Aires | AM Estética Dental",
        description: "Cubetas a medida y gel de baja concentración, 7 a 10 días. Menos riesgo de sensibilidad que un blanqueamiento en consultorio. Puerto Madero, Buenos Aires.",
        url: CANONICAL,
    },
    keywords: "blanqueamiento dental Buenos Aires, blanqueamiento ambulatorio, blanqueamiento dental precio, cubetas de blanqueamiento a medida, precio blanqueamiento dental Argentina"
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Blanqueamiento dental ambulatorio precio Buenos Aires — AM Estética Dental",
    description: "Precio del blanqueamiento dental ambulatorio con cubetas a medida en Buenos Aires. Dr. Ariel Merino, Puerto Madero.",
    url: CANONICAL,
    about: { "@type": "MedicalProcedure", name: "Blanqueamiento dental ambulatorio con cubetas a medida" },
};

const TIPOS = [
    {
        titulo: "Escaneo y cubetas a medida",
        desc: "Escaneamos tu boca y fabricamos dos cubetas —superior e inferior— hechas a medida, como un traje. Nada de moldes genéricos de farmacia.",
        ideal: "El primer paso, siempre. Sin cubetas ajustadas no hay blanqueamiento parejo.",
    },
    {
        titulo: "Gel en jeringas, en casa",
        desc: "Te entregamos jeringas con gel de peróxido de carbamida al 10–16%, una concentración baja. Lo aplicás vos mismo en las cubetas.",
        ideal: "La mayoría de los pacientes lo usa mientras duerme; también se puede usar 2 a 3 horas durante el día.",
    },
    {
        titulo: "7 a 10 días de uso",
        desc: "El proceso es acumulativo: cada noche el gel sigue trabajando. No hace falta seguir dieta blanca ni restringir comidas.",
        ideal: "Pacientes que quieren un resultado parejo y duradero, con el mínimo riesgo de sensibilidad.",
    },
];

export default function BlanqueamientoPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="bg-carbon text-crema font-manrope min-h-screen">

                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">
                        Consultar precio →
                    </a>
                </header>

                {/* Hero */}
                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Buenos Aires · Puerto Madero</span>
                            <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                                Blanqueamiento dental<br />
                                <span className="font-cormorant italic text-oro">ambulatorio, a tu ritmo.</span>
                            </h1>
                            <p className="text-crema/65 text-lg font-light leading-relaxed mb-4">
                                Nada de luces ni sesiones exprés en el sillón. Cubetas a medida para tu maxilar superior e inferior, gel de baja concentración y 7 a 10 días de uso en casa. Supervisión del Dr. Ariel Merino en Puerto Madero, Buenos Aires.
                            </p>
                            <div className="flex items-center gap-4 mb-8 p-4 border border-oro/20 rounded-xl">
                                <div>
                                    <p className="text-oro font-semibold text-2xl font-cormorant italic">7–10 días</p>
                                    <p className="text-crema/50 text-sm">de uso · resultado progresivo</p>
                                </div>
                                <div className="w-px h-12 bg-oro/20" />
                                <div>
                                    <p className="text-oro font-semibold text-2xl font-cormorant italic">Sin dieta blanca</p>
                                    <p className="text-crema/50 text-sm">seguís comiendo normal</p>
                                </div>
                            </div>
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">
                                Consultar precio de mi caso →
                            </a>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15 bg-carbon/50">
                            <Image
                                src={IMG.cubeta}
                                alt="Cubeta de blanqueamiento dental ambulatorio a medida — AM Estética Dental Puerto Madero"
                                fill priority sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-flex items-center border border-oro/30 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-oro">
                                    Cubeta a medida — AM Estética Dental
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tipos */}
                <section className="px-6 py-16 border-y border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-light text-crema mb-4">
                            Cómo funciona el <span className="font-cormorant italic text-oro">blanqueamiento ambulatorio</span>
                        </h2>
                        <p className="text-crema/55 text-sm mb-10 max-w-2xl">
                            En AM no hacemos blanqueamiento profesional en consultorio (luz LED o láser en una sesión) — de hecho, no lo recomendamos: la concentración alta del gel eleva el riesgo de sensibilidad, daño al esmalte e irritación de encías. Usamos el método ambulatorio: es como tener a alguien limpiando tu casa 24/7 durante 7 a 10 días, en vez de una limpieza de 20 minutos.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {TIPOS.map((t) => (
                                <div key={t.titulo} className="border border-oro/15 rounded-2xl p-6">
                                    <h3 className="font-semibold text-crema text-sm mb-3">{t.titulo}</h3>
                                    <p className="text-crema/60 text-xs leading-relaxed mb-4">{t.desc}</p>
                                    <p className="text-oro/60 text-[10px] uppercase tracking-widest">{t.ideal}</p>
                                </div>
                            ))}
                        </div>

                        {/* Giro 360 de la cubeta. Mismo tratamiento visual que el video de
                            la placa de bruxismo: sin controles, en silencio, con poster. */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15 bg-carbon-soft">
                                <video
                                    src={VIDEO_CUBETA.mp4}
                                    poster={VIDEO_CUBETA.poster}
                                    autoPlay muted loop playsInline preload="metadata"
                                    aria-label="Cubeta de blanqueamiento dental ambulatorio girando 360 grados, hecha a medida"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-oro/15 bg-carbon-soft">
                                <video
                                    src={VIDEO_JERINGAS.mp4}
                                    poster={VIDEO_JERINGAS.poster}
                                    autoPlay muted loop playsInline preload="metadata"
                                    aria-label="Jeringas de gel para blanqueamiento dental ambulatorio girando 360 grados"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-crema/30 text-xs mt-3">Cubeta y jeringas de gel de peróxido de carbamida al 10–16%. Ilustración de referencia.</p>
                    </div>
                </section>

                {/* Precio */}
                <section className="px-6 py-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-4">
                        ¿Cuánto cuesta el blanqueamiento dental <span className="font-cormorant italic text-oro">ambulatorio?</span>
                    </h2>
                    <p className="text-crema/55 text-sm mb-10 max-w-xl">El precio incluye el escaneo, las dos cubetas a medida (superior e inferior) y las jeringas de gel para los 7 a 10 días de tratamiento. La inversión exacta se define en la consulta, según el diagnóstico.</p>
                    <div className="border border-oro/15 rounded-2xl p-8 max-w-md">
                        <p className="text-oro text-[9px] uppercase tracking-widest mb-2">Blanqueamiento ambulatorio</p>
                        <p className="text-crema/70 text-sm leading-relaxed mb-4">Cubetas a medida + kit de jeringas de gel · 7 a 10 días de uso · control de seguimiento incluido.</p>
                        <a href={WA} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-oro hover:text-oro-light font-semibold text-sm transition-colors">
                            Consultar valor exacto →
                        </a>
                    </div>
                </section>

                {/* FAQ */}
                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-light text-crema mb-10">
                        Preguntas <span className="font-cormorant italic text-oro">frecuentes</span>
                    </h2>
                    <div className="space-y-4 max-w-3xl">
                        {[
                            { q: "¿Por qué blanqueamiento ambulatorio y no en consultorio?", a: "Porque es más seguro y el resultado es igual de bueno. El blanqueamiento profesional en consultorio usa geles de alta concentración para lograr un cambio en una sola sesión, y eso eleva el riesgo de sensibilidad, irritación de encías y daño al esmalte. El ambulatorio usa una concentración baja (peróxido de carbamida 10–16%) sostenida durante 7 a 10 días: el mismo resultado, con mucho menos riesgo." },
                            { q: "¿El blanqueamiento ambulatorio duele?", a: "El riesgo de sensibilidad es mucho menor que con un blanqueamiento en consultorio, justamente porque la concentración del gel es baja. Si aparece, suele ser leve y pasajera. Es aconsejable secar un poco los dientes antes de colocar la cubeta con el gel." },
                            { q: "¿Tengo que hacer dieta blanca durante el tratamiento?", a: "No. A diferencia de lo que se recomendaba antes, con este método seguís tu dieta normal durante los 7 a 10 días. No hace falta restringir café, vino ni ningún alimento." },
                            { q: "¿Cuántas horas por día tengo que usar la cubeta?", a: "Entre 2 y 3 horas si la usás durante el día. En la práctica, casi todos los pacientes (el 99,9%) prefieren directamente dormir con la cubeta puesta, porque es más simple y no interrumpe la rutina." },
                            { q: "¿Cuánto dura el resultado del blanqueamiento?", a: "Entre 1 y 3 años según los hábitos. El café, el vino, el té y el tabaco aceleran el re-oscurecimiento. Con jeringas de mantenimiento y las mismas cubetas, un retoque es simple." },
                            { q: "¿Se puede hacer blanqueamiento con carillas o coronas?", a: "No. El blanqueamiento solo funciona sobre el esmalte natural. Las cerámicas, resinas y coronas no cambian de color. Si tenés restauraciones anteriores, lo evaluamos en la consulta inicial para coordinar el tratamiento." },
                            { q: "¿El blanqueamiento funciona en dientes con manchas de flúor o tetraciclina?", a: "Estas manchas son más resistentes al blanqueamiento convencional. En esos casos, las carillas cerámicas o lentes de contacto dental suelen ser una mejor opción para lograr el resultado deseado." },
                            { q: "¿Cuánto cuesta el blanqueamiento dental ambulatorio en Buenos Aires?", a: "El precio incluye el escaneo, las dos cubetas a medida y el kit de jeringas de gel para los 7 a 10 días de tratamiento. La inversión exacta se define en la consulta inicial, según el diagnóstico." },
                        ].map(({ q, a }) => (
                            <details key={q} className="border border-oro/12 rounded-xl group">
                                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-crema font-manrope text-sm font-medium select-none">
                                    {q}
                                    <span className="text-oro text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                                </summary>
                                <p className="px-6 pb-5 text-crema/60 text-sm leading-relaxed">{a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Galería — casos reales */}
                <section className="px-6 py-16 border-t border-oro/8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Casos reales</span>
                            <h2 className="text-2xl font-light text-crema">
                                Transformaciones reales <span className="font-cormorant italic text-oro">en AM Estética Dental.</span>
                            </h2>
                            <p className="text-crema/45 text-sm mt-3 max-w-xl">Blanqueamiento dental combinado con tratamientos de armonización estética. Resultados sin filtros.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-comparativa-labios-sonrisa-resinas-blanqueamiento-am-estetica-dental", alt: "Comparativa labios y sonrisa después de blanqueamiento y resinas — AM Estética Dental Buenos Aires" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-ceramica-resultado-natural-dr-ariel-merino-am-estetica-dental", alt: "Resultado natural después de blanqueamiento y carilla cerámica unitaria — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-carillas-ceramicas-antes-despues-01-am-estetica-dental", alt: "Antes y después — carillas cerámicas y blanqueamiento — AM Estética Dental Buenos Aires" },
                            ].map((foto) => (
                                <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                                    <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/casos-antes-y-despues" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">
                                Ver todos los casos clínicos →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-6 py-16 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">Cubetas a medida. Vos elegís cuándo usarlas.</h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Consultanos por WhatsApp y coordinamos tu turno en Puerto Madero para el escaneo.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">
                        Agendá tu blanqueamiento ambulatorio →
                    </a>
                    <p className="text-crema/25 text-xs mt-4">Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>

            </main>
        </>
    );
}
