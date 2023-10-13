import React from 'react';
import styles from './imgContainerStyle.module.scss'

export default function ImgContainer(props){
    if (props.image3 !== undefined) {
        return(       
        <div className = {`${styles.imgContainer} ${styles.flex} ${styles[props.class]}`}>
            <img src={process.env.PUBLIC_URL + `/images/${props.projectTitle}/${props.image1}`} alt="imageGoesHere"></img>
            <img src={process.env.PUBLIC_URL + `/images/${props.projectTitle}/${props.image2}`} alt="imageGoesHere"></img>
            <img src={process.env.PUBLIC_URL + `/images/${props.projectTitle}/${props.image3}`} alt="imageGoesHere"></img>
        </div>
        )
    } else if (props.image2 !== undefined) {
        return(
            <div className = {`${styles.imgContainer} ${styles.flex} ${styles[props.class]}`}>
                <img src={process.env.PUBLIC_URL + `/images/${props.projectTitle}/${props.image1}`} alt="imageGoesHere"></img>
                <img src={process.env.PUBLIC_URL + `/images/${props.projectTitle}/${props.image2}`} alt="imageGoesHere"></img>
            </div>
        )
    } else if (props.image1 !== undefined) {
        return(
            <div className = {`${styles.imgContainer} ${styles.flex} ${styles[props.class]}`}>
                <img src={process.env.PUBLIC_URL + `/images/${props.projectTitle}/${props.image1}`} alt="imageGoesHere"></img>
            </div> 
        )
    } else {
            return('')
    }
}