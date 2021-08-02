import React from "react";
import { Link } from "gatsby";
import toKebabCase from "../../../utils/to-kebab-case";
import * as styles from "./styles.module.css";

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
      <ul itemProp="keywords">
        {tags.map((tag) => (
          <li>
            #<Link to={`/blog/tags/${toKebabCase(tag)}`}>{tag}</Link>
          </li>
        ))}
      </ul>
      <div itemProp="description">{description}</div>
    </article>
  );
}
