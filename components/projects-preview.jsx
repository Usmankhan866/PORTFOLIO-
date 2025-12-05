"use client"

import Link from "next/link"
import Image from "next/image"
import { Eye, ExternalLink, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const featuredProjects = [
  {
    title: "Vapes Direct",
    description: "A comprehensive e-commerce platform for vaping products built on Shopify.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vapes%20Direct-cWRJDS4z1OX8rhVN1Q3K3HzJO4jC7N.png",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "/projects/vapes-direct",
    external: "https://vapesdirect.pk/",
  },
  {
    title: "Memecoins Agents",
    description: "A cryptocurrency platform built with Next.js and React for meme coin enthusiasts.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bussiness%20WEB-WZWk8NWWOfwihVB0U9UZNhAVr9huWS.png",
    tags: ["React", "Next.js", "Node.js"],
    link: "/projects/business-web",
    external: "http://memecoinsagent.info/",
  },
  {
    title: "Devmerce Blog",
    description: "A modern, responsive WordPress blog focused on technology and business news.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blogging%20WEB-rkxe8jlrRdsLeJlgl2ylJZypLvYPlx.png",
    tags: ["WordPress", "PHP", "JavaScript"],
    link: "/projects/blogging-web",
    external: "https://devmerce.blog/",
  },
]

export default function ProjectsPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative py-12 md:py-16 bg-gray-50 dark:bg-gray-950 overflow-hidden">
<div className="w-full max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6">
        
        {/* Header Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-10 md:mb-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Featured Projects
            </h2>
          </motion.div>
          
          <motion.div
            className="flex items-start lg:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              A curated list of projects crafted with cutting-edge technologies to deliver exceptional user experiences and business results.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              custom={i}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
                  <Link
                    href={project.link}
                    aria-label={`View details for ${project.title}`}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center transition-colors shadow-lg"
                  >
                    <Eye size={18} className="text-gray-900" />
                  </Link>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live`}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center transition-colors shadow-lg"
                  >
                    <ExternalLink size={18} className="text-gray-900" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="mt-10 flex justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all inline-flex items-center gap-2 shadow-md text-sm"
            >
              View All Projects <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
