"use client"

import { useState, useEffect } from "react"

const DEFAULT_SECTIONS = ["home", "about", "skills", "projects", "contact"]

export function useActiveSection(sectionIds: string[] = DEFAULT_SECTIONS) {
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // 1. Check if user is scrolled near the bottom of the page
      if (windowHeight + scrollY >= documentHeight - 70) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      // 2. Check if user is at the very top of the page
      if (scrollY < 80) {
        setActiveSection(sectionIds[0])
        return
      }

      // 3. Focal line (approx 160px from viewport top, under the sticky/fixed navbar)
      const focalLine = 160
      let currentSection = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // If the top of the section has reached or passed the focal line
          if (rect.top <= focalLine) {
            currentSection = id
          }
        }
      }

      setActiveSection(currentSection)
    }

    // Initial check on mount
    handleScroll()

    // High performance passive listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [sectionIds])

  return activeSection
}
