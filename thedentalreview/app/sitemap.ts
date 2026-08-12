import type { MetadataRoute } from "next";

const SITE = "https://www.thedentalreview.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date("2026-07-17"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/noticias`,
      lastModified: new Date("2026-07-17"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE}/acerca-de`,
      lastModified: new Date("2026-07-17"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE}/noticias/carillas-ultrafinas-additive-dentistry-2026`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/noticias/mercado-implantes-dentales-digital-2026`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/noticias/nobel-biocare-s-series-implantologia-2026`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/noticias/ia-diseno-sonrisa-digital-dsd-2026`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/noticias/estetica-dental-uruguay-montevideo-carrasco-2026`,
      lastModified: new Date("2026-08-12"),
      changeFrequency: "monthly",
      priority: 0.75,
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
      lastModified: new Date("2026-07-17"),
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
