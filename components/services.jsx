  "use client"

import {
  Settings,
  DollarSign,
  BarChart3,
  Users,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const services = [
  { 
    title: "Web Development", 
    description: "Build responsive and scalable web applications.", 
    icon: Settings,
    highlighted: false 
  },
  { 
    title: "E-commerce Solutions", 
    description: "Create powerful online stores that drive sales.", 
    icon: DollarSign,
    highlighted: true 
  },
  { 
    title: "UI/UX Design", 
    description: "Design beautiful and intuitive user experiences.", 
    icon: BarChart3,
    highlighted: false 
  },
  { 
    title: "Custom Development", 
    description: "Tailored solutions for your unique business needs.", 
    icon: Users,
    highlighted: false 
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
     <div className="w-full max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white px-4">
            Services I Offer
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`group relative p-5 sm:p-6 rounded-2xl transition-all duration-300 ${
                service.highlighted
                  ? "bg-[#f4f27e] dark:bg-[#e8e66f]"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon in rounded square */}
              <div className={`relative w-12 h-12 flex items-center justify-center mb-4 rounded-xl ${
                service.highlighted 
                  ? "bg-gray-900 dark:bg-gray-800" 
                  : "bg-gray-900 dark:bg-gray-700"
              }`}>
                <service.icon 
                  size={24} 
                  className="text-white"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className={`text-lg font-bold mb-2 ${
                service.highlighted
                  ? "text-gray-900 dark:text-gray-900"
                  : "text-gray-900 dark:text-white"
              }`}>
                {service.title}
              </h3>
              
              <p className={`leading-relaxed text-sm ${
                service.highlighted
                  ? "text-gray-700 dark:text-gray-700"
                  : "text-gray-600 dark:text-gray-400"
              }`}>
                {service.description}
              </p>

              {/* Large background number/icon effect */}
              <div className="absolute bottom-2 right-2 opacity-5">
                <service.icon size={60} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section - Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-full transition-all duration-300 shadow-md"
            >
              View More Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
