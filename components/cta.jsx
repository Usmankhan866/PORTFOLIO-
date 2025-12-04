import Link from "next/link"

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0ebab1]/10 to-white dark:from-[#0ebab1]/10 dark:to-black">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's collaborate to create a web solution that drives your business forward
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
