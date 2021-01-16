const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");

const { getDate, getDay } = require("./date");

app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//create static folder in the server containing all files to server the client
app.use(express.static("public"));

let items = [];
let works = [];

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: works });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  day = getDate();
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
  if (req.body.list === "Work") {
    works.push(req.body.newItem);
    res.redirect("/work");
  } else {
    items.push(req.body.newItem);
    res.redirect("/");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening at post 3000");
});
