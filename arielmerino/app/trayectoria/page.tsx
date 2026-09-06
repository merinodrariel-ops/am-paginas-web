import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FORMACION, DOCENCIA, MATRICULA, PERSON_ID, SITE, ANIOS_TRAYECTORIA } from "../site-data";
import { Nav, Hero, Seccion, Footer, CtaWhatsapp, Jsonld, breadcrumb, oro, crema, cremaDim, serif } from "../ui";

export const metadata: Metadata = {
  title: "Trayectoria y formación",
  description:
    "Formación, docencia y trayectoria del Dr. Ariel Merino: Odontología por la UCALP, posgrado en Rehabilitación Oral y Estética de la AOA, ex docente de Operatoria Dental y disertante en más de 15 países.",
  alternates: { canonical: `${SITE}/trayectoria` },
};

const perfilProfesional = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE}/trayectoria`,
  name: "Trayectoria y formación del Dr. Ariel Merino",
  mainEntity: { "@id": PERSON_ID },
};

export default function TrayectoriaPage() {
  return (
    <>
      <Jsonld data={perfilProfesional} />
      <Jsonld
        data={breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "Trayectoria", path: "/trayectoria" },
        ])}
      />
      <Nav actual="/trayectoria" />
      <main>
        <Hero
          eyebrow={`Perfil profesional · ${MATRICULA}`}
          titulo={`${ANIOS_TRAYECTORIA} años enseñando lo mismo que`}
          destacado="practico todos los días."
          bajada="Me recibí de odontólogo en la Universidad Católica de La Plata en 2010 y desde entonces me dediqué de forma casi exclusiva a la estética dental. Fui docente de Operatoria Dental en la misma facultad donde estudié, hice el posgrado en Rehabilitación Oral y Estética en la Asociación Odontológica Argentina, y desde hace más de una década formo odontólogos en diseño de sonrisa y carillas en más de quince países."
        />

        <Seccion eyebrow="Formación" titulo="Credenciales verificables">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
            {FORMACION.map((f, i) => (
              <div key={f.titulo} style={{ display: "flex", gap: 16 }}>
                <span style={{ fontFamily: serif, fontStyle: "italic", color: "rgba(201,169,110,0.55)", fontSize: 28, lineHeight: 1 }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: crema, marginBottom: 6 }}>
                    {f.titulo}
                    {f.año ? <span style={{ color: oro, fontWeight: 400 }}> · {f.año}</span> : null}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: cremaDim }}>{f.detalle}</p>
                </div>
              </div>
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="Docencia" titulo="Enseñar obliga a explicar por qué">
          <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim, maxWidth: 700, marginBottom: 36 }}>
            La parte de mi trabajo que más ordenó mi criterio clínico no fue tratar pacientes: fue tener que explicarle a
            otro odontólogo por qué se hace de una manera y no de otra. Enseñar no deja lugar a la costumbre.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
            {DOCENCIA.map((d) => (
              <div key={d.titulo} style={{ border: "1px solid rgba(201,169,110,0.14)", borderRadius: 16, padding: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: crema, marginBottom: 4 }}>{d.titulo}</h3>
                <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: oro, marginBottom: 12 }}>
                  {d.institucion}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: cremaDim }}>{d.detalle}</p>
              </div>
            ))}
          </div>
        </Seccion>

        <Seccion eyebrow="Práctica clínica" titulo="AM Estética Dental, Puerto Madero">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 36, alignItems: "center" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(201,169,110,0.15)" }}>
              <Image
                src="https://res.cloudinary.com/drctvgyqd/image/upload/w_800,h_1000,c_fill,g_face,q_auto,f_auto/equipo/dr-ariel-merino-director-clinico-am-estetica-dental-puerto-madero"
                alt="Dr. Ariel Merino, odontólogo estético y director de AM Estética Dental en Puerto Madero"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim, marginBottom: 18 }}>
                Fundé AM Estética Dental para poder trabajar de una manera que en un consultorio convencional no era
                posible: con el laboratorio dental adentro de la clínica. El ceramista que fabrica tus carillas te ve la
                cara, no una foto. Eso cambia dos cosas concretas —el color y los tiempos— y son justamente las dos que
                más se quejan los pacientes cuando el trabajo se terceriza.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: cremaDim, marginBottom: 28 }}>
                Es la única clínica dental argentina que apareció en las páginas de Forbes. Atiendo personalmente los
                casos de estética y diseño de sonrisa.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <CtaWhatsapp mensaje="Hola Dr. Merino, lo contacto desde arielmerino.com para consultar por un caso." texto="Consultar un caso →" />
                <a
                  href="https://www.amesteticadental.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(201,169,110,0.3)", color: oro, padding: "14px 28px", borderRadius: 100, fontSize: 13, textDecoration: "none" }}
                >
                  Ver la clínica →
                </a>
              </div>
            </div>
          </div>
        </Seccion>

        <Seccion eyebrow="Seguir leyendo">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              ["Carillas de porcelana", "/carillas-de-porcelana"],
              ["Prensa y publicaciones", "/prensa"],
              ["Contacto", "/contacto"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{ border: "1px solid rgba(201,169,110,0.18)", borderRadius: 100, padding: "10px 22px", fontSize: 13, color: cremaDim, textDecoration: "none" }}
              >
                {label} →
              </Link>
            ))}
          </div>
        </Seccion>
      </main>
      <Footer />
    </>
  );
}
