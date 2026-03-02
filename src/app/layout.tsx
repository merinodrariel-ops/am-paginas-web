import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AM Clínica Dental | Dr. Ariel Merino",
  description: "Odontología de alta gama con flujo digital en Puerto Madero. Diseño de sonrisa 3D y tecnología premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${outfit.variable} ${cormorant.variable} antialiased`}>
      <body className="bg-crema text-carbon font-sans relative min-h-screen">
        {/* SVG Noise Filter */}
        <svg
          className="pointer-events-none fixed isolate z-50 opacity-20 mix-blend-soft-light w-full h-full"
          width="100%"
          height="100%"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        
        {children}
      </body>
    </html>
  );
}
