import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Manifesto from "@/components/Manifesto";
import Archive from "@/components/Archive";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Features />
      <Manifesto />
      <Archive />
    </main>
  );
}
