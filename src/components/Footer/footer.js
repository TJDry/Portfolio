import React from "react";
import { SocialsMinimal } from "../Socials/socials";
import styles from './footerStyle.module.scss'
import { GradientCircle } from "../Button/button";
const Footer = (props) => {
  return (
   <div className={styles.footContainer}>
    <div className={styles.flexFoot}>
      <div className={styles.textArea}>
        <h1 style={{color: `${props.textColor}`}}>Have an idea?<br></br>Send Me a Message</h1><a href="mailto:jay@jaydendry.com"><h1>jay@jaydendry.com</h1></a>
      </div>
        <SocialsMinimal />
      <div className={styles.centerCirclePosition} style={{background: `${props.gradientCircleColour}`}}>
        <GradientCircle/>
      </div>
    </div>
   </div>
  );
};
export default Footer;