"use client"

import * as React from "react"
import { useEffect, useState } from "react"

export default function BackgroundClouds() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Cloud 1 */}
      <div 
        className="cloud w-[400px] h-[150px] top-[15%]" 
        style={{ animationDuration: "60s", animationDelay: "0s", left: "-20%" }} 
      />
      {/* Cloud 2 */}
      <div 
        className="cloud w-[600px] h-[200px] top-[40%]" 
        style={{ animationDuration: "80s", animationDelay: "-20s", left: "-20%" }} 
      />
      {/* Cloud 3 */}
      <div 
        className="cloud w-[300px] h-[100px] top-[75%]" 
        style={{ animationDuration: "50s", animationDelay: "-40s", left: "-20%" }} 
      />
      {/* Additional smaller clouds */}
      <div 
        className="cloud w-[250px] h-[80px] top-[5%]" 
        style={{ animationDuration: "70s", animationDelay: "-10s", left: "-20%", opacity: 0.6 }} 
      />
      <div 
        className="cloud w-[500px] h-[180px] top-[85%]" 
        style={{ animationDuration: "90s", animationDelay: "-60s", left: "-20%", opacity: 0.7 }} 
      />
    </div>
  )
}
