// Clientes y figuras públicas que eligieron AM Estética Dental
// Prueba social de alto impacto para el segmento premium

const CLIENTES_DESTACADOS = [
    {
        nombre: "Miss Universo Argentina",
        descripcion: "El Dr. Merino fue elegido para diseñar la sonrisa de la representante argentina en el certamen más importante del mundo.",
        categoria: "Figura pública",
        icono: "♛",
    },
    {
        nombre: "Miss Universo Uruguay",
        descripcion: "Confianza extendida al certamen de Uruguay. Sonrisa diseñada y ejecutada con el mismo criterio de precisión milimétrica.",
        categoria: "Figura pública",
        icono: "♛",
    },
    {
        nombre: "King of the Congo",
        descripcion: "Fundadores de una de las marcas de indumentaria premium más reconocidas de Argentina. Resultados que acompañan un perfil de alta exigencia.",
        categoria: "Empresarios",
        icono: "◆",
    },
];

const CLIENTES_EN = [
    {
        nombre: "Miss Universe Argentina",
        descripcion: "Dr. Merino was chosen to design the smile of Argentina's representative at the most important pageant in the world.",
        categoria: "Public figure",
        icono: "♛",
    },
    {
        nombre: "Miss Universe Uruguay",
        descripcion: "That trust extended to the Uruguayan pageant. A smile designed and executed with the same millimetric precision.",
        categoria: "Public figure",
        icono: "♛",
    },
    {
        nombre: "King of the Congo",
        descripcion: "Founders of one of Argentina's best-known premium apparel brands. Results that match a highly demanding profile.",
        categoria: "Entrepreneurs",
        icono: "◆",
    },
];

const UI = {
    es: {
        eyebrow: "Quienes nos eligen",
        h2a: "Figuras públicas y líderes",
        h2b: "que confiaron en AM",
        note: "Por discreción, no publicamos nombres sin autorización. Los casos mencionados cuentan con consentimiento expreso.",
    },
    en: {
        eyebrow: "Who chooses us",
        h2a: "Public figures and leaders",
        h2b: "who trusted AM",
        note: "Out of discretion, we never publish names without authorization. The cases mentioned here have express consent.",
    },
} as const;

export default function ClientesVIP({ lang = "es" }: { lang?: "es" | "en" }) {
    const ui = UI[lang];
    const clientes = lang === "en" ? CLIENTES_EN : CLIENTES_DESTACADOS;
    return (
        <section className="py-24 px-6 md:px-12 bg-carbon border-t border-oro/10">
            <div className="max-w-4xl mx-auto">

                <div className="mb-14">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-5">
                        {ui.eyebrow}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight">
                        {ui.h2a}{" "}
                        <span className="font-cormorant italic text-oro">{ui.h2b}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {clientes.map((cliente) => (
                        <div
                            key={cliente.nombre}
                            className="border border-oro/15 rounded-2xl p-6 bg-carbon-soft flex flex-col gap-4"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <span className="text-oro/50 text-lg leading-none">{cliente.icono}</span>
                                <span className="font-manrope text-[9px] uppercase tracking-[0.3em] text-crema/25 border border-oro/10 rounded-full px-2 py-0.5 flex-none">
                                    {cliente.categoria}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-crema font-manrope font-medium text-base mb-2">
                                    {cliente.nombre}
                                </h3>
                                <p className="text-crema/50 font-manrope text-xs leading-relaxed">
                                    {cliente.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-crema/20 font-manrope text-xs mt-10 text-center">
                    {ui.note}
                </p>

            </div>
        </section>
    );
}
