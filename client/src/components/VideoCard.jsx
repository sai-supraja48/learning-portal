import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <div className="card shadow-lg h-100 border-0 rounded-4">

      <img
        src={video.thumbnail}
        alt={video.title}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">

        <h5 className="fw-bold">
          {video.title}
        </h5>

        <p className="text-muted flex-grow-1">
          {video.description}
        </p>

        <p>
          ⏱ Duration :{" "}
          <strong>
            {Math.floor(video.duration / 60)} min
          </strong>
        </p>

        <Link
          to={`/video/${video._id}`}
          className="btn btn-primary w-100"
        >
          ▶ Watch Video
        </Link>

      </div>

    </div>
  );
}

export default VideoCard;