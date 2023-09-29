import React from "react";
import SideBar from "./SideBar.js";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "./CategoriesList.js";

const BodyContainer = () => {
  const theme = useSelector((store) => store.themes.apptheme);
  return (
    <div
      className={`flex mt-20     border-red-400 h-min-90  ${
        theme ? "bg-white text-black" : " bg-primary text-white"
      }   `}
    >
      <SideBar className="sticky top-40" />
      {/* <CategoriesList /> */}
      <Outlet />
    </div>
  );
};

export default BodyContainer;
