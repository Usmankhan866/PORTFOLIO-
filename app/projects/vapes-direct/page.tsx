import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"

export default function VapesDirectProject() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 dark:bg-black">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/projects" className="inline-flex items-center text-[#0ebab1] hover:underline mb-8">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Vapes Direct</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A comprehensive e-commerce platform for vaping products built on Shopify
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                Shopify
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                Liquid
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                JavaScript
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                HTML/CSS
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                Shopify Apps
              </span>
            </div>

            <div className="relative h-[500px] w-full mb-12 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vapes%20Direct-cWRJDS4z1OX8rhVN1Q3K3HzJO4jC7N.png"
                alt="Vapes Direct Screenshot"
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
                  Vapes Direct is a specialized e-commerce platform built on Shopify, offering a wide range of vaping
                  products including e-juices, devices, pods, and accessories. The store features a clean, user-friendly
                  interface designed to help customers easily find and purchase products.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The project involved customizing a Shopify theme to match the brand's identity and target audience,
                  with a focus on product categorization, filtering options, and a streamlined checkout process. Special
                  attention was given to product presentation, with high-quality images and detailed descriptions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The site includes advanced e-commerce features such as inventory management, discount codes, shipping
                  options specific to Pakistan, and integration with local payment gateways. The platform is optimized
                  for both desktop and mobile users, ensuring a seamless shopping experience across all devices.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Custom Shopify Theme</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Tailored Shopify theme with custom sections and layouts specific to vaping products
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Advanced Product Categorization</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Intuitive category structure with custom collections for different product types
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Age Verification System</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Implemented age verification to ensure compliance with regulations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Local Payment Integration</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Integration with Pakistan-specific payment methods and cash on delivery options
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Product Comparison Tool</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Custom feature allowing customers to compare different vaping products
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#0ebab1] mt-1 shrink-0" />
                    <div>
                      <span className="font-medium">Responsive Design</span>
                      <p className="text-gray-600 dark:text-gray-400">
                        Mobile-optimized shopping experience with touch-friendly navigation
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
                      <p className="font-medium">Vapes Direct</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Timeline</h4>
                      <p className="font-medium">6 Weeks</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Platform</h4>
                      <p className="font-medium">Shopify</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">Key Shopify Apps</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                        <li>Product Reviews</li>
                        <li>Inventory Management</li>
                        <li>SEO Optimizer</li>
                        <li>Age Verification</li>
                        <li>Advanced Shipping Rules</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://vapesdirect.pk/"
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
                  Conducted detailed analysis of client requirements and target market. Researched vaping industry
                  standards and best practices for e-commerce in this niche.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Theme Selection & Customization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Selected an appropriate Shopify theme as a foundation and extensively customized it to match the
                  brand's identity and specific product requirements.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Custom Functionality Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Developed custom Liquid templates and JavaScript functionality to enhance the standard Shopify
                  features. Created specialized product pages with detailed specifications.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">App Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Selected and integrated essential Shopify apps for enhanced functionality. Customized app settings and
                  appearance to maintain consistent branding.
                </p>
              </div>
              <div className="relative pl-8 border-l border-gray-300 dark:border-gray-700">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#0ebab1] -translate-x-2"></div>
                <h3 className="text-xl font-semibold mb-2">Testing & Launch</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Conducted thorough testing of all store functionality including checkout process, payment methods, and
                  responsive design. Provided training for store management and launched with a marketing campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0ebab1]/10 to-white dark:from-[#0ebab1]/10 dark:to-black">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Interested in a Shopify store?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how I can help you create a custom Shopify solution for your business.
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
