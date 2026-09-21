import { notasPorTema } from "@/lib/prensa";

/**
 * Las notas de prensa de UN tema, para colgar dentro de la página de ese tema.
 *
 * Por qué existe: las 15 apariciones vivían todas juntas en /prensa, que es la
 * página que menos visitas tiene del sitio. Alguien que está leyendo la página
 * de precio de bruxismo y duda si el tratamiento es serio no va a ir a buscar
 * el archivo de prensa: la prueba tiene que estar ahí, en el momento de la
 * duda. Que La Nación e Infobae hayan llamado al Dr. Merino para hablar de
 * bruxismo dice más que cualquier adjetivo que podamos escribir nosotros.
 *
 * Muestra la frase textual cuando existe, y el resumen cuando no. Nunca
 * aproxima una cita.
 */
export default function PrensaTema({
    tema,
    titulo,
    bajada,
    limite = 3,
}: {
    tema: string;
    titulo?: string;
    bajada?: string;
    limite?: number;
}) {
    const notas = notasPorTema(tema, limite);
    if (notas.length === 0) return null;

    return (
        <section className="rounded-2xl border border-oro/15 bg-carbon-soft p-7 md:p-8">
            <span className="mb-4 block font-manrope text-[10px] uppercase tracking-[0.3em] text-oro/70">
                En los medios
            </span>
            <h2 className="mb-2 font-manrope text-xl font-light leading-snug text-crema md:text-2xl">
                {titulo ?? "Los medios consultan al Dr. Merino sobre esto"}
            </h2>
            {bajada ? (
                <p className="mb-6 max-w-2xl font-manrope text-sm leading-relaxed text-crema/50">{bajada}</p>
            ) : (
                <div className="mb-6" />
            )}

            <ul className="space-y-4">
                {notas.map((nota) => (
                    <li key={nota.id}>
                        <a
                            href={nota.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border-l-2 border-oro/25 pl-4 transition-colors hover:border-oro/60"
                        >
                            {nota.cita ? (
                                <p className="font-cormorant text-lg italic leading-snug text-crema/85 md:text-xl">
                                    &ldquo;{nota.cita}&rdquo;
                                </p>
                            ) : (
                                <p className="font-manrope text-sm leading-relaxed text-crema/70">{nota.titular}</p>
                            )}
                            <p className="mt-1.5 font-manrope text-[11px] text-crema/40">
                                <span className="text-oro/70">{nota.medio}</span>
                                {" · "}
                                {new Date(nota.fecha + "T12:00:00").toLocaleDateString("es-AR", {
                                    month: "long",
                                    year: "numeric",
                                })}
                                {" · "}
                                {nota.rol === "autor" ? "columna firmada por el Dr. Merino" : "Dr. Merino, consultado"}
                                <span className="ml-2 text-oro/40 transition-colors group-hover:text-oro">leer →</span>
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
