"use client";

import { useEffect } from "react";

// El layout raíz renderiza <html lang="es"> para todo el sitio. En las páginas
// de /en ajustamos el atributo a "en" del lado del cliente (accesibilidad +
// prompt de traducción del navegador). La señal de idioma para Google la dan el
// contenido en inglés + hreflang + og:locale, no este atributo.
export default function HtmlLangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);
  return null;
}
