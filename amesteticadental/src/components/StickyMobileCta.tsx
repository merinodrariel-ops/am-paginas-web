"use client";

import { usePathname } from "next/navigation";

const COPY = {
  es: {
    eyebrow: "Evaluación inicial privada",
    cta: "Agendar por WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Vengo%20desde%20la%20web%20de%20AM%20Est%C3%A9tica%20Dental%20y%20quiero%20solicitar%20una%20evaluaci%C3%B3n%20inicial.",
  },
  en: {
    eyebrow: "Private initial assessment",
    cta: "Book on WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I%20came%20from%20the%20AM%20Est%C3%A9tica%20Dental%20website%20and%20would%20like%20to%20request%20an%20initial%20assessment.",
  },
} as const;

export default function StickyMobileCta() {
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const t = isEn ? COPY.en : COPY.es;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] px-4 pb-4 pt-3 lg:hidden pointer-events-none">
      <div className="mx-auto max-w-md rounded-[1.35rem] border border-oro/25 bg-carbon/92 p-2 shadow-[0_-12px_40px_rgba(0,0,0,0.42)] backdrop-blur-xl pointer-events-auto">
        <a
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 rounded-[1rem] bg-oro px-4 py-3 text-carbon transition-transform active:scale-[0.985]"
        >
          <span className="min-w-0">
            <span className="block font-manrope text-[10px] font-semibold uppercase tracking-[0.22em] text-carbon/65">
              {t.eyebrow}
            </span>
            <span className="block font-manrope text-sm font-extrabold leading-tight">
              {t.cta}
            </span>
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-carbon text-crema">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
