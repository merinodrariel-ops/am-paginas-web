import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.amesteticadental.uy/sitemap.xml",
    host: "https://www.amesteticadental.uy",
  };
}
