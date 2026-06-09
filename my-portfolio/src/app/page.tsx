
import Hero from "./my-components/Hero";
import Skills from "./my-components/Skills";
import Experience from "./my-components/Experience";
import Projects from "./my-components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-500">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </main>
  
  );
}
