import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.dodostatic.net',
        pathname: '/image/**'
      },
      {
        protocol: 'https',
        hostname: 'media.dodostatic.net',
        pathname: '/image/r:292x292/*.avif'
      }
    ]
  }
}

export default nextConfig
///"https://media.dodostatic.net/image/r:292x292/grill_chicken.png"

// new URL('https://media.dodostatic.net/image/**')
// https://media.dodostatic.net/image/r:292x292/vegetable_mix.png
