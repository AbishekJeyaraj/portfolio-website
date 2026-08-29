"use client"

import * as React from "react"
import Lenis from "lenis"
import { usePathname, useSearchParams } from "next/navigation"

function LenisManager() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  React.useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [pathname, searchParams])

  return null
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <>
      <React.Suspense fallback={null}>
        <LenisManager />
      </React.Suspense>
      {children}
    </>
  )
}
