export default function Header() {
    return (
        <section className="flex flex-col p-4 w-full bg-white text-black">
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#hero" className="text-lg font-medium">Home</a></li>
                    <li><a href="#projects" className="text-lg font-medium">Projects</a></li>
                    <li><a href="#skills" className="text-lg font-medium">Skills</a></li>
                    <li><a href="#experience" className="text-lg font-medium">Experience</a></li>
                </ul>
            </nav>
        </section>
    )
}