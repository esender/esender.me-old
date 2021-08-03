import React from "react";
import PostPreview from "../PostPreview/PostPreview";
import Pagination from "../Pagination/Pagination";
import * as styles from "./styles.module.css";

function groupByYears(posts) {
  return posts.reduce(
    (sum, post) => {
      const year = post.node.fields.year;
      const lastGroup = sum[sum.length - 1];
      if (lastGroup.year === year) {
        lastGroup.posts.push(post);
      } else {
        sum.push({ year, posts: [post] });
      }

      return sum;
    },
    [{ year: posts[0].node.fields.year, posts: [] }]
  );
}

export default function PostsList({ posts, page, totalPages }) {
  return (
    <>
      {groupByYears(posts).map(({ year, posts }) => {
        return (
          <div>
            <h2 className={styles.year}>{year}</h2>
            {posts.map(({ node: post }) => (
              <PostPreview key={post.id} {...post} />
            ))}
          </div>
        );
      })}
      <Pagination page={page} totalPages={totalPages} />
    </>
  );
}
