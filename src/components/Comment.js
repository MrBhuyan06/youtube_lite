import React from "react";

const Comment = ({ text, name }) => {
  return (
    <div className="flex shadow-sm p-2 rounded-lg my-2">
      <img
        className="w-12 h-12 bg-red-300"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
