import dynamic from "next/dynamic"
import Hero from "../components/hero"

// Lazy load heavy components for better performance
const Services = dynamic(() => import("../components/services"), {
  loading: () => <div className="h-screen" />,
})
const Methodology = dynamic(() => import("../components/methodology"), {
  loading: () => <div className="h-screen" />,
})
const Technologies = dynamic(() => import("../components/technologies"), {
  loading: () => <div className="h-screen" />,
})
const Projects = dynamic(() => import("../components/projects-preview"), {
  loading: () => <div className="h-screen" />,
})
const Testimonials = dynamic(() => import("../components/testimonials"), {
  loading: () => <div className="h-screen" />,
})
const CTA = dynamic(() => import("../components/cta"), {
  loading: () => <div className="h-96" />,
})

export const metadata = {
  title: "Muhammad Usman Khan | Full Stack Developer & WordPress Expert Pakistan",
  description: "Professional Full Stack Developer, WordPress Developer, and Custom Developer in Pakistan. Expert in CMS Development, Shopify, Wix, Squarespace, Figma Design & Website Development.",
  keywords: "full stack developer, wordpress developer, custom developer, CMS developer, website developer, shopify developer, wix developer, squarespace developer, figma designer, website designer, IT expert, coder in Pakistan, coding guru, coding solution",
  openGraph: {
    title: "Muhammad Usman Khan | Full Stack Developer & WordPress Expert",
    description: "Professional Full Stack Developer, WordPress Developer in Pakistan. Expert in Web Development, CMS, Shopify & E-commerce Solutions.",
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Usman Khan',
    jobTitle: 'Full Stack Developer',
    description: 'Professional Full Stack Developer, WordPress Developer, and Custom Developer specializing in CMS Development, Shopify, Wix, Squarespace, and Web Development',
    url: 'https://www.usmanxdev.com',
    sameAs: [
      'https://www.linkedin.com/in/usmankhan',
      'https://github.com/usmankhan',
    ],
    knowsAbout: [
      'Full Stack Development',
      'WordPress Development',
      'Custom Development',
      'CMS Development',
      'Website Development',
      'Shopify Development',
      'Wix Development',
      'Squarespace Development',
      'Figma Design',
      'Website Design',
      'React',
      'Node.js',
      'MongoDB',
      'MERN Stack',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Pakistan',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      skills: [
        'Full Stack Development',
        'WordPress Development',
        'Custom Web Development',
        'CMS Development',
        'E-commerce Development',
        'Shopify Development',
        'Wix Development',
        'Squarespace Development',
        'Figma Design',
        'UI/UX Design',
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Methodology />
      <Technologies />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  )
}
