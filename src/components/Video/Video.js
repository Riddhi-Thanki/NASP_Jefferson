import React from "react";

const Video = () => {
  return (
    <div className="video">
      <iframe
        width="700"
        height="530"
        src="https://www.youtube.com/embed/Yg3N-BmKvWM"
        title="Jefferson - Plot 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
