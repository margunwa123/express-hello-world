const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!");
})

app.get("/callback", (_, res) => {
  res.send("Hello Callback!");
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`The app is running at http://localhost:${PORT}!`);
})
