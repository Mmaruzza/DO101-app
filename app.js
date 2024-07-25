const express = require("express");
const app = express();
const port = 8080;

app.get("/", function (req, res) {
  response = "This is version 3 of the app." + "\n";
  res.send(response);
});

app.get("/test", (req, res) => {
  response = "This is version 2 of the app" + "\n";
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log("Hello World!\n");
