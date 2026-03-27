"use client";

// Sección de diferenciación explícita.
// El análisis competitivo reveló que NINGÚN competidor en CABA tiene
// una página de diferenciación. Esta sección captura a quien está comparando.

const diferenciadores = [
    {
        titulo: "Resultados firmados",
        descripcion: "Cada foto que publicamos tiene el watermark @drarielmerino. No son resultados de una clínica genérica — son casos del Dr. Merino, firmados con nombre y apellido. Ningún competidor hace esto.",
        icono: "✦",
    },
    {
        titulo: "El único simulador financiero del mercado",
        descripcion: "Calculá exactamente cuánto te cuesta tu tratamiento antes de hablar con nadie. Tasa fija 18% anual, pago en USD o ARS al tipo de cambio oficial del Banco Nación. Transparencia total en un mercado que vive de la opacidad de precios.",
        icono: "◆",
    },
    {
        titulo: "Puerto Madero no es un detalle",
        descripcion: "Camila O'Gorman 412, Oficina 101, Puerto Madero. En el metro cuadrado más caro de Argentina. Esto no es marketing — es un estándar de infraestructura, equipamiento y clientela que define todo lo que hacemos adentro.",
        icono: "◈",
    },
    {
        titulo: "Forbes. Miss Universo. Sin más.",
        descripcion: "Somos la única clínica odontológica en Argentina en las páginas de Forbes. La sonrisa de Miss Universo es nuestra. No pedimos que confíes en nosotros. Te mostramos por qué otros ya lo hacen.",
        icono: "◉",
    },
    {
        titulo: "Tecnología 3D antes de tocar un diente",
        descripcion: "Diseñamos tu sonrisa digitalmente y te mostramos el resultado antes de empezar. Aprobás o ajustamos. Recién cuando el diseño es exactamente lo que querés, arrancamos. Eso elimina el mayor miedo de cualquier paciente.",
        icono: "◎",
    },
    {
        titulo: "Sin impresión. Sin moldes. Sin ansiedad.",
        descripcion: "Escáner intraoral digital. Cero pasta en la boca. Cero impresiones tradicionales. Un proceso clínico que respeta que venir al dentista requiere valentía, y nos ocupamos de que valga la pena.",
        icono: "◐",
    },
];

export default function PorQueAM() {
    return (
        <section className="py-32 px-4 bg-carbon-soft relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        Por qué AM Estética Dental
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                            Hay muchas clínicas en Buenos Aires.{" "}
                            <span className="font-cormorant italic text-oro">Solo una en Puerto Madero con este nivel.</span>
                        </h2>
                        <p className="text-crema-muted font-manrope text-lg font-light leading-relaxed">
                            No compete por precio. No compite por volumen. AM Estética Dental compite por resultado — y en ese terreno, la conversación es diferente.
                        </p>
                    </div>
                </div>

                {/* Grilla de diferenciadores */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-oro/10">
                    {diferenciadores.map((d) => (
                        <div
                            key={d.titulo}
                            className="bg-carbon p-8 hover:bg-carbon-soft transition-colors group"
                        >
                            <div className="text-oro text-xl mb-6 group-hover:scale-110 transition-transform inline-block">
                                {d.icono}
                            </div>
                            <h3 className="text-crema font-manrope font-medium text-base mb-4 leading-snug">
                                {d.titulo}
                            </h3>
                            <p className="text-crema-muted font-manrope text-sm leading-relaxed">
                                {d.descripcion}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA base */}
                <div className="mt-16 text-center">
                    <a
                        href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Quiero%20conocer%20m%C3%A1s%20sobre%20AM%20Est%C3%A9tica%20Dental."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro-light transition-all"
                    >
                        Agendá tu consulta inicial
                        <span>→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
