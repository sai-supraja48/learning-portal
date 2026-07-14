const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },

    title: String,

    timestamp: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", bookmarkSchema);