export const faqData = [
    {
        pregunta: "¿Cuánto cuestan las carillas dentales en Buenos Aires?",
        respuesta: "El valor de las carillas depende del material (porcelana o resina), la cantidad de piezas y el estado inicial de tu dentición. En AM Estética Dental trabajamos con valores en USD y ofrecemos financiación propia con tasa fija del 18% anual. La evaluación inicial nos permite definir alcance, tiempos y presupuesto con precisión.",
    },
    {
        pregunta: "¿Cuánto dura el proceso de diseño de sonrisa?",
        respuesta: "El proceso completo de diseño de sonrisa digital con carillas de porcelana se realiza en 2 a 3 sesiones en un período de 2 a 4 semanas. En la primera sesión diseñamos digitalmente tu sonrisa y te mostramos el resultado antes de empezar. Solo cuando lo aprobás, avanzamos con el tratamiento.",
    },
    {
        pregunta: "¿El blanqueamiento duele o afecta el esmalte?",
        respuesta: "El blanqueamiento profesional en AM Estética Dental es un protocolo clínico controlado. No afecta el esmalte cuando se realiza correctamente. La sensibilidad post-sesión, si ocurre, es transitoria y se maneja con protocolo específico.",
    },
    {
        pregunta: "¿Puedo ver cómo va a quedar mi sonrisa antes de empezar?",
        respuesta: "Sí, siempre. El diseño de sonrisa digital 3D es parte de nuestro proceso estándar. Diseñamos tu nueva sonrisa virtualmente, te la mostramos en pantalla y hacemos todos los ajustes necesarios antes de tocar un solo diente.",
    },
    {
        pregunta: "¿Los alineadores invisibles son para cualquier caso?",
        respuesta: "Los alineadores invisibles resuelven la mayoría de los casos de ortodoncia, desde correcciones leves hasta casos moderados-complejos. En la consulta evaluamos tu caso específico y te indicamos si los alineadores son la mejor opción.",
    },
    {
        pregunta: "¿Cómo funciona la financiación?",
        respuesta: "Trabajamos con financiación propia y tasa fija anual del 18% sobre el saldo financiado. Podés simular tu plan con 30% o 50% de anticipo y ver cómo quedarían las cuotas a 3, 6 o 12 meses. Los valores en USD se abonan en pesos al tipo de cambio oficial del Banco Nación del día del pago.",
    },
    {
        pregunta: "¿Cuánto duran las carillas de porcelana?",
        respuesta: "Las carillas de porcelana de alta calidad duran entre 10 y 20 años con el cuidado adecuado. Las de resina tienen una vida útil de 5 a 7 años.",
    },
    {
        pregunta: "¿Dónde está ubicada la clínica AM Estética Dental?",
        respuesta: "AM Estética Dental está ubicada en Camila O'Gorman 412, Oficina 101, Puerto Madero, C1107DED CABA. Atendemos de lunes a viernes de 10:00 a 18:00. Podés agendar tu consulta directamente por WhatsApp al +54 9 11 7021-9298.",
    },
];

export function generateFaqSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((faq) => ({
            "@type": "Question",
            name: faq.pregunta,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.respuesta,
            },
        })),
    };
}
