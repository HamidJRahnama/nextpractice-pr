import Link from "next/link";
import React from "react";

const posts = () => {
  const posts = [
    { id: 1, title: "Post 1", url: "post-1" },
    { id: 2, title: "Post 2", url: "post-2" },
    { id: 3, title: "Post 3", url: "post-3" },
    { id: 4, title: "Post 4", url: "post-4" },
    { id: 5, title: "Post 5", url: "post-5" },
  ];
  const postLink = posts.map((post) => {
    return (
      <li>
        <Link href={`/posts/${post.url}`}>{post.title}</Link>
      </li>
    );
  });
  return (
    <div>
      <h1>posts</h1>
      <hr />
      <ul>{postLink}</ul>
    </div>
  );
};

export default posts;
