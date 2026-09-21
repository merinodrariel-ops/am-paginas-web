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
// 2026-09-21: el archivo existía pero sólo lo usaban 2 de 22 lugares. Los otros
// 20 seguían con "+120" escrito a mano, y el número real de la ficha es 116. Por
// eso ahora no se exporta sólo el número: se exportan las ETIQUETAS ya armadas.
// Mientras haya un "+120" suelto en el copy, el sitio vuelve a desincronizarse.
//
// Y se dejó de escribir "+120": el "+" convierte un dato verificable en una
// aproximación que no coincide con la ficha. El número exacto es lo que Google
// puede contrastar.
//
// PARA ACTUALIZARLO: `node scripts/sync-resenas.mjs` lo lee de la ficha y
// reescribe este archivo. Si no hay clave de Places configurada, el script
// explica cómo obtenerla y no toca nada.

/** Último valor confirmado contra el perfil de Google Business. */
export const GOOGLE_REVIEWS = {
  ratingValue: "4.9",
  reviewCount: "116",
  bestRating: "5",
  /** Cuándo se verificó este número contra la ficha. Lo actualiza el script. */
  verificadoEl: "2026-09-21",
} as const;

/**
 * Etiquetas listas para pantalla. Se usan en vez de escribir el número:
 * así el copy no puede quedar desfasado del dato estructurado.
 */
export const RESENAS = {
  estrellas: `${GOOGLE_REVIEWS.ratingValue}★`,
  /** "116 reseñas" */
  es: `${GOOGLE_REVIEWS.reviewCount} reseñas`,
  /** "116 reseñas verificadas" */
  esVerificadas: `${GOOGLE_REVIEWS.reviewCount} reseñas verificadas`,
  /** "4.9 en Google · 116 reseñas" */
  esLinea: `${GOOGLE_REVIEWS.ratingValue} en Google · ${GOOGLE_REVIEWS.reviewCount} reseñas`,
  /** "116 Google reviews" */
  en: `${GOOGLE_REVIEWS.reviewCount} Google reviews`,
  /** "116 verified reviews" */
  enVerified: `${GOOGLE_REVIEWS.reviewCount} verified reviews`,
  /** "4.9 out of 5 on Google · 116 reviews" */
  enLinea: `${GOOGLE_REVIEWS.ratingValue} out of 5 on Google · ${GOOGLE_REVIEWS.reviewCount} reviews`,
} as const;
