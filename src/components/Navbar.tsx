"use client"

import * as React from "react"
import { useState, useCallback } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useActiveSection } from "@/hooks/useActiveSection"

export default function Navbar() {
  const { scrollY } = useScroll()
  const { setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(["home", "about", "skills", "projects", "contact"])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Smooth scroll handler
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const el = document.getElementById(sectionId)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }, [])

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <>
      {/* ═══ iOS Glassmorphism Floating Dynamic Island Navbar ═══ */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{
          y: isScrolled ? 0 : -70,
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center"
      >
        <div
          className={`w-full max-w-5xl px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "pointer-events-auto scale-100" : "pointer-events-none scale-95"
          }`}
          style={{
            background: "var(--ios-glass-bg)",
            backdropFilter: "var(--ios-glass-blur)",
            WebkitBackdropFilter: "var(--ios-glass-blur)",
            border: "1px solid var(--ios-glass-border)",
            boxShadow: "var(--ios-glass-shadow)",
          }}
        >
          {/* Brand Monogram Badge */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f59e0b] text-white font-black flex items-center justify-center font-sans text-xs sm:text-sm shadow-xs transition-transform duration-300 group-hover:scale-110">
              A
            </div>
            <span
              className="font-sans font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-colors"
              style={{ color: "var(--ios-glass-text-hover)" }}
            >
              ABISHEK
            </span>
          </a>

          {/* Desktop Nav Links — iOS Frosted Glass Segmented Control */}
          <div
            className="hidden md:flex items-center gap-1 p-1 rounded-full backdrop-blur-md"
            style={{
              background: "var(--ios-glass-pill-bg)",
              border: "1px solid var(--ios-glass-pill-border)",
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-[#f59e0b] font-semibold"
                      : "hover:text-[var(--ios-glass-text-hover)] font-medium"
                  }`}
                  style={{
                    color: isActive ? "#f59e0b" : "var(--ios-glass-text)",
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="ios-scroll-active-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        background: "var(--ios-glass-active-bg)",
                        border: "1px solid var(--ios-glass-active-border)",
                        boxShadow: "var(--ios-glass-active-shadow)",
                      }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right Action Controls: Get in Touch, Theme Toggle, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="hidden sm:inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer shadow-xs"
              style={{
                background: "var(--ios-glass-btn-bg)",
                border: "1px solid var(--ios-glass-btn-border)",
                color: "var(--ios-glass-btn-text)",
              }}
            >
              Get in Touch
            </motion.a>

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                const isDark = document.documentElement.classList.contains("dark")
                setTheme(isDark ? "light" : "dark")
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs"
              style={{
                background: "var(--ios-glass-btn-bg)",
                border: "1px solid var(--ios-glass-btn-border)",
                color: "#f59e0b",
              }}
              aria-label="Toggle theme"
            >
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 theme-icon-sun" />
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 theme-icon-moon" />
            </motion.button>

            {/* Mobile Menu Trigger */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs"
              style={{
                background: "var(--ios-glass-btn-bg)",
                border: "1px solid var(--ios-glass-btn-border)",
                color: "var(--ios-glass-btn-text)",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ═══ Mobile Menu — iOS Frosted Glass Sheet ═══ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 sm:p-8"
            style={{
              background: "var(--ios-sheet-bg)",
              backdropFilter: "blur(32px) saturate(190%)",
              WebkitBackdropFilter: "blur(32px) saturate(190%)",
            }}
          >
            {/* iOS Close Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-xs cursor-pointer"
              style={{
                background: "var(--ios-glass-btn-bg)",
                border: "1px solid var(--ios-glass-btn-border)",
                color: "var(--ios-glass-btn-text)",
              }}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* iOS Island Card Container */}
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xs sm:max-w-sm rounded-3xl p-5 sm:p-6 flex flex-col gap-2.5 shadow-2xl"
              style={{
                background: "var(--ios-glass-bg)",
                border: "1px solid var(--ios-glass-border)",
                boxShadow: "var(--ios-glass-shadow)",
              }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#f59e0b] font-bold px-3 py-1">
                Navigation
              </span>

              {navItems.map((item, i) => {
                const isActive = activeSection === item.id
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base sm:text-lg font-sans font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#f59e0b]"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                    style={{
                      background: isActive ? "var(--ios-glass-active-bg)" : "transparent",
                      border: isActive ? "1px solid var(--ios-glass-active-border)" : "1px solid transparent",
                      color: isActive ? "#f59e0b" : "var(--ios-glass-text-hover)",
                    }}
                  >
                    <span className="flex items-center gap-2.5">
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />}
                      {item.label}
                    </span>
                    <span className="text-xs opacity-40 font-mono">0{i + 1}</span>
                  </motion.a>
                )
              })}

              <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-1 text-center">
                <span className="text-[11px] font-sans text-gray-500">Contact</span>
                <a
                  href="mailto:abishekjeyaraj334@gmail.com"
                  className="text-xs font-semibold text-[#f59e0b]"
                >
                  abishekjeyaraj334@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
