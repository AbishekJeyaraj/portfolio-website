import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/SmoothScroll"
import PortfolioLoader from "@/components/PortfolioLoader"
import CustomCursor from "@/components/CustomCursor"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Abishek Jeyaraj | Cybersecurity & Software Eng",
  description: "Portfolio of Abishek Jeyaraj.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col font-sans selection:bg-accent-orange selection:text-white`}
      >
        <CustomCursor />
        <PortfolioLoader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
