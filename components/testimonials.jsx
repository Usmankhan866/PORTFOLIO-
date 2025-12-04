"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    content:
      "Working with Usman was a game-changer for our business. The website he built not only looks amazing but has significantly increased our conversion rates. His attention to detail and technical expertise is impressive.",
    image: "/images/client1.jpg",
    role: "Marketing Director",
  },
  {
    name: "Michael Chen",
    company: "Global Solutions",
    content:
      "Usman is extremely professional and always ensures to satisfy the needs of his clients. He goes above and beyond to explain the website edits he is making and his video tutorials on editing are very helpful. Whenever I had a question, he would get back within an hour of reaching out.",
    image: "/images/client2.jpg",
    role: "CEO",
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Agency",
    content:
      "I've worked with many developers, but Usman stands out for his communication skills and ability to translate our vision into reality. The e-commerce platform was delivered on time and exceeded our expectations in terms of functionality.",
    image: "/images/client3.jpg",
    role: "Project Manager",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef(null)

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

  const handleDotClick = (index) => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    startAutoplay()
  }

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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section className="section-padding bg-gradient-to-br from-[#0ebab1]/5 to-white dark:from-[#0ebab1]/10 dark:to-black overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#0ebab1]/10 z-0 hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-[#0ebab1]/10 z-0 hidden md:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[#0ebab1]/20 z-0 hidden md:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-[#0ebab1]/10 z-0 hidden md:block"></div>

          {/* Testimonial slider */}
          <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 md:p-10 z-10 border border-gray-100 dark:border-gray-800">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0ebab1] text-white p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>

            <div className="h-[300px] md:h-[250px] relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full"
                >
                  <div className="flex flex-col items-center text-center">
                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 italic">
                      "{testimonials[activeIndex].content}"
                    </p>

                    <div className="mt-6 flex flex-col items-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#0ebab1]">
                          <Image
                            src={testimonials[activeIndex].image || "/placeholder.svg"}
                            alt={testimonials[activeIndex].name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          className="absolute -bottom-1 -right-1 bg-[#0ebab1] text-white rounded-full p-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                        <p className="text-[#0ebab1]">{testimonials[activeIndex].role}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#0ebab1] hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-[#0ebab1] w-8" : "bg-gray-300 dark:bg-gray-700"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#0ebab1] hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Floating avatars */}
          <div className="absolute top-1/4 -left-8 md:-left-16 transform -translate-y-1/2 z-20 hidden md:block">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg"
            >
              <Image src="/images/client1.jpg" alt="Client" width={48} height={48} className="object-cover" />
            </motion.div>
          </div>

          <div className="absolute top-1/3 -right-8 md:-right-16 transform -translate-y-1/2 z-20 hidden md:block">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg"
            >
              <Image src="/images/client2.jpg" alt="Client" width={48} height={48} className="object-cover" />
            </motion.div>
          </div>

          <div className="absolute bottom-1/4 -left-8 md:-left-16 transform translate-y-1/2 z-20 hidden md:block">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg"
            >
              <Image src="/images/client3.jpg" alt="Client" width={48} height={48} className="object-cover" />
            </motion.div>
          </div>

          <div className="absolute bottom-1/3 -right-8 md:-right-16 transform translate-y-1/2 z-20 hidden md:block">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg"
            >
              <Image src="/images/client1.jpg" alt="Client" width={48} height={48} className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
