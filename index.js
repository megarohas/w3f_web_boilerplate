require("dotenv").config();
const http = require("http");

const host_name = process.env.HOST_NAME || "127.0.0.1";
const port = 9000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Hello World =)" }));
});

server.listen(port, host_name, () => {
  console.log(`Server running at http://${host_name}:${port}/`);
});
