import React from "react";
import './projectheroStyle.scss';
import { Link } from 'react-router-dom';
import Socials, { DownArrow } from "../social/socials";
import Navigation from "../Navigation/navigation";
import Hexagon from "../Hexagons/hexagon";

export default function ProjectHero(props) {
  return (
   <div className="project-hero-container">
    <Hexagon top="-12.5%" right="-20%" color={props.color}/>
    <Socials />
    <DownArrow/>
    <Navigation />
    <Link to="/"><img src={require("../../assets/images/BRANDMARK/BrandMarkFullColour.png")} width="48" className="hero-image" alt="Jayden Dry"></img></Link>
    <h1>{props.heading}</h1><h1 className="lineTwo">{props.headingLineTwo}</h1>
    <div className="backgroundOverlay">
      <img className="backgroundImage" src={props.bgImg} alt="background"></img>
    </div>
   </div>
  );
}