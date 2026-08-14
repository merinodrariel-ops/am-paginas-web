export const SITE_URL = "https://www.amesteticadental.uy";
export const ARGENTINA_URL = "https://www.amesteticadental.com";
export const REVIEW_URL = "https://www.thedentalreview.com";
export const PERSON_URL = "https://www.arielmerino.com";
export const WHATSAPP_NUMBER = "5491170219298";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
/**
 * Endpoint de postulaciones, en el sitio argentino.
 *
 * El formulario vive acá pero escribe allá: la administración de postulaciones es
 * una sola. Así la `SUPABASE_SERVICE_ROLE_KEY` no necesita existir en un segundo
 * proyecto de Vercel. El servidor etiqueta la fila como `web_uruguay` según el
 * origen de la petición, no según un campo que el navegador pueda falsear.
 */
export const JOBS_ENDPOINT = `${ARGENTINA_URL}/api/job-applications`;
export const URUGUAY_SMILE_SIMULATOR_URL = "https://www.amesteticadental.com/sonrisa?source=uy";
export const BROU_EXCHANGE_RATE_URL = "https://www.brou.com.uy/cotizaciones";

// Entidades canónicas de la marca. Se comparten con amesteticadental.com para que
// Google entienda "una marca, dos sedes" y no trate a .uy como un sitio ajeno.
export const BRAND_ID = `${ARGENTINA_URL}/#organization`;
export const AR_CLINIC_ID = `${ARGENTINA_URL}/#clinic`;
export const UY_CLINIC_ID = `${SITE_URL}/#clinic`;
export const PERSON_ID = `${PERSON_URL}/#person`;
export const WIKIDATA_BRAND = "https://www.wikidata.org/wiki/Q138862170";
export const WIKIDATA_PERSON = "https://www.wikidata.org/wiki/Q134287655";

export const ADDRESS = {
  street: "Miraflores 1445, Oficina 202",
  locality: "Montevideo",
  region: "Montevideo",
  country: "UY",
  neighborhood: "Carrasco",
  latitude: -34.8926811,
  longitude: -56.0612685,
} as const;

export const LOGO_PUBLIC_ID = "am/uy/brand/logo-am-uruguay-clinica-dental-estetica-dental-carrasco-montevideo-miraflores-1445-oficina-202.png";
export const LOGO_VERSION = "v1786512714";
export const LOGO_BASE_URL = `https://res.cloudinary.com/drctvgyqd/image/upload/${LOGO_VERSION}/${LOGO_PUBLIC_ID}`;
export const LOGO_ICON_URL = `https://res.cloudinary.com/drctvgyqd/image/upload/w_192,h_192,c_fill,q_auto,f_auto/${LOGO_VERSION}/${LOGO_PUBLIC_ID}`;
export const LOGO_APPLE_ICON_URL = `https://res.cloudinary.com/drctvgyqd/image/upload/w_180,h_180,c_fill,q_auto,f_auto/${LOGO_VERSION}/${LOGO_PUBLIC_ID}`;
export const LOGO_OG_URL = `https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_630,c_pad,b_rgb:151716,q_auto,f_auto/${LOGO_VERSION}/${LOGO_PUBLIC_ID}`;

/** Mensaje pre-cargado de WhatsApp, para atribuir el lead a la página que lo originó. */
export function whatsappFor(context: string): string {
  return `${WHATSAPP_URL}&text=${encodeURIComponent(
    `Hola, escribo desde Uruguay. Me interesa ${context} con AM Estética Dental.`,
  )}`;
}

export const clinicAssets = [
  {
    title: "Miraflores 1445",
    label: "Foto real exterior",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1786513859/am/uy/clinica-carrasco/fachada-consultorio-am-estetica-dental-uruguay-miraflores-1445-carrasco-montevideo.webp",
    alt: "Fachada exterior de la futura clínica AM Estética Dental Uruguay en Miraflores 1445, zona Carrasco, Montevideo",
  },
  {
    title: "Edificio en Carrasco",
    label: "Foto real exterior",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1786513860/am/uy/clinica-carrasco/exterior-edificio-clinica-dental-am-uruguay-carrasco-montevideo-oficina-202.webp",
    alt: "Exterior del edificio de la futura clínica dental AM Uruguay en Carrasco, Montevideo",
  },
  {
    title: "Tecnología y laboratorio propio",
    label: "Render del proyecto",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1786513860/am/uy/clinica-carrasco/render-proyecto-clinica-dental-tecnologia-laboratorio-propio-am-uruguay-carrasco.webp",
    alt: "Render del proyecto de clínica dental AM Uruguay con foco en tecnología y laboratorio propio en Carrasco",
  },
  {
    title: "Recepción AM Uruguay",
    label: "Render del proyecto",
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1786513861/am/uy/clinica-carrasco/render-recepcion-clinica-dental-premium-am-estetica-dental-uruguay-montevideo.webp",
    alt: "Render de recepción premium para AM Estética Dental Uruguay en Montevideo",
  },
] as const;

export const sharedCases = [
  {
    slug: "rehabilitacion-oral-completa-carillas-coronas-implantes",
    title: "Renovó su sonrisa completa en menos de un mes",
    treatment: "Rehabilitación oral, carillas, coronas e implantes",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/rehabilitacion-completa-sonrisa/rehabilitacion-oral-completa-antes-despues-rostro-labios-portada-carillas-coronas-implantes-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
  },
  {
    slug: "rehabilitacion-ceramica-ambos-maxilares-sin-cirugia-ortodoncia",
    title: "Más de 13 años de seguimiento clínico",
    treatment: "Rehabilitación cerámica de ambos maxilares",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/01-carillas-dentales-antes-despues-retrato-am-estetica-dental-puerto-madero.png",
  },
  {
    slug: "diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan",
    title: "Diseño de sonrisa para una paciente de Milán",
    treatment: "Carillas cerámicas y armonía facial",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/diseno-sonrisa-plano-quebrado-carillas-ceramicas-antes-despues-portada-paciente-italia-milan-dr-ariel-merino-am-estetica-dental",
  },
  {
    slug: "carilla-unitaria-incisivo-central-oscurecido",
    title: "Una carilla para recuperar un incisivo central",
    treatment: "Carilla cerámica unitaria",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-ceramica-resultado-natural-dr-ariel-merino-am-estetica-dental",
  },
  {
    slug: "20-carillas-porcelana-apinamiento-sin-ortodoncia",
    title: "20 carillas para resolver apiñamiento",
    treatment: "Carillas de porcelana y diseño de sonrisa",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental",
  },
  {
    slug: "agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas",
    title: "Rehabilitación completa por agenesia dental",
    treatment: "Implantes y 24 restauraciones cerámicas",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
  },
  {
    slug: "diseno-sonrisa-cierre-diastemas-dientes-conoidos",
    title: "Cierre de diastemas y armonía de proporciones",
    treatment: "Diseño de sonrisa con cerámicas",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
  },
  {
    slug: "carillas-resina-diseno-sonrisa-gingivectomia-laser",
    title: "Diseño de sonrisa y gingivectomía láser",
    treatment: "Resinas, encía y armonía dental",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/diseno-sonrisa-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
  },
  {
    slug: "gingivectomia-laser-micro-diseno-sonrisa-resinas",
    title: "Micro diseño de sonrisa con resinas",
    treatment: "Gingivectomía láser y resinas",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/transformacion-extrema-caries-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
  },
  {
    slug: "bruxismo-desgaste-dental-rehabilitacion-carillas-ceramicas",
    title: "Rehabilitación estética de un caso de bruxismo",
    treatment: "Carillas cerámicas y recuperación funcional",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-desgaste-dental-antes-despues-carillas-ceramicas-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
  },
  {
    slug: "gingivectomia-laser-sin-bisturi-sangrado-puntos",
    title: "Contorno gingival y diseño de sonrisa",
    treatment: "Gingivectomía láser y cerámicas",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/gingivectomia-laser-09-antes-despues-comparativa-2/01-gingivectomia-laser-09-antes-despues-comparativa.png",
  },
] as const;

