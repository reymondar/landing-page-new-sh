"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Calendar, Clock, Globe, Code, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

// Import project data (in a real app, this would come from an API or database)
const projects = [
  {
    id: "business-profile-platform",
    title: "Business Profile Platform",
    subtitle: "Businesses listing platform",
    category: "Web App",
    year: "2024",
    duration: "2025 - Present",
    status: "Live",
    description: "Modern business valuation and profile platform with secure listing capabilities",
    overview: "Community Platform to Value, List & Sell Your Business Securely. Based from Figma designs, developed in collaboration with a SEO expert, designers, and another developer following industry best practices and modern development standards.",
    website: "https://confettilist.com",
    backgroundImage: "/lovable-uploads/8188e18b-befa-45e5-9282-cca3c3bf8ca0.png",
    screenshotImage: "/lovable-uploads/8188e18b-befa-45e5-9282-cca3c3bf8ca0.png",
    technology: {
      stack: "Bubble.io",
      technologies: ["Bubble.io"],
      stackTags: ["bubble"]
    },
    role: "Full-stack development, SEO optimization, collaborative design implementation, and performance optimization",
    features: [
      "Showcase Your Business: Create a professional profile to highlight your business strengths and value proposition",
      "Benchmark Performance: Compare your business performance against industry standards and competitors",
      "Instant Valuations: Get immediate business worth estimates using advanced valuation algorithms",
      "Connect with Buyers: Access a network of qualified buyers and investors looking for opportunities"
    ]
  },
  {
    id: "majella",
    title: "Majella",
    subtitle: "Event managing platform (MVP)",
    category: "Web App",
    year: "2025",
    duration: "May 2025 - Present",
    status: "Live",
    description: "Experiential engagement platform that transforms how people show up, participate, and build value at live events and beyond",
    overview: "Innovative event platform that transforms passive participation into active contribution through gamification. It contains management tools and custom-made scheduler for specific client purposes.",
    website: "https://www.majella.io/",
    backgroundImage: "/lovable-uploads/492cc0bb-4864-434b-8b51-3608bf9520d7.png",
    screenshotImage: "/lovable-uploads/492cc0bb-4864-434b-8b51-3608bf9520d7.png",
    technology: {
      stack: "Bubble.io + n8n",
      technologies: ["Bubble.io", "n8n"],
      stackTags: ["bubble", "n8n"]
    },
    role: "Full-stack development, workflow automation design, custom scheduler implementation, and gamification system architecture",
    features: [
      "Event Discovery: Search events, topics, or locations to find the perfect experiences for your interests",
      "Gamified Engagement: Transform passive attendance into active participation through interactive challenges and rewards",
      "Event Management: Comprehensive tools for organizers to create, manage, and optimize events",
      "Marketplace Integration: List events in the marketplace and connect with qualified participants and buyers"
    ]
  },
  {
    id: "golf-it",
    title: "Golf It",
    subtitle: "AI-powered golf course finder",
    category: "Progressive Web App",
    year: "2025",
    duration: "January 2025 - Present",
    status: "In Development",
    description: "Mobile web app for finding golf courses with AI matchmaking",
    overview: "Progressive web app to find golf courses connected to Mapbox with AI user match-making system. Features location-based course discovery and intelligent recommendations based on user preferences.",
    website: "https://golfitargentina.com/",
    backgroundImage: "/lovable-uploads/0a839296-7cc1-4b7d-a1c7-156a6f399ec3.png",
    screenshotImage: "/lovable-uploads/0a839296-7cc1-4b7d-a1c7-156a6f399ec3.png",
    technology: {
      stack: "Lovable + n8n + Supabase",
      technologies: ["Lovable", "React + TypeScript", "Supabase", "n8n Automation", "Mapbox Integration", "Progressive Web App"],
      stackTags: ["react", "n8n"]
    },
    role: "Full-Stack Developer & AI Specialist - Leading development of the PWA, AI matchmaking system, Mapbox integration, and n8n workflow automation",
    features: [
      "AI-powered matchmaking system for personalized course recommendations",
      "Interactive map integration with Mapbox for precise location services",
      "Comprehensive golf course database with detailed information",
      "Real-time availability and booking capabilities",
      "User profile system with skill level and preference tracking",
      "Progressive Web App functionality for mobile-first experience",
      "Social features for connecting with other golfers",
      "Weather integration for optimal playing conditions",
      "Course reviews and rating system",
      "Automated workflow management with n8n"
    ],
    innovations: [
      "AI Matchmaking Algorithm",
      "Real-time Location Services",
      "Progressive Web App",
      "Automated Workflows"
    ]
  },
  {
    id: "jobs-next-tech",
    title: "Jobs Next Tech",
    subtitle: "Recruitment platform",
    category: "Website",
    year: "2024",
    duration: "May - December 2024",
    status: "Live",
    description: "Niche Future Jobs - Building the largest database of curated experts in upcoming niche tech sectors",
    overview: "Online platform that aims to build the largest curated database of experts in fields such as immersive technologies (AR/VR), video games, artificial intelligence, Flutter development, and quantum computing. I integrated into this large-scale existing project, contributing to development based on established Figma design files and implementing workflow automation features.",
    website: "https://www.jobsinnexttech.com/",
    backgroundImage: "/lovable-uploads/6f04b510-199d-4b53-9931-c742d946f1fe.png",
    screenshotImage: "/lovable-uploads/6f04b510-199d-4b53-9931-c742d946f1fe.png",
    technology: {
      stack: "Bubble.io + Supabase + Zapier",
      technologies: ["Bubble.io", "Supabase", "Zapier"],
      stackTags: ["bubble"]
    },
    role: "Integration developer working with established Figma designs, workflow automation implementation, and feature enhancement within existing architecture",
    specializedSectors: [
      "🥽 jobs in XR: Immersive technologies including AR/VR and extended reality experiences",
      "🎮 jobs in Gaming: Video game development, design, and interactive entertainment",
      "🤖 jobs in AI: Artificial intelligence, machine learning, and automation technologies",
      "⚡ jobs in Flutter: Cross-platform mobile development with Flutter framework",
      "⚛️ jobs in Quantum: Quantum computing and advanced computational sciences"
    ]
  },
  {
    id: "nitfy",
    title: "NiTFy",
    subtitle: "Startup business website",
    category: "Website",
    year: "2023",
    duration: "2023 - 2024",
    status: "Coming Soon",
    description: "High-performance startup website with perfect Lighthouse scores for wireless charging technology",
    overview: "Website page for startup business with 100 Lighthouse score report, designed and developed independently. Transformando la energía en Latinoamérica con Carga Inalámbrica - wireless charging technology for Latin America.",
    website: "#",
    backgroundImage: "/lovable-uploads/5a1fe0d9-eaae-4c78-beaf-1cd735333fa2.png",
    screenshotImage: "/lovable-uploads/5a1fe0d9-eaae-4c78-beaf-1cd735333fa2.png",
    technology: {
      stack: "React.js + Vercel.js + Firestore",
      technologies: ["React.js", "Vercel", "Firestore"],
      stackTags: ["react"]
    },
    role: "Designer & Developer - Complete independent development including UX/UI design, frontend development, performance optimization, and deployment",
    performanceMetrics: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    },
    features: [
      "100 Lighthouse Score: Perfect scores across Performance, Accessibility, Best Practices, and SEO metrics",
      "Modern Web Standards: Built following current web development best practices and performance optimization techniques",
      "Responsive Design: Fully responsive layout optimized for all device types and screen sizes",
      "Independent Development: Complete end-to-end development including design, implementation, and optimization"
    ],
    innovationAreas: [
      "Automotive wireless charging systems",
      "Consumer electronics power solutions",
      "Industrial equipment energy transfer",
      "Sustainable energy distribution networks"
    ]
  },
  {
    id: "delfino-lynch",
    title: "Delfino Lynch",
    subtitle: "Real estate platform",
    category: "Website",
    year: "2023",
    duration: "2023",
    status: "Live",
    location: "Argentina",
    description: "Real estate platform with admin dashboard and lead management",
    overview: "Real-estate page with backend dashboard for properties administration and lead management. Complete property management system with advanced search capabilities and contact management.",
    website: "https://delfinolynch.com.ar/",
    backgroundImage: "/lovable-uploads/fbe3ffdc-1db0-4aff-9453-aef4e6c1ecb9.png",
    screenshotImage: "/lovable-uploads/fbe3ffdc-1db0-4aff-9453-aef4e6c1ecb9.png",
    technology: {
      stack: "WordPress",
      technologies: ["WordPress", "Custom PHP Development", "MySQL Database"],
      stackTags: ["wordpress"]
    },
    role: "Full-Stack Developer - Responsible for complete development including frontend design, backend functionality, and dashboard implementation",
    features: [
      "Advanced property search and filtering system",
      "Interactive property galleries with high-resolution images",
      "Lead management dashboard for real estate agents",
      "Property administration backend with full CRUD operations",
      "Contact form integration with automated lead capture",
      "Mobile-responsive design for all device types",
      "SEO optimization for better search engine visibility"
    ]
  },
  {
    id: "molonka",
    title: "Molonka",
    subtitle: "Waste solutions company",
    category: "Website",
    year: "2024",
    duration: "May - October 2024",
    status: "Live",
    description: "Corporate website for waste management solutions",
    overview: "Waste solutions company page with over 30 sections all pulled from Figma. Comprehensive corporate website showcasing environmental services and waste management solutions.",
    website: "https://molokna.com/about-us/",
    backgroundImage: "/lovable-uploads/1482c129-1075-4692-a2bf-eaec6aec1dc6.png",
    screenshotImage: "/lovable-uploads/1482c129-1075-4692-a2bf-eaec6aec1dc6.png",
    technology: {
      stack: "WordPress",
      technologies: ["WordPress", "Custom Theme Development", "Figma to WordPress", "Advanced Custom Fields"],
      stackTags: ["wordpress"]
    },
    role: "WordPress Developer - Complete Figma-to-WordPress conversion, custom theme development, and performance optimization for 30+ sections",
    features: [
      "30+ custom-designed sections from Figma",
      "Comprehensive service portfolio presentation",
      "Environmental impact visualization",
      "Interactive waste solution configurators",
      "Multi-language support for international markets",
      "Advanced contact and quote request systems",
      "SEO-optimized content structure",
      "Responsive design across all devices"
    ],
    highlights: [
      "30+ Custom Sections",
      "Pixel-Perfect Design",
      "Performance Optimized"
    ]
  },
  {
    id: "sadop",
    title: "SADOP",
    subtitle: "Administrative platform",
    category: "Website",
    year: "2024",
    duration: "July - August 2024",
    status: "Live",
    description: "Administrative platform with integrated blog system",
    overview: "Administrative page with blog site. Created on Figma from scratch with complete design system and content management capabilities for educational administration.",
    website: "https://sadop.edu.ar/",
    backgroundImage: "/lovable-uploads/1dfc7708-cf1a-422e-b46e-a2caed89fe93.png",
    screenshotImage: "/lovable-uploads/1dfc7708-cf1a-422e-b46e-a2caed89fe93.png",
    technology: {
      stack: "WordPress",
      technologies: ["WordPress", "Custom Theme", "Figma Design System", "Custom Post Types"],
      stackTags: ["wordpress"]
    },
    role: "UI/UX Designer & Developer - Complete project ownership from Figma design system creation to full WordPress development and deployment",
    features: [
      "Complete administrative dashboard for educational management",
      "Integrated blog system with content management",
      "Custom design system created from scratch in Figma",
      "User role management and permissions",
      "Educational resource library",
      "News and announcements system",
      "Mobile-responsive interface",
      "SEO-optimized blog and content pages"
    ],
    designSystemComponents: [
      "Benefits Section",
      "Training Resources",
      "Guild Information",
      "Multimedia Content"
    ]
  },
  {
    id: "englacosmetics",
    title: "Engla Cosmetics",
    subtitle: "E-commerce platform",
    category: "E-commerce",
    year: "2023",
    duration: "October - December 2023",
    status: "Live & Selling",
    description: "Complete e-commerce solution for cosmetics brand",
    overview: "E-commerce page designed & developed by our team completely. Full-featured online store with product catalog, shopping cart, and payment integration for cosmetics and beauty products.",
    website: "https://englacosmetics.com/",
    backgroundImage: "/lovable-uploads/ea572ab5-8d36-4c25-b487-5cf6fbd19a67.png",
    screenshotImage: "/lovable-uploads/ea572ab5-8d36-4c25-b487-5cf6fbd19a67.png",
    technology: {
      stack: "WordPress E-commerce",
      technologies: ["WordPress", "WooCommerce", "Custom Theme", "Payment Gateways"],
      stackTags: ["wordpress"]
    },
    role: "Full-Stack E-commerce Developer - Complete project ownership including design, development, WooCommerce customization, and payment integration",
    features: [
      "Complete product catalog with detailed product pages",
      "Four specialized serum categories (Nutritive, Antioxidant, Anti-age, Decongestive)",
      "Advanced shopping cart and checkout system",
      "Secure payment gateway integration",
      "Customer account management and order history",
      "Inventory management system",
      "Product reviews and ratings",
      "Mobile-optimized shopping experience",
      "Email marketing integration",
      "SEO-optimized product pages"
    ],
    productCategories: [
      "Serum Nutritivo",
      "Serum Antioxidante",
      "Serum Anti-age",
      "Serum Descongestivo"
    ]
  },
  {
    id: "legal-insolvency",
    title: "Legal Insolvency Platform",
    subtitle: "Legal automation platform",
    category: "Web App",
    year: "2025",
    duration: "2025 - developing",
    status: "In Development",
    description: "AI-powered legal platform for insolvency filing assistance with expert validation",
    overview: "Digitally assisted and fully expert-checked platform that helps GmbH directors and legal teams file insolvencies with confidence. Specialized service for Managing Directors of German GmbHs dealing with personal liability risks.",
    website: "#",
    backgroundImage: "/lovable-uploads/cc5a66cc-ae7d-42ea-8ff8-33e9fed52ba3.png",
    screenshotImage: "/lovable-uploads/cc5a66cc-ae7d-42ea-8ff8-33e9fed52ba3.png",
    technology: {
      stack: "Bubble.io + OpenAI + n8n",
      technologies: ["Bubble.io", "OpenAI", "n8n"],
      stackTags: ["bubble", "n8n"]
    },
    role: "Bubble.io Developer & Automation Specialist - AI integration, workflow automation, legal document processing, and expert consultation system implementation",
    targetMarket: "Exclusively serving Managing Directors of German GmbHs facing insolvency-related legal challenges",
    features: [
      "AI-Powered Assessment: One-time assessment with 60-minute call with German insolvency lawyer (€450 incl. VAT)",
      "Verified Legal Experts: All processes reviewed and validated by qualified German legal professionals",
      "48-Hour Report: Comprehensive analysis and recommendations delivered within 48 hours",
      "GDPR Compliance: 100% GDPR compliant with encrypted document storage and processing",
      "Confidential Process: Completely confidential handling of all legal matters and documentation",
      "AI-Assisted Analysis: Powered by advanced AI for comprehensive risk assessment and guidance"
    ],
    serviceHighlights: [
      "One-time assessment with expert legal consultation",
      "60-minute dedicated call with German insolvency lawyer",
      "Comprehensive report delivered within 48 hours",
      "100% GDPR compliant data handling",
      "Confidential process with encrypted document storage",
      "AI-powered risk analysis and recommendations"
    ],
    complianceFeatures: [
      "GDPR Compliant",
      "Encrypted Storage",
      "Expert Verified",
      "Confidential Process"
    ]
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Live":
    case "Live & Selling":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "In Development":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    case "Coming Soon":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

export default function ProjectPage() {
  const params = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundProject = projects.find(p => p.id === params.id)
    setProject(foundProject)
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link href="/" className="text-[#e78a53] hover:text-[#e78a53]/80">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <img
          src={project.backgroundImage}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-6"
            >
              {project.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <span className={`px-4 py-2 rounded-full border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              <span className="px-4 py-2 bg-[#e78a53]/20 text-[#e78a53] border border-[#e78a53]/30 rounded-full">
                {project.category}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-8 left-8 z-30 flex items-center gap-2 text-white hover:text-[#e78a53] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Descripción del Proyecto</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">{project.overview}</p>
              <p className="text-white/70">{project.description}</p>
            </motion.div>

            {/* Features */}
            {project.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Características Principales</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#e78a53] mt-1 flex-shrink-0" />
                      <p className="text-white/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="space-y-8">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Detalles del Proyecto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#e78a53]" />
                  <div>
                    <p className="text-white/60 text-sm">Año</p>
                    <p className="text-white font-medium">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#e78a53]" />
                  <div>
                    <p className="text-white/60 text-sm">Duración</p>
                    <p className="text-white font-medium">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#e78a53]" />
                  <div>
                    <p className="text-white/60 text-sm">Rol</p>
                    <p className="text-white font-medium text-sm">{project.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Stack Tecnológico</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white/60 text-sm mb-2">Tecnologías Principales</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-[#e78a53]/20 text-[#e78a53] text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              {project.website !== "#" && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#e78a53] text-white rounded-lg hover:bg-[#e78a53]/90 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  Visitar Sitio Web
                </a>
              )}
              <Link
                href="/#projects"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Ver Más Proyectos
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Screenshot */}
        {project.screenshotImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Captura de Pantalla</h3>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src={project.screenshotImage}
                alt={`${project.title} screenshot`}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
