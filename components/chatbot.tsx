"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Minimize2, Phone, Mail, Calendar, Clock } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setShowWelcome(false)
    setIsMinimized(false)
  }

  const minimizeChat = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()
      setMessages((prev) => [...prev, data])
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize for the technical issue. Please contact Muhammad Usman directly:\n📧 usmankhan86622@gmail.com\n📱 +92-315-0431096",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const quickQuestions = [
    "Show current availability",
    "What's your experience?",
    "View recent projects",
    "Get pricing info",
  ]

  const availabilityActions = [
    { text: "Check Availability", icon: Calendar, query: "What's your current availability for new projects?" },
    { text: "Project Timeline", icon: Clock, query: "How long do projects typically take?" },
    { text: "Rush Projects", icon: Send, query: "Can you handle urgent projects?" },
  ]

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  const handleAvailabilityAction = (query: string) => {
    const userMessage: Message = { role: "user", content: query }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate API call
    setTimeout(async () => {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: [...messages, userMessage] }),
        })

        if (!response.ok) throw new Error("Failed to get response")

        const data = await response.json()
        setMessages((prev) => [...prev, data])
      } catch (error) {
        console.error("Chat error:", error)
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Please contact Muhammad Usman directly for availability: usmankhan86622@gmail.com",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <>
      {/* Welcome notification */}
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, y: 20 }}
            className="fixed bottom-20 right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3 max-w-xs z-40"
          >
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#0ebab1] flex items-center justify-center flex-shrink-0">
                <Bot size={12} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Muhammad Usman - Available Now!
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">✅ Taking new projects • Free consultation</p>
              </div>
              <button
                onClick={() => setShowWelcome(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#0ebab1] hover:bg-[#0ca69d] text-white shadow-lg transition-colors">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {showWelcome && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"
            />
          )}
        </div>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed bottom-20 right-6 w-80 ${isMinimized ? "h-12" : "h-[450px]"} bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden transition-all duration-300`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0ebab1] to-[#0ca69d] p-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Muhammad Usman's AI</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-xs opacity-90">Available Now</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={minimizeChat} className="p-1 hover:bg-white/20 rounded transition-colors">
                  <Minimize2 size={14} />
                </button>
                <button onClick={toggleChat} className="p-1 hover:bg-white/20 rounded transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3 chatbot-messages">
                  {messages.length === 0 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#0ebab1] flex items-center justify-center flex-shrink-0">
                          <Bot size={12} className="text-white" />
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 max-w-[85%]">
                          <p className="text-xs text-gray-800 dark:text-gray-200 mb-2">
                            👋 Hi! I'm Muhammad Usman's AI assistant.
                          </p>
                          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>Available for new projects</span>
                            </div>
                            <div>• React & Frontend Specialist</div>
                            <div>• 2+ years experience</div>
                            <div>• Free consultation available</div>
                          </div>
                        </div>
                      </div>

                      {/* Availability quick actions */}
                      <div className="ml-8 space-y-2">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Quick Actions:</p>
                        <div className="grid grid-cols-1 gap-1">
                          {availabilityActions.map((action, index) => (
                            <button
                              key={index}
                              onClick={() => handleAvailabilityAction(action.query)}
                              className="flex items-center gap-2 text-xs px-2 py-1 bg-[#0ebab1]/10 text-[#0ebab1] rounded hover:bg-[#0ebab1]/20 transition-colors text-left"
                            >
                              <action.icon size={12} />
                              {action.text}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Regular quick questions */}
                      <div className="ml-8">
                        <div className="flex flex-wrap gap-1">
                          {quickQuestions.map((question, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuickQuestion(question)}
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                              {question}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-start gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "user" ? "bg-gray-300 dark:bg-gray-600" : "bg-[#0ebab1]"
                        }`}
                      >
                        {message.role === "user" ? (
                          <User size={12} className="text-gray-600 dark:text-gray-300" />
                        ) : (
                          <Bot size={12} className="text-white" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-2 max-w-[85%] ${
                          message.role === "user"
                            ? "bg-[#0ebab1] text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        <p className="text-xs whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#0ebab1] flex items-center justify-center flex-shrink-0">
                        <Bot size={12} className="text-white" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick contact buttons */}
                <div className="px-3 py-2 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex gap-2 mb-2">
                    <a
                      href="mailto:usmankhan86622@gmail.com"
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-[#0ebab1]/10 text-[#0ebab1] rounded text-xs hover:bg-[#0ebab1]/20 transition-colors"
                    >
                      <Mail size={10} />
                      Email
                    </a>
                    <a
                      href="tel:+923150431096"
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-[#0ebab1]/10 text-[#0ebab1] rounded text-xs hover:bg-[#0ebab1]/20 transition-colors"
                    >
                      <Phone size={10} />
                      Call
                    </a>
                  </div>
                </div>

                {/* Input */}
                <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about availability..."
                      className="flex-1 px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-[#0ebab1] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="px-2 py-1 bg-[#0ebab1] hover:bg-[#0ca69d] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded transition-colors flex items-center justify-center"
                    >
                      <Send size={12} />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
