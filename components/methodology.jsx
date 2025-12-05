"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Search, BarChart3, Target, Rocket, Repeat, CheckCircle, Headphones } from "lucide-react"

const methodologySteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your requirements and project goals thoroughly.",
    highlighted: true,
    icon: Search,
  },
  {
    number: "02",
    title: "Planning",
    description: "Creating detailed project roadmap and technical architecture.",
    highlighted: false,
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting intuitive UI/UX designs aligned with your brand.",
    highlighted: true,
    icon: Target,
  },
  {
    number: "04",
    title: "Development",
    description: "Building robust and scalable web solutions with modern technologies.",
    highlighted: false,
    icon: Rocket,
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance to ensure flawless performance.",
    highlighted: true,
    icon: Repeat,
  },
  {
    number: "06",
    title: "Deployment",
    description: "Launching your project smoothly to production environment.",
    highlighted: false,
    icon: CheckCircle,
  },
  {
    number: "07",
    title: "Support",
    description: "Ongoing maintenance and technical support for your peace of mind.",
    highlighted: true,
    icon: Headphones,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-8 md:py-12 bg-gray-50 dark:bg-gray-950">
<div className="w-full max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-8 md:mb-10 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              My Development Process<br />
              for Success
            </h2>
          </div>
          <div className="flex items-start lg:items-center">
            <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A systematic approach to delivering high-quality web solutions from concept to deployment and beyond.
            </p>
          </div>
        </motion.div>

        {/* Methodology Steps Grid - Parallel Layout */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Row 1: Steps 1-4 */}
          {methodologySteps.slice(0, 4).map((step, idx) => (
            <motion.div
              key={idx}
              className={`relative p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                step.highlighted
                  ? "bg-[#f4f27e] dark:bg-[#e8e66f]"
                  : "bg-[#d4dfe3] dark:bg-gray-800"
              }`}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              {/* Number Badge */}
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 rounded-lg font-bold text-base sm:text-lg ${
                step.highlighted
                  ? "bg-[#e5e56d] dark:bg-[#dede60] text-gray-900"
                  : "bg-[#b8c9cf] dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}>
                {step.number}
              </div>

              <h3 className={`text-sm sm:text-base font-bold mb-1 sm:mb-1.5 ${
                step.highlighted
                  ? "text-gray-900 dark:text-gray-900"
                  : "text-gray-900 dark:text-white"
              }`}>
                {step.title}
              </h3>

              <p className={`leading-relaxed text-[11px] sm:text-xs ${
                step.highlighted
                  ? "text-gray-700 dark:text-gray-700"
                  : "text-gray-700 dark:text-gray-400"
              }`}>
                {step.description}
              </p>
            </motion.div>
          ))}

          {/* Row 2: Steps 5-7 (centered on larger screens) */}
          <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:px-16 xl:px-24">
            {methodologySteps.slice(4).map((step, idx) => (
              <motion.div
                key={idx + 4}
                className={`relative p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  step.highlighted
                    ? "bg-[#f4f27e] dark:bg-[#e8e66f]"
                    : "bg-[#d4dfe3] dark:bg-gray-800"
                }`}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                {/* Number Badge */}
                <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 rounded-lg font-bold text-base sm:text-lg ${
                  step.highlighted
                    ? "bg-[#e5e56d] dark:bg-[#dede60] text-gray-900"
                    : "bg-[#b8c9cf] dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                }`}>
                  {step.number}
                </div>

                <h3 className={`text-sm sm:text-base font-bold mb-1 sm:mb-1.5 ${
                  step.highlighted
                    ? "text-gray-900 dark:text-gray-900"
                    : "text-gray-900 dark:text-white"
                }`}>
                  {step.title}
                </h3>

                <p className={`leading-relaxed text-[11px] sm:text-xs ${
                  step.highlighted
                    ? "text-gray-700 dark:text-gray-700"
                    : "text-gray-700 dark:text-gray-400"
                }`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SDLC Agile Approach Note */}
        <motion.div
          className="mt-8 md:mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-700">
            <Repeat className="text-gray-700 dark:text-gray-300" size={18} />
            <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
              Following Agile Development for Iterative Excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
