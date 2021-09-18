import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App'
// import App from "./App2";
// import App from "./Debounce";
// import App from "./AppCloneElement";
// import App from "./Lifecycle";
// import App from "./Fetch";
// import App from "./Effect";
// import App from "./AppChildren";
import App from "./AppMemo";
// import App from "./AppWebWorker";
// import * as sample from "./sample";

// const FormFields = {
//   First: "firstName2",
//   Last: "lastName2",
// } as const;

// console.log(FormFields.First);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
