import React from "react";
import { Link } from "react-router-dom";
import Hexagon from "../Hexagons/hexagon";
import './footerStyle.scss'
const Footer = () => {
  return (
   <div className="foot-container">
    <div className="flexFoot">
      <div className="textArea">
        <h1>Have an idea?</h1><h3>Send Me a Message</h3>
      </div>
      <div className="messageMe">
        <ul>
          <li>
            <Link to="/">Instagram<div className="right">→</div></Link>
          </li>
          <li>
            <Link to="/">Behance<div className="right">→</div></Link>
          </li>
          <li>
            <Link to="/">Github<div className="right">→</div></Link>
          </li>
          <li>
            <Link to="/">Linkedin<div className="right">→</div></Link>
          </li>
        </ul>
      </div>
    </div>
   </div>
  );
};
export default Footer;