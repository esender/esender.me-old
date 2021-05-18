import React from "react";
import classnames from "classnames";
import * as styles from "./styles.module.css";

export default function socialicon({ icon, className }) {
  return (
    <svg
      xmlnsxlink="http://www.w3.org/1999/xlink"
      className={classnames(styles.socialIcon, className)}
    >
      <title>{icon}</title>
      <use xlinkHref={`/images/social-icons.svg#${icon}`}></use>
    </svg>
  );
}
