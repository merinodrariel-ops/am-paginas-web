import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import { hreflangFor } from "@/lib/i18n-routes";

const CANONICAL = "https://www.amesteticadental.com/en/contact";
const WA = "https://api.whatsapp.com/send?phone=5491170219298&text=Hi!%20I'd%20like%20some%20information.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.com"),
  title: "Contact · AM Estética Dental, Buenos Aires",
  description:
    "Get in touch by email or WhatsApp. AM Estética Dental, Camila O'Gorman 412, Puerto Madero, Buenos Aires. English-speaking coordination for international patients.",
  alternates: { canonical: CANONICAL, languages: hreflangFor("/contacto") },
  openGraph: {
    title: "Contact · AM Estética Dental",
    description: "Reach us by email or WhatsApp. Puerto Madero, Buenos Aires. Dr. Ariel Merino.",
    url: CANONICAL,
    locale: "en_US",
  },
};

export default function ContactEnPage() {
  return (
    <>
      <Navbar />
      <main className="bg-carbon text-crema font-manrope min-h-screen pt-24">
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <span className="text-oro uppercase tracking-[0.4em] text-xs block mb-6">
                Buenos Aires · Puerto Madero
              </span>
              <h1 className="text-4xl md:text-5xl font-light text-crema leading-tight mb-6">
                Reach us by<br />
                <span className="font-cormorant italic text-oro">email or WhatsApp.</span>
              </h1>
              <p className="text-crema/60 leading-relaxed mb-6">
                We reply within 24 business hours with clear information about your case.
              </p>
              <p className="text-crema/50 leading-relaxed text-sm mb-10">
                Traveling from abroad? Send us photos of your smile beforehand and we will give you a
                preliminary assessment and a plan before you book your flight.{" "}
                <Link href="/en/dental-tourism-argentina" className="text-oro hover:underline">
                  See how it works →
                </Link>
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-crema/40 text-xs uppercase tracking-widest mb-2">Address</p>
                  <p className="text-crema/80">Camila O&apos;Gorman 412, Office 101</p>
                  <p className="text-crema/60 text-sm">Puerto Madero, Buenos Aires, Argentina</p>
                </div>
                <div>
                  <p className="text-crema/40 text-xs uppercase tracking-widest mb-2">WhatsApp</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="text-oro hover:underline">
                    +54 9 11 7021-9298
                  </a>
                </div>
                <div>
                  <p className="text-crema/40 text-xs uppercase tracking-widest mb-2">Hours</p>
                  <p className="text-crema/80 text-sm">Monday to Friday · 10:00 – 19:00 (UTC-3)</p>
                </div>
                <div>
                  <p className="text-crema/40 text-xs uppercase tracking-widest mb-2">Languages</p>
                  <p className="text-crema/80 text-sm">English and Spanish</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 border border-oro/10 rounded-2xl p-8 md:p-10 bg-carbon/40">
              <LeadForm context="page_contact_en" lang="en" />
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="px-6 pb-20 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-light text-crema mb-2">
                Located in <span className="font-cormorant italic text-oro">Puerto Madero</span>
              </h2>
              <p className="text-crema/60 text-sm">
                Camila O&apos;Gorman 412, Office 101, C1107DED, Buenos Aires, Argentina
              </p>
            </div>

            <div className="w-full h-96 rounded-2xl overflow-hidden border border-oro/10">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                aria-label="Google Maps — AM Estética Dental"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6519881892897!2d-58.36262362346066!3d-34.62085717200429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3354dc3d6b3f7%3A0xc0e0f8c8f8c8f8c8!2sCamila%20O'Gorman%20412%2C%20C1107%2C%20CABA!5e0!3m2!1sen!2sar!4v1234567890"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
