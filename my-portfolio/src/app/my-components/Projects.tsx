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
  featured_img: string;
  diagrams: { [key: string]: string };
  project_scope: string;
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
      diagrams: {"System Architecture": "/project-diagrams/chatapp-system-architecture.png" },
      project_scope: "The project involved developing a distributed chat application that allows users to communicate in real-time. The application supports multiple chat rooms, user authentication, and persistent storage of messages. The primary goal was to create a seamless and interactive chat experience for users, enabling them to connect and engage in conversations effortlessly."

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
      diagrams: {
        "System Architecture": "/project-diagrams/sexual-health-center-system-architecture.png",
      },
      project_scope: "The project involved developing a comprehensive Content Management System (CMS) for the Anuradhapura HIV Centre. The primary goal was to create a user-friendly platform that allows the clinic staff to manage and update website content efficiently. The CMS was designed to handle various types of content, including text, images, and documents, ensuring that the website remains current and informative for visitors."
      },
      

    {
      title: "RAG Application with Flan-T5",
      technologies: [
        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
        { name: "LangChain", icon: "/icons/Langchain.svg" },
        { name: "React", icon: "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg" },
      ],
      featured_img: "/project-images/rag-app.jpg",
      description:
        "Retrieval-Augmented Generation system using LangChain and Flan-T5.",
      diagrams: {"System Architecture": "/project-diagrams/rag-app-system-architecture.png" },
      project_scope: "The project involved developing a Retrieval-Augmented Generation (RAG) application that leverages the capabilities of LangChain and the Flan-T5 model. The primary objective was to create a system that can retrieve relevant information from a knowledge base and generate contextually accurate responses based on user queries. The application was designed to enhance information retrieval and provide users with precise and informative answers, making it a valuable tool for various applications, including customer support, research, and content generation."
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
      featured_img: "/project-images/p2p-network.png",
      description:
        "Built a distributed peer-to-peer networking system.",
      diagrams: {
        "System Architecture": "/project-diagrams/p2p-network-system-architecture.png",
      },
      project_scope: "The project involved developing a distributed peer-to-peer networking system using Node.js and Socket.io. The primary objective was to create a robust and scalable network infrastructure that enables efficient communication between peers. The system was designed to handle various types of data transmission and ensure reliable connectivity across different network environments."
    },
  ];

  return (
    <section id="projects" className="flex flex-col items-center w-full px-6 mt-40">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      

 
      <div className="relative w-full min-h-[400vh] flex flex-col items-center">
        {projects.map((proj, i) => (
          
          <div key={proj.title} className="top-40 flex justify-center w-full p-30" style={{ zIndex: projects.length - i }} >

            <div className="project-card w-[1000px] h-[600px] border border-blue-600 rounded-xl shadow-lg flex flex-row justify-between" onClick={() => setSelectedProject(proj)} >
              
              <div className="flex flex-row width-[50%] h-full p-5">
                
                  <Image width={800} height={300} src={proj.featured_img} alt={proj.title} className="rounded-lg h-full w-full" />
              </div>
                
              <div className="flex flex-col justify-between">
                <p className="text-sm mt-4">{proj.description}</p>
                <div className="flex gap-2 flex-wrap mb-10 ">
                  {proj.technologies.map((tech) => (
                    <Image
                      key={tech.name}
                      src={tech.icon}
                      alt={tech.name}
                      width={50}
                      height={50}
                      
                    />
                  ))}

                
              </div>

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
                    <div>
                      <Image src={selectedProject.featured_img} alt={selectedProject.title} width={400} height={300} />
                    </div>
                    <Swiper>

                    </Swiper>

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