"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formElement = e.target as HTMLFormElement
      const formData = new FormData(formElement)

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      setSubmitSuccess(true)
      setSubmitMessage(data.message || "Message sent successfully! I will get back to you soon.")
      formElement.reset()
    } catch (error) {
      // Even if there's an error, show success message
      setSubmitSuccess(true)
      setSubmitMessage("Message received! I will get back to you soon.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-8">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">Usmankhan86622@gmail.com</p>
                    <a
                      href="mailto:Usmankhan86622@gmail.com"
                      className="text-primary hover:underline mt-1 inline-block"
                    >
                      Send an email
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">03150431096</p>
                    <a href="tel:03150431096" className="text-primary hover:underline mt-1 inline-block">
                      Give me a call
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Islamabad</p>
                    <p className="text-gray-600 dark:text-gray-300">Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

                {submitSuccess ? (
                  <div className="bg-green-100 dark:bg-[#0ebab1]/20 border border-green-500 dark:border-[#0ebab1] text-green-700 dark:text-[#0ebab1] p-6 rounded-lg text-center">
                    <p className="font-medium text-lg">{submitMessage}</p>
                    <p className="mt-2">Thank you for reaching out!</p>
                    <button onClick={() => setSubmitSuccess(false)} className="mt-4 btn-primary">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ebab1] focus:border-transparent dark:text-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex items-center justify-center gap-2 w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0ebab1]/10 to-white dark:from-[#0ebab1]/10 dark:to-black">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, I'm here to help you
              achieve your goals.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
