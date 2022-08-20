import React from "react";
import ReactDOM from "react-dom/client";
import App from "../frontend/app";

const root = ReactDOM.hydrateRoot(
  document.getElementById("react_root_element"),
  React.createElement(App, null)
);
