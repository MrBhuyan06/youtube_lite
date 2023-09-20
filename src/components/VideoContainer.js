import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard.js";
import request from "../api.axios.js";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  //get video
  useEffect(() => {
    getViddeo();
  }, []);

  //get Video Details

  async function getViddeo() {
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 50,
      },
    });
    setVideo(data.items);
  }

  if (video?.length === 0) {
    return;
  }

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {video.map((video) => {
        return <VideoCard key={video.id} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
