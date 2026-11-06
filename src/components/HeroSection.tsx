"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, ArrowRight, Sun, Moon, Cloud, Check, Star, Mail, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useActiveSection } from "@/hooks/useActiveSection"

// ═══ Brand Logos for Certifications ═══
const CiscoLogo = () => (
  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#049fd9] flex flex-col items-center justify-center shadow-xs shrink-0">
    <div className="flex items-end gap-[1.5px] h-2.5 sm:h-3 mb-0.5">
      <span className="w-[1.5px] h-1.5 bg-white rounded-full" />
      <span className="w-[1.5px] h-2.5 bg-white rounded-full" />
      <span className="w-[1.5px] h-3 bg-white rounded-full" />
      <span className="w-[1.5px] h-2 bg-white rounded-full" />
      <span className="w-[1.5px] h-3 bg-white rounded-full" />
      <span className="w-[1.5px] h-2.5 bg-white rounded-full" />
      <span className="w-[1.5px] h-1.5 bg-white rounded-full" />
    </div>
    <span className="text-[6px] sm:text-[6.5px] font-bold text-white tracking-tighter leading-none">cisco</span>
  </div>
)

const AwsLogo = () => (
  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#161d26] flex items-center justify-center shadow-xs shrink-0 p-1">
    <svg viewBox="0 0 48 30" fill="none" className="w-4 sm:w-5 h-auto">
      <path
        d="M13.2 16.5c-1.3 0-2.3-.3-3-.9-.7-.6-1-1.4-1-2.4 0-1.1.4-2 1.1-2.6.7-.6 1.7-.9 3-.9.9 0 1.8.1 2.5.3v-.6c0-1.1-.7-1.7-2.1-1.7-.8 0-1.7.2-2.6.5l-.5-1.7c1.1-.5 2.3-.7 3.6-.7 1.7 0 3 .4 3.8 1.1.9.8 1.3 1.9 1.3 3.3v7.3h-2.1v-1.8c-.8 1.3-2.1 2-4 2zm.5-2.2c1.1 0 2-.4 2.5-1.1v-1.1c-.6-.2-1.3-.3-2.1-.3-.9 0-1.6.2-2 .6-.4.4-.6.9-.6 1.5 0 .6.2 1 .6 1.3.4.3 1 .4 1.6.4zm10.7 2.2l-3.3-10.7h2.5l2.1 7.8 2-7.8h2.3l2 7.8 2.2-7.8h2.4l-3.4 10.7h-2.3l-2.1-7.8-2.1 7.8h-2.3zm18.3.1c-1.2 0-2.3-.2-3.4-.7l.7-1.8c.9.4 1.8.6 2.7.6 1.2 0 1.9-.5 1.9-1.2 0-.4-.2-.8-.6-1.1-.4-.3-1.1-.6-2.1-1-.1-.1-.3-.1-.4-.2-1.2-.5-1.9-1-2.4-1.6-.4-.6-.7-1.4-.7-2.2 0-1.2.5-2.1 1.4-2.8 1-.7 2.2-1 3.7-1 1.1 0 2.1.2 3.1.6l-.6 1.8c-.8-.3-1.6-.5-2.5-.5-1.1 0-1.8.4-1.8 1.1 0 .4.2.7.5 1 .3.3 1 .6 2 1 .1.1.3.1.4.2 1.3.5 2.1 1.1 2.6 1.7.5.6.7 1.4.7 2.3 0 1.2-.5 2.2-1.4 2.9-.9.8-2.2 1.2-3.8 1.2z"
        fill="#FFFFFF"
      />
      <path
        d="M3.7 24.2c7.2 4.4 17.5 6.8 27.5 3.3 1.4-.5 1.5-1.5.3-2-6.5-2.6-17.7-1.8-25.2 1.7-.8.4-.7.9-.1 1.3"
        fill="#FF9900"
      />
      <path
        d="M32.5 24.8c-.8-.3-2.6.2-3.6.4-.3.1-.3.3 0 .4 1.8 1 4.9 1.7 5.7 1.1.5-.4.1-3.4-.9-4.8-.2-.3-.5-.2-.5.1.2 1.2.3 2.8-.7 2.8"
        fill="#FF9900"
      />
    </svg>
  </div>
)

