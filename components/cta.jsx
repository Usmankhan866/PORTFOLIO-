"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern-cta" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 50 25, 100 50 T 200 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-900 dark:text-white"
              />
              <path
                d="M0 80 Q 50 55, 100 80 T 200 80"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-900 dark:text-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern-cta)" />
        </svg>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#222222] via-gray-800 to-[#222222] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-5 left-5 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-5 right-5 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          {/* Content */}
          <div className="relative text-center max-w-2xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 sm:px-3 py-1 mb-2 sm:mb-3"
            >
              <Sparkles size={12} className="text-yellow-400 sm:w-3.5 sm:h-3.5" />
              <span className="text-[10px] sm:text-xs font-medium text-white">Available for New Projects</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1.5 sm:mb-2 leading-tight px-4"
            >
              Ready to Build Something
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Amazing Together?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed px-4"
            >
              Let's collaborate to create a stunning web solution that brings your vision to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-center mb-3 sm:mb-4 px-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-[#222222] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
                >
                  Start Your Project
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-transparent border-2 border-white text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-white hover:text-[#222222] transition-all w-full sm:w-auto"
                >
                  View My Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-400"
            >
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available Now</span>
              </div>
              <div>50+ Projects</div>
              <div>Free Consultation</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
