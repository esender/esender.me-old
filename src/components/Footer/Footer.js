import React from "react";
import * as styles from "./styles.module.css";
import SocialIcon from "../SocialIcon/SocialIcon";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK, TWITTER_LINK } from "../../site.config";

const Icon = ({ href, icon }) => (
  <a href={href}>
    <SocialIcon icon={icon} className={styles.icon} />
  </a>
)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <div className={styles.or}>or</div>
      <ul className={styles.socialLinks}>
        <li className={styles.socialLinksItem}>
          <Icon href={LINKEDIN_LINK} icon="linkedin" />
        </li>
        <li className={styles.socialLinksItem}>
          <Icon href={TELEGRAM_LINK} icon="telegram" />
        </li>
        <li className={styles.socialLinksItem}>
          <Icon href={TWITTER_LINK} icon="twitter" />
        </li>
        <li className={styles.socialLinksItem}>
          <Icon href={GITHUB_LINK} icon="github" />
        </li>
      </ul>
    </footer>
  );
}
