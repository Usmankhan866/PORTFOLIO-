import Hero from "../components/hero"
import Services from "../components/services"
import Technologies from "../components/technologies"
import Projects from "../components/projects-preview"
import Testimonials from "../components/testimonials"
import CTA from "../components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  )
}
