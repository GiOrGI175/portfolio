// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   env: {
//     GITHUB_TOKEN: process.env.GITHUB_TOKEN,
//   },
// };

// module.exports = nextConfig;

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
