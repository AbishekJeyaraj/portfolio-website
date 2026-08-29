"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const MESSAGES = [
  "INITIALIZING...",
  "LOADING CORE SYSTEM...",
  "ESTABLISHING SECURE CONNECTION...",
  "INITIALIZING PORTFOLIO...",
  "SYSTEM READY"
]

const PERCENTAGES = [1, 25, 50, 75, 100]

export default function PortfolioLoader() {
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(0)
  const [accessGranted, setAccessGranted] = useState(false)
  const [explode, setExplode] = useState(false)

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [loading])

  // Sequence Orchestration
  useEffect(() => {
    // Initial delay before starting
    const sequence = async () => {
      // Step 0 -> 1
      await new Promise(r => setTimeout(r, 800))
      setStep(1) // 25%
      
      // Step 1 -> 2
      await new Promise(r => setTimeout(r, 600))
      setStep(2) // 50%
      
      // Step 2 -> 3
      await new Promise(r => setTimeout(r, 700))
      setStep(3) // 75%
      
      // Step 3 -> 4
      await new Promise(r => setTimeout(r, 800))
      setStep(4) // 100%
      
      // Wait a moment at 100% before Access Granted
      await new Promise(r => setTimeout(r, 500))
      setAccessGranted(true)

      // Wait a moment before explosion
      await new Promise(r => setTimeout(r, 800))
      setExplode(true)

      // Wait for explosion transition to finish before removing loader
      await new Promise(r => setTimeout(r, 1000))
      setLoading(false)
    }

    sequence()
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden font-mono text-white"
        >
          {/* Subtle Grid and Scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30"></div>
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-[#f2602c]/5 to-transparent pointer-events-none z-10"
          ></motion.div>

          {/* Corner Brackets */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/20"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/20"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20"></div>

          {/* Central HUD Element */}
          <motion.div
            animate={
              explode
                ? { scale: 50, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={
              explode
                ? { duration: 1, ease: [0.76, 0, 0.24, 1] }
                : { duration: 0 }
            }
            className="relative z-20 flex flex-col items-center justify-center w-full h-full"
          >
            {/* Spinning Outer Ring */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{ 
                scale: { duration: 1, ease: "easeOut" },
                opacity: { duration: 1 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute w-72 h-72 rounded-full border border-dashed border-white/30"
            ></motion.div>

            {/* Glowing Inner Ring */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: -360 }}
              transition={{ 
                scale: { duration: 1, delay: 0.2, ease: "easeOut" },
                opacity: { duration: 1, delay: 0.2 },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
              className="absolute w-56 h-56 rounded-full border border-[#f2602c]/50 shadow-[0_0_30px_rgba(242,96,44,0.3)]"
            ></motion.div>

            {/* Central Glow Point */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-2 h-2 bg-[#f2602c] rounded-full shadow-[0_0_20px_#f2602c,0_0_40px_#f2602c]"
            ></motion.div>

            {/* Main Content Area */}
            <div className="flex flex-col items-center justify-center z-30 mt-8">
              
              <AnimatePresence mode="wait">
                {!accessGranted ? (
                  <motion.div 
                    key="loading-text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center"
                  >
                    <h1 className="text-3xl md:text-5xl font-sans font-black tracking-[0.2em] uppercase text-white mb-2 drop-shadow-md">
                      ABISHEK JEYARAJ
                    </h1>
                    <h2 className="text-[10px] md:text-xs text-[#f2602c] tracking-[0.3em] uppercase font-bold mb-12">
                      CYBERSECURITY • CLOUD • SOFTWARE ENGINEERING
                    </h2>

                    {/* Progress Indicator */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-xl md:text-2xl font-light tracking-widest text-white/90">
                        LOADING {PERCENTAGES[step].toString().padStart(2, '0')}%
                      </div>
                      
                      {/* Loading Bar */}
                      <div className="w-64 h-1 bg-white/10 relative overflow-hidden rounded-full">
                        <motion.div 
                          className="absolute inset-y-0 left-0 bg-[#f2602c] shadow-[0_0_10px_#f2602c]"
                          initial={{ width: "0%" }}
                          animate={{ width: `${PERCENTAGES[step]}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      </div>

                      <div className="text-xs text-white/50 tracking-widest mt-2">
                        {MESSAGES[step]}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="access-granted"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="text-4xl md:text-6xl font-black tracking-[0.2em] text-[#f2602c] drop-shadow-[0_0_20px_rgba(242,96,44,0.8)]">
                      ACCESS GRANTED
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

          {/* Micro HUD Texts */}
          <div className="absolute top-12 left-12 text-[10px] text-white/40 tracking-widest font-mono hidden md:block">
            LAT: 8.7642° N <br/>
            LONG: 78.1348° E <br/>
            THOOTHUKUDI_SECURE_SERVER
          </div>
          <div className="absolute bottom-12 right-12 text-[10px] text-white/40 tracking-widest font-mono text-right hidden md:block">
            SYS.VER: 9.4.1 <br/>
            ENCRYPTION: AES-256-GCM <br/>
            STATUS: ONLINE
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  )
}
