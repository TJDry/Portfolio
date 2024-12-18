import React from "react";
import { SocialsMinimal } from "../Socials/socials";
import styles from './footerStyle.module.scss'
import { GradientCircle } from "../Button/button";
const Footer = (props) => {
  return (
   <div className={styles.footContainer}>
    <div className={styles.flexFoot}>
        <div>
        Jayden Dry 2024<br/>
        </div>  
        <SocialsMinimal />
      </div>
    </div>
  );
};
export default Footer;