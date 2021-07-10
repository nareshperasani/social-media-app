import React from "react";
import "./Feed.css";
import Share from "../../components/share/Share.js";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
