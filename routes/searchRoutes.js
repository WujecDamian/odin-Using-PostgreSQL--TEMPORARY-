const express = require("express");
const router = express.Router();

// middleware that is specific to this router
const searchController = require("../controllers/searchController");

// define the home page route
router.get("/", searchController.search);
module.exports = router;
