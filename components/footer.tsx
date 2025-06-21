import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_White_Modern_Letter_U_Logo_-removebg-preview-KmgjWzhZkqwtdYepi0B3FgBsT3DgTC.png"
                alt="Usman Khan Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Crafting exceptional digital experiences with cutting-edge technology and creative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                <strong className="text-gray-800 dark:text-gray-300">Email:</strong> Usmankhan86622@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <strong className="text-gray-800 dark:text-gray-300">Phone:</strong> 03150431096
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <strong className="text-gray-800 dark:text-gray-300">Location:</strong> Islamabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Muhammad Usman Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
