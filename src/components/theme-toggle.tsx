"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className={cn("flex flex-col items-center justify-center p-2 rounded-full", className)}>
        <Sun className="h-5 w-5 text-accent-orange" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn("flex flex-col items-center justify-center p-2 rounded-full transition-transform hover:scale-110", className)}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-accent-orange" />
      ) : (
        <Moon className="h-5 w-5 text-accent-orange" />
      )}
    </button>
  )
}
