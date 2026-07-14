const express = require("express");
const router = express.Router();

const {
  saveProgress,
  getProgress,
} = require("../controllers/progressController");

router.post("/", saveProgress);

router.get("/:userId/:videoId", getProgress);

module.exports = router;
