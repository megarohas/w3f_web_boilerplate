import React from "react";
import ReactDOM from "react-dom/client";
import App from "../frontend/app";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.hydrateRoot(
  document.getElementById("react_root_element"),
  React.createElement(BrowserRouter, {}, React.createElement(App))
  // React.createElement(StaticRouter, { location: "/" }, React.createElement(App))
);
