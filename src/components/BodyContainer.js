import React from "react";
import SideBar from "./SideBar.js";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BodyContainer = () => {
  const theme = useSelector((store) => store.themes.apptheme);
  return (
    <div
      className={`flex  border-t-2   ${
        theme ? "bg-white text-black" : " bg-primary text-white"
      } `}
    >
      <SideBar />
      <Outlet />
    </div>
  );
};

export default BodyContainer;
