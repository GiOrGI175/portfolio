import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
};
