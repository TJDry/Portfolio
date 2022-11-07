import React from "react";
import './hexagonStyle.scss';

export default function Hexagon(props){
    return(
    <div class="hex-main" style={{top:`${props.top}`,right:`${props.right}`}}>
        <div class="hex-container">
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
