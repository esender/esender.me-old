import React from "react";
import Tag from "../Tag/Tag";
import * as styles from "./styles.module.css";
import classnames from "classnames";

export default function TagsList({ tags, className }) {
  return (
    <ul itemProp="keywords" className={classnames(styles.tags, className)}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tagItem}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
}
