"use client"

import * as React from "react"
import { useState, useEffect } from "react"

export default function FigmaRuler() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    // Update clock
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Update scroll
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = windowHeight > 0 ? `${Math.round((totalScroll / windowHeight) * 100)}` : "0"
      setScrollProgress(Number(scroll))
    }
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-surface border-b border-border z-50 flex items-center px-4 justify-between select-none">
      {/* Left logo / icon area */}
      <div className="flex items-center gap-2 border-r border-border pr-4 h-full">
        <div className="w-5 h-5 bg-text rounded-sm flex items-center justify-center text-surface font-black text-[10px]">
          AJ
        </div>
        <span className="font-sans font-bold text-sm tracking-widest uppercase">PORTFOLIO</span>
      </div>

      {/* Ruler Ticks */}
      <div className="flex-1 hidden md:flex items-end h-full px-4 overflow-hidden opacity-30">
        {/* Draw fake ticks */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-text h-1 relative">
            {i % 5 === 0 && (
              <span className="absolute -top-6 -left-3 text-[10px] font-mono text-text">
                {i * 100}
              </span>
            )}
            {i % 5 === 0 && <div className="absolute bottom-0 right-[-1px] w-[1px] h-2 bg-text" />}
          </div>
        ))}
      </div>

      {/* Right area: Scroll % and Time */}
      <div className="flex items-center gap-4 h-full pl-4 border-l border-border font-mono text-[10px] font-bold tracking-widest text-text">
        <div className="bg-accent-orange text-white px-2 py-0.5 rounded">
          {scrollProgress}%
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>LIVE • {time}</span>
        </div>
      </div>
    </div>
  )
}
