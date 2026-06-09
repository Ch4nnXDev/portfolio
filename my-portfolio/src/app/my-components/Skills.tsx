export default function Skills() {
    const skills = [
        {
            category: "Programming Languages",
            items: ["JavaScript", "TypeScript", "Python", "Java"]
        },
        {
            category: "Frameworks & Libraries",
            items: ["React", "Next.js", "Node.js", "Express"]
        },
        {
            category: "Databases",
            items: ["MongoDB", "PostgreSQL", "MySQL"]
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "Docker", "AWS", "Vercel"]
        },
        {
            category: "AI & Machine Learning",
            items: ["TensorFlow", "PyTorch", "Langchain", "Flan T-5"]
        }
     
    ]
    return (
        <section className="flex flex-col p-4 w-full bg-red-400">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="flex flex-col gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span key={item} className="text-gray-800 px-2 py-1 rounded-full text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}