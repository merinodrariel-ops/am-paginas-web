// Fuente única de verdad de las apariciones en prensa del Dr. Ariel Merino.
//
// Por qué existe: las notas estaban hardcodeadas dentro de `Prensa.tsx`, que se
// monta en la home, en /dr-ariel-merino y en /en. Cada vez que queríamos usar
// una cita en otra página —por ejemplo, la de La Nación sobre bruxismo dentro de
// la página de precio de bruxismo— había que copiarla. Copiar una cita de prensa
// es la forma más rápida de que dos páginas del mismo sitio atribuyan la misma
// frase a medios distintos.
//
// La distinción que más importa acá no es el medio, es el ROL:
//   - `autor`      → la nota la escribió y la firma el Dr. Merino. Es la señal
//                    de autoridad más fuerte que tiene el sitio: no es que lo
//                    mencionaron, es que el medio le dio la firma.
//   - `consultado` → el medio lo buscó como fuente especializada.
// Se muestran distinto a propósito, porque valen distinto.
//
// Reglas al agregar una nota:
//   1. Verificar la URL (200, y que sea la definitiva, no una que redirige).
//   2. `cita` va SOLO si es textual de la nota. Si no se pudo verificar la
//      frase exacta, se deja vacía antes que aproximarla: una cita inventada en
//      la web de un profesional de la salud es un problema, no un adorno.
//   3. `temas` es lo que permite traer la nota a la página correcta. Sin eso,
//      todas terminan enterradas en /prensa, que es donde menos hacen falta.

export type RolPrensa = "autor" | "consultado";

export type NotaPrensa = {
    /** Slug estable, para keys y anclas. */
    id: string;
    medio: string;
    rol: RolPrensa;
    titular: string;
    /** ISO. Se usa para ordenar y para el schema. */
    fecha: string;
    href: string;
    /** Resumen propio, para las tarjetas. */
    extracto: string;
    /** Frase textual de la nota. Vacío si no se verificó. */
    cita?: string;
    /** Para traer la nota a la página que corresponde. */
    temas: string[];
    /** Sindicaciones de la misma nota en otros medios. */
    replicadaEn?: { medio: string; href: string }[];
};

