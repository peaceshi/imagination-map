module.exports = {
  globDirectory: "public/",
  globPatterns: ["**/*.{js,css,json,html}"],
  swDest: "public/sw.js",
  cleanupOutdatedCaches: "true",

  // Define runtime caching rules.
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,

      // Apply a cache-first strategy.
      handler: "CacheFirst",

      options: {
        // Use a custom cache name.
        cacheName: "images",
        expiration: {
          maxAgeSeconds: 31536000
        }
      }
    },
    {
      urlPattern: /\.(?:js,css,json,html)$/,

      // Apply a cache-first strategy.
      handler: "CacheFirst",

      options: {
        // Use a custom cache name.
        cacheName: "web",
        expiration: {
          maxAgeSeconds: 31536000
        }
      }
    }
  ]
};
