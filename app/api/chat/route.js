import { NextResponse } from "next/server"

// Get current availability status
function getCurrentAvailability() {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentWeek = Math.ceil(currentDate.getDate() / 7)

  // Dynamic availability based on current time
  const availability = {
    status: "Available", // Available, Partially Available, Fully Booked
    nextAvailable: null,
    currentCapacity: "2-3 new projects",
    responseTime: "Within 24 hours",
    preferredProjectTypes: ["React Development", "Shopify Stores", "CMS Solutions"],
    workingHours: "9 AM - 6 PM PKT (Monday - Saturday)",
    timezone: "Pakistan Standard Time (PKT)",
    urgentProjects: "Available for rush projects",
    consultationAvailable: "Free 30-minute consultation available",
    estimatedStartDate: getNextStartDate(),
    currentProjects: getCurrentProjects(),
    weeklyCapacity: "40 hours/week available",
  }

  return availability
}

function getNextStartDate() {
  const today = new Date()
  const nextWeek = new Date(today)
  nextWeek.setDate(today.getDate() + 7)

  return nextWeek.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function getCurrentProjects() {
  return [
    {
      name: "DEVEMERCE - Web Development",
      status: "Ongoing (Part-time)",
      commitment: "20 hours/week",
    },
    {
      name: "Freelance Projects",
      status: "Active",
      commitment: "15-20 hours/week",
    },
  ]
}

// Comprehensive AI responses based on Muhammad Usman's resume and profile
const responses = {
  greeting: [
    "Hello! I'm Muhammad Usman's AI assistant. I can help you learn about his web development expertise, projects, and professional background. How can I assist you today?",
    "Hi there! I'm here to provide information about Muhammad Usman - a skilled web developer with 2+ years of experience in React, full-stack development, and CMS solutions. What would you like to know?",
    "Welcome! I can answer questions about Usman's technical skills, professional experience, projects, or anything else you'd like to know about his web development services.",
  ],

  availability: () => {
    const avail = getCurrentAvailability()
    return `📅 **Muhammad Usman's Current Availability:**\n\n✅ **Status:** ${avail.status}\n🚀 **Capacity:** ${avail.currentCapacity}\n⚡ **Response Time:** ${avail.responseTime}\n📋 **Start Date:** Projects can begin ${avail.estimatedStartDate}\n\n**Current Workload:**\n${avail.currentProjects.map((p) => `• ${p.name} - ${p.commitment}`).join("\n")}\n\n**Available For:**\n${avail.preferredProjectTypes.map((type) => `• ${type}`).join("\n")}\n\n**Working Schedule:**\n🕘 ${avail.workingHours}\n🌍 ${avail.timezone}\n⏰ ${avail.weeklyCapacity}\n\n**Special Offers:**\n💡 ${avail.consultationAvailable}\n🔥 ${avail.urgentProjects}\n\n**Ready to start your project?**\n📧 Email: usmankhan86622@gmail.com\n📱 Phone: +92-315-0431096`
  },

  about: [
    "Muhammad Usman is a Frontend Developer with 2+ years of experience specializing in React. He's proficient in building responsive, high-performance web applications with seamless API integration and modern tech stacks. Currently pursuing Bachelor of Software Engineering (6th semester) at National University Of Modern Languages (2022-2026).\n\nHe's experienced in delivering scalable solutions across e-commerce and custom platforms, with expertise in CMS development (Shopify, WordPress, Wix) and social media management.",
  ],

  experience: [
    "Usman's Professional Experience:\n\n🏢 **DEVEMERCE** - Web Developer & IT Manager (Feb 2024 - Present)\n• Oversees and maintains core web services and websites\n• Writes well-designed, efficient code using best practices\n\n🐍 **Codecuex-Solution** - Junior Python Developer (June - Aug 2024)\n• Developed and optimized Python tools\n• Enhanced performance and functionality\n• Collaborated with remote teams\n\n💼 **Freelance & Social Media Manager** (2024 - Present)\n• Airtasker & Upwork services\n• Frontend development and social media management\n• Specializes in React, Next.js, and CMS solutions\n\n📱 **CMS Developer** (2022 - Ongoing)\n• Custom CMS solutions for LinkedIn and social media clients\n• Content management and showcase solutions",
  ],

  skills: [
    "Usman's Technical Skills:\n\n**Frontend Development:**\n• React.js (Specialist)\n• JavaScript, HTML, CSS\n• Next.js, Tailwind CSS\n• Responsive Design\n\n**Backend & Languages:**\n• Python, PHP\n• C, C++, C# .NET Framework\n• ASP.NET Core\n• API Integration\n\n**CMS & E-commerce:**\n• Shopify Development\n• WordPress\n• Wix\n\n**Other Skills:**\n• UI/UX Design\n• Git/GitHub\n• Social Media Management\n• Leadership & Team Coordination\n• Computational Thinking & Problem Solving",
  ],

  projects: [
    "Featured Projects by Muhammad Usman:\n\n🚀 **MEMECOINS AGENTS** (Live: memecoinsagent.info)\n• React-based crypto web application\n• Stripe & PayPal payment integration\n• Modern frontend architecture\n\n🛍️ **Rumouredglamour Store** (rumouredglamourstore.com)\n• Shopify development\n• Custom themes & UX optimization\n• Mobile-friendly design\n\n💪 **POWERFIT** (GitHub: Usmankhan866/POWERFIT)\n• ASP.NET Core gym management system\n• Role-based access control\n• Admin, trainer, and member dashboards\n\n🌱 **Grovwy** (Grovwy.vercel.app - In Development)\n• React & Tailwind CSS\n• Membership site for digital products\n• Subscription management\n\nPortfolio: Uk-developer.vercel.app",
  ],

  education: [
    "Education & Certifications:\n\n🎓 **Bachelor of Software Engineering** (6th Semester)\n• 2022 - 2026\n• National University Of Modern Languages\n\n📜 **Certifications:**\n• Frontend Developer\n• Python Developer\n• Website & Graphic Design\n• Coding Competition Participant\n\n💼 **Continuous Learning:**\n• Always staying updated with latest web technologies\n• Active in coding competitions and professional development",
  ],

  contact: [
    "Contact Muhammad Usman:\n\n📧 **Email:** usmankhan86622@gmail.com\n📱 **Phone:** +92-315-0431096\n📍 **Location:** Allama Iqbal Colony, Rawalpindi, Pakistan\n💼 **Portfolio:** Uk-developer.vercel.app\n\n**Available for:**\n• Web Development Projects\n• React/Frontend Development\n• CMS Solutions (Shopify, WordPress)\n• Social Media Management\n• Freelance & Contract Work",
  ],

  services: [
    "Muhammad Usman's Services:\n\n💻 **Website Development (CODING)**\n• Custom web applications\n• React.js specialist\n• Responsive design\n\n🛒 **CMS Development**\n• Shopify stores\n• WordPress websites\n• Wix solutions\n\n🔗 **API Integration**\n• Payment gateways (Stripe, PayPal)\n• Third-party services\n• Custom API development\n\n📱 **Social Media Management**\n• Content strategy\n• Account management\n• Campaign optimization\n\n🎨 **UI/UX Design**\n• User-centered design\n• Modern interfaces\n• Mobile-first approach",
  ],

  pricing: [
    "Usman offers competitive and flexible pricing:\n\n💡 **Free Consultation**\n• Project assessment\n• Technical recommendations\n• Timeline estimation\n\n💰 **Flexible Pricing Options:**\n• Hourly rates for small tasks\n• Fixed project pricing\n• Retainer agreements for ongoing work\n• Social media management packages\n\n📞 **Get a Quote:**\nContact Usman at usmankhan86622@gmail.com or +92-315-0431096 for personalized pricing based on your specific requirements.",
  ],

  technologies: [
    "Technologies Muhammad Usman Works With:\n\n**Frontend Specialist:**\n• React.js (Primary expertise)\n• JavaScript (ES6+)\n• HTML5, CSS3\n• Next.js\n• Tailwind CSS\n\n**Backend Technologies:**\n• Python\n• PHP\n• ASP.NET Core\n• C# .NET Framework\n• C, C++\n\n**CMS Platforms:**\n• Shopify (E-commerce specialist)\n• WordPress\n• Wix\n\n**Tools & Others:**\n• Git/GitHub\n• API Integration\n• Payment Gateways\n• UI/UX Design\n• Database Management",
  ],

  timeline: () => {
    const avail = getCurrentAvailability()
    return `⏰ **Project Timeline & Scheduling:**\n\n**Typical Project Timelines:**\n• Simple React App: 1-2 weeks\n• Shopify Store: 2-3 weeks\n• Custom Web Application: 3-6 weeks\n• WordPress Site: 1-3 weeks\n• API Integration: 3-7 days\n\n**Current Schedule:**\n📅 New projects can start: ${avail.estimatedStartDate}\n⚡ Rush projects: Available with 48-hour notice\n🔄 Ongoing maintenance: Same-day response\n\n**Development Process:**\n1. **Consultation** (Free - 30 minutes)\n2. **Planning & Quote** (1-2 days)\n3. **Development** (Timeline varies)\n4. **Testing & Review** (2-3 days)\n5. **Launch & Support** (Ongoing)\n\n**Communication:**\n• Daily progress updates\n• Weekly milestone reviews\n• 24/7 support during development\n\nReady to discuss your timeline? Contact Usman at usmankhan86622@gmail.com`
  },
}

function getAIResponse(message) {
  const lowerMessage = message.toLowerCase()

  // Availability specific queries
  if (
    lowerMessage.includes("availability") ||
    lowerMessage.includes("available") ||
    lowerMessage.includes("free") ||
    lowerMessage.includes("when can you start") ||
    lowerMessage.includes("booking") ||
    lowerMessage.includes("schedule") ||
    lowerMessage.includes("capacity") ||
    lowerMessage.includes("workload")
  ) {
    return responses.availability()
  }

  // Timeline specific queries
  if (
    lowerMessage.includes("timeline") ||
    lowerMessage.includes("how long") ||
    lowerMessage.includes("duration") ||
    lowerMessage.includes("time frame") ||
    lowerMessage.includes("deadline") ||
    lowerMessage.includes("delivery")
  ) {
    return responses.timeline()
  }

  // Greeting patterns
  if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening|greetings)/)) {
    return responses.greeting[Math.floor(Math.random() * responses.greeting.length)]
  }

  // About Usman
  if (
    lowerMessage.includes("about") ||
    lowerMessage.includes("who is") ||
    lowerMessage.includes("tell me about") ||
    lowerMessage.includes("background") ||
    lowerMessage.includes("profile")
  ) {
    return responses.about[0]
  }

  // Experience
  if (
    lowerMessage.includes("experience") ||
    lowerMessage.includes("work history") ||
    lowerMessage.includes("job") ||
    lowerMessage.includes("career") ||
    lowerMessage.includes("professional")
  ) {
    return responses.experience[0]
  }

  // Skills
  if (
    lowerMessage.includes("skill") ||
    lowerMessage.includes("technology") ||
    lowerMessage.includes("tech") ||
    lowerMessage.includes("programming") ||
    lowerMessage.includes("language") ||
    lowerMessage.includes("competenc")
  ) {
    return responses.skills[0]
  }

  // Projects
  if (
    lowerMessage.includes("project") ||
    lowerMessage.includes("portfolio") ||
    lowerMessage.includes("work") ||
    lowerMessage.includes("example") ||
    lowerMessage.includes("memecoins") ||
    lowerMessage.includes("powerfit") ||
    lowerMessage.includes("grovwy") ||
    lowerMessage.includes("rumoured")
  ) {
    return responses.projects[0]
  }

  // Education
  if (
    lowerMessage.includes("education") ||
    lowerMessage.includes("degree") ||
    lowerMessage.includes("university") ||
    lowerMessage.includes("study") ||
    lowerMessage.includes("certification") ||
    lowerMessage.includes("qualification")
  ) {
    return responses.education[0]
  }

  // Contact
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("reach") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("hire") ||
    lowerMessage.includes("get in touch")
  ) {
    return responses.contact[0]
  }

  // Services
  if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("what do you do") ||
    lowerMessage.includes("what can you build") ||
    lowerMessage.includes("offer") ||
    lowerMessage.includes("help with")
  ) {
    return responses.services[0]
  }

  // Pricing
  if (
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("quote") ||
    lowerMessage.includes("budget") ||
    lowerMessage.includes("rate") ||
    lowerMessage.includes("fee")
  ) {
    return responses.pricing[0]
  }

  // React specific
  if (lowerMessage.includes("react") || lowerMessage.includes("frontend")) {
    return (
      "Yes! Muhammad Usman is a React specialist with 2+ years of experience. He's built multiple React applications including MEMECOINS AGENTS and Grovwy. He's proficient in modern React patterns, hooks, state management, and can integrate APIs seamlessly. React is his primary expertise!\n\n" +
      responses.availability()
    )
  }

  // Shopify specific
  if (lowerMessage.includes("shopify") || lowerMessage.includes("ecommerce") || lowerMessage.includes("e-commerce")) {
    return (
      "Usman is experienced in Shopify development. He's built successful e-commerce stores like Rumouredglamour Store (rumouredglamourstore.com). He can handle custom themes, app integrations, payment gateway setup, and mobile optimization for Shopify stores.\n\n" +
      responses.availability()
    )
  }

  // Python specific
  if (lowerMessage.includes("python")) {
    return (
      "Yes! Usman has Python development experience. He worked as a Junior Python Developer at Codecuex-Solution where he developed and optimized Python tools. He's also certified as a Python developer and can handle backend development with Python.\n\n" +
      responses.availability()
    )
  }

  // ASP.NET specific
  if (lowerMessage.includes("asp.net") || lowerMessage.includes("dotnet") || lowerMessage.includes(".net")) {
    return (
      "Usman has experience with ASP.NET Core! He built POWERFIT - a complete gym management system using ASP.NET Core with Razor Pages. The project includes role-based access control, admin dashboards, and membership management. Check it out on GitHub: Usmankhan866/POWERFIT\n\n" +
      responses.availability()
    )
  }

  // Social Media Management
  if (lowerMessage.includes("social media") || lowerMessage.includes("marketing") || lowerMessage.includes("content")) {
    return (
      "Yes! Usman offers social media management services. He's been managing social media accounts and campaigns since 2022, creating content strategies to boost client engagement and visibility. He combines his technical skills with marketing expertise to deliver comprehensive digital solutions.\n\n" +
      responses.availability()
    )
  }

  // Location specific
  if (
    lowerMessage.includes("location") ||
    lowerMessage.includes("where") ||
    lowerMessage.includes("pakistan") ||
    lowerMessage.includes("rawalpindi")
  ) {
    return (
      "Muhammad Usman is based in Allama Iqbal Colony, Rawalpindi, Pakistan. He works with clients locally and internationally, offering both on-site and remote development services. He's available for projects across different time zones.\n\n" +
      responses.availability()
    )
  }

  // Urgent/Rush projects
  if (
    lowerMessage.includes("urgent") ||
    lowerMessage.includes("rush") ||
    lowerMessage.includes("asap") ||
    lowerMessage.includes("immediately") ||
    lowerMessage.includes("quick")
  ) {
    const avail = getCurrentAvailability()
    return `🚨 **Rush Project Availability:**\n\n✅ ${avail.urgentProjects}\n⚡ Can start within 48 hours for urgent projects\n🔥 Weekend work available for critical deadlines\n💪 Dedicated focus for rush deliveries\n\n**Rush Project Process:**\n1. Immediate consultation (within 2 hours)\n2. Fast-track planning and quote\n3. Priority development schedule\n4. Daily progress updates\n5. Expedited testing and launch\n\n**Contact for Rush Projects:**\n📧 usmankhan86622@gmail.com\n📱 +92-315-0431096 (Call/WhatsApp)\n\nMention "URGENT" in your message for priority response!`
  }

  // Random/Irrelevant questions - Professional responses
  const professionalResponses = [
    "That's an interesting question! While I'm here to help with information about Muhammad Usman's web development services, I'd be happy to discuss how his technical expertise might relate to your needs. Is there a specific project or technology you'd like to know about?\n\n" +
      responses.availability(),

    "I appreciate your question! As Usman's AI assistant, I'm focused on helping with information about his web development services, projects, and professional background. Is there anything specific about his React expertise, Shopify development, or other technical skills you'd like to explore?\n\n" +
      responses.availability(),

    "Thanks for reaching out! While that's outside my area of expertise, I can tell you all about Muhammad Usman's web development capabilities. He's a React specialist with experience in full-stack development, CMS solutions, and social media management. What type of project are you considering?\n\n" +
      responses.availability(),

    "I'm designed to help with questions about Muhammad Usman's professional services and technical expertise. He's skilled in React development, Shopify stores, Python programming, and more. Would you like to know how his skills could help with a specific project you have in mind?\n\n" +
      responses.availability(),

    "That's quite a question! As Usman's professional AI assistant, I'm here to discuss his web development services, technical skills, and project experience. He's currently available for new projects and offers free consultations. Would you like to know more about his services?\n\n" +
      responses.availability(),

    "Interesting! While I focus on Muhammad Usman's professional web development services, I can tell you he's always excited to take on new challenges. With his React expertise, CMS development skills, and problem-solving abilities, he might have creative solutions for various needs. What kind of project are you thinking about?\n\n" +
      responses.availability(),
  ]

  return professionalResponses[Math.floor(Math.random() * professionalResponses.length)]
}

export async function POST(req) {
  try {
    const { messages } = await req.json()
    const lastMessage = messages[messages.length - 1]

    // Simulate thinking time for more natural interaction
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 1200))

    const response = getAIResponse(lastMessage.content)

    return NextResponse.json({
      role: "assistant",
      content: response,
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        role: "assistant",
        content:
          "I apologize for the technical difficulty. Please feel free to contact Muhammad Usman directly at usmankhan86622@gmail.com or +92-315-0431096 for immediate assistance with your web development needs.",
      },
      { status: 200 },
    )
  }
}
