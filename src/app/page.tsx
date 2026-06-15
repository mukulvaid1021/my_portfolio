import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-neutral-800 selection:text-white">
      <ScrollyCanvas />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
