import Image from "next/image";

/**
 * Mapa de las dos sedes internacionales de AM.
 *
 * Reemplaza al mapa que estaba dibujado en SVG: esta pieza es material de marca
 * real, hecha por el estudio, y comunica el posicionamiento mucho mejor que un
 * esquema generado.
 *
 * La imagen está subida a Cloudinary con `image_metadata:true`, así que conserva
 * su EXIF: hay DOS archivos, uno geolocalizado en Puerto Madero para el sitio
 * argentino y otro en Carrasco para el uruguayo. La geolocalización del archivo
 * es una señal de SEO local que refuerza a qué ciudad pertenece cada sitio.
 */
const IMAGEN = {
  uy: {
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1786682381/am/uy/sedes/am-estetica-dental-uruguay-sede-internacional-carrasco-montevideo-puerto-madero-buenos-aires.jpg",
    alt: "Mapa de las sedes internacionales de AM Estética Dental: zona Carrasco en Montevideo, Uruguay, y Puerto Madero en Buenos Aires, Argentina",
  },
  ar: {
    src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1786682380/sedes/am-estetica-dental-sede-internacional-puerto-madero-buenos-aires-carrasco-montevideo.jpg",
    alt: "Mapa de las sedes internacionales de AM Estética Dental: Puerto Madero en Buenos Aires, Argentina, y zona Carrasco en Montevideo, Uruguay",
  },
} as const;

export default function MapaSedes({ destacar = "montevideo" }: { destacar?: "montevideo" | "buenos-aires" }) {
  const imagen = destacar === "montevideo" ? IMAGEN.uy : IMAGEN.ar;

  return (
    <figure className="mapa-sedes">
      <Image src={imagen.src} alt={imagen.alt} width={1014} height={570} sizes="(max-width: 800px) 100vw, 1180px" />
    </figure>
  );
}
