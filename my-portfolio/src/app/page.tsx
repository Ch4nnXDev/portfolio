
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <section className="flex flex-col w-full bg-white text-black h-full">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </section>
  
  );
}
