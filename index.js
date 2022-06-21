const express = require("express");
const app = express();
const Skincaredata = require("./db.json");

const port = process.env.PORT || 3000;


app.get("/skindata", (req, res) => {
  res.send(Skincaredata);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
