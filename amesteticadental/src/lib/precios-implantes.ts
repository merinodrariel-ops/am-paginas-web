// Inversión en implantes: un solo lugar para toda la red.
//
// Por qué existe: el 21-09-2026 cambiaron los valores y había que tocar SEIS
// archivos —la página de inversión, la de tratamiento, la nota del blog y las tres
// equivalentes en inglés— más los FAQ schema de cada una. Eso es una cifra vieja
// esperando quedarse en producción. Es el mismo problema que tenía el número de
// reseñas (ver `reviews.ts`): mientras el copy pueda escribir el número, el copy
// se desincroniza.
//
// La regla de la casa es hablar de INVERSIÓN, no de precio, en el cuerpo del
// contenido. Las URLs y los <title> sí dicen "precio" porque es como busca la
// gente. Por eso las etiquetas de acá abajo no dicen "precio".
//
// TODOS los valores llevan "a partir de": si el caso necesita un componente
// adicional, el número no queda desmentido.

/** Sistemas que se colocan. No hay genéricos: son estos dos y nada más. */
export const IMPLANTES = {
  neodent: {
    marca: "Neodent®",
    origen: "Marca brasileña del Grupo Straumann® (Suiza)",
    /** Sólo el tornillo: la fase quirúrgica, con el implante puesto. */
    implante: 1500,
    /** Terminado: implante + corona. */
    conCorona: 3000,
  },
  straumann: {
    marca: "Straumann®",
    origen: "Del Grupo Straumann® · se fabrica en Suiza",
    implante: 2000,
    conCorona: 3500,
  },
} as const;

/**
 * La corona que va arriba del implante. Vale lo mismo para los dos sistemas: lo que
 * cambia entre Neodent y Straumann es el tornillo, no lo que se ve.
 * Por eso los totales son implante + 1.500 en los dos casos.
 */
export const CORONA = 1500;

/** Lo que tarda el hueso en integrar el implante, entre una fase y la otra. */
export const OSEOINTEGRACION = "2 a 3 meses";

/** Rehabilitación completa: no se cotiza por pieza suelta. */
export const REHABILITACION_INTEGRAL = { min: 24000, max: 30000 } as const;

/** Financiación propia. */
export const FINANCIACION = { tasaAnual: "18%", tasaMensual: "1,5%" } as const;

/**
 * Lo que la inversión ya incluye y que, cotizado por separado, aparece después
 * como "extras". Es el argumento central de la página: el número de acá no es el
 * tornillo, es el diente terminado.
 */
export const INCLUIDO = [
  "La cirugía completa, no sólo el componente",
  "La extracción de la pieza, si todavía está",
  "El relleno de hueso, si el hueso lo necesita",
  "La membrana para el tejido blando, si el caso la pide",
] as const;

/**
 * El matiz importa y el Dr. lo pidió explícito: lo incluido no es una lista de
 * cosas que se hacen siempre. Es una lista de cosas que, cuando el caso las pide,
 * no aparecen como un renglón extra. Si no hacen falta, no se hacen.
 */
export const INCLUIDO_ACLARACION =
  "Nada de esto se hace por costumbre. Si el hueso está bien, no se rellena; si el tejido no lo necesita, no se pone membrana. Lo que sí: cuando hacen falta, no son un renglón aparte.";

// ── formato ────────────────────────────────────────────────────────────────
// El separador de miles cambia de idioma: 1.500 en español, 1,500 en inglés.
// Escribirlo a mano en cada página es como se llega a que una diga 1.500 y otra
// 1,500 para el mismo número.

const es = (n: number) => n.toLocaleString("es-AR");
const en = (n: number) => n.toLocaleString("en-US");

/** "a partir de USD 1.500" */
export const desdeES = (n: number) => `a partir de USD ${es(n)}`;
/** "from USD 1,500" */
export const desdeEN = (n: number) => `from USD ${en(n)}`;
/** "USD 1.500" */
export const usdES = (n: number) => `USD ${es(n)}`;
/** "USD 1,500" */
export const usdEN = (n: number) => `USD ${en(n)}`;
