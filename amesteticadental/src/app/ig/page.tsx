import type { Metadata } from "next";
import Script from "next/script";

const WHATSAPP_URL =
  "https://wa.me/541170219298?text=Hola%2C%20vengo%20desde%20el%20Instagram%20del%20Dr.%20Ariel%20Merino%20y%20quiero%20consultar%20por%20una%20evaluaci%C3%B3n%20inicial%20en%20AM%20Est%C3%A9tica%20Dental.";

export const metadata: Metadata = {
  title: "Instagram · AM Estética Dental",
  description: "Acceso directo desde Instagram a consultas de AM Estética Dental.",
  alternates: {
    canonical: "https://www.amesteticadental.com/ig",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function InstagramRedirectPage() {
  return (
    <main className="min-h-screen bg-carbon text-crema font-manrope flex items-center justify-center px-6">
      <Script id="instagram-whatsapp-redirect" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'instagram_bio_whatsapp_click',
            event_category: 'contacto',
            event_label: 'Instagram Dr. Ariel Merino',
            whatsapp_source: 'instagram_dr_ariel_merino'
          });

          if (window.fbq) {
            window.fbq('track', 'Contact', {
              content_name: 'Instagram Bio WhatsApp',
              content_category: 'AM Estética Dental'
            });
          }

          setTimeout(function() {
            window.location.href = ${JSON.stringify(WHATSAPP_URL)};
          }, 600);
        `}
      </Script>

      <section className="w-full max-w-md text-center">
        <p className="text-oro uppercase tracking-[0.35em] text-xs mb-5">
          AM Estética Dental
        </p>
        <h1 className="font-cormorant text-4xl md:text-5xl font-light mb-5">
          Te estamos llevando a WhatsApp.
        </h1>
        <p className="text-crema/65 leading-relaxed mb-8">
          Si no se abre automáticamente, tocá el botón para iniciar la consulta.
        </p>
        <a
          href={WHATSAPP_URL}
          className="inline-flex items-center justify-center rounded-full bg-oro px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-oro/90"
        >
          Consultar por WhatsApp
        </a>
      </section>
    </main>
  );
}
