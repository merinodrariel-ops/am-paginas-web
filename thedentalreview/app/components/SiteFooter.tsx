import Link from "next/link";

// Pie único del sitio.
//
// Antes había un pie escrito a mano en cada una de las 14 páginas, y ya habían
// divergido en 6 variantes distintas (ancho de caja, padding, si el nombre
// linkeaba al home o no). Esto los unifica.
//
// Incluye la fila de sitios relacionados —hasta ahora TDR no enlazaba a
// amesteticadental.uy ni a arielmerino.com desde el pie— y, junto con ella, la
// declaración de quién edita la publicación. Las dos cosas van juntas a
// propósito: un enlace sitewide a las propiedades del mismo dueño, sin decir
// que es el mismo dueño, es exactamente el patrón que las políticas de enlaces
// de Google tratan como esquema. Declarado, es una nota editorial normal.

const SECCIONES = [
  { href: "/noticias", label: "Noticias" },
  { href: "/acerca-de", label: "Criterios editoriales" },
];

const RELACIONADOS = [
  { href: "https://www.amesteticadental.com", label: "AM Estética Dental" },
  { href: "https://www.amesteticadental.uy", label: "AM Uruguay" },
  { href: "https://www.arielmerino.com", label: "Dr. Ariel Merino" },
];

const linkBase = {
  fontSize: 11,
  color: "var(--muted, #6b6560)",
  textDecoration: "none",
} as const;

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--paper-dim, #e8e4da)", padding: "36px 24px", marginTop: 72 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
          <Link
            href="/"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 17, textDecoration: "none", color: "var(--ink, #0e0e0e)" }}
          >
            The Dental Review
          </Link>
          <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {SECCIONES.map((s) => (
              <Link key={s.href} href={s.href} style={linkBase}>
                {s.label}
              </Link>
            ))}
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "8px 16px" }}>
          <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold, #b8954a)" }}>
            Sitios relacionados
          </span>
          {RELACIONADOS.map((r) => (
            <a key={r.href} href={r.href} target="_blank" rel="noopener" style={linkBase}>
              {r.label}
            </a>
          ))}
        </div>

        <p style={{ fontSize: 11, lineHeight: 1.6, color: "var(--muted, #6b6560)", margin: 0, maxWidth: 620 }}>
          The Dental Review es editada en Buenos Aires por el equipo de AM Estética Dental. Las
          notas que mencionan a la clínica o a su director lo hacen con esa relación declarada.
        </p>

        <span style={{ fontSize: 10, color: "var(--muted, #6b6560)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          © 2026 The Dental Review · Buenos Aires, Argentina
        </span>

      </div>
    </footer>
  );
}
