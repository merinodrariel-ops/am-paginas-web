import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/casos-clinicos", "/carillas-dentales-montevideo", "/diseno-de-sonrisa-montevideo", "/estetica-dental-montevideo", "/carillas-de-porcelana-montevideo", "/dr-ariel-merino", "/prensa", "/trabaja-en-am"];
  return routes.map((route) => ({
    url: `https://www.amesteticadental.uy${route}`,
    lastModified: new Date("2026-08-12"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
