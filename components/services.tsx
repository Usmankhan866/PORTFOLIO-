import { Code, Layout, ShoppingBag, Database, Globe, Server, Smartphone, Palette, Search } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Custom Web Development",
    description: "Tailored web solutions built with the MERN stack to meet your specific business needs.",
    icon: Code,
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress themes and plugins to create powerful, manageable websites.",
    icon: Layout,
  },
  {
    title: "E-commerce Solutions",
    description: "Shopify and WooCommerce stores designed to maximize conversions and sales.",
    icon: ShoppingBag,
  },
  {
    title: "Database Design",
    description: "Efficient database architecture to ensure your application performs optimally.",
    icon: Database,
  },
  {
    title: "Web Optimization",
    description: "Performance tuning to ensure your website loads quickly and ranks well.",
    icon: Globe,
  },
  {
    title: "API Development",
    description: "Custom API development to connect your applications and services.",
    icon: Server,
  },
  {
    title: "Responsive Web Design",
    description: "Mobile-first design approach to ensure your website looks great on all devices.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that focuses on creating intuitive and engaging interfaces.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    description: "Search engine optimization to improve your website's visibility in search results.",
    icon: Search,
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-black">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive web development services to help your business succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="mb-6 p-3 inline-block rounded-lg bg-[#0ebab1]/10 text-[#0ebab1]">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  )
}
