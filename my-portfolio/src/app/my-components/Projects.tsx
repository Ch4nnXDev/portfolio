"use client";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects =[
        {
            title: "Distributed Chat Application",
            technologies: ["NodeJs", "Socket.io", "React", "MongoDB", "Docker", "Kafka", "Express"],
            description: "A real-time chat application that supports multiple users and rooms, built with Node.js, Socket.io, React, MongoDB, Docker, Kafka, and Express. The application allows users to create accounts, join chat rooms, and send messages in real-time. It also features user authentication and message persistence.",
            diagrams: []
        },
         {
            title: "Anuradhapura HIV Centre Website and Minimal Content Management System",
            technologies: ["NextJs", "NodeJS", "PrismaORM", "Postgres", "Express", "Render", "Vercel"],
            description: "Website Made for Anuradhapura HIV Centre to provide information about the centre, its services, and contact details. The website also includes a minimal content management system (CMS) that allows the centre staff to update the website content without needing technical knowledge. The CMS is built with Node.js, Express, and PrismaORM, and the website is deployed on Render and Vercel.",
            diagrams: []
        },
         {
            title: "RAG Application with Flan T-5",
            technologies: ["Python", "Langchain", "Flan T-5", "React"],
            description: "A Retrieval-Augmented Generation (RAG) application that uses the Flan T-5 model to generate responses based on retrieved information. The application allows users to input queries, retrieves relevant information from a knowledge base, and generates responses using the Flan T-5 model. The application is built with Python, Socket.io, React, MongoDB, Docker, Kafka, and Express.",
            diagrams: []
        },
         {
            title: "P2P Network from Scratch",
            technologies: ["NodeJs", "Socket.io", "React", "MongoDB", "Docker", "Kafka", "Express"],
            description: "A real-time chat application that supports multiple users and rooms, built with Node.js, Socket.io, React, MongoDB, Docker, Kafka, and Express. The application allows users to create accounts, join chat rooms, and send messages in real-time. It also features user authentication and message persistence.",
            diagrams: []
        },

    ]
    return (
        <section className="flex flex-col p-4 w-full p-10">
            <h2 className="text-3xl font-bold mb-4 justify-center">Projects</h2>
            <div className="flex text-black m-6 p-4">
                <Carousel>
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem key={project.title}>
                                <Card className="w-full h-full m-10 p-4 bg-white rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="mb-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}

                        
                    </CarouselContent>
                    <CarouselNext></CarouselNext>
                    <CarouselPrevious></CarouselPrevious>
                </Carousel>
            </div>

        </section>
    );
}