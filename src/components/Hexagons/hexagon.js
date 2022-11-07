import React from "react";
import './hexagonStyle.scss';
import { useRef,useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Hexagon(props){
    const el = useRef();
    const tl = useRef();
    
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline()
          .to(".hex-container div", {
            y: 300,
            duration: 2,
            from: "end",
            yoyo: true,
            ease: "power4.inOut",
            repeat: -1,
            stagger: {
                each: 0.3
            }
          })
      }, el);
      return () => ctx.revert();
    }, []);
    return(
    <div class="hex-main" style={{top:`${props.top}`,right:`${props.right}`}}>
        <div class="hex-container" ref={el}>
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
