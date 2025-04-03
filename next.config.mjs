/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },
    env: {
        // NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000',
        RESEND_API_KEY: process.env.RESEND_API_KEY,
      },
    
};

export default nextConfig;
