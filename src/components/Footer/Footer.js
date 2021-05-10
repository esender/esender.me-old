import React from "react";
import "./styles.css";
import icons from  "../../images/social-icons.svg";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK, TELEGRAM_LINK, TWITTER_LINK } from "../../config";

export default function Footer() {
  return (
    <footer className="footer">
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <div className="or">or</div>
      <ul className="social-links">
        <li className="social-links-item">
          <a href={LINKEDIN_LINK}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="social-icon"
            >
              <use xlinkHref={`${icons}#linkedin`}></use>
            </svg>
          </a>
        </li>
        <li className="social-links-item">
          <a href={TELEGRAM_LINK}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="social-icon"
            >
              <use xlinkHref={`${icons}#telegram`}></use>
            </svg>
          </a>
        </li>
        <li className="social-links-item">
          <a href={TWITTER_LINK}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="social-icon"
            >
              <use xlinkHref={`${icons}#twitter`}></use>
            </svg>
          </a>
        </li>
        <li className="social-links-item">
          <a href={GITHUB_LINK}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="social-icon"
            >
              <use xlinkHref={`${icons}#github`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
