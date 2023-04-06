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
      {
        protocol: 'https',
        hostname: 'static01.nyt.com',
        port: '',
        pathname: '/images/**',
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
