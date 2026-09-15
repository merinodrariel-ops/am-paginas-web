/**
 * Firma de autor de las notas de The Dental Review.
 *
 * Hasta septiembre de 2026 las notas iban firmadas por "Redacción TDR", una
 * redacción que no existe: las escribe el Dr. Merino, que además edita la
 * publicación. Firmarlas con su nombre y su matrícula es lo honesto y, de paso,
 * hace que cada nota sume al perfil de la Persona en vez de a una entidad
 * anónima — el `author` del schema de cada nota apunta al mismo @id que el
 * resto de la red (arielmerino.com/#person).
 *
 * La matrícula va visible a propósito: una afirmación clínica firmada por un
 * matriculado se puede contrastar contra un registro público. Es el tipo de
 * dato que un motor de respuesta puede citar y un lector puede verificar.
 */

const PERSONA_URL = "https://www.arielmerino.com";

export const AUTOR_ID = "https://www.arielmerino.com/#person";
export const MATRICULA = "MN 34.869";

/** `author` para el JSON-LD de cada nota. Mismo @id en toda la red. */
export const autorSchema = {
  "@type": "Person",
  "@id": AUTOR_ID,
  name: "Ariel Merino",
  url: PERSONA_URL,
  jobTitle: "Odontólogo",
  identifier: MATRICULA,
  sameAs: "https://www.wikidata.org/wiki/Q134287655",
};

export default function Firma({ seccion }: { seccion: string }) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--paper-dim, #e8e4da)",
        borderBottom: "1px solid var(--paper-dim, #e8e4da)",
        padding: "16px 0",
        marginBottom: 40,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <div>
        <div style={{ fontSize: 12, color: "var(--ink, #0e0e0e)", fontWeight: 500 }}>
          <a
            href={PERSONA_URL}
            target="_blank"
            rel="noopener noreferrer author"
            style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--paper-dim, #e8e4da)" }}
          >
            Dr. Ariel Merino
          </a>
        </div>
        <div style={{ fontSize: 11, color: "var(--muted, #6b6560)", marginTop: 3 }}>
          Odontólogo · {MATRICULA} · Editor de The Dental Review
        </div>
      </div>
      <div style={{ fontSize: 11, color: "var(--muted, #6b6560)" }}>{seccion}</div>
    </div>
  );
}
