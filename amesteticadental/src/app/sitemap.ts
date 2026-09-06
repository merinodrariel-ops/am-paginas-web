import type { MetadataRoute } from "next";
import { getCasosPublicadosMerged } from "@/lib/public-cases";
import { ES_BY_EN, hreflangFor } from "@/lib/i18n-routes";

// Una página /en pertenece al mismo cluster que su par español: se resuelve el par
// y se reusa el mismo bloque de idiomas.
function languagesForPath(path: string): Record<string, string> {
  const esPath = path.startsWith("/en") ? ES_BY_EN[path] : path === "" ? "/" : path;
  return esPath ? hreflangFor(esPath) : {};
}

const SITE = "https://www.amesteticadental.com";

type SitemapEntry = {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

// Solo URLs canónicas que responden 200. `lastModified` se omite a propósito:
// una fecha inventada en cada build perjudica la confianza en la señal de frescura.
const STATIC_ROUTES: SitemapEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/estetica-dental", changeFrequency: "monthly", priority: 0.9 },
  { path: "/carillas-dentales", changeFrequency: "monthly", priority: 0.9 },
  { path: "/diseno-de-sonrisa", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sonrisa", changeFrequency: "weekly", priority: 0.9 },
  { path: "/alineadores-invisibles", changeFrequency: "monthly", priority: 0.9 },
  { path: "/lentes-de-contacto-dental", changeFrequency: "monthly", priority: 0.9 },
  { path: "/carillas-sin-desgaste", changeFrequency: "monthly", priority: 0.9 },
  { path: "/invisalign", changeFrequency: "monthly", priority: 0.9 },
  { path: "/dr-ariel-merino", changeFrequency: "monthly", priority: 0.8 },
  { path: "/equipo-am", changeFrequency: "monthly", priority: 0.8 },
  { path: "/trabaja-en-am", changeFrequency: "monthly", priority: 0.6 },
  { path: "/precio-carillas-dentales-buenos-aires", changeFrequency: "monthly", priority: 0.9 },
  { path: "/donde-hacerse-carillas-buenos-aires", changeFrequency: "monthly", priority: 0.9 },
  { path: "/carillas-vs-alineadores", changeFrequency: "monthly", priority: 0.8 },
  { path: "/carillas-de-porcelana-vs-resina", changeFrequency: "monthly", priority: 0.8 },
  { path: "/odontologia-estetica-buenos-aires", changeFrequency: "monthly", priority: 0.9 },
  { path: "/dentista-puerto-madero", changeFrequency: "monthly", priority: 0.9 },
  // Landings por barrio de CABA (ver src/data/barrios.ts). La clínica sigue
  // siendo una sola, en Puerto Madero: el barrio va en areaServed, no en address.
  { path: "/carillas-dentales-recoleta", changeFrequency: "monthly", priority: 0.85 },
  { path: "/carillas-dentales-palermo", changeFrequency: "monthly", priority: 0.85 },
  { path: "/carillas-dentales-belgrano", changeFrequency: "monthly", priority: 0.85 },
  { path: "/implantes-dentales-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/periodoncia-precio-buenos-aires", changeFrequency: "monthly", priority: 0.8 },
  { path: "/alineadores-invisibles-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/blanqueamiento-dental-precio-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/dientes-de-porcelana-carillas-precio", changeFrequency: "monthly", priority: 0.85 },
  { path: "/diseno-de-sonrisa-precio-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/lentes-de-contacto-dental-precio-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/precio-implantes-dentales-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/bruxismo-desgaste-dental-carillas-ceramicas", changeFrequency: "monthly", priority: 0.85 },
  { path: "/coronas-y-fundas-dentales", changeFrequency: "monthly", priority: 0.8 },
  { path: "/carillas-de-resina", changeFrequency: "monthly", priority: 0.8 },
  { path: "/puentes-dentales", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.7 },
  { path: "/turismo-dental", changeFrequency: "monthly", priority: 0.9 },
  // Sitio en inglés (/en) — se agrega cada página a medida que se traduce.
  { path: "/en", changeFrequency: "weekly", priority: 0.95 },
  { path: "/en/dental-tourism-argentina", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/porcelain-veneers-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/smile-design-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/clinic", changeFrequency: "monthly", priority: 0.8 },
  { path: "/en/team", changeFrequency: "monthly", priority: 0.8 },
  { path: "/en/before-after", changeFrequency: "weekly", priority: 0.9 },
  { path: "/en/ultra-thin-veneers-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/veneers-cost-buenos-aires", changeFrequency: "monthly", priority: 0.9 },
  { path: "/en/dr-ariel-merino", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/en/invisible-aligners-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/dental-implants-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/teeth-whitening-buenos-aires", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/cosmetic-dentistry-buenos-aires", changeFrequency: "monthly", priority: 0.9 },
  { path: "/en/porcelain-vs-composite-veneers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/en/veneers-vs-aligners", changeFrequency: "monthly", priority: 0.8 },
  { path: "/en/reviews", changeFrequency: "monthly", priority: 0.85 },
  { path: "/en/blog", changeFrequency: "monthly", priority: 0.8 },
  { path: "/en/press", changeFrequency: "monthly", priority: 0.75 },
  { path: "/en/smile-simulator", changeFrequency: "weekly", priority: 0.9 },
  { path: "/en/blog/veneers-cost-argentina", changeFrequency: "monthly", priority: 0.7 },
  { path: "/en/blog/do-veneers-damage-your-teeth", changeFrequency: "monthly", priority: 0.7 },
  { path: "/en/blog/how-long-do-porcelain-veneers-last", changeFrequency: "monthly", priority: 0.7 },
  { path: "/opiniones", changeFrequency: "monthly", priority: 0.85 },
  { path: "/prensa", changeFrequency: "monthly", priority: 0.8 },
  { path: "/casos-antes-y-despues", changeFrequency: "weekly", priority: 0.95 },
  { path: "/clinica", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog/cuanto-duran-las-carillas-de-porcelana", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/las-carillas-danan-los-dientes", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/diseno-de-sonrisa-digital-como-funciona", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/carillas-porcelana-antes-despues", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/cuantas-sesiones-se-necesitan-para-las-carillas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/preguntas-antes-de-hacerse-carillas", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/carillas-disilicato-vs-porcelana-feldespatica", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/cuanto-cuesta-un-implante-dental-en-argentina", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/cuanto-cuestan-las-carillas-dentales-en-argentina", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/como-blanquear-los-dientes-sin-danar-el-esmalte", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/sonrisa-natural-vs-hollywood", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/cepillo-electrico-dyson-opinion-odontologo", changeFrequency: "monthly", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const casos = await getCasosPublicadosMerged();

  return [
    // Cada ruta declara su cluster hreflang (es-AR / en-US / es-UY). Google acepta
    // el cluster desde el sitemap; el sitemap de amesteticadental.uy declara el
    // recíproco. Así queda bidireccional sin tocar las 50 páginas una por una.
    ...STATIC_ROUTES.map(({ path, ...entry }) => {
      const languages = languagesForPath(path);
      return {
        url: `${SITE}${path}`,
        ...entry,
        ...(Object.keys(languages).length > 0 ? { alternates: { languages } } : {}),
      };
    }),
    ...casos.map((caso) => ({
      url: `${SITE}/casos/${caso.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    // Sólo los casos efectivamente traducidos. Los demás se sirven en /en/cases con
    // noindex + canonical al español: anunciarlos en el sitemap era pedirle a Google
    // que rastree páginas que la propia página le dice que no indexe.
    ...casos
      .filter((caso) => caso.tieneTraduccionEn)
      .map((caso) => ({
        url: `${SITE}/en/cases/${caso.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),
  ];
}
