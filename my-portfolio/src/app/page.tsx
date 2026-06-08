
import Hero from "./my-components/Hero";
import Skills from "./my-components/Skills";
import Experience from "./my-components/Experience";
import Projects from "./my-components/Projects";

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
