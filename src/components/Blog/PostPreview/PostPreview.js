import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.css";

export default function PostPreview({
  fields: { slug },
  frontmatter: { title, date, description }
}) {
  return (
    <article className={styles.post}>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      {date}
      <div>
        {description}
      </div>
    </article>
  );
}
