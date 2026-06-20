type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const CLOUDINARY_UPLOAD_MARKER = "/image/upload/";

export default function cloudinaryImageLoader({ src, width, quality }: LoaderProps) {
  if (!src.startsWith("https://res.cloudinary.com/") || !src.includes(CLOUDINARY_UPLOAD_MARKER)) {
    return src;
  }

  const [baseUrl, query = ""] = src.split("?");
  const [prefix, suffix] = baseUrl.split(CLOUDINARY_UPLOAD_MARKER);
  const transformation = [`w_${width}`, "c_limit", `q_${quality || "auto"}`, "f_auto"].join(",");
  const cleanedSuffix = suffix.replace(/^(q_auto|f_auto|q_auto,f_auto|f_auto,q_auto)\//, "");
  const nextUrl = `${prefix}${CLOUDINARY_UPLOAD_MARKER}${transformation}/${cleanedSuffix}`;

  return query ? `${nextUrl}?${query}` : nextUrl;
}
