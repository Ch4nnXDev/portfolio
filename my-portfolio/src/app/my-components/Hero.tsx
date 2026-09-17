"use client";

import { ArrowDown } from "@phosphor-icons/react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Hero() {
  const section = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !section.current) return;
    const context = gsap.context(() => {
      gsap.from("[data-hero]", { y: 34, opacity: 0, duration: 0.8, stagger: 0.13, ease: "power3.out", clearProps: "transform,opacity" });
    }, section);
    return () => context.revert();
  }, []);

  return <section ref={section} id="home" className="mx-auto flex min-h-[min(760px,100svh)] max-w-6xl items-center px-6 pb-16 pt-32 sm:px-10 lg:px-14">
    <div className="max-w-4xl">
      <p data-hero className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Portfolio · 2026</p>
      <h1 data-hero className="font-serif text-5xl leading-[0.98] tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">Channa<br />Karawita</h1>
      <p data-hero className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">Software engineer and growth-minded builder creating useful, scalable web and AI-powered products.</p>
      <div data-hero className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">View projects</a><a href="#about" className="rounded-full border border-slate-300 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-500">About me</a></div>
      <a data-hero href="#about" className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-700"><ArrowDown size={17} /> Scroll to explore</a>
    </div>
  </section>;
}
