/** @type {import('next').NextConfig} */
const nextConfig = {
    images:  {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'ibb.co',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
