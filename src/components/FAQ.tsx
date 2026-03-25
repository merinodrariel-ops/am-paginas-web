"use client";

import { useState } from "react";

// FAQ basado en el análisis SEO — estas preguntas son exactamente lo que
// los pacientes buscan en Google antes de contactar. Captura "People Also Ask".

const faqs = [
    {
        pregunta: "¿Cuánto cuestan las carillas dentales en Buenos Aires?",
        respuesta: "El valor de las carillas depende del material (porcelana o resina), la cantidad de piezas y el estado inicial de tu dentición. En AM Estética Dental trabajamos con valores en USD y ofrecemos financiación propia con tasa fija del 12% anual — podés simular tu plan en nuestra calculadora antes de la consulta. La consulta inicial no tiene costo.",
    },
    {
        pregunta: "¿Cuánto dura el proceso de diseño de sonrisa?",
        respuesta: "El proceso completo de diseño de sonrisa digital con carillas de porcelana se realiza en 2 a 3 sesiones en un período de 2 a 4 semanas. En la primera sesión diseñamos digitalmente tu sonrisa y te mostramos el resultado antes de empezar. Solo cuando lo aprobás, avanzamos con el tratamiento.",
    },
    {
        pregunta: "¿El blanqueamiento duele o afecta el esmalte?",
        respuesta: "El blanqueamiento profesional en AM Estética Dental es un protocolo clínico controlado. No afecta el esmalte cuando se realiza correctamente. La sensibilidad post-sesión, si ocurre, es transitoria y se maneja con protocolo específico. Es radicalmente diferente al blanqueamiento casero, que sin supervisión puede dañar el esmalte.",
    },
    {
        pregunta: "¿Puedo ver cómo va a quedar mi sonrisa antes de empezar?",
        respuesta: "Sí, siempre. El diseño de sonrisa digital 3D es parte de nuestro proceso estándar. Diseñamos tu nueva sonrisa virtualmente, te la mostramos en pantalla y hacemos todos los ajustes que necesités antes de tocar un solo diente. Aprobás el resultado antes de que empiece cualquier procedimiento.",
    },
    {
        pregunta: "¿Los alineadores invisibles son para cualquier caso?",
        respuesta: "Los alineadores invisibles resuelven la mayoría de los casos de ortodoncia — desde correcciones leves hasta casos moderados-complejos. En la consulta evaluamos tu caso específico y te indicamos si los alineadores son la mejor opción o si existe una alternativa más eficiente para tu situación.",
    },
    {
        pregunta: "¿Cómo funciona la financiación?",
        respuesta: "Financiamos el 50% del valor del tratamiento con un anticipo del 50% y una tasa fija anual del 12% (1% mensual). Las cuotas son en 3, 6 o 12 meses. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago. Podés simular tu plan exacto en nuestra calculadora de financiación.",
    },
    {
        pregunta: "¿Cuánto duran las carillas de porcelana?",
        respuesta: "Las carillas de porcelana de alta calidad duran entre 10 y 20 años con el cuidado adecuado. Las de resina tienen una vida útil de 5 a 7 años. En la consulta te asesoramos sobre qué material se adapta mejor a tu caso, tu estilo de vida y tu presupuesto.",
    },
    {
        pregunta: "¿Dónde está ubicada la clínica?",
        respuesta: "AM Estética Dental está ubicada en Camila O'Gorman 412, Puerto Madero, CABA. Atendemos de lunes a viernes de 10:00 a 18:00. Podés agendar tu consulta directamente por WhatsApp al +54 9 11 7021-9298.",
    },
];

export default function FAQ() {
    const [abierto, setAbierto] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 px-4 bg-carbon-soft relative z-10">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                        Preguntas frecuentes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
                        Todo lo que querés saber{" "}
                        <span className="font-cormorant italic text-oro">antes de llamarnos</span>
                    </h2>
                    <p className="text-crema-muted font-manrope text-lg font-light">
                        Respondemos las preguntas que casi nadie hace en voz alta.
                    </p>
                </div>

                {/* Acordeón */}
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-xl overflow-hidden transition-colors ${
                                abierto === i ? "border-oro/30 bg-carbon" : "border-oro/10 bg-carbon hover:border-oro/20"
                            }`}
                        >
                            <button
                                onClick={() => setAbierto(abierto === i ? null : i)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                            >
                                <span className={`font-manrope font-medium text-sm leading-snug ${abierto === i ? "text-crema" : "text-crema/80"}`}>
                                    {faq.pregunta}
                                </span>
                                <span className={`text-oro flex-none transition-transform duration-200 ${abierto === i ? "rotate-45" : ""}`}>
                                    +
                                </span>
                            </button>

                            {abierto === i && (
                                <div className="px-6 pb-6">
                                    <div className="h-px bg-oro/10 mb-5" />
                                    <p className="text-crema-muted font-manrope text-sm leading-relaxed">
                                        {faq.respuesta}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA debajo del FAQ */}
                <div className="mt-12 text-center">
                    <p className="text-crema-muted font-manrope text-sm mb-4">
                        ¿Tenés una pregunta que no está acá?
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Tengo%20una%20consulta%20sobre..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-oro font-manrope text-sm font-medium hover:text-oro-light transition-colors"
                    >
                        Escribinos por WhatsApp →
                    </a>
                </div>

            </div>
        </section>
    );
}
