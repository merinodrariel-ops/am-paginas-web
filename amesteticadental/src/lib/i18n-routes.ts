// Mapa de pares de URL español ↔ inglés.
// Al traducir una página nueva, agregá su par acá y la banderita + hreflang lo
// toman automáticamente. La clave es la URL en español; el valor, la de inglés.
export const EN_BY_ES: Record<string, string> = {
  "/": "/en",
  "/turismo-dental": "/en/dental-tourism-argentina",
  "/carillas-dentales": "/en/porcelain-veneers-buenos-aires",
  "/diseno-de-sonrisa": "/en/smile-design-buenos-aires",
  "/clinica": "/en/clinic",
  "/equipo-am": "/en/team",
  "/casos-antes-y-despues": "/en/before-after",
  "/lentes-de-contacto-dental": "/en/ultra-thin-veneers-buenos-aires",
  "/precio-carillas-dentales-buenos-aires": "/en/veneers-cost-buenos-aires",
  "/dr-ariel-merino": "/en/dr-ariel-merino",
  "/contacto": "/en/contact",
  "/alineadores-invisibles": "/en/invisible-aligners-buenos-aires",
  "/implantes-dentales-buenos-aires": "/en/dental-implants-buenos-aires",
  "/blanqueamiento-dental-precio-buenos-aires": "/en/teeth-whitening-buenos-aires",
  "/estetica-dental": "/en/cosmetic-dentistry-buenos-aires",
  "/carillas-de-porcelana-vs-resina": "/en/porcelain-vs-composite-veneers",
  "/carillas-vs-alineadores": "/en/veneers-vs-aligners",
};

export const ES_BY_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_BY_ES).map(([es, en]) => [en, es]),
);

// Landing en inglés (ancla del sub-sitio /en). Adonde cae la banderita cuando la
// página actual todavía no tiene versión traducida.
export const EN_HOME = "/en";
export const ES_HOME = "/";

const SITE = "https://www.amesteticadental.com";

// Devuelve el bloque `languages` de hreflang para una página, dado su par ES/EN.
export function hreflangFor(esPath: string): Record<string, string> {
  const enPath = EN_BY_ES[esPath];
  if (!enPath) return {};
  return {
    "es-AR": `${SITE}${esPath}`,
    "en-US": `${SITE}${enPath}`,
    "x-default": `${SITE}${esPath}`,
  };
}

// Todos los pares, para el sitemap.
export function allI18nPairs(): { es: string; en: string }[] {
  return Object.entries(EN_BY_ES).map(([es, en]) => ({ es, en }));
}
