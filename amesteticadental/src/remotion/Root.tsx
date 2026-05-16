import { Composition } from "remotion";
import { InstitutionalVideo, REEL_VIDEO_CONFIG, VIDEO_CONFIG } from "./InstitutionalVideo";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="AMInstitucional"
        component={InstitutionalVideo}
        durationInFrames={VIDEO_CONFIG.totalDuration}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
        defaultProps={{ variant: "landscape" }}
      />

      <Composition
        id="AMInstitucionalReel"
        component={InstitutionalVideo}
        durationInFrames={REEL_VIDEO_CONFIG.totalDuration}
        fps={REEL_VIDEO_CONFIG.fps}
        width={REEL_VIDEO_CONFIG.width}
        height={REEL_VIDEO_CONFIG.height}
        defaultProps={{ variant: "reel" }}
      />
    </>
  );
};
