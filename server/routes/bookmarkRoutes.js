const express = require("express");

const router = express.Router();

const {
  createBookmark,
  getBookmarks,
  updateBookmark,
  deleteBookmark,
} = require("../controllers/bookmarkController");

router.post("/", createBookmark);

router.get("/:videoId", getBookmarks);

router.put("/:id", updateBookmark);

router.delete("/:id", deleteBookmark);

module.exports = router;