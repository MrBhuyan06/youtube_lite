import React from "react";
import VideoContainer from "./VideoContainer.js";
import CategoriesList from "./CategoriesList.js";
import SideBar from "./SideBar.js";

const MainContainer = () => {
  return (
    <div className="w-full p-4   ">
      <CategoriesList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
