const express = require("express");
const app = express();

app.get("/", function (req, res) {
  response = "This is version 3 of the app." + "\n";
  res.send(response);
});

console.log("Hello World!\n");
