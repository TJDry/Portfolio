import React from "react";
import './heroStyle.scss';
import { Link } from 'react-router-dom';
import Socials from "../social/socials";
import Navigation from "../Navigation/navigation";
import Hexagon from "../Hexagons/hexagon";

export default function Hero(props) {
  return (
   <div className="hero-container">
    <Hexagon />
    <Socials />
    <Navigation />
    <Link to="/"><img src={require("../../assets/images/BRANDMARK/BrandMarkFullColour.png")} width="48" className="hero-image" alt="Jayden Dry"></img></Link>
    <h1>{props.heading}</h1><h1 className="lineTwo">{props.headingLineTwo}</h1>
    <h1>{props.header}</h1><h2>{props.role}</h2>
    <div className="backgroundOverlay">
      <img className="backgroundImage" src={props.bgImg} alt="background"></img>
    </div>
   </div>
  );
}