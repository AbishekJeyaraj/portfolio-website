"use client"

import * as React from "react"
import { ExternalLink, Code, ArrowUpRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionHeading from "./SectionHeading"
import MagneticButton from "./MagneticButton"

const WORKS = [
  {
    id: 1,
    name: "AI X-RAY ANALYSIS",
    tags: ["Python", "AI", "Machine Learning"],
    desc: "Developed an AI-based system for analyzing and predicting conditions from X-rays. Implemented data processing and machine learning algorithms to assist in accurate diagnosis.",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    name: "WEB VULN SCANNER",
    tags: ["Python", "FastAPI", "HTML/CSS/JS"],
    desc: "Comprehensive vulnerability scanner with an interactive frontend dashboard and robust FastAPI backend. Features real-time scanning, CVE lookups, and detailed security reporting.",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    name: "E-COMMERCE PLATFORM",
    tags: ["Full-Stack", "Relational DBs"],
    desc: "Built a responsive saree dealership app featuring product browsing, secure auth, a functional shopping cart, and a high-contrast UI aesthetic.",
    link: "#",
    github: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 w-full py-32 px-4 md:px-8 border-t border-border">
      
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading title="Selected Works" subtitle="03 // Archive" align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WORKS.map((work, index) => (
            <motion.div 
              key={work.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass p-6 md:p-8 rounded-[2rem] hover:border-accent/50 transition-all duration-700 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/15 transition-colors duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-12 z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-border flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/30 transition-all duration-500">
                  <span className="font-mono font-bold text-xl">0{work.id}</span>
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-500">
                  <MagneticButton href={work.github} className="text-secondary hover:text-primary transition-colors bg-white/5 p-3 rounded-full border border-border hover:bg-white/10">
                    <Code className="w-5 h-5" />
                  </MagneticButton>
                  <MagneticButton href={work.link} className="text-secondary hover:text-accent transition-colors bg-white/5 p-3 rounded-full border border-border hover:bg-white/10">
                    <ExternalLink className="w-5 h-5" />
                  </MagneticButton>
                </div>
              </div>

              <div className="flex-grow z-10">
                <h3 className="text-2xl font-sans font-black tracking-tight text-primary uppercase mb-4 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                  {work.name}
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 translate-x-2" />
                </h3>
                <p className="font-sans text-sm text-secondary mb-8 leading-relaxed group-hover:text-primary/80 transition-colors duration-300">
                  {work.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto z-10">
                {work.tags.map(tag => (
                  <span key={tag} className="font-mono text-[9px] font-bold uppercase tracking-widest text-muted bg-white/5 px-3 py-1.5 rounded-full border border-border group-hover:border-white/10 group-hover:text-secondary transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 flex justify-center">
          <MagneticButton className="glass hover:bg-white/5 text-primary px-10 py-5 rounded-full font-bold transition-all duration-300 font-mono uppercase tracking-[0.2em] text-xs flex items-center gap-3">
            Load More Archives <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

      </div>
    </section>
  )
}