export const localFaqs = [
  {
    question: "¿AM Estética Dental ya atiende en Montevideo?",
    answer: "Todavía no. Estamos preparando la sede de zona Carrasco en Miraflores 1445, Oficina 202. Mientras tanto, los pacientes uruguayos que quieren avanzar ya se atienden en la sede de Puerto Madero, Buenos Aires, con una planificación pensada para resolver el tratamiento en pocos días de viaje.",
  },
  {
    question: "¿Qué distingue al método AM?",
    answer: "El método AM integra diagnóstico, planificación digital, criterio clínico, materiales indicados y laboratorio propio. Ese laboratorio es la diferencia real: permite diseñar, probar y ajustar las piezas sin los tiempos de espera habituales de un laboratorio externo.",
  },
  {
    question: "¿Qué tipo de tratamientos ofrecerá la sede de Carrasco?",
    answer: "El foco estará en estética dental, diseño de sonrisa, carillas cerámicas, implantes, rehabilitación oral y planificación digital. El alcance definitivo de cada tratamiento se comunica al abrir la agenda y siempre depende de una evaluación clínica individual.",
  },
  {
    question: "¿Las carillas requieren preparación dental?",
    answer: "Cada caso se planifica de forma individual. Trabajamos con un enfoque mínimamente invasivo y con la menor preparación compatible con un resultado estable y natural; en la mayoría de los casos es necesaria una preparación mínima del esmalte.",
  },
  {
    question: "¿Cómo me entero de la apertura y de la agenda?",
    answer: "Podés dejar tus datos en la lista de novedades. Te escribiremos cuando haya fecha de apertura, información de agenda y novedades verificadas de la nueva sede.",
  },
  {
    question: "¿En qué moneda se expresa la inversión?",
    answer: "Siempre en dólares estadounidenses. El simulador de financiación muestra además el equivalente en pesos uruguayos usando la cotización vendedora del Banco República, para que puedas dimensionar la inversión en tu moneda.",
  },
];

export const VIDEO_BASE = "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto:eco,f_auto/implantes-dentales-am";
export const VIDEO_POSTER_BASE = "https://res.cloudinary.com/drctvgyqd/video/upload/so_0,w_1000,q_auto,f_jpg/implantes-dentales-am";

/** Video en loop del hero. Mismos assets que ya usa la sede argentina. */
export type TreatmentVideo = {
  id: string;
  badge: string;
  caption: string;
  alt: string;
  /** Segundos de duración, para el schema VideoObject. */
  duration: number;
};

/** Caso real usado como prueba visual dentro de una página de tratamiento. */
export type TreatmentCase = {
  slug: string;
  image: string;
  alt: string;
  caption: string;
};

export type TreatmentPage = {
  /** H1 de la página. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** Bajada del hero. */
  lead: string;
  /** Resumen corto para la grilla del home. */
  intro: string;
  sections: { heading: string; body: string[] }[];
  bullets?: { label: string; text: string }[];
  investment?: { label: string; value: string; note: string }[];
  faqs: { question: string; answer: string }[];
  /** Video en loop junto al hero. */
  video?: TreatmentVideo;
  /** Casos reales que ilustran el tratamiento. Enlazan al detalle en el sitio argentino. */
  cases?: TreatmentCase[];
  /** Página equivalente en amesteticadental.com — genera el hreflang es-AR ↔ es-UY. */
  arCounterpart?: string;
  /** Etiqueta del enlace hacia esa página argentina. */
  arLabel?: string;
  related: string[];
  whatsappContext: string;
};

