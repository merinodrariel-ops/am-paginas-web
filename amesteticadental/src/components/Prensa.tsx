// Sección de presencia en medios — E-E-A-T signal alto para SEO
// Fuentes verificadas de apariciones reales del Dr. Ariel Merino

// Logos estilizados que capturan la identidad tipográfica de cada medio
const LOGOS_MEDIOS = [
    {
        id: "forbes",
        node: (
            <div className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-crema/15">
                    <span className="font-manrope text-[10px] font-black text-crema/60 leading-none">F</span>
                </div>
                <span className="font-manrope text-sm font-black uppercase tracking-[0.12em] text-crema/45">Forbes</span>
            </div>
        ),
    },
    {
        id: "lanacion",
        node: (
            <span className="font-cormorant text-lg italic font-semibold tracking-wide text-crema/40">
                La Nación
            </span>
        ),
    },
    {
        id: "infobae",
        node: (
            <span className="font-manrope text-sm font-bold tracking-[-0.02em] text-crema/40">
                info<span className="text-oro/40">bae</span>
            </span>
        ),
    },
    {
        id: "ambito",
        node: (
            <span className="font-cormorant text-lg font-medium tracking-[0.05em] text-crema/38">
                ámbito
            </span>
        ),
    },
    {
        id: "parati",
        node: (
            <span className="font-cormorant text-lg italic text-crema/38 tracking-wide">
                para ti
            </span>
        ),
    },
    {
        id: "ohlala",
        node: (
            <span className="font-manrope text-xs font-semibold uppercase tracking-[0.3em] text-crema/35">
                Ohlalá!
            </span>
        ),
    },
    {
        id: "yahoo",
        node: (
            <span className="font-manrope text-sm font-bold tracking-tight text-crema/35">
                Yahoo <span className="font-light">Noticias</span>
            </span>
        ),
    },
    {
        id: "odonto",
        node: (
            <span className="font-manrope text-xs font-medium uppercase tracking-[0.2em] text-crema/32">
                OdontoEspacio
            </span>
        ),
    },
];

const NOTAS_DESTACADAS = [
    {
        medio: "Forbes Argentina",
        categoria: "Innovación",
        rol: "Nota de cobertura",
        titular: "Del 1 al 10, ¿qué tan linda es tu sonrisa? La IA te lo dirá en segundos",
        extracto: "El Dr. Ariel Merino y AM Estética Dental, referentes en la incorporación de inteligencia artificial al diseño de sonrisa en Argentina.",
        href: "https://www.forbesargentina.com/innovacion/del-1-10-que-tan-linda-tu-sonrisa-ia-te-lo-dira-segundos-n51306",
        año: "2024",
    },
    {
        medio: "Ámbito",
        categoria: "Columna de autor",
        rol: "Escrito por el Dr. Merino",
        titular: "¿Por qué la Argentina es una parada obligada a la hora de rediseñar la sonrisa?",
        extracto: "Columna de opinión firmada por el Dr. Ariel Merino para el diario económico de mayor tirada de Argentina.",
        href: "https://www.ambito.com/lifestyle/por-que-la-argentina-es-una-parada-obligada-la-hora-redisenar-la-sonrisa-n6021134",
        año: "2024",
    },
    {
        medio: "La Nación",
        categoria: "Columna de autor",
        rol: "Escrito por el Dr. Merino",
        titular: "La revolución de la robótica en la odontología ya es una realidad",
        extracto: "Artículo firmado por Dr. Ariel Merino (M.N. 34.869) en el diario de referencia más leído de Argentina.",
        href: "https://www.lanacion.com.ar/salud/la-revolucion-de-la-robotica-en-la-odontologia-ya-es-una-realidad-nid10032025/",
        año: "2025",
    },
    {
        medio: "Somos Ohlalá",
        categoria: "Experto consultado",
        rol: "Fuente especializada",
        titular: "10 consejos para cuidar la salud bucal y vivir más años, según un experto",
        extracto: "\"Experto consultado: Dr. Ariel Merino, odontólogo, experto en estética dental.\" — Somos Ohlalá, enero 2026.",
        href: "https://www.somosohlala.com/lifestyle/salud/10-consejos-para-cuidar-la-salud-bucal-y-vivir-mas-anos-segun-un-experto-nid09012026",
        año: "2026",
    },
    {
        medio: "La Nación",
        categoria: "Experto consultado",
        rol: "Fuente especializada",
        titular: "Contra el bruxismo: cinco ejercicios sencillos para calmar este mecanismo inconsciente",
        extracto: "El Dr. Merino como especialista de referencia para La Nación en el abordaje clínico del bruxismo.",
        href: "https://www.lanacion.com.ar/salud/contra-el-bruxismo-cinco-ejercicios-sencillos-para-calmar-este-mecanismo-inconsciente-nid30092025/",
        año: "2025",
    },
    {
        medio: "Infobae",
        categoria: "Experto consultado",
        rol: "Fuente especializada",
        titular: "Científicos desarrollan una pasta dentífrica para reparar los dientes",
        extracto: "El Dr. Ariel Merino como fuente especializada para el medio de mayor audiencia digital de Argentina.",
        href: "https://www.infobae.com/salud/ciencia/2025/08/14/cientificos-desarrollan-una-pasta-dentifrica-hecha-con-cabellos-que-podria-ser-una-opcion-para-reparar-los-dientes/",
        año: "2025",
    },
];

