"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    name: "Aplicación Web",
    price: "Desde $1,700 USD",
    description: "Solución completa para tu presencia digital",
    features: [
      "Diseño responsivo y moderno",
      "Panel de administración intuitivo",
      "Integración con APIs y servicios externos",
      "Optimización SEO y velocidad",
      "Hosting y dominio por 1 año",
      "Soporte técnico 24/7",
      "Actualizaciones de seguridad",
      "Analytics y métricas integradas",
    ],
    popular: false,
    cta: "Solicitar Cotización",
  },
  {
    name: "Aplicación Móvil",
    price: "Desde $5,000 USD",
    description: "Lleva tu negocio al móvil con apps nativas",
    features: [
      "Desarrollo nativo iOS y Android",
      "Diseño UX/UI profesional",
      "Integración con servicios en la nube",
      "Notificaciones push personalizadas",
      "Sistemas de pago integrados",
      "Publicación en App Store y Google Play",
      "Testing y QA completo",
      "Mantenimiento por 6 meses",
    ],
    popular: true,
    cta: "Solicitar Cotización",
  },
  {
    name: "Software Personalizado",
    price: "Cotización a medida",
    description: "Soluciones empresariales completamente personalizadas",
    features: [
      "Análisis completo de requerimientos",
      "Arquitectura escalable y segura",
      "Integración con sistemas existentes",
      "Documentación técnica completa",
      "Capacitación para tu equipo",
      "Soporte post-lanzamiento",
      "Escalabilidad garantizada",
      "Metodologías ágiles",
    ],
    popular: false,
    cta: "Contactar Ventas",
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="relative py-12 px-4">
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
            <span className="text-sm font-medium text-white/80">Cotizemos tu proyecto juntos</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            Elige tu plan perfecto
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            📞 Contáctanos para conocer más detalles y obtener tu propuesta personalizada
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-6 sm:p-8 backdrop-blur-sm border transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-[#e78a53]/10 to-transparent border-[#e78a53]/30 shadow-lg shadow-[#e78a53]/10"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Más Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-xs font-medium text-white/60">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#e78a53] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 mt-auto ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white shadow-lg shadow-[#e78a53]/25 hover:shadow-[#e78a53]/40"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </motion.button>
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
          <p className="text-white/60 mb-4">¿Necesitas una solución personalizada? Estamos aquí para ayudarte.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#e78a53] hover:text-[#e78a53]/80 font-medium transition-colors"
          >
            Contacta a nuestro equipo de ventas →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
