const express = require("express");
const app = express();
const { createServer } = require("@vercel/node");

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

app.get("/api", (req, res) => {
  res.send("api home page");
});

module.exports = createServer(app);

