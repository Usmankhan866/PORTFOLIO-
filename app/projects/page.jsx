import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Eye, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Vapes Direct",
    description: "A comprehensive e-commerce platform for vaping products built on Shopify.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vapes%20Direct-cWRJDS4z1OX8rhVN1Q3K3HzJO4jC7N.png",
    tags: ["Shopify", "Liquid", "JavaScript", "HTML/CSS"],
    link: "/projects/vapes-direct",
    external: "https://vapesdirect.pk/",
  },
  {
    title: "Memecoins Agents",
    description: "A cryptocurrency platform built with Next.js and React for meme coin enthusiasts.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bussiness%20WEB-WZWk8NWWOfwihVB0U9UZNhAVr9huWS.png",
    tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    link: "/projects/business-web",
    external: "http://memecoinsagent.info/",
  },
  {
    title: "Devmerce Blog",
    description: "A modern, responsive WordPress blog focused on technology and business news.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blogging%20WEB-rkxe8jlrRdsLeJlgl2ylJZypLvYPlx.png",
    tags: ["WordPress", "PHP", "CSS", "JavaScript"],
    link: "/projects/blogging-web",
    external: "https://devmerce.blog/",
  },
  {
    title: "Rumoured Glamour",
    description: "A premium beauty and wellness e-commerce store built with modern web technologies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rumouredglamour-10GnMjMtbNxQUZ5U97GtVnREfM8NVO.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    link: "/projects/rumoured-glamour",
    external: "https://rumouredglamourstore.com/",
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with MERN stack and Stripe integration.",
    image: "/images/project1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "#",
  },
  {
    title: "Corporate Website",
    description: "Modern corporate website with CMS integration and custom animations.",
    image: "/images/project2.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "Booking Application",
    description: "Online booking system for a service-based business with payment processing.",
    image: "/images/project3.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio website for a creative professional with custom animations.",
    image: "/images/project4.jpg",
    tags: ["Next.js", "Tailwind CSS", "GSAP"],
    link: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with advanced search functionality.",
    image: "/images/project5.jpg",
    tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
    link: "#",
  },
]

// Featured projects for the homepage
const featuredProjects = projects.slice(0, 3)

export default function Projects() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 dark:bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A showcase of my work across various industries and technologies
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="card overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 mb-4 overflow-hidden rounded">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform group-hover:scale-105"
                    />

                    {/* Overlay with icons on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Link
                        href={project.link}
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                        aria-label="View project details"
                      >
                        <Eye size={20} className="text-white" />
                      </Link>

                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                          aria-label="Visit live website"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0ebab1]/10 to-white dark:from-[#0ebab1]/10 dark:to-black">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing together. I'm always open to new opportunities and
              challenges.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
