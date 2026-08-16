import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GOOGLE_REVIEWS } from "@/lib/reviews";

const CANONICAL = "https://www.amesteticadental.com/dentista-puerto-madero";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20agendar%20una%20consulta%20en%20AM%20Est%C3%A9tica%20Dental.";
const MAPS = "https://maps.google.com/?q=Camila+O'Gorman+412+Puerto+Madero+Buenos+Aires";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Dentista en Puerto Madero | Clínica Dental AM Estética Dental",
    description: "¿Buscás dentista en Puerto Madero? AM Estética Dental: carillas, diseño de sonrisa e implantes con el Dr. Ariel Merino. 4.9★ en Google. Camila O'Gorman 412.",
    alternates: { canonical: CANONICAL },
    keywords: "dentista Puerto Madero, clínica dental Puerto Madero, odontólogo Puerto Madero, dentista Buenos Aires, clínica estética dental Buenos Aires",
    openGraph: {
        title: "Dentista en Puerto Madero | AM Estética Dental",
        description: "Clínica dental boutique en Puerto Madero. Carillas, diseño de sonrisa e implantes. Dr. Ariel Merino · 4.9★ en Google.",
        url: CANONICAL,
        images: ["https://res.cloudinary.com/drctvgyqd/image/upload/v1782405026/clinica/recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg"],
    },
};

const SERVICIOS = [
    { titulo: "Carillas Dentales", desc: "Porcelana y resina. Lentes de contacto dental AM de 0.2mm, con mínima preparación del esmalte.", href: "/carillas-dentales", desde: "USD 500 resina · USD 1.000 cerámica" },
    { titulo: "Diseño de Sonrisa", desc: "Ves tu sonrisa terminada en 3D antes de que toquemos un solo diente.", href: "/diseno-de-sonrisa", desde: "Desde USD 4.000" },
    { titulo: "Implantes Dentales", desc: "Titanio y zirconio con planificación guiada por computadora.", href: "/implantes-dentales-buenos-aires", desde: "Consultar" },
    { titulo: "Blanqueamiento Dental", desc: "LED y láser en una sola sesión. Resultado inmediato.", href: "/blanqueamiento-dental-precio-buenos-aires", desde: "USD 150" },
    { titulo: "Alineadores Invisibles", desc: "Ortodoncia invisible AM. Sin brackets, sin alambre.", href: "/alineadores-invisibles", desde: "Consultar" },
    { titulo: "Lentes de Contacto Dental", desc: "La carilla más fina del mercado: 0.2mm de espesor.", href: "/lentes-de-contacto-dental-precio-buenos-aires", desde: "USD 1.000/pieza" },
];

const DIFERENCIALES = [
    { titulo: "Precios claros, desde la primera consulta", desc: "Somos de las pocas clínicas de Buenos Aires que publica sus precios. Sin sorpresas, sin letra chica: sabés la inversión antes de sentarte en el sillón." },
    { titulo: "Primero lo ves, después lo hacemos", desc: "Diseñamos tu sonrisa en 3D y te la mostramos en pantalla. Ajustamos hasta que la apruebes. Recién ahí empezamos a trabajar." },
    { titulo: "Una clínica boutique, no una cadena", desc: "Te atiende siempre el mismo equipo, liderado por el Dr. Ariel Merino. Sala de espera boutique, café y una experiencia pensada para que ir al dentista deje de ser un trámite." },
    { titulo: "Pacientes de Argentina y el mundo", desc: "Recibimos pacientes de EE.UU., México, Colombia y Europa que eligen Buenos Aires para su tratamiento. Coordinamos todo a distancia antes de tu viaje." },
];

const OPINIONES = [
    { texto: "La única pregunta que me hago hoy es por qué no me animé antes a regalarme esta sonrisa que cambió mi vida.", tratamiento: "Diseño de sonrisa" },
    { texto: "Nunca sentí que me vendieran algo. Me explicaron todo y el resultado se vio natural desde el primer momento.", tratamiento: "Carillas cerámicas" },
    { texto: "Mi experiencia fue genial, desde ingresar al consultorio hasta irme. La atención de Ari y de todo el equipo es excelente.", tratamiento: "Paciente de la clínica" },
];

