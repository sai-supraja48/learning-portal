import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

function Dashboard() {
  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user"));

  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  if (!token) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    const filtered = videos.filter((video) =>
      video.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredVideos(filtered);
  }, [search, videos]);

  const fetchVideos = async () => {
    try {
      const res = await api.get("/videos");

      setVideos(res.data);
      setFilteredVideos(res.data);
    } catch (err) {
      console.error("Error fetching videos:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-4">

        {/* Welcome Section */}

        <div className="card shadow border-0 mb-4">

          <div className="card-body">

            <h2 className="fw-bold">
              Welcome {user?.name || "Student"} 👋
            </h2>

            <p className="text-muted mb-0">
              Continue your learning journey.
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="row mb-4">

          <div className="col-md-8">

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="🔍 Search videos..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <div className="col-md-4">

            <div className="alert alert-primary text-center mb-0">

              Total Videos : <strong>{filteredVideos.length}</strong>

            </div>

          </div>

        </div>

        {/* Loading */}

        {loading ? (
          <div className="text-center mt-5">

            <div
              className="spinner-border text-primary"
              role="status"
            ></div>

            <p className="mt-3">
              Loading Videos...
            </p>

          </div>
        ) : filteredVideos.length === 0 ? (

          <div className="alert alert-warning">

            No videos found.

          </div>

        ) : (

          <div className="row">

            {filteredVideos.map((video) => (

              <div
                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                key={video._id}
              >

                <VideoCard video={video} />

              </div>

            ))}

          </div>

        )}

      </div>
    </>
  );
}

export default Dashboard;