import React from "react";
import TagsList from "../TagsList/TagsList";
import * as styles from "./styles.module.css";

export default function Post({ post }) {
  return (
    <article itemScope itemType="http://schema.org/Article">
      <header className={styles.header}>
        <h1 className={styles.headline}>{post.frontmatter.title}</h1>
        <section className={styles.details}>
          <time itemprop="published" datetime={post.frontmatter.ISODate}>
            {post.frontmatter.date}
          </time>{" "}
          &bull;{" "}
          <TagsList tags={post.frontmatter.tags} className={styles.tagsList} />
        </section>
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
