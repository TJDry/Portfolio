import React from "react";
import { SocialsMinimal } from "../Socials/socials";
import styles from './footerStyle.module.scss'
const Footer = (props) => {
  return (
   <div className={styles.footContainer}>
    <div><h4>Jayden Dry</h4></div>
        <SocialsMinimal />
    </div>
  );
};
export default Footer;