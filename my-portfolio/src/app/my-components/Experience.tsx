export default function Experience() {
    const expeiences = [
        {
            title: "Software Engineer Intern",
            company: "SLT Headquarters",
            duration: "June 16 2025 - May 16 2026",
            projects: [
                {
                    project_name: "FCMS - Fraud Call Management System"
                }
            ],
            description: ""
            
        },
        {
            title: "In-house Web Developer and Digital Marketing Executive",
            company: "Davinci Ceramics",
            duration: "Febraury 2026 - Present",
            projects: [],
            description: ""
        }

    ]
    return (
        <section className="flex flex-col mt-20 w-full items-center" id="experience">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <div className="flex flex-col gap-20 ">
                {expeiences.map((experience, index) => (
                    <div key={index} className="flex flex-row p-4 border-sm  gap-20 rounded-lg p-30">
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-gray-600">{experience.company}</p>
                        <p className="text-gray-500 text-sm">{experience.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}