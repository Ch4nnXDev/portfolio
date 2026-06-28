"use client";
import {useEffect, useRef} from 'react';
import gsap from "gsap";

export default function Experience() {

    const boxRef = useRef(null);


    useEffect(() => {
        
        gsap.to(boxRef.current, {
            x:500,
            duration: 50,
            rotation: 360

        })

    }, []);
    return (
        <div className="flex flex row justify-center items-center p-20">
            <div ref={boxRef} className="p-40 mt-10 bg-gray-400 rounded-lg w-full"></div>
            
            
        </div>
    );
}