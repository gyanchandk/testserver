const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

app.get("/api", (req, res) => {
  res.send("api home page");
});




app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "files/birthday.pdf"); // Update with your file path
  res.download(filePath, "sample.pdf", (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

const port = process.env.PORT || 8000;

app.listen(port,()=>console.log(`listening of post ${port}`));

