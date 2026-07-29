import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";
import ClinicaGallery from "@/components/ClinicaGallery";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/clinic";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Visit the Clinic in Puerto Madero · AM Estética Dental",
  description:
    "Discover AM Estética Dental's boutique clinic in Puerto Madero, Buenos Aires. An oasis of comfort and digital dentistry led by Dr. Ariel Merino.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/clinica") },
  openGraph: {
    title: "Visit the Clinic in Puerto Madero · AM Estética Dental",
    description:
      "An exclusive clinical environment in Puerto Madero designed for absolute comfort and the most advanced digital dentistry.",
    url: CANONICAL,
    locale: "en_US",
  },
};

const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20to%20visit%20the%20clinic%20and%20book%20an%20appointment.";

export default function ClinicPage() {
  return (
    <main className="bg-carbon text-crema font-manrope min-h-screen">
      <BreadcrumbsSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Clinic", item: "/en/clinic" },
        ]}
      />
      <Navbar />

      {/* 1. HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 border-b border-oro/10 bg-gradient-to-b from-carbon to-carbon-soft">
        <div className="max-w-5xl mx-auto text-center z-10">
          <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6 animate-fade-in">
            AM Estética Dental · Puerto Madero
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-crema leading-tight mb-8">
            A clinical oasis in the<br />
            <span className="font-cormorant italic text-oro">heart of Puerto Madero.</span>
          </h1>
          <p className="text-crema/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10">
            We designed a boutique space in the prestigious Office 101 at Camila O&apos;Gorman 412. An environment built for absolute comfort, privacy and precision digital dentistry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-oro text-carbon px-8 py-4 rounded-full font-semibold text-base hover:bg-oro/90 transition-all shadow-lg hover:shadow-oro/20"
            >
              Book a Visit on WhatsApp →
            </a>
            <a
              href="#facilities"
              className="inline-flex items-center justify-center border border-crema/20 text-crema px-8 py-4 rounded-full font-medium text-base hover:bg-crema/5 transition-all"
            >
              See the Facilities
            </a>
          </div>
        </div>
      </section>

      {/* 2. CUSTOMER EXPERIENCE */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">
            Premium Hospitality
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-8">
            Every detail cares for your<br />
            <span className="font-cormorant italic text-oro">peace of mind.</span>
          </h2>
          <p className="text-crema/75 leading-relaxed text-base mb-6">
            We believe going to the dentist should be a pleasant experience. So we broke with the traditional model of cold, noisy dental offices and created an atmosphere of calm and sophistication.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-oro text-xl font-cormorant italic mt-1">01.</span>
              <div>
                <h3 className="font-semibold text-crema text-base mb-1">A Warm Welcome</h3>
                <p className="text-crema/60 text-sm">We greet you at our boutique reception with a premium espresso or a fresh infusion so you can relax from the very first second.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-oro text-xl font-cormorant italic mt-1">02.</span>
              <div>
                <h3 className="font-semibold text-crema text-base mb-1">Boutique Waiting Lounge</h3>
                <p className="text-crema/60 text-sm">A fully private waiting area with deeply comfortable, ergonomic relaxation armchairs for a guaranteed rest before your session.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-oro text-xl font-cormorant italic mt-1">03.</span>
              <div>
                <h3 className="font-semibold text-crema text-base mb-1">Relaxing Atmosphere</h3>
                <p className="text-crema/60 text-sm">Specially curated ambient music, premium aromatherapy and warm indirect lighting that dissolves any tension or anxiety.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mosaico decorativo */}
        <div className="grid grid-cols-2 gap-4 h-[450px] md:h-[600px] relative">
          <div className="relative rounded-2xl overflow-hidden border border-oro/10">
            <Image
              src="https://res.cloudinary.com/drctvgyqd/image/upload/v1782405026/clinica/recepcion-clinica-odontologica-am-estetica-dental-puerto-madero.jpg"
              alt="AM Estética Dental reception with warm lighting in Puerto Madero, Buenos Aires"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-oro/10 mt-8">
            <Image
              src="https://res.cloudinary.com/drctvgyqd/image/upload/v1782405028/clinica/sala-de-espera-exclusiva-boutique-puerto-madero.jpg"
              alt="Boutique waiting lounge and premium reception at AM Estética Dental"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 3. FACILITY GALLERY */}
      <section id="facilities" className="py-24 border-t border-b border-oro/10 bg-carbon-soft px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">
              Photo Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
              Explore <span className="font-cormorant italic text-oro">Office 101</span> in detail
            </h2>
            <p className="text-crema/60 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Real photographs of the interior and access of our high-end clinic in Puerto Madero. Spaces designed to the premium standard recognized by Forbes Argentina. Click any photo to open the interactive viewer.
            </p>
          </div>

          <ClinicaGallery lang="en" />
        </div>
      </section>

      {/* 4. DIGITAL TECHNOLOGY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-oro/10">
            <Image
              src="https://res.cloudinary.com/drctvgyqd/image/upload/v1782405031/clinica/recepcion-experiencia-digital-pacientes-am-estetica-dental.jpg"
              alt="3D digital diagnostics and intraoral scanner technology at AM Estética Dental"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-4">
              Dentistry of the Future
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-8">
              A digital workflow for treatments in<br />
              <span className="font-cormorant italic text-oro">record time, without discomfort.</span>
            </h2>
            <p className="text-crema/75 leading-relaxed text-base mb-8">
              The space isn&apos;t just beautiful; it houses some of the most advanced 3D diagnostic and planning technology in Buenos Aires. Combined with our own in-house laboratory, it lets us eliminate uncomfortable analog processes and reduce treatment time to a fraction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-oro text-lg mb-2">3D Intraoral Scanner</h3>
                <p className="text-crema/60 text-sm leading-relaxed">
                  No more uncomfortable impression molds. We create an exact digital duplicate of your teeth in 3D in under 2 minutes, in total comfort.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-oro text-lg mb-2">Smile Simulation</h3>
                <p className="text-crema/60 text-sm leading-relaxed">
                  Our aesthetic planning software models your ideal smile and lets you preview it virtually before the first veneer is placed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <Contacto lang="en" />
    </main>
  );
}
