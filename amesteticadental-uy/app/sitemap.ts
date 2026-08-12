import type { MetadataRoute } from "next";
import { hreflangFor, INDEXABLE_ROUTES, SITE_URL } from "./site-data";

/**
 * Sólo URLs canónicas que devuelven 200.
 *
 * `/trabaja-en-am` y `/simulador-sonrisa` quedan afuera a propósito: son redirects
 * a otros dominios. Listarlas en el sitemap hace que Search Console las reporte
 * como "Página con redirección" y nunca se indexen.
 *
 * Cada entrada declara además su par hreflang es-UY ↔ es-AR. Google acepta el
 * cluster desde el sitemap, y el sitemap de amesteticadental.com declara el
 * recíproco: así el cluster es bidireccional sin tocar 50 páginas argentinas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map(({ path, priority, changeFrequency }) => {
    const languages = hreflangFor(path === "" ? "/" : path);
    return {
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
      ...(Object.keys(languages).length > 0 ? { alternates: { languages } } : {}),
    };
  });
}
