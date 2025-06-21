"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_White_Modern_Letter_U_Logo_-removebg-preview-KmgjWzhZkqwtdYepi0B3FgBsT3DgTC.png"
              alt="Usman Khan Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#0ebab1] dark:hover:text-[#0ebab1] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-[#0ebab1]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <Link href="/contact" className="btn-primary">
            Let&apos;s Talk Business
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-[#0ebab1]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            type="button"
            className="text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md">
          <div className="space-y-1 px-4 py-4 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#0ebab1] dark:hover:text-[#0ebab1]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-3 mt-4 text-center btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk Business
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
