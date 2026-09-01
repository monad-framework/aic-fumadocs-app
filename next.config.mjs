import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/core'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/system',
        destination: '/docs/system',
        permanent: true,
      },
      {
        source: '/artifacts',
        destination: '/docs/artifacts',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/docs/about',
        permanent: true,
      },
      {
        source: '/changelog',
        destination: '/changelogs',
        permanent: true,
      },
      {
        source: '/subscribe',
        destination: '/newsletter',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
