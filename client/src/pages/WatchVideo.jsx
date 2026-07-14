import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import BookmarkList from "../components/BookmarkList";

function WatchVideo() {
  const { id } = useParams();

  const videoRef = useRef(null);

  const [video, setVideo] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // ---------------- FETCH DATA ----------------

  useEffect(() => {
    loadVideo();
    loadBookmarks();
  }, [id]);

  const loadVideo = async () => {
    try {
      const res = await api.get(`/videos/${id}`);
      setVideo(res.data);
    } catch (err) {
      console.error(err);
toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const loadBookmarks = async () => {
    try {
      const res = await api.get(`/bookmarks/${id}`);
      setBookmarks(res.data);
    } catch (err) {
      console.error(err);
toast.error("Something went wrong");
    }
  };

  // ---------------- CONTINUE WATCHING ----------------

  useEffect(() => {
    if (!video) return;

    const saved = localStorage.getItem(`progress_${id}`);

    if (saved && videoRef.current) {
      videoRef.current.currentTime = Number(saved);
    }
  }, [video, id]);

  // ---------------- SAVE PROGRESS ----------------

  useEffect(() => {
    if (!videoRef.current) return;

    const interval = setInterval(() => {
      if (videoRef.current) {
        localStorage.setItem(
          `progress_${id}`,
          videoRef.current.currentTime
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [video, id]);

  // ---------------- PROGRESS BAR ----------------

  useEffect(() => {
    const player = videoRef.current;

    if (!player) return;

    const updateProgress = () => {
      if (!player.duration) return;

      setProgress(
        (player.currentTime / player.duration) * 100
      );
    };

    player.addEventListener("timeupdate", updateProgress);

    return () =>
      player.removeEventListener(
        "timeupdate",
        updateProgress
      );
  }, [video]);

  // ---------------- SCREENSHOT PROTECTION ----------------

  useEffect(() => {
    const disable = (e) => e.preventDefault();

    document.addEventListener("contextmenu", disable);

    return () =>
      document.removeEventListener(
        "contextmenu",
        disable
      );
  }, []);

  // Pause video when changing tab

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () =>
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
  }, []);

  // ---------------- BOOKMARKS ----------------

  const addBookmark = async () => {
    if (!videoRef.current) return;

    const currentTime = Math.floor(
      videoRef.current.currentTime
    );

    const title =
      prompt("Bookmark Title") || "Untitled Bookmark";

    try {
      await api.post("/bookmarks", {
        videoId: id,
        title,
        timestamp: currentTime,
      });

      await loadBookmarks();

      toast.success("Bookmark Added Successfully");
    } catch (err) {
      console.error(err);
toast.error("Something went wrong");
    }
  };

  const jumpToBookmark = (time) => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = time;
    videoRef.current.play();
  };

  const deleteBookmark = async (bookmarkId) => {
    const ok = window.confirm(
      "Delete this bookmark?"
    );

    if (!ok) return;

    try {
      await api.delete(`/bookmarks/${bookmarkId}`);

      loadBookmarks();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const editBookmark = async (bookmark) => {
    const title = prompt(
      "Edit Bookmark",
      bookmark.title
    );

    if (title === null) return;

    try {
      await api.put(`/bookmarks/${bookmark._id}`, {
        title,
      });

      loadBookmarks();
    } catch (err) {
      console.error(err);
toast.error("Something went wrong");
    }
  };

  const token = localStorage.getItem("token");

if (!token) {
  return <Navigate to="/" />;
}

  // ---------------- LOADING ----------------

  if (loading) {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <div
          className="spinner-border text-primary"
          role="status"
        ></div>

        <h5 className="mt-3">
          Loading Video...
        </h5>
      </div>
    </>
  );
}

  return (
    <>
      <Navbar />

      <div className="container py-4">

        <div className="card shadow-lg border-0 rounded-4">

          <div className="card-body">

            <h2 className="fw-bold">
  {video.title}
</h2>

            <p className="text-secondary fs-5">
              {video.description}
            </p>

            <div
              style={{
                position: "relative",
              }}
            >
              <VideoPlayer
                ref={videoRef}
                video={video}
              />

              <div
                style={{
                  position: "absolute",
                  top: 15,
                  right: 20,
                  background: "rgba(0,0,0,.5)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                🎓 GVCC Learning Portal
              </div>
            </div>

            {/* Progress */}

            <div className="mt-4">

              <div className="d-flex justify-content-between">

                <h5>Watch Progress</h5>

                <strong>
                  {Math.floor(progress)}%
                </strong>

              </div>

              <div
  className="progress"
  style={{ height: "25px" }}
>

                <div
  className="progress-bar progress-bar-striped progress-bar-animated bg-success fw-bold"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            {/* Bookmark */}

            <div className="mt-4">

              <button
  className="btn btn-success btn-lg"
                onClick={addBookmark}
              >
                📌 Add Bookmark
              </button>

            </div>

            {/* Bookmark List */}

            <BookmarkList
              bookmarks={bookmarks}
              jumpToBookmark={jumpToBookmark}
              deleteBookmark={deleteBookmark}
              editBookmark={editBookmark}
            />

          </div>

        </div>

      </div>
    </>
  );
}

export default WatchVideo;