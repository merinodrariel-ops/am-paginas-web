"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// ─────────────────────────────────────────────────────────────
//  POLYGON SMILE — "Geometría Sagrada Dorada"
//  Una sonrisa tallada en facetas de cristal dorado.
//  ViewBox: 0 0 480 380
// ─────────────────────────────────────────────────────────────

// Helper: array of [x,y] → "x,y x,y ..."
const pts = (...coords: [number, number][]): string =>
  coords.map(([x, y]) => `${x},${y}`).join(" ");

// ─── TEETH DATA ───────────────────────────────────────────────
// 7 dientes. Cada uno definido por sus 4 esquinas + vértice central
// que crea el efecto "gema tallada" (4 facetas por diente).
const TEETH_DATA = [
  { tl:[128,158] as [number,number], tr:[158,154] as [number,number], bl:[128,207] as [number,number], br:[158,209] as [number,number] },
  { tl:[161,152] as [number,number], tr:[191,148] as [number,number], bl:[161,212] as [number,number], br:[191,213] as [number,number] },
  { tl:[194,148] as [number,number], tr:[222,146] as [number,number], bl:[194,215] as [number,number], br:[222,216] as [number,number] },
  { tl:[225,145] as [number,number], tr:[253,145] as [number,number], bl:[225,218] as [number,number], br:[253,218] as [number,number] }, // centro
  { tl:[256,146] as [number,number], tr:[284,148] as [number,number], bl:[256,216] as [number,number], br:[284,215] as [number,number] },
  { tl:[287,148] as [number,number], tr:[315,152] as [number,number], bl:[287,213] as [number,number], br:[315,212] as [number,number] },
  { tl:[318,154] as [number,number], tr:[348,158] as [number,number], bl:[318,209] as [number,number], br:[348,207] as [number,number] },
];

// Centro de cada gema: 32% desde arriba
const toothCenter = (t: typeof TEETH_DATA[0]): [number, number] => {
  const cx = Math.round((t.tl[0] + t.tr[0]) / 2);
  const avgTop = (t.tl[1] + t.tr[1]) / 2;
  const avgBot = (t.bl[1] + t.br[1]) / 2;
  const cy = Math.round(avgTop + 0.32 * (avgBot - avgTop));
  return [cx, cy];
};

// Genera las 5 facetas por diente
interface ToothPoly { pts: string; fill: string; cls: string; }
const buildToothPolys = (t: typeof TEETH_DATA[0], i: number): ToothPoly[] => {
  const [cx, cy] = toothCenter(t);
  // vértice especular (1/3 del camino entre TL y Centro)
  const sx = Math.round(t.tl[0] + (cx - t.tl[0]) * 0.38);
  const sy = Math.round(t.tl[1] + (cy - t.tl[1]) * 0.38);

  return [
    // Cara superior — la más brillante (luz cenital)
    { pts: pts(t.tl, t.tr, [cx, cy]),  fill: "#f7e690", cls: `poly-tooth-top tooth-${i}` },
    // Cara derecha — oro puro
    { pts: pts(t.tr, t.br, [cx, cy]),  fill: "#f2b90d", cls: `poly-tooth-right tooth-${i}` },
    // Cara izquierda — oro oscuro (sombra)
    { pts: pts(t.tl, [cx, cy], t.bl),  fill: "#8a6a08", cls: `poly-tooth-left tooth-${i}` },
    // Cara inferior — casi negro (profundidad)
    { pts: pts(t.bl, [cx, cy], t.br),  fill: "#2e2200", cls: `poly-tooth-bottom tooth-${i}` },
    // Destello especular — puntito blanco-dorado
    { pts: pts(t.tl, [sx, sy], [(t.tl[0] + t.tr[0]) >> 1, (t.tl[1] + t.tr[1]) >> 1]),
      fill: "#fff8d0", cls: `poly-tooth-spec tooth-${i}` },
  ];
};

const ALL_TOOTH_POLYS = TEETH_DATA.flatMap((t, i) => buildToothPolys(t, i));

// ─── GUM LINE (6 triángulos) ───────────────────────────────────
// Banda entre encía y parte superior de los dientes
const GUM_POLYS: { pts: string; fill: string }[] = [
  { pts: pts([100,148],[128,158],[162,137]),              fill: "#c9a00f" },
  { pts: pts([128,158],[194,148],[162,137]),              fill: "#c0980e" },
  { pts: pts([162,137],[194,148],[240,130]),              fill: "#b8920d" },
  { pts: pts([194,148],[253,145],[240,130]),              fill: "#b8920d" },
  { pts: pts([240,130],[253,145],[318,137]),              fill: "#c0980e" },
  { pts: pts([253,145],[348,158],[318,137]),              fill: "#c9a00f" },
  { pts: pts([318,137],[348,158],[380,148]),              fill: "#c9a00f" },
];

