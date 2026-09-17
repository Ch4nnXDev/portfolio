"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const phases = [["Foundation", "Secondary Education", "Anuradhapura Central College", "A biology-science foundation that cultivated curiosity and analytical thinking."], ["In progress", "Undergraduate Studies", "Informatics Institute of Technology, Sri Lanka", "Building depth in AI/ML, backend engineering, distributed systems, and system design."], ["Industry", "Software Engineer Intern", "Sri Lanka Telecom", "Hands-on enterprise experience across internal systems, UI work, and role-based access control."], ["Now", "Web Developer & Digital Marketing Executive", "Da Vinci Ceramics", "Bridging engineering, data, performance, and digital growth."]];

export default function Me() {
  const section = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !section.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => gsap.from("[data-timeline-item]", { opacity: 0, y: 28, duration: 0.65, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: section.current, start: "top 72%", once: true } }), section);
    return () => context.revert();
  }, []);
  return <section ref={section} id="about" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Get to know me</p><h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">Engineer. Builder. Perpetual learner.</h2><p className="mt-5 max-w-md leading-7 text-slate-600">From biology labs to distributed systems, I am drawn to the next layer of depth—and to turning that learning into practical work.</p></div><ol className="border-l border-slate-200 pl-6 sm:pl-8">{phases.map(([tag, role, org, description], index) => <li data-timeline-item key={role} className="relative pb-9 last:pb-0"><span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-100 sm:-left-[37px]" /><p className="text-xs font-semibold uppercase tracking-wider text-blue-700">0{index + 1} · {tag}</p><h3 className="mt-2 text-lg font-semibold text-slate-900">{role}</h3><p className="mt-1 text-sm font-medium text-slate-500">{org}</p><p className="mt-3 leading-7 text-slate-600">{description}</p></li>)}</ol></div></section>;
}
