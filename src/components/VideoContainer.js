import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard.js";
import request from "../api.axios.js";
import { Link } from "react-router-dom";

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
    setVideo(data?.items);
  }

  if (video?.length === 0) {
    return;
  }

  return (
    <div className="flex flex-wrap gap-4 mt-2">
      {video.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
