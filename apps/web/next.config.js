const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  // images: {
  //   domains: ['cdn-images-1.medium.com'],
    
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'medium.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/**',
      },      
    ],
  },  
});
