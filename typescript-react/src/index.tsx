import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import OldSchool__FunctionKeyword from "./Components/Props/OldSchool__FunctionKeyword";
import ArrowFunction from "./Components/Props/ArrowFunction";
import Types from "./Types_vs_Interface/Types";

const arr = ["ferrari", "bugatti", "lambo"];
const obj = { name: "Hemanth", age: 23 };
const variable = 999;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Types/>
    {/* <OldSchool__FunctionKeyword variable={variable} obj={obj} arr={arr} /> */}
    {/* <ArrowFunction variable={variable} obj={obj} arr={arr} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
