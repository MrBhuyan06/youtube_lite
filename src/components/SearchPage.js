import React, { useEffect, useState } from "react";
import CategoriesList from "./CategoriesList.js";
import { Link, useParams } from "react-router-dom";
import request from "../api.axios.js";
import VideoCard from "./VideoCard.js";
const SearchPage = () => {
  const [categoriesVideo, setCategoriesVideo] = useState([]);
  const { keyword } = useParams();
  useEffect(() => {
    getCategoriesData();
  }, [keyword]);
  async function getCategoriesData() {
    const {
      data: { items },
    } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: keyword,
        type: "video",
      },
    });
    setCategoriesVideo(items);
  }
  if (categoriesVideo.length === 0) {
    return;
  }

  return (
    <div>
      <CategoriesList />
      <div>
        {
          <div className="flex flex-wrap gap-4 mt-2">
            {categoriesVideo.map((video) => {
              return (
                <Link
                  key={video.id.videoId}
                  to={`/watch?v=${video.id.videoId}`}
                >
                  <VideoCard info={video} />
                </Link>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default SearchPage;
