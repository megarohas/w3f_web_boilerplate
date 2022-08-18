require("dotenv").config();
const path = require("path");
let express = require("express");
let app = express();
const host_name = process.env.HOST_NAME || "localhost";
const port = 9000;

app.listen(port);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.get("/bundle.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/bundle.js"));
});

app.get("/json", (req, res) => {
  res.send({ message: "Hello World =)" });
});
