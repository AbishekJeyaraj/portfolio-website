"use client"

import * as React from "react"
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Mail, Menu, X } from "lucide-react"

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-8'
        }`}
      >
        {/* Dynamic Background for Nav */}
        <div className={`absolute inset-0 transition-all duration-500 ${isScrolled ? 'glass border-b-0 shadow-lg' : 'opacity-0'}`} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">
          
          {/* Logo */}
          <a href="#home" className="text-primary font-black text-2xl tracking-tighter hover:text-accent transition-colors duration-300">
            AJ<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 glass px-6 py-2 rounded-full border-white/5">
            {navItems.map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-xs font-mono font-medium uppercase tracking-[0.15em] text-secondary hover:text-primary px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Connect Button (Desktop) */}
          <a href="mailto:abishekjeyaraj334@gmail.com" className="hidden md:flex items-center gap-2 hover:bg-white/5 border border-border hover:border-border-hover text-primary px-6 py-2.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group">
            <Mail className="w-3.5 h-3.5 group-hover:text-accent transition-colors" />
            Connect
          </a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {navItems.map((item, i) => (
          <motion.a 
            key={item} 
            href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            initial={{ y: 20, opacity: 0 }}
            animate={mobileMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: i * 0.1 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-sans font-black uppercase tracking-widest text-primary hover:text-accent transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  )
}
