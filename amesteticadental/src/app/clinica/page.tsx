import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

const CANONICAL = "https://www.amesteticadental.com/clinica";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Conocé la Clínica en Puerto Madero · AM Estética Dental",
  description:
    "Descubrí el espacio clínico y boutique de AM Estética Dental en Puerto Madero, Buenos Aires. Un oasis de confort y tecnología de vanguardia liderado por el Dr. Ariel Merino.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Conocé la Clínica en Puerto Madero · AM Estética Dental",
    description:
      "Un entorno clínico exclusivo en Puerto Madero diseñado para brindar una experiencia de confort absoluto y la odontología digital más avanzada.",
    url: CANONICAL,
  },
};

// Configuración para el Streaming de Fotos desde Cloudinary con Fallback Local
// Si USE_CLOUDINARY es true, las fotos se cargan desde el CDN de Cloudinary.
// Si es false, se sirven desde la carpeta public/images/clinica del proyecto.
const USE_CLOUDINARY = false;
const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/v1/clinica";
const LOCAL_BASE_URL = "/images/clinica";

const getImgSrc = (filename: string) => {
  return USE_CLOUDINARY ? `${CLOUDINARY_BASE_URL}/${filename}` : `${LOCAL_BASE_URL}/${filename}`;
};

// 13 Fotos del Consultorio (Exteriores e Interiores)
const FOTOS_CLINICA = {
  exteriores: [
    {
      src: getImgSrc("entrada-clinica-cartel-iluminado-am-estetica-dental-puerto-madero.jpg"),
      alt: "Entrada principal de AM Estética Dental con el logotipo iluminado en Puerto Madero",
      title: "Logotipo Exterior Iluminado",
      sizeClass: "col-span-2 row-span-1"
    },
    {
      src: getImgSrc("ingreso-clinica-cartel-luminoso-am-estetica-dental-puerto-madero.jpg"),
      alt: "Ingreso premium a AM Estética Dental, cartel iluminado en Camila O'Gorman 412",
      title: "Cartel Luminoso de Bienvenida",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("entrada-consultorio-cartel-am-estetica-dental-puerto-madero.jpg"),
      alt: "Letrero comercial de AM Estética Dental en la entrada exterior en Puerto Madero",
      title: "Letrero Comercial del Acceso",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("letrero-entrada-am-estetica-dental-dr-ariel-merino-puerto-madero.jpg"),
      alt: "Cartel exterior identificatorio del Dr. Ariel Merino en Puerto Madero, Buenos Aires",
      title: "Letrero Identificatorio del Doctor",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("ingreso-consultorio-cartel-am-estetica-dental-puerto-madero.jpg"),
      alt: "Detalle de la entrada de la clínica odontológica premium de la oficina 101 en Puerto Madero",
      title: "Detalle del Acceso de la Oficina 101",
      sizeClass: "col-span-1 row-span-1"
    }
  ],
  interiores: [
    {
      src: getImgSrc("recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg"),
      alt: "Recepción de AM Estética Dental con iluminación cálida en Puerto Madero, Buenos Aires",
      title: "Recepción Boutique de la Clínica",
      sizeClass: "col-span-2 row-span-2"
    },
    {
      src: getImgSrc("recepcion-boutique-am-estetica-dental-puerto-madero.jpg"),
      alt: "Área de recepción elegante de la clínica de estética dental oficina 101 en Puerto Madero",
      title: "Entorno de Recepción Elegante",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("recepcion-am-estetica-dental-oficina-101-puerto-madero.jpg"),
      alt: "Mobiliario premium y detalles de diseño en la recepción de la clínica en Puerto Madero",
      title: "Detalles del Mobiliario Premium",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("decoracion-recepcion-boutique-crema-oro-am-estetica-dental.jpg"),
      alt: "Detalles decorativos en tonos crema y oro de la recepción de AM Estética Dental",
      title: "Diseño Interior Crema y Oro",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("sala-espera-recepcion-confort-am-estetica-dental.jpg"),
      alt: "Cómodo sillón relax de diseño ergonómico en la sala de espera boutique de Puerto Madero",
      title: "Sillón Confort de la Sala de Espera",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("sillon-relax-confort-sala-espera-clinica-dental.jpg"),
      alt: "Sillón relax de gran confort y diseño moderno en el área de espera boutique de la clínica",
      title: "Sillón de Relajación y Descanso",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("sala-de-espera-exclusiva-boutique-puerto-madero.jpg"),
      alt: "Vista general de la sala de espera boutique y recepción premium de AM Estética Dental",
      title: "Sala de Espera Exclusiva Boutique",
      sizeClass: "col-span-1 row-span-1"
    },
    {
      src: getImgSrc("recepcion-experiencia-digital-pacientes-am-estetica-dental.jpg"),
      alt: "Espacio tecnológico y recepción interactiva de AM Estética Dental en Puerto Madero",
      title: "Entorno Digital y Hospitalidad",
      sizeClass: "col-span-1 row-span-1"
    }
  ]
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
              src={FOTOS_CLINICA.interiores[0].src}
              alt={FOTOS_CLINICA.interiores[0].alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-oro/10 mt-8">
            <Image
              src={FOTOS_CLINICA.interiores[6].src}
              alt={FOTOS_CLINICA.interiores[6].alt}
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
              Fotografías reales del interior y los accesos de nuestra clínica de alta gama en Puerto Madero. Espacios diseñados con el estándar premium de Forbes Argentina.
            </p>
          </div>

          {/* Subtítulo: RECEPCIÓN Y SALA DE ESPERA */}
          <div className="mb-8 border-b border-oro/10 pb-4">
            <h3 className="text-2xl font-light text-crema">
              La Recepción y <span className="font-cormorant italic text-oro">Sala de Espera Boutique</span>
            </h3>
            <p className="text-crema/40 text-xs mt-1 uppercase tracking-widest">Atmósfera de confort crema & oro · 8 tomas de interior</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {FOTOS_CLINICA.interiores.map((foto, index) => (
              <div 
                key={foto.src}
                className="relative h-80 rounded-2xl overflow-hidden border border-oro/10 group bg-carbon"
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-oro font-cormorant italic text-sm block mb-1">AM Estética Dental</span>
                    <h4 className="text-crema font-medium text-base leading-tight">{foto.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtítulo: EL ACCESO EXTERIOR Y CARTELERÍA */}
          <div className="mb-8 border-b border-oro/10 pb-4">
            <h3 className="text-2xl font-light text-crema">
              El Acceso Exterior y <span className="font-cormorant italic text-oro">Cartel Oficial de AM</span>
            </h3>
            <p className="text-crema/40 text-xs mt-1 uppercase tracking-widest">Lo que encontrás al llegar · 5 tomas de exterior</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOTOS_CLINICA.exteriores.map((foto, index) => (
              <div 
                key={foto.src}
                className="relative h-80 rounded-2xl overflow-hidden border border-oro/10 group bg-carbon"
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-oro font-cormorant italic text-sm block mb-1">AM Estética Dental</span>
                    <h4 className="text-crema font-medium text-base leading-tight">{foto.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECNOLOGÍA DIGITAL — El soporte de los resultados */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-oro/10">
            <Image
              src={FOTOS_CLINICA.interiores[7].src}
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
