import React from 'react';
import styles from './aboutUs.module.scss'

export default function AboutUs(text){
    return(
    <div className={styles.textContainer}>
        <h4>Hi, I'm Jay</h4>
        <p> I have been working as a project and design manager for the past 2 years. During this time, I have been working closely with teams of international app developers to create digital solutions for the company. I am passionate about human-centred design & enjoy challenging myself with both front end & backend development and am always eager to learn something new. I thoroughly enjoy working collaboratively in a team environment and also work effectively independently. </p>
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