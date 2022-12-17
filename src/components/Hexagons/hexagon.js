import React from "react";
import styles from './hexagonStyle.module.scss';
// import { useRef,useLayoutEffect } from "react";
// import { gsap } from "gsap/all";

export default function Hexagon(props){
    return(
        <div className= {styles.hexMain} style={{top:`${props.top}`,right:`${props.right}`,zIndex:`${props.zIndex}`}}>
            <div className={styles.hexContainer}>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>            
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
                <div style={{background:`${props.color}`}}></div>
            </div>
        </div>
    )
}
