import React from 'react';
import styles from './aboutUs.module.scss'

export default function AboutUs(text){
    return(
    <div className={styles.gridContainer}>
    <div></div>
        <div className={styles.textContainer}>
            <div><h4>About me</h4></div>
            <div>
                <h3>{text.heading}</h3>
            </div>
            <div>
                <p>{text.content}</p>
            </div>
        </div>
    </div>
    )
}

export function Heading(text){
        return(
        <div className={`${styles.borderSolo}`}>
            <h2 className={styles.headingSolo} style={{color: `${text.brandColour}`}}>{text.heading}</h2>
        </div>
        )
}