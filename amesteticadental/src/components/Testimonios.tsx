"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RESENAS } from "@/lib/reviews";

const testimoniosEscritosEn = [
    {
        nombre: "Agustina Zacariaz",
        tratamiento: "Composite veneers",
        texto: "I went in for composite veneers on my two front teeth, and honestly I'm very happy with the results.",
    },
    {
        nombre: "Santiago Ferraro",
        tratamiento: "Overall experience",
        texto: "My experience was great, from walking into the practice to leaving. The care — not just from Ari, but from the whole team working with him — is excellent.",
    },
    {
        nombre: "Valentina Oyarzun",
        tratamiento: "Whitening",
        texto: "I'd wanted to book a consultation with the doctor for a while, and we arranged a whitening. The work turned out beautiful. So happy.",
    },
    {
        nombre: "Camila Rossi",
        tratamiento: "Smile transformation",
        texto: "The only question I ask myself today is why I didn't give myself this smile sooner. It changed my life.",
    },
    {
        nombre: "Julieta Marquez",
        tratamiento: "Premium veneers",
        texto: "I never felt like I was being sold something. They explained everything, and the result looked natural from the very first moment.",
    },
];

const testimoniosEscritos = [
    {
        nombre: "Agustina Zacariaz",
        tratamiento: "Carillas de resina",
        texto: "Fui a realizarme carillas de resina en mis dos dientes frontales, la verdad estoy muy feliz con los resultados.",
    },
    {
        nombre: "Santiago Ferraro",
        tratamiento: "Experiencia general",
        texto: "Mi experiencia fue genial, desde ingresar al consultorio hasta irme, la atencion no solo de Ari, si no de todas las chicas que trabajan con el es excelente.",
    },
    {
        nombre: "Valentina Oyarzun",
        tratamiento: "Blanqueamiento",
        texto: "Hace tiempo queria ir a la consulta con el doctor y organizamos para realizarme un blanqueamiento, me quedo hermoso el trabajo, feliz.",
    },
    {
        nombre: "Camila Rossi",
        tratamiento: "Transformacion de sonrisa",
        texto: "La unica pregunta que me hago hoy es por que no me anime antes a regalarme esta sonrisa que cambio mi vida.",
        destacado: true,
    },
    {
        nombre: "Julieta Marquez",
        tratamiento: "Carillas premium",
        texto: "Nunca senti que me vendieran algo. Me explicaron todo y el resultado se vio natural desde el primer momento.",
    },
];

