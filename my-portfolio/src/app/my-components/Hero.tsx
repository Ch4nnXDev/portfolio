import Image from "next/image";
export default function Hero() {
    return (
        <section className="flex flex-col p-40 mt-60 w-full text-black items-center justify-center gap-20 " id="home">
            
            
            <div className="flex flex-col w-full items-center gap-5">
                
                <h1 className="text-9xl ">Channa Karawita</h1>
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