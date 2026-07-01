"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const box = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(box.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: box.current,
        start: "top 80%",
      },

    })

  }, []);

  const projects = [
    {
      title: "Distributed Chat Application",
      technologies: [
        { name: "NodeJs", icon: "/icons/node-js-svgrepo-com.svg" },
        { name: "Socket.io", icon: "/icons/Socket.io.svg" },
        { name: "React", icon: "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg" },
        { name: "MongoDB", icon: "/icons/mongodb-logo-svgrepo-com.svg" },
        { name: "Docker", icon: "/icons/Docker.svg" },
      ],
      description:
        "A real-time chat application with rooms, authentication, and persistent storage.",
    },

    {
      title: "Anuradhapura HIV Centre CMS",
      technologies: [
        { name: "NextJs", icon: "/icons/nextjs-svgrepo-com.svg" },
        { name: "NodeJs", icon: "/icons/node-js-svgrepo-com.svg" },
        { name: "Postgres", icon: "/icons/postgresql-logo-svgrepo-com.svg" },
        { name: "Express", icon: "/icons/express-svgrepo-com.svg" },
        { name: "Render", icon: "/icons/Render Symbol SVG.svg" },
        { name: "Vercel", icon: "/icons/vercel-svgrepo-com.svg" },
      ],
      description:
        "CMS system for managing clinic website content easily.",
    },

    {
      title: "RAG Application with Flan-T5",
      technologies: [
        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
        { name: "LangChain", icon: "/icons/Langchain.svg" },
        { name: "React", icon: "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg" },
      ],
      description:
        "Retrieval-Augmented Generation system using LangChain and Flan-T5.",
    },

    {
      title: "P2P Network from Scratch",
      technologies: [
        { name: "NodeJs", icon: "/icons/node-js-svgrepo-com.svg" },
        { name: "Socket.io", icon: "/icons/Socket.io.svg" },
        { name: "React", icon: "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg" },
        { name: "MongoDB", icon: "/icons/mongodb-logo-svgrepo-com.svg" },
        { name: "Docker", icon: "/icons/Docker.svg" },
        { name: "Kafka", icon: "/icons/Apache Kafka.svg" },
        { name: "Express", icon: "/icons/express-svgrepo-com.svg" },
      ],
      description:
        "Built a distributed peer-to-peer networking system.",
    },
  ];

  return (
    <section id="projects" className="flex flex-col items-center w-full px-6 mt-40">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

 
      <div className="relative w-full min-h-[400vh] flex flex-col items-center">
        {projects.map((proj, i) => (
          <div key={proj.title} className="sticky top-40 flex justify-center w-full p-30" style={{ zIndex: projects.length - i }} ref={box}>
            <div className="w-[650px] h-[450px] bg-red-300 border border-blue-600 rounded-xl shadow-lg p-10 flex flex-col justify-between">
              
              <div>
                <h1 className="text-xl font-bold">{proj.title}</h1>
                <p className="text-sm mt-4">{proj.description}</p>
              </div>

              <div className="flex gap-4 flex-wrap mt-6">
                {proj.technologies.map((tech) => (
                  <Image
                    key={tech.name}
                    src={tech.icon}
                    alt={tech.name}
                    width={80}
                    height={80}
                  />
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}