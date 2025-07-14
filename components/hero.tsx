"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically imported Lottie animation replaces static image
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
import pulseAnimation from "@/public/animations/subtle-pulse.json"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    const handler = () => setVideoLoaded(true)
    vid.addEventListener("loadeddata", handler)
    return () => vid.removeEventListener("loadeddata", handler)
  }, [])

  const mainVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const btnVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 left-8 w-64 h-64 bg-[#0ebab1]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-8 w-80 h-80 bg-[#22cec5]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Video + Gradient overlay */}
      <div className="absolute inset-0 -z-20">
        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0.0, scale: 1.05 }}
          animate={{ opacity: videoLoaded ? 0.3 : 0, scale: videoLoaded ? 1 : 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="object-cover w-full h-full"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </motion.video>
        {!videoLoaded && (
          <div className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-10" style={{ backgroundImage: "url(/images/hero-fallback.jpg)" }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white dark:from-black/70 dark:via-black/50 dark:to-black" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={mainVariants}
        >
          <motion.span variants={itemVariants} className="text-lg md:text-xl font-medium text-[#0ebab1]">
            Welcome to my portfolio!
          </motion.span>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hey, I'm{" "}
            <motion.span
              className="relative inline-block gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Muhammad Usman
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0ebab1]/20 to-[#22cec5]/20 blur-lg rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </motion.span>{" "}
            — Web Developer
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            I craft bespoke web solutions that elevate businesses online.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover="hover" whileTap="tap" variants={btnVariants}>
              <Link href="/contact" className="btn-primary inline-block px-8 py-3">
                Get In Touch
              </Link>
            </motion.div>
            <motion.div whileHover="hover" whileTap="tap" variants={btnVariants}>
              <Link href="/projects" className="btn-outline inline-block px-8 py-3">
                View My Work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 grid sm:flex justify-center gap-8 text-center">
            {["3+ Years Experience", "15+ Projects Completed", "100% Client Satisfaction"].map((txt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + i * 0.2, duration: 0.6 }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
              >
                <motion.div
                  className="h-2 w-2 rounded-full bg-[#0ebab1]"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
                {txt}
              </motion.div>
            ))}
          </motion.div>

          {/* Lottie-Based Foreground Animation */}
          <motion.div className="mx-auto mt-16 w-48 h-48">
            <Lottie animationData={pulseAnimation} loop autoplay />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
