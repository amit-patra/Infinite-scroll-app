import React, { memo } from "react";

const PostCard = memo(({ post }) => {
  return (
    <div className="card">
      {/* <img src={post.thumbnailUrl} alt={post.title} /> */}
      <img
        src={`https://picsum.photos/300/200?random=${post.id}`}
        alt={post.title}
        onError={(e) => {
          e.target.src = "https://picsum.photos/300/200";
        }}
      />
      <p>{post.title}</p>
    </div>
  );
});

export default PostCard;
