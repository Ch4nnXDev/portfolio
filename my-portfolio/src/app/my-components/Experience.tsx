"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const roles = [{ title: "Web Developer & Digital Marketing Executive", company: "Da Vinci Ceramics", date: "Feb 2026 — Present", text: "Improving web performance, managing the WordPress lifecycle, implementing analytics, and using data to optimise customer journeys and campaigns.", skills: ["Web performance", "WordPress", "Analytics", "Growth"] }, { title: "Software Engineer Intern", company: "Sri Lanka Telecom", date: "Jun 2025 — May 2026", text: "Contributed to enterprise systems, from CRUD interfaces for fraud-call management to reusable Angular components and role-based access control.", skills: ["Angular", "Python", "CodeIgniter", "Enterprise systems"] }];

export default function Experience() {
  const section = useRef<HTMLElement>(null);
  useLayoutEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !section.current) return; gsap.registerPlugin(ScrollTrigger); const context = gsap.context(() => gsap.from("[data-role]", { opacity: 0, y: 30, duration: 0.65, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: section.current, start: "top 72%", once: true } }), section); return () => context.revert(); }, []);
  return <section ref={section} id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Experience</p><h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Work with impact.</h2><div className="mt-10 grid gap-5 lg:grid-cols-2">{roles.map((role) => <article data-role key={role.title} className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm sm:p-8"><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="text-xl font-semibold text-slate-900">{role.title}</h3><p className="mt-1 font-medium text-blue-700">{role.company}</p></div><time className="text-sm text-slate-500">{role.date}</time></div><p className="mt-6 leading-7 text-slate-600">{role.text}</p><div className="mt-6 flex flex-wrap gap-2">{role.skills.map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{skill}</span>)}</div></article>)}</div></section>;
}
