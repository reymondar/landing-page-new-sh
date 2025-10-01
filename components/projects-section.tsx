"use client"

import { motion } from "framer-motion"
import { ExternalLink, Eye, Calendar, Clock, Globe } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "business-profile-platform",
    title: "Confetti",
    subtitle: "Plataforma de listado de empresas",
    category: "Aplicación Web",
    year: "2024",
    duration: "2025 - Presente",
    status: "Live",
    description: "Plataforma moderna de valoración empresarial y perfiles con capacidades de listado seguro",
    website: "https://confettilist.com",
    backgroundImage: "/CONFETTI.png",
    screenshotImage: "/CONFETTI.png",
    technology: {
      stack: "Bubble.io",
      technologies: ["Bubble.io"],
      stackTags: ["bubble"]
    },
    role: "Desarrollo full-stack, optimización SEO, implementación de diseño colaborativo y optimización de rendimiento"
  },
  {
    id: "majella",
    title: "Majella",
    subtitle: "Plataforma de gestión de eventos (MVP)",
    category: "Aplicación Web",
    year: "2025",
    duration: "Mayo 2025 - Presente",
    status: "Live",
    description: "Plataforma de participación experiencial que transforma cómo las personas aparecen, participan y construyen valor en eventos en vivo y más allá",
    website: "https://www.majella.io/",
    backgroundImage: "/MAJELLA.png",
    screenshotImage: "/MAJELLA.png",
    technology: {
      stack: "Bubble.io + n8n + Lovable",
      technologies: ["Bubble.io", "n8n", "Lovable"],
      stackTags: ["bubble", "n8n", "lovable"]
    },
    role: "Desarrollo full-stack, diseño de automatización de flujos de trabajo, implementación de programador personalizado y arquitectura de sistema de gamificación"
  },
  {
    id: "golf-it",
    title: "Golf It",
    subtitle: "Buscador de campos de golf con IA",
    category: "Aplicación Web Progresiva",
    year: "2025",
    duration: "Enero 2025 - Presente",
    status: "En Desarrollo",
    description: "Aplicación web móvil para encontrar campos de golf con emparejamiento por IA",
    website: "https://golfitargentina.com/",
    backgroundImage: "/Golf It.png",
    screenshotImage: "/Golf It.png",
    technology: {
      stack: "Lovable + n8n + Supabase",
      technologies: ["Lovable", "React + TypeScript", "Supabase", "Automatización n8n", "Integración Mapbox", "Aplicación Web Progresiva"],
      stackTags: ["react", "n8n", "supabase"]
    },
    role: "Desarrollador Full-Stack y Especialista en IA - Liderando el desarrollo de la PWA, sistema de emparejamiento por IA, integración Mapbox y automatización de flujos de trabajo n8n"
  },
  {
    id: "nitfy",
    title: "NiTFy",
    subtitle: "Sitio web de startup",
    category: "Sitio Web",
    year: "2024",
    duration: "2024",
    status: "Live",
    description: "Sitio web de startup de alto rendimiento con puntuaciones perfectas de Lighthouse para tecnología de carga inalámbrica",
    website: "https://nitcharge.com/",
    backgroundImage: "/NIT CHARGE.png",
    screenshotImage: "/NIT CHARGE.png",
    technology: {
      stack: "React.js + Vercel.js + Firestore",
      technologies: ["React.js", "Vercel", "Firestore"],
      stackTags: ["react"]
    },
    role: "Diseñador y Desarrollador - Desarrollo independiente completo incluyendo diseño UX/UI, desarrollo frontend, optimización de rendimiento y despliegue"
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
    website: "https://delfinolynch.com.ar/",
    backgroundImage: "/DELFINO LYNCH.png",
    screenshotImage: "/DELFINO LYNCH.png",
    technology: {
      stack: "WordPress",
      technologies: ["WordPress", "Custom PHP Development", "MySQL Database"],
      stackTags: ["wordpress"]
    },
    role: "Full-Stack Developer - Responsible for complete development including frontend design, backend functionality, and dashboard implementation"
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
    website: "https://molokna.com/about-us/",
    backgroundImage: "/molokna.png",
    screenshotImage: "/molokna.png",
    technology: {
      stack: "WordPress",
      technologies: ["WordPress", "Custom Theme Development", "Figma to WordPress", "Advanced Custom Fields"],
      stackTags: ["wordpress"]
    },
    role: "WordPress Developer - Complete Figma-to-WordPress conversion, custom theme development, and performance optimization for 30+ sections"
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
    website: "https://sadop.edu.ar/",
    backgroundImage: "/Sadop.png",
    screenshotImage: "/Sadop.png",
    technology: {
      stack: "WordPress",
      technologies: ["WordPress", "Custom Theme", "Figma Design System", "Custom Post Types"],
      stackTags: ["wordpress"]
    },
    role: "UI/UX Designer & Developer - Complete project ownership from Figma design system creation to full WordPress development and deployment"
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
    website: "https://englacosmetics.com/",
    backgroundImage: "/ENGLA.png",
    screenshotImage: "/ENGLA.png",
    technology: {
      stack: "WordPress E-commerce",
      technologies: ["WordPress", "WooCommerce", "Custom Theme", "Payment Gateways"],
      stackTags: ["wordpress"]
    },
    role: "Full-Stack E-commerce Developer - Complete project ownership including design, development, WooCommerce customization, and payment integration"
  },
  {
    id: "legal-insolvency",
    title: "SolventIQ",
    subtitle: "Plataforma de automatización legal",
    category: "Aplicación Web",
    year: "2025",
    duration: "2025 - desarrollando",
    status: "En Desarrollo",
    description: "Plataforma legal impulsada por IA para asistencia en presentación de insolvencia con validación experta",
    website: "#",
    backgroundImage: "/SOLVENTIQ.png",
    screenshotImage: "/SOLVENTIQ.png",
    technology: {
      stack: "Bubble.io + OpenAI + n8n",
      technologies: ["Bubble.io", "OpenAI", "n8n"],
      stackTags: ["bubble", "n8n"]
    },
    role: "Desarrollador Bubble.io y Especialista en Automatización - Integración de IA, automatización de flujos de trabajo, procesamiento de documentos legales e implementación de sistema de consulta experta"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Live":
    case "Live & Selling":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "In Development":
    case "En Desarrollo":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    case "Coming Soon":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

export function ProjectsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            Únete al club de fundadores con éxito
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#e78a53]/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.backgroundImage || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#e78a53]/90 text-white text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <Link href={`/projects/${project.id}`}>
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                    </Link>
                    {project.website !== "#" && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#e78a53]" />
                  <span className="text-white/60 text-xs">{project.year}</span>
                  <Clock className="w-4 h-4 text-[#e78a53] ml-2" />
                  <span className="text-white/60 text-xs">{project.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-3">{project.subtitle}</p>
                <p className="text-white/60 text-xs mb-4 line-clamp-2">{project.description}</p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technology.stackTags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Link href={`/projects/${project.id}`} className="flex-1">
                    <button className="w-full px-4 py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-colors">
                      Ver Detalles
                    </button>
                  </Link>
                  {project.website !== "#" && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full px-4 py-2 bg-[#e78a53] text-white text-sm rounded-lg hover:bg-[#e78a53]/90 transition-colors flex items-center justify-center gap-1">
                        <Globe className="w-4 h-4" />
                        Ver Sitio
                      </button>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#e78a53]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}