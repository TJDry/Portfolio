import React from 'react';
import styles from './textStyle.module.scss'

export default function TextBox(text){
    if (text.contentB !== undefined){
        return(
        <div className={styles.borderContainer}>
            <h2 style={{color: `${text.brandColour}`}}>{text.heading}</h2>
                <div className={styles.flex}>
                    <div className={styles.textContainer}><h3>{text.headerA}</h3><p>{text.contentA}</p></div>
                    <div className={styles.textContainer}><h3>{text.headerA}</h3><p>{text.contentB}</p></div>
                </div>
        </div>
        )
    } else if (text.contentB !== undefined) {
        return(
        <div className={`${styles.borderContainer}`} style={{backgroundColor: `${text.brandColour}`}}>
            <h2 style={{color: `${text.brandColour}`}}>{text.heading}</h2>
                <div className={styles.flex}>
                    <div className={styles.textContainer}><h3>{text.headerA}</h3><p style={{color: `${text.textColor}`}}>{text.contentA}</p></div>
                </div>
        </div>
        )
    } else {
        return('')
    }
}

export function Heading(text){
        return(
        <div className={`${styles.borderContainer} ${styles.borderSolo}`}>
            <h2 className={styles.headingSolo} style={{color: `${text.brandColour}`}}>{text.heading}</h2>
        </div>
        )
}