export default function Header() {
    return (
        <header className="mt-20 border">
            <nav className="flex items-center gap-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-full  px-8 py-4">
                <ul className="flex space-x-4  justify-between gap-10 mt-5 items-center justify-center">
                    <li><a href="#hero" className="text-lg font-medium">Home</a></li>
                    <li><a href="#projects" className="text-lg font-medium">Projects</a></li>
                    <li><a href="#skills" className="text-lg font-medium">Skills</a></li>
                    <li><a href="#experience" className="text-lg font-medium">Experience</a></li>
                </ul>
            </nav>
        </header>
    )
}