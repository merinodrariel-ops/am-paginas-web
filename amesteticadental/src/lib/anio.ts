// Fuente única de verdad del año con el que se sellan los precios publicados.
//
// Por qué existe: las queries que este sitio efectivamente gana en Copilot/Bing
// son literalmente "precio implante dental Argentina 2026" (37,5% de citation
// share) y "precio carillas dentales Argentina 2026" (49,7%). El año no es
// decoración del título: es parte de la query. El 1 de enero esas queries pasan
// a decir 2027 y, si el sitio sigue diciendo 2026, el share se cae solo.
//
// Antes de esto el año estaba escrito a mano en 28 títulos, descripciones,
// keywords y bloques visibles. Es el mismo patrón que ya rompió los años de
// trayectoria del Dr. y que `trayectoria.ts` vino a arreglar: un número copiado
// en veinte archivos es un número que al año siguiente nadie actualiza entero.
//
// A diferencia de `trayectoria.ts`, acá NO se calcula con `new Date()`. Los años
// de ejercicio avanzan solos porque el paso del tiempo es el hecho; los precios
// no. Poner "Precios 2027" automáticamente sobre una tabla que nadie revisó
// sería publicitar una actualización que no ocurrió. Entonces: constante manual,
// con una alarma que no se puede ignorar (ver `scripts/check-anio.mjs`, que
// rompe el CI en cuanto este número queda atrás del año real).
//
// Ritual de rollover, una vez al año:
//   1. Revisar de verdad las tablas de precios (carillas, implantes,
//      blanqueamiento, diseño de sonrisa, lentes de contacto, coronas).
//   2. Subir ANIO_PRECIOS acá.
//   3. Subir el `dateModified` de los dos blogs de precios
//      (`/blog/cuanto-cuestan-las-carillas-dentales-en-argentina` y
//      `/blog/cuanto-cuesta-un-implante-dental-en-argentina`): el titular dice
//      "Guía <año>" y el schema tiene que respaldarlo.
//   4. `npm run notify-index` para que Bing recrawlee con el año nuevo.

/** Año vigente de las tablas de precios publicadas. Se sube a mano, tras revisarlas. */
export const ANIO_PRECIOS = 2026;

/** "2026" — para interpolar en títulos, descripciones y copy visible. */
export const ANIO = String(ANIO_PRECIOS);
