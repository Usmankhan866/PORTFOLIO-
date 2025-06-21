import Link from "next/link"
import Image from "next/image"
import { Eye, ExternalLink } from "lucide-react"

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
  return (
    <section className="section-padding bg-gray-50 dark:bg-black">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
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

                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                      aria-label="Visit live website"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/projects" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
