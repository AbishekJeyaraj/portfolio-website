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
    <section id="intern" className="relative z-10 w-full py-24 sm:py-32 px-4 md:px-8 border-t border-black/10 dark:border-white/10">
      
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        
        <SectionHeading title="Experience" subtitle="04 // Journey" align="left" />

        <div className="relative pl-7 sm:pl-10 md:pl-14">
          {/* Animated Timeline Line */}
          <div className="absolute left-[3px] md:left-[3px] top-4 bottom-4 w-px bg-black/15 dark:bg-white/15">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-[#f59e0b] origin-top"
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
              <div className="absolute -left-[27px] sm:-left-[39px] md:-left-[55px] top-6 w-3 h-3 rounded-full bg-white dark:bg-[#0b0f14] border-2 border-black/25 dark:border-white/20 group-hover:border-[#f59e0b] group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-500 z-10" />
              
              <motion.div 
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="bg-white/85 dark:bg-[#141b24]/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-black/10 dark:border-white/10 hover:border-[#f59e0b]/50 dark:hover:border-[#f59e0b]/50 hover:bg-white dark:hover:bg-[#1a2330] transition-all duration-500 relative overflow-hidden shadow-xs hover:shadow-xl cursor-default"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#f59e0b]/5 rounded-full blur-[60px] group-hover:bg-[#f59e0b]/15 transition-colors duration-700 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 relative z-10">
                  <div>
                    <h3 className="text-3xl font-sans font-black tracking-tight text-gray-950 dark:text-white uppercase group-hover:text-[#f59e0b] transition-colors duration-300">
                      {internship.role}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-400 font-mono text-sm tracking-widest uppercase mt-3">
                      {internship.company}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ea580c] dark:text-[#f59e0b] bg-[#f59e0b]/15 px-5 py-2 rounded-full border border-[#f59e0b]/30 self-start mt-2 md:mt-0 font-bold">
                    {internship.date}
                  </div>
                </div>

                <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-8 relative z-10 max-w-3xl group-hover:text-gray-950 dark:group-hover:text-white transition-colors duration-300 text-lg">
                  {internship.description}
                </p>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {internship.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/15 group-hover:text-gray-950 dark:group-hover:text-white transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
