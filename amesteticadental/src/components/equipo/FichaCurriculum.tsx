import type { Curriculum, CvEntrada } from "@/data/equipo";

/**
 * El currículum de un integrante del equipo, dentro de su ficha.
 *
 * Diseño: plegado se ve sólo el título de grado y la casa de estudios —lo que un
 * paciente mira antes de sentarse en el sillón—. El resto (formación, docencia,
 * trayectoria, áreas, idiomas) se abre con un clic.
 *
 * Por qué `<details>` y no un modal: el contenido está en el HTML desde el
 * servidor, así que Google lo indexa y un lector de pantalla lo encuentra. Un
 * modal con JavaScript suele dejar ese texto fuera del HTML inicial, que es
 * justo el texto que le da autoridad a la página.
 */

type Etiquetas = {
  formacion: string;
  docencia: string;
  trayectoria: string;
  areas: string;
  idiomas: string;
  abrir: string;
};

export const ETIQUETAS_CV_ES: Etiquetas = {
  formacion: "Formación",
  docencia: "Docencia",
  trayectoria: "Trayectoria",
  areas: "Áreas de práctica",
  idiomas: "Idiomas",
  abrir: "Currículum completo",
};

export const ETIQUETAS_CV_EN: Etiquetas = {
  formacion: "Education",
  docencia: "Teaching",
  trayectoria: "Experience",
  areas: "Areas of practice",
  idiomas: "Languages",
  abrir: "Full CV",
};

function Bloque({ titulo, entradas }: { titulo: string; entradas?: CvEntrada[] }) {
  if (!entradas?.length) return null;

  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.24em] text-oro/70">{titulo}</h4>
      <ul className="mt-2.5 space-y-2.5">
        {entradas.map((entrada) => (
          <li key={`${entrada.titulo}-${entrada.institucion ?? ""}-${entrada.periodo ?? ""}`}>
            <p className="text-[13px] leading-snug text-crema/85">{entrada.titulo}</p>
            {entrada.institucion ? (
              <p className="mt-0.5 text-[12px] leading-snug text-crema/50">{entrada.institucion}</p>
            ) : null}
            {entrada.periodo ? (
              <p className="mt-0.5 text-[11px] tracking-wide text-crema/35">{entrada.periodo}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Lista({ titulo, items }: { titulo: string; items?: string[] }) {
  if (!items?.length) return null;

  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.24em] text-oro/70">{titulo}</h4>
      <ul className="mt-2.5 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-crema/12 px-2.5 py-1 text-[11px] leading-none text-crema/60"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FichaCurriculum({
  cv,
  etiquetas = ETIQUETAS_CV_ES,
}: {
  cv: Curriculum;
  etiquetas?: Etiquetas;
}) {
  return (
    <details className="group mt-4 border-t border-oro/12 pt-3.5">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-3 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0">
          <span className="block text-[13px] font-medium leading-snug text-crema/85">{cv.titulo}</span>
          <span className="mt-0.5 block text-[11px] leading-snug text-crema/45">{cv.universidad}</span>
        </span>
        <span className="mt-0.5 flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-oro transition-colors group-hover:text-oro-light">
          {etiquetas.abrir}
          <svg
            aria-hidden="true"
            viewBox="0 0 10 6"
            className="h-[6px] w-[10px] transition-transform duration-300 group-open:rotate-180"
          >
            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>

      <div className="mt-5 space-y-5 border-l border-oro/15 pl-4">
        {cv.perfil ? <p className="text-[13px] leading-relaxed text-crema/62">{cv.perfil}</p> : null}
        <Bloque titulo={etiquetas.formacion} entradas={cv.formacion} />
        <Bloque titulo={etiquetas.docencia} entradas={cv.docencia} />
        <Bloque titulo={etiquetas.trayectoria} entradas={cv.trayectoria} />
        <Lista titulo={etiquetas.areas} items={cv.areas} />
        <Lista titulo={etiquetas.idiomas} items={cv.idiomas} />
      </div>
    </details>
  );
}
