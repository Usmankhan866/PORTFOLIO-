"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Check, Code, Clock, Users, Target, Zap, Shield } from "lucide-react"

const technologies = [
  { name: "React.js", icon: Code },
  { name: "Next.js", icon: Zap },
  { name: "Node.js", icon: Shield },
  { name: "Tailwind CSS", icon: Target },
]

const features = [
  {
    title: "Next.js Framework",
    description: "Leveraged Next.js for server-side rendering, optimal performance, and SEO benefits",
    icon: Zap,
  },
  {
    title: "Responsive Design",
    description: "Fully responsive layout that works seamlessly across all devices and screen sizes",
    icon: Target,
  },
  {
    title: "Interactive UI Components",
    description: "Custom React components for dynamic user interactions and real-time data visualization",
    icon: Code,
  },
  {
    title: "Multi-language Support",
    description: "Internationalization features to serve users from different regions worldwide",
    icon: Users,
  },
  {
    title: "API Integration",
    description: "Real-time data fetching from cryptocurrency APIs for up-to-date market information",
    icon: Shield,
  },
  {
    title: "User Authentication",
    description: "Secure login and registration system with JWT authentication and session management",
    icon: Shield,
  },
]

const processSteps = [
  {
    number: "01",
    title: "Requirements Analysis",
    description: "Conducted in-depth analysis of client requirements and target audience needs. Researched cryptocurrency platforms to identify best practices and opportunities for innovation.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Created wireframes and high-fidelity mockups focusing on user experience. Developed a clean, modern interface that balances visual appeal with functionality.",
  },
  {
    number: "03",
    title: "Frontend Development",
    description: "Built the frontend using React.js and Next.js for optimal performance. Implemented responsive design with Tailwind CSS to ensure compatibility across all devices.",
  },
  {
    number: "04",
    title: "Backend Integration",
    description: "Developed Node.js APIs and integrated with Java backend services. Implemented secure authentication and data handling protocols.",
  },
  {
    number: "05",
    title: "Testing & Deployment",
    description: "Conducted thorough testing across multiple browsers and devices. Deployed the application with CI/CD pipelines for seamless updates and maintenance.",
  },
]

const projectStats = [
  { label: "Timeline", value: "6 Weeks", icon: Clock },
  { label: "Technologies", value: "7+", icon: Code },
  { label: "Team Size", value: "Solo", icon: Users },
]

export default function BusinessWebProject() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-hero" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-hero)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Back to Projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Project Info */}
              <div>
                <motion.div
                  className="inline-block bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Web Application</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#222222] dark:text-white">
                  Memecoins Agents
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  A cutting-edge cryptocurrency platform built with Next.js and React, helping users navigate the world of meme coins with real-time data and intuitive interface.
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React.js", "Next.js", "Node.js", "Tailwind CSS", "JavaScript", "TypeScript", "Java"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="text-sm px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="http://memecoinsagent.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Visit Live Website <ExternalLink size={20} />
                  </a>
                </motion.div>
              </div>

              {/* Right - Project Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bussiness%20WEB-WZWk8NWWOfwihVB0U9UZNhAVr9huWS.png"
                    alt="Memecoins Agents Screenshot"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Project Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projectStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon size={24} className="text-white dark:text-gray-900" />
                  </motion.div>
                  <div className="text-3xl font-bold mb-2 text-[#222222] dark:text-white">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-overview" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 Q 50 25, 100 50 T 200 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-overview)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[#222222] dark:text-white text-center">
              Project Overview
            </h2>
            
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Memecoins Agents is a cutting-edge platform designed to help users navigate the world of cryptocurrency meme coins. Built with modern web technologies including React, Next.js, and Node.js, the site offers a seamless user experience with fast load times and responsive design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                The platform features an intuitive interface that makes it easy for both beginners and experienced traders to access information about various meme coins, market trends, and investment opportunities. The design incorporates cryptocurrency-themed visuals with a professional aesthetic.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Special attention was given to performance optimization and security, ensuring that users can access the platform reliably from any device. The site also implements internationalization features to serve a global audience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-features" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 Q 50 25, 100 50 T 200 50"
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
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-features)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#222222] dark:text-white">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powerful features that make this platform stand out
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={28} className="text-white dark:text-gray-900" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-[#222222] dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-process" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0 80 Q 50 55, 100 80 T 200 80"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-process)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#222222] dark:text-white">
              Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured approach from concept to deployment
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 text-[120px] font-bold text-gray-200 dark:text-gray-700 opacity-20 leading-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#222222] dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
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
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-cta)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-gray-900 dark:bg-white rounded-3xl p-12 md:p-16 text-center shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white dark:text-gray-900">
              Interested in a Similar Project?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you build a modern, high-performance web application with React and Next.js.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Get in Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-block bg-transparent border-2 border-white dark:border-gray-900 text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white transition-all"
                >
                  View More Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
