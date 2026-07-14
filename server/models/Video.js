const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    videoUrl: {
      type: String,
      required: true,
    },

    thumbnail: String,

    duration: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);