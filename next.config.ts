import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Cấu hình để xuất file tĩnh
  basePath: "/HTIC-Law-Firm-Website", // Thay <repo-name> bằng tên repository GitHub của bạn
  trailingSlash: true, // Thêm dấu gạch chéo (/) vào cuối URL
  reactStrictMode: true,
};

export default nextConfig;
