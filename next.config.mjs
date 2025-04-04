/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_API_BASE: process.env.NODE_ENV === 'production' 
          ? 'https://dushadev-github-io.vercel.app' 
          : 'http://localhost:3000'
      }
};

export default nextConfig;