const PythonLogo = () => (
  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0 p-1 border border-black/5">
    <svg viewBox="0 0 128 128" className="w-4 sm:w-5 h-4 sm:h-5">
      <path
        d="M63.7 2.1c-16 0-25 7-25 16.3v12h25.7v3.7H20.6C9.2 34.1 0 43.5 0 57.2c0 14.2 8 22.8 21.6 22.8h8.8v-12.7c0-8.9 7.6-16.3 16.5-16.3h25.2c7.4 0 13.5-6.1 13.5-13.5V18.4C85.6 7.4 77.2 2.1 63.7 2.1zm-13.8 8.8a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8z"
        fill="#3776AB"
      />
      <path
        d="M64.3 125.9c16 0 25-7 25-16.3v-12H63.6v-3.7h43.8c11.4 0 20.6-9.4 20.6-23.1 0-14.2-8-22.8-21.6-22.8h-8.8v12.7c0 8.9-7.6 16.3-16.5 16.3H45.9c-7.4 0-13.5 6.1-13.5 13.5v19.1c0 11 8.4 16.3 21.9 16.3zm13.8-8.8a4.4 4.4 0 1 1 0-8.8 4.4 4.4 0 0 1 0 8.8z"
        fill="#FFD43D"
      />
    </svg>
  </div>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function HeroSection() {
  const { setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(["home", "about", "skills", "projects", "contact"])

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen px-3 sm:px-6 md:px-8 py-3 sm:py-6 lg:py-8 flex flex-col justify-start sm:justify-between items-center transition-colors duration-500 overflow-hidden"
      style={{
        background: "var(--section-bg, #faf4ec)",
      }}
    >
      {/* ═══ Background Decorative Dots Grid (Top Left - Hidden on Mobile) ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2 }}
        className="absolute top-12 left-6 sm:left-12 grid grid-cols-6 gap-2.5 pointer-events-none select-none hidden md:grid"
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
        ))}
      </motion.div>

      {/* ═══ 1. TOP FLOATING ISLAND NAVBAR (iOS Glassmorphism) ═══ */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-40 w-full max-w-4xl mx-auto pt-1 sm:pt-2"
      >
        <div
          className="px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full flex items-center justify-between transition-all duration-300"
          style={{
            background: "var(--ios-glass-bg)",
            backdropFilter: "var(--ios-glass-blur)",
            WebkitBackdropFilter: "var(--ios-glass-blur)",
            border: "1px solid var(--ios-glass-border)",
            boxShadow: "var(--ios-glass-shadow)",
          }}
        >
          {/* Brand Mark: Amber Circle "A" + Abishek */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f59e0b] text-white font-black flex items-center justify-center font-sans text-xs sm:text-sm shadow-xs"
            >
              A
            </motion.div>
            <span
              className="font-sans font-bold text-sm sm:text-base tracking-tight transition-colors"
              style={{ color: "var(--ios-glass-text-hover)" }}
            >
              Abishek
            </span>
          </a>

          {/* Desktop Nav Links — iOS Glass Segmented Control */}
          <nav
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
                      layoutId="hero-ios-active-pill"
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
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Pill */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const isDark = document.documentElement.classList.contains("dark")
                setTheme(isDark ? "light" : "dark")
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs"
              style={{
                background: "var(--ios-glass-btn-bg)",
                border: "1px solid var(--ios-glass-btn-border)",
                color: "#f59e0b",
              }}
              aria-label="Toggle color theme"
            >
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 theme-icon-sun" />
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 theme-icon-moon" />
            </motion.button>

            {/* "Let's Talk" Capsule Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="font-bold text-xs px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-xs transition-all duration-200 cursor-pointer hidden sm:inline-block"
              style={{
                background: "var(--ios-glass-btn-bg)",
                border: "1px solid var(--ios-glass-btn-border)",
                color: "var(--ios-glass-btn-text)",
              }}
            >
              Let&apos;s Talk
            </motion.a>

            {/* Mobile Menu Icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xs"
              style={{
                background: "var(--ios-glass-btn-bg)",
                border: "1px solid var(--ios-glass-btn-border)",
                color: "var(--ios-glass-btn-text)",
              }}
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4 stroke-[2]" />
            </motion.button>
          </div>

        </div>
      </motion.header>

      {/* ═══ 2. TOP HEADLINE & ROTATING STAMP AREA ═══ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center text-center pt-5 sm:pt-8 md:pt-12 px-2">
        
        {/* Floating Top Badge: "Open to SOC Analyst Roles" */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: 1,
            y: [0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 dark:bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-black/8 dark:border-white/15 shadow-sm mb-2.5 sm:mb-3 select-none"
        >
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </div>
          <span className="font-sans text-[11px] sm:text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
            Open to SOC Analyst Roles
          </span>
        </motion.div>

        {/* Main Display Headline (Fluid Responsive Typography) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative px-2 max-w-full"
        >
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-[76px] tracking-tight leading-[1.12] sm:leading-[1.08] text-gray-900 dark:text-white">
            I&apos;m{" "}
            <span className="text-[#f59e0b] relative inline-block whitespace-nowrap">
              Abishek Jeyaraj
              {/* Playful Animated Spark Lines */}
              <motion.span
                animate={{
                  rotate: [-8, 12, -8],
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                  ease: "easeInOut",
                }}
                className="absolute -top-1 sm:-top-2 -right-3.5 sm:-right-6 text-[#f59e0b] font-black text-lg sm:text-2xl select-none inline-block origin-bottom-left"
              >
                丷
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 dark:text-gray-300 mt-2 sm:mt-3 tracking-tight max-w-md sm:max-w-xl mx-auto px-2">
            Cybersecurity & Software Developer based in India
          </p>
        </motion.div>

        {/* ═══ Top-Right Circular Rotating "HIRE ME" Stamp (Desktop only) ═══ */}
        <div className="absolute right-0 sm:right-4 md:right-8 lg:right-12 top-0 hidden md:block select-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            whileHover={{ scale: 1.15 }}
            className="relative w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center cursor-pointer"
          >
            {/* Spinning Circular Text Ring */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="hireMeCircle"
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                fill="none"
              />
              <text className="text-[10px] font-bold tracking-[2.6px] uppercase fill-gray-900 dark:fill-white">
                <textPath href="#hireMeCircle" startOffset="0%">
                  • HIRE ME • HIRE ME • HIRE ME
                </textPath>
              </text>
            </svg>
            {/* Center Orange Disc with Arrow */}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="absolute w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shadow-md cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 text-white stroke-[2.5]" />
            </motion.a>
          </motion.div>
        </div>

      </div>

      {/* ═══ 3. MAIN INTERACTIVE STAGE (NATURAL MOBILE FLOW) ═══ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-8 pt-4 sm:pt-6 pb-4">
        
        {/* ════ CENTER COLUMN: Unified Portrait Frame with Warm Circle Halo & CTAs (ORDER 1 ON MOBILE) ════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 lg:col-span-4 relative flex flex-col items-center justify-end my-2 sm:my-0"
        >
          {/* Fixed-Ratio Centerpiece Circular Frame (Pic Contained INSIDE Circle) */}
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="relative w-[280px] sm:w-[330px] md:w-[370px] lg:w-[390px] h-[280px] sm:h-[330px] md:h-[370px] lg:h-[390px] rounded-full overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.45)] border border-black/10 dark:border-white/10"
            style={{
              background: "radial-gradient(circle at 50% 38%, #dfc3a2 0%, #caa980 55%, #b1936c 100%)",
              boxShadow: "0 18px 45px rgba(0, 0, 0, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.28)",
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            }}
          >
            {/* Abishek Portrait Cutout (Framed completely INSIDE the circle with comfortable headroom) */}
            <div className="absolute inset-x-0 bottom-0 top-[7%] sm:top-[6%] flex justify-center items-end pointer-events-none select-none">
              <Image
                src="/portfolio_profile_transparent.png"
                alt="Abishek Jeyaraj"
                width={1240}
                height={960}
                priority
                className="w-auto h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
              />
            </div>
          </motion.div>

          {/* Center Buttons Over Torso Bottom (Overlapping bottom edge of circle) */}
          <div className="relative z-30 -mt-5 sm:-mt-6 flex items-center justify-center gap-2.5 sm:gap-3 w-full px-2">
            {/* Orange "Portfolio →" Pill */}
            <motion.a
              whileHover={{ scale: 1.06, y: -2, boxShadow: "0 15px 30px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.94 }}
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#f59e0b] hover:bg-[#ea580c] text-[#1a1412] font-sans font-bold text-xs sm:text-sm pl-4.5 sm:pl-6 pr-2 sm:pr-3 py-2 sm:py-2.5 rounded-full shadow-lg transition-colors duration-300 cursor-pointer"
            >
              <span>Portfolio</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1a1412] text-white flex items-center justify-center">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
              </div>
            </motion.a>

            {/* White "Hire Me" Pill */}
            <motion.a
              whileHover={{ scale: 1.06, y: -2, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)" }}
              whileTap={{ scale: 0.94 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 font-sans font-bold text-xs sm:text-sm px-4.5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md border border-black/10 transition-colors duration-300 cursor-pointer"
            >
              <span>Hire Me</span>
            </motion.a>
          </div>
        </motion.div>

        {/* ════ LEFT COLUMN: Socials + 3 Certifications Pill + Security Badge (ORDER 2 ON MOBILE) ════ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1 lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-5 sm:gap-7 pb-2 lg:pb-10"
        >
          {/* Follow Me On */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="font-sans font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
              Follow Me On
            </span>
            <div className="flex items-center gap-2.5">
              {[
                { icon: GithubIcon, href: "https://github.com/AbishekJeyaraj", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://linkedin.com/in/abishek-jeyaraj-67d", label: "LinkedIn" },
                { icon: Mail, href: "mailto:abishekjeyaraj334@gmail.com", label: "Email" },
                { icon: XIcon, href: "https://x.com", label: "X" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  whileHover={{ scale: 1.18, y: -4, boxShadow: "0 10px 20px rgba(245, 158, 11, 0.25)" }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.05 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1412] shadow-sm border border-black/8 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-[#f59e0b] transition-colors"
                >
                  <social.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 3 Certifications & Internships Box */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
            className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 group cursor-default"
          >
            {/* Badges Capsule */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center -space-x-2 bg-white/80 dark:bg-white/10 p-1.5 rounded-full shadow-xs border border-black/8 dark:border-white/10 backdrop-blur-md"
            >
              <CiscoLogo />
              <AwsLogo />
              <PythonLogo />
            </motion.div>
            {/* Description */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-sans font-bold text-xs sm:text-sm text-gray-900 dark:text-white group-hover:text-[#f59e0b] transition-colors">
                3 Certifications & Internships
              </span>
              <span className="font-sans text-[10.5px] sm:text-xs text-gray-600 dark:text-gray-400">
                Cisco Cybersecurity &middot; AWS Cloud &middot; Python Development
              </span>
            </div>
          </motion.div>

          {/* Floating Pill: ✔ Security */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center gap-2 bg-white dark:bg-[#1a1412] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-black/8 dark:border-white/10 select-none cursor-pointer"
          >
            <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
              <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
            </div>
            <span className="font-sans font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
              Security
            </span>
            {/* Animated Signal Vibe Waves */}
            <motion.div
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.95, 1.15, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="flex items-center gap-0.5 text-[#f59e0b] ml-1 select-none"
            >
              <span className="text-xs sm:text-sm font-bold leading-none">)</span>
              <span className="text-sm sm:text-base font-bold leading-none">)</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ════ RIGHT COLUMN: Quote + Skills Pills + Cloud Badge (ORDER 3 ON MOBILE) ════ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="order-3 lg:order-3 lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-5 sm:gap-7 pb-4 lg:pb-10 lg:pl-6 xl:pl-10"
        >
          {/* Quote Block */}
          <motion.div
            whileHover={{ x: -4 }}
            className="flex flex-col items-center sm:items-start max-w-xs sm:max-w-sm cursor-default px-2"
          >
            <motion.span
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-[#f59e0b] font-serif text-3xl sm:text-5xl leading-none select-none inline-block self-center sm:self-start"
            >
              ❝
            </motion.span>
            <p className="font-sans italic font-medium text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200 leading-snug mt-1 text-center sm:text-left max-w-[280px]">
              Building secure systems and detecting threats before they become incidents.
            </p>
          </motion.div>

          {/* Interactive Skill Pills Cloud */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 max-w-xs sm:max-w-sm justify-center sm:justify-start px-2">
            {[
              { name: "SIEM", bg: "bg-[#1a1412] text-white" },
              { name: "SOC Automation", bg: "bg-[#f59e0b] text-white" },
              { name: "AWS", bg: "bg-[#f59e0b] text-white" },
              { name: "Linux", bg: "bg-[#1a1412] text-white" },
              { name: "Python", bg: "bg-[#f59e0b] text-white" },
              { name: "Django", bg: "bg-[#1a1412] text-white" },
              { name: "Threat Detection", bg: "bg-[#1a1412] text-white", hasStar: true },
            ].map((pill, idx) => (
              <motion.span
                key={pill.name}
                whileHover={{ scale: 1.12, y: -3, boxShadow: "0 8px 16px rgba(0,0,0,0.18)" }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 450, damping: 17, delay: idx * 0.02 }}
                className={`${pill.bg} px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-xs cursor-pointer select-none inline-flex items-center gap-1.5`}
              >
                {pill.hasStar && <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#f59e0b] fill-[#f59e0b]" />}
                {pill.name}
              </motion.span>
            ))}
          </div>

          {/* Floating Pill: Cloud */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center gap-2 bg-white dark:bg-[#1a1412] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-black/8 dark:border-white/10 select-none self-center sm:self-end mr-0 sm:mr-4 cursor-pointer"
          >
            {/* Animated Signal Vibe Waves */}
            <motion.div
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.95, 1.15, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.9 }}
              className="flex items-center gap-0.5 text-[#f59e0b] mr-1 select-none"
            >
              <span className="text-sm sm:text-base font-bold leading-none">(</span>
              <span className="text-xs sm:text-sm font-bold leading-none">(</span>
            </motion.div>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
              <Cloud className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <span className="font-sans font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
              Cloud
            </span>
          </motion.div>
        </motion.div>

      </div>

      {/* ─── Mobile Overlay Menu Drawer (iOS Frosted Glass Sheet) ─── */}
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

              {navItems.map((link, i) => {
                const isActive = activeSection === link.id
                return (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
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
                      {link.label}
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

    </section>
  )
}
