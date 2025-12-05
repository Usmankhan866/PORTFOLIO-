"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Briefcase, GraduationCap, Award, Code, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const heroRef = useRef(null)
  const journeyRef = useRef(null)
  const expertiseRef = useRef(null)
  const experienceRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isJourneyInView = useInView(journeyRef, { once: true, margin: "-100px" })
  const isExpertiseInView = useInView(expertiseRef, { once: true, margin: "-100px" })
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+", color: "text-blue-500" },
    { icon: Users, label: "Happy Clients", value: "12+", color: "text-green-500" },
    { icon: Award, label: "Years Experience", value: "3+", color: "text-purple-500" },
    { icon: Briefcase, label: "Technologies", value: "20+", color: "text-orange-500" },
  ]

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background Pattern - matching home page */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-about" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
                <path
                  d="M50 0 Q 25 50, 50 100 T 50 200"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
                <path
                  d="M80 0 Q 55 50, 80 100 T 80 200"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-about)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={heroRef}
            className="max-w-3xl mx-auto text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-6xl font-bold mb-6 text-[#222222] dark:text-white"
            >
              About Me
            </motion.h1>
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Passionate web developer with expertise in creating custom solutions that drive business growth
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 ${stat.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={28} />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={journeyRef}
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isJourneyInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8 text-[#222222] dark:text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={isJourneyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
              >
                My Journey
              </motion.h2>

              <motion.div className="space-y-6">
                {[
                  "With over 3 years of experience in web development, I've had the privilege of working with businesses across various industries to create impactful digital solutions. My journey began with a passion for coding and problem-solving, which has evolved into a career focused on delivering exceptional web experiences.",
                  "I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js) and have extensive experience with content management systems like WordPress, e-commerce platforms like Shopify, and business solutions like Odoo.",
                  "My approach combines technical expertise with a deep understanding of user experience and business objectives to create websites that not only look great but also perform exceptionally well.",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl" variants={itemVariants}>
              <motion.div
                className="relative w-full h-full"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={isJourneyInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mypic.jpg-AOcmBlV6G41G6JrZZ5XzlIcY2J2GrN.jpeg"
                  alt="Professional developer"
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#222222] dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isExpertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            My Expertise
          </motion.h2>

          <motion.div
            ref={expertiseRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isExpertiseInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Code,
                title: "Full-Stack Development",
                description: "MERN stack expertise with modern frameworks and tools.",
                highlighted: false,
              },
              {
                icon: Briefcase,
                title: "E-Commerce Solutions",
                description: "Shopify, WooCommerce, and custom platforms.",
                highlighted: true,
              },
              {
                icon: GraduationCap,
                title: "CMS Implementation",
                description: "WordPress, Odoo, and headless CMS solutions.",
                highlighted: false,
              },
              {
                icon: Award,
                title: "API Development",
                description: "RESTful APIs and database optimization.",
                highlighted: false,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  item.highlighted
                    ? "bg-[#f4f27e] dark:bg-[#e8e66f]"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                    item.highlighted
                      ? "bg-[#222222] dark:bg-[#222222]"
                      : "bg-[#222222] dark:bg-gray-900"
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={28} className="text-white" />
                </motion.div>
                <h3 className={`text-lg font-bold mb-2 ${
                  item.highlighted
                    ? "text-gray-900 dark:text-gray-900"
                    : "text-[#222222] dark:text-white"
                }`}>{item.title}</h3>
                <p className={`text-sm ${
                  item.highlighted
                    ? "text-gray-700 dark:text-gray-700"
                    : "text-gray-600 dark:text-gray-400"
                }`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#222222] dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Experience & Education
          </motion.h2>

          <motion.div
            ref={experienceRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isExperienceInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: Briefcase,
                title: "Senior Web Developer",
                company: "Devmerce - Present",
                description: "Leading web development projects for enterprise clients.",
                highlighted: false,
              },
              {
                icon: Code,
                title: "Web Developer",
                company: "Web Dev Company",
                description: "Built responsive websites and e-commerce platforms.",
                highlighted: true,
              },
              {
                icon: Users,
                title: "Freelancer",
                company: "Upwork and Airtasker",
                description: "Created user interfaces and frontend functionality.",
                highlighted: false,
              },
              {
                icon: GraduationCap,
                title: "Bachelor's in Software Engineering",
                company: "University",
                description: "Specialized in web technologies and software engineering.",
                highlighted: false,
              },
              {
                icon: Award,
                title: "ICS",
                company: "Gordon College Rwp",
                description: "Focused on programming and web development.",
                highlighted: true,
              },
              {
                icon: CheckCircle,
                title: "Professional Certification",
                company: "Intern at Codexsolution",
                description: "Certified in MongoDB, React, and AWS.",
                highlighted: false,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  item.highlighted
                    ? "bg-[#f4f27e] dark:bg-[#e8e66f]"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                    item.highlighted
                      ? "bg-[#222222] dark:bg-[#222222]"
                      : "bg-[#222222] dark:bg-gray-900"
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={28} className="text-white" />
                </motion.div>
                <h3 className={`text-lg font-bold mb-1 ${
                  item.highlighted
                    ? "text-gray-900 dark:text-gray-900"
                    : "text-[#222222] dark:text-white"
                }`}>{item.title}</h3>
                <p className={`text-sm font-medium mb-2 ${
                  item.highlighted
                    ? "text-gray-800 dark:text-gray-800"
                    : "text-gray-900 dark:text-gray-300"
                }`}>{item.company}</p>
                <p className={`text-sm ${
                  item.highlighted
                    ? "text-gray-700 dark:text-gray-700"
                    : "text-gray-600 dark:text-gray-400"
                }`}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-[#222222] dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Interested in collaborating on a project? I'd love to hear about your ideas and how I can help bring them
              to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  className="bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
