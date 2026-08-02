const VIDEO_BASE =
  "https://res.cloudinary.com/drctvgyqd/video/upload/q_auto:eco,f_auto/implantes-dentales-am";

const IMAGE_BASE =
  "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/implantes-dentales-am";

const VIDEO_THUMB_BASE =
  "https://res.cloudinary.com/drctvgyqd/video/upload/so_0,w_1200,q_auto,f_jpg/implantes-dentales-am";

type ImplantVideoShowcaseProps = {
  lang?: "es" | "en";
  selection?: "brand" | "investment";
};

const videos = {
  brand: [
    {
      id: "implante-dental-premium-buenos-aires-vista-completa-3d-am-estetica-dental-puerto-madero",
      aspect: "landscape",
      es: "Vista 3D de un implante dental premium del Grupo Straumann — AM Estética Dental, Puerto Madero, Buenos Aires",
      en: "3D view of a premium Straumann Group dental implant — AM Estética Dental, Puerto Madero, Buenos Aires",
    },
    {
      id: "implante-dental-neodent-grupo-straumann-3d-wireframe-am-estetica-dental-buenos-aires",
      aspect: "portrait",
      es: "Implante dental Neodent del Grupo Straumann en animación 3D — AM Estética Dental, Buenos Aires",
      en: "Neodent dental implant from the Straumann Group in a 3D animation — AM Estética Dental, Buenos Aires",
    },
    {
      id: "implante-dental-titanio-straumann-detalle-roscas-3d-am-estetica-dental-puerto-madero-buenos-aires",
      aspect: "portrait",
      es: "Detalle 3D de las espiras de un implante dental Straumann de titanio — AM Estética Dental, Puerto Madero",
      en: "3D detail of the threads on a Straumann titanium dental implant — AM Estética Dental, Puerto Madero",
    },
  ],
  investment: [
    {
      id: "implante-dental-suizo-titanio-espiras-3d-am-estetica-dental-puerto-madero-argentina",
      aspect: "portrait",
      es: "Animación 3D de las espiras de un implante dental suizo de titanio — AM Estética Dental, Puerto Madero",
      en: "3D animation of the threads on a Swiss titanium dental implant — AM Estética Dental, Puerto Madero",
    },
    {
      id: "mejor-implante-dental-buenos-aires-tornillo-suizo-3d-am-estetica-dental-puerto-madero",
      aspect: "portrait",
      es: "Tornillo de implante dental suizo en animación 3D — AM Estética Dental, Puerto Madero, Buenos Aires",
      en: "Swiss dental implant screw in a 3D animation — AM Estética Dental, Puerto Madero, Buenos Aires",
    },
  ],
} as const;

export default function ImplantVideoShowcase({
  lang = "es",
  selection = "brand",
}: ImplantVideoShowcaseProps) {
  const items = videos[selection];
  const isEnglish = lang === "en";
  const videoSchema = items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: item[lang],
    description: item[lang],
    thumbnailUrl: `${VIDEO_THUMB_BASE}/${item.id}.jpg`,
    contentUrl: `${VIDEO_BASE}/${item.id}`,
    uploadDate: "2026-08-02",
    duration: "PT8S",
    contentLocation: {
      "@type": "Place",
      name: "AM Estética Dental · Puerto Madero · Buenos Aires",
      address: "Camila O'Gorman 412, Puerto Madero, Buenos Aires, Argentina",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -34.620858,
        longitude: -58.3609047,
      },
    },
  }));

  return (
    <section className="py-20 px-6 md:px-12 border-y border-oro/10 bg-carbon overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <span className="text-oro font-manrope uppercase tracking-[0.4em] text-[10px] block mb-4">
            {isEnglish ? "Straumann Group · 3D detail" : "Grupo Straumann · Detalle 3D"}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-crema leading-tight mb-4">
            {isEnglish ? "Precision you can " : "Precisión que se puede "}
            <span className="font-cormorant italic text-oro">
              {isEnglish ? "see." : "ver."}
            </span>
          </h2>
          <p className="text-crema/55 text-sm md:text-base leading-relaxed max-w-2xl">
            {isEnglish
              ? "These animations show the geometry and surface detail of the Straumann and Neodent implant systems used at AM Estética Dental. The system is selected after assessing bone, tissue and the aesthetic demands of each case."
              : "Estas animaciones muestran la geometría y el detalle de los sistemas Straumann y Neodent que utilizamos en AM Estética Dental. La elección se define después de evaluar el hueso, los tejidos y la exigencia estética de cada caso."}
          </p>
        </div>

        <div className={`grid gap-4 ${items.length === 3 ? "md:grid-cols-2" : "grid-cols-2 max-w-3xl mx-auto"}`}>
          {items.map((item, index) => (
            <figure
              key={item.id}
              className={`relative overflow-hidden rounded-2xl border border-oro/15 bg-carbon-soft ${
                item.aspect === "landscape"
                  ? "aspect-video md:col-span-2"
                  : "aspect-[9/16]"
              }`}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload={index === 0 ? "metadata" : "none"}
                poster={
                  item.aspect === "landscape"
                    ? `${VIDEO_THUMB_BASE}/${item.id}.jpg`
                    : `${IMAGE_BASE}/implante-dental-neodent-grupo-straumann-despiece-corona-pilar-tornillo-fondo-negro-am-estetica-dental-puerto-madero`
                }
                aria-label={item[lang]}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={`${VIDEO_BASE}/${item.id}`} />
              </video>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbon via-carbon/65 to-transparent px-4 pb-4 pt-14 pointer-events-none">
                <figcaption className="text-crema/75 text-[10px] md:text-xs leading-relaxed">
                  {item[lang]}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <p className="text-crema/30 text-[10px] mt-5 text-center">
          {isEnglish
            ? "3D visualisation for educational purposes. A CBCT scan is requested separately when clinically indicated."
            : "Visualización 3D con fines educativos. Cuando está clínicamente indicada, la tomografía CBCT se solicita por separado."}
        </p>
      </div>
    </section>
  );
}
