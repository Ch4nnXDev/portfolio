export default function Experience() {
    const expeiences = [
        {
            title: "Software Engineer Intern",
            company: "SLT Headquarters",
            duration: "June 16 2025 - May 16 2026",
            
        },
        {
            title: "In-house Web Developer and Digital Marketing Executive",
            company: "Davinci Ceramics",
            duration: "Febraury 2026 - Present"
        }

    ]
    return (
        <section className="flex flex-col p-4 w-full">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <div className="flex flex-col gap-4">
                {expeiences.map((experience, index) => (
                    <div key={index} className="flex flex-col p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-gray-600">{experience.company}</p>
                        <p className="text-gray-500 text-sm">{experience.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}