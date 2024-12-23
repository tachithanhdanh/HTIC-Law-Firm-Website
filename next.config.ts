import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Cấu hình để xuất file tĩnh
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", // Use "/HTIC-Law-Firm-Website" in production and no prefix in development
  trailingSlash: true, // Thêm dấu gạch chéo (/) vào cuối URL
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
