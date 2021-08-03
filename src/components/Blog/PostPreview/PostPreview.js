import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.css";
import TagsList from "../TagsList/TagsList";

export default function PostPreview({
  fields: { slug },
  frontmatter: { title, date, description, tags, ISODate },
}) {
  return (
    <article
      className={styles.post}
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2 itemProp="headline">
          <Link to={slug} itemProp="url">
            {title}
          </Link>
        </h2>
        <section className={styles.details}>
          <time itemprop="published" datetime={ISODate}>
            {date}
          </time>{" "}
          &bull; <TagsList tags={tags} className={styles.tagsList} />
        </section>
      </header>
      <div itemProp="description">{description}</div>
    </article>
  );
}
