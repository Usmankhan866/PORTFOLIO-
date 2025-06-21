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
      <section className="pt-32 pb-8 md:pt-40 md:pb-10 dark:bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#0ebab1]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#22cec5]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            ref={heroRef}
            className="max-w-3xl mx-auto text-center mb-6"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300">
              Passionate web developer with expertise in creating custom solutions that drive business growth
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-[#0ebab1]/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-3 ${stat.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={24} />
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black relative overflow-hidden">
        <div className="container">
          <motion.div
            ref={journeyRef}
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isJourneyInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-3xl font-bold mb-6"
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
                    className="text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="relative h-[500px] mt-8 rounded-lg overflow-hidden" variants={itemVariants}>
              {/* Enhanced fade effects */}
              <motion.div
                className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10 dark:from-black"
                initial={{ opacity: 0 }}
                animate={isJourneyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10 dark:from-black"
                initial={{ opacity: 0 }}
                animate={isJourneyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 dark:from-black"
                initial={{ opacity: 0 }}
                animate={isJourneyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 dark:from-black"
                initial={{ opacity: 0 }}
                animate={isJourneyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              />

              <motion.div
                className="relative w-full h-full"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={isJourneyInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
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

      <section className="py-16 dark:bg-black">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isExpertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            My Expertise
          </motion.h2>

          <motion.div
            ref={expertiseRef}
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isExpertiseInView ? "visible" : "hidden"}
          >
            <motion.div
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <ul className="space-y-3">
                {[
                  "Full-stack development with MERN stack",
                  "Responsive and mobile-first design",
                  "E-commerce development (Shopify, WooCommerce)",
                  "CMS implementation and customization",
                  "API development and integration",
                  "Database design and optimization",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={skillVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isExpertiseInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    >
                      <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                    </motion.div>
                    <span className="dark:text-gray-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Professional Approach</h3>
              <ul className="space-y-3">
                {[
                  "User-centered design thinking",
                  "Agile development methodology",
                  "Clear communication and collaboration",
                  "Problem-solving mindset",
                  "Attention to detail and quality",
                  "Continuous learning and improvement",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    variants={skillVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isExpertiseInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                    >
                      <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                    </motion.div>
                    <span className="dark:text-gray-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Experience & Education
          </motion.h2>

          <motion.div
            ref={experienceRef}
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isExperienceInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Briefcase size={24} className="text-primary" />
                </motion.div>
                Work Experience
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Senior Web Developer",
                    company: "Devmerce - Present",
                    description:
                      "Leading web development projects for enterprise clients, focusing on scalable and maintainable solutions.",
                  },
                  {
                    title: "Web Developer",
                    company: "Web Dev Company",
                    description:
                      "Developed responsive websites and e-commerce platforms for small to medium-sized businesses.",
                  },
                  {
                    title: "Freelancer",
                    company: "Upwork and Airtasker",
                    description: "Created user interfaces and implemented frontend functionality for web applications.",
                  },
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l border-gray-300 dark:border-gray-700"
                    variants={timelineVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"
                      initial={{ scale: 0 }}
                      animate={isExperienceInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                      whileHover={{ scale: 1.5 }}
                    />
                    <h4 className="text-lg font-semibold">{job.title}</h4>
                    <p className="text-[#0ebab1]">{job.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <GraduationCap size={24} className="text-primary" />
                </motion.div>
                Education
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Bachelor's in Software Engineering",
                    company: "University",
                    description: "Specialized in web technologies and software engineering.",
                  },
                  {
                    title: "ICS",
                    company: "Gordon College Rwp",
                    description: "Focused on programming, database management, and web development.",
                  },
                  {
                    title: "Professional Certification",
                    company: "Intern at Codexsolution",
                    description: "Various certifications in web technologies, including MongoDB, React, and AWS.",
                  },
                ].map((education, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l border-gray-300 dark:border-gray-700"
                    variants={timelineVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"
                      initial={{ scale: 0 }}
                      animate={isExperienceInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.4 }}
                      whileHover={{ scale: 1.5 }}
                    />
                    <h4 className="text-lg font-semibold">{education.title}</h4>
                    <p className="text-[#0ebab1]">{education.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{education.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 dark:bg-black relative overflow-hidden">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0ebab1]/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
