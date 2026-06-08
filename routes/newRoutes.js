const express = require("express");
const router = express.Router();

// middleware that is specific to this router
const newController = require("../controllers/newController");

// define the home page route
router.get("/", newController.renderNew);
router.post("/", newController.postNew);
module.exports = router;
