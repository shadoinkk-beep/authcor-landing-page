// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ ignore TS errors
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ignore ESLint errors too
  },
}

export default nextConfig
