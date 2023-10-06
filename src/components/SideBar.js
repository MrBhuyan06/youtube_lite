import React from "react";
import { useSelector } from "react-redux";
import store from "../redux/store.js";
import {
  MdHome,
  MdSubscriptions,
  MdThumbUp,
  MdLogout,
  MdSettings,
  MdFavorite,
  MdLiveTv,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  const theme = useSelector((store) => store.themes.apptheme);
  const isOpen = useSelector((store) => store.menu.isOpen);
  if (!isOpen) {
    return;
  }

  return (
    <div className="w-190 border-r-2 border-red-600  sticky top-20 h-[430px]      ">
      <ul>
        <li
          className={`rounded-sm p-4 ${
            theme ? "text-black " : "text-red-600"
          } flex  items-center gap-2  cursor-pointer hover:bg-textColor   tran   `}
        >
          <MdHome className="text-2xl" />

          <span className="text-1xl">Home</span>
        </li>
        <li
          className={`rounded-sm p-4 ${
            theme ? "text-black " : "text-red-600"
          } flex  items-center gap-2 cursor-pointer hover:bg-textColor   transition-all duration-100 ease-in `}
        >
          <MdSubscriptions className="text-2xl" />

          <span className="text-1xl">Subscription</span>
        </li>
        <li
          className={` rounded-sm p-4 ${
            theme ? "text-black " : "text-red-600"
          } flex  items-center gap-2 cursor-pointer hover:bg-textColor  transition-all duration-100 ease-in `}
        >
          <MdThumbUp className="text-2xl" />

          <span className="text-1xl">Like Video</span>
        </li>
        <li
          className={` rounded-sm p-4 ${
            theme ? "text-black " : "text-red-600"
          } flex  items-center gap-2 cursor-pointer hover:bg-textColor   transition-all duration-100 ease-in  `}
        >
          <MdLogout className="text-2xl" />

          <span className="text-1xl">Logout</span>
        </li>
        <li
          className={` rounded-sm p-4 ${
            theme ? "text-black " : "text-red-600"
          } flex  items-center gap-2 hover:bg-textColor   transition-all duration-100 ease-in  `}
        >
          <MdSettings className="text-2xl" />

          <span className="text-1xl">Setting</span>
        </li>
        <li
          className={` rounded-sm p-4 ${
            theme ? "text-black " : "text-red-600"
          } flex  items-center gap-2 cursor-pointer hover:bg-textColor  transition-all duration-100 ease-in`}
        >
          <MdFavorite className="text-1xl" />

          <span className="text-1xl">Favorite</span>
        </li>
        <li
          className={` rounded-sm  p-4 ${
            theme ? "text-black " : "text-red-600"
          } flex  items-center gap-2 cursor-pointer hover:bg-textColor  transition-all duration-100 ease-in`}
        >
          <MdLiveTv className="text-1xl" />

          <span className="text-1xl">Live</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
