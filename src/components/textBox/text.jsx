import React from 'react';
import styles from './textStyle.module.scss'

export default function TextBox(text){
    return(
    <div className={styles.textContainer}>
        <p>{text.content}</p>
    </div>
    )
}

export function Heading(text){
        return(
        <div>
            <h2 className={styles.headingSolo} style={{color: `${text.brandColour}`}}>{text.heading}</h2>
        </div>
        )
}