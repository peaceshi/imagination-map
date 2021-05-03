// const { merge } = require("webpack-merge");
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/" },
    src: { url: "/dist" }
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-typescript",
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: "yarn pnpify tsc" } : {})
      }
    ]
    // [
    //   "@snowpack/plugin-webpack",
    //   {
    //     outputPattern: {
    //       css: "dist/css/[name].[contenthash].bundle.css",
    //       js: "dist/js/[name].[contenthash].bundle.js"
    //     },
    //     htmlMinifierOptions: true
    //   }
    // ]
    // [
    //   "@snowpack/plugin-webpack",
    //   {
    //     outputPattern: {
    //       css: "dist/css/[name].[contenthash].bundle.css",
    //       js: "dist/js/[name].[contenthash].bundle.js"
    //     },
    //     htmlMinifierOptions: false,
    //     extendConfig: (config) => {
    //       return merge(config, {
    //         resolve: {
    //           plugins: [],
    //           extensions: [".es6"]
    //         },
    //         resolveLoader: {
    //           plugins: []
    //         }
    //       });
    //     }
    //   }
    // ]
    // [
    //   "@snowpack/plugin-run-script",
    //   {
    //     // cmd: 'eslint "src/**/*.{js,jsx,ts,tsx}"',
    //     // Optional: Use npm package "watch" to run on every file change
    //     // watch: 'watch "$1" src'
    //   }
    // ]
  ],
  routes: [
    /* To enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"}
  ],
  optimize: {
    entrypoints: "auto",
    preload: false,
    bundle: true,
    splitting: true,
    treeshake: true,
    manifest: true,
    minify: true,
    target: "es2020"
  },
  packageOptions: {
    /* ... */
    // namedExports: ["deck.gl"],
    source: "local",
    polyfillNode: true
  },
  devOptions: {
    /* ... */
    secure: false
  },
  buildOptions: {
    // out: "build/"
    baseUrl: "/v3"
    // metaUrlPath: "/v3/_snowpack"
  },
  alias: {
    /* ... */
  }
};
