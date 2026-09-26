import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" because it disables API Routes
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
