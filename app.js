const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//imports (routes)
const homeRoutes = require("./routes/homeRoutes");
const newRoutes = require("./routes/newRoutes");
const searchRoutes = require("./routes/searchRoutes");
const deleteRoutes = require("./routes/deleteRoutes");

//routes
app.use("/", homeRoutes);
app.use("/new", newRoutes);
app.use("/search", searchRoutes);
app.use("/delete", deleteRoutes);

//listen
app.listen(3000, () => {
  console.log("App listening on port http://localhost:3000");
});
