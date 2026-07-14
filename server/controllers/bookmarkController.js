const Bookmark = require("../models/Bookmark");

// Create Bookmark
exports.createBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.create(req.body);

    res.status(201).json({
      success: true,
      message: "Bookmark Added Successfully",
      bookmark,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Bookmarks
exports.getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({
      videoId: req.params.videoId,
    }).sort({ timestamp: 1 });

    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update Bookmark
exports.updateBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Bookmark Updated",
      bookmark,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete Bookmark
exports.deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Bookmark Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};