const FOTOS_CLINICA = [
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/v1782405026/clinica/recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg", alt: "Recepción boutique de AM Estética Dental, clínica dental en Puerto Madero, Buenos Aires", span: "col-span-2 row-span-2" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/v1782405022/clinica/entrada-clinica-cartel-iluminado-am-estetica-dental-puerto-madero.jpg", alt: "Entrada de la clínica dental AM Estética Dental con cartel iluminado en Puerto Madero", span: "col-span-1 row-span-1" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/v1782405028/clinica/sala-de-espera-exclusiva-boutique-puerto-madero.jpg", alt: "Sala de espera exclusiva de la clínica odontológica en Puerto Madero", span: "col-span-1 row-span-1" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/v1782405027/clinica/decoracion-recepcion-boutique-crema-oro-am-estetica-dental.jpg", alt: "Decoración en tonos crema y oro de la recepción de AM Estética Dental", span: "col-span-1 row-span-1" },
    { src: "https://res.cloudinary.com/drctvgyqd/image/upload/v1782405029/clinica/sillon-relax-confort-sala-espera-clinica-dental.jpg", alt: "Sillón de confort en la sala de espera de la clínica dental en Puerto Madero", span: "col-span-1 row-span-1" },
];

const FAQS = [
    {
        q: "¿Dónde queda el consultorio?",
        a: "En Camila O'Gorman 412, Oficina 101, Puerto Madero, Ciudad Autónoma de Buenos Aires. A metros del Puente de la Mujer, con fácil acceso desde el microcentro y estacionamiento en la zona.",
    },
    {
        q: "¿Qué tratamientos realizan?",
        a: "Somos una clínica especializada en estética dental de alta complejidad: carillas de porcelana y resina, diseño de sonrisa digital, blanqueamiento, alineadores invisibles, implantes y rehabilitación integral.",
    },
    {
        q: "¿Qué incluye la primera consulta?",
        a: "Una valoración clínica personalizada: evaluamos tu caso, te explicamos qué tratamiento aplica para vos y te damos el presupuesto exacto de la inversión. Escribinos por WhatsApp y coordinamos.",
    },
    {
        q: "¿Cómo agendo un turno?",
        a: "Por WhatsApp al +54 9 11 7021-9298. Respondemos en el día y coordinamos una valoración clínica personalizada.",
    },
    {
        q: "¿Atienden pacientes del exterior?",
        a: "Sí. Recibimos pacientes de Estados Unidos, México, Colombia, Perú y Europa que combinan su tratamiento con una estadía en Buenos Aires. Coordinamos el plan de tratamiento a distancia antes de tu viaje.",
    },
];

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Dentist",
            name: "AM Estética Dental",
            url: CANONICAL,
            image: "https://www.amesteticadental.comhttps://res.cloudinary.com/drctvgyqd/image/upload/v1782405026/clinica/recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg",
            telephone: "+54 9 11 7021-9298",
            priceRange: "USD 150 - USD 30000",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Camila O'Gorman 412, Oficina 101",
                addressLocality: "Puerto Madero",
                addressRegion: "Ciudad Autónoma de Buenos Aires",
                postalCode: "C1107DED",
                addressCountry: "AR",
            },
            geo: { "@type": "GeoCoordinates", latitude: -34.620858, longitude: -58.3609047 },
            aggregateRating: { "@type": "AggregateRating", ...GOOGLE_REVIEWS },
        },
        {
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
    ],
};

export default function DentistaPuertoMaderoPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <main className="bg-carbon text-crema font-manrope min-h-screen">
                <header className="px-6 py-5 border-b border-oro/10 flex items-center justify-between">
                    <Link href="/" className="font-cormorant italic text-oro text-xl">AM Estética Dental</Link>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-oro text-carbon px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-oro/90 transition-all">Agendá tu consulta →</a>
                </header>

                {/* Hero con foto de la clínica */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="https://res.cloudinary.com/drctvgyqd/image/upload/v1782405026/clinica/recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg"
                            alt="Recepción de AM Estética Dental, clínica dental boutique en Puerto Madero, Buenos Aires"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover opacity-25"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/80 to-carbon" />
                    </div>
                    <div className="relative px-6 py-24 md:py-32 max-w-6xl mx-auto">
                        <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">Camila O&apos;Gorman 412 · Puerto Madero</span>
                        <h1 className="text-5xl md:text-6xl font-light text-crema leading-tight mb-6">
                            Tu dentista<br /><span className="font-cormorant italic text-oro">en Puerto Madero.</span>
                        </h1>
                        <p className="text-crema/70 text-xl font-light leading-relaxed mb-8 max-w-2xl">
                            Una clínica dental boutique especializada en estética de alta complejidad, dirigida por el Dr. Ariel Merino — más de 20 años de experiencia y reconocido por Forbes Argentina.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all">Agendá tu consulta</a>
                            <Link href="/casos-antes-y-despues" className="inline-flex items-center gap-2 border border-oro/25 text-oro px-6 py-4 rounded-full text-sm hover:border-oro/50 transition-colors">Ver casos reales →</Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                            <span className="text-oro">★★★★★ <span className="text-crema/60">4.9 en Google · +120 reseñas</span></span>
                            <span className="text-crema/60">Reconocidos por <span className="text-crema">Forbes Argentina</span></span>
                        </div>
                    </div>
                </section>

                {/* Por qué elegirnos — ataca debilidades de la competencia */}
                <section className="px-6 py-20 border-t border-oro/8 max-w-6xl mx-auto">
                    <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-3">Por qué AM</span>
                    <h2 className="text-3xl font-light text-crema mb-12">Lo que hace distinta a <span className="font-cormorant italic text-oro">nuestra clínica.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {DIFERENCIALES.map((d, i) => (
                            <div key={d.titulo} className="flex gap-5">
                                <span className="font-cormorant italic text-oro/60 text-3xl leading-none pt-1">0{i + 1}</span>
                                <div>
                                    <h3 className="font-semibold text-crema text-base mb-2">{d.titulo}</h3>
                                    <p className="text-crema/50 text-sm leading-relaxed">{d.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tratamientos con precios visibles */}
                <section className="px-6 py-16 border-t border-oro/8 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-light text-crema mb-4">Tratamientos y <span className="font-cormorant italic text-oro">precios.</span></h2>
                    <p className="text-crema/45 text-sm mb-12 max-w-xl">Publicamos nuestros precios porque creemos que la confianza empieza antes de la primera consulta.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICIOS.map((s) => (
                            <Link key={s.href} href={s.href} className="group border border-oro/12 rounded-2xl p-6 hover:border-oro/30 transition-colors block">
                                <h3 className="font-semibold text-crema text-base mb-2 group-hover:text-oro transition-colors">{s.titulo}</h3>
                                <p className="text-crema/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-oro text-sm font-medium">{s.desde}</span>
                                    <span className="text-oro/50 text-xs group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Dr. Merino */}
                <section className="px-6 py-20 border-t border-oro/8">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-[4/5] max-w-md rounded-3xl overflow-hidden border border-oro/15">
                            <Image
                                src="https://res.cloudinary.com/drctvgyqd/image/upload/v1784870272/dr-merino/dr-ariel-merino-ambo-principal.webp"
                                alt="Dr. Ariel Merino, dentista especialista en estética dental en Puerto Madero, Buenos Aires"
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-3">Tu odontólogo</span>
                            <h2 className="text-3xl font-light text-crema mb-6">Dr. Ariel <span className="font-cormorant italic text-oro">Merino.</span></h2>
                            <p className="text-crema/60 text-base font-light leading-relaxed mb-4">
                                Especialista en estética dental con más de 20 años de experiencia clínica. Fundador de AM Estética Dental, la clínica dental argentina reconocida por Forbes, y disertante en congresos del sector como Expodent.
                            </p>
                            <p className="text-crema/60 text-base font-light leading-relaxed mb-8">
                                Su filosofía: sonrisas naturales, mínima invasión y que el paciente vea el resultado antes de empezar.
                            </p>
                            <Link href="/dr-ariel-merino" className="inline-flex items-center gap-2 text-oro text-sm hover:gap-3 transition-all">Conocé su trayectoria →</Link>
                        </div>
                    </div>
                </section>

                {/* Galería del consultorio */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">El consultorio</span>
                            <h2 className="text-2xl font-manrope font-light text-crema">
                                Una clínica boutique <span className="font-cormorant italic text-oro">en el corazón de Puerto Madero.</span>
                            </h2>
                            <p className="text-crema/45 font-manrope text-sm mt-3 max-w-xl">Diseñada en tonos crema y oro para que tu visita al dentista se sienta como todo menos una visita al dentista.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
                            {FOTOS_CLINICA.map((foto) => (
                                <div key={foto.src} className={`relative rounded-2xl overflow-hidden border border-oro/10 group ${foto.span}`}>
                                    <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/clinica" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">Recorré la clínica →</Link>
                        </div>
                    </div>
                </section>

                {/* Opiniones */}
                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-oro text-2xl block mb-3">★★★★★</span>
                        <h2 className="text-3xl font-light text-crema">4.9 en Google, <span className="font-cormorant italic text-oro">+120 reseñas reales.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {OPINIONES.map((o) => (
                            <figure key={o.texto} className="border border-oro/12 rounded-2xl p-6 flex flex-col justify-between">
                                <blockquote className="text-crema/70 text-sm leading-relaxed font-light mb-5">&ldquo;{o.texto}&rdquo;</blockquote>
                                <figcaption className="text-oro/60 text-xs uppercase tracking-widest">{o.tratamiento}</figcaption>
                            </figure>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/opiniones" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro text-sm transition-colors">Leer todas las opiniones →</Link>
                    </div>
                </section>

                {/* Casos reales */}
                <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-10">
                            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-3">Casos reales</span>
                            <h2 className="text-2xl font-manrope font-light text-crema">
                                Pacientes reales <span className="font-cormorant italic text-oro">de nuestro consultorio.</span>
                            </h2>
                            <p className="text-crema/45 font-manrope text-sm mt-3 max-w-xl">Casos clínicos reales tratados por el Dr. Ariel Merino en Puerto Madero, Buenos Aires.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {[
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-extremo-diseno-sonrisa-carillas-ceramicas-dr-ariel-merino", alt: "Caso extremo de diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-patricia-carillas-diseno-sonrisa-ceramicas-dr-ariel-merino", alt: "Caso Patricia — diseño de sonrisa con carillas cerámicas — Dr. Ariel Merino AM Estética Dental" },
                                { src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/galeria/caso-eli-carillas-ceramicas-01-am-estetica-dental", alt: "Caso Eli — carillas cerámicas — AM Estética Dental Buenos Aires" },
                            ].map((foto) => (
                                <div key={foto.src} className="relative aspect-square rounded-2xl overflow-hidden border border-oro/10 group">
                                    <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/casos-antes-y-despues" className="inline-flex items-center gap-2 text-oro/70 hover:text-oro font-manrope text-sm transition-colors">Ver todos los casos clínicos →</Link>
                        </div>
                    </div>
                </section>

                {/* Cómo llegar */}
                <section className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-oro uppercase tracking-[0.4em] text-[10px] block mb-3">Cómo llegar</span>
                            <h2 className="text-3xl font-light text-crema mb-6">A metros del <span className="font-cormorant italic text-oro">Puente de la Mujer.</span></h2>
                            <div className="space-y-4 text-crema/60 text-sm leading-relaxed">
                                <p><span className="text-crema font-medium">Dirección:</span> Camila O&apos;Gorman 412, Oficina 101, Puerto Madero, CABA.</p>
                                <p><span className="text-crema font-medium">En subte:</span> Línea B (L.N. Alem) o Línea A (Plaza de Mayo), a 10-12 minutos caminando cruzando el dique.</p>
                                <p><span className="text-crema font-medium">En auto:</span> estacionamientos en la zona sobre Juana Manso y Olga Cossettini.</p>
                                <p><span className="text-crema font-medium">WhatsApp:</span> +54 9 11 7021-9298</p>
                            </div>
                            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 border border-oro/25 text-oro px-6 py-3 rounded-full text-sm hover:border-oro/50 transition-colors">Abrir en Google Maps →</a>
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-oro/15">
                            <Image
                                src="https://res.cloudinary.com/drctvgyqd/image/upload/v1782405022/clinica/entrada-clinica-cartel-iluminado-am-estetica-dental-puerto-madero.jpg"
                                alt="Entrada de AM Estética Dental en Camila O'Gorman 412, Puerto Madero"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="px-6 py-16 border-t border-oro/8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-light text-crema mb-10">Preguntas <span className="font-cormorant italic text-oro">frecuentes</span></h2>
                    <div className="space-y-8">
                        {FAQS.map((f) => (
                            <div key={f.q}>
                                <h3 className="font-semibold text-crema text-base mb-2">{f.q}</h3>
                                <p className="text-crema/55 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA final */}
                <section className="px-6 py-20 text-center border-t border-oro/10">
                    <h2 className="font-light text-3xl text-crema mb-4">Tu próximo dentista está <span className="font-cormorant italic text-oro">a un mensaje.</span></h2>
                    <p className="text-crema/50 text-base mb-8 max-w-sm mx-auto">Contanos qué querés mejorar de tu sonrisa. Evaluamos tu caso y te decimos exactamente qué necesitás y cuánto cuesta.</p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-oro text-carbon px-10 py-5 rounded-full font-semibold text-lg hover:bg-oro/90 transition-all">Agendá por WhatsApp →</a>
                    <p className="text-crema/25 text-xs mt-4">Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires</p>
                </section>
            </main>
        </>
    );
}
