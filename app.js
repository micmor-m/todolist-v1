const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");

app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const today = new Date();

  let day = "";
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day });
});

app.post("/", (req, res) => {
  console.log(req.body.newItem);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening at post 3000");
});
