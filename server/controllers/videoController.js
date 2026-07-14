const Video = require("../models/Video");

// Get all videos
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one video
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    res.json(video);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add new video
exports.addVideo = async (req, res) => {

  try {

    const video = await Video.create(req.body);

    res.status(201).json(video);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};