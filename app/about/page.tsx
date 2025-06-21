import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Briefcase, GraduationCap } from "lucide-react"

export default function About() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-10 dark:bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate web developer with expertise in creating custom solutions that drive business growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With over 3 years of experience in web development, I've had the privilege of working with businesses
                across various industries to create impactful digital solutions. My journey began with a passion for
                coding and problem-solving, which has evolved into a career focused on delivering exceptional web
                experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js) and have extensive experience
                with content management systems like WordPress, e-commerce platforms like Shopify, and business
                solutions like Odoo.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My approach combines technical expertise with a deep understanding of user experience and business
                objectives to create websites that not only look great but also perform exceptionally well.
              </p>
            </div>
            <div className="relative h-[500px] mt-8 rounded-lg overflow-hidden">
              {/* Top fade */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10 dark:from-black"></div>

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10 dark:from-black"></div>

              {/* Left fade */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 dark:from-black"></div>

              {/* Right fade */}
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 dark:from-black"></div>

              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mypic.jpg-AOcmBlV6G41G6JrZZ5XzlIcY2J2GrN.jpeg"
                alt="Professional developer"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">My Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
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
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                    <span className="dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
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
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                    <span className="dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience & Education</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase size={24} className="text-primary" /> Work Experience
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                  <h4 className="text-lg font-semibold">Senior Web Developer</h4>
                  <p className="text-[#0ebab1]">Devmerce - Present</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Leading web development projects for enterprise clients, focusing on scalable and maintainable
                    solutions.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                  <h4 className="text-lg font-semibold">Web Developer</h4>
                  <p className="text-[#0ebab1]">Web Dev Company</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Developed responsive websites and e-commerce platforms for small to medium-sized businesses.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                  <h4 className="text-lg font-semibold">Freelancer</h4>
                  <p className="text-[#0ebab1]">Upwork and Airtasker</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Created user interfaces and implemented frontend functionality for web applications.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap size={24} className="text-primary" /> Education
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                  <h4 className="text-lg font-semibold">Bachelor's in Software Engineering</h4>
                  <p className="text-[#0ebab1]">University</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Specialized in web technologies and software engineering.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                  <h4 className="text-lg font-semibold">ICS</h4>
                  <p className="text-[#0ebab1]">Gordon College Rwp</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Focused on programming, database management, and web development.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                  <h4 className="text-lg font-semibold">Professional Certification</h4>
                  <p className="text-[#0ebab1]">Intern at Codexsolution</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Various certifications in web technologies, including MongoDB, React, and AWS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-black">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on a project? I'd love to hear about your ideas and how I can help bring them
              to life.
            </p>
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
