"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";
import Image from "next/image";
import { Swiper } from "swiper/react";
type proj = {
  title: string;
  technologies: { name: string; icon: string }[];
  description: string;
};

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState<proj | null>(null);

 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {

      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",     
          end: "top 10%",       
          scrub: 1.2,
        },
      })

      .fromTo(card,
        {
          opacity: 0,
          y: 150,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
        }
      )

      
      .to(card, {
        opacity: 0,
        y: -150,   
        scale: 0.95,
        ease: "none",
      });
    });
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
      featured_img: "/project-images/chatapp.png",
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
      featured_img: "/project-images/sexual-health-center.png",
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
      featured_img: "",
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
          
          <div key={proj.title} className=" top-40 flex justify-center w-full p-30" style={{ zIndex: projects.length - i }} >

            <div className="project-card w-[1000px] h-[600px] border border-blue-600 rounded-xl shadow-lg p-10 flex flex-col justify-between" onClick={() => setSelectedProject(proj)} >
              
              <div>
                <h1 className="text-xl font-bold">{proj.title}</h1>
                <p className="text-sm mt-4">{proj.description}</p>
              </div>

              <div className="flex gap-20 flex-wrap mt-6">
                {proj.technologies.map((tech) => (
                  <Image
                    key={tech.name}
                    src={tech.icon}
                    alt={tech.name}
                    width={70}
                    height={70}
                  />
                ))}
                
              </div>
              

            </div>
          </div>
        ))}
        {selectedProject && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center w-[100vw] h-[100vh] justify-center">
                  
                  <div className="bg-white w-full h-full rounded-xl p-10 relative">
                    
                   
                    

                    {/* content */}
                    <h1 className="text-3xl font-bold">
                      {selectedProject.title}
                    </h1>
                    <Swiper></Swiper>

                    <p className="mt-4 text-gray-600">
                      {selectedProject.description}
                    </p>
                    <button
                      className="absolute bottom-10 right-10 text-white text-xl p-5 bg-black rounded-lg shadow-md"
                      onClick={() => setSelectedProject(null)}
                    >
                      ✕
                    </button>

                  </div>
                </div>
              )}
      </div>
      
    </section>
  );
}