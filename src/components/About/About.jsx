import React from 'react';
import styles from './aboutUs.module.scss'

export default function AboutUs(text){
    return(
    <div className={styles.gridContainer}>
        <div className={styles.textContainer}>
            <div>
                <h2>{text.heading}</h2>
            </div>
            <div>
                <p>{text.content}</p>
            </div>
        </div>
    <div></div>
    </div>
    )
}

export function Heading(text){
        return(
        <div className={`${styles.borderSolo}`}>
            <h4 className={styles.headingSolo} style={{color: `${text.brandColour}`}}>{text.heading}</h4>
        </div>
        )
}