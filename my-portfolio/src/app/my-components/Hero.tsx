import Image from "next/image";
export default function Hero() {
    return (
        <section className="flex flex-col p-4 w-full text-black items-center justify-center gap-20" id="home">
            <div className="flex flex-col items-center">
                <Image src="/profile.jpeg" alt="Profile Picture" width={300} height={400} className="rounded-full mb-4 self-center" />
            </div>
            
            <div className="flex flex-col w-full items-center gap-5">
                
                <h1 className="text-5xl ">Channa Karawita</h1>
                <p className="text-xl">Software Engineer | Growth Engineer | Full Stack Developer | Ai & ML Engineer</p>
            </div>
            <div className="flex flex-row p-6">
                <div className="">
                    <button></button>
                </div>
                <div className="">
                    <button></button>
                </div>
                <div className="">
                    <button></button>
                </div>
            

            </div>

            
      
        </section>
    );
}