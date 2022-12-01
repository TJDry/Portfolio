import React from "react";
import './hexagonStyle.scss';
// import { useRef,useLayoutEffect } from "react";
// import { gsap } from "gsap/all";

export default function Hexagon(props){
    // const el = useRef();
    // const tl = useRef();
    
    // useLayoutEffect(() => {
    //   const ctx = gsap.context(() => {
    //     tl.current = gsap.timeline()
    //       .to(".hex-container div", {
    //         y: 450,
    //         duration: 1.5,
    //         yoyo: true,
    //         ease: "power4.inOut",
    //         repeat: -1,
    //         stagger: {
    //             each: 0.2
    //         }
    //       })
    //   }, el);
    //   return () => ctx.revert();
    // }, []);
    return(
    <div className="hex-main" style={{top:`${props.top}`,right:`${props.right}`,zIndex:`${props.zIndex}`}}>
        <div className="hex-container">
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
