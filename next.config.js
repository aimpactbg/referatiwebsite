/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Configure external image domains
  images: {
    domains: [
      'placehold.co',           // For placeholder images
      'via.placeholder.com',    // Alternative placeholder service
      'images.unsplash.com',    // If using Unsplash images
      'cdn.pixabay.com',        // If using Pixabay images
      'referati.website',       // Your own domain for uploaded images
    ],
    // Alternative: Use remotePatterns (more secure, recommended)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'referati.website',
        port: '',
        pathname: '/**',
      }
    ]
  },

  // Performance optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Additional optimizations
  experimental: {
    // Enable modern JavaScript features
    esmExternals: true,
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options', 
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Redirects (if needed)
  async redirects() {
    return [
      // Example redirect from old URLs
      // {
      //   source: '/old-page',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;