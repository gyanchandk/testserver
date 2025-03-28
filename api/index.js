const express = require("express");
const app = express();
const { createServer } = require("@vercel/node");

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

module.exports = createServer(app);

