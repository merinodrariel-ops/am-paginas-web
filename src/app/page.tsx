import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Autoridad from "@/components/Autoridad";
import DrMerino from "@/components/DrMerino";
import Manifesto from "@/components/Manifesto";
import PorQueAM from "@/components/PorQueAM";
import Tratamientos from "@/components/Tratamientos";
import Testimonios from "@/components/Testimonios";
import Financiacion from "@/components/Financiacion";
import Features from "@/components/Features";
import Archive from "@/components/Archive";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* 1. HERO — impacto visual. El primer segundo decide todo. */}
      <Hero />

      {/* 2. AUTORIDAD — Forbes + Miss Universo + 4.9★. Antes de que duden. */}
      <Autoridad />

      {/* 3. DR. MERINO — el médico es la marca. La decisión más importante. */}
      <DrMerino />

      {/* 4. MANIFIESTO — el alma de la clínica. Por qué existimos. */}
      <Manifesto />

      {/* 5. POR QUÉ AM — diferenciación explícita vs. competidores de CABA. */}
      <PorQueAM />

      {/* 6. TRATAMIENTOS — los 8 servicios con detalle e impacto real. */}
      <Tratamientos />

      {/* 7. TESTIMONIOS — videos reales + testimonios escritos. */}
      <Testimonios />

      {/* 8. FINANCIACIÓN — simulador nativo. El killer feature de conversión. */}
      <Financiacion />

      {/* 9. TECNOLOGÍA — diferenciadores técnicos del proceso clínico. */}
      <Features />

      {/* 10. CASOS — galería de transformaciones antes/después. */}
      <Archive />

      {/* 11. FAQ — captura búsquedas de Google + reduce fricción pre-WhatsApp. */}
      <FAQ />

      {/* 12. CONTACTO — CTA final con toda la info. */}
      <Contacto />
    </main>
  );
}
