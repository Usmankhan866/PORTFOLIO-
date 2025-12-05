import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Chatbot from "../components/chatbot"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Muhammad Usman Khan | Full Stack Developer & WordPress Expert Pakistan",
  description:
    "Professional Full Stack Developer, WordPress Developer, and Custom Developer in Pakistan. Expert in CMS Development, Shopify, Wix, Squarespace, Figma Design & Website Development. Your trusted IT expert and coding guru for complete coding solutions.",
  keywords: [
    "full stack developer",
    "wordpress developer",
    "custom developer",
    "CMS developer",
    "website developer",
    "shopify developer",
    "wix developer",
    "squarespace developer",
    "figma designer",
    "website designer",
    "IT expert",
    "coder in Pakistan",
    "coding guru",
    "coding solution",
    "MERN stack developer",
    "React developer",
    "Node.js developer",
    "web development Pakistan",
    "freelance developer Pakistan",
    "e-commerce developer",
    "UI/UX designer",
    "Muhammad Usman Khan",
  ],
  authors: [{ name: "Muhammad Usman Khan" }],
  creator: "Muhammad Usman Khan",
  publisher: "Muhammad Usman Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.usmanxdev.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muhammad Usman Khan | Full Stack Developer & WordPress Expert",
    description: "Professional Full Stack Developer, WordPress Developer, and Custom Developer in Pakistan. Expert in CMS Development, Shopify, Wix, Squarespace & Web Development.",
    url: 'https://www.usmanxdev.com',
    siteName: 'Muhammad Usman Khan Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_White_Modern_Letter_U_Logo_-removebg-preview%20%281%29-RJUEV3S3NtssWEH7ESQpF8Vp9kQXVj.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Usman Khan - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usman Khan | Full Stack Developer & WordPress Expert',
    description: 'Professional Full Stack Developer, WordPress Developer in Pakistan. Expert in CMS, Shopify, Wix & Web Development.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_White_Modern_Letter_U_Logo_-removebg-preview%20%281%29-RJUEV3S3NtssWEH7ESQpF8Vp9kQXVj.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: {
      url:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_White_Modern_Letter_U_Logo_-removebg-preview%20%281%29-RJUEV3S3NtssWEH7ESQpF8Vp9kQXVj.png",
      type: "image/png",
      sizes: "32x32",
    },
    apple: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_White_Modern_Letter_U_Logo_-removebg-preview%20%281%29-RJUEV3S3NtssWEH7ESQpF8Vp9kQXVj.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  verification: {
    google: '2GlmsUBxbR3Tu7PVuYCup952I8ON2PWo4sD4Q4yoMWE',
  },
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
