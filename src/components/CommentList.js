import React, { useState } from "react";
import Comment from "./Comment.js";

const CommentList = ({ comment }) => {
  const [showComment, setShowComment] = useState(false);
  return (
    <div>
      {comment.map((com, i) => (
        <div key={i} onClick={() => setShowComment(true)}>
          <Comment {...com} />
          {showComment && (
            <div className="ml-20 border-l-2">
              <CommentList comment={com.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
