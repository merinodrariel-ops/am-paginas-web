// Landings por barrio de CABA.
//
// Por qué existen: la competencia que aparece primero en estética dental de CABA
// (p. ej. Pineda Dental Studio) tiene TODAS sus páginas de servicio con el barrio
// en la URL —`blanqueamiento-dental-recoleta`, `implantes-...-recoleta`—. Nosotros
// competíamos casi todo con el sufijo `-buenos-aires`, que es más caro y más
// disputado. Estas páginas atacan el término con modificador de barrio, que tiene
// menos competencia y una intención bastante más caliente.
//
// REGLA INNEGOCIABLE: la clínica está en Puerto Madero y en ningún otro lado.
// El barrio va SIEMPRE en `areaServed`, nunca en `address`. Declarar una dirección
// en un barrio donde no atendemos es causal de suspensión del perfil de Google y
// además es mentira. Cada página dice explícitamente dónde queda el consultorio.
//
// REGLA DE CONTENIDO: estas NO son la misma página con el nombre cambiado. Google
// llama a eso "doorway pages" y las penaliza. Cada barrio trae su propio ángulo,
// su propio cómo-llegar, sus propias FAQ y su propio H1. Si en algún momento no
// tenés algo genuino que decir de un barrio nuevo, no lo agregues.

export type BarrioFaq = { q: string; a: string };

export type Barrio = {
  slug: string;
  /** Nombre del barrio tal como se escribe en el copy. */
  nombre: string;
  /** Cómo se lee en una frase: "en Recoleta", "en Belgrano". */
  preposicion: string;
  title: string;
  description: string;
  keywords: string;
  /** Bajada del hero. Dos líneas, la segunda va en itálica dorada. */
  h1: [string, string];
  intro: string;
  /** El ángulo propio del barrio: por qué esta página no es un clon. */
  anguloTitulo: string;
  angulo: string[];
  /** Cómo llegar desde ese barrio a Camila O'Gorman 412. */
  comoLlegar: { modo: string; detalle: string }[];
  faqs: BarrioFaq[];
};

