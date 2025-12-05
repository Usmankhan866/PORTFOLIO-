import Hero from "../components/hero"
import Services from "../components/services"
import Methodology from "../components/methodology"
import Technologies from "../components/technologies"
import Projects from "../components/projects-preview"
import Testimonials from "../components/testimonials"
import CTA from "../components/cta"

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
