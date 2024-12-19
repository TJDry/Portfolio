import React from "react";
import Socials from "../Socials/socials";
import styles from './footerStyle.module.scss'
const Footer = (props) => {
  return (
   <div className={styles.footContainer}>
    <div className={styles.flexFoot}>
        <div>
        <h2>Find me on</h2>
        <h4>© Jayden Dry 2024</h4><br/>
        </div>  
        <Socials />
      </div>
    </div>
  );
};
export default Footer;