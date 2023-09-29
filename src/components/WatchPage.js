import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAsyncError, useSearchParams } from "react-router-dom";
import store from "../redux/store.js";
import { toggleMenu, closeMenu } from "../redux/appNavigation.js";
import CommentContainer from "./CommentContainer.js";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="grid-flow-col min-h-screen w-full  pl-10 mt-2">
      <div className="w-full ">
        <iframe
          width="1000"
          height="600"
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?si=QNQiMeJ8R1OBPKfq`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h1>Comment</h1>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
