"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Shield, Cloud, Code, CheckCircle2 } from "lucide-react"

const SKILLS_DATA = [
  { name: "CYBERSECURITY & NETWORKING", percentage: 92 },
  { name: "PYTHON & AUTOMATION", percentage: 90 },
  { name: "FULL-STACK (REACT / NEXT.JS)", percentage: 88 },
  { name: "PENETRATION TESTING & OWASP", percentage: 85 },
  { name: "CLOUD INFRASTRUCTURE (AWS)", percentage: 82 },
  { name: "LINUX SYSTEM HARDENING", percentage: 88 },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-black/10 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      {/* ─── Top Category Tag (Gilber Style) ─── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-12 sm:mb-16"
      >
        <span className="w-8 h-[2.5px] bg-[#e65251]" />
        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#e65251]">
          About // 01
        </span>
      </motion.div>

      {/* ─── Main Grid: Left Experience Box + Right "Great Experience" & Skill Bars ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        {/* ════ LEFT COLUMN: Iconic Bordered Experience Box ════ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <motion.div
            whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(230, 82, 81, 0.18)" }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="relative border border-black/15 dark:border-white/15 bg-white/40 dark:bg-[#13161c]/80 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl shadow-sm hover:border-[#e65251]/50 transition-colors duration-500 group cursor-default"
          >
            {/* Pulsing corner accent */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#e65251]"
            />

            {/* Giant Number + Radiant Beacon Red Dot */}
            <div className="flex items-baseline">
              <span className="font-sans font-black text-7xl sm:text-8xl md:text-[130px] tracking-tighter leading-none text-gray-950 dark:text-white select-none">
                3
              </span>
              {/* Pulsing Beacon Ring on Red Period */}
              <span className="relative flex h-4 w-4 sm:h-5 sm:w-5 ml-2 mb-2 sm:mb-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e65251] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-[#e65251] shadow-[0_0_15px_rgba(230,82,81,0.9)]" />
              </span>
            </div>

            {/* Stacked Labels */}
            <div className="mt-6 sm:mt-8 flex flex-col font-sans text-base sm:text-lg font-bold tracking-[0.18em] uppercase text-gray-900 dark:text-white leading-snug">
              <span>Years</span>
              <span className="text-gray-500 dark:text-gray-400 font-medium">Continuous</span>
              <span className="text-[#e65251]">Learning</span>
            </div>

            {/* Horizontal Accent Line with Smooth Load Expansion */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[3px] bg-[#e65251] mt-6 sm:mt-8 rounded-full"
            />

            {/* Additional Quick Highlights */}
            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col gap-3 font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e65251] shrink-0" />
                <span>10+ Completed Projects & Security Scanners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e65251] shrink-0" />
                <span>Cisco & AWS Cloud Certified Credentials</span>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ════ RIGHT COLUMN: "Great Experience" & Signature Dual-Tone Progress Bars ════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Section Main Heading */}
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-gray-950 dark:text-white tracking-tight leading-tight">
            Continuous Learning
          </h2>

          {/* Descriptive Bio Paragraph */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-5 mb-10 max-w-2xl">
            I am a Computer Science Engineering student and developer dedicated to mastering the intersection of 
            <strong className="text-gray-900 dark:text-white font-semibold"> Cybersecurity</strong>, 
            <strong className="text-gray-900 dark:text-white font-semibold"> Cloud Computing</strong>, and 
            <strong className="text-gray-900 dark:text-white font-semibold"> Full-Stack Software Engineering</strong>.
            From developing automated vulnerability scanners and AI diagnostic systems to auditing cloud infrastructure, I build digital experiences that are robust, scalable, and inherently secure.
          </p>

          {/* ─── Signature Dual-Tone Skill Progress Bars (Animated Reveal + Light Sweep) ─── */}
          <div className="flex flex-col gap-6 sm:gap-7 w-full">
            {SKILLS_DATA.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex flex-col group cursor-default"
              >
                {/* Header: Skill Name & Percentage */}
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-gray-900 dark:text-white group-hover:text-[#e65251] transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-mono font-bold text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Dual-Tone Bar: Red on left, Crisp White on right with shimmer */}
                <div className="relative w-full h-1.5 sm:h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden flex shadow-inner">
                  {/* Active Red Fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.1 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative h-full bg-[#e65251]"
                  >
                    {/* Shimmer Light Ray across filled bar */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </motion.div>

                  {/* Contrasting Light Track (Pure White in Dark Mode) */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${100 - skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.1 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full bg-gray-300 dark:bg-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Domain Badges with Hover Micro-Interactions */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { icon: Shield, label: "Cybersecurity" },
              { icon: Cloud, label: "Cloud Infrastructure" },
              { icon: Code, label: "Full-Stack Development" },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-xs font-mono font-bold tracking-wider uppercase text-gray-800 dark:text-gray-200 cursor-pointer shadow-xs"
              >
                <badge.icon className="w-3.5 h-3.5 text-[#e65251]" />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}