export default function Prensa() {
    return (
        <section id="prensa" className="py-24 bg-carbon-soft border-y border-oro/10 overflow-hidden">

            {/* Header */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-5">
                            Presencia en medios
                        </span>
                        <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight">
                            El Dr. Merino es fuente{" "}
                            <span className="font-cormorant italic text-oro">de referencia</span>
                        </h2>
                    </div>
                    <p className="text-crema/55 font-manrope text-sm leading-relaxed max-w-xs md:text-right">
                        Presencia editorial en los medios más influyentes de Argentina como especialista de estética dental.
                    </p>
                </div>
            </div>

            {/* Marquee de logos */}
            <div
                className="mb-14 overflow-hidden"
                style={{
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                    maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                }}
            >
                <div className="flex gap-0 prensa-marquee-track">
                    {[...LOGOS_MEDIOS, ...LOGOS_MEDIOS, ...LOGOS_MEDIOS].map((logo, i) => (
                        <div
                            key={`${logo.id}-${i}`}
                            className="flex-none flex items-center gap-10 px-10"
                        >
                            {logo.node}
                            <span className="text-oro/15 text-[8px]">◆</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Grid de notas */}
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {NOTAS_DESTACADAS.map((nota) => (
                        <a
                            key={nota.titular}
                            href={nota.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border border-oro/12 rounded-2xl p-5 bg-carbon hover:border-oro/28 transition-colors flex flex-col gap-3"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <span className="text-oro/70 font-manrope font-semibold text-[11px] block">
                                        {nota.medio}
                                    </span>
                                    <span className="text-crema/30 font-manrope text-[10px]">{nota.año}</span>
                                </div>
                                <span className={`font-manrope text-[9px] uppercase tracking-widest rounded-full px-2 py-0.5 flex-none ${
                                    nota.categoria === "Columna de autor"
                                        ? "bg-oro/12 text-oro/80 border border-oro/20"
                                        : "border border-oro/10 text-crema/30"
                                }`}>
                                    {nota.rol}
                                </span>
                            </div>
                            <h3 className="text-crema/80 font-manrope font-medium text-sm leading-snug group-hover:text-crema transition-colors line-clamp-3">
                                {nota.titular}
                            </h3>
                            <p className="text-crema/40 font-manrope text-xs leading-relaxed line-clamp-2 flex-1">
                                {nota.extracto}
                            </p>
                            <span className="text-oro/40 group-hover:text-oro transition-colors text-sm mt-auto">
                                Leer nota →
                            </span>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}
