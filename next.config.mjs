/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },
    env: {
        // Fallback URL for local development
        VERCEL_URL: process.env.VERCEL_URL || 'http://localhost:3000',
      },
    
      // Enable server actions (if needed)
      experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['resend'],
      }
};

export default nextConfig;
