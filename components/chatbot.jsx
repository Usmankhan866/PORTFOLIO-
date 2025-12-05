"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Minimize2, Phone, Mail, Calendar, Clock, Code, Sparkles, Zap } from "lucide-react"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const messagesEndRef = useRef(null)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input }
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
    { text: "What services do you offer?", icon: Code },
    { text: "View my tech stack", icon: Sparkles },
    { text: "Check project timeline", icon: Clock },
    { text: "Get consultation", icon: Zap },
  ]

  const availabilityActions = [
    { text: "Check Availability", icon: Calendar, query: "What's your current availability for new projects?" },
    { text: "Project Timeline", icon: Clock, query: "How long do projects typically take?" },
    { text: "Rush Projects", icon: Zap, query: "Can you handle urgent projects?" },
  ]

  const handleQuickQuestion = (question) => {
    setInput(question)
  }

  const handleAvailabilityAction = (query) => {
    const userMessage = { role: "user", content: query }
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
      {/* Welcome notification with enhanced design */}
      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, y: 20 }}
            className="fixed bottom-24 right-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm z-40 backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#222222] to-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Bot size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                  Muhammad Usman
                  <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full font-medium">
                    Available
                  </span>
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Web Developer • React Specialist
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                  <Sparkles size={12} className="text-yellow-500" />
                  <span>Free consultation • Quick response</span>
                </div>
              </div>
              <button
                onClick={() => setShowWelcome(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced chat button with pulse animation */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Pulse rings */}
          {!isOpen && (
            <>
              <div className="absolute inset-0 rounded-full bg-[#222222] animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full bg-[#222222] animate-pulse opacity-30"></div>
            </>
          )}
          
          {/* Main button */}
          <div className="relative flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#222222] to-gray-700 hover:from-gray-800 hover:to-gray-900 text-white shadow-2xl transition-all duration-300 group-hover:shadow-[#222222]/50">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Availability indicator */}
          {showWelcome && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
            >
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </motion.div>
          )}
        </div>
      </motion.button>

      {/* Redesigned chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed bottom-24 right-6 w-96 ${isMinimized ? "h-16" : "h-[550px]"} bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden transition-all duration-300`}
          >
            {/* Enhanced header with gradient */}
            <div className="relative bg-gradient-to-r from-[#222222] via-gray-800 to-[#222222] p-4 text-white">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                      <Bot size={20} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#222222] animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base flex items-center gap-2">
                      Usman's AI Assistant
                      <Sparkles size={14} className="text-yellow-400 animate-pulse" />
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-xs text-gray-200">Online • Responds in seconds</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={minimizeChat}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
                  >
                    <Minimize2 size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleChat}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Enhanced messages area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950 chatbot-messages">
                  {messages.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      {/* Welcome message with enhanced design */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#222222] to-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Bot size={16} className="text-white" />
                        </div>
                        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            👋 Hello! I'm Usman's AI Assistant
                            <Sparkles size={14} className="text-yellow-500" />
                          </p>
                          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-2 mb-3">
                            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="font-medium text-green-700 dark:text-green-400">Available for new projects</span>
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2">
                                <Code size={12} className="text-[#222222] dark:text-white" />
                                <span>Full-Stack Web Developer</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Zap size={12} className="text-[#222222] dark:text-white" />
                                <span>React & Next.js Specialist</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Sparkles size={12} className="text-[#222222] dark:text-white" />
                                <span>2+ years experience</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                            How can I help you today?
                          </p>
                        </div>
                      </div>

                      {/* Quick actions with modern cards */}
                      <div className="space-y-3">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-2">Quick Actions:</p>
                        <div className="grid grid-cols-1 gap-2">
                          {availabilityActions.map((action, index) => (
                            <motion.button
                              key={index}
                              onClick={() => handleAvailabilityAction(action.query)}
                              className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl transition-all text-left group shadow-sm hover:shadow-md"
                              whileHover={{ scale: 1.02, x: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#222222] dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                <action.icon size={16} className="text-white dark:text-[#222222]" />
                              </div>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{action.text}</span>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Quick questions chips */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-2">Or ask me:</p>
                        <div className="flex flex-wrap gap-2">
                          {quickQuestions.map((question, index) => (
                            <motion.button
                              key={index}
                              onClick={() => handleQuickQuestion(question.text)}
                              className="flex items-center gap-1.5 text-xs px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#222222] hover:text-white dark:hover:bg-white dark:hover:text-[#222222] text-gray-700 dark:text-gray-300 rounded-full transition-all shadow-sm border border-gray-200 dark:border-gray-700"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <question.icon size={12} />
                              {question.text}
                            </motion.button>
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
                      className={`flex items-start gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
                          message.role === "user"
                            ? "bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"
                            : "bg-gradient-to-br from-[#222222] to-gray-700"
                        }`}
                      >
                        {message.role === "user" ? (
                          <User size={16} className="text-white" />
                        ) : (
                          <Bot size={16} className="text-white" />
                        )}
                      </div>
                      <div
                        className={`rounded-2xl p-3 max-w-[80%] shadow-sm ${
                          message.role === "user"
                            ? "bg-gradient-to-br from-[#222222] to-gray-800 text-white rounded-tr-sm"
                            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-sm"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#222222] to-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Bot size={16} className="text-white" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tl-sm p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex space-x-1.5">
                          <div className="w-2 h-2 bg-[#222222] dark:bg-white rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-[#222222] dark:bg-white rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-[#222222] dark:bg-white rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Enhanced quick contact section */}
                <div className="px-4 py-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex gap-2">
                    <motion.a
                      href="mailto:usmankhan86622@gmail.com"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#222222] to-gray-800 hover:from-gray-800 hover:to-[#222222] text-white rounded-xl text-xs font-medium transition-all shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={14} />
                      Email Me
                    </motion.a>
                    <motion.a
                      href="tel:+923150431096"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-medium transition-all shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={14} />
                      Call Now
                    </motion.a>
                  </div>
                </div>

                {/* Enhanced input area */}
                <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 text-sm border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                      disabled={isLoading}
                    />
                    <motion.button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="px-4 py-3 bg-gradient-to-r from-[#222222] to-gray-800 hover:from-gray-800 hover:to-[#222222] disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white rounded-xl transition-all flex items-center justify-center shadow-sm hover:shadow-md disabled:shadow-none"
                      whileHover={{ scale: input.trim() ? 1.05 : 1 }}
                      whileTap={{ scale: input.trim() ? 0.95 : 1 }}
                    >
                      <Send size={18} />
                    </motion.button>
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
