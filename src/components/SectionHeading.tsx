"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
      >
        {title}
      </motion.h2>
      <div className="w-12 h-1 bg-accent mt-6 rounded-full" />
    </div>
  )
}
