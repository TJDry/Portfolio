import React from 'react';
import styles from './imgContainerStyle.module.scss'

export default function ImgContainer(props){
    if (props.image3 !== undefined) {
        return(       
        <div className = {`${styles.imgContainer} ${styles.flex} ${styles[props.class]}`}>
            
            <div className={styles.imgBorder}><img src={`/images/${props.projectTitle}/${props.image1}`} alt="imageGoesHere"></img></div>
            <div className={styles.imgBorder}><img src={`/images/${props.projectTitle}/${props.image2}`} alt="imageGoesHere"></img></div>
            <div className={styles.imgBorder}><img src={`/images/${props.projectTitle}/${props.image3}`} alt="imageGoesHere"></img></div>
        </div>
        )
    } else if (props.image2 !== undefined) {
        return(
            <div className = {`${styles.imgContainer} ${styles.flex} ${styles[props.class]}`}>
                <div className={styles.imgBorder}>
                    <img src={`/images/${props.projectTitle}/${props.image1}`} alt="imageGoesHere"></img>
                </div>
                <div className={styles.imgBorder}>
                    <img src={`/images/${props.projectTitle}/${props.image2}`} alt="imageGoesHere"></img>
                </div>
            </div>
        )
    } else if (props.image1 !== undefined) {
        return(
            <div className = {`${styles.imgContainer} ${styles.flex} ${styles[props.class]}`}>
                <div className={`${styles.imgSoloBorder} ${styles.imgBorder}`}>
                    <img src={`/images/${props.projectTitle}/${props.image1}`} alt="imageGoesHere"></img>
                </div>
            </div> 
        )
    } else {
            return('')
    }
}