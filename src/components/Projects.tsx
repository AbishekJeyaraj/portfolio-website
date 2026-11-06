"use client"

import * as React from "react"
import { ExternalLink, Code, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import MagneticButton from "./MagneticButton"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const WORKS = [
  {
    id: 1,
    name: "AI THREAT DETECTION",
    category: "Cybersecurity & SOC",
    tags: ["Cybersecurity", "Threat Detection", "SOC Automation", "Log Analysis", "Python"],
    desc: "Automated cyber threat detection and security event monitoring platform. Parses server logs, identifies suspicious traffic anomalies and malicious attack vectors, and triggers automated alerts for rapid incident response.",
    link: "https://github.com/AbishekJeyaraj/AI-Thread-Detection",
    github: "https://github.com/AbishekJeyaraj/AI-Thread-Detection",
  },
  {
    id: 2,
    name: "MEDAI DIAGNOSTICS",
    category: "Healthcare Deep Learning",
    tags: ["PyTorch", "Vision Transformers", "Python", "Deep Learning", "Healthcare AI"],
    desc: "Multi-modal AI platform utilizing Vision Transformers (ViT) to detect clinical pathologies across X-rays, MRIs, and histopathology scans with high diagnostic accuracy and clinical classification.",
    link: "https://github.com/AbishekJeyaraj/MedAi-X-ray-Analysis",
    github: "https://github.com/AbishekJeyaraj/MedAi-X-ray-Analysis",
  },
  {
    id: 3,
    name: "ANR SOURCEX",
    category: "E-Commerce & Global Sourcing",
    tags: ["CSS3", "JavaScript", "Responsive Design", "Vercel", "Production"],
    desc: "Production commercial platform for international trading and global product sourcing. Designed with high-performance responsive UI, interactive catalog showcases, and optimized cloud deployment.",
    link: "https://anrsourcex.vercel.app",
    github: "https://github.com/AbishekJeyaraj/anrsourcex",
  },
  {
    id: 4,
    name: "DYNAMIC CATALOG & FILTERS",
    category: "Interactive Web Application",
    tags: ["JavaScript", "HTML5/CSS3", "E-Commerce", "Filter Engine", "UI/UX"],
    desc: "High-performance product catalog engine featuring instant multi-attribute filtering (category, price, tags), dynamic state synchronization, responsive grid layouts, and seamless shopping navigation.",
    link: "https://github.com/AbishekJeyaraj/Catalog_with_filters",
    github: "https://github.com/AbishekJeyaraj/Catalog_with_filters",
  },
  {
    id: 5,
    name: "PYTHON AUTOMATION SUITE",
    category: "Software Development & Tools",
    tags: ["Python", "Automation", "Data Processing", "Algorithms", "Internship"],
    desc: "Comprehensive suite of software utilities, algorithmic problem solvers, and task automation scripts engineered during the CodSoft Python Developer internship program.",
    link: "https://github.com/AbishekJeyaraj/codsoft",
    github: "https://github.com/AbishekJeyaraj/codsoft",
  },
  {
    id: 6,
    name: "CYBER DEFENSE PORTFOLIO",
    category: "Full-Stack & Frontend Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    desc: "The portfolio website featuring scroll-driven animations, dark/light theme switching, interactive micro-interactions, responsive mobile drawer navigation, and accessible high-contrast design.",
    link: "https://abishekjeyaraj.site",
    github: "https://github.com/AbishekJeyaraj/portfolio-website",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-black/10 dark:border-white/10">
      
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading title="Selected Works" subtitle="03 // Archive" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WORKS.map((work, index) => (
            <motion.div 
              key={work.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white/85 dark:bg-[#141b24]/80 backdrop-blur-md p-6 sm:p-7 md:p-8 rounded-[2rem] border border-black/10 dark:border-white/10 hover:border-[#f59e0b]/50 dark:hover:border-[#f59e0b]/50 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-xs hover:shadow-2xl"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#f59e0b]/5 rounded-full blur-[60px] group-hover:bg-[#f59e0b]/15 transition-colors duration-700 pointer-events-none" />

              <div className="flex justify-between items-start mb-6 sm:mb-8 z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-[#f59e0b] group-hover:border-[#f59e0b]/30 transition-all duration-500 shadow-xs">
                  <span className="font-mono font-bold text-lg sm:text-xl">0{work.id}</span>
                </div>
                
                {/* Action Link Buttons — Always accessible with hover lift */}
                <div className="flex gap-2 sm:gap-2.5 z-20">
                  {work.github && (
                    <MagneticButton
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white transition-colors bg-black/5 dark:bg-white/5 p-2.5 sm:p-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10"
                      aria-label={`${work.name} GitHub Repository`}
                    >
                      <Code className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </MagneticButton>
                  )}
                  {work.link && (
                    <MagneticButton
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-[#f59e0b] transition-colors bg-black/5 dark:bg-white/5 p-2.5 sm:p-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10"
                      aria-label={`${work.name} Live Project`}
                    >
                      <ExternalLink className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </MagneticButton>
                  )}
                </div>
              </div>

              {/* Category Pill Tag */}
              <div className="mb-2 z-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ea580c] dark:text-[#f59e0b] font-bold">
                  {work.category}
                </span>
              </div>

              <div className="flex-grow z-10">
                <a
                  href={work.link || work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title inline-block mb-3 sm:mb-4"
                >
                  <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight text-gray-950 dark:text-white uppercase flex items-center gap-2 group-hover/title:text-[#f59e0b] transition-colors duration-300">
                    {work.name}
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 opacity-60 group-hover/title:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all duration-300 text-[#f59e0b]" />
                  </h3>
                </a>
                <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-950 dark:group-hover:text-white transition-colors duration-300">
                  {work.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto z-10 pt-4 border-t border-black/10 dark:border-white/10">
                {work.tags.map(tag => (
                  <span key={tag} className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/15 group-hover:text-gray-950 dark:group-hover:text-white transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer CTA: Link to full GitHub Repositories Archive */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <MagneticButton
            href="https://github.com/AbishekJeyaraj?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/85 dark:bg-[#141b24]/80 hover:bg-white dark:hover:bg-[#1c2633] text-gray-900 dark:text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold transition-all duration-300 font-mono uppercase tracking-[0.2em] text-xs flex items-center gap-3 shadow-md border border-black/10 dark:border-white/10 hover:border-[#f59e0b]/50"
          >
            <GithubIcon className="w-4 h-4 text-[#f59e0b]" />
            <span>Explore All Repositories On GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

      </div>
    </section>
  )
}
