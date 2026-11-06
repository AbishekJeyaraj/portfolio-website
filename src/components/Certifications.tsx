"use client"

import * as React from "react"
import { ExternalLink, Award } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import MagneticButton from "./MagneticButton"

const CERTS = [
  {
    id: 1,
    name: "Introduction to Cybersecurity",
    org: "Cisco",
    date: "2024",
    link: "#"
  },
  {
    id: 2,
    name: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    date: "2024",
    link: "#"
  },
  {
    id: 3,
    name: "Certified Ethical Hacker (CEH)",
    org: "EC-Council",
    date: "2025 (Expected)",
    link: "#"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 w-full py-24 sm:py-32 px-4 md:px-8 border-t border-black/10 dark:border-white/10">
      
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading title="Certifications" subtitle="05 // Credentials" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTS.map((cert, index) => (
            <motion.div 
              key={cert.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white/85 dark:bg-[#141b24]/80 backdrop-blur-md p-8 rounded-3xl border border-black/10 dark:border-white/10 hover:border-[#f59e0b]/50 dark:hover:border-[#f59e0b]/50 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-xs hover:shadow-xl cursor-default"
            >
              {/* Subtle hover glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#f59e0b]/10 rounded-full blur-[40px] group-hover:bg-[#f59e0b]/20 transition-colors duration-500 pointer-events-none" />

              <Award className="w-10 h-10 text-[#ea580c] dark:text-[#f59e0b] mb-8" />

              <div className="flex-grow z-10">
                <h3 className="text-xl font-sans font-black tracking-tight text-gray-950 dark:text-white uppercase mb-3 group-hover:text-[#f59e0b] transition-colors duration-300">
                  {cert.name}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 font-sans text-sm mb-6">
                  Issued by <span className="text-gray-950 dark:text-white font-semibold">{cert.org}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-auto z-10 pt-6 border-t border-black/10 dark:border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ea580c] dark:text-[#f59e0b] font-bold">
                  {cert.date}
                </span>
                <MagneticButton
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-colors duration-300 py-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">View</span>
                  <ExternalLink className="w-4 h-4" />
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
