/** @type {import('next').NextConfig} */


// const withTM = require('next-transpile-modules')([
//     '@mui/material',
//     '@mui/system',
//    '@mui/icons-material', // If @mui/icons-material is being used
//   ]);
  
  // module.exports = withTM({
  //  webpack: (config) => {
  //    config.resolve.alias = {
  //      ...config.resolve.alias,
  //     '@mui/styled-engine': '@mui/styled-engine-sc',
  //     };
  //     return config;
  //   }
  // })







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
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
