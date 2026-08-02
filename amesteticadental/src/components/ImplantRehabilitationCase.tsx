import Image from "next/image";
import Link from "next/link";

const CASE_URL = "/casos/agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas";
const CASE_IMAGE =
  "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental";

export default function ImplantRehabilitationCase() {
  return (
    <section className="border-y border-oro/10 bg-carbon-soft px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Link
          href={CASE_URL}
          className="group relative aspect-[4/5] w-full max-w-[520px] justify-self-center overflow-hidden rounded-[28px] border border-oro/15 bg-carbon"
        >
          <Image
            src={CASE_IMAGE}
            alt="Antes y después de una rehabilitación oral completa con implantes y 24 cerámicas — caso real de AM Estética Dental, Puerto Madero"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-transparent" />
          <span className="absolute bottom-5 left-5 rounded-full border border-oro/30 bg-carbon/80 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-oro backdrop-blur-sm">
            Caso real · transformación completa
          </span>
        </Link>

        <div>
          <span className="mb-5 block text-[10px] uppercase tracking-[0.4em] text-oro">
            Rehabilitación oral integral
          </span>
          <h2 className="mb-6 text-3xl font-light leading-tight text-crema md:text-5xl">
            USD 24.000–30.000 corresponde a{" "}
            <span className="font-cormorant italic text-oro">toda la transformación.</span>
          </h2>
          <p className="mb-4 text-base leading-relaxed text-crema/68">
            <strong className="font-medium text-crema">No es la inversión de un implante aislado.</strong>{" "}
            Es una rehabilitación completa en la que se reconstruyen habitualmente entre 24 y 28 piezas con coronas o carillas, se recupera la mordida y se diseña la sonrisa como un único sistema.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-crema/55">
            Cuando el caso lo requiere, entre uno y cuatro implantes suelen quedar incluidos dentro de ese plan integral, junto con los injertos de hueso o tejido indicados. En este caso real se combinaron implantes en las zonas de agenesia con 24 restauraciones cerámicas y una planificación multidisciplinaria.
          </p>

          <div className="mb-8 grid grid-cols-3 gap-3">
            {[
              ["24–28", "coronas o carillas"],
              ["1–4", "implantes incluidos*"],
              ["Integral", "función + estética"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-oro/15 bg-carbon p-4">
                <p className="mb-1 text-xl font-semibold text-oro md:text-2xl">{value}</p>
                <p className="text-[9px] uppercase leading-relaxed tracking-[0.15em] text-crema/40">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link href={CASE_URL} className="inline-flex items-center gap-2 text-sm font-semibold text-oro hover:text-oro-light">
              Ver la transformación completa →
            </Link>
            <span className="text-[10px] leading-relaxed text-crema/30">
              *La cantidad se confirma con la evaluación clínica y los estudios indicados.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
