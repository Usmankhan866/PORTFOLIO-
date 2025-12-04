import Image from "next/image"

const technologies = [
  { name: "HTML", category: "Frontend", icon: "/icons/html5.png" },
  { name: "CSS", category: "Frontend", icon: "/icons/css3.png" },
  { name: "JavaScript", category: "Language", icon: "/icons/javascript.png" },
  { name: "Java", category: "Language", icon: "/icons/java.png" },
  { name: "PHP", category: "Backend", icon: "/icons/php.png" },
  { name: "Python", category: "Language", icon: "/icons/python.png" },
  { name: "React", category: "Frontend", icon: "/icons/react.png" },
  { name: "SQL", category: "Database", icon: "/icons/sql.png" },
  { name: "C#", category: "Language", icon: "/icons/csharp.png" },
  { name: ".NET", category: "Framework", icon: "/icons/dotnet.png" },
  { name: "WordPress", category: "CMS", icon: "/icons/wordpress.png" },
  { name: "Shopify", category: "E-commerce", icon: "/icons/shopify.png" },
]

const additionalTechnologies = [
  { name: "Wix", category: "Website Builder", icon: "/icons/wix.png" },
  { name: "Node.js", category: "Backend", icon: "/icons/nodejs.png" },
  { name: "MongoDB", category: "Database", icon: "/icons/mongodb.png" },
  { name: "Next.js", category: "Frontend", icon: "/icons/nextjs.png" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/icons/tailwind.png" },
  { name: "GraphQL", category: "API", icon: "/icons/graphql.png" },
  { name: "Firebase", category: "Backend", icon: "/icons/firebase.png" },
  { name: "AWS", category: "Cloud", icon: "/icons/aws.png" },
  { name: "Docker", category: "DevOps", icon: "/icons/docker.png" },
  { name: "Odoo", category: "ERP", icon: "/icons/odoo.png" },
  { name: "MySQL", category: "Database", icon: "/icons/mysql.png" },
  { name: "TypeScript", category: "Language", icon: "/icons/typescript.png" },
]

export default function Technologies() {
  // Duplicate the technologies arrays to create a seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies]
  const duplicatedAdditionalTech = [...additionalTechnologies, ...additionalTechnologies]

  return (
    <section className="section-padding bg-gray-50 dark:bg-black">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Work With</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I stay up-to-date with the latest technologies to deliver cutting-edge solutions
          </p>
        </div>

        <div className="space-y-6">
          {/* First row - slides left to right */}
          <div className="scroll-container">
            <div className="scroll-wrapper scroll-right">
              {duplicatedTechnologies.map((tech, index) => (
                <div
                  key={`top-${index}`}
                  className="px-6 py-3 mx-2 rounded-full border border-gray-200 bg-white dark:bg-black dark:border-gray-800 hover:border-[#0ebab1] hover:bg-[#0ebab1]/5 transition-all flex items-center"
                >
                  <div className="relative w-6 h-6 mr-2">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                  <span className="text-xs text-gray-500 ml-2">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - slides right to left */}
          <div className="scroll-container">
            <div className="scroll-wrapper scroll-left">
              {duplicatedAdditionalTech.map((tech, index) => (
                <div
                  key={`bottom-${index}`}
                  className="px-6 py-3 mx-2 rounded-full border border-gray-200 bg-white dark:bg-black dark:border-gray-800 hover:border-[#0ebab1] hover:bg-[#0ebab1]/5 transition-all flex items-center"
                >
                  <div className="relative w-6 h-6 mr-2">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                  <span className="text-xs text-gray-500 ml-2">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
