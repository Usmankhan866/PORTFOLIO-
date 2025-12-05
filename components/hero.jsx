"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },

  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-[85vh] flex items-center bg-white dark:bg-gray-900 pt-32 pb-16 overflow-hidden">
      {/* Double Wave Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* First Horizontal Wave */}
              <path
                d="M0 50 Q 50 25, 100 50 T 200 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-900 dark:text-white"
              />
              {/* Second Horizontal Wave */}
              <path
                d="M0 80 Q 50 55, 100 80 T 200 80"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-900 dark:text-white"
              />
              {/* First Vertical Wave */}
              <path
                d="M50 0 Q 25 50, 50 100 T 50 200"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-900 dark:text-white"
              />
              {/* Second Vertical Wave */}
              <path
                d="M80 0 Q 55 50, 80 100 T 80 200"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-900 dark:text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Text Content */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
  variants={itemVariants}
  className="text-6xl sm:text-7xl lg:text-6xl xl:text-7xl font-bold text-[#222222] dark:text-white leading-tight"
>
  Hi !!! 
  Here's Usman Khan
  The <br /> Web Dev Expert
</motion.h1>


            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Empower your business with expert guidance. Biztar Consulting delivers strategic solutions for sustainable growth. Your success starts here.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                className="bg-gray-900 dark:bg-gray-700 text-white px-7 py-3.5 rounded-full font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Get Started!
              </motion.button>
              
              <motion.button
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-gray-600 px-7 py-3.5 rounded-full font-medium text-base hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                See Case Studies
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div 
            className="relative "
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-square max-w-sm lg:max-w-md mx-auto">
              {/* Decorative rounded background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-[2.5rem] lg:rounded-[3rem] transform rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.png"
                  alt="Business professionals collaborating"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}