export const BARRIOS: Barrio[] = [
  {
    slug: "carillas-dentales-recoleta",
    nombre: "Recoleta",
    preposicion: "en Recoleta",
    title: "Carillas Dentales en Recoleta | Dr. Ariel Merino · AM",
    description:
      "Carillas de porcelana y resina para pacientes de Recoleta. Laboratorio propio, diseño 3D previo y precios publicados. Dr. Ariel Merino, a 15 minutos en Puerto Madero.",
    keywords:
      "carillas dentales Recoleta, carillas de porcelana Recoleta, odontólogo estético Recoleta, diseño de sonrisa Recoleta, dentista Recoleta CABA",
    h1: ["Carillas dentales para", "pacientes de Recoleta."],
    intro:
      "Recoleta concentra buena parte de la odontología estética de Buenos Aires, y por eso mismo concentra también la mayor dispersión de criterios y de precios. Atendemos a pacientes de Recoleta en nuestra clínica de Puerto Madero, a quince minutos, con dos cosas que casi nadie ofrece en la zona: laboratorio dental propio y la inversión publicada antes de la primera consulta.",
    anguloTitulo: "Por qué pacientes de Recoleta cruzan a Puerto Madero",
    angulo: [
      "**Laboratorio propio, no tercerizado.** La mayoría de las clínicas de la zona manda las carillas a un laboratorio externo. Nosotros las hacemos adentro. Eso significa que el ceramista ve tu cara, no una foto: color, translucidez y textura se ajustan con vos presente, y una corrección no cuesta dos semanas de espera.",
      "**Los tiempos se acortan de verdad.** Sin laboratorio intermediario, un caso de carillas cerámicas se resuelve en días y no en meses. Para quien viaja o tiene una fecha, esa es la diferencia real.",
      "**La inversión está publicada.** Resinas desde USD 500 por diente, cerámicas entre USD 1.000 y 1.500. Podés compararnos antes de sentarte en el sillón, que es exactamente lo que casi ninguna clínica de Recoleta te deja hacer.",
      "**Mínima preparación, no promesas imposibles.** No prometemos cero desgaste porque en cerámica casi nunca es cierto. Trabajamos con preparación mínima del esmalte y te explicamos exactamente cuánto se toca en tu caso, con el diseño 3D en pantalla.",
    ],
    comoLlegar: [
      { modo: "En auto", detalle: "Unos 15 minutos por Av. Alvear y Av. Leandro N. Alem hasta Madero. Hay estacionamiento sobre Juana Manso y Olga Cossettini." },
      { modo: "En subte", detalle: "Línea H hasta Facultad de Derecho o Línea D hasta Catedral, combinando con la Línea B hasta L. N. Alem y 10 minutos caminando." },
      { modo: "En taxi o app", detalle: "Es el trayecto más simple: entre 12 y 20 minutos según la hora, sin cortes habituales." },
    ],
    faqs: [
      {
        q: "¿Tienen consultorio en Recoleta?",
        a: "No. Atendemos exclusivamente en Camila O'Gorman 412, Oficina 101, Puerto Madero, a unos 15 minutos de Recoleta. Preferimos una sola clínica con laboratorio propio adentro antes que varias sedes sin él.",
      },
      {
        q: "¿Cuánto salen las carillas si vivo en Recoleta?",
        a: "La misma inversión que para cualquier paciente: resinas desde USD 500 por diente y cerámicas entre USD 1.000 y USD 1.500 por pieza. No cobramos distinto por barrio y publicamos los valores en la web.",
      },
      {
        q: "¿Cuántas visitas necesito?",
        a: "Un caso de carillas cerámicas se resuelve habitualmente en pocas visitas concentradas, porque el laboratorio está dentro de la clínica. En la primera consulta te damos el cronograma exacto de tu caso.",
      },
      {
        q: "¿Puedo ver el resultado antes de empezar?",
        a: "Sí, y es parte del protocolo. Diseñamos tu sonrisa en 3D y la ajustamos con vos en pantalla hasta que la apruebes. Recién ahí se prepara un solo diente.",
      },
    ],
  },
  {
    slug: "carillas-dentales-palermo",
    nombre: "Palermo",
    preposicion: "en Palermo",
    title: "Carillas Dentales en Palermo | Dr. Ariel Merino · AM",
    description:
      "Carillas de porcelana y diseño de sonrisa para pacientes de Palermo. Laboratorio propio, resultado en días y precios publicados. Dr. Ariel Merino, Puerto Madero.",
    keywords:
      "carillas dentales Palermo, carillas de porcelana Palermo, diseño de sonrisa Palermo, odontólogo estético Palermo, dentista Palermo CABA",
    h1: ["Carillas dentales para", "pacientes de Palermo."],
    intro:
      "Palermo es el barrio del que más nos consultan por WhatsApp, y casi siempre con la misma pregunta: cuánto tarda. La respuesta corta es que tarda menos de lo que te dijeron en otro lado, porque el laboratorio dental está dentro de nuestra clínica y no a dos semanas de distancia.",
    anguloTitulo: "La pregunta que traen los pacientes de Palermo",
    angulo: [
      "**\"¿Cuánto tarda?\" es la consulta número uno.** En el circuito habitual, cada prueba de carillas implica mandar el trabajo a un laboratorio externo y esperar. Con el ceramista trabajando en la clínica, esa espera desaparece: los ajustes se hacen en el día.",
      "**Cerámica y resina no son lo mismo, y te lo decimos de frente.** La resina se resuelve en una sesión y cuesta menos; la cerámica dura mucho más, no se mancha y sostiene el color. Te explicamos cuál corresponde a tu caso aunque sea la más barata.",
      "**No competimos por precio, competimos por tiempo y control.** Vas a encontrar carillas más económicas en Buenos Aires. Lo que no vas a encontrar fácil es una clínica que fabrique tus piezas adentro y te muestre el resultado en 3D antes de tocar un diente.",
      "**Agenda pensada para gente que trabaja.** La mayoría de los pacientes de Palermo coordina las visitas concentradas en pocos días para no fragmentar el tratamiento en meses.",
    ],
    comoLlegar: [
      { modo: "En auto", detalle: "Entre 20 y 25 minutos por Av. Figueroa Alcorta o Av. del Libertador hacia el sur, entrando a Madero por Alem." },
      { modo: "En subte", detalle: "Línea D hasta Catedral y combinación con Línea B hasta L. N. Alem; desde ahí 10 minutos caminando cruzando el dique." },
      { modo: "En bici", detalle: "El circuito de ciclovías de Libertador y la costanera conecta Palermo con Puerto Madero de punta a punta." },
    ],
    faqs: [
      {
        q: "¿Atienden en Palermo?",
        a: "No tenemos sede en Palermo. La clínica está en Camila O'Gorman 412, Oficina 101, Puerto Madero, a unos 20 minutos. Todo el equipo y el laboratorio funcionan en ese único lugar.",
      },
      {
        q: "¿Conviene resina o cerámica?",
        a: "Depende del caso, no del presupuesto. La resina se hace en una sesión, cuesta desde USD 500 por diente y dura varios años con mantenimiento. La cerámica va de USD 1.000 a 1.500, no se mancha y sostiene el color mucho más tiempo. En la consulta te decimos cuál corresponde para vos.",
      },
      {
        q: "¿Cuánto tarda el tratamiento completo?",
        a: "Bastante menos que el promedio, porque las piezas se fabrican dentro de la clínica. Al planificar tu caso te damos las fechas concretas de cada visita.",
      },
      {
        q: "¿Hacen carillas sin desgastar el diente?",
        a: "Trabajamos con preparación mínima del esmalte. En resina el procedimiento suele ser aditivo; en cerámica casi siempre hace falta una micro-preparación. Preferimos decírtelo antes y no vender un 'cero desgaste' que en la práctica no siempre se cumple.",
      },
    ],
  },
  {
    slug: "carillas-dentales-belgrano",
    nombre: "Belgrano",
    preposicion: "en Belgrano",
    title: "Carillas Dentales en Belgrano | Dr. Ariel Merino · AM",
    description:
      "Carillas de porcelana y rehabilitación estética para pacientes de Belgrano y Núñez. Laboratorio propio y precios publicados. Dr. Ariel Merino, Puerto Madero.",
    keywords:
      "carillas dentales Belgrano, carillas de porcelana Belgrano, dentista Belgrano, odontólogo estético Belgrano, diseño de sonrisa Núñez",
    h1: ["Carillas dentales para", "pacientes de Belgrano."],
    intro:
      "Desde Belgrano y Núñez llegan sobre todo casos que ya empezaron en otro lado: carillas que cambiaron de color, resinas viejas que se fracturaron, tratamientos que quedaron a mitad de camino. Rehacer un caso exige más control que hacerlo de cero, y por eso el laboratorio propio deja de ser un lujo y pasa a ser la herramienta.",
    anguloTitulo: "Casos que llegan de Belgrano y Núñez",
    angulo: [
      "**Recambio de carillas viejas.** Las resinas de hace años se manchan, pierden brillo y se fracturan en los bordes. Rehacerlas bien implica evaluar qué queda de esmalte debajo antes de prometer nada. Esa evaluación es la primera consulta.",
      "**Casos que quedaron por la mitad.** Recibimos pacientes que abandonaron un tratamiento porque los tiempos se estiraron sin explicación. Al fabricar adentro, el cronograma que te damos es el cronograma que se cumple.",
      "**Desgaste por bruxismo.** Es uno de los motivos de consulta más frecuentes de la zona. Si apretás los dientes, las carillas solas no alcanzan: hay que resolver la causa y planificar la protección, o el trabajo se rompe.",
      "**Segundas opiniones.** Si ya tenés un presupuesto de otra clínica, traelo. Te decimos qué haríamos igual y qué haríamos distinto, con el diseño 3D sobre la mesa.",
    ],
    comoLlegar: [
      { modo: "En auto", detalle: "Entre 25 y 30 minutos por Av. del Libertador o Lugones y costanera, entrando a Puerto Madero por Alem." },
      { modo: "En tren", detalle: "Ramal Mitre hasta Retiro y 15 minutos caminando o un tramo corto en taxi hasta Camila O'Gorman." },
      { modo: "En subte", detalle: "Línea D desde Juramento o Congreso de Tucumán hasta Catedral, combinando con la Línea B hasta L. N. Alem." },
    ],
    faqs: [
      {
        q: "¿Tienen sucursal en Belgrano?",
        a: "No. Atendemos únicamente en Camila O'Gorman 412, Oficina 101, Puerto Madero. Concentramos todo —clínica y laboratorio— en una sola dirección, que es lo que nos permite controlar los tiempos.",
      },
      {
        q: "¿Se pueden cambiar carillas que ya tengo?",
        a: "Sí, y es una parte importante de lo que hacemos. Primero evaluamos el estado del diente debajo de la carilla actual, porque de eso depende qué se puede hacer. Recién con esa información damos un plan y un presupuesto.",
      },
      {
        q: "Aprieto los dientes de noche, ¿puedo hacerme carillas?",
        a: "Sí, pero no sin resolver el bruxismo primero. Planificamos el caso contemplando la protección nocturna; si no, el desgaste que rompió tus dientes también va a romper las carillas.",
      },
      {
        q: "¿Puedo llevar un presupuesto de otra clínica?",
        a: "Sí. Nos parece sano que compares. Te explicamos qué incluye cada plan y en qué se diferencian los materiales y los tiempos, sin presionarte a decidir en el momento.",
      },
    ],
  },
];

export const BARRIO_SLUGS = BARRIOS.map((b) => b.slug);

/**
 * Devuelve el barrio por slug. Falla en build si el slug no existe: las páginas
 * lo buscan por nombre y no por índice, así reordenar el array de arriba no
 * intercambia el contenido de dos rutas sin que nadie se entere.
 */
export function getBarrio(slug: string): Barrio {
  const barrio = BARRIOS.find((b) => b.slug === slug);
  if (!barrio) throw new Error(`[barrios] No existe el barrio con slug "${slug}"`);
  return barrio;
}
