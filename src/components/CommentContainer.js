import React from "react";
import { commentsData } from "../config/constant.js";
import CommentList from "./CommentList.js";
const CommentContainer = () => {
  return (
    <div>
      <CommentList comment={commentsData} />
    </div>
  );
};

export default CommentContainer;
