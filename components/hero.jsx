"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },

  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-[85vh] flex items-center bg-white dark:bg-gray-900 pt-32 pb-16 overflow-hidden">
      {/* Web Developer Wave Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.12]">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              {/* Layered Waves - Representing code flow and digital streams */}
              
              {/* Top wave layer with HTML/CSS tags */}
              <path
                d="M0,80 Q50,60 100,80 T200,80 T300,80 T400,80"
                stroke="#111827"
                strokeWidth="2"
                fill="none"
                opacity="1"
              />
              <text x="10" y="75" fontSize="9" fill="#111827" opacity="1" fontFamily="monospace">&lt;div&gt;</text>
              <text x="180" y="75" fontSize="9" fill="#111827" opacity="1" fontFamily="monospace">&lt;/&gt;</text>
              
              {/* Second wave layer with JavaScript */}
              <path
                d="M0,140 Q50,120 100,140 T200,140 T300,140 T400,140"
                stroke="#111827"
                strokeWidth="2"
                fill="none"
                opacity="0.9"
              />
              <text x="60" y="135" fontSize="9" fill="#111827" opacity="0.9" fontFamily="monospace">const</text>
              <text x="240" y="135" fontSize="9" fill="#111827" opacity="0.9" fontFamily="monospace">=&gt;</text>
              
              {/* Third wave layer with React/JSX */}
              <path
                d="M0,200 Q50,180 100,200 T200,200 T300,200 T400,200"
                stroke="#111827"
                strokeWidth="2"
                fill="none"
                opacity="0.8"
              />
              <text x="30" y="195" fontSize="9" fill="#111827" opacity="0.8" fontFamily="monospace">React</text>
              <text x="200" y="195" fontSize="9" fill="#111827" opacity="0.8" fontFamily="monospace">{`{}`}</text>
              
              {/* Fourth wave layer with CSS */}
              <path
                d="M0,260 Q50,240 100,260 T200,260 T300,260 T400,260"
                stroke="#111827"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
              <text x="90" y="255" fontSize="9" fill="#111827" opacity="0.7" fontFamily="monospace">.class</text>
              <text x="280" y="255" fontSize="9" fill="#111827" opacity="0.7" fontFamily="monospace">#id</text>
              
              {/* Fifth wave layer with Git/Terminal */}
              <path
                d="M0,320 Q50,300 100,320 T200,320 T300,320 T400,320"
                stroke="#111827"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <text x="130" y="315" fontSize="9" fill="#111827" opacity="0.6" fontFamily="monospace">git</text>
              <text x="320" y="315" fontSize="9" fill="#111827" opacity="0.6" fontFamily="monospace">npm</text>
              
              {/* Sixth wave layer with API/JSON */}
              <path
                d="M0,380 Q50,360 100,380 T200,380 T300,380 T400,380"
                stroke="#111827"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />
              <text x="50" y="375" fontSize="9" fill="#111827" opacity="0.5" fontFamily="monospace">API</text>
              <text x="250" y="375" fontSize="9" fill="#111827" opacity="0.5" fontFamily="monospace">JSON</text>
              
              {/* Floating code symbols */}
              <circle cx="120" cy="50" r="2" fill="#111827" opacity="0.6" />
              <circle cx="280" cy="110" r="2" fill="#111827" opacity="0.6" />
              <circle cx="160" cy="170" r="2" fill="#111827" opacity="0.6" />
              <circle cx="340" cy="230" r="2" fill="#111827" opacity="0.6" />
              <circle cx="80" cy="290" r="2" fill="#111827" opacity="0.6" />
              <circle cx="220" cy="350" r="2" fill="#111827" opacity="0.6" />
              
              {/* Code brackets floating */}
              <text x="150" y="100" fontSize="14" fill="#111827" opacity="0.5" fontFamily="monospace">{`{}`}</text>
              <text x="310" y="160" fontSize="14" fill="#111827" opacity="0.5" fontFamily="monospace">[ ]</text>
              <text x="40" y="220" fontSize="14" fill="#111827" opacity="0.5" fontFamily="monospace">( )</text>
              <text x="260" y="280" fontSize="14" fill="#111827" opacity="0.5" fontFamily="monospace">&lt;/&gt;</text>
              <text x="100" y="340" fontSize="14" fill="#111827" opacity="0.5" fontFamily="monospace">=&gt;</text>
              
              {/* Small decorative elements */}
              <rect x="200" y="45" width="20" height="2" fill="#111827" opacity="0.4" rx="1" />
              <rect x="350" y="125" width="25" height="2" fill="#111827" opacity="0.4" rx="1" />
              <rect x="70" y="185" width="18" height="2" fill="#111827" opacity="0.4" rx="1" />
              <rect x="300" y="245" width="22" height="2" fill="#111827" opacity="0.4" rx="1" />
              <rect x="140" y="305" width="20" height="2" fill="#111827" opacity="0.4" rx="1" />
              
              {/* Binary dots pattern */}
              <text x="20" y="30" fontSize="8" fill="#111827" opacity="0.4" fontFamily="monospace">101</text>
              <text x="360" y="90" fontSize="8" fill="#111827" opacity="0.4" fontFamily="monospace">010</text>
              <text x="190" y="150" fontSize="8" fill="#111827" opacity="0.4" fontFamily="monospace">110</text>
              <text x="330" y="210" fontSize="8" fill="#111827" opacity="0.4" fontFamily="monospace">011</text>
              <text x="110" y="270" fontSize="8" fill="#111827" opacity="0.4" fontFamily="monospace">100</text>
              <text x="270" y="330" fontSize="8" fill="#111827" opacity="0.4" fontFamily="monospace">101</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Text Content */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
  variants={itemVariants}
  className="text-6xl sm:text-7xl lg:text-6xl xl:text-7xl font-bold text-[#222222] dark:text-white leading-tight"
