"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import MagneticButton from "./MagneticButton"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 w-full py-12 px-4 md:px-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-sans font-black text-2xl tracking-tighter uppercase text-primary mb-2">
            ABISHEK JEYARAJ
          </h2>
          <span className="font-mono text-[9px] text-accent uppercase font-bold tracking-[0.3em]">
            CYBERSECURITY • CLOUD • SOFTWARE ENGINEERING
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <MagneticButton>
            <button 
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </MagneticButton>
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] uppercase font-bold">Top</span>
        </div>

        <div className="font-mono text-[10px] text-muted tracking-widest uppercase text-center md:text-right font-medium">
          © 2026 Abishek Jeyaraj.<br className="hidden md:block" /> All rights reserved.
        </div>

      </div>
    </footer>
  )
}
