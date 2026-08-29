"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "./SectionHeading"

const INTERNSHIPS = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Life Changer Ind",
    date: "Recent",
    description: "Developing and optimizing full-stack web applications, implementing robust backend systems and designing responsive, user-friendly interfaces.",
    tags: ["Full-Stack", "Web Development"]
  },
  {
    id: 2,
    role: "Python Intern",
    company: "CodSoft",
    date: "Recent",
    description: "Developed various Python-based applications and automation scripts. Gained hands-on experience with fundamental programming concepts and problem-solving.",
    tags: ["Python", "Automation", "Software Development"]
  }
]

export default function Intern() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  })

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="intern" className="relative z-10 w-full py-32 px-4 md:px-8 border-t border-border">
      
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        
        <SectionHeading title="Experience" subtitle="04 // Journey" align="left" />

        <div className="relative pl-6 md:pl-12">
          {/* Animated Timeline Line */}
          <div className="absolute left-[0.5px] md:left-[0.5px] top-4 bottom-4 w-px bg-border">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-accent origin-top"
              style={{ height }}
            />
          </div>

          {INTERNSHIPS.map((internship, index) => (
            <motion.div 
              key={internship.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-16 last:mb-0 group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[29px] md:-left-[53px] top-6 w-3 h-3 rounded-full bg-background border-2 border-border group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(242,96,44,0.5)] transition-all duration-500 z-10" />
              
              <div className="glass rounded-3xl p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] group-hover:bg-accent/5 transition-colors duration-700 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 relative z-10">
                  <div>
                    <h3 className="text-3xl font-sans font-black tracking-tight text-primary uppercase group-hover:text-accent transition-colors duration-300">
                      {internship.role}
                    </h3>
                    <div className="text-secondary font-mono text-sm tracking-widest uppercase mt-3">
                      {internship.company}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent bg-accent/10 px-5 py-2 rounded-full border border-accent/20 self-start mt-2 md:mt-0">
                    {internship.date}
                  </div>
                </div>

                <p className="font-sans text-secondary leading-relaxed mb-8 relative z-10 max-w-3xl group-hover:text-primary/80 transition-colors duration-300 text-lg">
                  {internship.description}
                </p>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {internship.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted bg-white/5 px-4 py-2 rounded-full border border-border group-hover:border-white/10 group-hover:text-secondary transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
