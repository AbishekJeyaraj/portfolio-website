"use client"

import React from "react"
import { motion } from "framer-motion"

export default function BackgroundCyber() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated Scanline Overlay */}
      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#f2602c]/5 to-transparent pointer-events-none mix-blend-overlay"
      ></motion.div>
    </div>
  )
}
