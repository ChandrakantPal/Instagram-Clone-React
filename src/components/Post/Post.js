import React from "react";
import { Avatar } from "@material-ui/core";

const post = ({ username, caption, imageUrl }) => {
  return (
    <article className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt={caption} />
      <h4 className="post__caption">
        <strong>{username}</strong> {caption}
      </h4>
    </article>
  );
};

export default post;
