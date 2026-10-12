// Visual del hero de /carillas-de-resina-impresas-3d (opción A elegida por el Dr.).
//
// Incisivo central superior visto desde vestibular, en malla dorada: el contorno
// se traza, una línea de escaneo sube desde el borde incisal hasta el cuello y la
// carilla se "imprime" capa por capa detrás de ella.
//
// SVG + CSS puro, sin JavaScript en el cliente: se renderiza en el servidor y
// respeta `prefers-reduced-motion` (queda el diente terminado, sin animación).
//
// Cuando esté lista la animación de Magnific, pasar `videoSrc` con la URL mp4 de
// Cloudinary (res.cloudinary.com/drctvgyqd/video/upload/...) y opcionalmente
// `poster`. El video reemplaza al SVG sin tocar la página.

type Props = {
    /** URL mp4 (Cloudinary) que reemplaza al wireframe cuando exista. */
    videoSrc?: string;
    /** Imagen de portada del video (opcional). */
    poster?: string;
    className?: string;
    /** Texto alternativo / etiqueta accesible. */
    label?: string;
};

// ── Geometría ────────────────────────────────────────────────────────────────
// Silueta de la cara vestibular en una caja de 100×125: cuello arriba, borde
// incisal abajo, mesial a la izquierda (ángulo mesioincisal vivo, distal más
// redondeado y con el contacto más alto).
const SILUETA =
    "M30,10 Q50,0 72,10 C84,20 94,44 97,70 C99,92 97,110 92,120 Q88,125 80,125 L10,124 Q3,123 3,114 C2,92 4,64 8,44 C12,26 20,14 30,10 Z";

const r = (n: number) => Math.round(n * 10) / 10;

// Malla: paralelos que siguen la convexidad vestibular y meridianos que se abren
// hacia los bordes, más diagonales suaves para el efecto de triangulación.
const MALLA: string[] = [
    ...Array.from({ length: 8 }, (_, k) => {
        const y = (125 * (k + 1)) / 9;
        return `M-5,${r(y - 3)} Q50,${r(y + 6)} 105,${r(y - 3)}`;
    }),
    ...Array.from({ length: 7 }, (_, k) => {
        const x = (100 * (k + 1)) / 8;
        const b = (x - 50) * 0.18;
        return `M${r(x - b)},0 Q${r(x + b)},62 ${r(x - b * 0.4)},128`;
    }),
];
const DIAGONALES: string[] = Array.from({ length: 12 }, (_, k) => {
    const x = (k - 4) * 16;
    return `M${x},0 L${x + 40},128`;
});

const CSS = `
.cw-mesh path { fill: none; stroke: currentColor; stroke-width: .5; opacity: .55; }
.cw-mesh .cw-diag { opacity: .25; }
.cw-outline { fill: none; stroke: currentColor; stroke-width: 1.2; stroke-dasharray: 600; animation: cw-trazo 8s ease-in-out infinite; }
.cw-solid { animation: cw-imprimir 8s ease-in-out infinite; }
.cw-scan { animation: cw-scan 8s ease-in-out infinite; }
@keyframes cw-trazo { 0% { stroke-dashoffset: 600; } 22%, 100% { stroke-dashoffset: 0; } }
@keyframes cw-imprimir { 0%, 22% { transform: translateY(128px); } 62%, 92% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(0); opacity: 0; } }
@keyframes cw-scan { 0%, 20% { transform: translateY(126px); opacity: 0; } 24% { opacity: 1; } 62% { transform: translateY(0); opacity: 1; } 66%, 100% { transform: translateY(0); opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .cw-outline, .cw-solid, .cw-scan { animation: none; }
  .cw-outline { stroke-dashoffset: 0; }
  .cw-scan { opacity: 0; }
}
`;

export default function CarillaWireframe({
    videoSrc,
    poster,
    className = "",
    label = "Incisivo central superior en malla digital: la carilla de resina se imprime en 3D capa por capa",
}: Props) {
    if (videoSrc) {
        return (
            <div className={`relative aspect-square w-full max-w-md mx-auto ${className}`}>
                <video
                    src={videoSrc}
                    poster={poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={label}
                    className="h-full w-full object-contain"
                />
            </div>
        );
    }

    return (
        <div className={`relative w-full max-w-md mx-auto text-oro ${className}`}>
            <style>{CSS}</style>
            <svg viewBox="0 0 300 240" role="img" aria-label={label} className="relative h-auto w-full">
                <defs>
                    <clipPath id="cw-clip">
                        <path d={SILUETA} />
                    </clipPath>
                    <linearGradient id="cw-esmalte" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#e3d3b2" />
                        <stop offset=".5" stopColor="#f6f0e3" />
                        <stop offset=".85" stopColor="#f1ede4" />
                        <stop offset="1" stopColor="#a9b8c4" />
                    </linearGradient>
                </defs>

                {/* Halo */}
                <circle cx={150} cy={112} r={100} fill="currentColor" opacity={0.05} />

                {/* Diente: caja 100×125 escalada a 118×168 */}
                <g transform="translate(92,24) scale(1.18,1.344)">
                    <g clipPath="url(#cw-clip)">
                        <g className="cw-mesh">
                            {MALLA.map((d) => (
                                <path key={d} d={d} vectorEffect="non-scaling-stroke" />
                            ))}
                            {DIAGONALES.map((d) => (
                                <path key={d} d={d} className="cw-diag" vectorEffect="non-scaling-stroke" />
                            ))}
                        </g>
                        {/* Capa impresa: sube desde el borde incisal */}
                        <g className="cw-solid">
                            <rect x={-5} y={0} width={110} height={130} fill="url(#cw-esmalte)" />
                            {/* Surcos de los lóbulos de desarrollo */}
                            <path d="M32,42 Q31,88 32,122" fill="none" stroke="#bfa57a" strokeWidth={0.9} opacity={0.5} vectorEffect="non-scaling-stroke" />
                            <path d="M68,42 Q67,88 68,122" fill="none" stroke="#bfa57a" strokeWidth={0.9} opacity={0.5} vectorEffect="non-scaling-stroke" />
                            {/* Brillo vestibular */}
                            <ellipse cx={44} cy={52} rx={9} ry={26} fill="#fff" opacity={0.28} />
                        </g>
                        {/* Línea de escaneo / frente de impresión */}
                        <rect className="cw-scan" x={-5} y={0} width={110} height={1.8} fill="#ffd889" />
                    </g>
                    <path className="cw-outline" d={SILUETA} vectorEffect="non-scaling-stroke" />
                </g>

                {/* Rótulos */}
                <line x1={206} y1={140} x2={244} y2={132} stroke="currentColor" strokeWidth={0.6} />
                <g fill="currentColor" fontFamily="var(--font-manrope), sans-serif" fontSize={9} fontWeight={600} letterSpacing={1.4}>
                    <text x={246} y={128}>CARILLA</text>
                    <text x={246} y={140}>3D</text>
                    <text x={150} y={226} textAnchor="middle">ESPESOR 0,1 – 0,2 mm</text>
                </g>
            </svg>
        </div>
    );
}
