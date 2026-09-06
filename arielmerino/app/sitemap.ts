import type { MetadataRoute } from "next";
import { SITE } from "./site-data";

// Hasta 2026-09 este sitemap tenía una sola URL, porque el sitio tenía una sola
// página. Al agregar una entrada nueva acá, agregarla también al <Nav> de app/ui.tsx:
// una página que sólo vive en el sitemap y no está enlazada desde ningún lado se
// rastrea tarde y con menos prioridad.
const RUTAS: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/trayectoria", priority: 0.9, changeFrequency: "monthly" },
  { path: "/carillas-de-porcelana", priority: 0.9, changeFrequency: "monthly" },
  { path: "/prensa", priority: 0.85, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return RUTAS.map((r) => ({
    url: `${SITE}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