export const NOTAS_PRENSA: NotaPrensa[] = [
    // ── Columnas firmadas por el Dr. Merino ──────────────────────────────
    {
        id: "lanacion-guia-alimentaria",
        medio: "La Nación",
        rol: "autor",
        titular: "El impacto de la nueva guía alimentaria de los Estados Unidos en la salud bucal",
        fecha: "2026-01-29",
        href: "https://www.lanacion.com.ar/salud/el-impacto-de-la-nueva-guia-alimentaria-de-los-estados-unidos-en-la-salud-bucal-nid28012026/",
        extracto: "Columna firmada por el Dr. Merino sobre cómo el recorte de carbohidratos refinados cambia el terreno donde aparecen la caries y la enfermedad periodontal.",
        temas: ["alimentacion", "longevidad", "prevencion"],
    },
    {
        id: "ambito-bruxismo-longevidad",
        medio: "Ámbito",
        rol: "autor",
        titular: "Bruxismo: el enemigo silencioso del sueño, la salud y la longevidad",
        fecha: "2025-10-17",
        href: "https://www.ambito.com/lifestyle/bruxismo-el-enemigo-silencioso-del-sueno-la-salud-y-la-longevidad-n6203197",
        extracto: "Columna firmada por el Dr. Merino: por qué el bruxismo no es un problema de dientes sino de sueño, y qué pasa en el cuerpo cuando el descanso se rompe todas las noches.",
        temas: ["bruxismo", "sueno", "longevidad"],
    },
    {
        id: "lanacion-robotica",
        medio: "La Nación",
        rol: "autor",
        titular: "La revolución de la robótica en la odontología ya es una realidad",
        fecha: "2025-03-10",
        href: "https://www.lanacion.com.ar/salud/la-revolucion-de-la-robotica-en-la-odontologia-ya-es-una-realidad-nid10032025/",
        extracto: "Artículo firmado por el Dr. Ariel Merino (M.N. 34.869) en el diario de referencia más leído de Argentina.",
        temas: ["tecnologia", "ia"],
    },
    {
        id: "ambito-turismo-dental",
        medio: "Ámbito",
        rol: "autor",
        titular: "¿Por qué la Argentina es una parada obligada a la hora de rediseñar la sonrisa?",
        fecha: "2024-11-01",
        href: "https://www.ambito.com/lifestyle/por-que-la-argentina-es-una-parada-obligada-la-hora-redisenar-la-sonrisa-n6021134",
        extracto: "Columna de opinión firmada por el Dr. Ariel Merino para el diario económico de mayor tirada de Argentina.",
        temas: ["turismo-dental", "carillas", "diseno-de-sonrisa"],
    },

    // ── Consultado como fuente especializada ─────────────────────────────
    {
        id: "parati-guia-alimentaria",
        medio: "Para Ti",
        rol: "consultado",
        titular: "Lo que comemos y la salud bucal: qué cambia con la nueva guía alimentaria de EE.UU.",
        fecha: "2026-01-26",
        href: "https://www.parati.com.ar/lifestyle/lo-que-comemos-y-la-salud-bucal-que-cambia-con-la-nueva-guia-alimentaria-de-ee-uu/",
        extracto: "El Dr. Merino, consultado sobre el giro de la odontología reparadora hacia la preventiva.",
        cita: "La odontología abordó durante mucho tiempo las consecuencias, pero no siempre el origen",
        temas: ["alimentacion", "prevencion", "longevidad"],
    },
    {
        id: "ohlala-longevidad",
        medio: "Somos Ohlalá",
        rol: "consultado",
        titular: "10 consejos para cuidar la salud bucal y vivir más años, según un experto",
        fecha: "2026-01-09",
        href: "https://www.somosohlala.com/lifestyle/salud/10-consejos-para-cuidar-la-salud-bucal-y-vivir-mas-anos-segun-un-experto-nid09012026",
        extracto: "\"Experto consultado: Dr. Ariel Merino, odontólogo, experto en estética dental.\" — Somos Ohlalá, enero 2026.",
        temas: ["longevidad", "prevencion"],
    },
    {
        id: "parati-longevidad",
        medio: "Para Ti",
        rol: "consultado",
        titular: "Salud bucal y longevidad: por qué una buena sonrisa puede ayudarte a vivir más",
        fecha: "2025-12-22",
        href: "https://www.parati.com.ar/lifestyle/salud-bucal-y-longevidad-por-que-una-buena-sonrisa-puede-ayudarte-a-vivir-mas/",
        extracto: "Entrevista al Dr. Merino sobre cómo las bacterias de las encías enfermas viajan por el torrente sanguíneo y alcanzan el corazón y el cerebro.",
        temas: ["longevidad", "prevencion", "encias"],
    },
    {
        id: "lanacion-bruxismo-ejercicios",
        medio: "La Nación",
        rol: "consultado",
        titular: "Contra el bruxismo: cinco ejercicios sencillos para calmar este mecanismo inconsciente",
        fecha: "2025-09-30",
        href: "https://www.lanacion.com.ar/salud/contra-el-bruxismo-cinco-ejercicios-sencillos-para-calmar-este-mecanismo-inconsciente-nid30092025/",
        extracto: "El Dr. Merino como especialista de referencia para La Nación en el abordaje clínico del bruxismo.",
        temas: ["bruxismo"],
    },
    {
        id: "infobae-pasta-cabellos",
        medio: "Infobae",
        rol: "consultado",
        titular: "Científicos desarrollan una pasta dentífrica hecha con cabellos que podría reparar los dientes",
        fecha: "2025-08-14",
        href: "https://www.infobae.com/salud/ciencia/2025/08/14/cientificos-desarrollan-una-pasta-dentifrica-hecha-con-cabellos-que-podria-ser-una-opcion-para-reparar-los-dientes/",
        extracto: "El Dr. Ariel Merino como fuente especializada para el medio de mayor audiencia digital de Argentina.",
        temas: ["tecnologia", "prevencion"],
    },
    {
        id: "infobae-posturas-dormir",
        medio: "Infobae",
        rol: "consultado",
        titular: "Las posturas al dormir que pueden mejorar o perjudicar el sueño, según los especialistas",
        fecha: "2025-02-01",
        href: "https://www.infobae.com/salud/2025/02/02/las-posturas-al-dormir-que-pueden-mejorar-o-perjudicar-el-sueno-segun-los-especialistas/",
        extracto: "Consultado por Infobae sobre el peso del bruxismo en la calidad del sueño: casi el 80% de la población tiene algún rasgo.",
        cita: "el bruxismo es como una pandemia",
        temas: ["bruxismo", "sueno"],
    },
    {
        id: "parati-ayuno",
        medio: "Para Ti",
        rol: "consultado",
        titular: "El ayuno intermitente promueve la estética dental y de toda la boca",
        fecha: "2024-06-15",
        href: "https://www.parati.com.ar/lifestyle/el-ayuno-intermitente-promueve-la-estetica-dental-y-de-toda-la-boca/",
        extracto: "El Dr. Merino explica por qué concentrar las comidas en menos horas le da tiempo a la saliva a hacer su trabajo.",
        temas: ["alimentacion", "prevencion"],
    },
    {
        id: "lanacion-regeneracion",
        medio: "La Nación",
        rol: "consultado",
        titular: "Científicos japoneses avanzan en un tratamiento que podría regenerar dientes",
        fecha: "2024-08-04",
        href: "https://www.lanacion.com.ar/sociedad/cambio-radical-cientificos-japoneses-avanzan-en-el-desarrollo-de-un-tratamiento-que-podria-regenerar-nid04082024/",
        extracto: "Consultado por La Nación sobre el fármaco japonés que bloquea el gen USAG-1 para hacer crecer piezas nuevas.",
        cita: "todo apunta a que el medicamento será similar a una vacuna que se aplica de manera endovenosa",
        temas: ["tecnologia", "implantes"],
        replicadaEn: [
            {
                medio: "Yahoo Noticias",
                href: "https://es-us.noticias.yahoo.com/deportes/cambio-radical-cient%C3%ADficos-japoneses-avanzan-150000484.html",
            },
        ],
    },
    {
        id: "forbes-ia-sonrisa",
        medio: "Forbes Argentina",
        rol: "consultado",
        titular: "Del 1 al 10, ¿qué tan linda es tu sonrisa? La IA te lo dirá en segundos",
        fecha: "2024-05-01",
        href: "https://www.forbesargentina.com/innovacion/del-1-10-que-tan-linda-tu-sonrisa-ia-te-lo-dira-segundos-n51306",
        extracto: "El Dr. Ariel Merino y AM Estética Dental, referentes en la incorporación de inteligencia artificial al diseño de sonrisa en Argentina.",
        temas: ["ia", "tecnologia", "diseno-de-sonrisa"],
    },
    {
        id: "odontoespacio-perfil",
        medio: "OdontoEspacio",
        rol: "autor",
        titular: "Perfil de autor: Dr. Ariel Merino",
        fecha: "2024-01-01",
        href: "https://www.odontoespacio.net/autores/ariel-merino/",
        extracto: "Perfil de autor en el portal profesional de odontología, con las notas técnicas firmadas por el Dr. Merino.",
        temas: ["profesional"],
    },
];

/** Notas de un tema, de la más nueva a la más vieja. */
export function notasPorTema(tema: string, limite?: number): NotaPrensa[] {
    const r = NOTAS_PRENSA.filter((n) => n.temas.includes(tema)).sort((a, b) =>
        b.fecha.localeCompare(a.fecha)
    );
    return limite ? r.slice(0, limite) : r;
}

/** Notas con frase textual verificada: sirven como prueba dentro de una página. */
export function citasPorTema(tema: string, limite?: number): NotaPrensa[] {
    return notasPorTema(tema, limite).filter((n) => n.cita);
}

export const NOTAS_POR_FECHA = [...NOTAS_PRENSA].sort((a, b) =>
    b.fecha.localeCompare(a.fecha)
);

export const TOTAL_NOTAS = NOTAS_PRENSA.length;
export const TOTAL_COLUMNAS_FIRMADAS = NOTAS_PRENSA.filter((n) => n.rol === "autor").length;
