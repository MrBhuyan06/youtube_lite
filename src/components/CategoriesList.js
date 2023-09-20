import React from "react";
import ButtonList from "./ButtonList.js";
import { categorieslist } from "../config/constant.js";

const CategoriesList = () => {
  return (
    <div className=" flex gap-5">
      {categorieslist.map((categories, index) => {
        return <ButtonList key={index} info={categories} />;
      })}
    </div>
  );
};

export default CategoriesList;
