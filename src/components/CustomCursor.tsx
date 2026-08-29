"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return
    setIsVisible(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#f2602c] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#f2602c] hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#f2602c]/50 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(242, 96, 44, 0.1)' : 'transparent'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      />
    </>
  )
}
