import { forwardRef } from "react";

const VideoPlayer = forwardRef(({ video }, ref) => {
  return (
    <video
      ref={ref}
      width="100%"
      height="500"
      controls
      controlsList="nodownload"
      disablePictureInPicture
    >
      <source
        src={video.videoUrl}
        type="video/mp4"
      />

      Your browser does not support HTML5 video.
    </video>
  );
});

export default VideoPlayer;