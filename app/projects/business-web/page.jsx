import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"

export default function BusinessWebProject() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 dark:bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/projects" className="inline-flex items-center text-[#0ebab1] hover:underline mb-8">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Memecoins Agents</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A modern cryptocurrency platform built with Next.js and React
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                React.js
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                Next.js
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                Node.js
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                Tailwind CSS
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                JavaScript
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                HTML/CSS
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                Java
              </span>
            </div>

            <div className="relative h-[500px] w-full mb-12 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bussiness%20WEB-WZWk8NWWOfwihVB0U9UZNhAVr9huWS.png"
                alt="Memecoins Agents Screenshot"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Memecoins Agents is a cutting-edge platform designed to help users navigate the world of
                  cryptocurrency meme coins. Built with modern web technologies including React, Next.js, and Node.js,
                  the site offers a seamless user experience with fast load times and responsive design.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The platform features an intuitive interface that makes it easy for both beginners and experienced
                  traders to access information about various meme coins, market trends, and investment opportunities.
                  The design incorporates cryptocurrency-themed visuals with a professional aesthetic.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Special attention was given to performance optimization and security, ensuring that users can access
                  the platform reliably from any device. The site also implements internationalization features to serve
                  a global audience.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Next.js Framework</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Leveraged Next.js for server-side rendering and optimal performance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Responsive Design</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Fully responsive layout that works seamlessly across all devices and screen sizes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Interactive UI Components</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Custom React components for dynamic user interactions and data visualization
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Multi-language Support</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Internationalization features to serve users from different regions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">API Integration</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Real-time data fetching from cryptocurrency APIs for up-to-date information
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">User Authentication</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Secure login and registration system with JWT authentication
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <div className="card sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Client</h4>
                      <p className="font-medium">Memecoins Agents</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Timeline</h4>
                      <p className="font-medium">6 Weeks</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Tech Stack</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript/TypeScript</li>
                        <li>Java (Backend services)</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <a
                        href="http://memecoinsagent.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center flex items-center justify-center gap-2"
                      >
                        Visit Website <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Development Process</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Conducted in-depth analysis of client requirements and target audience needs. Researched
                  cryptocurrency platforms to identify best practices and opportunities for innovation.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Created wireframes and high-fidelity mockups focusing on user experience. Developed a clean, modern
                  interface that balances visual appeal with functionality.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built the frontend using React.js and Next.js for optimal performance. Implemented responsive design
                  with Tailwind CSS to ensure compatibility across all devices.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Backend Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Developed Node.js APIs and integrated with Java backend services. Implemented secure authentication
                  and data handling protocols.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Testing & Deployment</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Conducted thorough testing across multiple browsers and devices. Deployed the application with CI/CD
                  pipelines for seamless updates and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0ebab1]/10 to-white dark:from-[#0ebab1]/10 dark:to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Interested in a similar project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how I can help you build a modern web application with React and Next.js.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
