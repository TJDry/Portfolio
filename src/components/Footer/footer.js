import React from "react";
import { SocialsMinimal } from "../Socials/socials";
import styles from './footerStyle.module.scss'
const Footer = (props) => {
  return (
   <div className={styles.footContainer}>
    <div className={styles.flexFoot}>
      <div className={styles.textArea}>
        <h2 style={{color: `${props.textColor}`}}>Have an idea?<br></br>Send Me a Message</h2><a href="mailto:jay@jaydendry.com"><h2>jay@jaydendry.com</h2></a>
      </div>
        <SocialsMinimal />
    </div>
   </div>
  );
};
export default Footer;