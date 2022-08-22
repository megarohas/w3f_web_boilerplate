import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("react_root_element"));
root.render(React.createElement(BrowserRouter, {}, React.createElement(App)));

// const root = ReactDOM.hydrateRoot(
//   document.getElementById("react_root_element"),
//   React.createElement(App, null)
// );
