import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://www.amesteticadental.com.uy",
    lastModified: new Date("2026-07-17"),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
