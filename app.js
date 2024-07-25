const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  response = "This is version 3 of the app." + "\n";
  res.send(response);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});
