export default function Experience() {
    const experiences = [
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
            <div className="grid grid-col-3 gap-4">
                <div className="p-40 bg-red-400"></div>
                <div className="p-40 bg-red-400"></div>
                <div className="p-40 bg-red-400"></div>
                
                
        
            </div>
        </section>
    );
}