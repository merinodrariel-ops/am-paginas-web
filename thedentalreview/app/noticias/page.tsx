import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noticias de odontología estética y digital",
  description: "Actualidad, tecnología, mercado y técnicas emergentes en odontología estética, implantología y rehabilitación oral.",
  alternates: { canonical: "https://www.thedentalreview.com/noticias" },
};

const NEWS = [
  {
    href: "/noticias/carillas-ultrafinas-additive-dentistry-2026",
    title: "Cada vez se lima menos: el auge de las carillas ultrafinas en 2026",
    description: "La odontología aditiva y la resina impresa en 3D empujan el límite de lo conservador.",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/casos/diseno-sonrisa-diastemas/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental",
    alt: "Carilla dental ultrafina sostenida sobre la yema de un dedo",
  },
  {
    href: "/noticias/mercado-implantes-dentales-digital-2026",
    title: "El implante dental se vuelve digital: un mercado rumbo a los US$ 12.600 millones",
    description: "La planificación digital, la inteligencia artificial y la impresión 3D redefinen el sector.",
    image: "https://res.cloudinary.com/drctvgyqd/image/upload/w_1200,h_800,c_fill,q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires",
    alt: "Rehabilitación oral con implantes dentales y restauraciones cerámicas",
  },
];

export default function NoticiasPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
      <header style={{ borderBottom: "1px solid var(--paper-dim)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none", fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 24, fontWeight: 700 }}>The Dental Review</Link>
          <Link href="/acerca-de" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>Acerca de</Link>
        </div>
      </header>
      <main style={{ maxWidth: 1040, margin: "0 auto", padding: "72px 24px" }}>
        <p style={{ color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.32em", fontSize: 10, marginBottom: 18 }}>Actualidad</p>
        <h1 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 400, fontSize: "clamp(42px, 7vw, 68px)", lineHeight: 1.08, marginBottom: 20 }}>Noticias de odontología</h1>
        <p style={{ maxWidth: 680, color: "var(--muted)", fontSize: 17, lineHeight: 1.7, marginBottom: 56 }}>Tecnología, mercado y nuevas formas de pensar la estética dental y la rehabilitación oral.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
          {NEWS.map((item) => (
            <article key={item.href}>
              <Link href={item.href} style={{ color: "inherit", textDecoration: "none" }}>
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", marginBottom: 22 }}>
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: 28, lineHeight: 1.25, fontWeight: 500, marginBottom: 12 }}>{item.title}</h2>
                <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>{item.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <footer style={{ borderTop: "1px solid var(--paper-dim)", padding: "28px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", fontSize: 11, color: "var(--muted)" }}>© 2026 The Dental Review · Buenos Aires, Argentina</div>
      </footer>
    </div>
  );
}
