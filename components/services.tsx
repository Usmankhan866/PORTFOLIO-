"use client"

import { Code, Layout, ShoppingBag, Database, Globe, Server, Smartphone, Palette, Search } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    title: "Custom Web Development",
    description: "Tailored web solutions built with the MERN stack to meet your specific business needs.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress themes and plugins to create powerful, manageable websites.",
    icon: Layout,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "E-commerce Solutions",
    description: "Shopify and WooCommerce stores designed to maximize conversions and sales.",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database Design",
    description: "Efficient database architecture to ensure your application performs optimally.",
    icon: Database,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Web Optimization",
    description: "Performance tuning to ensure your website loads quickly and ranks well.",
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "API Development",
    description: "Custom API development to connect your applications and services.",
    icon: Server,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Responsive Web Design",
    description: "Mobile-first design approach to ensure your website looks great on all devices.",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that focuses on creating intuitive and engaging interfaces.",
    icon: Palette,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "SEO Optimization",
    description: "Search engine optimization to improve your website's visibility in search results.",
    icon: Search,
    color: "from-emerald-500 to-teal-500",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Services
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I offer comprehensive web development services to help your business succeed online
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <motion.div
                className="mb-6 p-3 inline-block rounded-lg bg-[#0ebab1]/10 text-[#0ebab1] relative"
                variants={iconVariants}
                whileHover="hover"
              >
                <service.icon size={24} />

                {/* Glow effect */}
                <motion.div className="absolute inset-0 rounded-lg bg-[#0ebab1]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.h3
                className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                {service.description}
              </motion.p>

              {/* Hover line effect */}
              <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ebab1] to-[#22cec5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services" className="btn-primary">
              Explore More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
