import {
  AbsoluteFill,
  Img,
  OffthreadVideo,
  Sequence,
  Video,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useRemotionEnvironment,
  useVideoConfig,
} from "remotion";

type VideoVariant = "landscape" | "reel";

type Scene = {
  kicker: string;
  title: string;
  subtitle: string;
  bullets: string[];
  image: string;
  video?: string;
  duration: number;
};

const scenes: Scene[] = [
  {
    kicker: "AM Estetica Dental",
    title: "Diseno de sonrisa premium en Puerto Madero",
    subtitle:
      "Carillas de porcelana, lentes de contacto dental y planificacion digital para resultados naturales.",
    bullets: ["Estetica de autor", "Precision clinica", "Resultados reales"],
    image: staticFile("videos/generate-3d-veneer-poster.jpg"),
    video: staticFile("videos/generate-3d-veneer.mp4"),
    duration: 120,
  },
  {
    kicker: "Clinica",
    title: "Un entorno pensado para decisiones importantes",
    subtitle:
      "Cada consulta ocurre en un espacio premium, privado y disenado para que puedas ver tu cambio con claridad.",
    bullets: ["Atencion personalizada", "Ubicacion estrategica", "Experiencia boutique"],
    image: staticFile("images/clinica/consultorio-am-estetica-dental-puerto-madero-01.jpg"),
    duration: 180,
  },
  {
    kicker: "Tecnologia",
    title: "Escaneo 3D, diseno digital y ejecucion precisa",
    subtitle:
      "La sonrisa se disena antes de tocar un diente. Menos incertidumbre, mas control en cada detalle.",
    bullets: ["Escaner intraoral", "Diseno de sonrisa 3D", "Protocolo fotografico clinico"],
    image: staticFile("images/clinica/consultorio-am-estetica-dental-puerto-madero-02.jpg"),
    duration: 180,
  },
  {
    kicker: "Casos",
    title: "Transformaciones que se notan desde el primer dia",
    subtitle:
      "Mostramos casos reales para que compares punto de partida, planificacion y resultado final.",
    bullets: ["Antes y despues reales", "Criterio estetico natural", "Cambio armonico con tu rostro"],
    image: staticFile(
      "images/casos/caso-diseno-sonrisa-carillas-ceramicas-antes-despues-am-estetica-dental.webp"
    ),
    duration: 180,
  },
  {
    kicker: "Confianza",
    title: "4.9 en Google y presencia en Forbes Argentina",
    subtitle:
      "La reputacion no se anuncia: se construye con resultados consistentes y pacientes que recomiendan.",
    bullets: ["Resenas verificadas", "Autoridad editorial", "Calidad sostenida"],
    image: staticFile("images/casos/alineadores-invisibles-am-estetica-dental-resultado.webp"),
    duration: 180,
  },
  {
    kicker: "Director Clinico",
    title: "Dr. Ariel Merino",
    subtitle:
      "Mas de 15 anos en estetica dental de alta demanda, con enfoque conservador y vision artistica.",
    bullets: ["Evaluacion honesta", "Plan segun tu caso", "Seguimiento de excelencia"],
    image: staticFile("images/dr-merino/dr-ariel-merino-ambo-principal.webp"),
    duration: 180,
  },
  {
    kicker: "Agenda",
    title: "Solicita tu evaluacion inicial",
    subtitle:
      "AM Estetica Dental. Sonrisas naturales, tecnologia de precision y un proceso claro desde el primer contacto.",
    bullets: ["WhatsApp directo", "Agenda limitada", "Puerto Madero, Buenos Aires"],
    image: staticFile("images/clinica/consultorio-am-estetica-dental-puerto-madero-03.jpg"),
    duration: 150,
  },
];

const totalDuration = scenes.reduce((sum, scene) => sum + scene.duration, 0);

export const VIDEO_CONFIG = {
  width: 1920,
  height: 1080,
  fps: 30,
  totalDuration,
};

export const REEL_VIDEO_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 30,
  totalDuration,
};

const frameForScene = (sceneIndex: number): number => {
  return scenes.slice(0, sceneIndex).reduce((sum, scene) => sum + scene.duration, 0);
};

