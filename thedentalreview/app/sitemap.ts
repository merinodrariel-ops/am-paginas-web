import type { MetadataRoute } from "next";

const SITE = "https://www.thedentalreview.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/casos/gingivectomia-laser-micro-diseno-sonrisa-resina`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE}/casos/straumann-vs-neodent-comparativa-implantes-dentales-premium`,
      lastModified: new Date("2026-07-13"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE}/conferencias/expodent-2026-dr-ariel-merino-inteligencia-artificial-diseno-sonrisa`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${SITE}/casos/odontologo-argentino-inteligencia-artificial-simular-sonrisa`,
      lastModified: new Date("2026-06-08"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/casos/inteligencia-artificial-diseno-sonrisa-limites-clinicos`,
      lastModified: new Date("2026-06-08"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE}/casos/diseno-sonrisa-cierre-diastemas-viral-facebook-dr-ariel-merino`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
