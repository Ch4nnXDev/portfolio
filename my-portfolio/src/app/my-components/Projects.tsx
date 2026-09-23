
"use client";

import { ArrowSquareOut, GithubLogo, X } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github?: string;
  website?: string;
  details: string;
};

const personalProjects: Project[] = [
  {
    title: "Distributed Chat Platform",
    image: "/project-images/chatapp.png",
    description:
      "A real-time chat system designed around a microservices architecture.",
    technologies: ["Node.js", "Socket.io", "React", "MongoDB", "Docker", "Kafka", "micro-services", "expressjs", "redis"],
    github:
      "https://github.com/Ch4nnXDev/Distributed-Chat-Application",
    details:
      "A production-oriented real-time chat platform designed for multi-room conversations, authentication, persistence, and service-to-service communication.",
  },
  {
    title: "Graph-Based Retrieval-Augmented Generation (Graph RAG)",
    image: "/project-images/rag-app.jpg",
    description:
      "A Graph RAG application that combines knowledge-graph retrieval with language-model generation to produce grounded, context-aware answers.",
    technologies: ["Python", "LangChain", "React", "Hugging-Face", "ChromaDB", "Flask", "Neo4j", "Flan-T5"],
    github: "https://github.com/Ch4nnXDev/graph-rag-app",
    details:
      "Combines vector search and graph-based retrieval to identify relevant information before passing enriched context to an LLM for grounded response generation",
  },
  {
    title: "Production HTTP Server With GO (Infra)",
    image: "/project-images/http.png",
    description: 
    "Production-ready HTTP server built in Go using the standard net/http package.",
    technologies: ["go package net", "go package log"],
    github: "https://github.com/Ch4nnXDev/Production-HTTP-Server",
    details: "Custom routing, middleware, request IDs, request logging, panic recovery, server timeouts, and graceful shutdown for reliable operation."
  },
  {
    title: "Peer-to-Peer Networking System",
    image: "/project-images/p2p.png",
    description: "A lightweight peer-to-peer networking system built with Node.js TCP sockets.",
    technologies: ["NodeJs", "Event-Driven Architecture", "Javascript", "TCP"],
    github: "https://github.com/Ch4nnXDev/Production-Peer2Peer-Network",
    details: "Implements peer discovery, TCP connections, handshaking, message framing, peer management, JSON-based protocols, and event-driven message routing."
  },
  {
    title: "Student and Teacher Pathway Management System",
    image: "/project-images/student-teacher.png",
    description: "a student and teacher management system made using laravel and nextjs",
    technologies: ["Laravel", "NextJs", "Dynamic-Routes", "Laravel Worker"],
    github: "https://github.com/Ch4nnXDev/Student-Teacher-Pathway-Tool",
    details: "seperated role based access and student reports are assgined to a worker through a queue"
  }

];

const productionProjects: Project[] = [
  {
    title: "Sexual Health Center Anuradhapura",
    image: "/project-images/health.png",
    description:
      "Anuradhapura Government Hospital Sexual Helath Clinic Website Consists a CMS For Managing the Content Of the Website",
    technologies: ["NextJs", "Postgresql", "NodeJS", "REST APIs"],
    github: "https://github.com/Ch4nnXDev/gov-clinic-webiste",
    website: "https://sexualhealthcentreanuradhapura.lk",
    details:
      "Independently Carried Out the Development Of the System.",
  },

  {
    title: "Ceramics Product Catalogue & PWA + Agent",
    image: "/project-images/davinci.png",
    description:
      "A progressive web application built to help sales teams browse and also keep track of the stock.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Google Sheets API", "PWA", "Vercel Agent SDK", "Groq"],
    details:
      "Designed and developed a product catalogue PWA for a ceramics business, including product discovery, responsive interfaces, authentication, product data integration, and mobile-focused workflows for sales teams.",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const section = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !section.current
    )
      return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from("[data-project]", {
        opacity: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 72%",
          once: true,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  const renderProjects = (projects: Project[]) => (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          data-project
          key={project.title}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <button
            onClick={() => setSelected(project)}
            className="block w-full text-left"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </button>

          {(project.github || project.website) && (
            <div className="flex gap-3 px-6 pb-6">
              {project.github && (
                <a
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo size={18} />
                  Code
                </a>
              )}

              {project.website && (
                <a
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowSquareOut size={18} />
                  Visit
                </a>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  );

  return (
    <section
      ref={section}
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14"
    >
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Selected work
          </p>

          <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">
            Projects that solve problems.
          </h2>
        </div>

        <p className="max-w-sm leading-7 text-slate-600">
          A selection of independent projects and production systems I have
          contributed to throughout my engineering journey.
        </p>
      </div>

      {/* Personal Projects */}
      <div className="mt-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Personal Projects
          </p>

          <h3 className="mt-2 font-serif text-3xl text-slate-950">
            Built from the ground up.
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Independent projects where I explore distributed systems,
            full-stack engineering, AI, and backend architecture.
          </p>
        </div>

        {renderProjects(personalProjects)}
      </div>

      {/* Production Work */}
      <div className="mt-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Production Work
          </p>

          <h3 className="mt-2 font-serif text-3xl text-slate-950">
            Engineering in real-world systems.
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Production systems and applications I contributed to while working
            with engineering teams and businesses.
          </p>
        </div>

        {renderProjects(productionProjects)}
      </div>

      {/* Project Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-end bg-slate-950/45 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div className="w-full rounded-t-3xl bg-white p-6 shadow-2xl sm:max-w-2xl sm:rounded-3xl sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Case study
                </p>

                <h3 className="mt-2 font-serif text-3xl text-slate-950 sm:text-4xl">
                  {selected.title}
                </h3>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="rounded-full p-2 text-slate-600 hover:bg-slate-100"
                aria-label="Close project details"
              >
                <X size={22} />
              </button>
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              {selected.details}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {selected.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(selected.github || selected.website) && (
              <div className="mt-8 flex gap-4">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    <GithubLogo size={18} />
                    View code
                  </a>
                )}

                {selected.website && (
                  <a
                    href={selected.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700"
                  >
                    <ArrowSquareOut size={18} />
                    Live site
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

