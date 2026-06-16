/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "dist" : ".next",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.43.133", "localhost", "192.168.43.133:3000", "192.168.43.133:3001"],
};

export default nextConfig;
