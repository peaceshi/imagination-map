/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/" },
    src: { url: "/dist" }
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript"
    // [
    //   "@snowpack/plugin-webpack",
    //   {
    //     outputPattern: {
    //       css: "v3/dist/css/[name].[contenthash].bundle.css",
    //       js: "v3/dist/js/[name].[contenthash].bundle.js"
    //     },
    //     htmlMinifierOptions: false
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
  packageOptions: {
    /* ... */
    // namedExports: ["@nebula.gl/editor"],
    source: "local"
    // polyfillNode: true
  },
  devOptions: {
    /* ... */
    secure: true
  },
  buildOptions: {
    out: "build/v3",
    baseUrl: "/v3/"
    // metaUrlPath: "/v3/_snowpack"
  },
  alias: {
    /* ... */
  }
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: "es2020"
  // }
};
