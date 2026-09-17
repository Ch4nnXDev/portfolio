import Image from "next/image";
export default function Background() {
    return (
        <section aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-slate-50">
            <Image src="/background-img/4031277.jpg" fill alt="" priority className="object-cover opacity-15" />
            <div className="absolute inset-0 bg-linear-to-b from-white/65 via-slate-50/85 to-white" />
        </section>
    );
}
