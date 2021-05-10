import React from "react";
import * as styles from "./styles.module.css";

export default function ResumeJob({
  title,
  position,
  stack,
  period,
  location,
  description,
  points
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.headline}>{title}</h3>
        <span className={styles.position}>{position}</span>
        <span className={styles.graySmall}>{stack}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.workingDates}>{period}</span>
        <span className={styles.location}>{location}</span>
      </div>
      <div className={styles.description}>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
        <br />
        <ul className={styles.list}>
          {points && points.map(point => (<li>{point}</li>))}
        </ul>
      </div>
    </div>
  );
}
