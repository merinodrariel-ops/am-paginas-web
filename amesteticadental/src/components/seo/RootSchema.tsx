"use client";

import { usePathname } from "next/navigation";

/**
 * Schema global de la clínica (Dentist + LocalBusiness) en español.
 *
 * Se omite en las páginas `/en`, que declaran su propio schema en inglés: dos
 * bloques con el mismo `@id` en idiomas distintos confunden la señal de idioma
 * y duplican la entidad.
 */
export default function RootSchema({ schema }: { schema: Record<string, unknown> }) {
  const pathname = usePathname() || "/";
  if (pathname === "/en" || pathname.startsWith("/en/")) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
