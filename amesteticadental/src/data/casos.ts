export type Categoria = string;

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
    },
    {
        slug: "diseno-sonrisa-cierre-diastemas-dientes-conoidos",
        titulo: "El caso que se viralizó antes de que existiera Instagram.",
        subtitulo: "Diseño de sonrisa · Cierre de diastemas · Dientes conoidos — 10 carillas AM lentes de contacto dental",
        descripcion: "Caso icónico de diseño de sonrisa con cierre de diastemas y dientes conoidos. 10 carillas AM ultra delgadas (0.2-0.3mm). Viral en Facebook antes de Instagram y TikTok. Profesores de odontología de todo el mundo reconocieron este caso. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Diseño de Sonrisa y Cierre de Diastemas con Carillas",
        seoDescription: "Caso de cierre de diastemas y dientes conoidos con 10 carillas ultra delgadas (0.2mm) sin desgaste de esmalte en Puerto Madero. Dr. Ariel Merino.",
        categorias: ["Carillas de porcelana", "Lentes de contacto dental", "Diseño de sonrisa", "Diastemas", "Dientes conoidos"],
        duracion: "10 días",
        piezas: "10 carillas AM lentes de contacto dental (0.2-0.3mm) — sector anterior",
        tecnica: "Carillas AM ultra delgadas tipo lente de contacto dental — sin desgaste significativo — cierre de diastemas y corrección de dientes conoidos",
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
    },
    {
        slug: "carillas-resina-diseno-sonrisa-gingivectomia-laser",
        titulo: "Dientes sanos, sonrisa nueva. Por qué empezar con resina.",
        subtitulo: "10 carillas de resina + gingivectomía láser — diseño de sonrisa en paciente joven sin caries ni tratamientos previos",
        descripcion: "Caso de diseño de sonrisa con 10 carillas de resina compuesta y gingivectomía láser en paciente joven con dientes sanos. Sin caries, sin coronas previas. USD 500 por pieza. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Diseño de Sonrisa con Carillas de Resina",
        seoDescription: "Caso de diseño de sonrisa con 10 carillas de resina y gingivectomía láser en paciente joven con dientes sanos, sin desgaste por el Dr. Ariel Merino.",
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

El resultado fue una sonrisa nueva, en 5 días, sin desgaste del esmalte original.

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
    },
    {
        slug: "carillas-resina-caries-transformacion-extrema-gingivectomia",
        titulo: "En solo una sesión, transforma tu sonrisa.",
        subtitulo: "Caries múltiples + resinas viejas mal hechas + encía montada — remoción completa y diseño de sonrisa en resina con gingivectomía láser",
        descripcion: "Transformación extrema viral en TikTok. Caso de caries múltiples, resinas viejas mal ejecutadas y apiñamiento con encía montada. Remoción total, gingivectomía láser y diseño de sonrisa en resina. All-inclusive USD 5.000. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        seoTitle: "Rehabilitación de Caries y Carillas de Resina",
        seoDescription: "Caso extremo de remoción de caries múltiples, gingivectomía láser y diseño de sonrisa con carillas de resina en Puerto Madero. Dr. Ariel Merino.",
        categorias: ["Carillas de porcelana", "Diseño de sonrisa", "Apiñamiento"],
        duracion: "5 días",
        piezas: "Carillas de resina compuesta — sector anterior completo",
        tecnica: "Remoción de caries y resinas viejas + gingivectomía láser + carillas directas de resina compuesta — llave en mano",
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
        copy: `Hay casos que van más allá de lo estético. Este fue uno.

Llegó con caries activas, resinas viejas mal ejecutadas por otro profesional, encía montada y apiñamiento. La sonrisa estaba deteriorada en todos los frentes — estética, función y salud. Antes de pensar en el resultado final, había que resolver la base.

El plan fue integral. Primero limpiamos todo: remoción de todas las caries, retiro de las resinas anteriores que estaban mal adaptadas. Después gingivectomía láser para nivelar y armonizar la línea gingival — cuando la encía no está a nivel, ninguna carilla va a quedar bien por más perfecta que sea.

Con la base sana y la encía correcta, colocamos las carillas de resina compuesta directa. El resultado fue tan drástico que el caso se viralizó en TikTok.

Todo incluido en un precio: USD 5.000. Remoción de caries, retiro de resinas viejas, gingivectomía láser y diseño de sonrisa en resina — llave en mano.

A veces la transformación más grande empieza por limpiar lo que está mal.`,
        copyRedes: `Caries activas. Resinas viejas mal hechas. Encía montada.

Antes de cualquier estética, hubo que resolver la salud.

Remoción de caries. Gingivectomía láser. Carillas de resina nuevas.

El resultado se viralizó en TikTok. USD 5.000 all-inclusive.`,
        precio: {
            total: "USD 5.000",
            nota: "Incluye: remoción de caries, retiro de resinas viejas, gingivectomía láser y diseño de sonrisa en resina — llave en mano",
        },
        publicado: true,
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
