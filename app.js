const express = require("express");
const path = require("path");
const app = express();

//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes
app.get("/", (req, res) => {
  res.render("home");
  console.log("usernames will be logged here - wip");
});
app.get("/new", (req, res) => {
  res.render("new");
});
app.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
});

//listen
app.listen(3000, () => {
  console.log("App listening on port http://localhost:3000");
});
