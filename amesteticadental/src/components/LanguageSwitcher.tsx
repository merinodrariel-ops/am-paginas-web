"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EN_BY_ES, ES_BY_EN, EN_HOME, ES_HOME } from "@/lib/i18n-routes";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  const href = isEn
    ? ES_BY_EN[pathname] || ES_HOME
    : EN_BY_ES[pathname] || EN_HOME;

  // Mostramos la bandera del idioma AL QUE se cambia.
  const flag = isEn ? "🇦🇷" : "🇬🇧";
  const code = isEn ? "ES" : "EN";
  const aria = isEn ? "Ver el sitio en español" : "View this site in English";

  return (
    <Link
      href={href}
      aria-label={aria}
      title={aria}
      className={`inline-flex items-center gap-1.5 rounded-full border border-oro/20 bg-oro/5 px-3 py-1.5 font-manrope text-[11px] font-semibold uppercase tracking-[0.15em] text-crema/70 transition-colors hover:border-oro/40 hover:text-crema ${className}`}
    >
      <span aria-hidden="true">{flag}</span>
      <span>{code}</span>
    </Link>
  );
}
