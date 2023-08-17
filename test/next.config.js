/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "~/app/styles/variables.scss";`,
  },

  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.(glb|gltf)$/,
        use: {
          loader: "file-loader",
        },
      }
    );

    return config;
  }
}

module.exports = nextConfig
