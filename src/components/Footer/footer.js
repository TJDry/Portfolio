import React from "react";
import { SocialsMinimal } from "../social/socials";
import './footerStyle.scss'
const Footer = (props) => {
  return (
   <div className="foot-container"  style={{backgroundColor: `${props.colorFlat}`}}>
    <div className="flexFoot">
      <div className="textArea">
        <h1>Have an idea?</h1><h3>Send Me a Message</h3><a href="mailto:jay@jaydendry.com"><h1>jay@jaydendry.com</h1></a>
      </div>
        <SocialsMinimal />
    </div>
   </div>
  );
};
export default Footer;