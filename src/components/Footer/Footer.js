import React from "react";
import "./styles.css";
import icons from  "../../images/social-icons.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:marat@esender.me">marat@esender.me</a>
      <div className="or">or</div>
      <ul className="social-links">
        <li className="social-links-item">
          <a href="https://www.linkedin.com/in/esender/">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="social-icon"
            >
              <use xlinkHref={`${icons}#linkedin`}></use>
            </svg>
          </a>
        </li>
        <li className="social-links-item">
          <a href="https://t.me/esender">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="social-icon"
            >
              <use xlinkHref={`${icons}#telegram`}></use>
            </svg>
          </a>
        </li>
        <li className="social-links-item">
          <a href="https://twitter.com/esender_">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="social-icon"
            >
              <use xlinkHref={`${icons}#twitter`}></use>
            </svg>
          </a>
        </li>
        <li className="social-links-item">
          <a href="https://github.com/esender">
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
