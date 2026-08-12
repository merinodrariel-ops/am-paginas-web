import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { JsonLd, organizationSchema } from "./StructuredData";
import Tracking from "./Tracking";
import Script from "next/script";
import { LOGO_APPLE_ICON_URL, LOGO_ICON_URL, LOGO_OG_URL } from "./site-data";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300","400"], style: ["normal","italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amesteticadental.uy"),
  title: { default: "AM Estética Dental Uruguay — Carillas y Diseño de Sonrisa", template: "%s | AM Estética Dental Uruguay" },
  description: "AM Estética Dental prepara su nueva sede en zona Carrasco, Montevideo. Carillas de porcelana, diseño de sonrisa y estética dental con el enfoque clínico del Dr. Ariel Merino.",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: LOGO_ICON_URL, sizes: "192x192", type: "image/png" },
      { url: "https://res.cloudinary.com/drctvgyqd/image/upload/w_32,h_32,c_fill,q_auto,f_auto/v1786512714/am/uy/brand/logo-am-uruguay-clinica-dental-estetica-dental-carrasco-montevideo-miraflores-1445-oficina-202.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: LOGO_APPLE_ICON_URL, sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    siteName: "AM Estética Dental Uruguay",
    locale: "es_UY",
    type: "website",
    images: [{ url: LOGO_OG_URL, width: 1200, height: 630, alt: "Logo AM Estética Dental Uruguay, zona Carrasco, Montevideo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [LOGO_OG_URL],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY" className={`${manrope.variable} ${cormorant.variable}`}>
      <body style={{ background: "var(--carbon, #141414)", color: "var(--crema, #F5F0E8)", fontFamily: "var(--font-manrope, sans-serif)" }}>
        <JsonLd data={organizationSchema} />
        {gtmId ? <Script id="google-tag-manager" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script> : null}
        <Tracking />
        {children}
      </body>
    </html>
  );
}
