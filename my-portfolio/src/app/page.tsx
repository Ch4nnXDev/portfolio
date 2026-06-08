import Image from "next/image";
import Header from "./components/default/Header";
import Footer from "./components/default/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <section className="flex flex-col w-full h-full">
      <Header />
      <Hero />

      <Footer />
      

    </section>
  
  );
}
