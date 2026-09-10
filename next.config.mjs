/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The site uses no runtime linting gate; types are still checked at build.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
