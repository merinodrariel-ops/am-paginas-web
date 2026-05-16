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

export default function ClientesVIP() {
    return (
        <section className="py-24 px-6 md:px-12 bg-carbon border-t border-oro/10">
            <div className="max-w-4xl mx-auto">

                <div className="mb-14">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-5">
                        Quienes nos eligen
                    </span>
                    <h2 className="text-3xl md:text-4xl font-manrope font-light text-crema leading-tight">
                        Figuras públicas y líderes{" "}
                        <span className="font-cormorant italic text-oro">que confiaron en AM</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {CLIENTES_DESTACADOS.map((cliente) => (
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
                    Por discreción, no publicamos nombres sin autorización. Los casos mencionados cuentan con consentimiento expreso.
                </p>

            </div>
        </section>
    );
}
