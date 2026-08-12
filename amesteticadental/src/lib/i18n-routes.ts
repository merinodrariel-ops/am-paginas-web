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
  "/opiniones": "/en/reviews",
  "/blog": "/en/blog",
  "/prensa": "/en/press",
  "/sonrisa": "/en/smile-simulator",
};

export const ES_BY_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_BY_ES).map(([es, en]) => [en, es]),
);

// Landing en inglés (ancla del sub-sitio /en). Adonde cae la banderita cuando la
// página actual todavía no tiene versión traducida.
export const EN_HOME = "/en";
export const ES_HOME = "/";

const SITE = "https://www.amesteticadental.com";
const SITE_UY = "https://www.amesteticadental.uy";

// Mapa de pares Argentina ↔ Uruguay. Mismo idioma, distinto país: sin hreflang
// es-AR/es-UY, Google trata a las dos páginas como duplicados en competencia y
// suprime una. La clave es la URL argentina; el valor, la uruguaya.
//
// Sólo se emparejan páginas de intención equivalente. El recíproco vive en
// `amesteticadental-uy/app/site-data.ts` (`AR_BY_UY`); los dos lados tienen que
// declarar el cluster o Google lo ignora.
export const UY_BY_ES: Record<string, string> = {
  "/": "/",
  "/carillas-dentales": "/carillas-dentales-montevideo",
  "/diseno-de-sonrisa": "/diseno-de-sonrisa-montevideo",
  "/estetica-dental": "/estetica-dental-montevideo",
  "/dientes-de-porcelana-carillas-precio": "/carillas-de-porcelana-montevideo",
  "/implantes-dentales-buenos-aires": "/implantes-dentales-montevideo",
  "/blanqueamiento-dental-precio-buenos-aires": "/blanqueamiento-dental-montevideo",
  "/precio-carillas-dentales-buenos-aires": "/precio-carillas-dentales-montevideo",
  "/dentista-puerto-madero": "/clinica-dental-carrasco",
  "/turismo-dental": "/tratamiento-en-buenos-aires-desde-uruguay",
  "/casos-antes-y-despues": "/casos-clinicos",
  "/dr-ariel-merino": "/dr-ariel-merino",
  "/prensa": "/prensa",
};

// Devuelve el bloque `languages` de hreflang para una página, dado su par ES/EN
// y, si existe, su equivalente uruguaya.
export function hreflangFor(esPath: string): Record<string, string> {
  const enPath = EN_BY_ES[esPath];
  const uyPath = UY_BY_ES[esPath];
  if (!enPath && !uyPath) return {};

  const languages: Record<string, string> = {
    "es-AR": `${SITE}${esPath === "/" ? "" : esPath}`,
    "x-default": `${SITE}${esPath === "/" ? "" : esPath}`,
  };
  if (enPath) languages["en-US"] = `${SITE}${enPath}`;
  if (uyPath) languages["es-UY"] = `${SITE_UY}${uyPath === "/" ? "" : uyPath}`;
  return languages;
}

// Todos los pares, para el sitemap.
export function allI18nPairs(): { es: string; en: string }[] {
  return Object.entries(EN_BY_ES).map(([es, en]) => ({ es, en }));
}
