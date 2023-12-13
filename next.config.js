// eslint-disable-next-line @typescript-eslint/no-require-imports
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = {
  output: 'standalone',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withNextIntl(nextConfig);
