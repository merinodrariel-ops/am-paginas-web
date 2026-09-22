import Image from "next/image";
import Link from "next/link";
import { CASOS_STATIC, CASOS_STATIC_EN } from "@/data/casosStatic";

/**
 * Una franja de casos reales de la clinica, para las paginas que eran solo
 * texto.
 *
 * Sale de `CASOS_STATIC`, que ya estaba en el repo —diecisiete fotos curadas,
 * con su alt escrito— y no lo usaba ninguna pagina. Son fotos del consultorio:
 * en un sitio clinico los resultados van reales o no van, asi que esto no se
 * ilustra con nada generado.
 *
 * Quedan afuera a proposito las entradas cuyo pie es un "Antes" o un "Despues"
 * pelado. En la galeria van una al lado de la otra y se leen como el par que
 * son, pero recortadas de a tres en otra pagina podrian caer separadas y dar a
 * entender que una es el resultado de la otra cuando no lo es.
 */
const PIE_SUELTO = /^(antes|después|despues|before|after)$/i;
const CURADOS = CASOS_STATIC.filter((c) => !PIE_SUELTO.test(c.descripcion.trim()));

const UI = {
    es: {
        eyebrow: "Antes y después",
        titulo: "Casos reales de la clínica",
        ver: "Ver todos los casos →",
        pie: "Casos del Dr. Ariel Merino, fotografiados en la clínica de Puerto Madero.",
        href: "/casos-antes-y-despues",
    },
    en: {
        eyebrow: "Before and after",
        titulo: "Real cases from the practice",
        ver: "See every case →",
        pie: "Cases by Dr. Ariel Merino, photographed at the Puerto Madero practice.",
        href: "/en/before-after",
    },
} as const;

type Props = {
    /** Se queda con los casos cuyo tratamiento contenga alguno de estos textos, en cualquiera de los dos idiomas. */
    tratamientos?: string[];
    cantidad?: number;
    lang?: "es" | "en";
    eyebrow?: string;
    titulo?: string;
    bajada?: string;
};

export default function CasosBanda({
    tratamientos,
    cantidad = 3,
    lang = "es",
    eyebrow,
    titulo,
    bajada,
}: Props) {
    const ui = UI[lang];

    // Se compara contra los dos idiomas para que quien llama pueda filtrar en el
    // que le quede mas a mano sin tener que saber cual es el campo canonico.
    const coincide = (c: (typeof CURADOS)[number]) => {
        if (!tratamientos?.length) return true;
        const en = CASOS_STATIC_EN[c.id]?.tratamiento ?? "";
        const heno = `${c.tratamiento} ${en}`.toLowerCase();
        return tratamientos.some((t) => heno.includes(t.toLowerCase()));
    };

    // Si el filtro deja menos de los que se piden, se completa con el resto:
    // mejor un caso de otra categoria que un hueco en la grilla.
    const elegidos = [...CURADOS.filter(coincide), ...CURADOS.filter((c) => !coincide(c))].slice(0, cantidad);

    return (
        <section className="not-prose rounded-2xl border border-oro/15 bg-carbon-soft p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <span className="mb-2 block font-manrope text-[10px] uppercase tracking-[0.34em] text-oro">
                        {eyebrow ?? ui.eyebrow}
                    </span>
                    <h2 className="font-manrope text-xl font-light text-crema md:text-2xl">{titulo ?? ui.titulo}</h2>
                    {bajada && <p className="mt-2 max-w-xl font-manrope text-sm leading-relaxed text-crema/55">{bajada}</p>}
                </div>
                <Link
                    href={ui.href}
                    className="whitespace-nowrap font-manrope text-xs text-oro/70 transition-colors hover:text-oro"
                >
                    {ui.ver}
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {elegidos.map((c) => {
                    const en = CASOS_STATIC_EN[c.id];
                    const alt = lang === "en" && en ? en.alt : c.alt;
                    const pie = lang === "en" && en ? en.descripcion : c.descripcion;
                    return (
                        <Link
                            key={c.id}
                            href={ui.href}
                            className="group relative block aspect-square overflow-hidden rounded-xl border border-crema/5"
                        >
                            <Image
                                src={c.src}
                                alt={alt}
                                fill
                                sizes="(max-width: 768px) 45vw, 280px"
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-carbon/5 to-transparent" />
                            <span className="absolute inset-x-3 bottom-3 font-manrope text-[10px] uppercase tracking-[0.2em] text-crema/75">
                                {pie}
                            </span>
                        </Link>
                    );
                })}
            </div>

            <p className="mt-4 font-manrope text-[11px] text-crema/35">{ui.pie}</p>
        </section>
    );
}