>
  Hi !!! 
  Here's Usman Khan
  <br /> Full Stack Web Developer
</motion.h1>


            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Transforming ideas into powerful web applications. I specialize in building modern, scalable, and user-friendly websites that drive results. Let's bring your vision to life.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                className="bg-gray-900 dark:bg-gray-700 text-white px-7 py-3.5 rounded-full font-medium text-base hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Get Started!
              </motion.button>
              
              <motion.button
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-gray-600 px-7 py-3.5 rounded-full font-medium text-base hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                See Case Studies
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section - Orbital Rings Design */}
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full aspect-square max-w-sm lg:max-w-md mx-auto">
              {/* Orbital Rings Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-700"></div>
                
                {/* Second ring */}
                <div className="absolute inset-[12%] rounded-full border-2 border-gray-300 dark:border-gray-700"></div>
                
                {/* Third ring */}
                <div className="absolute inset-[24%] rounded-full border-2 border-gray-300 dark:border-gray-700"></div>
                
                {/* Inner ring */}
                <div className="absolute inset-[36%] rounded-full border-2 border-gray-300 dark:border-gray-700"></div>
              </div>
              

              {/* Rotating Tech Icons on Outer Ring - Behind Image */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {/* HTML5 - Top */}
                <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-12 h-12">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/html5.png" alt="HTML5" width={48} height={48} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* CSS3 - Right Top */}
                <div className="absolute top-[15%] right-[10%] w-12 h-12">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/css3.png" alt="CSS3" width={48} height={48} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* JavaScript - Right */}
                <div className="absolute top-1/2 right-[2%] -translate-y-1/2 w-12 h-12">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/javascript.png" alt="JavaScript" width={48} height={48} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* React - Right Bottom */}
                <div className="absolute bottom-[15%] right-[10%] w-12 h-12">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/react.png" alt="React" width={48} height={48} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* Node.js - Bottom */}
                <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-12 h-12">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/nodejs.png" alt="Node.js" width={48} height={48} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* MongoDB - Left Bottom */}
                <div className="absolute bottom-[15%] left-[10%] w-12 h-12">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/mongodb.png" alt="MongoDB" width={48} height={48} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* Tailwind - Left */}
                <div className="absolute top-1/2 left-[2%] -translate-y-1/2 w-12 h-12">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/tailwind.png" alt="Tailwind" width={48} height={48} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* Next.js - Left Top */}
                <div className="absolute top-[15%] left-[10%] w-12 h-12">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/nextjs.png" alt="Next.js" width={48} height={48} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Second Ring - Rotating Icons (Slower) */}
              <motion.div
                className="absolute inset-[12%]"
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              >
                {/* TypeScript */}
                <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-10 h-10">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/typescript.png" alt="TypeScript" width={40} height={40} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* MySQL */}
                <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-10 h-10">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/mysql.png" alt="MySQL" width={40} height={40} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* Firebase */}
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-10 h-10">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/firebase.png" alt="Firebase" width={40} height={40} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>

                {/* Python */}
                <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-10 h-10">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}>
                    <Image src="/icons/python.png" alt="Python" width={40} height={40} className="drop-shadow-md" loading="lazy" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Hero Image Overlay - Centered on top */}
              <div className="absolute inset-[12%] z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="Business professionals collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}
