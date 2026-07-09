
export default function Header() {
  
  return (
    <header className="fixed top-5 left-20 translate-x-1/2 z-100">
      <nav className="flex items-center gap-10 bg-transparent backdrop-blur-xl border border-white/20 shadow-xl rounded-full px-30 py-8">
        <ul className="flex items-center gap-10">
          <li><a href="#home" className="text-xl font-semibold hover:text-blue-800">Home</a></li>
          <li><a href="#projects" className="text-xl font-semibold hover:text-blue-800">Projects</a></li>
          <li><a href="#skills" className="text-xl font-semibold hover:text-blue-800">Skills</a></li>
          <li><a href="#experience" className="text-xl font-semibold hover:text-blue-800">Experience</a></li>
        </ul>
      </nav>

      <div className="lg:hidden absolute top-5">
        <nav>
          <ul className="flex flex-col gap-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </nav>
      </div>



    </header>

    


    
  );
}