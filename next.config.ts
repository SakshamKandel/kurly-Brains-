import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  images: {
    unoptimized: false,
  },
  poweredByHeader: false,
};

export default nextConfig;
