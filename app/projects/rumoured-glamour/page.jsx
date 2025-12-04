import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"

export default function RumouredGlamourProject() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 dark:bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/projects" className="inline-flex items-center text-[#0ebab1] hover:underline mb-8">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rumoured Glamour</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A premium beauty and wellness e-commerce store built with modern web technologies
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                React.js
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                Next.js
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rumouredglamour-10GnMjMtbNxQUZ5U97GtVnREfM8NVO.png"
                alt="Rumoured Glamour Screenshot"
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
                  Rumoured Glamour is a sophisticated e-commerce platform specializing in premium beauty and wellness
                  products. Built with React and Next.js, the site offers an elegant shopping experience with a focus on
                  high-quality visuals and seamless user interactions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The design emphasizes the luxury aspect of the brand, with careful attention to typography, spacing,
                  and imagery. The minimalist aesthetic allows the products to take center stage while maintaining a
                  cohesive and elegant brand identity throughout the site.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The platform includes comprehensive e-commerce functionality including product categorization,
                  filtering, user accounts, wishlist features, and a streamlined checkout process. Performance
                  optimization ensures fast load times and smooth transitions between pages.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Responsive Design</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Fully responsive layout that adapts seamlessly to all devices and screen sizes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Advanced Product Filtering</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Sophisticated filtering and sorting options to help customers find products quickly
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Integrated Payment Gateway</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Secure payment processing with multiple payment options
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">User Account Management</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Comprehensive user profiles with order history, saved addresses, and wishlist functionality
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Product Recommendations</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Intelligent product recommendation system based on browsing history and purchase patterns
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">High-Performance Image Loading</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Optimized image loading and caching for fast page rendering
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
                      <p className="font-medium">Rumoured Glamour</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Timeline</h4>
                      <p className="font-medium">8 Weeks</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Tech Stack</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Java (Backend services)</li>
                        <li>RESTful APIs</li>
                        <li>Stripe Payment Gateway</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://rumouredglamourstore.com/"
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
                <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Conducted in-depth analysis of the beauty e-commerce market and target audience. Created detailed
                  wireframes and user journey maps to plan the optimal shopping experience.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Developed a sophisticated design system with a focus on elegance and usability. Created high-fidelity
                  mockups for all key pages and user interactions.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built the frontend using React.js and Next.js for optimal performance and SEO. Implemented responsive
                  design with Tailwind CSS to ensure a consistent experience across all devices.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">E-commerce Functionality</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Integrated product catalog, shopping cart, and checkout functionality. Implemented secure payment
                  processing with Stripe and user account management.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Testing & Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Conducted comprehensive testing across multiple devices and browsers. Optimized performance for fast
                  page loads and smooth user experience.
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
              Let's discuss how I can help you build a premium e-commerce experience for your brand.
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
