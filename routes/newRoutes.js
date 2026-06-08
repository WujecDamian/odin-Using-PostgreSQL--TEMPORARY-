const express = require("express");
const router = express.Router();

// middleware that is specific to this router

// define the home page route
router.get("/", (req, res) => {
  res.render("new");
});
router.post("/", (req, res) => {
  console.log("username to be saved: ", req.body.username);
});
module.exports = router;
