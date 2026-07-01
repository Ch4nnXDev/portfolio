"use client";
import {useEffect, useRef} from 'react';
import gsap from "gsap";
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
            description: "Worked on developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality software solutions.",
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
            <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} className="w-full">
            {experience.map((exp) => (
                <SwiperSlide key={exp.position}>
                    <div className="grid grid-cols-4 shadow-md items-center p-20 gap-2 rounded-xl shadow-lg rounded-lg" >
                
                        <div ref={boxRef} className="p-20 border rounded-lg col-span-3 shadow-lg">{exp.position}</div>
                        <div className="p-17 border rounded-lg col-span-1 shadow-lg">{exp.duration}</div>
                        <div className="h-30 p-10 border rounded-lg col-span-2 shadow-lg">{exp.location}</div>
                       
                        <div className="h-30 p-10 border rounded-lg col-span-2 shadow-lg">{exp.company}</div>

                        <div className="h-100 border rounded-lg col-span-2 shadow-lg text-center">{exp.description}</div>
                        <div className="h-100 border rounded-lg col-span-2 shadow-lg text-center">SKILLS</div>
                         
                
                
                        
                        
                
        

                    </div>
            
                </SwiperSlide>
            

                ))}
            </Swiper>
            
            

        </section>
        
    );
}