const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => {
  res.send("Learning Portal API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});