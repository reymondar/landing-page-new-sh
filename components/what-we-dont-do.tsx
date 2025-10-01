"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const whatWeDontDoData = [
  {
    title: "Contratos transparentes",
    subtitle: "Un solo precio. Para todo.",
    description: "Te cotizamos una vez al inicio y ese es el precio final. Sin sorpresas a mitad del proyecto.",
    icon: "/contratos-transparentes.png",
    color: "from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-500/30"
  },
  {
    title: "8-12 semanas. No 6 meses de juntas.",
    subtitle: "",
    description: "Odiamos las reuniones eternas. Lanzamos rápido porque sabemos que cada día sin tu sistema es dinero que pierdes. Reuniones cortas, avances reales.",
    icon: "/8-12-semanas.png",
    color: "from-yellow-500/20 to-orange-600/20", 
    borderColor: "border-yellow-500/30"
  },
  {
    title: "Infraestructura personalizada",
    subtitle: "",
    description: "Completa propiedad de lo producido de principio a fin. Sin dependencia eterna, ni iteraciones infinitas. Apuntamos a que puedas mantenerlo tú mismo.",
    icon: "/codigo tuyo.png",
    color: "from-blue-500/20 to-cyan-600/20",
    borderColor: "border-blue-500/30"
  }
]

export default function WhatWeDontDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="what-we-dont-do" className="text-foreground relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Background Effects */}
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-30 blur-3xl select-none"></div>
      <div className="via-primary/30 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className={cn(
              "mb-4 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-transparent",
              geist.className,
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sin letra chica
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transparencia total desde el día uno
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whatWeDontDoData.map((item, index) => (
            <motion.div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl border-2 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl",
                "bg-background/50 backdrop-blur-sm",
                item.borderColor,
                "hover:border-primary/50"
              )}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (index * 0.1),
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="mb-4 flex items-center justify-start"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Subtitle */}
                {item.subtitle && (
                  <p className="text-lg font-medium text-primary mb-3 group-hover:text-primary/80 transition-colors duration-300">
                    {item.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{
                  boxShadow: "0 0 30px rgba(231, 138, 83, 0.3)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="mt-12 sm:mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
