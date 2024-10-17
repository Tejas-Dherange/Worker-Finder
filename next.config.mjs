/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icons8.com',
        port: '',
        pathname: '/icon/**', // Update the path to match the actual image URL
      },
    ],
  },
};

export default nextConfig;
