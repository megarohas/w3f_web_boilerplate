import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";

const root = ReactDOM.createRoot(document.getElementById("react_root_element"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
