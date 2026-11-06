"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  as?: "button" | "a" | "div";
}

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  as,
  type = "button",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    if (!ref.current) return
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const content = (
    <motion.div
      className={`relative inline-flex items-center justify-center cursor-pointer ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )

  const isAnchor = as === "a" || (!as && !!href)
  const isDiv = as === "div"

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block relative z-10"
    >
      {isAnchor ? (
        <a href={href} target={target} rel={rel} className="inline-block">
          {content}
        </a>
      ) : isDiv ? (
        <div className="inline-block">
          {content}
        </div>
      ) : (
        <button type={type} {...props}>
          {content}
        </button>
      )}
    </div>
  )
}
