import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              typescript: true,
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
