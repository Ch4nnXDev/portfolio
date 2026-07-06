"use client";
import {useEffect, useRef} from 'react';

import { Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

export default function Experience() {

    const experience = [
        {
            position: "Software Engineer Intern",
            company: "Sri Lanka Telecom",
            location: "SLT Head Office",
            duration: "2025 June 16 - 2026 May 16",
            description: "I was assigned to IT Solutions Developement Section of Sri Lanka Telecom HQ, During my Internship I was exposed to how big companies Manage their work and how different teacm and sections work together to achieve a common goal, at the intial stage of my internship i was assigned a project which is a Fraud Call Management System, built using python as the backend and Bootstrap was used for the frontend i collabated by building CRUD Opeartions and UI Models, After the inital stage i was offered the opprtunity to icdependently built a User Interface for the RIBE System, it was a which is a Telecom Operations Management System, I built it using AngularJS by Making Reusable Components. I was Also Assigned to Make RBAC (Role Based Access Control) for a Custom CRM System, which used PHP Framework CodeIgniter.",
            skills: {
                "NodeJs": "/icons/node-js-svgrepo-com.svg",
                "React": "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg",
                "NextJs": "/icons/nextjs-svgrepo-com.svg",
                "Postgres": "/icons/postgresql-logo-svgrepo-com.svg",
                "Express": "/icons/express-svgrepo-com.svg",
                "Render": "/icons/Render Symbol SVG.svg",
                "Vercel": "/icons/vercel-svgrepo-com.svg"
            }
        },
        {
            position: "Web Developer And Digital Marketing Executive",
            company: "Da Vinci Ceramics",
            location: "Nugegoda, Sri Lanka",
            duration: "2026 Feb 1 - 2026 Present",
            description: "Responsible for designing and developing the company's website, implementing digital marketing strategies, and optimizing online presence to drive business growth.",
            skills: {
                "WordPress": "/icons/wordpress-svgrepo-com.svg",
                "WooCommerce": "/icons/woocommerce-svgrepo-com.svg",
                "Elementor": "/icons/elementor-svgrepo-com.svg",
                "Google Ads": "/icons/google-ads-svgrepo-com.svg",
                "Meta Ads": "/icons/meta-ads-svgrepo-com.svg",
                "Semrush": "/icons/semrush-svgrepo-com.svg",
                "Googe Analytics": "/icons/google-analytics-svgrepo-com.svg"

            }
        }

        
    ]

    const boxRef = useRef(null);


    useEffect(() => {
        
        
    }, []);
    return (
        <section className=" w-full">
            <h2 className="p-20 text-3xl">Experience</h2>
            <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} className="w-full ">
            {experience.map((exp) => (
                <SwiperSlide key={exp.position}>
                    <div className="grid grid-cols-4 shadow-md items-center p-2 m-20 gap-2 rounded-xl rounded-lg" >
                
                        <div ref={boxRef} className="h-30 p-10 rounded-lg col-span-3 shadow-lg bg-white text-center text-lg">{exp.position}</div>
                        <div className="h-30 p-10 rounded-lg col-span-1 shadow-lg bg-white text-center text-lg">{exp.duration}</div>
                        <div className="h-30 p-10 rounded-lg col-span-2 bg-white shadow-lg text-center text-lg">{exp.location}</div>
                       
                        <div className="h-30 p-10  bg-white rounded-lg col-span-2 shadow-lg text-center text-lg">{exp.company}</div>

                        <div className="h-100 p-10 bg-white rounded-lg col-span-2 shadow-lg text-center text-md">{exp.description}</div>
                        
                        <div className="h-100 p-10 rounded-lg bg-white col-span-2 shadow-lg text-center text-lg">klknkl</div>
                         
                
                
                        
                        
                
        

                    </div>
            
                </SwiperSlide>
            

                ))}
            </Swiper>
            
            

        </section>
        
    );
}