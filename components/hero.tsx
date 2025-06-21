"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0ebab1]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#22cec5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#0ebab1]/5 to-[#22cec5]/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video background */}
        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: isVideoLoaded ? 0.4 : 0,
            scale: isVideoLoaded ? 1 : 1.1,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="object-cover w-full h-full dark:opacity-20"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </motion.video>

        {/* Fallback image while video loads */}
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: isVideoLoaded ? 0 : 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center dark:opacity-20"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        ></motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white dark:from-black/70 dark:via-black/50 dark:to-black"></div>
      </div>

      <div className="container relative z-10 mt-16 md:mt-0">
        <motion.div className="max-w-3xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.span variants={itemVariants} className="text-lg md:text-xl text-[#0ebab1] font-medium mb-2 block">
            Welcome to my portfolio!
          </motion.span>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi! Its Me{" "}
            <motion.span
              className="gradient-text relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Muhammad Usman
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#0ebab1]/20 to-[#22cec5]/20 rounded-lg blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </motion.span>{" "}
            the Web Developer
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            I build custom web solutions that help businesses thrive in the digital landscape
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link href="/contact" className="btn-primary text-center inline-block">
                Get In Touch
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link href="/projects" className="btn-outline text-center inline-block">
                View My Work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={statsVariants} className="mt-16 flex flex-wrap gap-8">
            {[
              { text: "3+ Years Experience", delay: 0 },
              { text: "15+ Projects Completed", delay: 0.2 },
              { text: "100% Client Satisfaction", delay: 0.4 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + stat.delay, duration: 0.6 }}
              >
                <motion.div
                  className="h-2 w-2 rounded-full bg-[#0ebab1]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: stat.delay,
                  }}
                />
                <span className="text-gray-600 dark:text-gray-300">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-4 h-4 bg-[#0ebab1] rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-6 h-6 bg-[#22cec5] rounded-full opacity-40"
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  )
}
