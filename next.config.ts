import type { NextConfig } from "next";

const isDevlopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export", // Cấu hình để xuất file tĩnh
  basePath: isDevlopment ? "" : "/HTIC-Law-Firm-Website", // Use "/HTIC-Law-Firm-Website" in production and no prefix in development
  trailingSlash: true, // Thêm dấu gạch chéo (/) vào cuối URL
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
