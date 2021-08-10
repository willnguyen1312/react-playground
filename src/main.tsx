import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App'
// import App from "./App2";
// import App from "./Debounce";
import App from "./AppWebWorker";
// import * as sample from "./sample";

// console.log(sample.HI);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
