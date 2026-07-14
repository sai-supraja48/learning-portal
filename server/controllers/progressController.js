const Progress = require("../models/Progress");

// Save Progress
exports.saveProgress = async (req, res) => {
  try {
    const { userId, videoId, lastWatched } = req.body;

    const progress = await Progress.findOneAndUpdate(
      { userId, videoId },
      { lastWatched },
      { upsert: true, new: true }
    );

    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Progress
exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({
      userId: req.params.userId,
      videoId: req.params.videoId,
    });

    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};