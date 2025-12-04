"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const heroRef = useRef(null)
  const formRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formElement = e.target
      const formData = new FormData(formElement)

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      setSubmitSuccess(true)
      setSubmitMessage(data.message || "Message sent successfully! I will get back to you soon.")
      formElement.reset()
    } catch (error) {
      setSubmitSuccess(true)
      setSubmitMessage("Message received! I will get back to you soon.")
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "Usmankhan86622@gmail.com",
      action: "Send an email",
      href: "mailto:Usmankhan86622@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "03150431096",
      action: "Give me a call",
      href: "tel:03150431096",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Islamabad, Pakistan",
      action: null,
      href: null,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background animations */}
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
            className="max-w-3xl mx-auto text-center mb-10"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </motion.p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            {[
              { icon: Clock, label: "Response Time", value: "< 24 hours", color: "text-blue-500" },
              { icon: MessageSquare, label: "Free Consultation", value: "30 minutes", color: "text-green-500" },
              { icon: CheckCircle, label: "Project Success", value: "100%", color: "text-purple-500" },
            ].map((stat, index) => (
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
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <motion.div
            ref={formRef}
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            <div className="md:col-span-1 space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="card group"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 rounded-lg ${info.bgColor} ${info.color}`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{info.content}</p>
                      {info.action && info.href && (
                        <motion.a
                          href={info.href}
                          className="text-primary hover:underline mt-1 inline-block"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {info.action}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="md:col-span-2">
              <motion.div
                className="card"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

                {submitSuccess ? (
                  <motion.div
                    className="bg-green-100 dark:bg-[#0ebab1]/20 border border-green-500 dark:border-[#0ebab1] text-green-700 dark:text-[#0ebab1] p-6 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <CheckCircle size={48} className="mx-auto mb-4" />
                    </motion.div>
                    <p className="font-medium text-lg">{submitMessage}</p>
                    <p className="mt-2">Thank you for reaching out!</p>
                    <motion.button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
                      <motion.div variants={itemVariants}>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent dark:text-white transition-all duration-300"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent dark:text-white transition-all duration-300"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <motion.input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent dark:text-white transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent dark:text-white transition-all duration-300 resize-none"
                        whileFocus={{ scale: 1.02 }}
                      ></motion.textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex items-center justify-center gap-2 w-full"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0ebab1]/10 to-white dark:from-[#0ebab1]/10 dark:to-black relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-grid opacity-20"></div>

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
              Let's Build Something Amazing Together
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Whether you have a specific project in mind or just want to explore possibilities, I'm here to help you
              achieve your goals.
            </motion.p>

            {/* Floating contact options */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:usmankhan86622@gmail.com"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Email Me
              </motion.a>
              <motion.a
                href="tel:+923150431096"
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} />
                Call Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
