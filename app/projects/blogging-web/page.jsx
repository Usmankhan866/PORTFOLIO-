import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"

export default function BloggingWebProject() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 dark:bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/projects" className="inline-flex items-center text-[#0ebab1] hover:underline mb-8">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Devmerce Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A modern, responsive WordPress blog focused on technology and business news
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                WordPress
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                PHP
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                CSS
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                JavaScript
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                SEO
              </span>
            </div>

            <div className="relative h-[500px] w-full mb-12 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blogging%20WEB-rkxe8jlrRdsLeJlgl2ylJZypLvYPlx.png"
                alt="Devmerce Blog Screenshot"
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
                  Devmerce Blog is a cutting-edge WordPress-based news platform that delivers the latest updates in
                  technology, business, and finance. The site features a clean, responsive design optimized for both
                  desktop and mobile users, with a focus on readability and user engagement.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The blog implements advanced WordPress features including custom post types, taxonomies, and a
                  carefully curated homepage that highlights trending stories. The design incorporates modern UI
                  elements with attention to typography and content hierarchy.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Special attention was given to performance optimization, ensuring fast load times and a smooth
                  browsing experience even with media-rich content. The site also implements comprehensive SEO
                  strategies to maximize visibility in search engines.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Custom WordPress Theme</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Developed a bespoke WordPress theme tailored to the specific needs of a news/blog website
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Advanced Category System</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Implemented a sophisticated category and tagging system for optimal content organization
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Trending Articles Section</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Created a dynamic trending section that automatically highlights popular content
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Social Media Integration</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Seamless sharing capabilities and social media feed integration
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Newsletter Subscription</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Email capture and newsletter distribution system to build reader engagement
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">SEO Optimization</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Comprehensive SEO setup with XML sitemaps, schema markup, and meta tag optimization
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
                      <p className="font-medium">Devmerce</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Timeline</h4>
                      <p className="font-medium">4 Weeks</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Platform</h4>
                      <p className="font-medium">WordPress</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Key Plugins</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                        <li>Yoast SEO</li>
                        <li>WP Rocket</li>
                        <li>Advanced Custom Fields</li>
                        <li>Elementor Pro</li>
                        <li>WP Forms</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://devmerce.blog/"
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
                <h3 className="text-xl font-semibold mb-2">Planning & Research</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Started with comprehensive research of leading technology blogs to identify best practices and user
                  expectations. Created detailed wireframes and content strategy documents.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Design & Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Developed a custom WordPress theme with a focus on typography, readability, and content hierarchy.
                  Implemented responsive design principles to ensure optimal viewing across all devices.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Plugin Integration & Customization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Selected and configured essential plugins for SEO, performance, security, and content management.
                  Customized plugin functionality to meet specific project requirements.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Implemented caching, image optimization, and code minification to ensure fast load times. Conducted
                  thorough testing across multiple browsers and devices.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Launch & Maintenance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Provided comprehensive documentation and training for content management. Established ongoing
                  maintenance protocols including regular updates, backups, and security monitoring.
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
              Let's discuss how I can help you create a custom WordPress solution for your business.
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
