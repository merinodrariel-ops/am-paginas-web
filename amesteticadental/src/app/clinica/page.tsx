import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import ClinicaGallery from "@/components/ClinicaGallery";

const CANONICAL = "https://www.amesteticadental.com/clinica";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Conocé la Clínica en Puerto Madero · AM Estética Dental",
  description:
    "Descubrí la clínica boutique de AM Estética Dental en Puerto Madero. Un oasis de confort y tecnología liderado por el Dr. Ariel Merino.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Conocé la Clínica en Puerto Madero · AM Estética Dental",
    description:
      "Un entorno clínico exclusivo en Puerto Madero diseñado para brindar una experiencia de confort absoluto y la odontología digital más avanzada.",
    url: CANONICAL,
  },
};

const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hola%2C%20quiero%20conocer%20la%20cl%C3%ADnica%20y%20agendar%20un%20turno.";

export default function ClinicaPage() {
  return (
    <main className="bg-carbon text-crema font-manrope min-h-screen">
      <BreadcrumbsSchema
        items={[
          { name: "Inicio", item: "/" },
          { name: "Clínica", item: "/clinica" },
        ]}
      />
      <Navbar />

      {/* 1. HERO — Impacto visual premium */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 border-b border-oro/10 bg-gradient-to-b from-carbon to-carbon-soft">
        <div className="max-w-5xl mx-auto text-center z-10">
          <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6 animate-fade-in">
            AM Estética Dental · Puerto Madero
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-crema leading-tight mb-8">
            Un oasis clínico en el<br />
            <span className="font-cormorant italic text-oro">corazón de Puerto Madero.</span>
          </h1>
          <p className="text-crema/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Diseñamos un espacio boutique en la prestigiosa oficina 101 de Camila O&apos;Gorman 412. Un entorno pensado para el confort absoluto, la privacidad y la odontología digital de máxima precisión.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all shadow-lg hover:shadow-oro/20"
            >
              Agendar Visita por WhatsApp →
            </a>
            <a
              href="#instalaciones"
              className="inline-flex items-center justify-center border border-crema/20 text-crema px-8 py-4 rounded-full font-medium text-base hover:bg-crema/5 transition-all"
            >
              Ver Instalaciones
            </a>
          </div>
        </div>
      </section>

      {/* 2. CUSTOMER EXPERIENCE — La filosofía del confort */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">
            Hospitalidad Premium
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-8">
            Cuidamos cada detalle de tu<br />
            <span className="font-cormorant italic text-oro">paz y tranquilidad.</span>
          </h2>
          <p className="text-crema/75 leading-relaxed text-base mb-6">
            Entendemos que acudir al odontólogo debe ser una experiencia placentera. Por eso, rompimos con el esquema tradicional de los consultorios fríos y ruidosos para crear una atmósfera de tranquilidad y sofisticación.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-oro text-xl font-cormorant italic mt-1">01.</span>
              <div>
                <h3 className="font-semibold text-crema text-base mb-1">Bienvenida Cálida</h3>
                <p className="text-crema/60 text-sm">Te recibimos en nuestra recepción boutique con un café espresso premium o una infusión fresca para que te relajes desde el primer segundo.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-oro text-xl font-cormorant italic mt-1">02.</span>
              <div>
                <h3 className="font-semibold text-crema text-base mb-1">Sala de Espera Boutique</h3>
                <p className="text-crema/60 text-sm">Contamos con un área de espera de absoluta privacidad equipada con sillones relax de gran confort y diseño ergonómico para un descanso garantizado antes de tu sesión.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-oro text-xl font-cormorant italic mt-1">03.</span>
              <div>
                <h3 className="font-semibold text-crema text-base mb-1">Atmósfera Relajante</h3>
                <p className="text-crema/60 text-sm">Música de ambiente especialmente curada, aromaterapia premium y una iluminación indirecta cálida que elimina cualquier tensión o ansiedad.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mosaico decorativo con Next.js Image */}
        <div className="grid grid-cols-2 gap-4 h-[450px] md:h-[600px] relative">
          <div className="relative rounded-2xl overflow-hidden border border-oro/10">
            <Image
              src="/images/clinica/recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg"
              alt="Recepción de AM Estética Dental con iluminación cálida en Puerto Madero, Buenos Aires"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-oro/10 mt-8">
            <Image
              src="/images/clinica/sala-de-espera-exclusiva-boutique-puerto-madero.jpg"
              alt="Vista general de la sala de espera boutique y recepción premium de AM Estética Dental"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 3. GALERÍA DE LAS INSTALACIONES — El Mosaico de 13 fotos */}
      <section id="instalaciones" className="py-24 border-t border-b border-oro/10 bg-carbon-soft px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">
              Galería Fotográfica
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
              Explorá la <span className="font-cormorant italic text-oro">Oficina 101</span> en detalle
            </h2>
            <p className="text-crema/60 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Fotografías reales del interior y los accesos de nuestra clínica de alta gama en Puerto Madero. Espacios diseñados con el estándar premium de Forbes Argentina. Hacé clic en cualquier foto para abrir el visor interactivo.
            </p>
          </div>

          <ClinicaGallery />
        </div>
      </section>

      {/* 4. TECNOLOGÍA DIGITAL — El soporte de los resultados */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-oro/10">
            <Image
              src="/images/clinica/recepcion-experiencia-digital-pacientes-am-estetica-dental.jpg"
              alt="Tecnología digital de diagnóstico 3D y scanner intraoral en AM Estética Dental"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">
              Odontología del Futuro
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-8">
              Flujo digital para tratamientos en<br />
              <span className="font-cormorant italic text-oro">tiempo récord y sin molestias.</span>
            </h2>
            <p className="text-crema/75 leading-relaxed text-base mb-8">
              El espacio físico no es solo estético; está diseñado para albergar la tecnología de diagnóstico y planificación tridimensional más avanzada de Buenos Aires. Esto nos permite eliminar los procesos analógicos incómodos y reducir el tiempo de tratamiento a una fracción.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-oro text-lg mb-2">Scanner Intraoral 3D</h3>
                <p className="text-crema/60 text-sm leading-relaxed">
                  Eliminamos los moldes molestos de pasta de impresión tradicional. Creamos un duplicado digital exacto de tu dentadura en 3D en menos de 2 minutos y con total comodidad.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-oro text-lg mb-2">Simulación de Sonrisa</h3>
                <p className="text-crema/60 text-sm leading-relaxed">
                  Nuestro software de planificación estética nos permite modelar la sonrisa ideal y probártela virtualmente antes de colocar la primera carilla cerámicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACTO & AGNDA */}
      <Contacto />
    </main>
  );
}
