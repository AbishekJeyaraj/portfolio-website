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
    <section id="certifications" className="relative z-10 w-full py-32 px-4 md:px-8 border-t border-border">
      
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading title="Certifications" subtitle="05 // Credentials" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTS.map((cert, index) => (
            <motion.div 
              key={cert.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass p-8 rounded-3xl hover:border-accent/50 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-[40px] group-hover:bg-accent/20 transition-colors duration-500 pointer-events-none" />

              <Award className="w-10 h-10 text-accent mb-8" />

              <div className="flex-grow z-10">
                <h3 className="text-xl font-sans font-black tracking-tight text-primary uppercase mb-3 group-hover:text-accent transition-colors duration-300">
                  {cert.name}
                </h3>
                <div className="text-secondary font-sans text-sm mb-6">
                  Issued by <span className="text-primary font-medium">{cert.org}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-auto z-10 pt-6 border-t border-border">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                  {cert.date}
                </span>
                <MagneticButton>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-primary transition-colors duration-300 py-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold">View</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
