import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Autoridad from "@/components/Autoridad";
import Tratamientos from "@/components/Tratamientos";
import Features from "@/components/Features";
import DrMerino from "@/components/DrMerino";
import Archive from "@/components/Archive";
import Testimonios from "@/components/Testimonios";
import PorQueAM from "@/components/PorQueAM";
import Prensa from "@/components/Prensa";
import ClientesVIP from "@/components/ClientesVIP";
import Financiacion from "@/components/Financiacion";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* 1. HERO — impacto visual. El primer segundo decide todo. */}
      <Hero />

      {/* 2. CONFIANZA — autoridad compacta antes de entrar al tratamiento. */}
      <Autoridad />

      {/* 3. TRATAMIENTOS — carillas y diseño de sonrisa primero. */}
      <Tratamientos />

      {/* 4. PROCESO — la tecnología que sostiene resultados naturales. */}
      <Features />

      {/* 5. DR. MERINO — criterio clínico y dirección del caso. */}
      <DrMerino />

      {/* 6. CASOS — evidencia visual antes de la prueba social extendida. */}
      <Archive />

      {/* 7. TESTIMONIOS — validación emocional y social. */}
      <Testimonios />

      {/* 8. POR QUÉ AM — diferenciación explícita frente a ofertas genéricas. */}
      <PorQueAM />

      {/* 9. PRENSA — autoridad editorial como refuerzo, no como apertura. */}
      <Prensa />

      {/* 10. CLIENTES VIP — prueba aspiracional después de entender la propuesta. */}
      <ClientesVIP />

      {/* 11. FINANCIACIÓN — cierre racional cuando el deseo ya está construido. */}
      <Financiacion />

      {/* 12. FAQ — objeciones y búsquedas de alta intención. */}
      <FAQ />

      {/* 13. CONTACTO — cierre limpio con CTA final. */}
      <Contacto />
    </main>
  );
}
