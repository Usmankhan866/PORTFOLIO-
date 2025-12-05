"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-[1400px] mx-auto">
        <nav className="bg-[#a8c5cd]/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-lg px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                B<span className="text-gray-600 dark:text-gray-300">iztar.</span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-12">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      pathname === item.href
                        ? "text-gray-800 dark:text-white bg-white/40 dark:bg-gray-700"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-white/20 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Theme toggle and Contact button */}
            <div className="hidden lg:flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-white/30 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
              <Link 
                href="/contact" 
                className="bg-gray-800 dark:bg-gray-700 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors shadow-md"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-3">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-white/30 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
              <button
                type="button"
                className="text-gray-700 dark:text-gray-200 p-2"
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
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#a8c5cd]/95 dark:bg-gray-800/95 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                    pathname === item.href
                      ? "text-gray-800 dark:text-white bg-white/40 dark:bg-gray-700"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-white/20 dark:hover:bg-gray-700/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block py-3 px-4 mt-3 text-center bg-[#222222] dark:bg-[#222222] text-white rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
