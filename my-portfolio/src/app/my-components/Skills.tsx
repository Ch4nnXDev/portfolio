import Image from "next/image";

export default function Skills() {
    const skills = [
        {
            category: "Programming Languages",
            items: [
                {
                name: "JavaScript",
                icon: "icons/javascript-svgrepo-com.svg",
                proficiency: "Advanced"
            },
            {
                name: "TypeScript",
                icon: "icons/typescript-svgrepo-com.svg",
                proficiency: "Advanced"
            },
            {
                name: "Python",
                icon: "icons/python-svgrepo-com.svg",
                proficiency: "Advanced"
            },
            {
                name: "Java",
                icon: "icons/java-ar21.svg",
                proficiency: "Advanced"

            },
            {
                name: "PHP",
                icon: "icons/PHP.svg",
                proficiency: "intermediate"
            }
        ]
        },
        {
            category: "Frameworks & Libraries",
            items: [
                {
                name: "React",
                icon: "icons/react-javascript-js-framework-facebook-svgrepo-com.svg",
                proficiency: "Intermediate"
                
            },
            {
                name: "NextJs",
                icon: "icons/nextjs-svgrepo-com.svg",
                proficiency: "Intermediate"
            },
            {
                name: "NodeJs",
                icon: "icons/node-js-svgrepo-com.svg",
                proficiency: "Intermediate"
            },
            {
                name: "ExpressJs",
                icon: "icons/express-svgrepo-com.svg",
                proficiency: "Intermediate"
            },
            {
                name: "Springboot",
                icon: "icons/spring-boot-icon.svg",
                proficiency: "Intermediate"
            },
            {
                name: "Angular",
                icon: "icons/Angular.svg",
                proficiency: "Intermediate"
            },
            {
                name: "FastAPI",
                icon: "icons/FastAPI.svg",
                proficiency: "Intermediate"
            }
        ]
            
        },
        {
            category: "Databases",
            items: [
                {
                name: "MongoDB",
                icon: "icons/mongodb-logo-svgrepo-com.svg",
                proficiency: "Intermediate"
            },
            {
                name: "MySQL",
                icon: "icons/nextjs-svgrepo-com.svg",
                proficiency: "Intermediate"
            },
            {
                name: "PostgreSQL",
                icon: "icons/postgresql-logo-svgrepo-com.svg",
                proficiency: "Intermediate"
            },
        ]
        },
        {
            category: "Tools & Platforms",
            items: [
                {
                name: "Git",
                icon: "icons/github-142-svgrepo-com.svg",
                
            },
            {
                name: "vscode",
                icon: "icons/Visual Studio Code (VS Code).svg",
                
            },
            {
                name: "intelij",
                icon: "icons/IntelliJ IDEA.svg",
                
            },
            {
                name: "postman",
                icon: "icons/Postman.svg",
                
            }
       
        ]
        },
        {
            category: "AI & Machine Learning",
            items: [
                {
                name: "TensorFlow",
                icon: "icons/TensorFlow.svg",
                proficiency: "Intermediate"
            },
            {
                name: "PyTorch",
                icon: "icons/PyTorch.svg",
                proficiency: "Intermediate"
            },
            {
                name: "Langchain",
                icon: "icons/Langchain.svg",
                proficiency: "Intermediate"
            },
            {
                name: "HuggingFace",
                icon: "icons/express-svgrepo-com.svg",
                proficiency: "Intermediate"
            },
            {
                name: "scikit-learn.svg",
                icon: "icons/scikit-learn.svg",
                proficiency: "Intermediate"
            },
            {
                name: "Numpy",
                icon: "icons/PyTorch.svg",
                proficiency: "Intermediate"
            },
            {
                name: "Pandas",
                icon: "icons/Pandas.svg",
                proficiency: "Intermediate"
            },
            {
                name: "HuggingFace",
                icon: "icons/huggingface.svg",
                proficiency: "Intermediate"
            }
        ]
        },
        {
            category: "Cloud & Infrastructure",
            items: [
                {
                    name: "AWS",
                    icon: "icons/aws-svgrepo-com.svg",
                    proficiency: "Intermediate"
                },
                {
                    name: "Azure",
                    icon: "icons/azure-svgrepo-com.svg",
                    proficiency: "Intermediate"
                },
                {
                    name: "Vercel",
                    icon: "icons/vercel-svgrepo-com.svg",
                    proficiency: "Intermediate"
                },
                {
                    name: "Apache Kafka",
                    icon: "icons/Apache Kafka.svg",
                    proficiency: "Intermediate"
                },
                {
                    name: "Cloudflare",
                    icon: "icons/Cloudflare.svg",
                    proficiency: "Intermediate"
                }
            ]
        }
     
    ]
    return (
        <section className="flex flex-col p-8 w-full items-center" id="skills">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="flex flex-row gap-6 p-8 items-center">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col p-25 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span key={item.name} className="text-gray-800 px-2 py-1 rounded-full text-sm">
                                    
                                    <Image 
                                    src={item.icon}
                                    alt=""
                                    width={50}
                                    height={50}

                                />
                                </span>
                                
                               
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}