"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Shield, Cloud, Code, Database } from "lucide-react"
import SectionHeading from "./SectionHeading"

const SKILL_CATEGORIES = [
  {
    title: "CYBERSECURITY",
    icon: <Shield className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Networking", exp: "Advanced", desc: "TCP/IP, subnetting, routing protocols." },
      { name: "Linux", exp: "Advanced", desc: "System administration and security hardening." },
      { name: "Ethical Hacking", exp: "Intermediate", desc: "Penetration testing methodologies." },
      { name: "OWASP Top 10", exp: "Advanced", desc: "Web application vulnerability mitigation." },
      { name: "Nmap & Wireshark", exp: "Advanced", desc: "Network scanning and packet analysis." },
      { name: "Burp Suite", exp: "Intermediate", desc: "Web vulnerability scanning and exploitation." },
      { name: "SIEM", exp: "Intermediate", desc: "Log analysis and incident monitoring." }
    ]
  },
  {
    title: "CLOUD",
    icon: <Cloud className="w-6 h-6 text-accent" />,
    skills: [
      { name: "AWS", exp: "Intermediate", desc: "Core services and architecture." },
      { name: "EC2 & S3", exp: "Advanced", desc: "Compute and storage provisioning." },
      { name: "IAM", exp: "Intermediate", desc: "Identity and access management policies." },
      { name: "Cloud Sec", exp: "Intermediate", desc: "Cloud infrastructure hardening." }
    ]
  },
  {
    title: "DEVELOPMENT",
    icon: <Code className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Python", exp: "Advanced", desc: "Backend logic, automation, AI scripts." },
      { name: "JavaScript", exp: "Advanced", desc: "Frontend interactivity and API integration." },
      { name: "React & Next.js", exp: "Advanced", desc: "Building scalable UI architectures." },
      { name: "Node.js", exp: "Intermediate", desc: "Server-side JavaScript environments." },
      { name: "HTML & CSS", exp: "Advanced", desc: "Semantic markup and responsive styling." },
      { name: "Git & GitHub", exp: "Advanced", desc: "Version control and CI/CD workflows." }
    ]
  },
  {
    title: "DATA",
    icon: <Database className="w-6 h-6 text-accent" />,
    skills: [
      { name: "MySQL", exp: "Advanced", desc: "Relational database design and querying." },
      { name: "MongoDB", exp: "Intermediate", desc: "NoSQL document storage." }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full py-24 sm:py-32 px-4 md:px-8 border-t border-black/10 dark:border-white/10">
      
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading title="Technical Skills" subtitle="02 // Capabilities" align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-black/10 dark:border-white/10">
                {category.icon}
                <h3 className="font-mono text-sm font-bold text-gray-900 dark:text-white tracking-[0.2em] uppercase">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group relative bg-white/85 dark:bg-[#141b24]/80 backdrop-blur-md p-5 rounded-2xl border border-black/10 dark:border-white/10 hover:border-[#f59e0b]/50 dark:hover:border-[#f59e0b]/50 hover:bg-white dark:hover:bg-[#1a2330] transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-[#f59e0b]/5 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out pointer-events-none" />
                    
                    <div className="relative z-10 flex justify-between items-center mb-2">
                      <span className="font-sans font-bold text-gray-900 dark:text-white text-base group-hover:text-[#f59e0b] transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[9px] text-[#ea580c] dark:text-[#f59e0b] uppercase tracking-widest bg-[#f59e0b]/15 px-2.5 py-1 rounded-full font-bold border border-[#f59e0b]/30">
                        {skill.exp}
                      </span>
                    </div>
                    <p className="relative z-10 text-gray-600 dark:text-gray-300 text-sm font-sans mt-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {skill.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
