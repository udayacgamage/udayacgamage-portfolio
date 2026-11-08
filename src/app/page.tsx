import Hero from "@/components/Hero";
import NetworkSection from "@/components/NetworkSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ThreeSceneWrapper from "@/components/ThreeSceneWrapper";
import Background from "@/components/Background";

export default function Home() {
  return (
    <>
      <ThreeSceneWrapper />
      <Background />
      <Hero />
      <NetworkSection />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
