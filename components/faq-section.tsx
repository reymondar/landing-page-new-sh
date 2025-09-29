"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "¿Qué tipo de proyectos desarrolla Stack House?",
      answer:
        "Desarrollamos aplicaciones web, aplicaciones móviles nativas, software empresarial personalizado, e-commerce, dashboards administrativos, APIs y sistemas de automatización. Nos especializamos en soluciones tecnológicas completas que impulsan el crecimiento de tu negocio.",
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer:
        "Los tiempos varían según la complejidad del proyecto. Una aplicación web básica puede tomar 4-6 semanas, mientras que aplicaciones móviles o software empresarial pueden requerir 3-6 meses. Siempre proporcionamos cronogramas detallados durante la fase de planificación.",
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer:
        "Sí, ofrecemos soporte técnico continuo, actualizaciones de seguridad, mantenimiento y nuevas funcionalidades. Nuestros planes incluyen diferentes niveles de soporte para adaptarse a las necesidades de cada cliente.",
    },
    {
      question: "¿Trabajan con tecnologías específicas?",
      answer:
        "Utilizamos tecnologías modernas y probadas como React, Next.js, Node.js, TypeScript, y servicios en la nube. Seleccionamos la mejor stack tecnológica para cada proyecto, priorizando escalabilidad, seguridad y rendimiento.",
    },
    {
      question: "¿Cómo es el proceso de trabajo con Stack House?",
      answer:
        "Seguimos metodologías ágiles con comunicación constante. Comenzamos con un análisis detallado de requerimientos, seguido de diseño, desarrollo iterativo, testing y lanzamiento. Mantenemos al cliente informado en cada etapa del proceso.",
    },
    {
      question: "¿Pueden integrar con sistemas existentes?",
      answer:
        "Absolutamente. Tenemos experiencia integrando con CRMs, ERPs, sistemas de pago, APIs de terceros y bases de datos existentes. Nos aseguramos de que las nuevas soluciones funcionen perfectamente con tu infraestructura actual.",
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden py-12">
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">Preguntas Frecuentes</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          ¿Tienes dudas? Tenemos{" "}
          <span className="bg-gradient-to-b from-foreground via-rose-200 to-primary bg-clip-text text-transparent">
            respuestas
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              {...(index === faqs.length - 1 && { "data-faq": faq.question })}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <Minus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  ) : (
                    <Plus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4 text-muted-foreground leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
