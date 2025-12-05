  "use client"

import {
  Settings,
  DollarSign,
  BarChart3,
  Users,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"

const services = [
  { 
    title: "Strategic Planning", 
    description: "Craft winning strategies for sustainable growth.", 
    icon: Settings,
    highlighted: false 
  },
  { 
    title: "Financial Advisory", 
    description: "Optimize your financial resources and investments.", 
    icon: DollarSign,
    highlighted: true 
  },
  { 
    title: "Market Research", 
    description: "Gain insights for informed decision-making.", 
    icon: BarChart3,
    highlighted: false 
  },
  { 
    title: "HR Management", 
    description: "Build a motivated and efficient workforce.", 
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < services.length - 4 ? prev + 1 : prev))
  }

  return (
    <section className="relative py-12 md:py-16 bg-white dark:bg-gray-900">
     <div className="w-full max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6">

        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Tailored Solutions for Your Success
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`group relative p-6 rounded-2xl transition-all duration-300 ${
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

        {/* Bottom Section - Button and Navigation */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
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

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg"
              aria-label="Next"
            >
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
