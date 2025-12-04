import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Chatbot from "../components/chatbot"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Muhammad Usman Khan | Web Development Solutions",
  description:
    "Custom web development solutions using MERN stack, WordPress, Shopify, Odoo, Wix and more.",
  icons: {
    icon: {
      url:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_White_Modern_Letter_U_Logo_-removebg-preview%20%281%29-RJUEV3S3NtssWEH7ESQpF8Vp9kQXVj.png",
      type: "image/png",
      sizes: "32x32",
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_White_Modern_Letter_U_Logo_-removebg-preview%20%281%29-RJUEV3S3NtssWEH7ESQpF8Vp9kQXVj.png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="dark:bg-black dark:text-white">{children}</main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
