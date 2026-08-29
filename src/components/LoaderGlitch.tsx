"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
const TARGET_TEXT = "ACCESS GRANTED"

export default function LoaderGlitch() {
  const [loading, setLoading] = useState(true)
  const [displayText, setDisplayText] = useState("")
  
  useEffect(() => {
    let iteration = 0
    let interval: NodeJS.Timeout

    // Small delay before starting the decode effect
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          TARGET_TEXT.split("")
            .map((letter, index) => {
              if (index < iteration) {
                return TARGET_TEXT[index]
              }
              // Preserve spaces in the target text
              if (TARGET_TEXT[index] === " ") return " "
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
            })
            .join("")
        )

        if (iteration >= TARGET_TEXT.length) {
          clearInterval(interval)
          // Hide loader shortly after text resolves
          setTimeout(() => {
            setLoading(false)
          }, 800)
        }

        iteration += 1 / 3 // Slows down the reveal rate
      }, 30)
    }, 400)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden font-mono"
        >
          {/* Subtle grid/scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01),rgba(0,0,0,0.02))] bg-[length:100%_4px,3px_100%] z-0 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Scramble Text */}
            <h1 className="text-4xl md:text-6xl font-black tracking-[0.3em] text-[#f2602c] drop-shadow-[0_0_12px_rgba(242,96,44,0.3)] ml-4">
              {displayText || "              "}
            </h1>
            
            {/* Loading Bar */}
            <div className="w-64 h-[2px] bg-[#f2602c]/20 mt-12 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "circOut" }}
                className="absolute inset-0 bg-[#f2602c] shadow-[0_0_10px_#f2602c]"
              />
            </div>

            <div className="mt-4 text-[#457b9d] text-xs tracking-[0.2em] uppercase font-bold">
              {displayText === TARGET_TEXT ? "CONNECTION ESTABLISHED" : "DECRYPTING PAYLOAD..."}
            </div>
            
          </div>

          {/* Decorative Hacker Elements */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#457b9d]/50"></div>
          <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[#457b9d]/50"></div>
          <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[#457b9d]/50"></div>
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#457b9d]/50"></div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#457b9d]/50 text-[10px] tracking-widest font-mono">
            SYS.VER: 9.4.1 // AUTH: REQUIRED
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  )
}
