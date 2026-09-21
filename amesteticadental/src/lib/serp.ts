// Recorte de títulos y descripciones al largo que Google muestra.
//
// Por qué existe: los casos que vienen del panel no siempre traen `seoTitle` y
// `seoDescription` cargados, y la plantilla caía al `titulo` y a la `descripcion`
// completos. La descripción de un caso clínico está escrita para leerse en la
// página, así que llegaba a tener 800 caracteres: Google mostraba los primeros 158
// y cortaba a mitad de palabra. Había casos con títulos de 96 caracteres por el
// mismo motivo.
//
// El recorte no reemplaza cargar un `seoTitle` y una `seoDescription` buenos —eso
// sigue siendo lo que conviene— pero evita que la ausencia de ese campo se
// convierta en un snippet roto.

/** Google corta los títulos alrededor de acá (mide píxeles, no caracteres). */
export const TITULO_MAX = 60;
/** Y las descripciones, alrededor de acá. */
export const META_MAX = 158;

/**
 * Recorta respetando la unidad de sentido más grande que entre: primero intenta
 * cerrar en una oración completa, y si no hay ninguna, corta en la última palabra.
 * Un corte prolijo se lee como una frase; uno a ciegas se lee como un error.
 */
export function recortar(texto: string, max: number): string {
  const limpio = texto.replace(/\s+/g, " ").trim();
  if (limpio.length <= max) return limpio;

  const tajo = limpio.slice(0, max);

  // ¿Termina alguna oración dentro del límite, y bastante cerca del final?
  const finOracion = Math.max(tajo.lastIndexOf(". "), tajo.lastIndexOf("? "), tajo.lastIndexOf("! "));
  if (finOracion > max * 0.6) return tajo.slice(0, finOracion + 1);

  // Si no, la última palabra entera, sin dejar la puntuación colgada.
  const finPalabra = tajo.lastIndexOf(" ");
  return (finPalabra > 0 ? tajo.slice(0, finPalabra) : tajo).replace(/[\s,;:—-]+$/, "");
}

/**
 * Arma el `<title>` de un caso dejando lugar para el sufijo de marca.
 * El sufijo va siempre: es lo que hace que la marca aparezca aunque el título se
 * arme solo desde el panel.
 */
export function tituloDeCaso(base: string, sufijo = " | AM"): string {
  return recortar(base, TITULO_MAX - sufijo.length) + sufijo;
}

/** Descripción de un caso, recortada a lo que Google muestra. */
export function metaDeCaso(base: string): string {
  return recortar(base, META_MAX);
}
