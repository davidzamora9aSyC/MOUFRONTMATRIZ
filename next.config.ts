import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: '/what-we-think', destination: '/insights', permanent: true }];
  },
};

export default nextConfig;
