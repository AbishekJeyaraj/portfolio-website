import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abishek Jeyaraj | Cybersecurity & Software Developer",
    short_name: "Abishek.sec",
    description: "Portfolio of Abishek Jeyaraj - Cybersecurity Analyst, SOC Specialist & Software Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f14",
    theme_color: "#f59e0b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
