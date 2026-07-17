import { createClient } from "@supabase/supabase-js";
import { getCasoBySlug as getStaticCasoBySlug, getCasosPublicados as getStaticCasosPublicados, type Caso, type FotoCaso } from "@/data/casos";

type PublicClinicalCaseRow = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string;
  seo_title: string | null;
  seo_description: string | null;
  categories: string[] | null;
  duration: string | null;
  pieces: string | null;
  technique: string | null;
  copy: string;
  copy_social: string | null;
  published_at: string | null;
  status: string;
};

type PublicClinicalCaseAssetRow = {
  case_id: string;
  public_url: string;
  alt: string;
  caption: string | null;
  role: string;
  sort_order: number;
};

// Versiones de importación que no deben competir con el caso editorial definitivo.
// Se conservan con redirect permanente, pero se excluyen de listados y sitemap.
const LEGACY_CASE_SLUGS = new Set([
  "gingivectomia-laser-10-procedimiento-recorte-gingival",
  "gingivectomia-laser-09-antes-despues-comparativa-2",
]);

function getSupabasePublic() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return null;

  return createClient(url, anon, { auth: { persistSession: false } });
}

function mapAssetToFoto(asset: PublicClinicalCaseAssetRow): FotoCaso {
  return {
    src: asset.public_url,
    alt: asset.alt,
    caption: asset.caption || undefined,
  };
}

function mapDynamicCase(row: PublicClinicalCaseRow, assets: PublicClinicalCaseAssetRow[]): Caso | null {
  const fotos = assets
    .sort((a, b) => a.sort_order - b.sort_order)
    .map(mapAssetToFoto);

  const fotoPortada = fotos[0];
  if (!fotoPortada) return null;

  return {
    slug: row.slug,
    titulo: row.title,
    subtitulo: row.subtitle || row.description,
    descripcion: row.description,
    seoTitle: row.seo_title || undefined,
    seoDescription: row.seo_description || undefined,
    categorias: row.categories || ["Caso clínico"],
    duracion: row.duration || "Caso clínico",
    piezas: row.pieces || undefined,
    tecnica: row.technique || undefined,
    fotoPortada,
    fotos,
    copy: row.copy,
    copyRedes: row.copy_social || undefined,
    publicado: row.status === "published",
  };
}

export async function getDynamicCasosPublicados(): Promise<Caso[]> {
  const supabase = getSupabasePublic();
  if (!supabase) return [];

  const { data: caseRows, error: caseError } = await supabase
    .from("public_clinical_cases")
    .select("id, slug, title, subtitle, description, seo_title, seo_description, categories, duration, pieces, technique, copy, copy_social, published_at, status")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (caseError || !caseRows?.length) return [];

  const caseIds = caseRows.map((row) => row.id);
  const { data: assetRows, error: assetError } = await supabase
    .from("public_clinical_case_assets")
    .select("case_id, public_url, alt, caption, role, sort_order")
    .in("case_id", caseIds)
    .order("sort_order", { ascending: true });

  if (assetError) return [];

  const assetsByCase = new Map<string, PublicClinicalCaseAssetRow[]>();
  for (const asset of (assetRows || []) as PublicClinicalCaseAssetRow[]) {
    const bucket = assetsByCase.get(asset.case_id) || [];
    bucket.push(asset);
    assetsByCase.set(asset.case_id, bucket);
  }

  return (caseRows as PublicClinicalCaseRow[])
    .map((row) => mapDynamicCase(row, assetsByCase.get(row.id) || []))
    .filter((value): value is Caso => Boolean(value));
}

export async function getCasosPublicadosMerged(): Promise<Caso[]> {
  const staticCases = getStaticCasosPublicados();
  const dynamicCases = await getDynamicCasosPublicados();

  const merged = new Map<string, Caso>();
  for (const caso of staticCases) merged.set(caso.slug, caso);
  for (const caso of dynamicCases) merged.set(caso.slug, caso);

  return Array.from(merged.values()).filter((caso) => !LEGACY_CASE_SLUGS.has(caso.slug));
}

export async function getCasoBySlugMerged(slug: string): Promise<Caso | undefined> {
  const dynamicCases = await getDynamicCasosPublicados();
  const dynamicCase = dynamicCases.find((caso) => caso.slug === slug);
  if (dynamicCase) return dynamicCase;
  return getStaticCasoBySlug(slug);
}
