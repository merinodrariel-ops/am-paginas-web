"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Configuración para el Streaming de Fotos
const USE_CLOUDINARY = true;
const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1/clinica";
const LOCAL_BASE_URL = "/images/clinica";

const getImgSrc = (filename: string) => {
  return USE_CLOUDINARY ? `${CLOUDINARY_BASE_URL}/${filename}` : `${LOCAL_BASE_URL}/${filename}`;
};

// 8 Fotos Seleccionadas (Curadas y sin duplicidad)
const FOTOS_INTERIORES = [
  {
    src: getImgSrc("recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg"),
    alt: "Recepción de AM Estética Dental con iluminación cálida en Puerto Madero, Buenos Aires",
    title: "Recepción Boutique de la Clínica",
  },
  {
    src: getImgSrc("decoracion-recepcion-boutique-crema-oro-am-estetica-dental.jpg"),
    alt: "Detalles decorativos en tonos crema y oro de la recepción de AM Estética Dental",
    title: "Diseño Interior Crema y Oro",
  },
  {
    src: getImgSrc("sala-de-espera-exclusiva-boutique-puerto-madero.jpg"),
    alt: "Vista general de la sala de espera boutique y recepción premium de AM Estética Dental",
    title: "Sala de Espera Exclusiva Boutique",
  },
  {
    src: getImgSrc("sillon-relax-confort-sala-espera-clinica-dental.jpg"),
    alt: "Sillón relax de gran confort y diseño moderno en el área de espera boutique de la clínica",
    title: "Sillón de Relajación y Descanso",
  },
  {
    src: getImgSrc("recepcion-experiencia-digital-pacientes-am-estetica-dental.jpg"),
    alt: "Espacio tecnológico y recepción interactiva de AM Estética Dental en Puerto Madero",
    title: "Entorno Digital y Hospitalidad",
  }
];

const FOTOS_EXTERIORES = [
  {
    src: getImgSrc("entrada-clinica-cartel-iluminado-am-estetica-dental-puerto-madero.jpg"),
    alt: "Entrada principal de AM Estética Dental con el logotipo iluminado en Puerto Madero",
    title: "Logotipo Exterior Iluminado",
  },
  {
    src: getImgSrc("ingreso-clinica-cartel-luminoso-am-estetica-dental-puerto-madero.jpg"),
    alt: "Ingreso premium a AM Estética Dental, cartel iluminado en Camila O'Gorman 412",
    title: "Cartel Luminoso de Bienvenida",
  },
  {
    src: getImgSrc("letrero-entrada-am-estetica-dental-dr-ariel-merino-puerto-madero.jpg"),
    alt: "Cartel exterior identificatorio del Dr. Ariel Merino en Puerto Madero, Buenos Aires",
    title: "Letrero Identificatorio del Doctor",
  }
];

const ALL_PHOTOS = [...FOTOS_INTERIORES, ...FOTOS_EXTERIORES];

