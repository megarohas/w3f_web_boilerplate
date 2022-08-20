require("dotenv").config();
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../frontend/app";
import { ServerStyleSheet } from "styled-components";
import webpack from "webpack";
import path from "path";
import ReactDOM from "react-dom/client";

let express = require("express");
let app = express();
// const host_name = process.env.HOST_NAME || "localhost";
const port = 9000;
const serverCompiler = webpack(require("../server.webpack.config.js"));
serverCompiler.run((_errors, _stats) => {
  if (!_errors) {
    console.log("js code was rebundled");
  }
});
let server = app.listen(port);
server.once("error", function (err: any) {
  if (err.code === "EADDRINUSE") {
    server.close();
  }
});

process.once("SIGUSR2", () => {
  process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, "SIGINT");
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/index.html"));
// })

app.use(express.static("public"));

app.get("/ssr", (req: any, res: any) => {
  res.send({ message: "Hello World =)" });
});

app.get("/bundle.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/bundle.js"));
});

app.get("/json", (req, res) => {
  res.send({ message: "Hello World =)" });
});

app.get("/", (req, res) => {
  // const root = ReactDOM.createRoot(document.getElementById("react_root_element"));
  // root.render(React.createElement(App, null));

  // root.render(React.createElement(App, null));

  const sheet = new ServerStyleSheet();
  const app = ReactDOMServer.renderToString(
    sheet.collectStyles(React.createElement(App, null))
  );
  const styles = sheet.getStyleTags();
  const indexFile = path.resolve("./frontend/index.html");

  return fs.readFile(indexFile, "utf8", (err2, data) => {
    if (err2) {
      console.error("Something went wrong:", err2);
      return res.status(500).send("Oops, better luck next time!");
    }
    data = data.replace(
      '<div id="react_root_element"></div>',
      `<div id="react_root_element">${app}</div>`
    );
    data = data.replace('<div id="styled_components_styles"></div>', styles);
    return res.send(data);
  });
});
