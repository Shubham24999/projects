import React from "react";
import "./post.css";
const Post = ({ id, title, body }) => {
  return (
    <div className="post">
      <h1>
        {id}--{title}
      </h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
