import React from 'react';
import './imgContainerStyle.scss'

export default function images(images){
    return(
        <div className="img-container">
            <img src={images.imgCont} alt="imageGoesHere"></img>
        </div>
    )
}
export function Dualimages(images){
    return(
        <div className="img-container flex">
            <img src={images.imgCont} style={{}} alt="imageGoesHere"></img>
            <img src={images.imgCont2} style={{}} alt="imageGoesHere"></img>
        </div>
    )
}

export function Triimages(images){
    return(
        <div className="img-container flex">
            <img src={images.imgCont} style={{}} alt="imageGoesHere"></img>
            <img src={images.imgCont2} style={{}} alt="imageGoesHere"></img>
            <img src={images.imgCont3} style={{}} alt="imageGoesHere"></img>
        </div>
    )
}
export function TriimagesPhone(images){
    return(
        <div className="img-container flex phone">
            <img src={images.imgCont} style={{'width':'30%'}} alt="imageGoesHere"></img>
            <img src={images.imgCont2} style={{'width':'30%'}} alt="imageGoesHere"></img>
            <img src={images.imgCont3} style={{'width':'30%'}} alt="imageGoesHere"></img>
        </div>
    )
}
export function DualimagesPhone(images){
    return(
        <div className="img-container flex phone">
            <img src={images.imgCont} style={{'width':'30%'}} alt="imageGoesHere"></img>
            <img src={images.imgCont2} style={{'width':'30%'}} alt="imageGoesHere"></img>
        </div>
    )
}