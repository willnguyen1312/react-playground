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
// import App from "./AppMemo";
// import App from "./AppVideo";
// import App from "./AppI18n";
// import App from "./AppMitt";
// import App from "./AppAxios";
import App from "./AppTimer";
// import App from "./AppInput";
// import App from "./AppReactQuery";
// import App from "./AppAccessibility";
// import App from "./JsonEditor";
import { ChakraProvider } from "@chakra-ui/react";
// import App from "./AppWebWorker";
// import * as sample from "./sample";

// const FormFields = {
//   First: "firstName2",
//   Last: "lastName2",
// } as const;

// console.log(FormFields.First);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={false}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
