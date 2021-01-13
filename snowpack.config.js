/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/_dist_" }
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    [
      "@snowpack/plugin-webpack",
      {
        outputPattern: {
          css: "_dist_/css/[name].[contenthash].bundle.css",
          js: "_dist_/js/[name].[contenthash].bundle.js"
        }
      }
    ]
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
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
    // namedExports: ["@nebula.gl/editor"],
    polyfillNode: true
  },
  devOptions: {
    /* ... */
    secure: true
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  experiments: {
    source: "local"
    // optimize: {
    //   bundle: true,
    //   minify: true,
    //   target: "es2020"
    // }
  }
};
