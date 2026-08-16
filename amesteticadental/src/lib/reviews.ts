// Reseñas de Google: un solo número para todo el sitio.
//
// Antes había dos. El layout calculaba el reviewCount con una fórmula —base 116
// al 2026-08-01, +2 por mes, con Date.now()— mientras /opiniones,
// /dentista-puerto-madero y /en/reviews tenían 120 escrito a mano, y todo el
// copy visible dice "más de 120". O sea: el mismo sitio le declaraba a Google
// dos AggregateRating distintos, y el del layout ni siquiera coincidía con lo
// que el usuario leía en pantalla.
//
// La fórmula además inventaba: un número que crece solo con el reloj no
// corresponde a ninguna reseña real. Google pide que el AggregateRating sea
// verificable contra lo que se muestra en la página; si no cierra, lo que
// arriesgás es el rich snippet de estrellas de todo el dominio.
//
// ACTUALIZAR A MANO. Se saca del perfil de Google Business y se sube cuando el
// número real lo justifique, junto con el copy que dice "+120".
export const GOOGLE_REVIEWS = {
  ratingValue: "4.9",
  reviewCount: "120",
  bestRating: "5",
} as const;
