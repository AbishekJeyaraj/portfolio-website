import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
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
  metadataBase: new URL("https://abishekjeyaraj.site"),
  title: {
    default: "Abishek Jeyaraj | Cybersecurity Analyst & Software Developer",
    template: "%s | Abishek Jeyaraj",
  },
  description:
    "Official portfolio of Abishek Jeyaraj - Cybersecurity Analyst, SOC Specialist, and Software Developer. Building secure systems, threat detection pipelines, SIEM automation, and scalable web apps.",
  keywords: [
    "Abishek Jeyaraj",
    "Cybersecurity Analyst",
    "SOC Analyst",
    "SOC Analyst India",
    "Blue Team Specialist",
    "Threat Detection",
    "SIEM Automation",
    "Python Developer",
    "AWS Cloud Security",
    "Penetration Testing",
    "OWASP Top 10",
    "Full Stack Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Abishek Jeyaraj", url: "https://abishekjeyaraj.site" }],
  creator: "Abishek Jeyaraj",
  publisher: "Abishek Jeyaraj",
  alternates: {
    canonical: "https://abishekjeyaraj.site",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abishekjeyaraj.site",
    siteName: "Abishek Jeyaraj Portfolio",
    title: "Abishek Jeyaraj | Cybersecurity Analyst & Software Developer",
    description:
      "Explore the portfolio of Abishek Jeyaraj. Aspiring SOC Analyst & Software Developer specializing in SIEM automation, threat detection, Python, and cloud defense.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abishek Jeyaraj - Cybersecurity Analyst & Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abishek Jeyaraj | Cybersecurity Analyst & Software Developer",
    description:
      "Cybersecurity Analyst & Software Developer specializing in SOC operations, threat detection, SIEM log parsing, and Python automation.",
    images: ["/og-image.png"],
    creator: "@AbishekJeyaraj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abishekjeyaraj.site/#person",
      "name": "Abishek Jeyaraj",
      "url": "https://abishekjeyaraj.site",
      "image": "https://abishekjeyaraj.site/portfolio_profile_transparent.png",
      "jobTitle": "Cybersecurity Analyst & Software Developer",
      "description": "Third-year Computer Science Engineering student specializing in Cybersecurity, SOC Operations, SIEM log analysis, and full-stack development.",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Grace College of Engineering"
      },
      "sameAs": [
        "https://github.com/AbishekJeyaraj",
        "https://linkedin.com/in/abishek-jeyaraj-67d"
      ],
      "knowsAbout": [
        "Cybersecurity",
        "Security Operations Center (SOC)",
        "SIEM (Security Information and Event Management)",
        "Threat Detection & Incident Response",
        "Log Analysis",
        "Python Development",
        "AWS Cloud Infrastructure",
        "Linux System Hardening",
        "OWASP Top 10 & Web Security"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://abishekjeyaraj.site/#website",
      "url": "https://abishekjeyaraj.site",
      "name": "Abishek Jeyaraj Portfolio",
      "description": "Official portfolio of Abishek Jeyaraj - Cybersecurity Analyst and Software Developer.",
      "publisher": {
        "@id": "https://abishekjeyaraj.site/#person"
      }
    }
  ]
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <PortfolioLoader />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
