export type Categoria =
    | "Carillas de porcelana"
    | "Alineadores"
    | "Diseño de sonrisa"
    | "Blanqueamiento"
    | "Implantes"
    | "Apiñamiento"
    | "Agenesia"
    | "Fluorosis"
    | "Bruxismo"
    | "Erosión dentaria";

export interface FotoCaso {
    src: string;
    alt: string;
    caption?: string;
}

export interface Caso {
    slug: string;
    titulo: string;
    subtitulo: string;
    descripcion: string; // para SEO meta description
    categorias: Categoria[];
    duracion: string;
    piezas?: string;
    tecnica?: string;
    fotoPortada: FotoCaso; // foto principal — la que aparece en la galería
    fotos: FotoCaso[];
    copy: string; // HTML o markdown — texto principal del caso
    copyRedes?: string;
    precio?: {
        total: string;         // "USD 20.000"
        porPieza?: string;     // "USD 1.000 por pieza"
        nota?: string;         // texto aclaratorio opcional
    };
    publicado: boolean;
}

export const CASOS: Caso[] = [
    {
        slug: "20-carillas-porcelana-apinamiento-sin-ortodoncia",
        titulo: "20 carillas en 10 días. Sin ortodoncia. Sin blanqueamiento. Sin que nadie lo note.",
        subtitulo: "Apiñamiento residual + desgaste + color — resuelto solo con la forma de las carillas",
        descripcion: "Paciente con apiñamiento residual y dientes desgastados. 20 carillas de porcelana mínimamente invasivas en 10 días, sin ortodoncia previa. Resultado natural — ningún amigo se dio cuenta.",
        categorias: ["Carillas de porcelana", "Apiñamiento"],
        duracion: "10 días",
        piezas: "20 piezas (10 superiores + 10 inferiores)",
        tecnica: "Mínimamente invasiva, desgaste controlado",
        fotoPortada: {
            src: "/images/casos/federico/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental.png",
            alt: "Antes y después diseño de sonrisa con 20 carillas de porcelana sin ortodoncia — AM Estética Dental",
        },
        fotos: [
            {
                src: "/images/casos/federico/carillas-porcelana-20-piezas-mordida-antes-despues-am-estetica-dental.png",
                alt: "Antes y después — vista intraoral de mordida con 20 carillas de porcelana — AM Estética Dental",
                caption: "Vista intraoral — mordida antes y después",
            },
            {
                src: "/images/casos/federico/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental.png",
                alt: "Antes y después sonrisa con labios — 20 carillas de porcelana sin ortodoncia — AM Estética Dental",
                caption: "Sonrisa frontal antes y después",
            },
            {
                src: "/images/casos/federico/carillas-porcelana-arcada-superior-antes-despues-am-estetica-dental.png",
                alt: "Arcada superior antes y después — carillas de porcelana mínimamente invasivas — AM Estética Dental",
                caption: "Arcada superior",
            },
            {
                src: "/images/casos/federico/carillas-porcelana-arcada-inferior-antes-despues-am-estetica-dental.png",
                alt: "Arcada inferior antes y después — carillas de porcelana mínimamente invasivas — AM Estética Dental",
                caption: "Arcada inferior",
            },
            {
                src: "/images/casos/federico/diseno-sonrisa-carillas-sin-ortodoncia-antes-am-estetica-dental.png",
                alt: "Estado inicial — apiñamiento y desgaste dental antes de carillas — AM Estética Dental",
                caption: "Estado inicial",
            },
            {
                src: "/images/casos/federico/carillas-lentes-contacto-dental-sonrisa-natural-resultado-am-estetica-dental.png",
                alt: "Resultado final — sonrisa natural con lentes de contacto dental — AM Estética Dental",
                caption: "Resultado final",
            },
        ],
        copy: `Vino con dientes desgastados, un leve apiñamiento y años de ortodoncia encima. No quería volver a ponerse brackets. Quería verse bien — pero natural.

En 10 días le hicimos 20 lentes de contacto dental, ampliamos su sonrisa incorporando los premolares que casi no se veían, corregimos el apiñamiento con la forma misma de las carillas y mejoramos el color un tono y medio.

El resultado: una sonrisa que parece haber sido así siempre. Ningún amigo suyo se dio cuenta de que se había hecho algo. Eso, para nosotros, es la definición de éxito.`,
        copyRedes: `Él tenía los dientes desgastados, amarillos y con un apiñamiento que le molestaba desde siempre. Ya había hecho ortodoncia. No quería repetirla.

Le hicimos 20 carillas de porcelana, ampliamos su sonrisa y mejoramos el color un tonito.

10 días. Sin cirugía. Sin brackets. Sin que nadie note que se hizo algo.

Eso es lo que más nos gusta lograr.`,
        precio: {
            total: "USD 20.000",
            porPieza: "USD 1.000 por pieza",
            nota: "20 lentes de contacto dental · porcelana feldespática · técnica mínimamente invasiva",
        },
        publicado: true,
    },
];

export function getCasoBySlug(slug: string): Caso | undefined {
    return CASOS.find((c) => c.slug === slug && c.publicado);
}

export function getCasosPublicados(): Caso[] {
    return CASOS.filter((c) => c.publicado);
}

export function getCasosByCategoria(categoria: Categoria): Caso[] {
    return CASOS.filter((c) => c.publicado && c.categorias.includes(categoria));
}
