import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Cấu hình để xuất file tĩnh
  basePath: isProd ? "/HTIC-Law-Firm-Website" : "", // Use "/HTIC-Law-Firm-Website" in production and no prefix in development
  trailingSlash: true, // Thêm dấu gạch chéo (/) vào cuối URL
  reactStrictMode: true,
};

export default nextConfig;
