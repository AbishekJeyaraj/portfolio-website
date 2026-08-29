"use client"

import * as React from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#040607] text-white selection:bg-[#22D3EE] selection:text-black">
      {/* Background Image Setup */}
      {/* On mobile: absolute, covering behind text, opacity lowered. On desktop: absolute right half, fading left. */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full">
          <img 
            src="/hero-portrait.png" 
            alt="Abishek Portrait" 
            className="w-full h-full object-cover opacity-60 lg:opacity-100 object-center lg:object-right"
          />
          {/* Gradient fade to black on the left (desktop) */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#040607] to-transparent z-10" />
          {/* Gradient fade to black on the bottom (mobile/desktop) */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#040607] to-transparent z-10" />
        </div>
      </div>

      {/* Cyan Glow Effect */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#22D3EE]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col min-h-screen w-full max-w-7xl mx-auto">
        
        {/* Top Navigation */}
        <header className="w-full px-6 py-6 md:px-12 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono font-bold text-xl tracking-tighter text-white"
          >
            ABISHEK<span className="text-[#22D3EE]">.SEC</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-gray-400">
            {['About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="hover:text-[#22D3EE] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="hidden md:inline-flex px-5 py-2 rounded-full border border-[#22D3EE]/30 text-[#22D3EE] font-mono text-sm hover:bg-[#22D3EE] hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Get in touch
            </a>
          </motion.div>
        </header>

        {/* Hero Main Copy */}
        <main className="flex-1 flex flex-col justify-center px-6 md:px-12 w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-[#22D3EE] mb-4 text-sm md:text-base tracking-widest"
          >
            // Hi, I'm
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white mb-6 uppercase drop-shadow-2xl"
          >
            Abishek<br />Jeyaraj
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-gray-300 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Aspiring SOC Analyst & Blue Team Specialist. 
            Defending digital perimeters with secure architectures and intelligent algorithms.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 font-mono text-sm uppercase tracking-wider"
          >
            <a href="#projects" className="bg-[#22D3EE] text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] w-full sm:w-auto text-center">
              View My Work
            </a>
            <a href="#contact" className="text-white px-8 py-4 rounded-full border border-white/20 hover:border-[#22D3EE] hover:text-[#22D3EE] transition-all bg-black/30 backdrop-blur-sm w-full sm:w-auto text-center">
              Contact Me
            </a>
          </motion.div>
        </main>

        {/* Marquee Ticker */}
        <div className="w-full border-t border-white/10 bg-black/50 backdrop-blur-md py-4 mt-auto overflow-hidden">
          <div className="flex whitespace-nowrap" style={{ animation: 'cyber-marquee 25s linear infinite' }}>
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes cyber-marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
            `}} />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-12 mx-3 md:mx-6 shrink-0 text-[#22D3EE] font-mono text-xs md:text-sm tracking-widest uppercase">
                <span>AWS Cloud Internship</span>
                <span className="text-white/30">✦</span>
                <span>Cisco CyberSec Certified</span>
                <span className="text-white/30">✦</span>
                <span>Python Development</span>
                <span className="text-white/30">✦</span>
                <span>SOC-Track Fresher</span>
                <span className="text-white/30">✦</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
