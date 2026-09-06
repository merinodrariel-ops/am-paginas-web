// Fuente única de verdad de los años de trayectoria del Dr. Merino.
//
// Por qué existe: el sitio venía mezclando "+20 años en odontología" con
// "+15 años en estética" según la página, y ninguno de los dos cerraba con el
// título de grado (UCALP, 2010). La auditoría de 2026-06 ya lo había marcado
// —"mezcla 15+ y 20+ años en distintas páginas"— y quedó pendiente. Google
// contrasta estos datos entre fuentes (Wikidata, Expodent, La Nación, el propio
// sitio): dos cifras distintas para la misma persona debilitan la entidad.
//
// El dato correcto, confirmado por el Dr. (2026-09): se recibió en 2010 y desde
// entonces se dedica casi exclusivamente a la estética dental. No son dos
// carreras, una general y otra estética: es una sola.
//
// Se calcula en vez de hardcodearse a propósito. Un número escrito a mano en
// veinte archivos es exactamente lo que produjo la inconsistencia que esto
// arregla: al año siguiente nadie se acuerda de subirlo en todos lados.
// (Distinto del caso de `reviews.ts`, donde la fórmula inventaba reseñas que no
// existían. Acá el año de egreso es un hecho verificable y el paso del tiempo
// también.) Se evalúa en build; el sitio se despliega mucho más de una vez al año.

/** Año del título de grado en Odontología — Universidad Católica de La Plata. */
export const ANIO_TITULO = 2010;

/** Años de ejercicio profesional. 16 en 2026. */
export const ANIOS_TRAYECTORIA = new Date().getFullYear() - ANIO_TITULO;

/** "16 años" — para badges y stats. */
export const ANIOS_LABEL = `${ANIOS_TRAYECTORIA} años`;

/** "16 years" — versión inglesa para /en. */
export const ANIOS_LABEL_EN = `${ANIOS_TRAYECTORIA} years`;

/**
 * Frase canónica en español. Usarla tal cual en bios y descripciones en vez de
 * redactar una variante nueva: cada variante es una oportunidad de que los
 * números se vuelvan a separar.
 */
export const BIO_TRAYECTORIA = `${ANIOS_TRAYECTORIA} años de ejercicio dedicados casi exclusivamente a la estética dental`;

/** Frase canónica en inglés, para las páginas /en. */
export const BIO_TRAYECTORIA_EN = `${ANIOS_TRAYECTORIA} years in dentistry, dedicated almost exclusively to cosmetic dentistry`;
