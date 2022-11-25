import React from 'react';
import './imgContainerStyle.scss'

export default function ImgContainer(props){
    if (props.image3 !== undefined) {
        return(       
        <div className = {`imgContainer flex ${props.class}`}>
            <img src={process.env.PUBLIC_URL + `/images/${props.abrProject}/${props.image1}.png`} alt="imageGoesHere"></img>
            <img src={process.env.PUBLIC_URL + `/images/${props.abrProject}/${props.image2}.png`} alt="imageGoesHere"></img>
            <img src={process.env.PUBLIC_URL + `/images/${props.abrProject}/${props.image3}.png`} alt="imageGoesHere"></img>
        </div>
        )
    } else if (props.image2 !== undefined) {
        return(
            <div className = {`imgContainer flex ${props.class}`}>
                <img src={process.env.PUBLIC_URL + `/images/${props.abrProject}/${props.image1}.png`} alt="imageGoesHere"></img>
                <img src={process.env.PUBLIC_URL + `/images/${props.abrProject}/${props.image2}.png`} alt="imageGoesHere"></img>
            </div>
        )
    } else if (props.image1 !== undefined) {
        return(
            <div className = {`imgContainer flex ${props.class}`}>
                <img src={process.env.PUBLIC_URL + `/images/${props.abrProject}/${props.image1}.png`} alt="imageGoesHere"></img>
            </div> 
        )
    } else {
            return('')
    }
}