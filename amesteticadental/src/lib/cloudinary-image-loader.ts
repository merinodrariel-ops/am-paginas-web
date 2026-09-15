type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const CLOUDINARY_UPLOAD_MARKER = "/image/upload/";

/**
 * Cloudinary borra IPTC/EXIF/XMP en cuanto transforma una imagen. Las fotos del
 * Equipo AM llevan escritos autoría, licencia, dirección del consultorio y
 * coordenadas GPS (ver `scripts/preparar-foto-equipo.mjs`), y eso es justo lo que
 * Google Imágenes muestra en el panel de créditos de una foto. `fl_keep_iptc` los
 * conserva en la entrega.
 *
 * El costo: Cloudinary rechaza `fl_keep_iptc` junto con `q_auto`
 * ("Quality auto cannot be used in conjunction with keep_iptc"), así que estas
 * fotos van con calidad fija. Son ~10 KB más pesadas cada una. Se aplica sólo a
 * `equipo-am/` —once retratos— y no al resto del sitio, donde q_auto rinde mejor.
 */
const CARPETA_CON_METADATOS = "/equipo-am/";
const CALIDAD_CON_METADATOS = 85;

export default function cloudinaryImageLoader({ src, width, quality }: LoaderProps) {
  if (!src.startsWith("https://res.cloudinary.com/") || !src.includes(CLOUDINARY_UPLOAD_MARKER)) {
    return src;
  }

  const [baseUrl, query = ""] = src.split("?");
  const [prefix, suffix] = baseUrl.split(CLOUDINARY_UPLOAD_MARKER);
  const conservarMetadatos = baseUrl.includes(CARPETA_CON_METADATOS);

  const transformation = [
    `w_${width}`,
    "c_limit",
    `q_${conservarMetadatos ? quality || CALIDAD_CON_METADATOS : quality || "auto"}`,
    "f_auto",
    ...(conservarMetadatos ? ["fl_keep_iptc"] : []),
  ].join(",");

  const cleanedSuffix = suffix.replace(/^(q_auto|f_auto|q_auto,f_auto|f_auto,q_auto)\//, "");
  const nextUrl = `${prefix}${CLOUDINARY_UPLOAD_MARKER}${transformation}/${cleanedSuffix}`;

  return query ? `${nextUrl}?${query}` : nextUrl;
}
