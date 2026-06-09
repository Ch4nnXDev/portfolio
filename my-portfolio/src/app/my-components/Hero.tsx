import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";
export default function Hero() {
    return (
        <section className="flex flex-col p-4 w-full h-screen bg-black text-white">
            <Vortex  className="flex flex-col w-full items-center justify-center h-full">
                <div className="flex flex-col w-full">
                    <Image src="/profile.jpeg" alt="Profile Picture" width={150} height={150} className="rounded-full mb-4 self-center" />
                    <h1 className="text-5xl w-full">Channa Karawita</h1>
                    <p className="text-xl w-full">Software Engineer | Full Stack Developer</p>
                </div>

            </Vortex>
      
        </section>
    );
}