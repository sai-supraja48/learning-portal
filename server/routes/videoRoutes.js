const express = require("express");

const router = express.Router();

const {
  getVideos,
  getVideoById,
  addVideo,
} = require("../controllers/videoController");

router.get("/", getVideos);

router.get("/:id", getVideoById);

router.post("/", addVideo);

module.exports = router;