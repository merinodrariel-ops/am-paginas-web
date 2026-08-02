export type Categoria = string;

export interface FotoCaso {
    src: string;
    alt: string;
    caption?: string;
}

// Traducción al inglés de un caso curado. Si falta, la galería en inglés cae al
// español para ese campo (mejor mostrar el original que una traducción a medias).
export interface CasoEn {
    titulo: string;
    subtitulo: string;
    descripcion: string;
    seoTitle?: string;
    seoDescription?: string;
    categorias?: string[];
    duracion?: string;
    piezas?: string;
    tecnica?: string;
    copy: string;
    /** alt/caption por foto, en el mismo orden que `fotos`. */
    fotos?: { alt: string; caption?: string }[];
}

export interface Caso {
    slug: string;
    titulo: string;
    subtitulo: string;
    descripcion: string; // para SEO meta description
    seoTitle?: string;
    seoDescription?: string;
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
    videoUrl?: string;         // YouTube embed URL
    videoAspect?: "16/9" | "9/16"; // horizontal (16/9) o Short vertical (9/16)
    publicado: boolean;
    en?: CasoEn;
}

/** Devuelve el caso con los campos en inglés aplicados, si existen. */
export function localizeCaso(caso: Caso, lang: "es" | "en"): Caso {
    if (lang !== "en" || !caso.en) return caso;
    const t = caso.en;
    const fotos = caso.fotos.map((foto, i) => {
        const tf = t.fotos?.[i];
        return tf ? { ...foto, alt: tf.alt, caption: tf.caption ?? foto.caption } : foto;
    });
    return {
        ...caso,
        titulo: t.titulo,
        subtitulo: t.subtitulo,
        descripcion: t.descripcion,
        seoTitle: t.seoTitle ?? caso.seoTitle,
        seoDescription: t.seoDescription ?? caso.seoDescription,
        categorias: (t.categorias as Caso["categorias"]) ?? caso.categorias,
        duracion: t.duracion ?? caso.duracion,
        piezas: t.piezas ?? caso.piezas,
        tecnica: t.tecnica ?? caso.tecnica,
        copy: t.copy,
        fotoPortada: fotos[0] ?? caso.fotoPortada,
        fotos,
    };
}

