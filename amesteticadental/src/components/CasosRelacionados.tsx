import Image from "next/image";
import Link from "next/link";
import type { Caso } from "@/data/casos";

// Casos relacionados al pie de cada caso clínico.
//
// Cada /casos/[slug] era un callejón sin salida: entraba un solo enlace (desde
// la galería) y salía uno solo (de vuelta a la galería). Con 13 casos, eso son
// 13 hojas colgando de un único nodo. Enlazarlos entre sí convierte la galería
// en una malla y le da a Google una razón para rastrear el caso 8 después del 1.
//
// El criterio es la categoría compartida, no el azar: un paciente que llegó por
// un caso de gingivectomía quiere ver otro de gingivectomía.

const COPY = {
    es: { titulo: "Otros casos", ver: "Ver caso" },
    en: { titulo: "More cases", ver: "View case" },
};

function puntaje(caso: Caso, actual: Caso): number {
    const categorias = new Set(actual.categorias);
    return caso.categorias.filter((categoria) => categorias.has(categoria)).length;
}

export default function CasosRelacionados({
    casos,
    actual,
    lang = "es",
    cantidad = 3,
}: {
    casos: Caso[];
    actual: Caso;
    lang?: "es" | "en";
    cantidad?: number;
}) {
    const t = COPY[lang];

    const candidatos = casos
        .filter((caso) => caso.slug !== actual.slug)
        // En inglés sólo se enlazan los casos efectivamente traducidos: los demás
        // se sirven en /en/cases con noindex + canonical al español, y mandarle
        // enlaces a una página que pide no ser indexada es tirar el enlace.
        .filter((caso) => (lang === "en" ? caso.tieneTraduccionEn : true));

    if (candidatos.length === 0) return null;

    // Ordenar sólo por categoría compartida dejaba casos fuera del top 3 de todos:
    // dos casos en inglés seguían con un único enlace entrante después de sumar el
    // bloque. Por eso el sucesor circular entra siempre: garantiza que la galería
    // forme un ciclo y que ningún caso quede sin al menos una entrada desde otro.
    // Por slug, no por identidad: `casos` y `actual` vienen de dos llamadas
    // distintas al loader, así que son objetos diferentes y un indexOf() sobre el
    // objeto devuelve -1 para todos — con lo que todos los casos elegían el mismo
    // sucesor y tres seguían sin enlaces entrantes.
    const posicionActual = casos.findIndex((caso) => caso.slug === actual.slug);
    const sucesor =
        candidatos.find(
            (caso) => casos.findIndex((c) => c.slug === caso.slug) > posicionActual,
        ) ?? candidatos[0];

    const porAfinidad = [...candidatos]
        .filter((caso) => caso.slug !== sucesor.slug)
        .sort((a, b) => puntaje(b, actual) - puntaje(a, actual))
        .slice(0, Math.max(0, cantidad - 1));

    // El sucesor va segundo: el primer lugar sigue siendo el caso más afín, que es
    // el que el paciente quiere ver.
    const relacionados = [porAfinidad[0], sucesor, ...porAfinidad.slice(1)].filter(
        (caso): caso is Caso => Boolean(caso),
    );

    return (
        <section className="mt-20 border-t border-crema/5 pt-12">
            <h2 className="mb-8 font-manrope text-xs uppercase tracking-[0.3em] text-oro/60">
                {t.titulo}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {relacionados.map((caso) => (
                    <Link
                        key={caso.slug}
                        href={lang === "en" ? `/en/cases/${caso.slug}` : `/casos/${caso.slug}`}
                        className="group block"
                    >
                        <article className="overflow-hidden rounded-2xl border border-crema/5 bg-carbon transition-colors duration-300 hover:border-oro/20">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={caso.fotoPortada.src}
                                    alt={caso.fotoPortada.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent" />
                            </div>
                            <div className="p-5">
                                <h3 className="mb-2 font-manrope text-sm font-light leading-snug text-crema transition-colors duration-200 group-hover:text-oro">
                                    {caso.titulo}
                                </h3>
                                <span className="font-manrope text-[10px] uppercase tracking-widest text-oro/60">
                                    {t.ver} →
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