export const treatmentPages: Record<string, TreatmentPage> = {
  "carillas-dentales-montevideo": {
    title: "Carillas dentales en Montevideo",
    metaTitle: "Carillas dentales en Montevideo | AM Estética Dental",
    metaDescription:
      "Carillas cerámicas con criterio clínico y laboratorio propio. AM Estética Dental prepara su sede en Carrasco, Montevideo, y hoy atiende pacientes uruguayos en Buenos Aires.",
    eyebrow: "Próxima sede en zona Carrasco",
    lead: "AM Estética Dental prepara en Carrasco una propuesta centrada en carillas cerámicas diseñadas para integrarse a la expresión, las proporciones faciales y la función de cada paciente.",
    intro:
      "Carillas cerámicas diseñadas para integrarse a la expresión, las proporciones faciales y la función de cada paciente.",
    sections: [
      {
        heading: "Qué resuelve una carilla bien indicada",
        body: [
          "Una carilla es una lámina cerámica adherida a la cara visible del diente. Bien indicada, corrige color, forma, proporción, pequeñas rotaciones y desgastes del borde incisal sin recurrir a tratamientos más invasivos.",
          "No es la respuesta a todo. Cuando hay enfermedad de encías activa, caries extensas, una mordida descompensada o una posición dentaria que excede lo que la cerámica puede disimular, primero se resuelve eso. Indicar una carilla sobre un problema no tratado es la forma más rápida de perder el resultado.",
        ],
      },
      {
        heading: "Por qué el laboratorio propio cambia los tiempos",
        body: [
          "En el circuito habitual, la clínica envía el caso a un laboratorio externo, espera, recibe, prueba, devuelve y vuelve a esperar. Cada ida y vuelta suma semanas.",
          "AM trabaja con laboratorio propio: el técnico ve el caso, participa de la prueba y ajusta en el momento. Esa integración es la que permite concentrar el tratamiento en pocos días de trabajo clínico en lugar de estirarlo por meses. Para un paciente uruguayo que viaja, esa diferencia es la que hace viable el tratamiento.",
        ],
      },
      {
        heading: "Preparación mínima, dicha con precisión",
        body: [
          "En la enorme mayoría de los casos hace falta una preparación mínima del esmalte para que la carilla asiente bien, respete el perfil de emergencia y no quede sobrecontorneada. Es una reducción del orden de décimas de milímetro, muy por debajo del espesor total del esmalte.",
          "Prometer cero desgaste sería más fácil de vender y menos honesto. El compromiso real de AM es otro: la menor preparación compatible con un resultado estable, decidida sobre el diagnóstico de cada caso y no sobre un eslogan.",
        ],
      },
    ],
    bullets: [
      { label: "Material", text: "Cerámica de laboratorio, seleccionada según el caso y el color de base del diente." },
      { label: "Planificación", text: "Diseño digital previo para acordar forma, proporción y expresión antes de tocar un diente." },
      { label: "Preparación", text: "Mínimamente invasiva; el grado exacto se define recién después de evaluar el caso." },
      { label: "Sede hoy", text: "Puerto Madero, Buenos Aires. Carrasco, Montevideo, en preparación." },
    ],
    faqs: [
      {
        question: "¿Cuántas piezas necesito?",
        answer:
          "Depende de cuánto se ve al sonreír y de dónde está el problema. Muchos casos se resuelven con 8 a 10 piezas superiores; otros requieren tratar también el maxilar inferior para que el conjunto se vea coherente. Se define con el diseño digital, no antes.",
      },
      {
        question: "¿Cuánto duran las carillas cerámicas?",
        answer:
          "Con una indicación correcta, buena higiene y control del bruxismo, las cerámicas tienen un horizonte de vida largo. AM documenta casos con más de trece años de seguimiento clínico. Lo que acorta la vida útil casi siempre no es el material: es una parafunción no controlada o una indicación forzada.",
      },
      {
        question: "¿Puedo hacerlo si vivo en Montevideo?",
        answer:
          "Sí. Hasta la apertura de la sede de Carrasco, el tratamiento se realiza en Puerto Madero, Buenos Aires, con la planificación concentrada para reducir la cantidad de viajes. La evaluación inicial puede empezar a distancia.",
      },
    ],
    cases: [
      {
        slug: "20-carillas-porcelana-apinamiento-sin-ortodoncia",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental",
        alt: "Antes y después de 20 carillas de porcelana que resolvieron un apiñamiento sin ortodoncia",
        caption: "20 carillas para resolver un apiñamiento",
      },
      {
        slug: "carilla-unitaria-incisivo-central-oscurecido",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-ceramica-resultado-natural-dr-ariel-merino-am-estetica-dental",
        alt: "Antes y después de una carilla cerámica unitaria en un incisivo central oscurecido",
        caption: "Una sola pieza, integrada a las vecinas",
      },
      {
        slug: "rehabilitacion-ceramica-ambos-maxilares-sin-cirugia-ortodoncia",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/01-carillas-dentales-antes-despues-retrato-am-estetica-dental-puerto-madero.png",
        alt: "Antes y después de una rehabilitación cerámica con más de 13 años de seguimiento clínico",
        caption: "Más de 13 años de seguimiento",
      },
    ],
    arCounterpart: "/carillas-dentales",
    arLabel: "Ver la página completa de carillas dentales de la sede argentina",
    related: ["carillas-de-porcelana-montevideo", "diseno-de-sonrisa-montevideo", "precio-carillas-dentales-montevideo"],
    whatsappContext: "hacerme carillas dentales",
  },

  "diseno-de-sonrisa-montevideo": {
    title: "Diseño de sonrisa en Montevideo",
    metaTitle: "Diseño de sonrisa en Montevideo | AM Estética Dental",
    metaDescription:
      "Diseño de sonrisa con planificación digital y criterio clínico. AM Estética Dental prepara su sede en Carrasco, Montevideo, y atiende pacientes uruguayos en Buenos Aires.",
    eyebrow: "Estética dental en Carrasco",
    lead: "Una sonrisa natural no se resuelve con una fórmula. Se estudian proporciones, color, textura, función y la manera en que cada persona se expresa.",
    intro:
      "Proporciones, color, textura y función estudiados en conjunto para que el resultado se lea natural.",
    sections: [
      {
        heading: "Diseñar antes de tratar",
        body: [
          "El diseño de sonrisa no es un tratamiento: es la etapa en la que se decide qué tratamiento corresponde. Se estudian las proporciones del rostro, la línea de los labios al hablar y al sonreír, la posición del borde incisal, el corredor bucal y la relación entre dientes y encía.",
          "Recién con eso sobre la mesa se define si el caso se resuelve con cerámicas, con resinas, con una corrección de la encía, con ortodoncia previa o con una combinación. Empezar por el material y no por el diagnóstico es lo que produce esas sonrisas que se notan desde lejos.",
        ],
      },
      {
        heading: "Planificación visible, decisiones conversadas",
        body: [
          "El diseño digital permite ver una propuesta antes de iniciar el tratamiento. No es una promesa de resultado exacto: es una herramienta para discutir forma, largo y proporción con el paciente y llegar a un acuerdo sobre qué se busca.",
          "Esa conversación previa es la que evita el escenario más frustrante de la estética dental: un trabajo técnicamente correcto que no era el que la persona tenía en la cabeza.",
        ],
      },
      {
        heading: "Natural no es un filtro",
        body: [
          "Una sonrisa natural tiene asimetrías, textura superficial, translucidez variable en los bordes y un color que dialoga con la piel y los ojos. Una sonrisa artificial es la que borra todo eso: dientes iguales, planos, opacos y de un blanco que no existe en la naturaleza.",
          "El objetivo del método AM es que el resultado no se lea como un trabajo dental. Que se lea como la sonrisa de esa persona, mejor resuelta.",
        ],
      },
    ],
    bullets: [
      { label: "Etapa 1", text: "Diagnóstico facial, dentario y funcional. Registro fotográfico y de mordida." },
      { label: "Etapa 2", text: "Diseño digital y conversación de la propuesta con el paciente." },
      { label: "Etapa 3", text: "Prueba en boca antes de la versión definitiva." },
      { label: "Etapa 4", text: "Ejecución con laboratorio propio y controles de seguimiento." },
    ],
    faqs: [
      {
        question: "¿El diseño digital garantiza el resultado final?",
        answer:
          "No, y ninguna clínica seria debería decir que sí. El diseño digital es una guía de trabajo y una herramienta de comunicación muy precisa, pero el resultado depende de variables clínicas reales: el tejido, la mordida, la respuesta de la encía y la biología de cada paciente.",
      },
      {
        question: "¿Cuánto tiempo lleva un diseño de sonrisa completo?",
        answer:
          "El diagnóstico y el diseño llevan lo suyo porque se hacen bien. La ejecución clínica, en cambio, se concentra: el laboratorio propio permite resolver en pocos días lo que en un circuito con laboratorio externo se estira semanas o meses.",
      },
      {
        question: "¿Se puede hacer sin ortodoncia previa?",
        answer:
          "En muchos casos sí, y AM tiene casos documentados de apiñamientos resueltos con cerámicas. En otros, la posición dentaria excede lo que la cerámica puede compensar sin desgastar de más, y entonces corresponde ortodoncia primero. Es una decisión de diagnóstico, no de preferencia.",
      },
    ],
    cases: [
      {
        slug: "diseno-sonrisa-cierre-diastemas-dientes-conoidos",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
        alt: "Antes y después de un diseño de sonrisa con cierre de diastemas y corrección de dientes conoides",
        caption: "Cierre de diastemas y proporciones",
      },
      {
        slug: "diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/diseno-sonrisa-plano-quebrado-carillas-ceramicas-antes-despues-portada-paciente-italia-milan-dr-ariel-merino-am-estetica-dental",
        alt: "Antes y después del diseño de sonrisa de una paciente llegada desde Milán",
        caption: "Paciente de Milán, plano quebrado",
      },
      {
        slug: "gingivectomia-laser-micro-diseno-sonrisa-resinas",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/transformacion-extrema-caries-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
        alt: "Antes y después de un micro diseño de sonrisa con resinas y gingivectomía láser",
        caption: "Micro diseño con resinas y encía",
      },
    ],
    arCounterpart: "/diseno-de-sonrisa",
    arLabel: "Ver la página completa de diseño de sonrisa de la sede argentina",
    related: ["carillas-dentales-montevideo", "estetica-dental-montevideo", "precio-carillas-dentales-montevideo"],
    whatsappContext: "un diseño de sonrisa",
  },

  "estetica-dental-montevideo": {
    title: "Estética dental en Montevideo",
    metaTitle: "Estética dental en Montevideo | AM Estética Dental",
    metaDescription:
      "Estética dental con criterio clínico, materiales indicados y laboratorio propio. Próxima sede de AM Estética Dental en zona Carrasco, Montevideo.",
    eyebrow: "Próxima apertura · Carrasco",
    lead: "La estética dental de alto nivel se apoya en criterio clínico, materiales indicados y una mirada que evita resultados genéricos.",
    intro:
      "Criterio clínico, materiales indicados y una mirada que evita resultados genéricos.",
    sections: [
      {
        heading: "Qué abarca la estética dental",
        body: [
          "Estética dental es un paraguas, no un tratamiento. Incluye carillas cerámicas y de resina, blanqueamiento, corrección del contorno de la encía, coronas, alineadores, implantes en zona visible y rehabilitación completa cuando el desgaste comprometió la mordida.",
          "Lo que define la calidad del resultado no es cuál de esas técnicas se usa, sino si la elegida era la que correspondía. La mayor parte de los resultados que envejecen mal no son fallas de ejecución: son fallas de indicación.",
        ],
      },
      {
        heading: "Estética y función no se separan",
        body: [
          "Una sonrisa que se ve bien pero funciona mal no dura. El desgaste por bruxismo, una mordida cruzada o una guía anterior mal resuelta terminan por fracturar cerámicas, irritar encías o generar sensibilidad.",
          "Por eso el diagnóstico de AM parte de la función: cómo cierra, cómo desliza, dónde apoya. Sobre esa base se decide la estética, y no al revés.",
        ],
      },
      {
        heading: "El estándar que llega a Carrasco",
        body: [
          "La futura sede de Montevideo no parte de cero. Parte de un sistema clínico ya probado en Buenos Aires: diagnóstico, planificación digital, laboratorio propio, ejecución concentrada y seguimiento documentado.",
          "El portfolio de casos publicado es la mejor forma de evaluarlo antes de que abra la agenda uruguaya.",
        ],
      },
    ],
    bullets: [
      { label: "Carillas", text: "Cerámica y resina, según indicación, expectativa y presupuesto." },
      { label: "Encía", text: "Corrección de contorno gingival con láser cuando la proporción lo requiere." },
      { label: "Función", text: "Diagnóstico de mordida y bruxismo antes de cualquier decisión estética." },
      { label: "Rehabilitación", text: "Casos complejos con desgaste avanzado, coronas e implantes." },
    ],
    faqs: [
      {
        question: "¿Por dónde empieza un tratamiento estético?",
        answer:
          "Por el diagnóstico. Fotos, registro de mordida, evaluación de encías y de la salud general de la boca. Cualquier propuesta estética hecha sin ese paso previo es una cotización, no un plan de tratamiento.",
      },
      {
        question: "¿Resina o cerámica?",
        answer:
          "La resina es más económica y reversible, y es una gran opción en casos acotados o como etapa intermedia. La cerámica mantiene mejor el color, la textura y el brillo en el tiempo. La elección depende del caso, del horizonte esperado y de lo que la persona busca.",
      },
      {
        question: "¿Atienden pacientes de Montevideo antes de la apertura?",
        answer:
          "Sí, en la sede de Puerto Madero, Buenos Aires. La planificación se organiza para minimizar la cantidad de viajes y concentrar el trabajo clínico.",
      },
    ],
    cases: [
      {
        slug: "carillas-resina-diseno-sonrisa-gingivectomia-laser",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/diseno-sonrisa-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
        alt: "Antes y después de un diseño de sonrisa con resinas y gingivectomía láser",
        caption: "Resinas, encía y armonía dental",
      },
      {
        slug: "gingivectomia-laser-sin-bisturi-sangrado-puntos",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/gingivectomia-laser-09-antes-despues-comparativa-2/01-gingivectomia-laser-09-antes-despues-comparativa.png",
        alt: "Antes y después de un contorneado gingival con láser, sin bisturí ni puntos",
        caption: "Contorno gingival con láser",
      },
    ],
    arCounterpart: "/estetica-dental",
    arLabel: "Ver la página completa de estética dental de la sede argentina",
    related: ["diseno-de-sonrisa-montevideo", "carillas-dentales-montevideo", "implantes-dentales-montevideo"],
    whatsappContext: "un tratamiento de estética dental",
  },

  "carillas-de-porcelana-montevideo": {
    title: "Carillas de porcelana en Montevideo",
    metaTitle: "Carillas de porcelana en Montevideo | AM Uruguay",
    metaDescription:
      "Carillas de porcelana con laboratorio propio y planificación digital. Próxima sede de AM Estética Dental en Carrasco, Montevideo.",
    eyebrow: "Planificación clínica individual",
    lead: "Las carillas de porcelana permiten corregir forma, color, proporción y pequeñas asimetrías cuando están correctamente indicadas.",
    intro:
      "Corregir forma, color, proporción y asimetrías con el material que mejor sostiene el resultado en el tiempo.",
    sections: [
      {
        heading: "Por qué la porcelana envejece distinto",
        body: [
          "La porcelana no absorbe pigmentos. A los cinco años, una cerámica bien hecha conserva el color y el brillo con el que salió; una resina, por buena que sea, empieza a tomar tinción del café, el vino y el tabaco, y pierde pulido superficial.",
          "Esa estabilidad es la razón principal por la que la cerámica cuesta más. No es un tema de marca: es un tema de cuántos años el resultado se sigue viendo como el primer día.",
        ],
      },
      {
        heading: "Cerámica no es una sola cosa",
        body: [
          "Disilicato de litio, feldespática estratificada, zirconio: cada material tiene una translucidez, una resistencia y una indicación distinta. Una feldespática estratificada a mano puede dar una naturalidad superior en un caso de poco espesor; un disilicato resiste mejor en un paciente con antecedentes de bruxismo.",
          "Elegir el material es parte del diagnóstico. Un laboratorio propio permite tomar esa decisión con el técnico presente, viendo el caso, y no delegarla en una orden de trabajo.",
        ],
      },
      {
        heading: "El límite honesto de la técnica",
        body: [
          "Una carilla de porcelana no corrige una maloclusión, no resuelve una enfermedad periodontal y no reemplaza un tratamiento de ortodoncia cuando la posición dentaria está muy comprometida.",
          "Cuando se la fuerza a hacerlo, el costo aparece después: desgaste excesivo para ganar espacio, márgenes que irritan la encía o fracturas tempranas. La indicación correcta es la parte más barata del tratamiento y la que más lo protege.",
        ],
      },
    ],
    bullets: [
      { label: "Estabilidad de color", text: "La porcelana no se tiñe; mantiene color y brillo a largo plazo." },
      { label: "Materiales", text: "Disilicato, feldespática estratificada o zirconio, según indicación." },
      { label: "Laboratorio propio", text: "El técnico participa de la prueba; los ajustes se hacen en el momento." },
      { label: "Contraindicaciones", text: "Se resuelven encías, caries y función antes de indicar cerámica." },
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia real con las carillas de resina?",
        answer:
          "La resina se hace directamente en boca en una o pocas sesiones, cuesta menos y es reversible, pero se tiñe y pierde brillo con los años. La porcelana se fabrica en laboratorio, exige una preparación mínima y mantiene color, textura y brillo mucho más tiempo.",
      },
      {
        question: "¿Se pueden hacer sin tocar el diente?",
        answer:
          "En la gran mayoría de los casos, no. Hace falta una preparación mínima del esmalte, de décimas de milímetro, para que la carilla asiente correctamente y no quede voluminosa. Quien promete cero desgaste como regla está simplificando algo que no es simple.",
      },
      {
        question: "¿Qué pasa si tengo bruxismo?",
        answer:
          "No es una contraindicación absoluta, pero cambia el plan: se evalúa la función, se elige un material más resistente y se indica una placa de protección nocturna. Hacer cerámicas sobre un bruxismo no controlado es la vía más directa a una fractura.",
      },
    ],
    cases: [
      {
        slug: "bruxismo-desgaste-dental-rehabilitacion-carillas-ceramicas",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-desgaste-dental-antes-despues-carillas-ceramicas-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
        alt: "Antes y después de una rehabilitación con carillas cerámicas en un caso de bruxismo",
        caption: "Bruxismo con desgaste avanzado",
      },
      {
        slug: "20-carillas-porcelana-apinamiento-sin-ortodoncia",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental",
        alt: "Antes y después de 20 carillas de porcelana",
        caption: "20 piezas de porcelana",
      },
    ],
    arCounterpart: "/dientes-de-porcelana-carillas-precio",
    arLabel: "Ver la página completa de carillas de porcelana de la sede argentina",
    related: ["carillas-dentales-montevideo", "precio-carillas-dentales-montevideo", "diseno-de-sonrisa-montevideo"],
    whatsappContext: "carillas de porcelana",
  },

  "implantes-dentales-montevideo": {
    title: "Implantes dentales en Montevideo",
    metaTitle: "Implantes dentales en Montevideo | AM Estética Dental",
    metaDescription:
      "Implantes dentales con planificación digital y corona cerámica de laboratorio propio. Próxima sede de AM Estética Dental en Carrasco, Montevideo.",
    eyebrow: "Rehabilitación · Carrasco",
    lead: "Un implante reemplaza la raíz de un diente perdido. Lo que define el resultado no es el tornillo: es la planificación de dónde va y qué corona lo va a acompañar.",
    intro:
      "Reemplazo de piezas perdidas con planificación digital y corona cerámica de laboratorio propio.",
    sections: [
      {
        heading: "Tres piezas, no una",
        body: [
          "Un implante son tres componentes: el tornillo de titanio que se integra al hueso, el pilar que lo conecta y la corona cerámica que es lo único que se ve. La conversación suele girar alrededor de la marca del tornillo, pero la diferencia estética la hace la corona y el perfil de emergencia con el que sale de la encía.",
          "Por eso AM planifica el implante desde la corona hacia atrás: primero se define dónde tiene que estar el diente, y recién después dónde va el tornillo para que eso sea posible.",
        ],
      },
      {
        heading: "El tiempo de la biología no se acelera",
        body: [
          "La oseointegración —el proceso por el que el hueso se une al titanio— lleva sus meses y no hay laboratorio propio que lo acorte. Es importante decirlo con claridad: en implantes, la velocidad tiene un límite biológico.",
          "Lo que sí se puede concentrar es todo lo demás: el diagnóstico, la cirugía, la provisionalización y la fase protésica final. Ahí el laboratorio propio vuelve a marcar la diferencia para un paciente que viaja desde Uruguay.",
        ],
      },
      {
        heading: "Zona estética: el caso difícil",
        body: [
          "Un implante en un molar es un problema funcional. Un implante en un incisivo central es un problema estético de altísima exigencia: hay que reproducir el contorno de la encía, la papila entre dientes y una translucidez que dialogue con el diente vecino natural.",
          "Son los casos donde la planificación digital y el trabajo con el técnico presente dejan de ser un lujo y pasan a ser la condición del resultado.",
        ],
      },
    ],
    bullets: [
      { label: "Tornillo", text: "Titanio de sistemas de primera línea, con trazabilidad." },
      { label: "Corona", text: "Cerámica de laboratorio propio, diseñada para el caso." },
      { label: "Planificación", text: "Digital, desde la corona hacia la posición del implante." },
      { label: "Plazos", text: "La oseointegración lleva meses; las demás fases se concentran." },
    ],
    faqs: [
      {
        question: "¿Duele colocar un implante?",
        answer:
          "La cirugía se hace con anestesia local y en general resulta menos molesta de lo que la gente anticipa. El posoperatorio habitual es de unos días de inflamación manejable con la medicación indicada.",
      },
      {
        question: "¿Cuánto dura un implante?",
        answer:
          "El titanio integrado al hueso tiene un horizonte muy largo. Lo que sí requiere control y eventual recambio en el tiempo es la corona. La mayor amenaza a largo plazo no es el material: es la periimplantitis por falta de higiene y de controles.",
      },
      {
        question: "¿Puedo hacerlo viajando desde Montevideo?",
        answer:
          "Sí, y es un caso frecuente. Se organiza en etapas para que coincidan con la biología del proceso y se reduzca al mínimo la cantidad de viajes. La evaluación inicial y el seguimiento entre etapas se pueden hacer a distancia.",
      },
    ],
    video: {
      id: "implante-dental-neodent-grupo-straumann-3d-wireframe-am-estetica-dental-buenos-aires",
      badge: "Grupo Straumann · Tecnología 3D",
      caption: "Geometría y superficie de un implante Neodent® del Grupo Straumann®.",
      alt: "Animación 3D de un implante dental Neodent del Grupo Straumann utilizado por AM Estética Dental",
      duration: 8,
    },
    cases: [
      {
        slug: "agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
        alt: "Antes y después de una rehabilitación completa con implantes y 24 restauraciones cerámicas",
        caption: "Agenesia dental resuelta con implantes y 24 cerámicas",
      },
      {
        slug: "rehabilitacion-oral-completa-carillas-coronas-implantes",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/rehabilitacion-completa-sonrisa/rehabilitacion-oral-completa-antes-despues-rostro-labios-portada-carillas-coronas-implantes-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires.png",
        alt: "Antes y después de una rehabilitación oral completa con carillas, coronas e implantes",
        caption: "Rehabilitación completa en menos de un mes",
      },
    ],
    arCounterpart: "/implantes-dentales-buenos-aires",
    arLabel: "Ver la página completa de implantes dentales de la sede argentina",
    related: ["estetica-dental-montevideo", "diseno-de-sonrisa-montevideo", "carillas-dentales-montevideo"],
    whatsappContext: "implantes dentales",
  },

  "blanqueamiento-dental-montevideo": {
    title: "Blanqueamiento dental en Montevideo",
    metaTitle: "Blanqueamiento dental en Montevideo | AM Uruguay",
    metaDescription:
      "Blanqueamiento dental profesional con control clínico del esmalte y la sensibilidad. Próxima sede de AM Estética Dental en Carrasco, Montevideo.",
    eyebrow: "Tratamiento de entrada",
    lead: "El blanqueamiento es el tratamiento estético menos invasivo y el más malinterpretado. Bien hecho, no daña el esmalte; mal hecho, deja sensibilidad y decepción.",
    intro:
      "El tratamiento estético menos invasivo, hecho con control clínico del esmalte y de la sensibilidad.",
    sections: [
      {
        heading: "Qué puede y qué no puede hacer",
        body: [
          "El blanqueamiento actúa sobre pigmentos alojados en la estructura del diente. Funciona muy bien en tinciones por café, té, vino o tabaco, y bastante menos en manchas por tetraciclinas, fluorosis o en un diente oscurecido por un tratamiento de conducto.",
          "Tampoco cambia el color de una resina, una corona o una carilla previa: esos materiales no se blanquean. Si hay restauraciones visibles, el plan tiene que contemplar reemplazarlas después del blanqueamiento, no antes.",
        ],
      },
      {
        heading: "El mito del esmalte dañado",
        body: [
          "Un blanqueamiento profesional bien indicado no desgasta el esmalte. Lo que sí produce, de forma transitoria, es una deshidratación del diente y un aumento de la sensibilidad que revierte en días.",
          "El riesgo real no está en el tratamiento clínico: está en los productos de venta libre con concentraciones sin control, en las cubetas mal adaptadas que queman la encía y en repetir el procedimiento sin criterio.",
        ],
      },
      {
        heading: "Como paso previo, no como sustituto",
        body: [
          "Muchos pacientes llegan pidiendo carillas cuando lo que les molesta es el color. En esos casos, un blanqueamiento resuelve el problema con una fracción de la inversión y sin tocar el diente.",
          "En otros, el blanqueamiento es la primera etapa: se lleva el diente natural a su color óptimo y recién entonces se define el color de las cerámicas, para que el conjunto quede coherente.",
        ],
      },
    ],
    bullets: [
      { label: "Indicación", text: "Muy efectivo en tinciones extrínsecas; limitado en tetraciclinas y fluorosis." },
      { label: "Esmalte", text: "El procedimiento profesional no lo desgasta; la sensibilidad es transitoria." },
      { label: "Restauraciones", text: "Resinas, coronas y carillas no cambian de color: se planifican después." },
      { label: "Rol", text: "Puede ser el tratamiento completo o la primera etapa de un diseño de sonrisa." },
    ],
    faqs: [
      {
        question: "¿Cuánto dura el resultado?",
        answer:
          "Depende casi por completo de los hábitos. Con consumo alto de café, té, vino tinto o tabaco, el color se va apagando en meses; sin esos factores, se sostiene bastante más. Se puede mantener con sesiones de refuerzo espaciadas.",
      },
      {
        question: "¿Sirven las tiras y geles de farmacia?",
        answer:
          "Producen algún efecto en casos leves, pero sin diagnóstico previo ni control de la encía. El problema no es que no funcionen: es que se usan sobre bocas con caries, retracciones o restauraciones no evaluadas.",
      },
      {
        question: "¿Puedo blanquear si tengo carillas?",
        answer:
          "Las carillas no cambian de color, así que blanquear solo modificaría los dientes que no las tienen y podría desarmar la armonía del conjunto. En ese escenario conviene evaluar el caso completo antes de avanzar.",
      },
    ],
    arCounterpart: "/blanqueamiento-dental-precio-buenos-aires",
    arLabel: "Ver la página completa de blanqueamiento de la sede argentina",
    related: ["estetica-dental-montevideo", "diseno-de-sonrisa-montevideo", "carillas-dentales-montevideo"],
    whatsappContext: "un blanqueamiento dental",
  },

  "precio-carillas-dentales-montevideo": {
    title: "Carillas dentales en Montevideo: la inversión",
    metaTitle: "Precio de carillas dentales en Montevideo | AM Uruguay",
    metaDescription:
      "Cómo se compone la inversión en carillas dentales para pacientes de Montevideo: rangos en dólares, qué incluye y qué la hace variar. AM Estética Dental.",
    eyebrow: "Transparencia · Inversión",
    lead: "Publicamos rangos reales en dólares y explicamos de qué depende cada número. Una cifra sin diagnóstico es una estimación, no un presupuesto.",
    intro:
      "Rangos reales en dólares y una explicación honesta de qué hace variar la inversión en cada caso.",
    sections: [
      {
        heading: "Por qué hablamos de inversión y no de precio",
        body: [
          "No es un eufemismo. Un tratamiento estético bien indicado se evalúa por lo que sostiene en el tiempo: años de un resultado que no se tiñe, no se fractura y no obliga a rehacerlo. Ese es el marco correcto para decidir.",
          "AM no compite por ser la opción más barata y no va a hacerlo. Compite por resolver bien y rápido, con laboratorio propio, para pacientes que valoran su tiempo tanto como el resultado.",
        ],
      },
      {
        heading: "Qué hace variar el número",
        body: [
          "Tres factores explican casi toda la diferencia entre un caso y otro: cuántas piezas entran en el plan, qué material está indicado y qué hay que resolver antes de empezar.",
          "Ese tercer punto es el que más sorprende. Una encía inflamada, una caries bajo una restauración vieja o un bruxismo sin controlar son trabajo previo real. Un presupuesto que los ignora no es más barato: está incompleto.",
        ],
      },
      {
        heading: "El costo del viaje, dicho de frente",
        body: [
          "Para un paciente uruguayo hay que sumar el traslado a Buenos Aires y la estadía hasta que abra la sede de Carrasco. Es un costo real y lo decimos sin adornarlo.",
          "Lo que la planificación con laboratorio propio permite es reducir la cantidad de viajes concentrando el trabajo clínico en pocos días, en lugar de estirarlo en visitas espaciadas durante meses.",
        ],
      },
    ],
    investment: [
      {
        label: "Carilla cerámica",
        value: "USD 1.000 – 1.500",
        note: "Por pieza. El rango se define por el material indicado y la complejidad del caso.",
      },
      {
        label: "Diseño de sonrisa en resina",
        value: "Desde USD 5.000",
        note: "Alternativa reversible y de menor inversión inicial para casos acotados.",
      },
      {
        label: "Diseño de sonrisa en cerámica",
        value: "Desde USD 10.000",
        note: "Referencia orientativa para un plan de diez piezas.",
      },
      {
        label: "Rehabilitación full cerámica",
        value: "Desde USD 26.000",
        note: "Casos complejos: bruxismo avanzado, desgaste severo, corrección de mordida.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué no hay un precio único por caso?",
        answer:
          "Porque no hay un caso único. La cantidad de piezas, el material indicado y el trabajo previo necesario cambian por completo el alcance. Publicamos rangos reales para que puedas dimensionar la inversión, y el número definitivo sale del diagnóstico.",
      },
      {
        question: "¿Se puede financiar?",
        answer:
          "Sí. El simulador de financiación permite ver anticipo y cuotas fijas en dólares, con el equivalente en pesos uruguayos según la cotización vendedora del Banco República.",
      },
      {
        question: "¿Conviene esperar a que abra la sede de Carrasco?",
        answer:
          "Depende de tu caso y de tu urgencia. Si hay un problema funcional o de salud a resolver, esperar no es gratis. Si es un tratamiento puramente estético y no tenés apuro, es una decisión razonable: dejá tus datos y te avisamos cuando haya fecha.",
      },
    ],
    cases: [
      {
        slug: "20-carillas-porcelana-apinamiento-sin-ortodoncia",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental",
        alt: "Antes y después de un tratamiento de 20 carillas de porcelana",
        caption: "Un plan de 20 piezas, de principio a fin",
      },
      {
        slug: "carilla-unitaria-incisivo-central-oscurecido",
        image: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-ceramica-resultado-natural-dr-ariel-merino-am-estetica-dental",
        alt: "Antes y después de una carilla cerámica unitaria",
        caption: "El extremo opuesto: una sola pieza",
      },
    ],
    arCounterpart: "/precio-carillas-dentales-buenos-aires",
    arLabel: "Ver la tabla de inversión completa de la sede argentina",
    related: ["carillas-dentales-montevideo", "carillas-de-porcelana-montevideo", "tratamiento-en-buenos-aires-desde-uruguay"],
    whatsappContext: "conocer la inversión en carillas dentales",
  },

  "clinica-dental-carrasco": {
    title: "Clínica dental en Carrasco",
    metaTitle: "Clínica dental en Carrasco, Montevideo | AM Uruguay",
    metaDescription:
      "La futura clínica de AM Estética Dental en Miraflores 1445, Oficina 202, zona Carrasco, Montevideo. Proyecto, avances y lista de novedades de apertura.",
    eyebrow: "Miraflores 1445 · Oficina 202",
    lead: "Estamos preparando la sede de AM Estética Dental en zona Carrasco. Publicamos los avances reales del proyecto y la fecha de apertura apenas esté confirmada.",
    intro:
      "El proyecto de la sede uruguaya en Miraflores 1445, Oficina 202, zona Carrasco.",
    sections: [
      {
        heading: "Por qué Carrasco",
        body: [
          "Carrasco concentra el perfil de paciente que ya elige a AM en Buenos Aires: personas que valoran su tiempo, que buscan un resultado natural y que evalúan una clínica por su criterio clínico antes que por su lista de precios.",
          "Miraflores 1445 está a pocos minutos del Aeropuerto Internacional de Carrasco, lo que también facilita la logística de los pacientes que llegan desde el interior y desde la región.",
        ],
      },
      {
        heading: "Qué se está construyendo",
        body: [
          "El proyecto contempla consultorios equipados para flujo digital completo, área de diagnóstico por imágenes y espacio de laboratorio propio: la pieza que define el modelo de trabajo de AM y la que permite resolver en días lo que en un circuito con laboratorio externo lleva meses.",
          "Las imágenes publicadas incluyen fotos reales del edificio y renders del proyecto en desarrollo. Están identificadas como tales, porque presentar un render como si fuera una foto de una clínica en funcionamiento sería exactamente el tipo de cosa que AM no hace.",
        ],
      },
      {
        heading: "Mientras tanto",
        body: [
          "Hasta la apertura, los pacientes uruguayos que quieren avanzar se atienden en la sede de Puerto Madero, Buenos Aires. El plan se organiza para concentrar el trabajo clínico y reducir la cantidad de viajes.",
          "Si preferís esperar la apertura de Carrasco, dejá tus datos en la lista de novedades: te vamos a escribir solo con información concreta sobre fecha, agenda y avances verificados.",
        ],
      },
    ],
    bullets: [
      { label: "Dirección", text: "Miraflores 1445, Oficina 202, Carrasco, Montevideo." },
      { label: "Estado", text: "En preparación. Fecha de apertura a confirmar." },
      { label: "Equipamiento", text: "Flujo digital completo y espacio de laboratorio propio." },
      { label: "Atención hoy", text: "Sede de Puerto Madero, Buenos Aires." },
    ],
    faqs: [
      {
        question: "¿Cuándo abre la clínica de Carrasco?",
        answer:
          "Todavía no hay fecha confirmada y preferimos no inventar una. Cuando la haya, la vamos a publicar en esta página y a comunicarla a quienes estén en la lista de novedades.",
      },
      {
        question: "¿Se puede visitar el local?",
        answer:
          "Todavía no: está en obra. Las imágenes del proyecto y las fotos reales del edificio se publican en esta página a medida que hay avances.",
      },
      {
        question: "¿La sede de Carrasco va a tener laboratorio propio?",
        answer:
          "Es el eje del proyecto. El laboratorio propio es lo que permite el estándar de tiempos de AM, y la sede uruguaya se está diseñando alrededor de esa capacidad.",
      },
    ],
    arCounterpart: "/dentista-puerto-madero",
    arLabel: "Conocer la sede de Puerto Madero, Buenos Aires",
    related: ["estetica-dental-montevideo", "tratamiento-en-buenos-aires-desde-uruguay", "diseno-de-sonrisa-montevideo"],
    whatsappContext: "la apertura de la sede de Carrasco",
  },

  "tratamiento-en-buenos-aires-desde-uruguay": {
    title: "Tratarte en Buenos Aires viviendo en Uruguay",
    metaTitle: "Tratamiento dental en Buenos Aires desde Uruguay | AM",
    metaDescription:
      "Cómo se organiza un tratamiento de estética dental en Puerto Madero para pacientes que viven en Montevideo: etapas, viajes y planificación a distancia.",
    eyebrow: "Mientras Carrasco se prepara",
    lead: "Hasta que abra la sede de Carrasco, los pacientes uruguayos se atienden en Puerto Madero. La planificación se organiza para que eso signifique pocos viajes, no muchos.",
    intro:
      "Cómo se organiza el tratamiento en Puerto Madero para pacientes que viven en Montevideo.",
    sections: [
      {
        heading: "El argumento no es el precio",
        body: [
          "AM no propone viajar a Buenos Aires para gastar menos. Ese no es el eje y nunca lo fue.",
          "El eje es el tiempo: el laboratorio propio permite concentrar en pocos días de trabajo clínico lo que en un circuito con laboratorio externo se distribuye en semanas de idas y vueltas. Para alguien que tiene que cruzar el río, esa diferencia es lo que hace el tratamiento posible.",
        ],
      },
      {
        heading: "Cómo se organiza en la práctica",
        body: [
          "La evaluación inicial arranca a distancia: fotos, antecedentes y una conversación sobre qué buscás. Con eso se define si el caso es viable y qué alcance tendría.",
          "Después se planifica el viaje en función de las etapas clínicas reales del tratamiento. Un caso de carillas se comporta distinto a uno de implantes, donde la biología impone tiempos que no se pueden acelerar. En ambos casos, el objetivo de la planificación es el mismo: la menor cantidad de viajes compatible con hacer el trabajo bien.",
        ],
      },
      {
        heading: "Qué pasa con los controles",
        body: [
          "El seguimiento posterior combina controles a distancia con visitas puntuales cuando corresponde. Con la apertura de la sede de Carrasco, ese seguimiento va a poder hacerse directamente en Montevideo.",
          "Los pacientes que empiecen ahora en Buenos Aires no quedan sueltos: son la misma clínica, el mismo equipo y la misma historia clínica.",
        ],
      },
    ],
    bullets: [
      { label: "Distancia", text: "Montevideo–Buenos Aires: menos de una hora de vuelo." },
      { label: "Evaluación", text: "Primera etapa a distancia, con fotos y antecedentes." },
      { label: "Viajes", text: "Se planifican según las etapas clínicas reales del caso." },
      { label: "Continuidad", text: "El seguimiento migra a Carrasco cuando la sede abra." },
    ],
    faqs: [
      {
        question: "¿Cuántos viajes necesito?",
        answer:
          "Depende del tratamiento. Un caso de carillas puede concentrarse en pocos días de trabajo clínico. Un caso con implantes requiere etapas separadas porque la oseointegración lleva meses y eso no se acelera. La cantidad exacta sale de la planificación, no de una promesa general.",
      },
      {
        question: "¿Puedo empezar sin viajar?",
        answer:
          "La evaluación inicial sí: se hace con fotos y antecedentes, y sirve para saber si el caso es viable y qué alcance tendría. El diagnóstico definitivo requiere una evaluación clínica presencial.",
      },
      {
        question: "¿Y si abre Carrasco en el medio de mi tratamiento?",
        answer:
          "Es la misma clínica y el mismo equipo. La historia clínica y el plan siguen siendo los mismos; lo que cambia es dónde se hacen los controles.",
      },
    ],
    arCounterpart: "/turismo-dental",
    arLabel: "Ver cómo AM recibe pacientes del exterior en Buenos Aires",
    related: ["precio-carillas-dentales-montevideo", "clinica-dental-carrasco", "carillas-dentales-montevideo"],
    whatsappContext: "tratarme en Buenos Aires viviendo en Uruguay",
  },
};

