import "server-only";

import { supabase } from "@/lib/supabase-client";
import {
  getCasoBySlug as getStaticCasoBySlug,
  getCasosPublicados as getStaticCasosPublicados,
  type Caso,
  type Categoria,
  type FotoCaso,
} from "@/data/casos";

type PublicCaseRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  categories: string[] | null;
  copy: string | null;
  status: string;
  created_at: string;
};

type PublicAssetRow = {
  case_id: string;
  role: string | null;
  public_url: string | null;
  cloudinary_secure_url: string | null;
  alt: string | null;
  caption: string | null;
  sort_order: number | null;
};

function withCloudinaryDelivery(url: string): string {
  if (!url.includes("res.cloudinary.com") || !url.includes("/image/upload/")) return url;
  if (url.includes("/image/upload/q_auto,f_auto/")) return url;
  return url.replace("/image/upload/", "/image/upload/q_auto,f_auto/");
}

function mapPublishedCase(row: PublicCaseRow, assets: PublicAssetRow[]): Caso | null {
  const photos: FotoCaso[] = assets
    .filter((asset) => asset.case_id === row.id)
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
    .flatMap((asset) => {
      const url = asset.cloudinary_secure_url || asset.public_url;
      if (!url) return [];
      return [{
        src: withCloudinaryDelivery(url),
        alt: asset.alt || row.title,
        caption: asset.caption || undefined,
      }];
    });

  if (photos.length === 0) return null;
  const categories = row.categories?.length
    ? row.categories as Categoria[]
    : ["Diseño de sonrisa" as Categoria];

  return {
    slug: row.slug,
    titulo: row.title,
    subtitulo: row.description || "Caso clínico documentado en AM Estética Dental.",
    descripcion: row.description || row.title,
    categorias: categories,
    duracion: "Tratamiento personalizado",
    tecnica: "Planificación clínica personalizada",
    fotoPortada: photos[0],
    fotos: photos,
    copy: row.copy || row.description || row.title,
    publicado: true,
  };
}

async function getDatabaseCases(): Promise<Caso[]> {
  if (!supabase) return [];

  const [{ data: rows, error: casesError }, { data: assets, error: assetsError }] = await Promise.all([
    supabase
      .from("public_clinical_cases")
      .select("id,slug,title,description,categories,copy,status,created_at")
      .eq("status", "published")
      .order("created_at", { ascending: false }),
    supabase
      .from("public_clinical_case_assets")
      .select("case_id,role,public_url,cloudinary_secure_url,alt,caption,sort_order")
      .order("sort_order", { ascending: true }),
  ]);

  if (casesError || assetsError) {
    console.error("[public-clinical-cases] Supabase read failed", {
      cases: casesError?.code,
      assets: assetsError?.code,
    });
    return [];
  }

  return ((rows || []) as PublicCaseRow[])
    .map((row) => mapPublishedCase(row, (assets || []) as PublicAssetRow[]))
    .filter((item): item is Caso => item !== null);
}

export async function getAllPublishedCases(): Promise<Caso[]> {
  const dynamicCases = await getDatabaseCases();
  const dynamicSlugs = new Set(dynamicCases.map((item) => item.slug));
  return [
    ...dynamicCases,
    ...getStaticCasosPublicados().filter((item) => !dynamicSlugs.has(item.slug)),
  ];
}

export async function getPublishedCaseBySlug(slug: string): Promise<Caso | undefined> {
  const cases = await getDatabaseCases();
  return cases.find((item) => item.slug === slug) || getStaticCasoBySlug(slug);
}
