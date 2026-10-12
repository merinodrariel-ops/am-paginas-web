// Visual del hero de /carillas-de-resina-impresas-3d.
//
// Hoy es un placeholder: un incisivo central en malla de triángulos (estilo
// wireframe de software de diseño) con una carilla ultrafina que se "traza" sola.
// Es SVG + CSS puro, sin JavaScript en el cliente: se renderiza en el servidor y
// respeta `prefers-reduced-motion`.
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
// Corona de un incisivo central superior vista de frente: cuello arriba,
// borde incisal abajo. Se arma una grilla de puntos dentro del contorno y se
// triangula fila contra fila. Se calcula una sola vez, al cargar el módulo.

const CX = 120;
const Y_CUELLO = 40;
const Y_INCISAL = 250;
const FILAS = 9;
const COLUMNAS = 6;

function medioAncho(y: number): number {
    const t = (y - Y_CUELLO) / (Y_INCISAL - Y_CUELLO); // 0 cuello → 1 incisal
    // Se ensancha rápido desde el cuello y se redondea apenas cerca del borde.
    const base = 34 + 34 * Math.sin(Math.min(t * 1.25, 1) * (Math.PI / 2));
    const redondeo = t > 0.9 ? (t - 0.9) * 60 : 0;
    return base - redondeo;
}

type Punto = [number, number];

const PUNTOS: Punto[][] = Array.from({ length: FILAS + 1 }, (_, i) => {
    const y = Y_CUELLO + ((Y_INCISAL - Y_CUELLO) * i) / FILAS;
    const w = medioAncho(y);
    return Array.from({ length: COLUMNAS + 1 }, (_, j) => {
        const u = -1 + (2 * j) / COLUMNAS;
        // Leve curvatura vestibular: los puntos centrales bajan un poco.
        const curva = (1 - u * u) * 4;
        return [CX + u * w, y + curva] as Punto;
    });
});

const r = (n: number) => Math.round(n * 10) / 10;

const TRIANGULOS: string[] = [];
for (let i = 0; i < FILAS; i++) {
    for (let j = 0; j < COLUMNAS; j++) {
        const a = PUNTOS[i][j];
        const b = PUNTOS[i][j + 1];
        const c = PUNTOS[i + 1][j];
        const d = PUNTOS[i + 1][j + 1];
        const diagonal = (i + j) % 2 === 0;
        const [t1, t2] = diagonal ? [[a, b, d], [a, d, c]] : [[a, b, c], [b, d, c]];
        TRIANGULOS.push(t1.map((p) => `${r(p[0])},${r(p[1])}`).join(" "));
        TRIANGULOS.push(t2.map((p) => `${r(p[0])},${r(p[1])}`).join(" "));
    }
}

// Contorno exterior de la corona (para el trazo de la carilla).
const IZQ = PUNTOS.map((fila) => fila[0]);
const DER = PUNTOS.map((fila) => fila[COLUMNAS]).reverse();
const contorno = (dx: number, dy: number, escala: number) =>
    [...IZQ, ...PUNTOS[FILAS].slice(1, -1), ...DER, ...PUNTOS[0].slice(1, -1).reverse()]
        .map(([x, y], k) => `${k === 0 ? "M" : "L"}${r(CX + (x - CX) * escala + dx)},${r(y + dy)}`)
        .join(" ") + " Z";

const CONTORNO_DIENTE = contorno(0, 0, 1);
// La carilla: una cáscara apenas por fuera del diente (0,1–0,2 mm a escala).
const CONTORNO_CARILLA = contorno(0, 3, 1.05);

// Raíz insinuada, en línea punteada.
const RAIZ = `M${CX - 30},${Y_CUELLO + 2} C${CX - 26},${Y_CUELLO - 20} ${CX - 12},${Y_CUELLO - 34} ${CX},${Y_CUELLO - 38} C${CX + 12},${Y_CUELLO - 34} ${CX + 26},${Y_CUELLO - 20} ${CX + 30},${Y_CUELLO + 2}`;

// La rotación va sobre el <svg> entero y no sobre un <g>: Safari no aplica bien
// transformaciones 3D a elementos internos de un SVG.
const CSS = `
.cw-root { transform-origin: 50% 50%; animation: cw-flotar 9s ease-in-out infinite; }
.cw-malla polygon { opacity: .55; }
.cw-carilla { stroke-dasharray: 900; stroke-dashoffset: 900; animation: cw-trazo 6s cubic-bezier(.45,0,.55,1) infinite; }
.cw-scan { animation: cw-scan 6s cubic-bezier(.45,0,.55,1) infinite; }
@keyframes cw-flotar { 0%,100% { transform: perspective(600px) rotateY(-14deg) translateY(0); } 50% { transform: perspective(600px) rotateY(14deg) translateY(-6px); } }
@keyframes cw-trazo { 0% { stroke-dashoffset: 900; opacity: .2; } 55% { stroke-dashoffset: 0; opacity: 1; } 85% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
@keyframes cw-scan { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: .9; } 55% { transform: translateY(220px); opacity: .9; } 65%,100% { transform: translateY(220px); opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .cw-root, .cw-carilla, .cw-scan { animation: none; }
  .cw-carilla { stroke-dashoffset: 0; }
  .cw-scan { opacity: 0; }
}
`;

export default function CarillaWireframe({
    videoSrc,
    poster,
    className = "",
    label = "Carilla de resina impresa en 3D sobre un incisivo, en malla digital",
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
        <div className={`relative aspect-square w-full max-w-md mx-auto text-oro ${className}`}>
            <style>{CSS}</style>
            {/* Halo suave detrás del diente */}
            <div className="absolute inset-[12%] rounded-full bg-oro/5 blur-3xl" aria-hidden="true" />
            <svg viewBox="0 0 240 280" role="img" aria-label={label} className="cw-root relative h-full w-full">
                <g fill="none" stroke="currentColor" strokeLinejoin="round">
                    <path d={RAIZ} strokeWidth={0.6} strokeDasharray="2 4" opacity={0.45} />
                    <g className="cw-malla" strokeWidth={0.45}>
                        {TRIANGULOS.map((pts) => (
                            <polygon key={pts} points={pts} />
                        ))}
                    </g>
                    <path d={CONTORNO_DIENTE} strokeWidth={0.9} opacity={0.8} />
                    <path className="cw-carilla" d={CONTORNO_CARILLA} strokeWidth={1.4} />
                    <line className="cw-scan" x1={40} y1={35} x2={200} y2={35} strokeWidth={0.8} opacity={0} />
                </g>
                {/* Cota de espesor */}
                <g fill="currentColor" opacity={0.7} fontFamily="var(--font-manrope), sans-serif" fontSize={8} letterSpacing={1.5}>
                    <text x={120} y={274} textAnchor="middle">0,1 – 0,2 MM</text>
                </g>
            </svg>
        </div>
    );
}
