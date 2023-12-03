/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/todos',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
