const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
// const webpack = require("webpack");

const prod = process.env.NODE_ENV === "production";

module.exports = withBundleAnalyzer({
  compress: true, // gzip compress
  poweredByHeader: false, // Disabling x-powered-by
  webpack(config) {
    console.log(prod ? "🚨 production build" : "🚨 next dev build");

    const plugins = [...config.plugins];

    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "inline-source-map",
      plugins,
    };
  },
});