// ─── INNER LOWER LIP (franja brillante debajo de dientes) ─────
const LOWER_LIP_INNER: { pts: string; fill: string }[] = [
  { pts: pts([100,195],[128,210],[240,220]),              fill: "#b08b0d" },
  { pts: pts([128,210],[253,218],[240,220]),              fill: "#c9a00f" },
  { pts: pts([253,218],[348,210],[240,220]),              fill: "#b08b0d" },
  { pts: pts([100,195],[240,220],[380,195]),              fill: "#8a6a08" },
];

// ─── LOWER LIP OUTER (cuerpo del labio inferior) ─────────────
const LOWER_LIP_OUTER: { pts: string; fill: string }[] = [
  { pts: pts([80,202],[100,195],[115,248]),               fill: "#5a4404" },
  { pts: pts([100,195],[128,210],[115,248]),              fill: "#6a5206" },
  { pts: pts([115,248],[128,210],[185,258]),              fill: "#5a4404" },
  { pts: pts([128,210],[194,220],[185,258]),              fill: "#6a5206" },
  { pts: pts([185,258],[194,220],[240,264]),              fill: "#5a4404" },
  { pts: pts([194,220],[253,218],[240,264]),              fill: "#6a5206" },
  { pts: pts([240,264],[253,218],[295,258]),              fill: "#5a4404" },
  { pts: pts([253,218],[348,210],[295,258]),              fill: "#6a5206" },
  { pts: pts([295,258],[348,210],[365,248]),              fill: "#5a4404" },
  { pts: pts([348,210],[380,202],[365,248]),              fill: "#6a5206" },
  { pts: pts([365,248],[380,202],[400,202]),              fill: "#4a3804" },
  // fondo del labio inferior — más oscuro
  { pts: pts([115,248],[240,264],[365,248]),              fill: "#3d2c00" },
  { pts: pts([80,202],[115,248],[0,260]),                 fill: "#2a1e00" },
  { pts: pts([365,248],[400,202],[480,260]),              fill: "#2a1e00" },
  { pts: pts([0,260],[115,248],[240,290]),                fill: "#1e1600" },
  { pts: pts([240,290],[365,248],[480,260]),              fill: "#1e1600" },
];

// ─── UPPER LIP (labio superior con arco de cupido) ──────────
const UPPER_LIP_INNER: { pts: string; fill: string }[] = [
  // Faja interior — conecta encía con cuerpo del labio
  { pts: pts([100,148],[100,125],[162,137]),              fill: "#8a6a08" },
  { pts: pts([100,125],[162,137],[200,112]),              fill: "#7a5c06" },
  { pts: pts([162,137],[240,130],[200,112]),              fill: "#8a6a08" },
  { pts: pts([200,112],[240,130],[240,118]),              fill: "#9a7008" },
  { pts: pts([240,130],[280,112],[240,118]),              fill: "#9a7008" },
  { pts: pts([240,130],[318,137],[280,112]),              fill: "#8a6a08" },
  { pts: pts([280,112],[318,137],[380,125]),              fill: "#7a5c06" },
  { pts: pts([318,137],[380,148],[380,125]),              fill: "#8a6a08" },
];

const UPPER_LIP_OUTER: { pts: string; fill: string }[] = [
  // Arco de cupido y parte superior del labio
  { pts: pts([60,188],[80,162],[100,125]),                fill: "#5a4404" },
  { pts: pts([80,162],[100,125],[145,108]),               fill: "#6a5206" },
  { pts: pts([100,125],[145,108],[200,112]),              fill: "#5a4404" },
  { pts: pts([145,108],[200,112],[172,90]),               fill: "#6a5206" },
  { pts: pts([172,90],[200,112],[240,118]),               fill: "#7a5c06" },
  { pts: pts([172,90],[240,118],[240,88]),                fill: "#5a4404" },
  // Pico del arco de cupido (el punto más alto — más visible)
  { pts: pts([240,88],[240,118],[280,112]),               fill: "#6a5206" },
  { pts: pts([240,88],[280,112],[308,90]),                fill: "#5a4404" },
  { pts: pts([280,112],[240,118],[308,90]),               fill: "#7a5c06" },
  { pts: pts([308,90],[280,112],[335,108]),               fill: "#6a5206" },
  { pts: pts([280,112],[380,125],[335,108]),              fill: "#5a4404" },
  { pts: pts([335,108],[380,125],[400,162]),              fill: "#6a5206" },
  { pts: pts([380,125],[400,162],[420,188]),              fill: "#5a4404" },
  // Parte superior del arco (por encima del cupido)
  { pts: pts([145,108],[172,90],[100,72]),                fill: "#4a3804" },
  { pts: pts([100,72],[172,90],[240,88]),                 fill: "#3d2c00" },
  { pts: pts([240,88],[308,90],[380,72]),                 fill: "#3d2c00" },
  { pts: pts([308,90],[335,108],[380,72]),                fill: "#4a3804" },
];

