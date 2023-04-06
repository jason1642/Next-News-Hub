/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },

  '@mui/styled-engine': '@mui/styled-engine-sc',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn3.iconfinder.com',
        port: '',
        pathname: '/data/icons/**',
      },
    ],
  },
  swcMinify: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
