import React from "react";
import { Link } from "gatsby";
import toKebabCase from "../../../utils/to-kebab-case";
import * as styles from "./styles.module.css";

export default function Tag({ tag }) {
  return (
    <Link to={`/blog/tags/${toKebabCase(tag)}`} className={styles.tag}>
      {tag}
    </Link>
  );
}
