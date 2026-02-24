import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThreeSceneWrapper from '@/components/ThreeSceneWrapper';

export default function Home() {
  return (
    <>
      <ThreeSceneWrapper />
      <Hero />
      <div className="section-divider mx-auto max-w-5xl" />
      <About />
      <div className="section-divider mx-auto max-w-5xl" />
      <Skills />
      <div className="section-divider mx-auto max-w-5xl" />
      <Projects />
      <div className="section-divider mx-auto max-w-5xl" />
      <Contact />
    </>
  );
}
