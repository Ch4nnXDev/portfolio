"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

const skills = [
  { category: "Languages", items: [["JavaScript", "javascript-svgrepo-com.svg"], ["TypeScript", "typescript-svgrepo-com.svg"], ["Python", "python-svgrepo-com.svg"], ["Java", "java-ar21.svg"], ["PHP", "PHP.svg"], ["GO", "GoLogo.svg"]] },
  { category: "Frameworks", items: [["React", "react-javascript-js-framework-facebook-svgrepo-com.svg"], ["Next.js", "nextjs-svgrepo-com.svg"], ["Node.js", "node-js-svgrepo-com.svg"], ["Express", "express-svgrepo-com.svg"], ["Spring Boot", "spring-boot-icon.svg"], ["FastAPI", "FastAPI.svg"], ["Laravel", "Laravel.svg"]] },
  { category: "Data & AI", items: [["PostgreSQL", "postgresql-logo-svgrepo-com.svg"], ["MongoDB", "mongodb-logo-svgrepo-com.svg"], ["TensorFlow", "TensorFlow.svg"], ["PyTorch", "PyTorch.svg"], ["LangChain", "Langchain.svg"], ["Pandas", "Pandas.svg"], ["ChromaDB", "chromaDB.svg"], ["Neo4j", "neo4j.svg"]] },
  { category: "Cloud & tools", items: [["AWS", "aws-svgrepo-com.svg"], ["Azure", "azure-svgrepo-com.svg"], ["Docker", "Docker.svg"], ["Cloudflare", "Cloudflare.svg"], ["Kafka", "Apache Kafka.svg"], ["Postman", "Postman.svg"], ["Redis", "redis-logo.svg"]] },

];

export default function Skills() {

  const [selected, setSelected] = useState(0);

  const section = useRef<HTMLElement>(null);

  const grid = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !section.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(
      () => gsap.from("[data-skills-heading]", { opacity: 0, y: 24, duration: 0.65, ease: "power3.out", scrollTrigger: { trigger: section.current, start: "top 75%", once: true } }), section
    );
    return () => context.revert();
  }, []);
  useLayoutEffect(() => {

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !grid.current) return;
    const context = gsap.context(() => gsap.from("[data-skill]", { opacity: 0, y: 12, scale: 0.96, stagger: 0.055, duration: 0.35, ease: "power2.out" }), grid);
    return () => context.revert();
  }, [selected]);
  return <section ref={section} id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
  <div data-skills-heading className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Capabilities</p>
      <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Tools I work with.</h2>
    </div>
      <p className="max-w-sm leading-7 text-slate-600">A practical stack for product development, data work, and reliable deployment.</p>
      </div><div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist">{skills.map((group, index) => <button key={group.category} role="tab" aria-selected={selected === index} onClick={() => setSelected(index)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${selected === index ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-slate-400"}`}>{group.category}</button>)}</div><div ref={grid} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{skills[selected].items.map(([name, icon]) => <div data-skill key={name} className="flex min-h-28 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm"><Image src={`/icons/${icon}`} alt="" width={42} height={42} className="h-10 w-10 object-contain" /><span className="mt-3 text-sm font-medium text-slate-700">{name}</span></div>)}</div>
  </section>;
}
