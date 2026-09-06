import Link from "next/link";
import { NAV, WA, SITE, MATRICULA } from "./site-data";

// Primitivas visuales de arielmerino.com. El sitio usa estilos inline (no
// clases de Tailwind) porque nació como una sola página; se mantiene el criterio
// para que todo el sitio se vea igual y no queden dos sistemas conviviendo.

export const oro = "var(--oro, #C9A96E)";
export const carbon = "var(--carbon, #141414)";
export const crema = "var(--crema, #F5F0E8)";
export const cremaDim = "var(--crema-dim, #A89F92)";
export const serif = "var(--font-cormorant, Georgia, serif)";

export function Nav({ actual }: { actual: string }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        padding: "20px 40px",
        borderBottom: "1px solid rgba(201,169,110,0.12)",
        background: carbon,
      }}
    >
      <Link href="/" style={{ fontFamily: serif, fontSize: 19, color: crema, textDecoration: "none" }}>
        Dr. Ariel Merino
      </Link>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
        {NAV.filter((n) => n.href !== "/").map((n) => (
          <Link
            key={n.href}
            href={n.href}
            aria-current={actual === n.href ? "page" : undefined}
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: actual === n.href ? oro : cremaDim,
              textDecoration: "none",
            }}
          >
            {n.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Hero({
  eyebrow,
  titulo,
  destacado,
  bajada,
}: {
  eyebrow: string;
  titulo: string;
  destacado?: string;
  bajada: string;
}) {
  return (
    <section style={{ padding: "80px 40px 56px", maxWidth: 1100, margin: "0 auto" }}>
      <span
        style={{
          fontSize: 9,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: oro,
          display: "block",
          marginBottom: 20,
        }}
      >
        {eyebrow}
      </span>
      <h1 style={{ fontFamily: serif, fontSize: "clamp(34px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1.12, marginBottom: 24 }}>
        {titulo}
        {destacado ? (
          <>
            {" "}
            <em style={{ color: oro }}>{destacado}</em>
          </>
        ) : null}
      </h1>
      <p style={{ fontSize: 17, lineHeight: 1.8, color: cremaDim, maxWidth: 680 }}>{bajada}</p>
    </section>
  );
}

export function Seccion({
  eyebrow,
  titulo,
  children,
}: {
  eyebrow?: string;
  titulo?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "48px 40px", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
      {eyebrow ? (
        <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: oro, display: "block", marginBottom: 12 }}>
          {eyebrow}
        </span>
      ) : null}
      {titulo ? (
        <h2 style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 300, marginBottom: 32 }}>{titulo}</h2>
      ) : null}
      {children}
    </section>
  );
}

export function CtaWhatsapp({ mensaje, texto }: { mensaje: string; texto: string }) {
  return (
    <a
      href={WA(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: oro,
        color: "#141414",
        padding: "14px 30px",
        borderRadius: 100,
        fontSize: 13,
        fontWeight: 600,
        textDecoration: "none",
        letterSpacing: "0.04em",
      }}
    >
      {texto}
    </a>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,169,110,0.1)", padding: "32px 40px", marginTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <div>
          <span style={{ fontFamily: serif, fontSize: 16, display: "block", marginBottom: 6 }}>Dr. Ariel Merino</span>
          <span style={{ fontSize: 11, color: cremaDim }}>
            {MATRICULA} · Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires
          </span>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
          {NAV.filter((n) => n.href !== "/").map((n) => (
            <Link key={n.href} href={n.href} style={{ fontSize: 11, color: cremaDim, textDecoration: "none" }}>
              {n.label}
            </Link>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: 1100,
          margin: "24px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(201,169,110,0.08)",
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {[
          ["AM Estética Dental", "https://www.amesteticadental.com"],
          ["AM Uruguay", "https://www.amesteticadental.uy"],
          ["The Dental Review", "https://www.thedentalreview.com"],
          ["Instagram", "https://www.instagram.com/drarielmerino"],
          ["YouTube", "https://www.youtube.com/@ArielMerino"],
          ["LinkedIn", "https://www.linkedin.com/in/drarielmerino/"],
        ].map(([label, href]) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: cremaDim, textDecoration: "none" }}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}

/** JSON-LD sin romper el parser si algún dato trae "<". */
export function Jsonld({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path === "/" ? "" : it.path}`,
    })),
  };
}
