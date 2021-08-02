import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.css";

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')    // get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, '-')                // replace all spaces and low dash
    .toLowerCase()                          // convert to lower case
}

export default function PostPreview({
  fields: { slug },
  frontmatter: { title, date, description, tags }
}) {
  return (
    <article className={styles.post}>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      {date}
      <ul>
        {tags.map(tag => <li>#<Link to={`/blog/tags/${toKebabCase(tag)}`}>{tag}</Link></li>)}
      </ul>
      <div>
        {description}
      </div>
    </article>
  );
}