// ─── COMISURAS (esquinas de la boca) ─────────────────────────
const CORNERS: { pts: string; fill: string }[] = [
  { pts: pts([60,188],[100,148],[100,195]),               fill: "#3d2c00" },
  { pts: pts([60,188],[100,195],[80,202]),                fill: "#2a1e00" },
  { pts: pts([380,148],[420,188],[380,195]),              fill: "#3d2c00" },
  { pts: pts([380,195],[420,188],[400,202]),              fill: "#2a1e00" },
];

// ─── CAMPO OSCURO EXTERIOR ────────────────────────────────────
// Las esquinas del viewBox, muy oscuras, enmarcan la composición
const OUTER_FIELD: { pts: string; fill: string; opacity: number }[] = [
  { pts: pts([0,0],[480,0],[240,145]),        fill: "#0a0800", opacity: 0.92 },
  { pts: pts([0,0],[240,145],[0,200]),        fill: "#0d0b00", opacity: 0.90 },
  { pts: pts([480,0],[480,200],[240,145]),    fill: "#0d0b00", opacity: 0.90 },
  { pts: pts([0,200],[0,380],[100,270]),      fill: "#0a0800", opacity: 0.88 },
  { pts: pts([480,200],[480,380],[380,270]),  fill: "#0a0800", opacity: 0.88 },
  { pts: pts([0,380],[240,310],[480,380]),    fill: "#080600", opacity: 0.95 },
  { pts: pts([0,380],[100,270],[240,310]),    fill: "#0a0800", opacity: 0.90 },
  { pts: pts([100,270],[240,310],[380,270]),  fill: "#120e00", opacity: 0.85 },
  { pts: pts([240,310],[380,270],[480,380]),  fill: "#0a0800", opacity: 0.90 },
];

