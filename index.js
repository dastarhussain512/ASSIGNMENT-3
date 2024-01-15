const express = require("express");
const app = express();
const path = require("path");

const port = 5000;

////setting folder for static assets
// app.use(express.static("public"))
app.use(express.static(path.join(__dirname, "public")));

//setting ejs
app.set("view engine", "ejs");
// app.set("views","views")
app.set("views", path.join(__dirname, "views"));

//home route
app.get("/", (req, res) => {
  res.render("Home.ejs");
});

//services route
app.get("/cities", (req, res) => {
  res.render("cities.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/place", (req, res) => {
  res.render("place.ejs");
});
app.get("/persanalities", (req, res) => {
  res.render("persanalities.ejs");
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});