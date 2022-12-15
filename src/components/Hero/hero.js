import React from "react";
import './heroStyle.scss';
import Socials, { DownArrow } from "../social/socials";
import Hexagon from "../Hexagons/hexagon";
import Navigation from "../Navigation/navigation";

export default function Hero(props) {
  return (
   <div className="hero-container">
    <Hexagon color={props.color}/>  
    <Navigation />
    <h1>{props.heading}</h1><h1 className="lineTwo" style={{color: `${props.colorFlat}`}}>{props.headingLineTwo}</h1>
    <Socials />
    <DownArrow  buttonText="VIEW MY WORK"/>
   </div>
  );
}