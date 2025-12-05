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

export default function Home() {
  return (
    <>
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