// ─────────────────────────────────────────────────────────────
export default function PolygonSmile() {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;

    // Estado inicial: todo invisible
    gsap.set(svg.querySelectorAll("polygon"), { opacity: 0 });

    const tl = gsap.timeline({ delay: 0.6 });

    // ── Fase 1: Caras superiores de los dientes (el corazón de la sonrisa)
    // Aparecen desde el centro hacia afuera con un "pop" elástico
    tl.to(svg.querySelectorAll(".poly-tooth-top"), {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      stagger: { each: 0.06, from: "center" },
      ease: "back.out(2.2)",
      transformOrigin: "50% 50%",
    });

    // ── Fase 2: Caras derecha + especulares (flash de luz)
    tl.to(
      svg.querySelectorAll(".poly-tooth-right, .poly-tooth-spec"),
      {
        opacity: 1,
        duration: 0.3,
        stagger: { each: 0.04, from: "center" },
        ease: "power2.out",
      },
      "-=0.25"
    );

    // ── Fase 3: Caras izquierda + inferior (sombras dan profundidad)
    tl.to(
      svg.querySelectorAll(".poly-tooth-left, .poly-tooth-bottom"),
      {
        opacity: 1,
        duration: 0.28,
        stagger: { each: 0.035, from: "center" },
        ease: "power2.out",
      },
      "-=0.18"
    );

    // ── Fase 4: Encía (se desliza hacia abajo desde arriba)
    tl.to(
      svg.querySelectorAll(".poly-gum"),
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.045,
        ease: "power3.out",
      },
      "-=0.15"
    );

    // ── Fase 5: Labio inferior interior (la curva de la sonrisa)
    tl.to(
      svg.querySelectorAll(".poly-lip-lower-inner"),
      {
        opacity: 1,
        duration: 0.38,
        stagger: 0.04,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // ── Fase 6: Labio superior interior + comisuras
    tl.to(
      svg.querySelectorAll(".poly-lip-upper-inner, .poly-corner"),
      {
        opacity: 1,
        duration: 0.4,
        stagger: 0.035,
        ease: "power2.out",
      },
      "-=0.22"
    );

    // ── Fase 7: Labios exteriores (emergen desde el borde)
    tl.to(
      svg.querySelectorAll(".poly-lip-upper-outer, .poly-lip-lower-outer"),
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.025,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // ── Fase 8: Campo oscuro exterior (encuadra la composición)
    tl.to(
      svg.querySelectorAll(".poly-outer"),
      {
        opacity: (i, el) => parseFloat(el.getAttribute("data-op") ?? "0.9"),
        duration: 0.6,
        stagger: 0.05,
        ease: "power1.out",
      },
      "-=0.4"
    );

    // ── Idle: shimmer aleatorio en los dientes cada ~2.8s
    tl.call(() => {
      const teethTops = Array.from(svg.querySelectorAll(".poly-tooth-top"));
      const teethSpecs = Array.from(svg.querySelectorAll(".poly-tooth-spec"));

      const shimmer = () => {
        // Selecciona 3 dientes aleatorios
        const picks = [...teethTops].sort(() => Math.random() - 0.5).slice(0, 3);
        gsap.to(picks, {
          opacity: 0.55,
          duration: 0.18,
          stagger: 0.08,
          ease: "sine.out",
          yoyo: true,
          repeat: 1,
          onComplete: shimmer,
        });
        // Specs también parpadean
        gsap.to(teethSpecs, {
          opacity: Math.random() > 0.5 ? 0.6 : 1,
          duration: 0.22,
          stagger: 0.04,
          ease: "sine.inOut",
        });
      };

      gsap.delayedCall(0.8, shimmer);
    });

    // ── Glow radial: la encía pulsa levemente
    gsap.to(svg.querySelector("#glow-teeth"), {
      attr: { r: "62" },
      duration: 3.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, { scope: svgRef });

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 480 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 32px rgba(242,185,13,0.18))" }}
      aria-hidden="true"
    >
      <defs>
        {/* Glow detrás de los dientes */}
        <radialGradient id="glow-teeth" cx="50%" cy="53%" r="55%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#f2b90d" stopOpacity="0.22" />
          <stop offset="60%"  stopColor="#f2b90d" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#f2b90d" stopOpacity="0"    />
        </radialGradient>
        {/* Glow suave para el labio inferior */}
        <radialGradient id="glow-lip" cx="50%" cy="55%" r="50%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#a07c0a" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a07c0a" stopOpacity="0"    />
        </radialGradient>
      </defs>

      {/* ── Capa 0: Glow ambiental (debajo de todo) */}
      <rect x="0" y="0" width="480" height="380" fill="url(#glow-teeth)" />

      {/* ── Capa 1: Campo oscuro exterior */}
      {OUTER_FIELD.map((p, i) => (
        <polygon
          key={`outer-${i}`}
          points={p.pts}
          fill={p.fill}
          data-op={p.opacity}
          className="poly-outer"
          style={{ opacity: 0 }}
        />
      ))}

      {/* ── Capa 2: Labios exteriores */}
      {UPPER_LIP_OUTER.map((p, i) => (
        <polygon key={`ulo-${i}`} points={p.pts} fill={p.fill} className="poly-lip-upper-outer" style={{ opacity: 0 }} />
      ))}
      {LOWER_LIP_OUTER.map((p, i) => (
        <polygon key={`llo-${i}`} points={p.pts} fill={p.fill} className="poly-lip-lower-outer" style={{ opacity: 0 }} />
      ))}

      {/* ── Capa 3: Comisuras */}
      {CORNERS.map((p, i) => (
        <polygon key={`corner-${i}`} points={p.pts} fill={p.fill} className="poly-corner" style={{ opacity: 0 }} />
      ))}

      {/* ── Capa 4: Labios interiores */}
      {UPPER_LIP_INNER.map((p, i) => (
        <polygon key={`uli-${i}`} points={p.pts} fill={p.fill} className="poly-lip-upper-inner" style={{ opacity: 0 }} />
      ))}
      {LOWER_LIP_INNER.map((p, i) => (
        <polygon key={`lli-${i}`} points={p.pts} fill={p.fill} className="poly-lip-lower-inner" style={{ opacity: 0 }} />
      ))}

      {/* ── Capa 5: Encía */}
      {GUM_POLYS.map((p, i) => (
        <polygon
          key={`gum-${i}`}
          points={p.pts}
          fill={p.fill}
          className="poly-gum"
          style={{ opacity: 0, transform: "translateY(-6px)" }}
        />
      ))}

      {/* ── Capa 6: Dientes (la pieza central) */}
      {/* Caras inferiores y laterales primero (se renderizan detrás) */}
      {ALL_TOOTH_POLYS
        .filter(p => p.cls.includes("bottom") || p.cls.includes("left"))
        .map((p, i) => (
          <polygon key={`td-${i}`} points={p.pts} fill={p.fill} className={p.cls} style={{ opacity: 0 }} />
        ))}
      {/* Caras brillantes (encima) */}
      {ALL_TOOTH_POLYS
        .filter(p => p.cls.includes("top") || p.cls.includes("right") || p.cls.includes("spec"))
        .map((p, i) => (
          <polygon key={`tb-${i}`} points={p.pts} fill={p.fill} className={p.cls} style={{ opacity: 0 }} />
        ))}

      {/* ── Capa 7: Glow de labio inferior (sutil, encima de todo) */}
      <rect x="80" y="195" width="320" height="100" fill="url(#glow-lip)" style={{ pointerEvents: "none" }} />
    </svg>
  );
}
