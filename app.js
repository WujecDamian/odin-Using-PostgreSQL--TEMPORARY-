const express = require("express");
const path = require("path");
const app = express();

//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//imports (routes)
const homeRoutes = require("./routes/homeRoutes");
const newRoutes = require("./routes/newRoutes");

//routes
app.get("/", homeRoutes);
app.get("/new", newRoutes);

//listen
app.listen(3000, () => {
  console.log("App listening on port http://localhost:3000");
});
