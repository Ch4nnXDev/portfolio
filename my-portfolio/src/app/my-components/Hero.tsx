'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const title = useRef(null);
    const subtitle = useRef(null);
    useEffect(()=>{

        const tl = gsap.timeline();


        tl.from(title.current,{
            y:100,
            opacity:0,
            duration:1
        })
        .from(subtitle.current,{
            y:50,
            opacity:0,
            duration:1
        })


    },[])

    return (
        <section  className="flex flex-col p-40 mt-60 mb-60 w-full text-black items-center justify-center gap-20" id="home">
            
            
            <div className="flex flex-col w-full gap-5">
                
                <h1 className="text-8xl " ref={title}>Channa Karawita</h1>
                <p className="text-xl" ref={subtitle}>Software Engineer | Growth Engineer | Full Stack Developer | Ai & ML Engineer</p>
            </div>
            
      
        </section>
    );
}