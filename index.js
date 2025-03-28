const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

const port = process.env.PORT || 8000;

app.listen(port,()=>console.log(`listening of post ${port}`));

