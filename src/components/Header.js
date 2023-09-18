import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { login } from "../redux/authslice.js";
import app from "../firebaseconfig.js";
import {
  AiOutlineMenu,
  AiFillYoutube,
  AiFillBell,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { changeTheme } from "../redux/theme.js";

import { MdKeyboardVoice, MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
const Header = () => {
  const theme = useSelector((store) => store.themes.apptheme);
  console.log(theme);
  const dispatch = useDispatch();

  function themeHandler() {
    dispatch(changeTheme());
  }
  //   if (user) {
  //     // const {
  //     //   user: { refreshToken, providerData },
  //     // } = await signInWithPopup(firebaseAuth, provider);
  //     dispatch(login({ name: "abhishekssss", age: "knkn" }));
  //     // localStorage.setItem("user", JSON.stringify(providerData[0]));
  //     // console.log(typeof providerData[0]);
  //   }
  //   // } else {
  //   //   setIsMenu(!isMenu);
  //   // }
  // };

  return (
    <header
      className={` flex items-center  shadow-lg h-20 ${
        theme ? "text-black bg-white " : "text-red-600 bg-primary"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2 ">
          <AiOutlineMenu className="text-2xl cursor-pointer" />
          <AiFillYoutube className="text-red-500 text-5xl" />
        </div>
        <div className="flex  w-full  md:w-3/5  items-center justify-center">
          <input
            type="text"
            className={` p-2 w-full  md:w-1/2 text-white  outline-none focus:border-2 border-red-600 rounded-l-full 
              ${theme ? "bg-slate-300" : "bg-ligthbggray"}`}
          />
          <button className="bg-red-600 px-4 py-2 text-black rounded-r-full">
            <AiOutlineSearch className="text-2xl" />
          </button>
          <div className=" hidden md:flex ml-2   justify-center rounded-full bg-transparent hover:bg-lighttextGray  transform cursor-pointer duration-150 transition-all ease-in">
            <MdKeyboardVoice className="text-4xl" />
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="hidden md:flex ml-2 p-1  justify-center rounded-full bg-transparent hover:bg-lighttextGray  transform cursor-pointer duration-150 transition-all ease-in">
            <AiFillBell className="text-3xl" />
          </div>
          <div className=" hidden md:flex ml-2 p-1 flex justify-center rounded-full bg-transparent hover:bg-lighttextGray  transform cursor-pointer duration-150 transition-all ease-in">
            <AiOutlineUser className="text-3xl" />
          </div>
          <div className=" ml-2 p-1 flex justify-center rounded-full bg-transparent hover:bg-lighttextGray  transform cursor-pointer duration-150 transition-all ease-in">
            {theme ? (
              <MdDarkMode onClick={themeHandler} className="text-3xl" />
            ) : (
              <MdOutlineDarkMode onClick={themeHandler} className="text-3xl" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
