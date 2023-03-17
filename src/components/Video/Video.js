import React from "react";
import { useContext } from "react";
import { Data } from "../../Data/Data";
import { AppContext } from "../../App";

const Video = () => {
  // *****************************
  // * Getting states from App
  // *****************************
  const { plotId } = useContext(AppContext);

  return (
    <div className="video">
      <iframe
        width="100%"
        height="97%"
        src={Data[plotId].youtubeVideoUrl}
        title="Jefferson - Plot 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