export const CASOS: Caso[] = [
    {
        slug: "rehabilitacion-ceramica-ambos-maxilares-sin-cirugia-ortodoncia",
        titulo: "Una transformación que lleva más de 13 años en boca.",
        subtitulo: "Apiñamiento dentario resuelto con diseño de sonrisa y rehabilitación cerámica en ambos maxilares, sin cirugía y sin ortodoncia",
        descripcion: "Caso clínico de apiñamiento dentario tratado sin cirugía y sin ortodoncia mediante diseño de sonrisa y rehabilitación con cerámicas en ambos maxilares. Resultado con más de 13 años de seguimiento por el Dr. Ariel Merino en AM Estética Dental, Puerto Madero.",
        seoTitle: "Rehabilitación Cerámica sin Cirugía ni Ortodoncia",
        seoDescription: "Antes y después de una rehabilitación cerámica en ambos maxilares, sin cirugía ni ortodoncia, con más de 13 años de seguimiento en boca.",
        categorias: ["Rehabilitación oral", "Diseño de sonrisa", "Carillas de porcelana", "Apiñamiento"],
        duracion: "13+ años en boca",
        piezas: "Rehabilitación de ambos maxilares",
        tecnica: "Diseño de sonrisa y restauraciones cerámicas, sin cirugía ni ortodoncia",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/01-carillas-dentales-antes-despues-retrato-am-estetica-dental-puerto-madero.png",
            alt: "Antes y después facial de rehabilitación cerámica en ambos maxilares sin cirugía ni ortodoncia, con más de 13 años de seguimiento — Dr. Ariel Merino, AM Estética Dental",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/01-carillas-dentales-antes-despues-retrato-am-estetica-dental-puerto-madero.png",
                alt: "Antes y después facial de rehabilitación cerámica en ambos maxilares sin cirugía ni ortodoncia, con más de 13 años de seguimiento — Dr. Ariel Merino, AM Estética Dental",
                caption: "Antes y después facial — más de 13 años de seguimiento",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/02-carillas-dentales-estado-inicial-retrato-am-estetica-dental-puerto-madero.png",
                alt: "Estado inicial de paciente con apiñamiento dentario antes de una rehabilitación cerámica sin cirugía ni ortodoncia",
                caption: "Estado inicial — apiñamiento dentario",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/03-carillas-dentales-resultado-final-retrato-am-estetica-dental-puerto-madero.png",
                alt: "Resultado facial de diseño de sonrisa y rehabilitación cerámica después de más de 13 años en boca",
                caption: "Resultado facial de largo plazo",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/04-carillas-dentales-antes-despues-sonrisa-am-estetica-dental-puerto-madero.png",
                alt: "Comparación de sonrisa antes y después de rehabilitación cerámica en ambos maxilares sin ortodoncia",
                caption: "Sonrisa antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/05-carillas-ceramicas-secuencia-clinica-modelo-prueba-resultado-am-estetica-dental.png",
                alt: "Secuencia clínica de diseño de sonrisa y rehabilitación oral con cerámicas en ambos maxilares",
                caption: "Modelo, estado inicial y resultado clínico",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-dentales-rehabilitacion-estetica-sonrisa/06-carillas-ceramicas-modelo-y-laminados-dentales-am-estetica-dental.png",
                alt: "Modelo dental y restauraciones cerámicas utilizadas en la rehabilitación estética de ambos maxilares",
                caption: "Modelo dental y restauraciones cerámicas",
            },
        ],
        copy: `Fue una de nuestras primeras pacientes. Llegó a AM Estética Dental con sus dientes apiñados y el deseo de transformar su sonrisa, pero con dos decisiones muy claras: no quería atravesar una cirugía ni realizar un tratamiento de ortodoncia.

A partir de un diagnóstico integral, diseñamos una rehabilitación oral para ambos maxilares. El tratamiento se realizó con restauraciones cerámicas, buscando reorganizar visualmente la sonrisa, mejorar sus proporciones y construir un resultado armónico con sus rasgos faciales.

El antes y después muestra una transformación profunda. Sin embargo, el valor más importante de este caso aparece con el paso del tiempo: la rehabilitación lleva más de 13 años en boca.

Para nosotros es un caso especialmente significativo. No solo fue parte de los primeros años de AM Estética Dental, sino que también permite mostrar la importancia del diagnóstico, la planificación y el seguimiento en una rehabilitación cerámica de alta complejidad.

La paciente continúa agradecida por el cambio logrado y su sonrisa sigue siendo una de las transformaciones más representativas de nuestra trayectoria.

Los resultados corresponden a este caso clínico particular. Cada tratamiento requiere diagnóstico y planificación individual.`,
        copyRedes: `Dientes apiñados. Sin cirugía. Sin ortodoncia.

Realizamos un diseño de sonrisa y una rehabilitación cerámica en ambos maxilares.

Hoy, más de 13 años después, el resultado sigue en boca.

Una de nuestras primeras pacientes y una de las transformaciones más representativas de nuestra trayectoria.`,
        precio: {
            total: "USD 20.000–26.000",
            nota: "Estimación orientativa al 15 de junio de 2026 para una rehabilitación comparable. El valor definitivo depende del diagnóstico, la cantidad de piezas, los materiales y la complejidad clínica.",
        },
        publicado: true,
        en: {
            titulo: "A transformation that has been in place for more than 13 years.",
            subtitulo: "Dental crowding resolved with smile design and ceramic rehabilitation of both arches — no surgery, no orthodontics",
            descripcion: "A clinical case of dental crowding treated without surgery or orthodontics, through smile design and ceramic rehabilitation of both arches. A result with more than 13 years of follow-up by Dr. Ariel Merino at AM Estética Dental, Puerto Madero.",
            seoTitle: "Ceramic Rehabilitation Without Surgery or Orthodontics",
            seoDescription: "Before and after of a ceramic rehabilitation of both arches, without surgery or orthodontics, with more than 13 years in the mouth.",
            categorias: ["Full rehabilitation", "Smile design", "Porcelain veneers", "Crowding"],
            duracion: "13+ years in place",
            piezas: "Rehabilitation of both arches",
            tecnica: "Smile design and ceramic restorations, without surgery or orthodontics",
            copy: `She was one of our very first patients. She came to AM Estética Dental with crowded teeth and the desire to transform her smile, but with two very clear conditions: she did not want to go through surgery, and she did not want orthodontic treatment.

Starting from a comprehensive diagnosis, we designed an oral rehabilitation for both arches. The treatment was carried out with ceramic restorations, aiming to visually reorganise the smile, improve its proportions and build a result in harmony with her facial features.

The before and after shows a profound transformation. But the most important value of this case appears with the passing of time: the rehabilitation has been in her mouth for more than 13 years.

For us it is a particularly meaningful case. Not only was it part of the early years of AM Estética Dental, it also lets us show the importance of diagnosis, planning and follow-up in a high-complexity ceramic rehabilitation.

The patient remains grateful for the change, and her smile is still one of the most representative transformations of our trajectory.

Results correspond to this particular clinical case. Every treatment requires individual diagnosis and planning.`,
            fotos: [
                { alt: "Facial before and after of a ceramic rehabilitation of both arches without surgery or orthodontics, with more than 13 years of follow-up — Dr. Ariel Merino, AM Estética Dental", caption: "Facial before and after — more than 13 years of follow-up" },
                { alt: "Starting point of a patient with dental crowding before a ceramic rehabilitation without surgery or orthodontics", caption: "Starting point — dental crowding" },
                { alt: "Facial result of smile design and ceramic rehabilitation after more than 13 years in place", caption: "Long-term facial result" },
                { alt: "Smile comparison before and after ceramic rehabilitation of both arches without orthodontics", caption: "Smile before and after" },
                { alt: "Clinical sequence of smile design and oral rehabilitation with ceramics on both arches", caption: "Model, starting point and clinical result" },
                { alt: "Dental model and ceramic restorations used in the aesthetic rehabilitation of both arches", caption: "Dental model and ceramic restorations" },
            ],
        },
    },
    {
        slug: "diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan",
        titulo: "Vino de Milán con la sonrisa quebrada. La resolvimos en una semana.",
        subtitulo: "Plano de sonrisa quebrado + bordes incisales fracturados — diseño de sonrisa completo con carillas cerámicas AM",
        descripcion: "Caso extremo de diseño de sonrisa con plano quebrado y bordes incisales fracturados. Paciente de Italia, residente en Milan, tratado en una semana con carillas ceramicas AM por Dr. Ariel Merino en AM Estetica Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Diseño de Sonrisa con Carillas Cerámicas",
        seoDescription: "Caso de diseño de sonrisa con carillas cerámicas en un paciente de Milán. Corrección de plano incisal y bordes en 1 semana por el Dr. Ariel Merino.",
        categorias: ["Diseño de sonrisa", "Carillas de porcelana", "Rehabilitación oral"],
        duracion: "1 semana",
        piezas: "Diseño de sonrisa completo",
        tecnica: "Carillas cerámicas AM, planificación facial y corrección del plano incisal",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/diseno-sonrisa-plano-quebrado-carillas-ceramicas-antes-despues-portada-paciente-italia-milan-dr-ariel-merino-am-estetica-dental",
            alt: "Antes y después diseño de sonrisa por plano quebrado con carillas cerámicas — paciente de Milán — Dr. Ariel Merino AM Estética Dental Puerto Madero",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/diseno-sonrisa-plano-quebrado-carillas-ceramicas-antes-despues-portada-paciente-italia-milan-dr-ariel-merino-am-estetica-dental",
                alt: "Antes y después diseño de sonrisa por plano quebrado con carillas cerámicas — paciente de Milán — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Antes y después — diseño de sonrisa completo",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/diseno-sonrisa-plano-quebrado-foto-inicial-incisivos-bordes-quebrados-paciente-italia-am-estetica-dental",
                alt: "Foto inicial de plano quebrado con incisivos y bordes incisales fracturados — paciente de Italia — AM Estética Dental Buenos Aires",
                caption: "Estado inicial — plano quebrado y bordes incisales",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/diseno-sonrisa-carillas-ceramicas-resultado-final-paciente-italia-milan-dr-ariel-merino",
                alt: "Resultado final diseño de sonrisa con carillas cerámicas en una semana — paciente de Milán — Dr. Ariel Merino",
                caption: "Resultado final — carillas cerámicas AM",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-plano-quebrado-carillas-ceramicas-paciente-italia-milan/labios-antes-despues-diseno-sonrisa-plano-quebrado-carillas-ceramicas-am-estetica-dental-puerto-madero",
                alt: "Labios antes y después diseño de sonrisa con carillas cerámicas por plano quebrado — AM Estética Dental Puerto Madero",
                caption: "Labios — antes y después",
            },
        ],
        copy: `Llegó desde Italia con una sonrisa completamente desordenada. Vive en Milán y tenía una ventana muy corta para resolverlo: una semana.

El diagnóstico estético era claro: el plano de la sonrisa estaba quebrado. Los bordes incisales no acompañaban la línea bipupilar ni la arquitectura del rostro. Los dientes anteriores se veían fracturados, irregulares y sin una lectura armónica.

Este tipo de caso no se resuelve solo aclarando el color. Había que reconstruir la forma, el largo, la proporción y la dirección visual de la sonrisa completa.

El plan fue un diseño de sonrisa con carillas cerámicas AM, guiado por el análisis facial. Corregimos el plano incisal, nivelamos bordes, devolvimos volumen y ordenamos la sonrisa para que el resultado se integrara con la cara.

En una semana pasó de una sonrisa quebrada a una sonrisa limpia, armónica y natural. Un antes y después extremo, pero con una premisa muy AM: que el resultado se vea potente sin verse artificial.`,
        copyRedes: `Vino desde Milán con una sonrisa quebrada.

Los bordes de los incisivos no acompañaban la línea de la cara. El plano de la sonrisa estaba roto.

En una semana hicimos diseño de sonrisa con carillas cerámicas AM: forma, proporción, color y plano incisal.

No era solo hacer dientes más blancos. Era reconstruir la arquitectura de la sonrisa.`,
        precio: {
            total: "USD a definir según diagnóstico",
            nota: "Diseño de sonrisa completo con carillas cerámicas AM. El valor final depende de cantidad de piezas, planificación y complejidad clínica.",
        },
        publicado: true,
        en: {
            titulo: "He flew in from Milan with a broken smile. We fixed it in a week.",
            subtitulo: "Broken smile plane + fractured incisal edges — complete smile design with AM ceramic veneers",
            descripcion: "An extreme smile design case with a broken smile plane and fractured incisal edges. A patient from Italy, living in Milan, treated in one week with AM ceramic veneers by Dr. Ariel Merino at AM Estética Dental, Puerto Madero, Buenos Aires.",
            seoTitle: "Smile Design with Ceramic Veneers",
            seoDescription: "A smile design case with ceramic veneers on a patient from Milan. Incisal plane and edges corrected in 1 week by Dr. Ariel Merino.",
            categorias: ["Smile design", "Porcelain veneers", "Full rehabilitation"],
            duracion: "1 week",
            piezas: "Complete smile design",
            tecnica: "AM ceramic veneers, facial planning and incisal plane correction",
            copy: `He arrived from Italy with a completely disordered smile. He lives in Milan and had a very short window to resolve it: one week.

The aesthetic diagnosis was clear: the smile plane was broken. The incisal edges did not follow the interpupillary line or the architecture of his face. The front teeth looked fractured, irregular, with no harmonious reading.

This kind of case is not solved by lightening the colour. We had to rebuild the shape, the length, the proportion and the visual direction of the entire smile.

The plan was a smile design with AM ceramic veneers, guided by facial analysis. We corrected the incisal plane, levelled the edges, restored volume and reorganised the smile so the result integrated with his face.

In one week he went from a broken smile to a clean, harmonious and natural one. An extreme before and after, but with a very AM premise: the result should look powerful without looking artificial.`,
            fotos: [
                { alt: "Before and after smile design for a broken smile plane with ceramic veneers — patient from Milan — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Before and after — complete smile design" },
                { alt: "Initial photo showing a broken smile plane with fractured incisors and incisal edges — patient from Italy — AM Estética Dental Buenos Aires", caption: "Starting point — broken plane and incisal edges" },
                { alt: "Final result of smile design with ceramic veneers completed in one week — patient from Milan — Dr. Ariel Merino", caption: "Final result — AM ceramic veneers" },
                { alt: "Lips before and after smile design with ceramic veneers for a broken smile plane — AM Estética Dental Puerto Madero", caption: "Lips — before and after" },
            ],
        },
    },
    {
        slug: "carilla-unitaria-incisivo-central-oscurecido",
        titulo: "Un solo diente puede cambiar toda una sonrisa.",
        subtitulo: "Incisivo central oscurecido por traumatismo infantil — resuelto con blanqueamiento, resinas de contexto y una cerámica unitaria estratificada",
        descripcion: "Caso clinico de carilla unitaria en incisivo central oscurecido por traumatismo y tratamiento de conducto. Seleccion de color, maquillaje ceramico artistico, cementado adhesivo y resultado natural en AM Estetica Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Carilla Unitaria en Incisivo Central Oscurecido",
        seoDescription: "Caso de carilla de porcelana unitaria en incisivo central oscurecido por traumatismo. Resultado natural y prueba de color por el Dr. Ariel Merino.",
        categorias: ["Carilla unitaria", "Carillas de porcelana", "Diseño de sonrisa", "Blanqueamiento"],
        duracion: "Tratamiento personalizado",
        piezas: "1 incisivo central + resinas de contexto en dientes vecinos",
        tecnica: "Cerámica unitaria estratificada, prueba de color, maquillaje cerámico y cementado adhesivo",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-ceramica-resultado-natural-dr-ariel-merino-am-estetica-dental",
            alt: "Resultado natural de carilla cerámica unitaria en incisivo central oscurecido — Dr. Ariel Merino AM Estética Dental Puerto Madero",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-oscurecido-antes-despues-portada-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Antes y después de carilla unitaria en incisivo central oscurecido por traumatismo infantil — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Antes y después — carilla unitaria en incisivo central",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-oscurecido-foto-inicial-traumatismo-conducto-am-estetica-dental-buenos-aires",
                alt: "Foto inicial de incisivo central oscurecido antes de carilla unitaria cerámica — AM Estética Dental Puerto Madero",
                caption: "Estado inicial del incisivo central oscurecido",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-ceramica-resultado-natural-dr-ariel-merino-am-estetica-dental",
                alt: "Resultado natural de carilla cerámica unitaria en incisivo central — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Resultado final con cerámica unitaria",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/cementado-adhesivo-carilla-unitaria-incisivo-central-ceramica-am-estetica-dental-puerto-madero",
                alt: "Proceso de cementado adhesivo de carilla unitaria en incisivo central — AM Estética Dental Puerto Madero",
                caption: "Cementado adhesivo de la cerámica",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-antes-despues-perfil-derecho-am-estetica-dental-buenos-aires",
                alt: "Antes y después de carilla unitaria en incisivo central vista de perfil derecho — AM Estética Dental Buenos Aires",
                caption: "Antes y después — perfil derecho",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/carilla-unitaria-incisivo-central-comparativa-labios-sonrisa-resinas-blanqueamiento-am-estetica-dental",
                alt: "Comparativa con labios de carilla unitaria en incisivo central y armonización con resinas y blanqueamiento — AM Estética Dental",
                caption: "Comparativa con labios y sonrisa",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/modelo-render-3d-planificacion-carilla-unitaria-incisivo-central-dr-ariel-merino",
                alt: "Comparación de modelo y render 3D para planificación de carilla unitaria en incisivo central — Dr. Ariel Merino",
                caption: "Planificación digital y modelo 3D",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carilla-unitaria-incisivo-central-oscurecido/prueba-tres-colores-maquillaje-ceramico-carilla-unitaria-incisivo-central-am-estetica-dental",
                alt: "Prueba de tres colores y maquillaje cerámico artístico para carilla unitaria en incisivo central — AM Estética Dental",
                caption: "Prueba de color y maquillaje cerámico",
            },
        ],
        copy: `Una carilla unitaria en un incisivo central es uno de los desafíos más artísticos de la odontología estética. No alcanza con hacer un diente blanco. Tiene que integrarse con el diente vecino, copiar su luz, su textura, sus pequeñas transparencias y hasta sus imperfecciones.

En este caso, la paciente llegó con una de sus paletas centrales oscurecida. Es algo frecuente después de un golpe en la infancia: el diente puede necesitar tratamiento de conducto y, con los años, empezar a verse más oscuro.

El plan fue mejorar primero el contexto: blanqueamiento dentario para ordenar el color general y resinas en dientes vecinos para armonizar proporciones. Después se trabajó la cerámica como una pieza individual, probando tres alternativas de color antes de elegir la que mejor se integraba.

La cerámica se terminó de manera artesanal, como si fuera un pequeño lienzo blanco: se maquilló capa por capa para reproducir el diente vecino. Una vez logrado el color y la textura, se hizo el cementado adhesivo, es decir, el pegado definitivo de la pieza.

El resultado buscó algo muy preciso: que el diente restaurado no se note. En una carilla unitaria, el éxito no es que la cerámica llame la atención. El éxito es que desaparezca dentro de la sonrisa.`,
        copyRedes: `Un solo central oscuro puede romper toda la armonía de una sonrisa.

Este tipo de caso suele venir de un golpe de chico, tratamiento de conducto y años de oscurecimiento progresivo.

Blanqueamiento, resinas de contexto, prueba de tres colores y una cerámica maquillada de forma artesanal para copiar el diente vecino.

Cuando una carilla unitaria está bien hecha, no se ve la carilla. Se ve una sonrisa.`,
        precio: {
            total: "USD a definir según diagnóstico",
            nota: "Carilla cerámica unitaria en incisivo central + planificación de color + cementado adhesivo. El valor final depende del contexto clínico, blanqueamiento y restauraciones complementarias.",
        },
        publicado: true,
        en: {
            titulo: "A single tooth can change an entire smile.",
            subtitulo: "A central incisor darkened by a childhood trauma — resolved with whitening, contextual composites and a single layered ceramic veneer",
            descripcion: "A clinical case of a single veneer on a central incisor darkened by trauma and root canal treatment. Shade selection, artistic ceramic characterisation, adhesive bonding and a natural result at AM Estética Dental, Puerto Madero, Buenos Aires.",
            seoTitle: "Single Veneer on a Darkened Central Incisor",
            seoDescription: "A case of a single porcelain veneer on a central incisor darkened by trauma. Natural result and shade trial by Dr. Ariel Merino.",
            categorias: ["Single veneer", "Porcelain veneers", "Smile design", "Whitening"],
            duracion: "Tailored treatment",
            piezas: "1 central incisor + contextual composites on neighbouring teeth",
            tecnica: "Layered single ceramic veneer, shade trial, ceramic characterisation and adhesive bonding",
            copy: `A single veneer on a central incisor is one of the most artistic challenges in cosmetic dentistry. Making a white tooth is not enough. It has to integrate with the neighbouring tooth, copy its light, its texture, its small translucencies — and even its imperfections.

In this case, the patient came in with one of her central incisors darkened. This is common after a childhood impact: the tooth may need root canal treatment and, over the years, start to look darker.

The plan was to improve the context first: dental whitening to organise the overall colour, and composites on the neighbouring teeth to harmonise proportions. Then the ceramic was worked as an individual piece, trying three shade alternatives before choosing the one that integrated best.

The ceramic was finished by hand, like a small white canvas: characterised layer by layer to reproduce the neighbouring tooth. Once colour and texture were right, the adhesive bonding was done — the definitive placement of the piece.

The result aimed at something very precise: that the restored tooth should not be noticeable. With a single veneer, success is not the ceramic drawing attention. Success is it disappearing into the smile.`,
            fotos: [
                { alt: "Before and after of a single veneer on a central incisor darkened by childhood trauma — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Before and after — single veneer on a central incisor" },
                { alt: "Initial photo of a darkened central incisor before the single ceramic veneer — AM Estética Dental Puerto Madero", caption: "Starting point of the darkened central incisor" },
                { alt: "Natural result of a single ceramic veneer on a central incisor — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Final result with the single ceramic veneer" },
                { alt: "Adhesive bonding process of the single veneer on the central incisor — AM Estética Dental Puerto Madero", caption: "Adhesive bonding of the ceramic" },
                { alt: "Before and after of the single veneer on the central incisor, right profile view — AM Estética Dental Buenos Aires", caption: "Before and after — right profile" },
                { alt: "Comparison with lips of the single veneer and harmonisation with composites and whitening — AM Estética Dental", caption: "Comparison with lips and smile" },
                { alt: "Model and 3D render comparison for planning the single veneer on the central incisor — Dr. Ariel Merino", caption: "Digital planning and 3D model" },
                { alt: "Three-shade trial and artistic ceramic characterisation for the single veneer — AM Estética Dental", caption: "Shade trial and ceramic characterisation" },
            ],
        },
    },
    {
        slug: "20-carillas-porcelana-apinamiento-sin-ortodoncia",
        titulo: "20 carillas en 10 días. Sin ortodoncia. Sin blanqueamiento. Sin que nadie lo note.",
        subtitulo: "Apiñamiento residual + desgaste + color — resuelto solo con la forma de las carillas",
        descripcion: "Paciente con apiñamiento residual y dientes desgastados. 20 carillas de porcelana mínimamente invasivas en 10 días, sin ortodoncia previa. Resultado natural — ningún amigo se dio cuenta.",
        seoTitle: "20 Carillas de Porcelana sin Ortodoncia Previa",
        seoDescription: "Caso de apiñamiento y desgaste dental resuelto con 20 carillas de porcelana en 10 días, sin necesidad de ortodoncia previa. Dr. Ariel Merino.",
        categorias: ["Carillas de porcelana", "Lentes de contacto dental", "Diseño de sonrisa", "Apiñamiento"],
        duracion: "10 días",
        piezas: "20 piezas (10 superiores + 10 inferiores)",
        tecnica: "Mínimamente invasiva, desgaste controlado",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental",
            alt: "Antes y después diseño de sonrisa con 20 carillas de porcelana sin ortodoncia — AM Estética Dental",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/carillas-porcelana-20-piezas-mordida-antes-despues-am-estetica-dental",
                alt: "Antes y después — vista intraoral de mordida con 20 carillas de porcelana — AM Estética Dental",
                caption: "Vista intraoral — mordida antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental",
                alt: "Antes y después sonrisa con labios — 20 carillas de porcelana sin ortodoncia — AM Estética Dental",
                caption: "Sonrisa frontal antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/carillas-porcelana-arcada-superior-antes-despues-am-estetica-dental",
                alt: "Arcada superior antes y después — carillas de porcelana mínimamente invasivas — AM Estética Dental",
                caption: "Arcada superior",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/carillas-porcelana-arcada-inferior-antes-despues-am-estetica-dental",
                alt: "Arcada inferior antes y después — carillas de porcelana mínimamente invasivas — AM Estética Dental",
                caption: "Arcada inferior",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/diseno-sonrisa-carillas-sin-ortodoncia-antes-am-estetica-dental",
                alt: "Estado inicial — apiñamiento y desgaste dental antes de carillas — AM Estética Dental",
                caption: "Estado inicial",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-sin-ortodoncia/carillas-lentes-contacto-dental-sonrisa-natural-resultado-am-estetica-dental",
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
        en: {
            titulo: "20 veneers in 10 days. No braces. No whitening. And nobody noticed.",
            subtitulo: "Residual crowding + wear + colour — solved with the shape of the veneers alone",
            descripcion: "A patient with residual crowding and worn teeth. 20 minimally invasive porcelain veneers in 10 days, with no prior orthodontics. A natural result — none of his friends realised.",
            seoTitle: "20 Porcelain Veneers Without Prior Orthodontics",
            seoDescription: "A case of crowding and tooth wear resolved with 20 porcelain veneers in 10 days, without the need for prior orthodontics. Dr. Ariel Merino.",
            categorias: ["Porcelain veneers", "Ultra-thin veneers", "Smile design", "Crowding"],
            duracion: "10 days",
            piezas: "20 units (10 upper + 10 lower)",
            tecnica: "Minimally invasive, controlled preparation",
            copy: `He came in with worn teeth, mild crowding and years of orthodontics behind him. He did not want to wear braces again. He wanted to look good — but natural.

In 10 days we placed 20 ultra-thin veneers, widened his smile by incorporating the premolars that were barely visible, corrected the crowding through the shape of the veneers themselves, and improved the colour by a tone and a half.

The result: a smile that looks like it was always there. None of his friends realised he had anything done. That, for us, is the definition of success.`,
            fotos: [
                { alt: "Before and after — intraoral view of the bite with 20 porcelain veneers — AM Estética Dental", caption: "Intraoral view — bite before and after" },
                { alt: "Before and after smile with lips — 20 porcelain veneers without orthodontics — AM Estética Dental", caption: "Front smile before and after" },
                { alt: "Upper arch before and after — minimally invasive porcelain veneers — AM Estética Dental", caption: "Upper arch" },
                { alt: "Lower arch before and after — minimally invasive porcelain veneers — AM Estética Dental", caption: "Lower arch" },
                { alt: "Starting point — crowding and tooth wear before veneers — AM Estética Dental", caption: "Starting point" },
                { alt: "Final result — natural smile with ultra-thin veneers — AM Estética Dental", caption: "Final result" },
            ],
        },
    },
    {
        slug: "agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas",
        titulo: "Le faltaban dientes de nacimiento. Hoy tiene la cara que siempre quiso.",
        subtitulo: "Agenesia dental + microdontia + dientes oscuros — resuelto con 2 años de alineadores, implantes y 24 cerámicas",
        descripcion: "Caso de agenesia dental con microdontia y dientes oscurecidos. Tratamiento multidisciplinario de 2 años: alineadores invisibles AM con terapia láser, implantes en zonas edéntulas y 24 cerámicas con aumento de dimensión vertical. Puerto Madero, Buenos Aires.",
        seoTitle: "Caso de Agenesia Dental con Implantes y 24 Cerámicas",
        seoDescription: "Rehabilitación completa de agenesia dental con alineadores invisibles AM, implantes dentales y 24 cerámicas en Puerto Madero. Dr. Ariel Merino.",
        categorias: ["Agenesia", "Implantes", "Alineadores", "Diseño de sonrisa"],
        duracion: "2 años",
        piezas: "24 cerámicas (arcada superior e inferior) + implantes en zonas de agenesia",
        tecnica: "Alineadores invisibles AM + terapia láser + implantes + rehabilitación oral completa + aumento de dimensión vertical",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
            alt: "Antes y después — agenesia dental — mega transformación — rehabilitación oral completa con implantes y 24 cerámicas — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
                alt: "Antes y después — agenesia dental — mega transformación — rehabilitación oral completa con implantes y 24 cerámicas — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Antes y después del caso. Transformación facial completa: alineadores invisibles, implantes dentales y 24 cerámicas.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-tres-etapas-tratamiento-alineadores-invisibles-implantes-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Tres etapas del tratamiento de agenesia dental — antes, durante ortodoncia invisible y después con 24 cerámicas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Las tres etapas: punto de partida, cierre de espacios con alineadores AM y resultado final con 24 cerámicas.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-intraoral-dientes-pequenos-marrones-microdontia-agenesia-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Antes — intraoral — dientes pequeños marrones y agenesia dental — microdontia — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Estado inicial: microdontia con dientes marrones y espacios vacíos por agenesia.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Antes y después intraoral — implantes dentales y 24 cerámicas — rehabilitación oral completa — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Comparativa intraoral completa. Implantes en zonas de agenesia + 24 cerámicas.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-labios-sonrisa-portada-carillas-ceramicas-alineadores-invisibles-dr-ariel-merino-am-estetica-dental",
                alt: "Antes y después — labios y sonrisa — carillas cerámicas y alineadores invisibles — Dr. Ariel Merino AM Estética Dental",
                caption: "Sonrisa antes y después. Cerámicas de alta translucidez.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-labios-portada-transformacion-facial-completa-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Antes y después — rostro y labios — transformación facial completa — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Comparativa facial completa. El aumento de dimensión vertical transformó el tercio inferior del rostro.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-despues-perfil-lateral-implantes-carillas-ceramicas-dimension-vertical-dr-ariel-merino-am-estetica-dental",
                alt: "Después — perfil lateral — implantes y carillas cerámicas — aumento de dimensión vertical — Dr. Ariel Merino AM Estética Dental",
                caption: "Perfil lateral post-tratamiento. El aumento de dimensión vertical se refleja en la estética facial.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-transformacion-facial-perfil-portada-rehabilitacion-oral-completa-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Transformación facial — perfil portada — rehabilitación oral completa — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Portada de perfil. La imagen que mejor resume la transformación de vida.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-fondo-blanco-portada-transformacion-completa-dr-ariel-merino-am-estetica-dental",
                alt: "Antes y después — rostro — fondo blanco — transformación completa — Dr. Ariel Merino AM Estética Dental",
                caption: "Comparativa sobre fondo blanco. Transformación facial integral.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-labios-antes-despues-implantes-24-ceramicas-nueva-mordida-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Labios antes y después — implantes y 24 cerámicas — nueva mordida — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Detalle de labios. La nueva mordida y dimensión vertical dieron una postura labial natural en reposo.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-labios-antes-despues-sonrisa-nueva-carillas-ceramicas-portada-dr-ariel-merino-am-estetica-dental",
                alt: "Labios antes y después — sonrisa nueva — carillas cerámicas — portada — Dr. Ariel Merino AM Estética Dental",
                caption: "Sonrisa natural post-tratamiento. El diseño de la línea de la sonrisa fue guiado digitalmente.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-perfil-facial-resultado-final-24-ceramicas-implantes-dentales-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Resultado final — perfil facial — 24 cerámicas e implantes dentales — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Resultado final de perfil. El tratamiento multidisciplinario logró una transformación integral.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-perfil-sonrisa-resultado-carillas-ceramicas-implantes-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Resultado — perfil y sonrisa — carillas cerámicas e implantes — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Perfil con sonrisa. Armonía dento-facial lograda con ortodoncia, implantología y rehabilitación.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-resultado-perfil-rehabilitacion-oral-completa-carillas-porcelana-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Resultado — perfil — rehabilitación oral completa — carillas de porcelana — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Vista de perfil final. Las proporciones del tercio inferior del rostro quedaron completamente restauradas.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-rostro-frontal-dientes-oscuros-agenesia-microdontia-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Antes — rostro frontal — dientes oscuros y agenesia — microdontia — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Fotografía facial de inicio. La afectación estética era evidente tanto en reposo como en sonrisa.",
            },
        ],
        copy: `Llegó al consultorio con dientes pequeños, marrones y varios espacios vacíos donde nunca habían salido piezas. La agenesia dental no es solo un problema estético — le cambia la cara, la mordida, la forma en que uno se ve en el espejo.

El plan fue largo pero claro: primero dos años de alineadores invisibles AM, acelerados con terapia láser (sin el láser eran tres años). La ortodoncia cerró espacios, preparó el terreno y alineó la estructura para lo que venía.

Después, implantes en las zonas donde faltaban piezas y donde el hueso lo permitía. Y para cerrar: 24 cerámicas, arriba y abajo, con aumento de dimensión vertical para restituir la mordida y cambiar las proporciones del tercio inferior de la cara.

El resultado no fue solo una sonrisa nueva. Fue otra cara. Otro porte. Otra presencia.

Eso es lo que más nos importa de este caso — no solo lo que cambió en la boca, sino lo que cambió en cómo esa persona se para frente al mundo.`,
        copyRedes: `Dientes pequeños, marrones, y varios de nacimiento que nunca salieron.

2 años de alineadores AM con láser (sin el láser eran 3). Implantes donde faltaban piezas. 24 cerámicas arriba y abajo. Aumento de dimensión vertical.

El resultado no fue solo una sonrisa nueva. Fue otra cara.

Eso es lo que entendemos por transformación de vida.`,
        precio: {
            total: "USD 28.000 – 30.000",
            nota: "Aprox. USD 4.000 ortodoncia invisible + USD 24.000 rehabilitación completa (implantes + 24 cerámicas + aumento de dimensión vertical)",
        },
        videoUrl: "https://www.youtube.com/embed/oqcaGGGAs5Y",
        videoAspect: "9/16",
        publicado: true,
        en: {
            titulo: "He was born missing teeth. Today he has the face he always wanted.",
            subtitulo: "Dental agenesis + microdontia + dark teeth — resolved with 2 years of aligners, implants and 24 ceramic restorations",
            descripcion: "A case of dental agenesis with microdontia and darkened teeth. A 2-year multidisciplinary treatment: AM invisible aligners with laser therapy, implants in the edentulous areas, and 24 ceramic restorations with an increase in vertical dimension. Puerto Madero, Buenos Aires.",
            seoTitle: "Dental Agenesis Case with Implants and 24 Ceramics",
            seoDescription: "Complete rehabilitation of dental agenesis with AM invisible aligners, dental implants and 24 ceramic restorations in Puerto Madero. Dr. Ariel Merino.",
            categorias: ["Agenesis", "Implants", "Aligners", "Smile design"],
            duracion: "2 years",
            piezas: "24 ceramic restorations (upper and lower arch) + implants in the agenesis areas",
            tecnica: "AM invisible aligners + laser therapy + implants + full oral rehabilitation + increase in vertical dimension",
            copy: `He came to the practice with small, brown teeth and several empty spaces where teeth had never erupted. Dental agenesis is not only an aesthetic problem — it changes your face, your bite, the way you see yourself in the mirror.

The plan was long but clear: first, two years of AM invisible aligners, accelerated with laser therapy (without the laser it would have been three years). The orthodontics closed spaces, prepared the ground and aligned the structure for what came next.

Then, implants in the areas where teeth were missing and where the bone allowed it. And to finish: 24 ceramic restorations, upper and lower, with an increase in vertical dimension to restore the bite and change the proportions of the lower third of the face.

The result was not just a new smile. It was another face. Another bearing. Another presence.

That is what matters most to us about this case — not only what changed in the mouth, but what changed in how this person stands in front of the world.`,
            fotos: [
                { alt: "Before and after — dental agenesis — full transformation — complete oral rehabilitation with implants and 24 ceramic restorations — Dr. Ariel Merino, AM Estética Dental Puerto Madero Buenos Aires", caption: "Before and after of the case. Complete facial transformation: invisible aligners, dental implants and 24 ceramic restorations." },
                { alt: "Three stages of dental agenesis treatment — before, during invisible orthodontics and after with 24 ceramic restorations — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "The three stages: starting point, closing spaces with AM aligners, and the final result with 24 ceramic restorations." },
                { alt: "Before — intraoral — small brown teeth and dental agenesis — microdontia — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Starting point: microdontia with brown teeth and empty spaces from agenesis." },
                { alt: "Intraoral before and after — dental implants and 24 ceramic restorations — complete oral rehabilitation — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Complete intraoral comparison. Implants in the agenesis areas + 24 ceramic restorations." },
                { alt: "Before and after — lips and smile — ceramic veneers and invisible aligners — Dr. Ariel Merino, AM Estética Dental", caption: "Smile before and after. High-translucency ceramics." },
                { alt: "Before and after — face and lips — complete facial transformation — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Complete facial comparison. The increase in vertical dimension transformed the lower third of the face." },
                { alt: "After — lateral profile — implants and ceramic veneers — increase in vertical dimension — Dr. Ariel Merino, AM Estética Dental", caption: "Lateral profile after treatment. The increase in vertical dimension is reflected in the facial aesthetics." },
                { alt: "Facial transformation — profile — complete oral rehabilitation — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Profile cover image. The photograph that best summarises this life transformation." },
                { alt: "Before and after — face — white background — complete transformation — Dr. Ariel Merino, AM Estética Dental", caption: "Comparison on a white background. An integral facial transformation." },
                { alt: "Lips before and after — implants and 24 ceramic restorations — new bite — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Lip detail. The new bite and vertical dimension gave a natural lip posture at rest." },
                { alt: "Lips before and after — new smile — ceramic veneers — Dr. Ariel Merino, AM Estética Dental", caption: "Natural smile after treatment. The smile line design was guided digitally." },
                { alt: "Final result — facial profile — 24 ceramic restorations and dental implants — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Final profile result. The multidisciplinary treatment achieved an integral transformation." },
                { alt: "Result — profile and smile — ceramic veneers and implants — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Profile with smile. Dento-facial harmony achieved with orthodontics, implantology and rehabilitation." },
                { alt: "Result — profile — complete oral rehabilitation — porcelain veneers — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Final profile view. The proportions of the lower third of the face were completely restored." },
                { alt: "Before — frontal face — dark teeth and agenesis — microdontia — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Initial facial photograph. The aesthetic impact was evident both at rest and when smiling." },
            ],
        },
    },
    {
        slug: "diseno-sonrisa-cierre-diastemas-dientes-conoidos",
        titulo: "El caso que se viralizó antes de que existiera Instagram.",
        subtitulo: "Diseño de sonrisa · Cierre de diastemas · Dientes conoidos — 10 carillas AM lentes de contacto dental",
        descripcion: "Caso icónico de diseño de sonrisa con cierre de diastemas y dientes conoidos. 10 carillas AM ultra delgadas (0.2-0.3mm). Viral en Facebook antes de Instagram y TikTok. Profesores de odontología de todo el mundo reconocieron este caso. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Diseño de Sonrisa y Cierre de Diastemas con Carillas",
        seoDescription: "Caso de cierre de diastemas y dientes conoidos con 10 carillas ultra delgadas (0.2mm) con mínima preparación de esmalte en Puerto Madero. Dr. Ariel Merino.",
        categorias: ["Carillas de porcelana", "Lentes de contacto dental", "Diseño de sonrisa", "Diastemas", "Dientes conoidos"],
        duracion: "10 días",
        piezas: "10 carillas AM lentes de contacto dental (0.2-0.3mm) — sector anterior",
        tecnica: "Carillas AM ultradelgadas tipo lente de contacto dental — preparación mínima según el caso — cierre de diastemas y corrección de dientes conoides",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
            alt: "Diseño de sonrisa con cierre de diastemas — antes y después rostro — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
                alt: "Diseño de sonrisa con cierre de diastemas — antes y después rostro — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Antes y después — rostro",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-diastemas-antes-despues-rostro-intraoral-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Diseño de sonrisa dientes conoidos — antes y después rostro e intraoral — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Antes y después — rostro e intraoral",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/cierre-diastemas-intraoral-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Cierre de diastemas intraoral antes y después con carillas cerámicas AM — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Intraoral — cierre de diastemas antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/cierre-diastemas-conoidos-intraoral-antes-despues-carillas-lentes-contacto-dental-dr-ariel-merino-am-estetica-dental",
                alt: "Dientes conoidos y cierre de diastemas — intraoral antes y después — carillas lentes de contacto dental — Dr. Ariel Merino AM Estética Dental",
                caption: "Dientes conoidos — cierre de diastemas intraoral",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/fragmentos-ceramicos-lentes-contacto-dental-02mm-carillas-am-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Fragmentos cerámicos lentes de contacto dental 0.2-0.3mm — carillas AM ultra delgadas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Fragmentos cerámicos — 0.2mm de espesor",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental",
                alt: "Lente de contacto dental ultra fino en dedo mostrando escala — 0.2-0.3mm — carillas AM — Dr. Ariel Merino AM Estética Dental",
                caption: "Escala real — lente de contacto dental en la yema del dedo",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/mordida-antes-despues-diseno-sonrisa-cierre-diastemas-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Mordida antes y después diseño de sonrisa con cierre de diastemas — carillas cerámicas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Mordida — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/fragmentos-ceramicos-carillas-am-diseno-sonrisa-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Fragmentos cerámicos carillas AM diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Fragmentos cerámicos antes del cementado",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/modelos-yeso-antes-despues-planificacion-diseno-sonrisa-diastemas-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Modelos de yeso antes y después planificación diseño de sonrisa con cierre de diastemas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Modelos de yeso — planificación del caso",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/toma-color-carillas-ceramicas-diseno-sonrisa-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
                alt: "Toma de color para carillas cerámicas diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Toma de color — selección cerámica",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/cementado-carillas-ceramicas-diseno-sonrisa-dia-cementado-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Cementado de carillas cerámicas cada dos dientes — diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Día del cementado — de a dos carillas",
            },
        ],
        copy: `Cuando hice este caso, no existía Instagram. No existía TikTok. Subí el video a YouTube y en pocos días profesores de odontología de todo el mundo me estaban escribiendo.

El paciente tenía dientes conoidos — pequeños, en forma de cono — con diastemas entre ellos. Esos espacios no eran por falta de ortodoncia. Eran estructurales. Aunque se hiciera ortodoncia, iban a volver. La única solución real eran carillas.

Le hicimos 10 lentes de contacto dental AM: fragmentos cerámicos de apenas 0.2 a 0.3mm de espesor. Sin desgaste significativo del diente natural. Sin anestesia en la mayoría de los pasos. En 10 días.

El resultado transformó no solo su sonrisa sino la forma en que yo entendía la estética dental. Fue el caso que definió mi carrera y que me abrió puertas en todo el mundo.`,
        copyRedes: `Antes de Instagram. Antes de TikTok.

Subí este caso a YouTube y profesores de odontología de todo el mundo me escribieron.

10 carillas AM de 0.2mm. Sin desgaste. Cierre de diastemas completo. 10 días.

El caso que definió mi carrera.`,
        precio: {
            total: "Consultar",
            nota: "Caso histórico — referencia de carillas AM ultra delgadas tipo lente de contacto dental",
        },
        videoUrl: "https://www.youtube.com/embed/RIUEvt7Zq3c",
        videoAspect: "16/9",
        publicado: true,
        en: {
            titulo: "The case that went viral before Instagram existed.",
            subtitulo: "Smile design · Closing diastemas · Conical teeth — 10 AM ultra-thin contact lens veneers",
            descripcion: "An iconic smile design case closing diastemas on conical teeth. 10 ultra-thin AM veneers (0.2-0.3mm). It went viral on Facebook before Instagram and TikTok existed, and dental professors around the world recognised it. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
            seoTitle: "Smile Design and Closing Diastemas with Veneers",
            seoDescription: "A case of closing diastemas on conical teeth with 10 ultra-thin veneers (0.2mm) and minimal enamel preparation in Puerto Madero. Dr. Ariel Merino.",
            categorias: ["Porcelain veneers", "Ultra-thin veneers", "Smile design", "Diastemas", "Conical teeth"],
            duracion: "10 days",
            piezas: "10 AM ultra-thin contact lens veneers (0.2-0.3mm) — anterior sector",
            tecnica: "Ultra-thin AM contact lens veneers — minimal preparation — closing diastemas and correcting conical teeth",
            copy: `When I did this case, Instagram did not exist. Neither did TikTok. I uploaded the video to YouTube and within days dental professors from all over the world were writing to me.

The patient had conical teeth — small, cone-shaped — with diastemas between them. Those gaps were not caused by a lack of orthodontics. They were structural. Even with orthodontics, they would have come back. The only real solution was veneers.

We placed 10 AM contact lens veneers: ceramic fragments of just 0.2 to 0.3mm in thickness, with minimal preparation of the natural tooth. Without anaesthesia for most of the steps. In 10 days.

The result transformed not only his smile but the way I understood cosmetic dentistry. It was the case that defined my career and opened doors for me around the world.`,
            fotos: [
                { alt: "Smile design closing diastemas — before and after, face — Dr. Ariel Merino, AM Estética Dental Puerto Madero Buenos Aires", caption: "Before and after — face" },
                { alt: "Smile design for conical teeth — before and after, face and intraoral — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Before and after — face and intraoral" },
                { alt: "Closing diastemas, intraoral before and after with AM ceramic veneers — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Intraoral — closing diastemas before and after" },
                { alt: "Conical teeth and closing diastemas — intraoral before and after — ultra-thin contact lens veneers — Dr. Ariel Merino, AM Estética Dental", caption: "Conical teeth — closing diastemas, intraoral" },
                { alt: "Ceramic fragments, ultra-thin contact lens veneers 0.2-0.3mm — AM veneers — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Ceramic fragments — 0.2mm thick" },
                { alt: "Ultra-fine contact lens veneer on a fingertip showing the real scale — 0.2-0.3mm — AM veneers — Dr. Ariel Merino, AM Estética Dental", caption: "Real scale — a contact lens veneer on a fingertip" },
                { alt: "Bite before and after smile design closing diastemas — ceramic veneers — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Bite — before and after" },
                { alt: "Ceramic fragments, AM veneers for smile design — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Ceramic fragments before bonding" },
                { alt: "Plaster models before and after, planning the smile design closing diastemas — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Plaster models — case planning" },
                { alt: "Shade selection for ceramic veneers in smile design — Dr. Ariel Merino, AM Estética Dental Puerto Madero Buenos Aires", caption: "Shade selection — choosing the ceramic" },
                { alt: "Bonding ceramic veneers two teeth at a time — smile design — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Bonding day — two veneers at a time" },
            ],
        },
    },
    {
        slug: "carillas-resina-diseno-sonrisa-gingivectomia-laser",
        titulo: "Dientes sanos, sonrisa nueva. Por qué empezar con resina.",
        subtitulo: "10 carillas de resina + gingivectomía láser — diseño de sonrisa en paciente joven sin caries ni tratamientos previos",
        descripcion: "Caso de diseño de sonrisa con 10 carillas de resina compuesta y gingivectomía láser en paciente joven con dientes sanos. Sin caries, sin coronas previas. USD 500 por pieza. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Diseño de Sonrisa con Carillas de Resina",
        seoDescription: "Caso de diseño de sonrisa con 10 carillas de resina y gingivectomía láser en paciente joven con dientes sanos, con enfoque mínimamente invasivo por el Dr. Ariel Merino.",
        categorias: ["Carillas de porcelana", "Diseño de sonrisa", "Lentes de contacto dental"],
        duracion: "5 días",
        piezas: "10 carillas de resina compuesta — sector anterior superior e inferior",
        tecnica: "Carillas directas de resina compuesta + gingivectomía láser para armonizar la línea gingival",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/diseno-sonrisa-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
            alt: "Diseño de sonrisa con carillas de resina y gingivectomía láser antes y después — Dr. Ariel Merino AM Estética Dental Buenos Aires",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/diseno-sonrisa-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Diseño de sonrisa carillas de resina gingivectomía láser antes y después portada — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Antes y después — portada",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/carillas-resina-antes-rostro-frontal-paciente-joven-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Carillas de resina — antes — rostro frontal paciente joven — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Antes — rostro frontal",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/carillas-resina-diseno-sonrisa-despues-rostro-frontal-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Carillas de resina diseño de sonrisa después — rostro frontal — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Después — rostro frontal",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/carillas-resina-labios-antes-despues-diseno-sonrisa-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Carillas de resina labios antes y después diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Labios — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/carillas-resina-labios-perfil-antes-despues-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
                alt: "Carillas de resina labios perfil antes y después — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Perfil — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/carillas-resina-labios-perfil-resultado-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Carillas de resina resultado labios perfil — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Resultado final — perfil",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina/gingivectomia-laser-carillas-resina-antes-despues-diseno-sonrisa-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Gingivectomía láser y carillas de resina antes y después diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Gingivectomía láser + carillas — antes y después",
            },
        ],
        copy: `Fabricio llegó con algo que no es tan común: dientes completamente sanos. Sin caries, sin coronas, sin tratamientos previos. Una base de esmalte natural impecable sobre la que trabajar.

En pacientes jóvenes con dientes sanos, la resina compuesta es muchas veces la primera opción. No porque sea inferior — sino porque respeta al máximo lo que ya hay. La resina llega al 86-88% de la resistencia del esmalte natural. Una cerámica, en cambio, duplica esa resistencia.

Para este caso diseñamos 10 carillas directas de resina en el sector anterior y complementamos con gingivectomía láser para armonizar la línea gingival — ese borde de encía que cuando no está nivelado le quita simetría a cualquier sonrisa.

El resultado fue una sonrisa nueva, en 5 días, con una preparación mínima y planificada del esmalte.

— — —

¿Son tan buenas las resinas como las cerámicas?

Son materiales diferentes con indicaciones distintas. La resina es excelente para pacientes jóvenes con dientes sanos porque es más conservadora. La cerámica es más duradera, más resistente y no se pigmenta. Ambas dan resultados estéticos muy buenos.

¿Se pigmentan las resinas?

Con el tiempo, sí — un poco más que la cerámica. El café, el vino, el té y el tabaco las afectan más. Con buenos hábitos y un pulido anual se minimiza mucho.

¿Se pueden fracturar?

La resina es más frágil que la cerámica. No soporta la misma mordida extrema. Por eso en pacientes con bruxismo preferimos siempre cerámica.

¿Qué mantenimiento requiere una resina?

Un control anual es indispensable. Se evalúa el desgaste, se hace un pulido y si hay alguna microchip se repara directamente en boca sin cambiar toda la carilla.

¿Cuánto cuestan las carillas de resina vs cerámica?

Las de resina cuestan USD 500 por diente. Las cerámicas van de USD 1.000 a 1.500 por pieza. La diferencia de inversión es real, pero también lo es la diferencia en durabilidad.`,
        copyRedes: `Dientes sanos, paciente joven. La primera opción fue resina.

10 carillas directas de resina + gingivectomía láser para nivelar la encía.

5 días. Sin tocar el esmalte original.

Cuando la base es buena, hay que cuidarla.`,
        precio: {
            total: "USD 5.000",
            porPieza: "USD 500 por carilla",
            nota: "10 carillas de resina compuesta directa + gingivectomía láser incluida",
        },
        publicado: true,
        en: {
            titulo: "Healthy teeth, a new smile. Why start with composite.",
            subtitulo: "10 composite veneers + laser gingivectomy — smile design on a young patient with no cavities and no previous treatment",
            descripcion: "A smile design case with 10 composite veneers and laser gingivectomy on a young patient with healthy teeth. No cavities, no previous crowns. USD 500 per unit. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
            seoTitle: "Smile Design with Composite Veneers",
            seoDescription: "A smile design case with 10 composite veneers and laser gingivectomy on a young patient with healthy teeth, minimally invasive, by Dr. Ariel Merino.",
            categorias: ["Composite veneers", "Smile design", "Gum contouring"],
            duracion: "5 days",
            piezas: "10 composite veneers — upper and lower anterior sector",
            tecnica: "Direct composite veneers + laser gingivectomy to harmonise the gum line",
            copy: `Fabricio arrived with something that is not so common: completely healthy teeth. No cavities, no crowns, no previous treatment. An impeccable base of natural enamel to work on.

In young patients with healthy teeth, composite is often the first option. Not because it is inferior — but because it respects as much as possible of what is already there. Composite reaches 86-88% of the strength of natural enamel. Ceramic, by contrast, doubles that strength.

For this case we designed 10 direct composite veneers in the anterior sector and complemented them with a laser gingivectomy to harmonise the gum line — that border of gum tissue which, when it is not level, takes symmetry away from any smile.

The result was a new smile in 5 days, with minimal preparation of the original enamel.

— — —

Are composites as good as ceramics?

They are different materials with different indications. Composite is excellent for young patients with healthy teeth because it is more conservative. Ceramic is more durable, more resistant and does not stain. Both give very good aesthetic results.

Do composites stain?

Over time, yes — slightly more than ceramic. Coffee, wine, tea and tobacco affect them more. With good habits and an annual polish this is minimised considerably.

Can they fracture?

Composite is more fragile than ceramic. It does not withstand the same extreme bite forces. That is why in patients with bruxism we always prefer ceramic.

What maintenance does composite require?

An annual check-up is essential. We assess wear, polish the surface, and if there is any microchip it is repaired directly in the mouth without replacing the whole veneer.

What is the investment for composite vs ceramic veneers?

Composite veneers are USD 500 per tooth. Ceramic veneers range from USD 1,000 to 1,500 per unit.`,
            fotos: [
                { alt: "Smile design with composite veneers and laser gingivectomy, before and after — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Before and after — cover image" },
                { alt: "Composite veneers — before — frontal face of a young patient — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Before — frontal face" },
                { alt: "Composite veneers smile design after — frontal face — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "After — frontal face" },
                { alt: "Composite veneers, lips before and after smile design — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Lips — before and after" },
                { alt: "Composite veneers, lips in profile before and after — Dr. Ariel Merino, AM Estética Dental Puerto Madero Buenos Aires", caption: "Profile — before and after" },
                { alt: "Composite veneers result, lips in profile — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Final result — profile" },
                { alt: "Laser gingivectomy and composite veneers before and after smile design — Dr. Ariel Merino, AM Estética Dental Buenos Aires", caption: "Laser gingivectomy + veneers — before and after" },
            ],
        },
    },
    {
        slug: "gingivectomia-laser-micro-diseno-sonrisa-resinas",
        titulo: "Gingivectomía láser + micro diseño de sonrisa en resinas",
        subtitulo: "Gingivectomía en todos los márgenes gingivales + micro diseño de sonrisa con carillas mínimamente invasivas en resina",
        descripcion: "Caso de gingivectomía láser completa en todos los márgenes gingivales seguida de micro diseño de sonrisa. Carillas de resina mínimamente invasivas para detalles finos en bordes incisales. Paciente joven que vive de su imagen — transformación natural y discreta. USD 5.000 total. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Gingivectomía Láser con Diseño de Sonrisa en Resina",
        seoDescription: "Gingivectomía láser completa y micro diseño de sonrisa con carillas de resina — caso premium de estética dental minimamente invasiva. Dr. Ariel Merino.",
        categorias: ["Gingivectomía láser", "Diseño de sonrisa", "Carillas de resina"],
        duracion: "5 días",
        piezas: "Gingivectomía láser + carillas de resina compuesta — sector anterior completo",
        tecnica: "Gingivectomía láser en todos los márgenes gingivales + micro diseño de sonrisa con carillas directas de resina compuesta — mínimamente invasivo",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/transformacion-extrema-caries-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
            alt: "Transformación extrema caries y carillas de resina viejas — gingivectomía láser — antes y después portada — Dr. Ariel Merino AM Estética Dental Buenos Aires",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/transformacion-extrema-caries-carillas-resina-gingivectomia-laser-antes-despues-rostro-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Transformación extrema caries y carillas de resina — antes y después portada — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Antes y después — portada",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/caries-resinas-viejas-encía-montada-antes-rostro-frontal-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
                alt: "Caries múltiples y resinas viejas mal hechas — antes — rostro frontal — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Antes — caries, resinas viejas y encía montada",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/transformacion-carillas-resina-caries-gingivectomia-despues-rostro-frontal-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Transformación completa carillas de resina y gingivectomía láser — después — rostro frontal — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Después — transformación completa",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/caries-carillas-resina-gingivectomia-laser-antes-despues-rostro-comparativa-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Caries y resinas viejas — carillas de resina nueva y gingivectomía láser — antes y después comparativa rostro — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Comparativa rostro — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/carillas-resina-caries-gingivectomia-labios-antes-despues-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
                alt: "Carillas de resina sobre caries y resinas viejas — labios antes y después — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Labios — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/carillas-resina-caries/carillas-resina-diseno-sonrisa-labios-perfil-antes-despues-gingivectomia-laser-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Diseño de sonrisa en resina labios perfil antes y después gingivectomía láser — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Perfil — antes y después",
            },
        ],
        copy: `Paciente joven, vive de su imagen. Esa fue la premisa.

El trabajo no era solo estético — era sobre armonía total. Comenzamos con gingivectomía láser en todos los márgenes gingivales, creando una línea de encía nivelada y simétrica que es la base invisible de cualquier sonrisa premium.

Una vez que la encía quedó perfecta, trabajamos el micro diseño de sonrisa. No se trataba de cambios drásticos, sino de detalles finos: ajustes en los bordes incisales, pequeñas correcciones de forma, mínimas carillas de resina en los puntos específicos que marcan la diferencia.

Todo mínimamente invasivo. Casi sin tocar la estructura original de los dientes.

El resultado fue exacto a lo que buscaba: una sonrisa más pulida, más refinada, perfecta para alguien que vive bajo las luces. La paciente se fue súper contenta y feliz.

USD 5.000 — gingivectomía láser completa + micro diseño de sonrisa en resina.`,
        copyRedes: `Paciente joven que vive de su imagen.

Gingivectomía láser en todos los márgenes + micro diseño de sonrisa en resina.

Antes de cualquier estética, hubo que resolver la salud.

Remoción de caries. Gingivectomía láser. Carillas de resina nuevas.

El resultado se viralizó en TikTok. USD 5.000 all-inclusive.`,
        precio: {
            total: "USD 5.000",
            porPieza: "USD 5.000 all-inclusive",
            nota: "Incluye: gingivectomía láser en todos los márgenes + micro diseño de sonrisa en resina (10 dientes sector anterior). Financiación: USD 1.500 anticipo + USD 309/mes en 12 meses (18% anual)",
        },
        publicado: true,
        en: {
            titulo: "Laser gingivectomy + micro smile design in composite",
            subtitulo: "Gingivectomy across all gum margins + micro smile design with minimally invasive composite veneers",
            descripcion: "A clinical case combining laser gingivectomy across all gum margins with a micro smile design using minimally invasive composite veneers. USD 5,000. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
            seoTitle: "Laser Gingivectomy + Micro Smile Design",
            seoDescription: "Laser gingivectomy across all gum margins plus a micro smile design with minimally invasive composite veneers. Dr. Ariel Merino, Puerto Madero.",
            categorias: ["Gum contouring", "Smile design", "Composite veneers"],
            duracion: "5 days",
            piezas: "Laser gingivectomy + composite veneers — complete anterior sector",
            tecnica: "Laser gingivectomy across all gum margins + micro smile design with direct composite veneers",
            copy: `A young patient who lives off her image. That was the premise.

The work was not only aesthetic — it was about total harmony. We started with a laser gingivectomy across all the gum margins, creating a level, symmetrical gum line that is the invisible foundation of any premium smile.

Once the gum was right, we worked on the micro smile design. This was not about drastic changes, but fine detail: adjustments to the incisal edges, small corrections in shape, minimal composite veneers at the specific points that make the difference.

All minimally invasive. Barely touching the original structure of the teeth.

The result was exactly what she was looking for: a more polished, more refined smile, perfect for someone who lives under the lights. She left extremely happy.

USD 5,000 — complete laser gingivectomy + micro smile design in composite.`,
            fotos: [
                { alt: "Laser gingivectomy and micro smile design in composite, before and after — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Before and after — cover image" },
                { alt: "Before — cavities, old composites and overgrown gum tissue — AM Estética Dental Buenos Aires", caption: "Before — cavities, old composites and overgrown gum" },
                { alt: "After — complete transformation with laser gingivectomy and composite veneers — AM Estética Dental", caption: "After — complete transformation" },
                { alt: "Face comparison before and after laser gingivectomy and micro smile design — Dr. Ariel Merino, AM Estética Dental", caption: "Face comparison — before and after" },
                { alt: "Lips before and after laser gingivectomy and micro smile design in composite — AM Estética Dental Puerto Madero", caption: "Lips — before and after" },
                { alt: "Profile before and after laser gingivectomy and composite micro smile design — AM Estética Dental Buenos Aires", caption: "Profile — before and after" },
            ],
        },
    },
    {
        slug: "bruxismo-desgaste-dental-rehabilitacion-carillas-ceramicas",
        titulo: "Los dientes no mienten la edad. Las carillas, sí.",
        subtitulo: "Bruxismo severo + desgaste + amarillamiento — rehabilitación cerámica completa con carillas AM que devolvieron juventud y función",
        descripcion: "Caso de bruxismo severo con desgaste dental avanzado, apiñamiento leve y dientes amarillentos. Rehabilitación cerámica completa con carillas AM lentes de contacto que restauraron la estética y la funcionalidad. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Rehabilitación de Bruxismo con Carillas Cerámicas",
        seoDescription: "Caso de bruxismo severo y desgaste dental resuelto con rehabilitación completa y carillas cerámicas AM en Puerto Madero. Dr. Ariel Merino.",
        categorias: ["Carillas de porcelana", "Bruxismo", "Diseño de sonrisa", "Rehabilitación oral"],
        duracion: "15 días",
        piezas: "Rehabilitación cerámica completa — carillas AM arcada superior e inferior",
        tecnica: "Carillas AM lentes de contacto dental — rehabilitación oclusal — aumento de dimensión vertical por desgaste",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-desgaste-dental-antes-despues-carillas-ceramicas-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
            alt: "Bruxismo y desgaste dental — rehabilitación con carillas cerámicas antes y después — Dr. Ariel Merino AM Estética Dental Buenos Aires",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-desgaste-dental-antes-despues-carillas-ceramicas-labios-portada-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Bruxismo y desgaste dental — rehabilitación con carillas cerámicas antes y después labios portada — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Antes y después — portada",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-dientes-desgastados-amarillentos-antes-rostro-frontal-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Dientes desgastados y amarillentos por bruxismo — antes — rostro frontal — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Antes — rostro frontal",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-rehabilitacion-ceramica-carillas-despues-rostro-frontal-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Rehabilitación cerámica con carillas — después — rostro frontal — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Después — rostro frontal",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-desgaste-intraoral-antes-despues-carillas-ceramicas-rehabilitacion-dr-ariel-merino-am-estetica-dental",
                alt: "Desgaste dental por bruxismo — intraoral antes y después con carillas cerámicas — Dr. Ariel Merino AM Estética Dental",
                caption: "Intraoral — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-arcada-inferior-intraoral-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Bruxismo arcada inferior — intraoral antes y después carillas cerámicas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Arcada inferior — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-labios-sonrisa-antes-despues-carillas-ceramicas-rejuvenecimiento-dr-ariel-merino-am-estetica-dental",
                alt: "Bruxismo labios y sonrisa antes y después — carillas cerámicas rejuvenecimiento dental — Dr. Ariel Merino AM Estética Dental",
                caption: "Labios y sonrisa — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-labios-boca-entreabierta-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Bruxismo boca entreabierta labios antes y después — carillas cerámicas — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Labios — boca entreabierta",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-perfil-antes-despues-rehabilitacion-ceramica-carillas-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Bruxismo perfil antes y después rehabilitación cerámica carillas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Perfil — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/bruxismo-carillas-ceramicas/bruxismo-rostro-perfil-comparativa-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Bruxismo rostro perfil comparativa antes y después carillas cerámicas — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Comparativa de perfil — antes y después",
            },
        ],
        copy: `El bruxismo no avisa. Va desgastando los dientes de a poco, año tras año, hasta que un día el paciente se mira al espejo y ve una sonrisa que no reconoce. Dientes cortos, amarillos, con un apiñamiento que fue creciendo sin que nadie lo notara.

Eso era lo que traía Gustavo cuando llegó a la clínica. Años de apretar y rechinar los dientes de noche habían dejado su huella. No solo en la estética — también en la función. Su mordida estaba comprometida.

El plan fue integral: carillas AM lentes de contacto para devolver volumen, forma y color a cada pieza, con un ajuste de la dimensión vertical que restableció la mordida y quitó la presión acumulada.

El resultado no fue solo una sonrisa nueva. Fue una cara distinta. Diez años menos. Una boca que volvió a funcionar como tenía que funcionar.

A veces la cerámica no es estética. Es terapéutica.`,
        copyRedes: `Años de bruxismo te desgastan los dientes sin que te des cuenta.

Cuando llegó a la clínica tenía los dientes cortos, amarillos y una mordida comprometida.

Carillas AM. Dimensión vertical restituida. 15 días.

Diez años menos en la cara. Una boca que vuelve a funcionar.`,
        precio: {
            total: "USD 18.000",
            nota: "Rehabilitación cerámica completa — carillas AM lentes de contacto dental — restauración de dimensión vertical",
        },
        publicado: true,
        en: {
            titulo: "Teeth never lie about your age. Veneers do.",
            subtitulo: "Severe bruxism + wear + yellowing — complete ceramic rehabilitation with AM veneers that gave back years",
            descripcion: "A clinical case of severe bruxism with tooth wear and yellowing, resolved with a complete ceramic rehabilitation using AM veneers and restoration of vertical dimension. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
            seoTitle: "Bruxism and Tooth Wear: Ceramic Rehabilitation",
            seoDescription: "Severe bruxism and tooth wear resolved with a complete ceramic rehabilitation and restored vertical dimension in 15 days. Dr. Ariel Merino.",
            categorias: ["Porcelain veneers", "Bruxism", "Smile design", "Full rehabilitation"],
            duracion: "15 days",
            piezas: "Complete ceramic rehabilitation — AM veneers, upper and lower arch",
            tecnica: "AM contact lens veneers — occlusal rehabilitation — increase in vertical dimension lost to wear",
            copy: `Bruxism gives no warning. It wears the teeth down little by little, year after year, until one day the patient looks in the mirror and sees a smile they do not recognise. Short teeth, yellow, with a crowding that grew without anyone noticing.

That is what Gustavo brought with him when he came to the clinic. Years of clenching and grinding at night had left their mark. Not only on the aesthetics — on function too. His bite was compromised.

The plan was comprehensive: AM contact lens veneers to restore volume, shape and colour to every tooth, with an adjustment of the vertical dimension that re-established the bite and released the accumulated pressure.

The result was not just a new smile. It was a different face. Ten years younger. A mouth that worked the way it was supposed to work again.

Sometimes ceramic is not aesthetic. It is therapeutic.`,
            fotos: [
                { alt: "Bruxism and tooth wear, before and after complete ceramic rehabilitation with AM veneers — Dr. Ariel Merino, AM Estética Dental", caption: "Before and after — cover image" },
                { alt: "Before — frontal face with worn and yellowed teeth from severe bruxism — AM Estética Dental Buenos Aires", caption: "Before — frontal face" },
                { alt: "After — frontal face following complete ceramic rehabilitation — Dr. Ariel Merino, AM Estética Dental", caption: "After — frontal face" },
                { alt: "Intraoral before and after ceramic rehabilitation for bruxism with restored vertical dimension — AM Estética Dental", caption: "Intraoral — before and after" },
                { alt: "Lower arch before and after complete ceramic rehabilitation — AM Estética Dental Puerto Madero", caption: "Lower arch — before and after" },
                { alt: "Lips and smile before and after ceramic rehabilitation with AM veneers — AM Estética Dental Buenos Aires", caption: "Lips and smile — before and after" },
                { alt: "Lips with mouth slightly open after ceramic rehabilitation — AM Estética Dental Puerto Madero", caption: "Lips — mouth slightly open" },
                { alt: "Profile before and after ceramic rehabilitation with increased vertical dimension — AM Estética Dental", caption: "Profile — before and after" },
                { alt: "Profile comparison before and after complete ceramic rehabilitation for bruxism — Dr. Ariel Merino, AM Estética Dental", caption: "Profile comparison — before and after" },
            ],
        },
    },
    {
        slug: "gingivectomia-laser-sin-bisturi-sangrado-puntos",
        titulo: "Gingivectomía láser: encías sanas sin bisturí, sangrado ni puntos",
        subtitulo: "Encías inflamadas y agrandadas en el maxilar inferior — remodelado del tejido con láser, sin bisturí y sin puntos, combinado con limpieza por ultrasonido",
        descripcion: "Caso clínico de gingivectomía láser en el maxilar inferior, con inflamación gingival y encías agrandadas. Técnica sin bisturí, sin puntos y con menor sangrado, combinada con ultrasonido para una recuperación más rápida. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Gingivectomía Láser sin Bisturí ni Puntos",
        seoDescription: "Caso de gingivectomía láser para encías inflamadas y agrandadas del maxilar inferior: remodelado del tejido sin bisturí, sin puntos y con menor sangrado, más limpieza por ultrasonido. Dr. Ariel Merino.",
        categorias: ["Gingivectomía láser", "Periodoncia"],
        duracion: "Tratamiento personalizado",
        piezas: "Remodelado gingival del sector anteroinferior + limpieza periodontal",
        tecnica: "Gingivectomía con láser (ablación del tejido, sin bisturí ni puntos) + limpieza periodontal por ultrasonido",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/gingivectomia-laser-09-antes-despues-comparativa-2/01-gingivectomia-laser-09-antes-despues-comparativa.png",
            alt: "Antes y después de gingivectomía láser en el maxilar inferior — encía inflamada y agrandada vs. encía sana y contorneada — Dr. Ariel Merino AM Estética Dental Puerto Madero",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/gingivectomia-laser-09-antes-despues-comparativa-2/01-gingivectomia-laser-09-antes-despues-comparativa.png",
                alt: "Antes y después de gingivectomía láser en el maxilar inferior — encía inflamada y agrandada vs. encía sana y contorneada — AM Estética Dental",
                caption: "Antes y después — de la encía inflamada a una encía sana y definida",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/gingivectomia-laser-09-antes-despues-comparativa-2/05-gingivectomia-laser-01-planificacion-recorte-encias.png",
                alt: "Planificación del remodelado gingival antes de la gingivectomía láser — AM Estética Dental Buenos Aires",
                caption: "Planificación del contorno gingival",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/gingivectomia-laser-09-antes-despues-comparativa-2/02-gingivectomia-laser-11-limpieza-ultrasonido.jpg",
                alt: "Limpieza periodontal con ultrasonido complementaria a la gingivectomía láser — AM Estética Dental Puerto Madero",
                caption: "Limpieza periodontal por ultrasonido",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/gingivectomia-laser-09-antes-despues-comparativa-2/03-gingivectomia-laser-07-control-posoperatorio.png",
                alt: "Control posoperatorio de la gingivectomía láser con encía cicatrizada — AM Estética Dental Buenos Aires",
                caption: "Control posoperatorio — cicatrización de la encía",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/gingivectomia-laser-09-antes-despues-comparativa-2/04-gingivectomia-laser-06-registro-intraoral-inicial.jpg",
                alt: "Registro intraoral inicial del caso de gingivectomía láser en el maxilar inferior — AM Estética Dental Puerto Madero",
                caption: "Registro intraoral inicial",
            },
        ],
        copy: `La paciente llegó con una inflamación gingival marcada en el maxilar inferior. No era solo una cuestión de color o de higiene: las encías estaban agrandadas, con exceso de tejido, y eso hacía que la sonrisa se viera más pesada y menos definida.

El plan fue tratar el problema de forma conservadora y precisa: gingivectomía láser para remodelar el tejido gingival y limpieza periodontal combinando láser con ultrasonido. El objetivo no era "recortar por recortar", sino devolverle a la encía una arquitectura más sana, más limpia y más armónica.

La diferencia de esta técnica es enorme. El láser trabaja por ablación, permite retirar tejido con mucha precisión y al mismo tiempo favorece una recuperación más rápida. Al no usar bisturí, el procedimiento reduce el sangrado, evita puntos y suele generar menos sintomatología postoperatoria.

Después se complementó con ultrasonido para remover placa, cálculo e irritantes que sostenían la inflamación. Esa combinación es clave: el láser mejora el manejo del tejido blando, pero la limpieza profunda elimina la causa que mantiene la encía inflamada.

El resultado muestra una encía más desinflamada, con mejor contorno y una sonrisa visualmente más ordenada. Tecnología aplicada con criterio clínico: menos trauma, más precisión y una cicatrización más rápida.

Los resultados corresponden a este caso clínico particular. Cada tratamiento requiere diagnóstico y planificación individual.`,
        copyRedes: `Encías inflamadas y agrandadas que le quitaban definición a la sonrisa.

Gingivectomía con láser en el maxilar inferior: remodelamos el tejido sin bisturí, sin puntos y con menos sangrado. Y limpieza con ultrasonido para eliminar la causa de la inflamación.

Menos trauma, más precisión y una cicatrización más rápida.`,
        precio: {
            total: "Consultar",
            nota: "Gingivectomía láser + limpieza periodontal por ultrasonido. El valor depende de la extensión del remodelado y del estado periodontal.",
        },
        publicado: true,
        en: {
            titulo: "Laser gingivectomy: healthy gums without a scalpel, bleeding or stitches",
            subtitulo: "Inflamed and enlarged gums in the lower arch — tissue reshaped with a laser, without a scalpel or stitches, combined with ultrasonic cleaning",
            descripcion: "A clinical case of laser gingivectomy in the lower arch, with gingival inflammation and enlarged gums. A technique without a scalpel, without stitches and with less bleeding, combined with ultrasound for faster recovery. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
            seoTitle: "Laser Gingivectomy Without Scalpel or Stitches",
            seoDescription: "A case of laser gingivectomy for inflamed and enlarged gums in the lower arch: tissue reshaped without a scalpel, without stitches and with less bleeding. Dr. Ariel Merino.",
            categorias: ["Gum contouring", "Periodontics"],
            duracion: "Tailored treatment",
            piezas: "Gum reshaping of the lower anterior sector + periodontal cleaning",
            tecnica: "Laser gingivectomy (tissue ablation, no scalpel or stitches) + ultrasonic periodontal cleaning",
            copy: `The patient came in with marked gingival inflammation in the lower arch. It was not only a question of colour or hygiene: the gums were enlarged, with excess tissue, and that made the smile look heavier and less defined.

The plan was to treat the problem conservatively and precisely: a laser gingivectomy to reshape the gum tissue, and periodontal cleaning combining laser with ultrasound. The goal was not to "trim for the sake of trimming", but to give the gum a healthier, cleaner and more harmonious architecture.

The difference this technique makes is significant. The laser works by ablation, allowing tissue to be removed with great precision while also supporting faster recovery. By not using a scalpel, the procedure reduces bleeding, avoids stitches and tends to produce fewer post-operative symptoms.

It was then complemented with ultrasound to remove plaque, calculus and irritants that were sustaining the inflammation. That combination is key: the laser improves the handling of soft tissue, but the deep cleaning eliminates the cause keeping the gum inflamed.

The result shows a less inflamed gum, with a better contour and a visually more organised smile. Technology applied with clinical judgment: less trauma, more precision and faster healing.

Results correspond to this particular clinical case. Every treatment requires individual diagnosis and planning.`,
            fotos: [
                { alt: "Before and after laser gingivectomy in the lower arch — inflamed, enlarged gum versus healthy, contoured gum — Dr. Ariel Merino, AM Estética Dental Puerto Madero", caption: "Before and after — from inflamed gum to healthy, defined tissue" },
                { alt: "Planning the gum reshaping before the laser gingivectomy — AM Estética Dental Buenos Aires", caption: "Planning the gum contour" },
                { alt: "Ultrasonic periodontal cleaning complementing the laser gingivectomy — AM Estética Dental Puerto Madero", caption: "Ultrasonic periodontal cleaning" },
                { alt: "Post-operative check-up of the laser gingivectomy with healed gum tissue — AM Estética Dental Buenos Aires", caption: "Post-operative check-up — gum healing" },
                { alt: "Initial intraoral record of the laser gingivectomy case in the lower arch — AM Estética Dental Puerto Madero", caption: "Initial intraoral record" },
            ],
        },
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
