import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://www.amesteticadental.uy",
    lastModified: new Date("2026-08-12"),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
