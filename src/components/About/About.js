import React from 'react';
import styles from './aboutUs.module.scss'

export default function AboutUs(text){
    return(
    <div className={styles.textContainer}>
        <p>{text.content}</p>
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