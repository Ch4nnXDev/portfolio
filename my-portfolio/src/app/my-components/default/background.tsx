import Image from "next/image";
export default function Background() {
    return (
        <section className="fixed inset-0 -z-10">
            <Image src="/background-img/4031277.jpg" fill alt="" priority className="object-cover opacity-40" />
        </section>
    );
}