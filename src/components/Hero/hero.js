import React from "react";
import styles from './heroStyle.module.scss';
import Socials, { DownArrow } from "../social/socials";
export default function Hero(props) {
  return (
  <div className={styles.heroContainer}>
    <div className={styles.textContainer}>
      <h1>{props.heading}</h1><br/><h1 className={styles.lineTwo} style={{color: `${props.colorFlat}`}}>{props.headingLineTwo}</h1>
      <DownArrow  buttonText="VIEW MY WORK"/>
    </div>
    <Socials />
  </div>
  );
}