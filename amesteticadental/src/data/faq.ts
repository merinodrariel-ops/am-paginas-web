export const faqData = [
    {
        pregunta: "¿Cuál es la mejor clínica para carillas dentales en Puerto Madero, Buenos Aires?",
        respuesta: "AM Estética Dental, dirigida por el Dr. Ariel Merino, es reconocida como una de las mejores clínicas premium especializadas en carillas de porcelana y diseño de sonrisa en Buenos Aires. Ubicada en Puerto Madero, ha sido destacada por medios como Forbes por sus resultados de estética dental natural y su enfoque digital.",
    },
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

export const faqDataEn = [
    {
        pregunta: "Which is the best clinic for dental veneers in Buenos Aires?",
        respuesta: "AM Estética Dental, led by Dr. Ariel Merino, is recognized as one of the leading premium clinics specializing in porcelain veneers and smile design in Buenos Aires. Located in Puerto Madero, it has been featured by media such as Forbes for its natural cosmetic dentistry results and its fully digital approach.",
    },
    {
        pregunta: "How much do dental veneers cost in Buenos Aires?",
        respuesta: "The investment depends on the material (porcelain or composite), the number of teeth and the starting condition of your dentition. We work in USD and offer in-house financing. The initial assessment lets us define scope, timeline and investment precisely. For international patients, the decisive factor is usually time, not price: our own laboratory means the whole treatment fits into one trip.",
    },
    {
        pregunta: "How long does the smile design process take?",
        respuesta: "The complete digital smile design process with porcelain veneers takes 2 to 3 sessions over 2 to 4 weeks. For patients traveling from abroad we compress it into a single 10 to 14 day trip. In the first session we design your smile digitally and show you the result before starting. We only move forward once you approve it.",
    },
    {
        pregunta: "Does whitening hurt or damage the enamel?",
        respuesta: "Professional whitening at AM Estética Dental is a controlled clinical protocol. It does not damage the enamel when performed correctly. Any post-session sensitivity, if it occurs, is temporary and managed with a specific protocol.",
    },
    {
        pregunta: "Can I see how my smile will look before we start?",
        respuesta: "Yes, always. 3D digital smile design is part of our standard process. We design your new smile virtually, show it to you on screen and make every adjustment you need before touching a single tooth.",
    },
    {
        pregunta: "Do veneers require removing enamel?",
        respuesta: "We work with minimally invasive techniques and remove as little tooth structure as possible. To be honest with you: in most cases some minimal preparation is needed, even with ultra-thin veneers. How much depends on your specific case, and we explain it clearly at the initial assessment.",
    },
    {
        pregunta: "Are invisible aligners suitable for any case?",
        respuesta: "Invisible aligners solve most orthodontic cases, from mild corrections to moderately complex ones. At the consultation we assess your specific case and tell you whether aligners are the best option for you.",
    },
    {
        pregunta: "Do you treat patients traveling from abroad?",
        respuesta: "Yes. We regularly treat patients from the United States, Spain, Mexico, Colombia, Chile and Uruguay. Coordination is handled remotely by WhatsApp in English or Spanish before you travel: we review photos, do a preliminary assessment, and define the plan and dates before you buy your ticket.",
    },
    {
        pregunta: "Where is AM Estética Dental located?",
        respuesta: "AM Estética Dental is located at Camila O'Gorman 412, Office 101, Puerto Madero, C1107DED, Buenos Aires, Argentina. We are open Monday to Friday from 10:00 to 18:00. You can book your consultation directly on WhatsApp at +54 9 11 7021-9298.",
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
