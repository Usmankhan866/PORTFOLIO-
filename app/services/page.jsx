"use client"

import { motion } from "framer-motion"
import { Code, Layout, ShoppingBag, Database, Globe, Server, Smartphone, Palette, Search, Zap, CheckCircle, Rocket, Target, Award } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Custom Web Development",
    description:
      "Build powerful, scalable web applications using modern technologies like React, Next.js, and Node.js. I create custom solutions that are tailored to your specific business requirements, ensuring high performance and exceptional user experiences.",
    icon: Code,
    features: ["MERN Stack Development", "Progressive Web Apps", "Single Page Applications", "Real-time Applications"],
  },
  {
    title: "WordPress Development",
    description:
      "Create stunning WordPress websites with custom themes, plugins, and integrations. From simple blogs to complex enterprise solutions, I leverage WordPress's flexibility to deliver powerful, easy-to-manage websites.",
    icon: Layout,
    features: ["Custom Theme Development", "Plugin Development", "WooCommerce Setup", "WordPress Optimization"],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Launch successful online stores with Shopify, WooCommerce, or custom e-commerce platforms. I build conversion-optimized stores with seamless checkout experiences, payment gateway integration, and inventory management.",
    icon: ShoppingBag,
    features: ["Shopify Development", "WooCommerce Stores", "Payment Integration", "Inventory Management"],
  },
  {
    title: "Database Design & Management",
    description:
      "Design and implement efficient, scalable database architectures using MongoDB, MySQL, PostgreSQL, or Firebase. I ensure your data is structured optimally for performance, security, and easy maintenance.",
    icon: Database,
    features: ["MongoDB & SQL Design", "Database Optimization", "Data Migration", "Backup Solutions"],
  },
  {
    title: "Web Performance Optimization",
    description:
      "Boost your website's speed and performance with comprehensive optimization techniques. I optimize code, compress assets, implement caching strategies, and fine-tune server configurations for lightning-fast load times.",
    icon: Globe,
    features: ["Speed Optimization", "Image Compression", "Code Minification", "CDN Integration"],
  },
  {
    title: "API Development & Integration",
    description:
      "Develop robust RESTful and GraphQL APIs to connect your applications and services. I create well-documented, secure APIs with proper authentication, rate limiting, and error handling.",
    icon: Server,
    features: ["RESTful API Development", "GraphQL Implementation", "Third-party Integration", "API Documentation"],
  },
  {
    title: "Responsive Web Design",
    description:
      "Create beautiful, mobile-first websites that look perfect on all devices and screen sizes. I design responsive layouts that adapt seamlessly, ensuring consistent user experience across desktop, tablet, and mobile.",
    icon: Smartphone,
    features: ["Mobile-First Design", "Cross-Device Testing", "Touch-Friendly Interfaces", "Adaptive Layouts"],
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive, user-centered interfaces that delight users and drive engagement. I combine aesthetics with functionality, conducting user research and creating wireframes to ensure optimal user experiences.",
    icon: Palette,
    features: ["User Research", "Wireframing & Prototyping", "Interface Design", "Usability Testing"],
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility in search engines with comprehensive SEO strategies. I implement technical SEO, optimize content, improve site structure, and build quality backlinks to drive organic traffic.",
    icon: Search,
    features: ["Technical SEO", "On-Page Optimization", "Schema Markup", "SEO Audits"],
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Keep your website secure, up-to-date, and running smoothly with ongoing maintenance. I provide regular updates, security patches, performance monitoring, and 24/7 support to ensure your site's reliability.",
    icon: Zap,
    features: ["Regular Updates", "Security Monitoring", "Performance Tracking", "24/7 Support"],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "I start by understanding your business goals, target audience, and project requirements. Through detailed discussions, I create a comprehensive project plan with clear milestones and deliverables.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes and interactive prototypes to visualize the user interface and experience. I work closely with you to refine the design until it perfectly matches your vision.",
  },
  {
    number: "03",
    title: "Development",
    description: "Building your solution using modern technologies and best practices. I follow agile methodology with regular updates, milestone reviews, and continuous integration to ensure quality.",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing across devices, browsers, and scenarios to ensure flawless functionality. I conduct performance tests, security audits, and user acceptance testing before launch.",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description: "Smooth deployment to production with proper monitoring and rollback strategies. I ensure your website goes live without issues and perform post-launch optimization.",
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your website secure and performing optimally. I provide training, documentation, and continuous improvements based on analytics.",
  },
]

const whyChooseMe = [
  {
    icon: Award,
    title: "5+ Years Experience",
    description: "Extensive experience in modern web technologies and frameworks",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Efficient development process with timely project delivery",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is my priority with personalized solutions",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous testing and attention to detail in every project",
  },
]

export default function Services() {
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
              <pattern id="wave-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#222222] dark:text-white">
              Professional Web Development Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Comprehensive web solutions designed to elevate your business. From custom development to e-commerce platforms, I deliver excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-2" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
            <rect width="100%" height="100%" fill="url(#wave-pattern-2)" />
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
              What I Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon size={32} className="text-white dark:text-gray-900" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-[#222222] dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle size={16} className="text-gray-900 dark:text-white mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-3" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 Q 50 25, 100 50 T 200 50"
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
            <rect width="100%" height="100%" fill="url(#wave-pattern-3)" />
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
              My Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A structured approach to deliver exceptional results
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
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative overflow-hidden group"
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

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-4" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 Q 50 25, 100 50 T 200 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900 dark:text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern-4)" />
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
              Why Choose Me?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What sets me apart from other developers
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseMe.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center group"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gray-900 dark:bg-white flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={32} className="text-white dark:text-gray-900" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-[#222222] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
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
              <pattern id="wave-pattern-5" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
            <rect width="100%" height="100%" fill="url(#wave-pattern-5)" />
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. Get a free consultation today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-block bg-transparent border-2 border-white dark:border-gray-900 text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white transition-all"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
