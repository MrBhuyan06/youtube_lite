import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
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
import { toggleMenu } from "../redux/appNavigation.js";
import { SEARCH_SUGGESTION_API } from "../config/constant.js";
import { cacheREsults } from "../redux/cacheData.js";

import { MdKeyboardVoice, MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const theme = useSelector((store) => store.themes.apptheme);
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cache = useSelector((store) => store.cache);
  console.log(cache);

  const dispatch = useDispatch();

  function themeHandler() {
    dispatch(changeTheme());
  }
  function handleToggleMenu() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    //getSearcData
    const id = setTimeout(() => {
      if (cache[searchText]) 
        setSuggestion(cache[searchText]);
      } else {
        getSearchData();
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [searchText]);

  async function getSearchData() {
    console.log("Api Call");
    const stream = await fetch(SEARCH_SUGGESTION_API + searchText);
    const data = await stream.json();
    dispatch(
      cacheREsults({
        [searchText]: [data[1]],
      })
    );
    setSuggestion(data[1]);
  }

  return (
    <header
      className={` fixed top-0 w-full z-10 flex items-center  shadow-lg h-20 ${
        theme ? "text-black bg-white " : "text-red-600 bg-primary"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2 ">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={handleToggleMenu}
          />
          <AiFillYoutube className="text-red-500 text-5xl" />
        </div>
        <div className="flex  w-full    items-center justify-center relative">
          <div className="flex w-full md:w-3/5 items-center justify-center relative">
            <input
              type="text"
              className={` p-2 w-full  text-white  outline-none focus:border-2 border-red-600 rounded-l-full 
              ${theme ? "bg-slate-300" : "bg-ligthbggray"}`}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onBlur={() => {
                setShowSuggestion(false);
              }}
              onFocus={() => {
                setShowSuggestion(true);
              }}
            />
            {showSuggestion && (
              <div className="absolute  rounded-md w-4/5 top-10 border-t border-red-500 ">
                <ul>
                  {suggestion.map((ele, i) => {
                    return (
                      <li
                        className={`py-2 border-b-2 rounded-r-md rounder-l-md px-2 border-red-600 ${
                          theme
                            ? "bg-slate-300 text-black"
                            : "bg-black text-white"
                        }`}
                      >
                        {ele}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <button className="bg-red-600 px-4 py-2 text-black rounded-r-full">
              <AiOutlineSearch className="text-2xl" />
            </button>
          </div>

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
      <Outlet />
    </header>
  );
};

export default Header;

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
