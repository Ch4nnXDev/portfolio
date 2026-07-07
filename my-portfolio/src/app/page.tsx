import Me from "./my-components/get-to-know-me"
import Hero from "./my-components/Hero";
import Skills from "./my-components/Skills";
import Experience from "./my-components/Experience";
import Projects from "./my-components/Projects";
import Background from "./my-components/default/background";

export default function Home() {
  return (
    <>
      <Background />

      <Hero />
      <Me />
      <Skills />
      <Experience />
      <Projects />
    </>
  
  );
}
