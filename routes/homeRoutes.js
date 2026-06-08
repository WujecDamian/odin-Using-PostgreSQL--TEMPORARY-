const express = require("express");
const router = express.Router();

// middleware that is specific to this router
const homeController = require("../controllers/homeController");
// define the home page route
router.get("/", homeController.renderHome);

module.exports = router;
