import React from "react";
import * as styles from "./styles.module.css";
import icons from  "../../images/social-icons.svg";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK, TWITTER_LINK } from "../../config";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <div className={styles.or}>or</div>
      <ul className={styles.socialLinks}>
        <li className={styles.socialLinksItem}>
          <a href={LINKEDIN_LINK}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={styles.socialIcon}
            >
              <use xlinkHref={`${icons}#linkedin`}></use>
            </svg>
          </a>
        </li>
        <li className={styles.socialLinksItem}>
          <a href={TELEGRAM_LINK}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={styles.socialIcon}
            >
              <use xlinkHref={`${icons}#telegram`}></use>
            </svg>
          </a>
        </li>
        <li className={styles.socialLinksItem}>
          <a href={TWITTER_LINK}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={styles.socialIcon}
            >
              <use xlinkHref={`${icons}#twitter`}></use>
            </svg>
          </a>
        </li>
        <li className={styles.socialLinksItem}>
          <a href={GITHUB_LINK}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={styles.socialIcon}
            >
              <use xlinkHref={`${icons}#github`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
