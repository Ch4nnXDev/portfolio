"use client";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects =[
        {
            title: "Distributed Chat Application",
            technologies: [{
                name: "NodeJs",
                icon: "icons/node-js-svgrepo-com.svg"
            },
            {
                name: "Socket.io",
                icon: "icons/Socket.io.svg"
                

            },
            {
                name: "React",
                icon: "icons/react-javascript-js-framework-facebook-svgrepo-com.svg"
            },
            {
                name: "MongoDB",
                icon: "icons/mongodb-logo-svgrepo-com.svg"
            },
            {
                name: "Docker",
                icon: "icons/Docker.svg"
            }
        ],
            description: "A real-time chat application that supports multiple users and rooms, built with Node.js, Socket.io, React, MongoDB, Docker, Kafka, and Express. The application allows users to create accounts, join chat rooms, and send messages in real-time. It also features user authentication and message persistence.",
            diagrams: []
        },
         {
            title: "Anuradhapura HIV Centre Website and Minimal Content Management System",
            technologies: [
                {
                    name: "NextJs",
                    icon: "icons/nextjs-svgrepo-com.svg"
                },
                {
                    name: "NodeJs",
                    icon: "icons/node-js-svgrepo-com.svg"
                },
                {
                    name: "Postgres",
                    icon: "icons/postgresql-logo-svgrepo-com.svg"
                },
                {
                    name: "Express",
                    icon: "icons/express-svgrepo-com.svg"
                },
                {
                    name: "Render",
                    icon: "icons/Render Symbol SVG.svg"
                },
                {
                    name: "Vercel",
                    icon: "icons/vercel-svgrepo-com.svg"
                }
            ],
            description: "Website Made for Anuradhapura HIV Centre to provide information about the centre, its services, and contact details. The website also includes a minimal content management system (CMS) that allows the centre staff to update the website content without needing technical knowledge. The CMS is built with Node.js, Express, and PrismaORM, and the website is deployed on Render and Vercel.",
            diagrams: []
        },
         {
            title: "RAG Application with Flan T-5",
            technologies: [
                {
                    name: "Python",
                    icon: "icon/python-svgrepo-com.svg"

                },
                {
                    name: "Langchain",
                    icon: "icons/Langchain.svg"
                },
                {
                    name: "React",
                    icon: "icons/react-javascript-js-framework-facebook-svgrepo-com.svg"
                }
            ],
            description: "A Retrieval-Augmented Generation (RAG) application that uses the Flan T-5 model to generate responses based on retrieved information. The application allows users to input queries, retrieves relevant information from a knowledge base, and generates responses using the Flan T-5 model. The application is built with Python, Socket.io, React, MongoDB, Docker, Kafka, and Express.",
            diagrams: []
        },
         {
            title: "P2P Network from Scratch",
            technologies: [
                {
                    name: "Nodejs",
                    icon: "icons/node-js-svgrepo-com.svg"
                },
                {
                    name: "Socket.io",
                    icon: "icons/Socket.io.svg"
                },
                {
                    name: "React",
                    icon: "icons/react-javascript-js-framework-facebook-svgrepo-com.svg"
                },
                {
                    name: "MongoDB",
                    icon: "icons/mongodb-logo-svgrepo-com.svg"
                },
                {
                    name: "Docker",
                    icon: "icons/Docker.svg"
                },
                {
                    name: "Kafka",
                    icon: "icons/Apache Kafka.svg"
                },
                {
                    name: "Express",
                    icon: "icons/express-svgrepo-com.svg"
                }
            ],

            description: "A real-time chat application that supports multiple users and rooms, built with Node.js, Socket.io, React, MongoDB, Docker, Kafka, and Express. The application allows users to create accounts, join chat rooms, and send messages in real-time. It also features user authentication and message persistence.",
            diagrams: []
        },

    ]
    return (
        <section className="flex flex-col p-4 w-full p-10 items-center" id="projects">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="flex text-black m-6">
                <Carousel className="shadow-lg p-20 h-200 border">
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem key={project.title}>
                                <Card className="w-full mb-10 p-4 shadow-sm h-200">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="mb-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech.name} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">

                                                <Image 

                                                src={tech.icon}
                                                alt=""
                                                width={20}
                                                height={20}
                                                />
                                                
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