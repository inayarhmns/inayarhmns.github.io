/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
    unoptimized: true, // allow Next Image in static mode
    assetPrefix: './', 
  },
};

export default nextConfig;
