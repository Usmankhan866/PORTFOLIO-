"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="bg-[#222222] dark:bg-[#222222] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        {/* Newsletter Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Let's Work Together. Get In Touch!
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="flex-1 px-4 py-2.5 rounded-full bg-[#3f4654] dark:bg-[#3f4654] border border-gray-600 dark:border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#f4f27e] hover:bg-[#e8e66f] text-gray-900 font-semibold rounded-full transition-colors text-sm whitespace-nowrap"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="dark:bg-[#222222] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Contact</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Email: usman@webdev.com<br />
              Available for freelance projects
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Custom Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  API Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Customer Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#f4f27e] rounded flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">U</span>
              </div>
              <span className="font-bold text-xl">Usman Khan</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm text-center md:text-left order-3 md:order-2">
            © 2024 Usman Khan. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 order-2 md:order-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#f4f27e] flex items-center justify-center hover:bg-[#e8e66f] transition-colors"
            >
              <Linkedin size={18} className="text-gray-900" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#f4f27e] flex items-center justify-center hover:bg-[#e8e66f] transition-colors"
            >
              <Facebook size={18} className="text-gray-900" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#f4f27e] flex items-center justify-center hover:bg-[#e8e66f] transition-colors"
            >
              <Instagram size={18} className="text-gray-900" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-[#f4f27e] flex items-center justify-center hover:bg-[#e8e66f] transition-colors"
            >
              <Twitter size={18} className="text-gray-900" />
            </a>
          </div>
        </div>
      </div>

      {/* Phone and Email Section */}
      
    </footer>
  )
}
