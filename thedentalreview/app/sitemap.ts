import type { MetadataRoute } from "next";

const SITE = "https://www.thedentalreview.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/casos/inteligencia-artificial-diseno-sonrisa-limites-clinicos`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/casos/diseno-sonrisa-cierre-diastemas-viral-facebook-dr-ariel-merino`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
