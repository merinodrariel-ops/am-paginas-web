import Link from "next/link";
import MapaSedes from "@/components/MapaSedes";

/**
 * Posicionamiento internacional de la marca.
 *
 * Reemplaza al argumento viejo de "acá cuesta menos que en Estados Unidos": comparar
 * inversión contra otros países atrae al paciente que después se va a Turquía o
 * Colombia por precio, que no es el nicho de AM.
 *
 * El eje es estructural y no lo puede copiar un competidor local: una clínica
 * argentina de estética dental con sede propia —no franquicia— en otro país.
 */
export default function Internacional() {
  return (
    <section className="py-24 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-oro font-manrope text-[11px] tracking-[0.28em] uppercase mb-5">
            La única clínica argentina con sede internacional
          </p>
          <h2 className="text-3xl md:text-5xl font-cormorant font-light text-crema leading-[1.05] mb-6">
            De Puerto Madero <span className="text-oro italic">a Carrasco.</span>
          </h2>
          <p className="text-crema/60 font-manrope text-base md:text-[17px] leading-[1.8]">
            AM Estética Dental está construyendo su segunda sede en Montevideo. No es una franquicia ni una
            representación: es la misma clínica, con el mismo equipo, el mismo método y laboratorio propio.
            Ninguna otra clínica de estética dental argentina opera así.
          </p>
        </div>

        <MapaSedes destacar="buenos-aires" />

        <div className="grid md:grid-cols-3 gap-0 mt-12 border-t border-oro/10">
          <article className="flex items-baseline gap-5 py-7 md:pr-8 border-b md:border-b-0 md:border-r border-oro/10">
            <strong className="font-cormorant font-light text-oro text-5xl leading-none">3</strong>
            <p className="text-crema/55 font-manrope text-sm leading-relaxed m-0">
              continentes de origen entre los pacientes que ya se tratan con el método AM.
            </p>
          </article>
          <article className="flex items-baseline gap-5 py-7 md:px-8 border-b md:border-b-0 md:border-r border-oro/10">
            <strong className="font-cormorant font-light text-oro text-5xl leading-none">1</strong>
            <p className="text-crema/55 font-manrope text-sm leading-relaxed m-0">
              laboratorio propio: la pieza que permite resolver en días lo que normalmente lleva meses.
            </p>
          </article>
          <article className="flex items-baseline gap-5 py-7 md:pl-8">
            <strong className="font-cormorant font-light text-oro text-5xl leading-none">0</strong>
            <p className="text-crema/55 font-manrope text-sm leading-relaxed m-0">
              intermediarios entre el diagnóstico y la pieza terminada. El técnico está en la clínica.
            </p>
          </article>
        </div>

        <p className="text-crema/45 font-manrope text-[13px] leading-relaxed mt-8">
          Seguí los avances de la obra en{" "}
          <Link
            href="https://www.amesteticadental.uy/clinica-dental-carrasco"
            className="text-oro underline underline-offset-4 hover:text-crema transition-colors"
            target="_blank"
            rel="noopener"
            data-track="ar_to_uy_internacional_click"
          >
            AM Estética Dental Uruguay
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
