export default function Header() {
    return (
        <header>
            <nav className="flex flex-row items-center bg-white/5 backdrop-blur-sm z-10">
                <ul className="flex space-x-4  justify-between gap-10">
                    <li><a href="#hero" className="text-lg font-medium">Home</a></li>
                    <li><a href="#projects" className="text-lg font-medium">Projects</a></li>
                    <li><a href="#skills" className="text-lg font-medium">Skills</a></li>
                    <li><a href="#experience" className="text-lg font-medium">Experience</a></li>
                </ul>
            </nav>
        </header>
    )
}