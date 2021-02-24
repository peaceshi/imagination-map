import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { devtools } from "stook-devtools";
import "./index.css";
import "antd/lib/button/style/index.css";
import "antd/lib/layout/style/index.css";
import "antd/lib/spin/style/index.css";
import "antd/lib/drawer/style/index.css";
// import "antd/lib/tabs/style/index.css";
// import "antd/lib/style/index.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
if (import.meta.env.NODE_ENV !== "production") {
  devtools.init();
}
