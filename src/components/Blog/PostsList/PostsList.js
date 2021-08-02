import React from "react";
import PostPreview from "../PostPreview/PostPreview";
import Pagination from "../Pagination/Pagination";

export default function PostsList({ posts, page, totalPages }) {
  return (
    <>
      {posts.map(({ node: post }) => (
        <PostPreview key={post.id} {...post} />
      ))}
      <Pagination page={page} totalPages={totalPages} />
    </>
  );
}
