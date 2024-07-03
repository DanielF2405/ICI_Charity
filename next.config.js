/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.js");

// /** @type {import("next").NextConfig} */
// const config = {
    
// };

// export default config;
// next.config.js
// import { config as dotenvConfig } from 'dotenv';
// dotenvConfig(); // Load environment variables

/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'pg-native': 'commonjs pg-native'
      });
    } else {
    //   config.node = {
    //     fs: 'empty',
    //   };
    }

    config.resolve.alias['pg-native'] = false;

    return config;
  },
};

export default nextConfig;
