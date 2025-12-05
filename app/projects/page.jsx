"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Eye, ExternalLink, Code, Layers, Zap } from "lucide-react"

const projects = [
  {
    title: "Vapes Direct",
    description: "A comprehensive e-commerce platform for vaping products built on Shopify. Features include advanced product filtering, custom checkout experience, and real-time inventory management.",
      image: "/images/project1.jpg",
    tags: ["Shopify", "Liquid", "JavaScript", "HTML/CSS", "E-commerce"],
    link: "/projects/vapes-direct",
    external: "https://vapesdirect.pk/",
    category: "E-commerce",
  },
  {
    title: "Memecoins Agents",
    description: "A cryptocurrency platform built with Next.js and React for meme coin enthusiasts. Includes real-time price tracking, wallet integration, and community features.",
    image: "/images/project2.jpg",
    tags: ["React", "Next.js", "Node.js", "Tailwind CSS", "Cryptocurrency"],
    link: "/projects/business-web",
    external: "http://memecoinsagent.info/",
    category: "Web Application",
  },
  {
    title: "Devmerce Blog",
    description: "A modern, responsive WordPress blog focused on technology and business news. Custom theme development with optimized performance and SEO features.",
    image: "/images/project3.jpg",
    tags: ["WordPress", "PHP", "CSS", "JavaScript", "SEO"],
    link: "/projects/blogging-web",
    external: "https://devmerce.blog/",
    category: "Blog/CMS",
  },
  {
    title: "Rumoured Glamour",
    description: "A premium beauty and wellness e-commerce store built with modern web technologies. Features include product customization, subscription management, and loyalty program.",
    image: "/images/project4.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "E-commerce"],
    link: "/projects/rumoured-glamour",
    external: "https://rumouredglamourstore.com/",
    category: "E-commerce",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with MERN stack and Stripe integration. Includes admin dashboard, order management, and customer analytics.",
    image: "/images/project5.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "#",
    category: "E-commerce",
  },
  {
    title: "Corporate Website",
    description: "Modern corporate website with CMS integration and custom animations. Responsive design with interactive elements and optimized performance.",
    image: "/images/project6.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "CMS"],
    link: "#",
    category: "Corporate",
  },
  {
    title: "Booking Application",
    description: "Online booking system for a service-based business with payment processing. Real-time availability, automated notifications, and calendar integration.",
    image: "/images/project1.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Calendar API"],
    link: "#",
    category: "Web Application",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio website for a creative professional with custom animations. Showcase work with smooth transitions and interactive galleries.",
    image: "/images/project2.jpg",
    tags: ["Next.js", "Tailwind CSS", "GSAP", "Three.js"],
    link: "#",
    category: "Portfolio",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with advanced search functionality. Interactive maps, virtual tours, and lead generation features.",
    image: "/images/project3.jpg",
    tags: ["React", "Node.js", "MongoDB", "Google Maps API", "3D Tours"],
    link: "#",
    category: "Web Application",
  },
]

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: Code,
  },
  {
    number: "40+",
    label: "Happy Clients",
    icon: Layers,
  },
  {
    number: "100%",
    label: "Success Rate",
    icon: Zap,
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-hero" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 Q 50 25, 100 50 T 200 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
                <path
                  d="M0 80 Q 50 55, 100 80 T 200 80"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
                <path
                  d="M50 0 Q 25 50, 50 100 T 50 200"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
                <path
                  d="M80 0 Q 55 50, 80 100 T 80 200"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-hero)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#222222] dark:text-white">
              My Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Explore a showcase of my work across various industries and technologies. Each project represents a unique challenge and innovative solution.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={28} className="text-white dark:text-gray-900" />
                </motion.div>
                <div className="text-4xl font-bold mb-2 text-[#222222] dark:text-white">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-projects" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 Q 50 25, 100 50 T 200 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
                <path
                  d="M0 80 Q 50 55, 100 80 T 200 80"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-projects)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#222222] dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of successful projects delivered with excellence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gray-900/80 dark:bg-white/80 text-white dark:text-gray-900 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </div>

                  {/* Overlay with icons on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                      href={project.link}
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all transform scale-0 group-hover:scale-100"
                      aria-label="View project details"
                    >
                      <Eye size={20} className="text-white" />
                    </Link>

                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all transform scale-0 group-hover:scale-100"
                        aria-label="Visit live website"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#222222] dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-cta" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 Q 50 25, 100 50 T 200 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
                <path
                  d="M50 0 Q 25 50, 50 100 T 50 200"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-cta)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-gray-900 dark:bg-white rounded-3xl p-12 md:p-16 text-center shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white dark:text-gray-900">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to build something amazing together. I'm available for freelance projects and always excited about new challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Start a Conversation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-block bg-transparent border-2 border-white dark:border-gray-900 text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white transition-all"
                >
                  View Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

