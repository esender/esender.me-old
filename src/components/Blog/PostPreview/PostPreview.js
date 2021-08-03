import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.css";
import Tag from "../Tag/Tag";
import TagsList from "../TagsList/TagsList";

export default function PostPreview({
  fields: { slug },
  frontmatter: { title, date, description, tags },
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
        <small itemProp="datePublished">{date}</small>
      </header>
      <TagsList tags={tags} />
      <div itemProp="description">{description}</div>
    </article>
  );
}
