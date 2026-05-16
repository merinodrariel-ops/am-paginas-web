import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Casos from "@/components/Casos";
import Testimonios from "@/components/Testimonios";
import Autoridad from "@/components/Autoridad";
import Tratamientos from "@/components/Tratamientos";
import Features from "@/components/Features";
import DrMerino from "@/components/DrMerino";
import Clinica from "@/components/Clinica";
import PorQueAM from "@/components/PorQueAM";
import Prensa from "@/components/Prensa";
import ClientesVIP from "@/components/ClientesVIP";
import Financiacion from "@/components/Financiacion";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <BreadcrumbsSchema items={[{ name: "Inicio", item: "/" }]} />
      <Navbar />

      {/* 1. HERO — impacto visual. El primer segundo decide todo. */}
      <Hero />

      {/* 2. CASOS — resultados reales inmediatos. La gente entra a ver esto. */}
      <Casos />

      {/* 3. DR. MERINO — quién está detrás de los casos. */}
      <DrMerino />

      {/* 4. TESTIMONIOS — validación social mientras los casos están frescos. */}
      <Testimonios />

      {/* 5. AUTORIDAD — Google 4.9 + Forbes refuerzan lo que ya vieron. */}
      <Autoridad />

      {/* 6. TRATAMIENTOS — ahora que vieron resultados, quieren saber cómo. */}
      <Tratamientos />

      {/* 7. PROCESO — la tecnología que sostiene resultados naturales. */}
      <Features />

      {/* 8. CLÍNICA — el espacio físico refuerza el estándar premium. */}
      <Clinica />

      {/* 9. POR QUÉ AM — diferenciación explícita frente a ofertas genéricas. */}
      <PorQueAM />

      {/* 10. PRENSA — autoridad editorial como refuerzo. */}
      <Prensa />

      {/* 11. CLIENTES VIP — prueba aspiracional. */}
      <ClientesVIP />

      {/* 12. FINANCIACIÓN — cierre racional cuando el deseo ya está construido. */}
      <Financiacion />

      {/* 13. FAQ — objeciones y búsquedas de alta intención. */}
      <FAQ />

      {/* 14. CONTACTO — cierre limpio con CTA final. */}
      <Contacto />
    </main>
  );
}
