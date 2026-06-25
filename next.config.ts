import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '4uq7g3y1c9.ufs.sh',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: '86v8u6agau.ufs.sh',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;
