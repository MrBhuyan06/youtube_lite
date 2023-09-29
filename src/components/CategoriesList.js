import React, { useState } from "react";
import ButtonList from "./ButtonList.js";
import { categorieslist } from "../config/constant.js";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const [active, setActive] = useState("All");

  function handleClick(value) {
    console.log("income value", value);
    setActive(value);
  }
  console.log("render");
  return (
    <div className=" flex gap-5">
      {categorieslist.map((categories, index) => {
        return (
          <Link
            to={`/search/${categories}`}
            onClick={() => handleClick(categories)}
            className={` rounded-md ${
              categories === active
                ? "bg-ligthbggray border-2"
                : "bg-transparent border-2"
            }`}
            key={index}
          >
            <ButtonList info={categories} />
          </Link>
        );
      })}
    </div>
  );
};

export default CategoriesList;
