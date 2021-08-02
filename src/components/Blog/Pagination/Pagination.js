import React from "react";
import { Link } from "gatsby";
import { blogPrefixPath } from "../../../blog.config";
import * as styles from "./styles.module.css";

export default function Pagination({ page, totalPages }) {
  const prevUrl = `${blogPrefixPath}/${page + 1}`;
  const nextPage = page + 1;
  const nextUrl = `${blogPrefixPath}/${nextPage > 1 ? nextPage : ""}`;
  return (
    <nav className={styles.wrapper}>
      {totalPages !== page && <Link to={prevUrl}>Previous posts</Link>}
      {page > 1 && <Link to={nextUrl}>Next posts</Link>}
    </nav>
  );
}
