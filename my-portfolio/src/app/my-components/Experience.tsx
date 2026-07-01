"use client";
import {useEffect, useRef} from 'react';
import gsap from "gsap";

export default function Experience() {

    const experience = [
        {
            position: "Software Engineer Intern",
            company: "Sri Lanka Telecom",
            location: "SLT Head Office",
            duration: "2025 June 16 - 2026 May 16",
            skills: ""
        },
        
        
    ]

    const boxRef = useRef(null);


    useEffect(() => {
        
        
    }, []);
    return (
        <section className="p-10 h-screen items-center justify-center">
            <h2 className="p-20 text-3xl">Experience</h2>
            {experience.map((exp) => (
                <div className="grid grid-cols-4 shadow-md items-center gap-1 m-2 rounded-xl shadow-lg rounded-lg" key={exp.position}>
                
            
                    <div ref={boxRef} className="p-20 border rounded-lg col-span-2">{exp.position}</div>
                    <div className="p-20 border rounded-lg col-span-2">{exp.duration}</div>

            
            
                    <div className="p-60 border rounded-lg col-span-2">{exp.location}</div>
                    <div className=" border rounded-lg p-60 row-start-2 col-span-2">{exp.company}</div>
            
        

            
            
                </div>

                ))}
            
            

        </section>
        
    );
}