import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
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
  console.log("dev mode");
  void import("stook-devtools").then((stook) => {
    stook.devtools.init();
    return console.log("stook-devtools loaded");
  });
  // void import("@deck.gl/core").then((deck) => {
  //   deck.log.enable();
  //   deck.log.level = 2;
  //   return console.log("deckgl logs loaded");
  // });
}
