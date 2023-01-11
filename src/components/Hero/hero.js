import React from "react";
import styles from './heroStyle.module.scss';
import Socials, { DownArrow, ScrollArrow } from "../social/socials";
export default function Hero(props) {
  return (
  <div className={styles.heroContainer}>
    <div className={styles.textContainer}>
      <h1 style={{color: `${props.colorFlat}`}}>{props.heading}</h1><br/><h1 className={styles.lineTwo}>{props.headingLineTwo}</h1>
    </div>
    <div className={styles.scrollContainer}>
      <ScrollArrow />
    </div>
  </div>
  );
}