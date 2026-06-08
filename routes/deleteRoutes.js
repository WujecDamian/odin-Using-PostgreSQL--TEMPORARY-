const express = require("express");
const router = express.Router();

const deleteController = require("../controllers/deleteController");

router.get("/", deleteController.deleteUsers);
module.exports = router;