export default function ClinicaGallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Funciones de navegación memorizadas
  const closeLightbox = useCallback(() => {
    setActiveIdx(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev !== null && prev < ALL_PHOTOS.length - 1 ? prev + 1 : 0));
  }, [activeIdx]);

  const prevPhoto = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : ALL_PHOTOS.length - 1));
  }, [activeIdx]);

  // Manejo de eventos de teclado
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Bloquear scroll

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Restaurar scroll
    };
  }, [activeIdx, closeLightbox, nextPhoto, prevPhoto]);

  const handleOpenLightbox = (src: string) => {
    const idx = ALL_PHOTOS.findIndex((f) => f.src === src);
    if (idx !== -1) {
      setActiveIdx(idx);
    }
  };

  return (
    <>
      {/* ── SECCIÓN INTERIORES ── */}
      <div className="mb-8 border-b border-oro/10 pb-4">
        <h3 className="text-2xl font-light text-crema">
          La Recepción y <span className="font-cormorant italic text-oro">Sala de Espera Boutique</span>
        </h3>
        <p className="text-crema/40 text-xs mt-1 uppercase tracking-widest">
          Atmósfera de confort crema & oro · 5 tomas de interior
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {FOTOS_INTERIORES.map((foto) => (
          <div
            key={foto.src}
            onClick={() => handleOpenLightbox(foto.src)}
            className="relative h-80 rounded-2xl overflow-hidden border border-oro/10 group bg-carbon cursor-pointer"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <span className="text-oro font-cormorant italic text-sm block mb-1">AM Estética Dental</span>
                <h4 className="text-crema font-medium text-base leading-tight mb-2">{foto.title}</h4>
                <span className="inline-flex items-center gap-1.5 text-xs text-oro border-b border-oro/35 pb-0.5">
                  Ver en detalle
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── SECCIÓN EXTERIORES ── */}
      <div className="mb-8 border-b border-oro/10 pb-4">
        <h3 className="text-2xl font-light text-crema">
          El Acceso Exterior y <span className="font-cormorant italic text-oro">Cartel Oficial de AM</span>
        </h3>
        <p className="text-crema/40 text-xs mt-1 uppercase tracking-widest">
          Lo que encontrás al llegar · 3 tomas de exterior
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FOTOS_EXTERIORES.map((foto) => (
          <div
            key={foto.src}
            onClick={() => handleOpenLightbox(foto.src)}
            className="relative h-80 rounded-2xl overflow-hidden border border-oro/10 group bg-carbon cursor-pointer"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <span className="text-oro font-cormorant italic text-sm block mb-1">AM Estética Dental</span>
                <h4 className="text-crema font-medium text-base leading-tight mb-2">{foto.title}</h4>
                <span className="inline-flex items-center gap-1.5 text-xs text-oro border-b border-oro/35 pb-0.5">
                  Ver en detalle
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-[200] flex flex-col justify-between bg-carbon/95 backdrop-blur-md p-4 md:p-6 transition-all duration-300 animate-fade-in">
          {/* Header del Lightbox */}
          <div className="flex items-center justify-between w-full z-10 pt-4 px-4">
            <div className="text-left">
              <span className="text-oro uppercase tracking-[0.25em] text-[10px] block mb-1">
                Galería de Instalaciones · AM Estética Dental
              </span>
              <h4 className="text-crema text-base md:text-lg font-light leading-tight">
                {ALL_PHOTOS[activeIdx].title}
              </h4>
            </div>
            
            <button
              onClick={closeLightbox}
              className="p-3 text-crema/60 hover:text-oro transition-colors rounded-full border border-crema/10 hover:border-oro/30 bg-carbon-soft"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Área del Slide */}
          <div className="relative flex-1 w-full flex items-center justify-center py-8">
            {/* Botón Anterior */}
            <button
              onClick={prevPhoto}
              className="absolute left-2 md:left-6 p-4 text-crema/60 hover:text-oro transition-colors rounded-full border border-crema/10 hover:border-oro/30 bg-carbon-soft z-20"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Contenedor de la Imagen */}
            <div className="relative w-full max-w-5xl h-[55vh] md:h-[70vh] transition-transform duration-500">
              <Image
                src={ALL_PHOTOS[activeIdx].src}
                alt={ALL_PHOTOS[activeIdx].alt}
                fill
                sizes="(max-width: 1200px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={nextPhoto}
              className="absolute right-2 md:right-6 p-4 text-crema/60 hover:text-oro transition-colors rounded-full border border-crema/10 hover:border-oro/30 bg-carbon-soft z-20"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer del Lightbox */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 pb-4 gap-3 z-10">
            <p className="text-crema/40 text-xs text-center md:text-left max-w-2xl font-light">
              {ALL_PHOTOS[activeIdx].alt}
            </p>
            <div className="text-oro font-manrope text-sm font-medium bg-oro/5 px-4 py-1.5 rounded-full border border-oro/10">
              {activeIdx + 1} / {ALL_PHOTOS.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
