const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");

app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const today = new Date();
  const currentDay = today.getDay();
  let day = "";

  switch (currentDay) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 0:
      day = "Sunday";
      break;
    default:
      console.log("Invalid day");
  }

  res.render("list", { kindOfDay: day });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening at post 3000");
});