export type TreatmentSlug = keyof typeof treatmentPages;

/** Slugs destacados en la grilla del home, en orden. */
export const FEATURED_TREATMENTS: string[] = [
  "carillas-dentales-montevideo",
  "diseno-de-sonrisa-montevideo",
  "implantes-dentales-montevideo",
  "estetica-dental-montevideo",
];

/** Rutas indexables del sitio. Las que redirigen fuera del dominio quedan afuera a propósito. */
export const INDEXABLE_ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/casos-clinicos", priority: 0.9, changeFrequency: "monthly" },
  ...Object.keys(treatmentPages).map((slug) => ({
    path: `/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  })),
  { path: "/financiacion", priority: 0.8, changeFrequency: "monthly" },
  { path: "/dr-ariel-merino", priority: 0.8, changeFrequency: "monthly" },
  // Vuelve al sitemap: dejó de ser un redirect externo y ahora es una página real
  // con el formulario de postulación.
  { path: "/trabaja-en-am", priority: 0.75, changeFrequency: "monthly" },
  { path: "/prensa", priority: 0.7, changeFrequency: "monthly" },
];

/**
 * Cluster hreflang es-UY ↔ es-AR.
 *
 * Los dos sitios son español pero de países distintos, con contenido de intención
 * equivalente. Sin hreflang, Google elige uno y suprime el otro (canibalización).
 * La clave es la ruta uruguaya; el valor, su equivalente argentina.
 */

// Pares excluidos del cluster aunque la página uruguaya tenga equivalente argentina.
//
// `/precio-carillas-dentales-montevideo` queda afuera por datos: Search Console
// (may–ago 2026) muestra que la página argentina de precios se lleva 37 de los 97
// clics uruguayos del sitio, en posición 5,6. Declarar el par haría que Google le
// sirva a los uruguayos la versión .uy — sin autoridad y de una sede que todavía
// no atiende. El enlace hacia la página argentina se mantiene; lo que no se hace
// es pedirle a Google que la reemplace. Se suma cuando Carrasco abra.
const PARES_EN_ESPERA = new Set(["/precio-carillas-dentales-montevideo"]);

export const AR_BY_UY: Record<string, string> = {
  "/": "/",
  ...Object.fromEntries(
    Object.entries(treatmentPages)
      .filter(([slug, page]) => page.arCounterpart && !PARES_EN_ESPERA.has(`/${slug}`))
      .map(([slug, page]) => [`/${slug}`, page.arCounterpart as string]),
  ),
  "/casos-clinicos": "/casos-antes-y-despues",
  "/dr-ariel-merino": "/dr-ariel-merino",
  "/prensa": "/prensa",
};

/** Bloque `languages` de hreflang para una ruta uruguaya. */
export function hreflangFor(uyPath: string): Record<string, string> {
  const arPath = AR_BY_UY[uyPath];
  if (!arPath) return {};
  const arUrl = `${ARGENTINA_URL}${arPath === "/" ? "" : arPath}`;
  return {
    "es-UY": `${SITE_URL}${uyPath === "/" ? "" : uyPath}`,
    "es-AR": arUrl,
    "x-default": arUrl,
  };
}