const SceneCard = ({
  scene,
  sceneDuration,
  variant,
}: {
  scene: Scene;
  sceneDuration: number;
  variant: VideoVariant;
}) => {
  const { fps } = useVideoConfig();
  const { isRendering } = useRemotionEnvironment();
  const frame = useCurrentFrame();
  const sceneFrame = frame;
  const isReel = variant === "reel";

  const imageScale = interpolate(sceneFrame, [0, sceneDuration], isReel ? [1.14, 1.03] : [1.08, 1.01], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const imageTranslateX = interpolate(sceneFrame, [0, sceneDuration], isReel ? [-38, 38] : [-52, 28], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const imageTranslateY = interpolate(sceneFrame, [0, sceneDuration], isReel ? [34, -42] : [24, -24], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fade = interpolate(sceneFrame, [0, 14, sceneDuration - 16, sceneDuration], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleSpring = spring({
    frame: sceneFrame,
    fps,
    config: {
      damping: 220,
      stiffness: 110,
      mass: 0.9,
    },
  });

  const subtitleSpring = spring({
    frame: Math.max(0, sceneFrame - 8),
    fps,
    config: {
      damping: 180,
      stiffness: 100,
      mass: 0.92,
    },
  });

  const bulletsToRender = isReel ? scene.bullets.slice(0, 2) : scene.bullets;

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: "#0d0d0d" }}>
        {scene.video ? (
          isRendering ? (
            <OffthreadVideo
              src={scene.video}
              volume={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: `translate3d(${imageTranslateX}px, ${imageTranslateY}px, 0) scale(${imageScale})`,
                opacity: isReel ? 0.98 : 0.92,
              }}
            />
          ) : (
            <Video
              src={scene.video}
              muted
              loop
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: `translate3d(${imageTranslateX}px, ${imageTranslateY}px, 0) scale(${imageScale})`,
                opacity: isReel ? 0.98 : 0.92,
              }}
            />
          )
        ) : (
          <Img
            src={scene.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `translate3d(${imageTranslateX}px, ${imageTranslateY}px, 0) scale(${imageScale})`,
              opacity: isReel ? 1 : 0.95,
            }}
          />
        )}
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background: isReel
            ? "linear-gradient(180deg, rgba(8,8,8,0.05) 0%, rgba(8,8,8,0.26) 62%, rgba(8,8,8,0.52) 100%)"
            : "radial-gradient(circle at 24% 14%, rgba(242,185,13,0.16), rgba(242,185,13,0) 36%), linear-gradient(112deg, rgba(8,8,8,0.24) 0%, rgba(8,8,8,0.12) 48%, rgba(8,8,8,0.46) 100%)",
        }}
      />

      <AbsoluteFill
        style={{
          opacity: fade,
          padding: isReel ? "84px 52px 120px" : "82px 94px",
          fontFamily: '"Manrope", "Inter", sans-serif',
          color: "#f2f0e9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: 0.98,
          }}
        >
          <div
            style={{
              fontSize: isReel ? 20 : 22,
              letterSpacing: isReel ? "0.28em" : "0.35em",
              textTransform: "uppercase",
              color: "#f2b90d",
              maxWidth: isReel ? 620 : 900,
            }}
          >
            {scene.kicker}
          </div>

          <Img
            src={staticFile("images/am-estetica-dental-logo-puerto-madero.png")}
            style={{
              height: isReel ? 44 : 58,
              width: "auto",
              objectFit: "contain",
              opacity: 0.98,
            }}
          />
        </div>

        <div
          style={{
            marginTop: isReel ? "auto" : 74,
            maxWidth: isReel ? "100%" : 1120,
            borderRadius: isReel ? 36 : 0,
            padding: isReel ? "38px 34px" : 0,
            backgroundColor: isReel ? "rgba(8,8,8,0.42)" : "transparent",
            border: isReel ? "1px solid rgba(242,185,13,0.24)" : "none",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: isReel ? 72 : 86,
              lineHeight: isReel ? 1.04 : 1.03,
              fontWeight: 540,
              letterSpacing: "-0.018em",
              transform: `translateY(${(1 - titleSpring) * 34}px)`,
              opacity: titleSpring,
            }}
          >
            {scene.title}
          </h1>

          <p
            style={{
              marginTop: isReel ? 18 : 24,
              marginBottom: 0,
              maxWidth: isReel ? "100%" : 980,
              fontSize: isReel ? 32 : 36,
              lineHeight: isReel ? 1.28 : 1.32,
              color: "rgba(242,240,233,0.94)",
              transform: `translateY(${(1 - subtitleSpring) * 22}px)`,
              opacity: subtitleSpring,
            }}
          >
            {scene.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              gap: isReel ? 12 : 18,
              marginTop: isReel ? 26 : 34,
              flexWrap: "wrap",
            }}
          >
            {bulletsToRender.map((bullet, index) => {
              const bulletFrame = Math.max(0, sceneFrame - 14 - index * 6);
              const bulletOpacity = interpolate(bulletFrame, [0, 16], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              const bulletY = interpolate(bulletFrame, [0, 16], [14, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  key={bullet}
                  style={{
                    border: "1px solid rgba(242,185,13,0.4)",
                    borderRadius: 999,
                    padding: isReel ? "12px 20px" : "14px 24px",
                    fontSize: isReel ? 24 : 26,
                    letterSpacing: "0.018em",
                    color: "#f2f0e9",
                    backgroundColor: "rgba(8,8,8,0.5)",
                    opacity: bulletOpacity,
                    transform: `translateY(${bulletY}px)`,
                  }}
                >
                  {bullet}
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ProgressBar = ({ variant }: { variant: VideoVariant }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, totalDuration], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          height: variant === "reel" ? 6 : 8,
          backgroundColor: "rgba(242,240,233,0.15)",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #f2b90d 0%, #f7d05a 100%)",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export const InstitutionalVideo = ({ variant = "landscape" }: { variant?: VideoVariant }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0d0d0d" }}>
      {scenes.map((scene, index) => {
        const from = frameForScene(index);
        return (
              <Sequence key={scene.title} from={from} durationInFrames={scene.duration}>
            <SceneCard scene={scene} sceneDuration={scene.duration} variant={variant} />
          </Sequence>
        );
      })}

      <ProgressBar variant={variant} />
    </AbsoluteFill>
  );
};
