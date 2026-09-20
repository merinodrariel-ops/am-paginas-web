import Image from "next/image";
import type { EquipoMiembro } from "@/data/equipo";

/**
 * El retrato de un integrante del equipo, con una salida digna cuando todavía no
 * hay foto.
 *
 * Existe porque el alta de un profesional y la sesión de fotos no ocurren el
 * mismo día: alguien puede estar atendiendo —y tener un currículum que la página
 * necesita mostrar— semanas antes de que exista su retrato. Antes, eso obligaba a
 * elegir entre dejarlo afuera del sitio o publicar un `<Image>` roto. Ahora, sin
 * `imagen`, se dibuja un monograma en la misma caja y con la misma proporción,
 * así la grilla no se desarma.
 *
 * El monograma lleva `role="img"` y el mismo `alt` que llevaría la foto: para un
 * lector de pantalla la ficha se describe igual, con o sin retrato.
 */

/** "Dr. Augusto Druck" → "AD". Los tratamientos no cuentan como nombre. */
function iniciales(nombre: string) {
  return nombre
    .split(/\s+/)
    .filter((parte) => !/^dra?\.?$/i.test(parte))
    .slice(0, 2)
    .map((parte) => parte.charAt(0).toUpperCase())
    .join("");
}

export default function RetratoMiembro({
  miembro,
  idioma = "es",
  sizes,
  priority = false,
  className = "object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]",
}: {
  miembro: EquipoMiembro;
  idioma?: "es" | "en";
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const alt = idioma === "en" ? miembro.altEn : miembro.alt;

  if (!miembro.imagen) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-carbon-soft via-carbon to-carbon-soft"
      >
        <span
          aria-hidden="true"
          className="font-cormorant text-5xl font-light tracking-[0.14em] text-oro/40"
        >
          {iniciales(miembro.nombre)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={miembro.imagen}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
