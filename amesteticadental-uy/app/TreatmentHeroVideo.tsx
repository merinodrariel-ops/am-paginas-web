import { JsonLd } from "./StructuredData";
import { SITE_URL, VIDEO_BASE, VIDEO_POSTER_BASE, type TreatmentVideo } from "./site-data";

/**
 * Loop de video junto al hero. Reusa los assets de Cloudinary que ya sirve la
 * sede argentina — mismo archivo, misma transformación `q_auto:eco`.
 *
 * Sin `autoPlay` no habría loop; con sonido, sería intrusivo. `muted` + `playsInline`
 * es lo que permite que iOS lo reproduzca en línea en vez de abrirlo a pantalla
 * completa. `preload="metadata"` evita bajar el video entero antes de que se vea.
 */
export default function TreatmentHeroVideo({ video }: { video: TreatmentVideo }) {
  const videoUrl = `${VIDEO_BASE}/${video.id}`;
  const posterUrl = `${VIDEO_POSTER_BASE}/${video.id}.jpg`;

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.alt,
    description: video.caption,
    thumbnailUrl: posterUrl,
    contentUrl: videoUrl,
    uploadDate: "2026-08-02",
    duration: `PT${video.duration}S`,
    publisher: { "@id": `${SITE_URL}/#clinic` },
  };

  return (
    <figure className="hero-video">
      <JsonLd data={videoSchema} />
      <video autoPlay muted loop playsInline preload="metadata" poster={posterUrl} aria-label={video.alt}>
        <source src={videoUrl} />
      </video>
      <div className="hero-video-shade" />
      <figcaption>
        <span className="hero-video-badge">{video.badge}</span>
        <small>{video.caption}</small>
      </figcaption>
    </figure>
  );
}
