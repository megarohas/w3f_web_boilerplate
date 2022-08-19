require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["styled-components", { ssr: true, displayName: true, preprocess: false }],
  ],
});

require("dotenv").config();
const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
import App from "../frontend/app";
import { ServerStyleSheet } from "styled-components";
const path = require("path");
let express = require("express");
let app = express();
const host_name = process.env.HOST_NAME || "localhost";
const port = 9000;

let server = app.listen(port);
server.once("error", function (err) {
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
// });

app.get("/bundle.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/bundle.js"));
});

app.get("/json", (req, res) => {
  res.send({ message: "Hello World =)" });
});

app.get("/", (req, res) => {
  const sheet = new ServerStyleSheet();
  const app = ReactDOMServer.renderToString(
    sheet.collectStyles(React.createElement(App, null))
  );
  const styles = sheet.getStyleTags();
  const indexFile = path.resolve("./frontend/index.html");
  return fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    data = data.replace(
      '<div id="react_root_element"></div>',
      `<div id="react_root_element">${app}</div>`
    );
    data = data.replace('<script src="/bundle.js"></script>', styles);
    console.log("data:", data);
    return res.send(data);
  });
});
