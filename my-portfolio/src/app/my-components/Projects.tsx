"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Distributed Chat Application",
      technologies: [
        {
          name: "NodeJs",
          icon: "/icons/node-js-svgrepo-com.svg",
        },
        {
          name: "Socket.io",
          icon: "/icons/Socket.io.svg",
        },
        {
          name: "React",
          icon: "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg",
        },
        {
          name: "MongoDB",
          icon: "/icons/mongodb-logo-svgrepo-com.svg",
        },
        {
          name: "Docker",
          icon: "/icons/Docker.svg",
        },
      ],
      description:
        "A real-time chat application that supports multiple users and rooms, built with Node.js, Socket.io, React, MongoDB, Docker, Kafka, and Express. Users can create accounts, join rooms, and exchange messages in real-time with persistent message storage.",
    },

    {
      title:
        "Anuradhapura HIV Centre Website and Minimal Content Management System",
      technologies: [
        {
          name: "NextJs",
          icon: "/icons/nextjs-svgrepo-com.svg",
        },
        {
          name: "NodeJs",
          icon: "/icons/node-js-svgrepo-com.svg",
        },
        {
          name: "Postgres",
          icon: "/icons/postgresql-logo-svgrepo-com.svg",
        },
        {
          name: "Express",
          icon: "/icons/express-svgrepo-com.svg",
        },
        {
          name: "Render",
          icon: "/icons/Render Symbol SVG.svg",
        },
        {
          name: "Vercel",
          icon: "/icons/vercel-svgrepo-com.svg",
        },
      ],
      description:
        "Developed a website and lightweight CMS for the Anuradhapura HIV Centre. Staff can manage website content without technical expertise. Built using Node.js, Express, PostgreSQL, Prisma ORM, Next.js, Render, and Vercel.",
    },

    {
      title: "RAG Application with Flan T-5",
      technologies: [
        {
          name: "Python",
          icon: "/icons/python-svgrepo-com.svg",
        },
        {
          name: "LangChain",
          icon: "/icons/Langchain.svg",
        },
        {
          name: "React",
          icon: "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg",
        },
      ],
      description:
        "A Retrieval-Augmented Generation application using Flan-T5 and LangChain. The system retrieves relevant information from a knowledge base and generates contextual responses for user queries.",
    },

    {
      title: "P2P Network from Scratch",
      technologies: [
        {
          name: "NodeJs",
          icon: "/icons/node-js-svgrepo-com.svg",
        },
        {
          name: "Socket.io",
          icon: "/icons/Socket.io.svg",
        },
        {
          name: "React",
          icon: "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg",
        },
        {
          name: "MongoDB",
          icon: "/icons/mongodb-logo-svgrepo-com.svg",
        },
        {
          name: "Docker",
          icon: "/icons/Docker.svg",
        },
        {
          name: "Kafka",
          icon: "/icons/Apache Kafka.svg",
        },
        {
          name: "Express",
          icon: "/icons/express-svgrepo-com.svg",
        },
      ],
      description:
        "Built a peer-to-peer networking application from scratch to explore distributed systems concepts, messaging, node communication, and scalability patterns.",
    },
  ];

  return (
    <section id="projects" className="flex flex-col items-center w-full px-6 py-16">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      

      
    </section>
  );
}