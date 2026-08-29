"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Terminal, Shield, Cloud, Code } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function About() {
  return (
    <section id="about" className="relative z-10 px-4 md:px-8 py-32 w-full max-w-7xl mx-auto flex flex-col items-center">
      
      <SectionHeading title="About Me" subtitle="01 // Identity" align="left" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        
        {/* Left Col - Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 glass rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <Terminal className="w-10 h-10 text-accent mb-8" />
              <h3 className="font-sans font-black text-4xl md:text-5xl text-primary tracking-tight mb-8 leading-[1.1]">
                Engineering <span className="text-gradient">resilient systems</span> from the ground up.
              </h3>
              <p className="text-secondary font-sans text-lg leading-relaxed mb-6">
                I am a passionate Computer Science Engineering student dedicated to mastering the intersection of 
                <span className="text-primary font-semibold"> Cybersecurity</span>, 
                <span className="text-primary font-semibold"> Cloud Computing</span>, and 
                <span className="text-primary font-semibold"> Software Development</span>.
              </p>
              <p className="text-secondary font-sans text-lg leading-relaxed">
                Whether it's auditing AWS architectures, hunting for vulnerabilities in full-stack web applications, or building scalable backend services, I thrive on solving complex technical challenges. My goal is to build digital experiences that aren't just highly functional, but inherently secure.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-border">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-primary/80">Cybersecurity</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-border">
                <Cloud className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-primary/80">Cloud Infra</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-border">
                <Code className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-primary/80">Software Dev</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col - Animated Stats */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          
          {[
            { label: 'Experience', value: '3+ Years', desc: 'Learning Technology', num: '01' },
            { label: 'Development', value: '10+', desc: 'Completed Projects', num: '02' },
            { label: 'Qualifications', value: 'Multiple', desc: 'Tech Certifications', num: '03' }
          ].map((stat, i) => (
            <motion.div 
              key={stat.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-8 flex items-center justify-between group hover:border-accent/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-muted tracking-[0.2em] mb-3 uppercase font-bold">{stat.label}</span>
                <span className="font-sans font-black text-4xl text-primary mb-1">{stat.value}</span>
                <span className="text-secondary text-sm">{stat.desc}</span>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-border group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
                <span className="font-mono text-accent font-bold text-lg">{stat.num}</span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
