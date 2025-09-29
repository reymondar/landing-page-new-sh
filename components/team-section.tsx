"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const teamMembers = [
  {
    name: "Owen Haiek",
    role: "Head of Development",
    description:
      "Experto en arquitecturas escalables y tecnologías de vanguardia. 5+ años creando soluciones que transforman negocios.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    name: "Ramón Arana",
    role: "Lead Project Manager",
    description:
      "Especialista en metodologías ágiles y entrega de proyectos. Garantiza que tu proyecto se complete a tiempo y dentro del presupuesto.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    skills: ["Scrum", "Kanban", "Jira", "Slack"],
  },
  {
    name: "Cristina Pérez",
    role: "Design Manager",
    description:
      "Creadora de experiencias digitales excepcionales. Combina estética moderna con funcionalidad intuitiva para maximizar la conversión.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#e78a53]" />
            <span className="text-sm font-medium text-white/80">Nuestro Equipo</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            Pequeño Equipo, soluciones a medida
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Más de 6 años construyendo aplicaciones para empresas por todo el mundo
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative rounded-2xl p-8 backdrop-blur-sm border border-white/10 bg-white/5 hover:border-[#e78a53]/30 transition-all duration-300 group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#e78a53]/20 group-hover:border-[#e78a53]/40 transition-all duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#e78a53] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-sm">✨</span>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#e78a53] font-medium text-sm mb-3">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed">{member.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#e78a53]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">¿Quieres conocer más sobre nuestro proceso de trabajo?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#e78a53] hover:text-[#e78a53]/80 font-medium transition-colors"
          >
            Agenda una reunión con el equipo →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
