const VIDEO_ID =
  "implante-dental-neodent-grupo-straumann-3d-wireframe-am-estetica-dental-buenos-aires";

const VIDEO_URL =
  "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto:eco,f_auto/implantes-dentales-am/" +
  VIDEO_ID;
const POSTER_URL =
  "https://res.cloudinary.com/drctvgyqd/video/upload/so_0,w_1000,q_auto,f_jpg/implantes-dentales-am/" +
  VIDEO_ID +
  ".jpg";

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Implante dental Neodent del Grupo Straumann en animación 3D",
  description:
    "Animación 3D de un implante dental Neodent del Grupo Straumann utilizado en AM Estética Dental, Puerto Madero, Buenos Aires.",
  thumbnailUrl: POSTER_URL,
  contentUrl: VIDEO_URL,
  uploadDate: "2026-08-02",
  duration: "PT8S",
  contentLocation: {
    "@type": "Place",
    name: "AM Estética Dental · Puerto Madero · Buenos Aires",
    address: "Camila O'Gorman 412, Puerto Madero, Buenos Aires, Argentina",
  },
};

export default function ImplantHeroVideo() {
  return (
    <figure className="relative aspect-[4/5] w-full max-w-[520px] justify-self-center overflow-hidden rounded-[28px] border border-oro/20 bg-carbon-soft shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_URL}
        aria-label="Implante dental Neodent del Grupo Straumann en animación tecnológica 3D — AM Estética Dental, Puerto Madero"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={VIDEO_URL} />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-7">
        <span className="mb-2 inline-flex rounded-full border border-oro/30 bg-carbon/80 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-oro backdrop-blur-sm">
          Grupo Straumann · Tecnología 3D
        </span>
        <figcaption className="max-w-sm text-xs leading-relaxed text-crema/65">
          Geometría y superficie de un implante Neodent® del Grupo Straumann®.
        </figcaption>
      </div>
    </figure>
  );
}
