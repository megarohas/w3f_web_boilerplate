import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("react_root_element"));
root.render(React.createElement(App, null));

// const root = ReactDOM.hydrateRoot(
//   document.getElementById("react_root_element"),
//   React.createElement(App, null)
// );
