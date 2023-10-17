import React from 'react';
import styles from './textStyle.module.scss'

export default function TextBox(text){
    return(
    <div className={`${styles.borderContainer} ${text.contentB ? styles.hasContentB : ''}`} style={{ backgroundColor: `${text.brandColour}` }}>
    <h2>{text.heading}</h2>
    <div className={styles.textContainer}>
        <h3>{text.headerA}</h3>
        <p>{text.contentA}</p>
    </div>
    {text.contentB && (
        <div className={styles.textContainer}>
            <h3>{text.headerB}</h3>
            <p>{text.contentB}</p>
        </div>
    )}
</div>
);
}

export function Heading(text){
        return(
        <div className={`${styles.borderContainer} ${styles.borderSolo}`}>
            <h2 className={styles.headingSolo} style={{color: `${text.brandColour}`}}>{text.heading}</h2>
        </div>
        )
}