import Image from "next/image";

export default function Skills() {
    const skills = [
        {
            category: "Programming Languages",
            items: [
                {
                name: "JavaScript",
                icon: "icons/javascript-svgrepo-com.svg"
            },
            {
                name: "TypeScript",
                icon: "icons/typescript-svgrepo-com.svg"
            },
            {
                name: "Python",
                icon: "icons/python-svgrepo-com.svg"
            },
            {
                name: "Java",
                icon: "icons/java-ar21.svg"
            },
            {
                name: "PHP",
                icon: "icons/PHP.svg"
            }
        ]
        },
        {
            category: "Frameworks & Libraries",
            items: [
                {
                name: "React",
                icon: "icons/react-javascript-js-framework-facebook-svgrepo-com.svg"
            },
            {
                name: "NextJs",
                icon: "icons/nextjs-svgrepo-com.svg"
            },
            {
                name: "NodeJs",
                icon: "icons/node-js-svgrepo-com.svg"
            },
            {
                name: "ExpressJs",
                icon: "icons/express-svgrepo-com.svg"
            },
            {
                name: "Springboot",
                icon: "icons/spring-boot-icon.svg"
            },
            {
                name: "Angular",
                icon: "icons/Angular.svg"
            }
        ]
            
        },
        {
            category: "Databases",
            items: [
                {
                name: "MongoDB",
                icon: "icons/mongodb-logo-svgrepo-com.svg"
            },
            {
                name: "MySQL",
                icon: "icons/nextjs-svgrepo-com.svg"
            },
            {
                name: "PostgreSQL",
                icon: "icons/postgresql-logo-svgrepo-com.svg"
            },
        ]
        },
        {
            category: "Tools & Platforms",
            items: [
                {
                name: "Git",
                icon: "icons/github-142-svgrepo-com.svg"
            },
            {
                name: "vscode",
                icon: "icons/Visual Studio Code (VS Code).svg"
            },
            {
                name: "intelij",
                icon: "icons/IntelliJ IDEA.svg"
            },
            {
                name: "postman",
                icon: "icons/Postman.svg"
            }
       
        ]
        },
        {
            category: "AI & Machine Learning",
            items: [
                {
                name: "TensorFlow",
                icon: "icons/react-javascript-js-framework-facebook-svgrepo-com.svg"
            },
            {
                name: "PyTorch",
                icon: "icons/nextjs-svgrepo-com.svg"
            },
            {
                name: "Langchain",
                icon: "icons/node-js-svgrepo-com.svg"
            },
            {
                name: "Flan T-5",
                icon: "icons/express-svgrepo-com.svg"
            },
            {
                name: "scikit-learn.svg",
                icon: "icons/scikit-learn.svg"
            }
        ]
        },
        {
            category: "Cloud & Infrastructure",
            items: [
                {
                    name: "AWS",
                    icon: "icons/aws-svgrepo-com.svg"
                },
                {
                    name: "Azure",
                    icon: "icons/azure-svgrepo-com.svg"
                },
                {
                    name: "Vercel",
                    icon: "icons/vercel-svgrepo-com.svg"
                },
                {
                    name: "Apache Kafka",
                    icon: "icons/Apache Kafka.svg"
                },
                {
                    name: "Cloudflare",
                    icon: "icons/Cloudflare.svg"
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