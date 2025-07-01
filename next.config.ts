import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ESLint tekshiruvlari qurilish vaqtida e'tibordan chetga olinadi
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
