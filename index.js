require("dotenv").config();
let express = require("express");
let app = express();
const host_name = process.env.HOST_NAME || "localhost";
const port = 9000;

app.listen(port);

app.get("/", (req, res) => {
  res.send({ message: "Hello World =)" });
});
