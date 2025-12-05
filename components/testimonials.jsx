"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Emily Richards",
    company: "Apex Innovations Inc.",
    content:
      "Biztar Consulting's innovative strategies and unwavering commitment to our vision revolutionized our business. Their deep expertise, personalized guidance, and tireless dedication led us to a remarkable 40% increase in revenue. We couldn't have asked for a better partner in our journey to success.",
    image: "/images/client1.jpg",
    role: "CEO",
  },
  {
    name: "Michael Chen",
    company: "Global Solutions",
    content:
      "Working with this team has been transformative for our organization. Their strategic approach and attention to detail helped us streamline operations and achieve unprecedented growth. The results speak for themselves.",
    image: "/images/client2.jpg",
    role: "Operations Director",
  },
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    content:
      "The level of professionalism and expertise demonstrated throughout our engagement was exceptional. Their innovative solutions and commitment to excellence have positioned us for long-term success in our industry.",
    image: "/images/client3.jpg",
    role: "Marketing Director",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    startAutoplay()
  }

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    startAutoplay()
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <section ref={ref} className="py-8 md:py-12 bg-white dark:bg-gray-950">
      <div className="container px-4 sm:px-6 mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Client Success Stories
          </h2>
        </motion.div>

        {/* Testimonial Content - Two Column Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 items-center">
                  
                  {/* Left: Image */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="relative w-full max-w-[260px] mx-auto lg:mx-0">
                      {/* Image Container */}
                      <div className="relative rounded-2xl overflow-hidden bg-[#a8c5cd] aspect-[3/4]">
                        <Image
                          src={testimonials[activeIndex].image || "/placeholder-user.jpg"}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      
                      {/* Yellow Quote Icon */}
                      <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-[#f4f27e] flex items-center justify-center shadow-md">
                        <Quote className="w-5 h-5 text-gray-800" fill="currentColor" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Right: Testimonial Content */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {testimonials[activeIndex].content}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-0.5">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[activeIndex].role} of {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6 md:mt-8">
            {/* View More Button */}
            <motion.button
              className="px-4 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-all text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>

            {/* Arrow Navigation */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
