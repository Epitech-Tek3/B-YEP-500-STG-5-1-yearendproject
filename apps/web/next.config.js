const withPWA = require("next-pwa");
const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const runtimeCaching = require("next-pwa/cache");
const withTM = require("next-transpile-modules")(["components"]);

const nextConfig = {
  env: {
    GOOGLE_CLIENTID: process.env.GOOGLE_CLIENTID,
    GOOGLE_CLIENTSECRET: process.env.GOOGLE_CLIENTSECRET,
    API_ROUTE: process.env.API_ROUTE
  },
  trailingSlash: true,
  compress: true,
  swcMinify: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true
  }
};

module.exports = withPlugins(
  [
    withPWA,
    {
      pwa: {
        runtimeCaching,
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
        buildExcludes: [/middleware-manifest\.json$/, /_middleware\.js$/]
      }
    },
    withTM,
    {
      reactStrictMode: true
    },
    [
      withOffline,
      {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // 4Mb
        transformManifest: (manifest) => ["/"].concat(manifest), // add the homepage to the cache
        generateInDevMode: false,
        workboxOpts: {
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
              handler: "CacheFirst",
              options: {
                cacheName: "images",
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                  purgeOnQuotaError: true
                }
              }
            },
            {
              urlPattern: /^https:\/\/(use|p)\.typekit\.net\/.+$/,
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "typekit-cache",
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      }
    ]
  ],
  nextConfig
);
