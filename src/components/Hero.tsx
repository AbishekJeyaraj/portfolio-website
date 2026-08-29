"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import MagneticButton from "./MagneticButton"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 300])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-20">
      
      {/* Background Orbs & Gradients */}
      <motion.div 
        style={{ y }}
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[700px] bg-accent/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen" 
      />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 pattern-dots opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center flex-1 justify-center mt-12 md:mt-24">
        
        {/* Layered Typography & Portrait */}
        <div className="relative w-full flex flex-col items-center justify-center mb-16 md:mb-24 h-[400px] md:h-[550px]">
          
          {/* Background Text */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[140px] md:text-[220px] lg:text-[320px] font-sans font-black tracking-tighter leading-none text-white whitespace-nowrap opacity-90 drop-shadow-2xl flex gap-[40px] md:gap-[200px] lg:gap-[300px] mix-blend-overlay"
            >
              <span>Abis</span>
              <span>hek</span>
            </motion.h1>
          </div>

          {/* Portrait Image (Middle Layer) */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 z-10 w-[300px] md:w-[480px] lg:w-[600px] pointer-events-none"
          >
            <div 
              className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[200px] border-b-0 shadow-[0_-20px_60px_rgba(242,96,44,0.15)]" 
              style={{ maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)" }}
            >
                <img src="/abishek.jpeg" alt="Abishek Jeyaraj" className="w-full h-full object-cover object-top filter contrast-110 saturate-110" />
            </div>
          </motion.div>

          {/* Foreground Elements (Left/Right Blocks) */}
          <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row justify-between items-end pb-0 md:pb-12 z-20 pointer-events-none px-4 md:px-0">
            
            {/* Left Block */}
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pointer-events-auto flex flex-col gap-3 max-w-xs md:max-w-[400px] mb-8 md:mb-0 bg-background/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-none"
            >
              
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80] animate-pulse" />
                <span className="text-secondary text-xs uppercase tracking-wider font-mono font-bold">Available for new opportunities</span>
              </div>
              
              <h2 className="text-3xl md:text-[40px] font-sans font-black leading-tight mb-2 tracking-tight text-white">
                Digital Experience
              </h2>

              <p className="font-sans text-sm md:text-base text-white/80 font-medium leading-relaxed mb-4">
                I craft premium, performant, and secure web applications. 
                Focusing on <span className="text-white font-bold">Cybersecurity</span> and <span className="text-white font-bold">Software Development</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <MagneticButton className="w-full sm:w-auto">
                  <a href="#projects" className="w-full sm:w-auto bg-accent text-white px-6 py-3.5 rounded-full font-sans font-bold text-sm hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,96,44,0.4)]">
                    View Work
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </a>
                </MagneticButton>
                
                <a href="#contact" className="text-sm font-sans font-bold text-white hover:text-accent transition-colors flex items-center justify-center gap-1 group py-2">
                  Let's Connect
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Block */}
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pointer-events-auto hidden lg:flex flex-col items-center glass p-6 rounded-[2rem] shadow-2xl border-white/10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center justify-center mb-4 relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                 <span className="text-accent text-2xl font-black font-mono">{'</>'}</span>
              </div>
              
              <p className="text-sm font-sans text-center max-w-[200px] text-white/80 font-medium relative z-10">
                <span className="text-white font-black text-lg block mb-1">Full-Stack</span>
                Secure & Performant <br/>
                <span className="text-white/50 text-xs mt-1 block">— Built to scale.</span>
              </p>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full border-y border-white/5 bg-black/60 backdrop-blur-xl py-5 md:py-8 overflow-hidden mt-auto z-30">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex whitespace-nowrap animate-marquee w-[200%]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center justify-around w-1/2 shrink-0 px-4">
              <span className="font-sans font-black text-2xl md:text-4xl tracking-tight uppercase text-white/90">CYBERSECURITY</span>
              <span className="text-accent text-3xl">✦</span>
              <span className="font-sans font-black text-2xl md:text-4xl tracking-tight uppercase text-white/90">SOFTWARE DEVELOPMENT</span>
              <span className="text-accent text-3xl">✦</span>
              <span className="font-sans font-black text-2xl md:text-4xl tracking-tight uppercase text-white/90">MACHINE LEARNING</span>
              <span className="text-accent text-3xl">✦</span>
              <span className="font-sans font-black text-2xl md:text-4xl tracking-tight uppercase text-white/90">FULL-STACK WEB</span>
              <span className="text-accent text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
