"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Duplicate the technologies arrays to create a seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies]
  const duplicatedAdditionalTech = [...additionalTechnologies, ...additionalTechnologies]

  return (
    <section className="relative py-12 md:py-16 bg-white dark:bg-gray-900">
<div className="w-full max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies I Work With
            </h2>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I stay up-to-date with the latest technologies to deliver cutting-edge solutions that drive business growth and innovation.
            </p>
          </motion.div>

          {/* Right Side - Technology Tags */}
          <motion.div
            ref={ref}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* First row - slides left to right */}
            <div className="scroll-container">
              <div className="scroll-wrapper scroll-right">
                {duplicatedTechnologies.map((tech, index) => (
                  <div
                    key={`top-${index}`}
                    className="px-5 py-2.5 mx-2 rounded-full border-2 border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all flex items-center whitespace-nowrap"
                  >
                    <div className="relative w-5 h-5 mr-2">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">• {tech.category}</span>
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
                    className="px-5 py-2.5 mx-2 rounded-full border-2 border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all flex items-center whitespace-nowrap"
                  >
                    <div className="relative w-5 h-5 mr-2">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">• {tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
