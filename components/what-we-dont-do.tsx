"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const whatWeDontDoData = [
  {
    title: "No construimos productos genéricos",
    description: "Interfaces fáciles de usar que se adapten a tus prioridades",
    icon: "🚫",
    color: "from-red-500/20 to-red-600/20",
    borderColor: "border-red-500/30"
  },
  {
    title: "No hacemos por hacer", 
    description: "Hacemos para brindarte tiempo y mejores resultados para ti y tu equipo",
    icon: "⚡",
    color: "from-yellow-500/20 to-orange-600/20", 
    borderColor: "border-yellow-500/30"
  },
  {
    title: "No cobramos demás",
    description: "Presupuestamos una única vez en función del alcance del producto",
    icon: "💰",
    color: "from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-500/30"
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
            Qué no hacemos
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nuestra filosofía se basa en la transparencia y el compromiso con la excelencia
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
              {/* Background Gradient */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                `bg-gradient-to-br ${item.color}`
              )} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-2xl"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

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
