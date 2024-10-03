/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'https://fuzzy-space-computing-machine-6xv7pj44j49c4gx4-3000.app.github.dev',
        'localhost:3000',
        'https://localhost:3000', // Add this to match the exact origin
      ]
    }
  },
  headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: '/(.*)',
        headers: [
          {
            key: 'x-forwarded-host',
            value: 'fuzzy-space-computing-machine-6xv7pj44j49c4gx4-3000.app.github.dev',
          },
          {
            key: 'origin',
            value: 'https://localhost:3000', // Ensure this matches the exact origin
          },
        ],
      },
    ];
  },
};

export default nextConfig;