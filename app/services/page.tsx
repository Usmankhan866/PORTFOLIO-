import { Code, Layout, ShoppingBag, Database, Globe, Server, Smartphone, Palette, Search, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Custom Web Development",
    description:
      "Tailored web solutions built with the MERN stack to meet your specific business needs. I create scalable, high-performance applications that provide exceptional user experiences.",
    icon: Code,
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress themes and plugins to create powerful, manageable websites. From simple blogs to complex e-commerce sites, I can help you leverage the world's most popular CMS.",
    icon: Layout,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Shopify and WooCommerce stores designed to maximize conversions and sales. I build online stores that are not only visually appealing but also optimized for sales and easy to manage.",
    icon: ShoppingBag,
  },
  {
    title: "Database Design",
    description:
      "Efficient database architecture to ensure your application performs optimally. I design and implement database solutions that are secure, scalable, and optimized for your specific needs.",
    icon: Database,
  },
  {
    title: "Web Optimization",
    description:
      "Performance tuning to ensure your website loads quickly and ranks well. I optimize code, images, and server configurations to provide the fastest possible user experience.",
    icon: Globe,
  },
  {
    title: "API Development",
    description:
      "Custom API development to connect your applications and services. I create RESTful and GraphQL APIs that are secure, well-documented, and easy to integrate with.",
    icon: Server,
  },
  {
    title: "Responsive Web Design",
    description:
      "Mobile-first design approach to ensure your website looks great on all devices. I create responsive layouts that adapt seamlessly to different screen sizes and orientations.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that focuses on creating intuitive and engaging interfaces. I combine aesthetics with functionality to create websites that users love to interact with.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    description:
      "Search engine optimization to improve your website's visibility in search results. I implement best practices to help your site rank higher and attract more organic traffic.",
    icon: Search,
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing support and maintenance to keep your website secure and up-to-date. I provide regular updates, security patches, and performance optimizations to ensure your site runs smoothly.",
    icon: Zap,
  },
]

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 dark:bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="mb-6 p-3 inline-block rounded-lg bg-primary/10 text-primary">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg [#0ebab1]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-Black">My Development Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-Black">Discovery & Planning</h3>
                    <p className="text-gray-600">
                      I begin by understanding your business goals, target audience, and project requirements to create
                      a comprehensive plan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-Black">Design & Prototyping</h3>
                    <p className="text-gray-600">
                      Creating wireframes and design mockups to visualize the user interface and experience before
                      development begins.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-Black">Development</h3>
                    <p className="text-gray-600">
                      Building the solution using the most appropriate technologies, with regular updates and milestone
                      reviews.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-Black">Testing & Quality Assurance</h3>
                    <p className="text-gray-600">
                      Rigorous testing across devices and browsers to ensure functionality, performance, and security.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-Black">Deployment & Support</h3>
                    <p className="text-gray-400">
                      Launching your project and providing ongoing maintenance and support to ensure continued success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0ebab1]/80 to-transparent p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-Black">Why Choose Me?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-white">Expertise in modern web technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-white">Focus on performance and user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-white">Clear communication throughout the project</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-white">Attention to detail and quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-white">Timely delivery and responsive support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-white">Commitment to your business success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-black">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and how I can help you achieve your goals.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
