"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 120 // Account for sticky header height + margin
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full h-80 flex justify-center items-center"
          style={{ backgroundColor: "#e78a53" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden w-full h-full flex flex-col justify-center items-center px-12 py-12">
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a
                className="flex items-center justify-center gap-2"
                href="https://v0.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 147 70"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="text-[#121113] rounded-full size-8 w-8"
                >
                  <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z"></path>
                  <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z"></path>
                </svg>
              </a>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={() => handleNavClick("features")}
                className="px-3 py-2 text-sm font-medium text-[#121113] hover:text-[#121113]/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavClick("pricing")}
                className="px-3 py-2 text-sm font-medium text-[#121113] hover:text-[#121113]/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                Precios
              </button>
              <button
                onClick={() => handleNavClick("testimonials")}
                className="px-3 py-2 text-sm font-medium text-[#121113] hover:text-[#121113]/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                Testimonios
              </button>
              <button
                onClick={() => handleNavClick("team")}
                className="px-3 py-2 text-sm font-medium text-[#121113] hover:text-[#121113]/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                Equipo
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className="px-3 py-2 text-sm font-medium text-[#121113] hover:text-[#121113]/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                Proyectos
              </button>
              <button
                onClick={() => handleNavClick("faq")}
                className="px-3 py-2 text-sm font-medium text-[#121113] hover:text-[#121113]/80 transition-colors cursor-pointer whitespace-nowrap"
              >
                FAQ
              </button>
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/34660926641?text=Hola%2C%20me%20gustaria%20conversar%20acerca%20de%20una%20idea%20que%20tengo%20en%20mente"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-[#121113] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
              >
                Contactar
              </a>
            </motion.div>

            {/* Background Text */}
            <motion.h2
              className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] font-bold select-none opacity-10"
              style={{ color: "#121113" }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              SH
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}