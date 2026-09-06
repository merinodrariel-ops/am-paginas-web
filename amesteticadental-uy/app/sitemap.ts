import type { MetadataRoute } from "next";
import lastmod from "./lastmod.json";
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
 *
 * El `lastModified` sale de `lastmod.json`, que `npm run build` regenera desde las
 * fechas de commit reales (ver `scripts/generar-lastmod.mjs`). De los tres campos
 * opcionales del sitemap, `lastmod` es el único que Google dice usar; sin él, un
 * dominio nuevo no le da al rastreo ninguna señal de cuándo volver. Las rutas que
 * el script no pudo fechar se publican sin el campo antes que con una fecha falsa.
 */
const FECHAS: Record<string, string> = lastmod;

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map(({ path, priority, changeFrequency }) => {
    const languages = hreflangFor(path === "" ? "/" : path);
    const fecha = FECHAS[path];
    return {
      url: `${SITE_URL}${path}`,
      ...(fecha ? { lastModified: new Date(fecha) } : {}),
      changeFrequency,
      priority,
      ...(Object.keys(languages).length > 0 ? { alternates: { languages } } : {}),
    };
  });
}
