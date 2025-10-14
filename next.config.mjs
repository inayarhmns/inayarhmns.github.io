/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
    unoptimized: true, // allow Next Image in static mode
  },
};

export default nextConfig;
