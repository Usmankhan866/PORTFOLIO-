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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-black overflow-hidden">
      {/* Floating Background Lights */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-16 left-12 w-32 h-32 bg-[#0ebab1]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-40 h-40 bg-[#22cec5]/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A curated list of projects crafted with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-2xl transition-shadow"
              variants={cardVariants}
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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <Link
                    href={project.link}
                    aria-label={`View details for ${project.title}`}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors"
                  >
                    <Eye size={20} className="text-white" />
                  </Link>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live`}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#0ebab1] transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowRight size={16} />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#0ebab1]/10 hover:text-[#0ebab1] transition-colors"
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
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-[#0ebab1] hover:bg-[#22cec5] text-white font-medium shadow-lg transition-all inline-flex items-center gap-2"
            >
              View All Projects <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