// `loop` es la base de dos archivos propios: `.mp4`, un recorte mudo de ocho
// segundos del mismo testimonio, y `.jpg`, su primer fotograma. Hacen falta
// porque YouTube no deja que un embed arranque solo ni aunque este muteado —
// devuelve el poster con su boton rojo — y las tarjetas quedaban como cinco
// caras congeladas. El clip propio si se reproduce; el click sigue abriendo el
// testimonio entero, con sonido, desde YouTube.
const videosTestimonios = [
    { id: "video-1", youtubeId: "oqcaGGGAs5Y", loop: "/videos/testimonios/testimonio-1", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
    { id: "video-2", youtubeId: "vlWiV96jQmY", loop: "/videos/testimonios/testimonio-2", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
    { id: "video-3", youtubeId: "UxmkQbFERcw", loop: "/videos/testimonios/testimonio-3", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
    { id: "video-4", youtubeId: "DdBeH4XaJUY", loop: "/videos/testimonios/testimonio-4", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
    { id: "video-5", youtubeId: "bMwbSxNCZIA", loop: "/videos/testimonios/testimonio-5", nombre: "Caso real", tratamiento: "Testimonio de paciente" },
];

function Stars({ small = false }: { small?: boolean }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={small ? "h-3.5 w-3.5 text-oro" : "h-4 w-4 text-oro"}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

function ReviewCard({ review, featured = false }: { review: (typeof testimoniosEscritos)[0]; featured?: boolean }) {
    return (
        <article
            className={featured
                ? "relative min-w-[20rem] max-w-[36rem] rounded-[2rem] border border-oro/24 bg-[linear-gradient(180deg,rgba(242,185,13,0.1),rgba(13,13,13,0.02))] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
                : "relative min-w-[19rem] max-w-[24rem] rounded-[1.75rem] border border-white/6 bg-carbon-soft/92 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-sm"
            }
        >
            <div className="mb-5 flex items-start gap-4">
                <div className={featured
                    ? "flex h-12 w-12 flex-none items-center justify-center rounded-full border border-oro/25 bg-oro/10"
                    : "flex h-11 w-11 flex-none items-center justify-center rounded-full border border-oro/15 bg-oro/8"}>
                    <span className="font-manrope text-sm font-semibold text-oro">{review.nombre.charAt(0)}</span>
                </div>
                <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center justify-between gap-3">
                        <div>
                            <p className="font-manrope text-sm font-medium text-crema md:text-[15px]">{review.nombre}</p>
                            <p className="font-manrope text-[11px] uppercase tracking-[0.24em] text-oro/55">{review.tratamiento}</p>
                        </div>
                        <Stars small />
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/3 px-3 py-1 font-manrope text-[10px] uppercase tracking-[0.24em] text-crema/45">
                        <span className="h-1.5 w-1.5 rounded-full bg-oro" />
                        Google review
                    </div>
                </div>
            </div>

            <p className={featured
                ? "font-manrope text-lg leading-relaxed text-crema"
                : "font-manrope text-sm leading-relaxed text-crema/78"}>
                &ldquo;{review.texto}&rdquo;
            </p>
        </article>
    );
}

function VideoCard({
    video,
    preview = false,
    lang = "es",
    onPlay,
    onStop,
}: {
    video: typeof videosTestimonios[0];
    preview?: boolean;
    lang?: "es" | "en";
    onPlay?: () => void;
    onStop?: () => void;
}) {
    const ui = UI[lang];
    const [playing, setPlaying] = useState(false);
    // El loop mudo tarda un instante en dar imagen. Hasta que no esta
    // corriendo de verdad se queda transparente y se ve el poster debajo, asi
    // no hay un parpadeo negro entre uno y otro.
    const [loopCorriendo, setLoopCorriendo] = useState(false);
    const marco = useRef<HTMLDivElement>(null);
    const clip = useRef<HTMLVideoElement>(null);

    // El loop corre cuando la cinta puso a esta tarjeta en la ventana visible
    // y nadie abrio todavia el testimonio con sonido. Quien esta a la vista lo
    // decide el carrusel con la posicion de la cinta, no un observer: es una
    // cuenta y no una promesa del navegador.
    const mostrarLoop = preview && !playing;

    const detener = useCallback(() => {
        setPlaying(false);
        onStop?.();
    }, [onStop]);

    // Un video que deja de verse tiene que dejar de sonar. Si el carrusel lo
    // corre de lugar, o la persona sigue scrolleando la pagina, el iframe queda
    // fuera de pantalla y sigue con audio: se escucha una voz hablando y no hay
    // forma de saber de donde sale ni como callarla. Al salir de vista se
    // desmonta el iframe y vuelve la portada.
    useEffect(() => {
        if (!playing) return;
        const el = marco.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entrada]) => {
                if (!entrada.isIntersecting) detener();
            },
            { threshold: 0.35 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [playing, detener]);

    // Arranca el recorte cuando la tarjeta entra en turno. play() puede ser
    // rechazado — una politica de autoplay mas estricta, el ahorro de datos —
    // y en ese caso simplemente queda el poster, que es lo que habia antes.
    //
    // El reintento en `visibilitychange` no es decorativo: Chrome pausa el
    // video mudo sin pista de audio cuando la pestana pasa a segundo plano
    // (bien por la bateria) pero no lo vuelve a arrancar al volver. Sin esto,
    // quien cambia de pestana y regresa se encuentra la tarjeta congelada, que
    // es exactamente lo que veniamos a arreglar.
    useEffect(() => {
        if (!mostrarLoop) return;
        const v = clip.current;
        if (!v) return;
        const arrancar = () => {
            if (document.hidden) return;
            v.play().catch(() => setLoopCorriendo(false));
        };
        arrancar();
        document.addEventListener("visibilitychange", arrancar);
        // El reset va en la limpieza y no en el cuerpo: cuando la tarjeta sale
        // de cuadro el <video> se desmonta, y si quedara marcado como
        // corriendo, al volver a entrar apareceria opaco de una sobre un
        // cuadro todavia negro, sin el fundido.
        return () => {
            document.removeEventListener("visibilitychange", arrancar);
            setLoopCorriendo(false);
        };
    }, [mostrarLoop]);

    return (
        <div ref={marco} className="group relative aspect-[9/16] overflow-hidden rounded-[1.6rem] border border-oro/8 bg-carbon-soft">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.6rem] p-px opacity-55 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background:
                        "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(242,185,13,0.05) 320deg, rgba(249,220,106,0.32) 344deg, rgba(255,250,214,0.7) 352deg, transparent 360deg)",
                    animation: "comet-orbit 9.5s linear infinite",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />
            <div className="pointer-events-none absolute inset-[1.5px] rounded-[calc(1.6rem-1.5px)] bg-carbon-soft/70 backdrop-blur-[1px]" />
            {!playing ? (
                <>
                    <Image
                        src={`${video.loop}.jpg`}
                        alt={ui.alt}
                        fill
                        sizes="(max-width: 768px) 92vw, 30vw"
                        className="absolute inset-[1.5px] h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-[calc(1.6rem-1.5px)] object-cover brightness-[0.72]"
                        unoptimized
                    />
                    {mostrarLoop && (
                        <video
                            ref={clip}
                            src={`${video.loop}.mp4`}
                            muted
                            loop
                            playsInline
                            preload="none"
                            aria-hidden="true"
                            tabIndex={-1}
                            onPlaying={() => setLoopCorriendo(true)}
                            className={`absolute inset-[1.5px] h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-[calc(1.6rem-1.5px)] object-cover brightness-[0.72] transition-opacity duration-700 ${loopCorriendo ? "opacity-100" : "opacity-0"}`}
                        />
                    )}
                    {loopCorriendo && (
                        <span className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-white/12 bg-carbon/65 px-2.5 py-1 font-manrope text-[9px] uppercase tracking-[0.2em] text-crema/60 backdrop-blur-sm">
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M11 5 6 9H2v6h4l5 4V5z" />
                                <path d="m23 9-6 6" />
                                <path d="m17 9 6 6" />
                            </svg>
                            {ui.mudo}
                        </span>
                    )}
                    <div className="absolute inset-[1.5px] rounded-[calc(1.6rem-1.5px)] bg-gradient-to-b from-carbon/18 via-transparent to-carbon/76" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={() => {
                                setPlaying(true);
                                onPlay?.();
                            }}
                            className="relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-105"
                            aria-label={mostrarLoop ? ui.conSonido : ui.play}
                        >
                            <span className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,#8f5b11_0%,#c88412_18%,#f0b10d_36%,#fff0b1_52%,#f4c646_68%,#8f5b11_100%)] shadow-[0_0_22px_rgba(242,185,13,0.26)]" />
                            <span className="absolute inset-[-6px] rounded-full border border-oro/30 animate-pulse opacity-70" />
                            <svg className="relative z-10 ml-1 h-6 w-6 text-carbon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute right-0 bottom-0 left-0 p-5">
                        <span className="mb-1 block font-manrope text-xs uppercase tracking-widest text-oro/70">
                            {video.tratamiento}
                        </span>
                        <span className="font-manrope text-sm font-medium text-crema">{video.nombre}</span>
                    </div>
                </>
            ) : (
                <>
                    <button
                        onClick={detener}
                        aria-label={ui.cerrar}
                        className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-carbon/80 text-crema/80 backdrop-blur-sm transition-colors hover:border-oro/50 hover:text-oro"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <iframe
                        className="absolute inset-[1.5px] h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-[calc(1.6rem-1.5px)]"
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.nombre}
                    />
                </>
            )}
        </div>
    );
}

// Cuantas tarjetas entran a la vez en escritorio. En celular, una.
const VISIBLE_DESKTOP = 3;

// Lo que tarda la cinta en correr una tarjeta. Es a la vez cada cuanto avanza
// y cuanto dura la transicion, y esa igualdad es todo el truco: si la
// transicion dura exactamente lo que el intervalo, no hay un instante en que
// la cinta este detenida. Tres tarjetas que se quedan quietas cinco segundos
// se leen como "tengo tres testimonios"; una cinta que nunca frena se lee como
// una lista que no termina, que es lo que hay.
const PASO_MS = 4600;

// Cuando el movimiento lo pide una persona con las flechas, la cinta corre esa
// tarjeta rapido en vez de hacerla esperar una vuelta entera.
const PASO_MANUAL_MS = 620;

const UI = {
    es: {
        eyebrow: "Testimonios",
        h2a: "Pacientes reales,",
        h2b: "en sus propias palabras",
        h2ca: "Lo que dicen quienes ya",
        h2cb: "confiaron en nosotros",
        play: "Reproducir testimonio",
        conSonido: "Ver este testimonio con sonido",
        mudo: "Sin sonido",
        cerrar: "Cerrar video",
        alt: "Testimonio en video de un paciente de AM Estética Dental",
        prev: "Anterior",
        next: "Siguiente",
        note: "",
    },
    en: {
        eyebrow: "Testimonials",
        h2a: "Real patients,",
        h2b: "in their own words",
        h2ca: "What those who already",
        h2cb: "trusted us have to say",
        play: "Play testimonial",
        conSonido: "Watch this testimonial with sound",
        mudo: "Muted",
        cerrar: "Close video",
        alt: "Video testimonial from an AM Estética Dental patient",
        prev: "Previous",
        next: "Next",
        note: "Written testimonials translated from Spanish. Video testimonials are in Spanish.",
    },
} as const;

function VideoCarousel({ lang = "es" }: { lang?: "es" | "en" }) {
    const ui = UI[lang];
    const total = videosTestimonios.length;

    // La pista lleva los videos mas un clon de los primeros. Cuando el indice
    // llega al final, lo que se ve en pantalla es identico al principio, asi
    // que se puede volver a 0 sin animacion y el bucle no tiene costura: da la
    // vuelta para siempre en vez de frenarse en el ultimo.
    const pista = useMemo(
        () => [...videosTestimonios, ...videosTestimonios.slice(0, VISIBLE_DESKTOP)],
        []
    );

    const raiz = useRef<HTMLDivElement>(null);

    const [idx, setIdx] = useState(0);
    const [sinAnimacion, setSinAnimacion] = useState(false);
    // Cuanto dura la transicion en curso. Normalmente es PASO_MS, que es lo que
    // mantiene la cinta en movimiento continuo; baja solo cuando alguien toca
    // una flecha.
    const [duracion, setDuracion] = useState(PASO_MS);
    const [enVista, setEnVista] = useState(true);
    const [esEscritorio, setEsEscritorio] = useState<boolean | null>(null);
    // Una vez que alguien abre un video, la cinta deja de moverse. No hay nada
    // peor que se te deslice el testimonio que estabas mirando.
    const [mirando, setMirando] = useState(false);
    const [menosMovimiento, setMenosMovimiento] = useState(false);

    // Quien pidio en su sistema que se reduzcan las animaciones no recibe una
    // cinta que se mueve sola ni videos en loop: se queda con las flechas.
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const sync = () => setMenosMovimiento(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    // Los dos tracks estan siempre los dos en el DOM y CSS decide cual se ve.
    // Sin esto se pondrian a descargar tambien los videos del que esta oculto.
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const sync = () => setEsEscritorio(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    // Si la seccion esta en pantalla se resuelve con un intervalo y una lectura
    // de layout, y no con un IntersectionObserver: de esto depende que la cinta
    // se mueva, y un observer que no contesta deja la cinta quieta, que es
    // justo el sintoma que venimos a matar. Cinco lecturas por segundo de un
    // solo rectangulo no le pesan a nadie.
    useEffect(() => {
        const mirar = () => {
            const r = raiz.current?.getBoundingClientRect();
            setEnVista(!!r && r.bottom > 0 && r.top < window.innerHeight);
        };
        const id = setInterval(mirar, 200);
        return () => clearInterval(id);
    }, []);

    // Salta a `destino` sin transicion y, si se pide, arranca desde ahi hacia
    // `luego` en cuanto el salto ya esta pintado, para que ese movimiento si se
    // vea. Son temporizadores y no requestAnimationFrame porque el salto tiene
    // que ocurrir aunque el navegador no este dibujando cuadros.
    const saltar = useCallback((destino: number, luego?: number) => {
        setSinAnimacion(true);
        setIdx(destino);
        setTimeout(() => {
            setSinAnimacion(false);
            if (luego !== undefined) setIdx(luego);
        }, 30);
    }, []);

    const quieto = mirando || menosMovimiento || !enVista;

    // Cierre del bucle: el salto invisible al principio. Encadena con `luego`
    // para que la cinta siga de largo en vez de quedarse un paso entero quieta
    // sobre la costura.
    useEffect(() => {
        if (idx !== total) return;
        const t = setTimeout(() => saltar(0, 1), duracion);
        return () => clearTimeout(t);
    }, [idx, total, duracion, saltar]);

    // Avance automatico. El intervalo es la duracion de la transicion en curso:
    // en cuanto una tarjeta termino de correr, ya arranco la siguiente.
    useEffect(() => {
        if (quieto || idx >= total) return;
        const t = setTimeout(() => {
            setDuracion(PASO_MS);
            setIdx((i) => i + 1);
        }, duracion);
        return () => clearTimeout(t);
    }, [idx, quieto, total, duracion]);

    const next = () => {
        if (idx >= total) return;
        setDuracion(PASO_MANUAL_MS);
        setIdx(idx + 1);
    };
    // Desde el primero hacia atras: se salta al clon del final (que se ve igual
    // que el primero) y recien ahi se retrocede un paso, con animacion.
    const prev = () => {
        setDuracion(PASO_MANUAL_MS);
        if (idx > 0) setIdx(idx - 1);
        else saltar(total, total - 1);
    };

    const irA = (i: number) => {
        setDuracion(PASO_MANUAL_MS);
        setIdx(i);
    };

    // offset as % of track width
    const offsetDesktop = `calc(${idx} * (100% / ${VISIBLE_DESKTOP}) * -1)`;
    const offsetMobile = `calc(${idx} * -100%)`;
    // Lineal y del largo del intervalo: la cinta va siempre al mismo ritmo, sin
    // acelerar ni frenar en cada tarjeta.
    const transicion = sinAnimacion ? "none" : `transform ${duracion}ms linear`;
    const activo = idx % total;

    // La cinta esta casi siempre a mitad de camino entre dos tarjetas, asi que
    // la ventana visible arranca una tarjeta antes del indice: la que todavia
    // esta saliendo por el borde tiene que seguir reproduciendo.
    const puedeCorrer = enVista && !mirando && !menosMovimiento;
    const previewMovil = (i: number) =>
        puedeCorrer && esEscritorio === false && i >= idx - 1 && i <= idx;
    const previewEscritorio = (i: number) =>
        puedeCorrer && esEscritorio === true && i >= idx - 1 && i <= idx + VISIBLE_DESKTOP - 1;

    const tarjeta = (video: (typeof pista)[number], corre: boolean) => (
        <VideoCard
            video={video}
            lang={lang}
            preview={corre}
            onPlay={() => setMirando(true)}
            onStop={() => setMirando(false)}
        />
    );

    return (
        <div ref={raiz} className="relative">
            {/* ── Carousel track ── */}
            <div className="overflow-hidden">
                {/* Mobile: 1 visible */}
                <div
                    className="flex md:hidden will-change-transform"
                    style={{ transform: `translateX(${offsetMobile})`, transition: transicion }}
                >
                    {pista.map((video, i) => (
                        <div key={`${video.id}-m${i}`} className="flex-shrink-0 w-full px-4">
                            {tarjeta(video, previewMovil(i))}
                        </div>
                    ))}
                </div>

                {/* Desktop: 3 visible */}
                <div
                    className="hidden md:flex will-change-transform"
                    style={{ transform: `translateX(${offsetDesktop})`, transition: transicion }}
                >
                    {pista.map((video, i) => (
                        <div
                            key={`${video.id}-d${i}`}
                            className="flex-shrink-0 px-3"
                            style={{ width: `calc(100% / ${VISIBLE_DESKTOP})` }}
                        >
                            {tarjeta(video, previewEscritorio(i))}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Navigation ── */}
            <div className="mt-8 flex items-center justify-between px-4 md:px-2">
                {/* Dots */}
                <div className="flex gap-2">
                    {videosTestimonios.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => irA(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === activo ? "w-6 bg-oro" : "w-1.5 bg-crema/20"
                            }`}
                            aria-label={`Ir al testimonio ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                    <button
                        onClick={prev}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-oro/20 text-crema/60 transition-all hover:border-oro/50 hover:text-oro"
                        aria-label={ui.prev}
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-oro/20 text-crema/60 transition-all hover:border-oro/50 hover:text-oro"
                        aria-label={ui.next}
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default function Testimonios({ lang = "es" }: { lang?: "es" | "en" }) {
    const ui = UI[lang];
    const escritos = lang === "en" ? testimoniosEscritosEn : testimoniosEscritos;
    const marqueeTrack = useMemo(() => [...escritos, ...escritos], [escritos]);
    const marqueeTrackReverse = useMemo(() => [...escritos].reverse().concat([...escritos].reverse()), [escritos]);

    return (
        <>
            {/* ── BLOQUE 1: Testimonios en video ── */}
            <section id="testimonios" className="relative z-10 bg-carbon-soft border-y border-oro/10 px-4 py-24">
                <div className="mx-auto max-w-[88rem]">
                    <div className="mb-12 max-w-2xl px-4 md:px-8">
                        <span className="mb-4 block font-manrope text-[10px] uppercase tracking-[0.4em] text-oro">
                            {ui.eyebrow}
                        </span>
                        <h2 className="font-manrope text-3xl font-light leading-tight text-crema md:text-4xl">
                            {ui.h2a}{" "}
                            <span className="font-cormorant italic text-oro">{ui.h2b}</span>
                        </h2>
                    </div>
                    <div className="px-1 md:px-5">
                        <VideoCarousel lang={lang} />
                    </div>
                </div>
            </section>

            {/* ── BLOQUE 2: Google Reviews ── */}
            <section id="reviews" className="relative z-10 overflow-hidden bg-carbon px-4 py-24">
                <div className="mx-auto max-w-[88rem]">

                    {/* Header */}
                    <div className="mb-14 px-4 md:px-8">
                        <span className="mb-5 inline-flex rounded-full border border-oro/15 bg-oro/8 px-4 py-1.5 font-manrope text-[10px] uppercase tracking-[0.38em] text-oro-light">
                            Google Reviews
                        </span>
                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <a
                                href="https://g.page/r/CQ3df5Xn-J6oEBM/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/rating flex items-end gap-5 transition-opacity hover:opacity-80"
                            >
                                <span className="font-manrope text-[5rem] leading-none font-light text-crema transition-colors group-hover/rating:text-oro md:text-[7rem]">4.9</span>
                                <div className="space-y-2 pb-2">
                                    <Stars />
                                    <p className="font-manrope text-sm font-medium text-crema">
                                        {RESENAS.esVerificadas}
                                    </p>
                                    <p className="font-manrope text-[11px] uppercase tracking-[0.28em] text-crema/40">
                                        Google Maps · Puerto Madero · ver todas →
                                    </p>
                                </div>
                            </a>
                            <h2 className="max-w-lg font-manrope text-2xl font-light leading-snug text-crema/70 md:text-3xl md:text-right">
                                {ui.h2ca}{" "}
                                <span className="font-cormorant italic text-oro">{ui.h2cb}</span>
                            </h2>
                        </div>
                    </div>

                    {/* Marquee fila 1 */}
                    <div
                        className="mb-6 overflow-hidden"
                        style={{
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        }}
                    >
                        <div className="reviews-marquee group flex gap-6">
                            <div className="reviews-marquee-track flex min-w-max gap-6 group-hover:[animation-play-state:paused]">
                                {marqueeTrack.map((review, index) => (
                                    <ReviewCard key={`${review.nombre}-${index}`} review={review} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Marquee fila 2 */}
                    <div
                        className="overflow-hidden"
                        style={{
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                        }}
                    >
                        <div className="reviews-marquee group flex gap-6">
                            <div className="reviews-marquee-track-reverse flex min-w-max gap-6 group-hover:[animation-play-state:paused]">
                                {marqueeTrackReverse.map((review, index) => (
                                    <ReviewCard key={`${review.nombre}-reverse-${index}`} review={review} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Link a Google */}
                    <div className="mt-10 px-4 text-center md:px-8">
                        <a
                            href="https://g.page/r/CQ3df5Xn-J6oEBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-manrope text-xs text-crema/35 hover:text-crema/60 transition-colors"
                        >
                            ★ Ver todas las reseñas en Google →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
