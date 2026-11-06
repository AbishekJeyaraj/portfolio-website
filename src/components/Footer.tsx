"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Globe, ArrowUp } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "About", id: "about" },
    { label: "Contact us", id: "contact" },
  ]

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:abishekjeyaraj334@gmail.com",
      label: "Email",
    },
    {
      icon: GithubIcon,
      href: "https://github.com/AbishekJeyaraj",
      label: "GitHub",
    },
    {
      icon: Globe,
      href: "#home",
      label: "Website",
      onClick: scrollToTop,
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/abishek-jeyaraj-67d",
      label: "LinkedIn",
    },
  ]

  return (
    <footer className="relative z-10 w-full px-4 sm:px-6 md:px-8 pt-8 pb-12 max-w-7xl mx-auto">
      {/* ═══ Main Rounded Card Container ═══ */}
      <div
        className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden min-h-[460px] sm:min-h-[500px] md:min-h-[560px] flex flex-col justify-between p-8 sm:p-12 md:p-16 transition-colors duration-500"
        style={{
          background: "var(--footer-card-bg)",
          border: "1px solid var(--footer-card-border)",
        }}
      >
        {/* ═══ Warm Ambient Copper Diffuse Glow ═══ */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "var(--footer-glow)" }}
        />

        {/* ═══ Top Row: Navigation (Left) & Socials / Info (Right) ═══ */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-10">
          
          {/* Left Column: Vertical Navigation Links */}
          <nav className="flex flex-col gap-2.5 sm:gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="font-sans text-base sm:text-lg md:text-xl font-medium tracking-tight transition-all duration-300 hover:translate-x-1.5"
                style={{
                  color: "var(--footer-nav-link)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--footer-nav-link)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Column: Social Icons & Contact Coordinates */}
          <div className="flex flex-col items-start sm:items-end gap-5 sm:gap-6 text-left sm:text-right">
            
            {/* Social Icons Row (Minimalist Bare Outline Icons matching reference) */}
            <div className="flex items-center gap-4 sm:gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={social.onClick}
                    aria-label={social.label}
                    className="p-1 transition-all duration-300 hover:scale-115 group text-white/80 hover:text-accent"
                    style={{
                      color: "var(--footer-nav-link)",
                    }}
                  >
                    <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] transition-colors" />
                  </a>
                )
              })}
            </div>

            {/* Direct Contact Metadata */}
            <div
              className="flex flex-col gap-1.5 text-xs sm:text-[13px] font-sans leading-relaxed"
              style={{ color: "var(--footer-text-muted)" }}
            >
              <a
                href="mailto:abishekjeyaraj334@gmail.com"
                className="transition-colors hover:text-accent"
              >
                E-mail: abishekjeyaraj334@gmail.com
              </a>
              <span>Cybersecurity • Cloud • Software</span>
              <span>Tamil Nadu, India</span>
            </div>

          </div>

        </div>

        {/* ═══ Bottom Row: Massive Statement Typography (Submerged in Glow) ═══ */}
        <div className="relative z-10 w-full overflow-hidden flex items-end justify-center pt-16 sm:pt-20 pointer-events-none select-none">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold tracking-[-0.035em] text-[15.5vw] sm:text-[14.5vw] md:text-[13.5vw] lg:text-[12.8vw] leading-[0.8] whitespace-nowrap text-center -mb-2 sm:-mb-4 md:-mb-6 transition-colors duration-500"
            style={{
              color: "var(--footer-giant-text)",
            }}
          >
            Abishek
          </motion.h2>
        </div>

      </div>

      {/* ═══ Clean Sub-bar: Copyright & Scroll to Top ═══ */}
      <div className="w-full mt-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono tracking-wider uppercase">
        <span style={{ color: "var(--color-muted)" }}>
          © 2026 Abishek Jeyaraj. All rights reserved.
        </span>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 transition-all duration-300 hover:text-accent group cursor-pointer"
          style={{ color: "var(--color-muted)" }}
        >
          <span>Back to Top</span>
          <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  )
}
