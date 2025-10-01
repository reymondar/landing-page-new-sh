"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e78a53]/10 via-transparent to-[#e78a53]/10 rounded-3xl blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              ¿Listo para transformar tu idea en realidad?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            No dejes que tu competencia se adelante. Agenda tu consulta gratuita hoy y descubre cómo Stack House puede
            llevar tu negocio al siguiente nivel.
          </p>

          {/* Urgency Text */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium">
              <span>📅</span>
              <span>Últimos 2 proyectos para Q4</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/34660926641?text=Hola%2C%20me%20gustaria%20conversar%20acerca%20de%20una%20idea%20que%20tengo%20en%20mente"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white font-bold rounded-full shadow-lg shadow-[#e78a53]/25 hover:shadow-[#e78a53]/40 transition-all duration-300 inline-block"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta Gratuita</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
            </motion.a>

          </div>

        </motion.div>
      </div>
    </section>
  )
}
