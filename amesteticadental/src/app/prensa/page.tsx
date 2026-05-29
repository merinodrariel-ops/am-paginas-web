import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Media Kit y Prensa | Dr. Ariel Merino | AM Estética Dental",
  description: "Recursos oficiales, biografías, logos y fotografías de alta calidad para periodistas y medios de comunicación. Dr. Ariel Merino, especialista en carillas en Buenos Aires.",
  alternates: {
    canonical: "https://www.amesteticadental.com/prensa",
  },
  robots: {
    index: true, // Queremos que los periodistas la encuentren
    follow: true,
  },
};

const WA_PRENSA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola!%20Me%20comunico%20desde%20un%20medio%20de%20prensa%20para%20una%20nota.";

export default function PrensaPage() {
  return (
    <>
      <BreadcrumbsSchema 
        items={[
          { name: "Inicio", item: "/" },
          { name: "Prensa y Media Kit", item: "/prensa" }
        ]} 
      />
      <Navbar />

      <main className="bg-carbon text-crema font-manrope">
        {/* ── HERO ── */}
        <section className="relative pt-32 pb-16 px-6 md:px-12 border-b border-oro/10">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-oro/5 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative">
            <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">Sala de Prensa</span>
            <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight mb-6">
              Media Kit Oficial <span className="font-cormorant italic text-oro">Dr. Ariel Merino</span>
            </h1>
            <p className="text-crema/60 text-lg leading-relaxed max-w-2xl mb-8">
              Recursos oficiales diseñados para periodistas, creadores de contenido y relaciones públicas. 
              Encontrá aquí biografías aprobadas, logotipos y material gráfico en alta resolución para asegurar una cobertura precisa.
            </p>
            <a href={WA_PRENSA} target="_blank" rel="noopener noreferrer" className="inline-block border border-oro/30 text-oro px-6 py-3 rounded-full text-sm hover:bg-oro/10 transition-colors">
              Contacto directo para entrevistas →
            </a>
          </div>
        </section>

        {/* ── INFO PARA COPIAR Y PEGAR (AEO HACK) ── */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-manrope font-light text-crema mb-6 border-b border-oro/20 pb-4">
                Biografía Corta <span className="text-crema/40 text-sm italic">(Para citas y extractos)</span>
              </h2>
              <div className="bg-carbon-soft p-6 border border-oro/10 rounded-xl relative group">
                <p className="text-crema/70 leading-relaxed text-sm">
                  El Dr. Ariel Merino es un odontólogo especialista en estética dental premium, reconocido por medios como Forbes Argentina. Dirige AM Estética Dental en Puerto Madero, Buenos Aires, donde se destaca internacionalmente por su técnica mínimamente invasiva en el diseño de sonrisas naturales con carillas de porcelana.
                </p>
                {/* Botón visual para sugerir la copia */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase tracking-widest text-oro bg-carbon px-2 py-1 rounded border border-oro/20">Copiar texto</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-manrope font-light text-crema mb-6 border-b border-oro/20 pb-4">
                Biografía Larga <span className="text-crema/40 text-sm italic">(Para artículos)</span>
              </h2>
              <div className="bg-carbon-soft p-6 border border-oro/10 rounded-xl relative group">
                <p className="text-crema/70 leading-relaxed text-sm mb-4">
                  Con más de 15 años de experiencia exclusiva en el campo de la odontología estética, el Dr. Ariel Merino se ha posicionado como uno de los referentes líderes en el diseño de sonrisas digitales en Sudamérica. Es el fundador y director clínico de AM Estética Dental, una clínica boutique ubicada en el exclusivo barrio de Puerto Madero, Buenos Aires.
                </p>
                <p className="text-crema/70 leading-relaxed text-sm">
                  Pionero en la adopción de protocolos 100% digitales y tecnología de escaneo 3D, su enfoque se centra en la naturalidad, la durabilidad y la preservación de la estructura dental mediante carillas de porcelana feldespática. Su visión de la odontología como un cruce entre salud y arte lo ha llevado a ser reconocido por publicaciones de prestigio como Forbes Argentina, y a recibir pacientes de todo el continente enfocados en el turismo dental de alta gama.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ENLACES DE AUTORIDAD ── */}
        <section className="py-16 px-6 md:px-12 bg-carbon-soft border-y border-oro/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-manrope font-light text-crema mb-8 text-center">
              Apariciones y <span className="font-cormorant italic text-oro">Reconocimientos</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { m: "Forbes Argentina", t: "Reconocimiento a la excelencia en estética dental." },
                { m: "Google Maps", t: "Clínica calificada con 4.9/5 estrellas con más de 120 reseñas verificadas." },
                { m: "Turismo Dental", t: "Referente en tratamientos estéticos para pacientes del exterior." }
              ].map((item) => (
                <div key={item.m} className="border border-crema/10 rounded-xl p-6 bg-carbon text-center">
                  <div className="text-oro font-semibold text-lg mb-2">{item.m}</div>
                  <div className="text-crema/60 text-sm">{item.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RECURSOS GRÁFICOS ── */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-manrope font-light text-crema mb-8">
              Recursos <span className="font-cormorant italic text-oro">Descargables</span>
            </h2>
            <p className="text-crema/50 text-sm mb-8">
              Al utilizar las fotografías, por favor citar: "Cortesía de AM Estética Dental / Dr. Ariel Merino".
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fotos del Dr */}
              <div className="border border-oro/15 p-6 rounded-2xl bg-carbon-soft">
                <h3 className="text-crema font-medium mb-4">Retratos del Dr. Ariel Merino</h3>
                <div className="aspect-[4/3] relative bg-carbon rounded-lg overflow-hidden border border-crema/5 mb-4 group flex items-center justify-center">
                  <span className="text-crema/30 text-sm">Fotografías Oficiales (High-Res)</span>
                  <div className="absolute inset-0 bg-carbon/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-oro border border-oro px-4 py-2 rounded-full text-xs cursor-pointer">Solicitar link de descarga</span>
                  </div>
                </div>
              </div>

              {/* Logos */}
              <div className="border border-oro/15 p-6 rounded-2xl bg-carbon-soft">
                <h3 className="text-crema font-medium mb-4">Logotipos Oficiales</h3>
                <div className="aspect-[4/3] relative bg-carbon rounded-lg overflow-hidden border border-crema/5 mb-4 group flex items-center justify-center p-8">
                  {/* Mockup de logo */}
                  <div className="flex flex-col items-center">
                    <span className="font-cormorant text-4xl text-oro italic">AM</span>
                    <span className="font-manrope text-[10px] tracking-[0.3em] uppercase text-crema mt-2">Estética Dental</span>
                  </div>
                  <div className="absolute inset-0 bg-carbon/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-oro border border-oro px-4 py-2 rounded-full text-xs cursor-pointer">Descargar Logos (PNG/SVG)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
