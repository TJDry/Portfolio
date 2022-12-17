import React from "react";
import { SocialsMinimal } from "../social/socials";
import styles from './footerStyle.module.scss'
const Footer = () => {
  return (
   <div className={styles.footContainer}>
    <div className={styles.flexFoot}>
      <div className={styles.textArea}>
        <h1>Have an idea?</h1><h3>Send Me a Message</h3><a href="mailto:jay@jaydendry.com"><h1>jay@jaydendry.com</h1></a>
      </div>
        <SocialsMinimal />
    </div>
   </div>
  );
};
export default Footer;