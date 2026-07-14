const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },

    lastWatched: Number,

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Progress", progressSchema);