module.exports = {
  globDirectory: "build/",
  globPatterns: ["index.html", "**/*/index.js", "**/*/MapLayers.js", "**/*/DataLoader.js", "**/*/map.image.dzi"],
  swDest: "build/sw.js",
  cleanupOutdatedCaches: "true",
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [
    {
      urlPattern: new RegExp("/tiles/.*\\.(?:png|jpg|jpeg|webp|dzi)"),
      handler: "CacheFirst",
      options: {
        cacheName: "tiles",
        expiration: {
          maxAgeSeconds: 31536000
        },
        backgroundSync: {
          name: "sync-tiles",
          options: {
            maxRetentionTime: 60
          }
        }
      }
    },
    {
      urlPattern: new RegExp("/icons/.*\\.(?:png|jpg|jpeg|svg|webp|ico|bmp)"),
      handler: "CacheFirst",
      options: {
        cacheName: "icons",
        expiration: {
          maxAgeSeconds: 31536000
        },
        backgroundSync: {
          name: "sync-icons",
          options: {
            maxRetentionTime: 60
          }
        }
      }
    },
    {
      urlPattern: new RegExp("/.*\\.(?:js|css|json|html)"),
      handler: "CacheFirst",
      options: {
        cacheName: "web",
        expiration: {
          maxAgeSeconds: 31536000
        }
      }
    }
  ]
};
