"use client"

import {
  Code,
  Layout,
  ShoppingBag,
  Database,
  Globe,
  Server,
  Smartphone,
  Palette,
  Search,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const services = [
  { title: "Custom Web Development", description: "Tailored MERN stack solutions to fit your unique business model.", icon: Code },
  { title: "WordPress Development", description: "Build manageable, scalable WordPress websites with custom themes/plugins.", icon: Layout },
  { title: "E-commerce Solutions", description: "Shopify & WooCommerce stores optimized for conversions and growth.", icon: ShoppingBag },
  { title: "Database Design", description: "Optimized, scalable databases with clean schema design.", icon: Database },
  { title: "Web Optimization", description: "Speed and SEO optimizations that improve UX and rankings.", icon: Globe },
  { title: "API Development", description: "Robust RESTful and GraphQL APIs to connect and empower your apps.", icon: Server },
  { title: "Responsive Design", description: "Fully responsive, mobile-first interfaces for every screen size.", icon: Smartphone },
  { title: "UI/UX Design", description: "Clean, intuitive UI with strategic UX design for user retention.", icon: Palette },
  { title: "SEO Optimization", description: "Technical and on-page SEO that gets your site found faster.", icon: Search },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 bg-white dark:bg-black">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(14,186,177,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto relative z-10 px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What I Can Do For You
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A suite of full-stack services crafted to build, grow, and scale your digital presence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center mb-5 rounded-xl bg-[#0ebab1]/10 text-[#0ebab1] group-hover:rotate-[360deg] transition-transform duration-500">
                <service.icon size={24} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#0ebab1] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover line at bottom */}
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#0ebab1] to-[#22cec5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-white font-medium bg-[#0ebab1] hover:bg-[#22cec5] rounded-full shadow-lg transition duration-300"
            >
              Explore Full Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
