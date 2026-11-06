"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

export default function BackgroundCyber() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 cyber-grid bg-[size:40px_40px]"></div>
      
      {/* Animated Scanline Overlay */}
      {!shouldReduceMotion && (
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#f2602c]/5 to-transparent pointer-events-none mix-blend-overlay"
        />
      )}
    </div>
  )
}
