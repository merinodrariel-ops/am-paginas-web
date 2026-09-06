import type { Metadata } from "next";
import Link from "next/link";
import { PRENSA, PERSON_ID, SITE } from "../site-data";
import { Nav, Hero, Seccion, Footer, Jsonld, breadcrumb, oro, crema, cremaDim, serif } from "../ui";

export const metadata: Metadata = {
  title: "Prensa y publicaciones",
  description:
    "El Dr. Ariel Merino en Forbes Argentina, La Nación, Ámbito, Infobae y Somos Ohlalá: columnas firmadas y participaciones como especialista consultado en estética dental.",
  alternates: { canonical: `${SITE}/prensa` },
};

const coleccion = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${SITE}/prensa`,
  name: "Prensa y publicaciones del Dr. Ariel Merino",
  about: { "@id": PERSON_ID },
  hasPart: PRENSA.map((n) => ({
    "@type": "NewsArticle",
    headline: n.titular,
    url: n.href,
    datePublished: n.año,
    publisher: { "@type": "Organization", name: n.medio },
    mentions: { "@id": PERSON_ID },
  })),
};

export default function PrensaPage() {
  const firmadas = PRENSA.filter((n) => n.rol === "Columna firmada");
  const consultado = PRENSA.filter((n) => n.rol !== "Columna firmada");

  return (
    <>
      <Jsonld data={coleccion} />
      <Jsonld
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "Prensa", path: "/prensa" },
        ])}
      />
      <Nav actual="/prensa" />
      <main>
        <Hero
          eyebrow="Prensa"
          titulo="Publicado y consultado por"
          destacado="los medios de referencia."
          bajada="Columnas firmadas en La Nación y Ámbito, cobertura en Forbes Argentina y participaciones como especialista consultado en Infobae y Somos Ohlalá. Cada nota está enlazada a su fuente original: se puede verificar una por una."
        />

        <Seccion eyebrow="Autoría" titulo="Columnas firmadas">
          <div style={{ display: "grid", gap: 24 }}>
            {firmadas.map((n) => (
              <Nota key={n.href} nota={n} />
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="Cobertura" titulo="Como especialista consultado">
          <div style={{ display: "grid", gap: 24 }}>
            {consultado.map((n) => (
              <Nota key={n.href} nota={n} />
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="Para periodistas" titulo="Consultas de prensa">
          <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim, maxWidth: 700, marginBottom: 20 }}>
            Si necesitás una fuente especializada en estética dental, carillas, diseño de sonrisa digital o bruxismo,
            escribime. Respondo consultas de medios y aporto material clínico cuando la nota lo requiere.
          </p>
          <Link href="/contacto" style={{ fontSize: 13, letterSpacing: "0.1em", color: oro, textDecoration: "none" }}>
            Datos de contacto →
          </Link>
        </Seccion>
      </main>
      <Footer />
    </>
  );
}

function Nota({ nota }: { nota: (typeof PRENSA)[number] }) {
  return (
    <a
      href={nota.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        border: "1px solid rgba(201,169,110,0.14)",
        borderRadius: 16,
        padding: 24,
        textDecoration: "none",
        maxWidth: 820,
      }}
    >
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "baseline", marginBottom: 10 }}>
        <span style={{ fontFamily: serif, fontSize: 18, color: oro }}>{nota.medio}</span>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(168,159,146,0.75)" }}>
          {nota.rol} · {nota.año}
        </span>
      </div>
      <h3 style={{ fontSize: 17, fontWeight: 400, color: crema, lineHeight: 1.45, marginBottom: 10 }}>{nota.titular}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.75, color: cremaDim, marginBottom: 12 }}>{nota.extracto}</p>
      <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: oro }}>Leer la nota →</span>
    </a>
  );
}
