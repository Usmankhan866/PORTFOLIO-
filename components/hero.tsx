"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

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

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`object-cover w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? "opacity-40 dark:opacity-20" : "opacity-0"}`}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Fallback image while video loads */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-40 dark:opacity-20"}`}
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white dark:from-black/70 dark:via-black/50 dark:to-black"></div>
      </div>

      <div className="container relative z-10 mt-16 md:mt-0">
        <div className="max-w-3xl">
          <span className="text-lg md:text-xl text-[#0ebab1] font-medium mb-2 block">Welcome to my portfolio!</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi! Its Me <span className="gradient-text">Muhammad Usman</span> the Web Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            I build custom web solutions that help businesses thrive in the digital landscape
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-center">
              Get In Touch
            </Link>
            <Link href="/projects" className="btn-outline text-center">
              View My Work
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#0ebab1] animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-300">3+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#0ebab1] animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-300">15+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#0ebab1] animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-300">100% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
