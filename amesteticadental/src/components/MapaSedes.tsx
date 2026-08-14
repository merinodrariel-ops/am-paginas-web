/**
 * Mapa del Río de la Plata con las dos sedes de AM.
 *
 * Geografía real, proyectada linealmente sobre lon [-59.6, -54.4] y lat [-33.1, -36.3]
 * en un lienzo de 720×420. Las costas se trazan pasando por puntos reales —delta del
 * Paraná, Punta Piedras, Colonia, Punta del Este— y, sobre todo, **por las dos
 * ciudades**: Buenos Aires y Montevideo quedan sobre su costa y no flotando en el
 * estuario.
 *
 * Es SVG inline: sin librerías, sin imagen que descargar, y escala sin perder nitidez.
 *
 * `destacar` define cuál de las dos sedes se pinta como protagonista, para reusar el
 * mismo dibujo en el sitio uruguayo y en el argentino.
 */
/** Bandera argentina: tres franjas y el Sol de Mayo sobre la blanca. */
function BanderaArgentina({ x, y }: { x: number; y: number }) {
  const w = 30;
  const h = 19;
  const franja = h / 3;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#74ACDF" />
      <rect x={x} y={y + franja} width={w} height={franja} fill="#FFFFFF" />
      <circle cx={x + w / 2} cy={y + h / 2} r={2.6} fill="#F6B40E" />
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="rgba(246,241,231,.35)" strokeWidth="0.8" />
    </g>
  );
}

/** Bandera uruguaya: nueve franjas y el Sol de Mayo en el cantón. */
function BanderaUruguay({ x, y }: { x: number; y: number }) {
  const w = 30;
  const h = 20;
  const franja = h / 9;
  const canton = franja * 5;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#FFFFFF" />
      {[1, 3, 5, 7].map((i) => (
        <rect key={i} x={x} y={y + franja * i} width={w} height={franja} fill="#0038A8" />
      ))}
      <rect x={x} y={y} width={canton} height={canton} fill="#FFFFFF" />
      <circle cx={x + canton / 2} cy={y + canton / 2} r={2.8} fill="#F6B40E" />
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="rgba(246,241,231,.35)" strokeWidth="0.8" />
    </g>
  );
}

export default function MapaSedes({ destacar = "montevideo" }: { destacar?: "montevideo" | "buenos-aires" }) {
  const uyEsProtagonista = destacar === "montevideo";

  const oro = "#c6a56c";
  const crema = "#f6f1e7";
  const tierra = "#262b23";
  const agua = "#141b20";
  const tenue = "rgba(246,241,231,.34)";

  return (
    <figure className="m-0 border border-oro/15 overflow-hidden">
      <svg className="block w-full h-auto" viewBox="0 0 720 420" role="img" aria-labelledby="mapa-titulo mapa-desc" preserveAspectRatio="xMidYMid meet">
        <title id="mapa-titulo">Las dos sedes de AM Estética Dental sobre el Río de la Plata</title>
        <desc id="mapa-desc">
          Mapa del Río de la Plata. Sobre la costa argentina, Buenos Aires con la sede de Puerto Madero en
          funcionamiento. Sobre la costa uruguaya, Montevideo con la sede de zona Carrasco en obra.
        </desc>

        <rect x="0" y="0" width="720" height="420" fill={agua} />

        {/* Costa argentina: delta del Paraná, Buenos Aires, Punta Piedras, Punta Indio */}
        <path d="M0,0 L118,0 L150,62 L169,197 L311,269 L360,328 L401,420 L0,420 Z" fill={tierra} />
        {/* Costa uruguaya: Nueva Palmira, Colonia, Montevideo, Piriápolis, Punta del Este */}
        <path d="M172,0 L172,98 L242,180 L476,236 L600,232 L644,244 L720,248 L720,0 Z" fill={tierra} />

        {/* Línea de costa, apenas insinuada */}
        <path d="M150,62 L169,197 L311,269 L360,328 L401,420" fill="none" stroke="rgba(198,165,108,.2)" strokeWidth="1.2" />
        <path d="M172,98 L242,180 L476,236 L600,232 L644,244 L720,248" fill="none" stroke="rgba(198,165,108,.2)" strokeWidth="1.2" />

        {/* Arco entre las dos sedes: una marca, dos ciudades. Dibuja la red, no una ruta. */}
        <path d="M169,197 Q320,250 476,236" fill="none" stroke={oro} strokeWidth="1.4" strokeDasharray="5 7" opacity="0.75" />

        <text x="322" y="212" textAnchor="middle" fill="rgba(246,241,231,.22)" fontSize="10" letterSpacing="3" fontStyle="italic">
          RÍO DE LA PLATA
        </text>
        <text x="706" y="228" textAnchor="end" fill="rgba(246,241,231,.22)" fontSize="9" letterSpacing="1.4">
          PUNTA DEL ESTE
        </text>

        {/* Nombres de país: dejan claro de un vistazo que son dos, que es el punto */}
        <text x="110" y="345" textAnchor="middle" fill="rgba(246,241,231,.15)" fontSize="15" letterSpacing="6">
          ARGENTINA
        </text>
        <text x="430" y="92" textAnchor="middle" fill="rgba(246,241,231,.15)" fontSize="15" letterSpacing="6">
          URUGUAY
        </text>

        {/* Buenos Aires — etiquetas hacia abajo, sobre tierra argentina */}
        <g>
          <BanderaArgentina x={154} y={161} />
          {!uyEsProtagonista && (
            <>
              <circle cx="169" cy="197" r="22" fill={oro} opacity="0.1" />
              <circle cx="169" cy="197" r="14" fill={oro} opacity="0.2" />
            </>
          )}
          <circle cx="169" cy="197" r={uyEsProtagonista ? 5.5 : 7} fill={uyEsProtagonista ? crema : oro} />
          <text x="169" y="226" textAnchor="middle" fill={crema} fontSize="19" fontFamily="var(--font-cormorant), Georgia, serif">
            Buenos Aires
          </text>
          <text x="169" y="245" textAnchor="middle" fill={uyEsProtagonista ? tenue : oro} fontSize="10" letterSpacing="1.6">
            PUERTO MADERO
          </text>
          <text x="169" y="261" textAnchor="middle" fill="rgba(246,241,231,.34)" fontSize="9.5">
            Sede en funcionamiento
          </text>
        </g>

        {/* Montevideo — etiquetas hacia arriba, sobre tierra uruguaya */}
        <g>
          <BanderaUruguay x={461} y={148} />
          {uyEsProtagonista && (
            <>
              <circle cx="476" cy="236" r="24" fill={oro} opacity="0.11" />
              <circle cx="476" cy="236" r="15" fill={oro} opacity="0.22" />
            </>
          )}
          <circle cx="476" cy="236" r={uyEsProtagonista ? 7 : 5.5} fill={oro} />
          <text x="476" y="192" textAnchor="middle" fill={crema} fontSize="20" fontFamily="var(--font-cormorant), Georgia, serif">
            Montevideo
          </text>
          <text x="476" y="211" textAnchor="middle" fill={oro} fontSize="10" letterSpacing="1.6">
            ZONA CARRASCO
          </text>
          <text x="476" y="268" textAnchor="middle" fill="rgba(246,241,231,.34)" fontSize="9.5">
            Sede en obra
          </text>
        </g>
      </svg>
    </figure>
  );
}
